#!/usr/bin/env node
/**
 * Internal Linking Optimizer for Tesla DIY Repair Blog
 * 
 * Scans all articles, finds orphans (0-1 internal links), and adds
 * "Related Guides" sections with contextually relevant links.
 * 
 * Usage:
 *   node scripts/internal-links.js           # Dry run (report only)
 *   node scripts/internal-links.js --apply   # Apply changes
 *   node scripts/internal-links.js --all     # Add to ALL articles missing Related Guides
 */

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'posts');
const MIN_RELATED = 4;
const MAX_RELATED = 7;
const APPLY = process.argv.includes('--apply');
const ALL_MODE = process.argv.includes('--all');

// Topic keyword clusters for matching
const TOPIC_CLUSTERS = {
  brakes: ['brake', 'caliper', 'rotor', 'pad', 'bleed', 'epb', 'parking brake'],
  suspension: ['suspension', 'shock', 'strut', 'spring', 'coil', 'sway bar', 'control arm', 'damper', 'lowering'],
  drivetrain: ['drive unit', 'halfshaft', 'half-shaft', 'axle', 'gear oil', 'clicking', 'cv joint', 'motor'],
  charging: ['charging', 'charger', 'supercharger', 'wall connector', 'mobile connector', 'charge port'],
  cooling: ['coolant', 'superbottle', 'thermal', 'heat pump', 'cooling', 'radiator', 'valve'],
  electrical: ['12v battery', 'battery', 'fuse', 'wiring', 'harness', 'module', 'mcu'],
  steering: ['steering', 'tie rod', 'alignment', 'power steering', 'rack', 'wheel bearing'],
  exterior: ['bumper', 'paint', 'dent', 'wrap', 'ppf', 'ceramic', 'panel gap', 'mirror', 'headlight', 'tail light'],
  interior: ['seat', 'screen', 'usb', 'wireless charger', 'speaker', 'audio', 'ambient', 'glove box'],
  software: ['software', 'update', 'autopilot', 'fsd', 'camera', 'calibration', 'reboot', 'screen'],
  tires: ['tire', 'tyre', 'tpms', 'wheel', 'rotation', 'pressure', 'aero cap', 'curb rash'],
  hvac: ['ac', 'heater', 'hvac', 'climate', 'cabin air', 'filter', 'defrost'],
  doors: ['door', 'latch', 'handle', 'window', 'regulator', 'falcon wing', 'seal'],
  towing: ['tow', 'towing', 'hitch', 'trailer'],
  maintenance: ['maintenance', 'schedule', 'service', 'inspection', 'fluid'],
  safety: ['emergency', 'jack', 'lift', 'service mode'],
  ownership: ['cost', 'buying', 'parts', 'europe', 'repair cost', 'warranty'],
};

function parseArticle(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const slug = path.basename(filePath, '.md');
  
  // Parse frontmatter (handle \r\n and \n)
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return null;
  
  const fm = fmMatch[1];
  const title = (fm.match(/^title:\s*"(.+)"/m) || [])[1] || slug;
  const category = (fm.match(/^category:\s*"(.+)"/m) || [])[1] || '';
  const difficulty = (fm.match(/^difficulty:\s*"(.+)"/m) || [])[1] || '';
  const models = (fm.match(/^models:\s*"(.+)"/m) || [])[1] || '';
  
  // Count existing internal links
  const internalLinks = (content.match(/\[.*?\]\(\/posts\//g) || []).length;
  
  // Check if has Related Guides section
  const hasRelatedSection = /## Related (Guides|Articles|Posts)/i.test(content);
  
  // Extract topics (from title + description + category only, not body — avoids false matches)
  const description = (fm.match(/^description:\s*"(.+)"/m) || [])[1] || '';
  const topics = new Set();
  const lowerMeta = (title + ' ' + description + ' ' + category).toLowerCase();
  for (const [topic, keywords] of Object.entries(TOPIC_CLUSTERS)) {
    for (const kw of keywords) {
      if (lowerMeta.includes(kw)) {
        topics.add(topic);
        break;
      }
    }
  }
  
  return {
    slug,
    title,
    category,
    difficulty,
    models,
    internalLinks,
    hasRelatedSection,
    topics: [...topics],
    filePath,
    content,
  };
}

function computeRelevance(article, candidate) {
  if (article.slug === candidate.slug) return 0;
  
  let score = 0;
  
  // Shared topics (strongest signal)
  const sharedTopics = article.topics.filter(t => candidate.topics.includes(t));
  score += sharedTopics.length * 3;
  
  // Same category
  if (article.category && candidate.category && 
      article.category.toLowerCase() === candidate.category.toLowerCase()) {
    score += 2;
  }
  
  // Similar models
  if (article.models && candidate.models) {
    const aModels = article.models.toLowerCase();
    const cModels = candidate.models.toLowerCase();
    if (aModels.includes('all') || cModels.includes('all') ||
        aModels.split(',').some(m => cModels.includes(m.trim()))) {
      score += 1;
    }
  }
  
  // Title word overlap
  const aWords = new Set(article.title.toLowerCase().split(/\W+/).filter(w => w.length > 3));
  const cWords = new Set(candidate.title.toLowerCase().split(/\W+/).filter(w => w.length > 3));
  const titleOverlap = [...aWords].filter(w => cWords.has(w) && !['tesla', 'model', 'guide', 'complete', 'your'].includes(w));
  score += titleOverlap.length * 0.5;
  
  return score;
}

function generateLinkDescription(candidate) {
  // Create a short contextual description
  const parts = [];
  if (candidate.difficulty) parts.push(candidate.difficulty);
  if (candidate.models && candidate.models !== 'All Models') parts.push(candidate.models);
  if (candidate.category) parts.push(candidate.category);
  return parts.join(' · ') || 'Related guide';
}

function addRelatedSection(article, allArticles) {
  // Score all candidates
  const scored = allArticles
    .map(c => ({ article: c, score: computeRelevance(article, c) }))
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RELATED);
  
  if (scored.length < MIN_RELATED) {
    // If not enough related, pad with same-category articles
    const existing = new Set(scored.map(s => s.article.slug));
    const padding = allArticles
      .filter(c => c.slug !== article.slug && !existing.has(c.slug))
      .slice(0, MIN_RELATED - scored.length);
    for (const p of padding) {
      scored.push({ article: p, score: 0 });
    }
  }
  
  const links = scored.slice(0, MAX_RELATED).map(s => {
    const desc = generateLinkDescription(s.article);
    return `- [${s.article.title}](/posts/${s.article.slug}/) — ${desc}`;
  });
  
  const section = `\n\n## Related Guides\n\n${links.join('\n')}\n`;
  
  // Insert before the last line if it's just whitespace, or append
  let newContent = article.content.trimEnd() + section;
  
  return newContent;
}

// Main
console.log('🔗 Tesla Blog Internal Linking Optimizer\n');
console.log(`Mode: ${APPLY ? '✅ APPLY' : '🔍 DRY RUN'}`);
console.log(`Scope: ${ALL_MODE ? 'All articles without Related Guides' : 'Orphans only (0-1 links)'}\n`);

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
const articles = files.map(f => parseArticle(path.join(POSTS_DIR, f))).filter(Boolean);

console.log(`📊 Total articles: ${articles.length}`);

// Stats
const orphans = articles.filter(a => a.internalLinks <= 1);
const noRelated = articles.filter(a => !a.hasRelatedSection);
const targets = ALL_MODE ? noRelated : orphans.filter(a => !a.hasRelatedSection);

console.log(`🔗 Articles with 0-1 internal links: ${orphans.length}`);
console.log(`📝 Articles without Related Guides section: ${noRelated.length}`);
console.log(`🎯 Targets for this run: ${targets.length}\n`);

// Link distribution stats
const linkCounts = {};
articles.forEach(a => {
  const bucket = a.internalLinks > 10 ? '10+' : String(a.internalLinks);
  linkCounts[bucket] = (linkCounts[bucket] || 0) + 1;
});
console.log('Link distribution:');
Object.entries(linkCounts).sort((a, b) => {
  const av = a[0] === '10+' ? 99 : parseInt(a[0]);
  const bv = b[0] === '10+' ? 99 : parseInt(b[0]);
  return av - bv;
}).forEach(([count, num]) => {
  console.log(`  ${count} links: ${num} articles`);
});
console.log('');

// Process targets
let modified = 0;
for (const article of targets) {
  const newContent = addRelatedSection(article, articles);
  const addedLinks = (newContent.match(/## Related Guides[\s\S]*$/)?.[0].match(/\[.*?\]\(/g) || []).length;
  
  console.log(`📝 ${article.slug}`);
  console.log(`   Current links: ${article.internalLinks} | Topics: ${article.topics.join(', ') || 'none'}`);
  console.log(`   Adding ${addedLinks} related links`);
  
  // Show the links that would be added
  const relatedMatch = newContent.match(/## Related Guides\n\n([\s\S]*?)$/);
  if (relatedMatch && process.argv.includes('--preview')) {
    console.log(relatedMatch[1].trim().split('\n').map(l => '   ' + l).join('\n'));
  }
  
  if (APPLY) {
    fs.writeFileSync(article.filePath, newContent, 'utf-8');
    modified++;
  }
}

console.log(`\n${APPLY ? `✅ Modified ${modified} articles` : `🔍 Would modify ${targets.length} articles (run with --apply to save)`}`);
