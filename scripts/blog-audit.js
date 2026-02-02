#!/usr/bin/env node
/**
 * Tesla DIY Repair Blog - Health Audit Script
 * 
 * Analyzes all blog posts for SEO completeness and improvement opportunities.
 * 
 * Usage: npm run audit
 * 
 * Checks:
 * - SEO metadata (title, description, keywords)
 * - FAQ schema presence (for rich snippets)
 * - Affiliate link opportunities
 * - Image alt text
 * - Internal linking
 * - Content quality indicators
 * 
 * Built by Kai during Nightly Build 🌙
 * 2026-02-02
 */

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'posts');
const SITE_URL = 'https://tesladiyrepair.com';

// SEO best practices
const SEO_RULES = {
  titleMinLength: 30,
  titleMaxLength: 60,
  descMinLength: 120,
  descMaxLength: 160,
  minWordCount: 800,
  idealWordCount: 1500,
  maxWordCount: 3000,
};

// Affiliate program keywords to check
const AFFILIATE_KEYWORDS = {
  'amazon.de': ['socket', 'wrench', 'tool', 'cleaner', 'filter', 'battery', 'charger', 'jack', 'stand'],
  'amazon.com': ['socket', 'wrench', 'tool', 'cleaner', 'filter', 'battery', 'charger', 'jack', 'stand'],
  'ifixit': ['toolkit', 'pry tool', 'screwdriver', 'spudger', 'opening tool'],
  'rrcarparts': ['oem', 'tesla parts', 'original', 'genuine'],
  'lectron': ['charger', 'adapter', 'charging', 'ev charger', 'j1772'],
};

// Categories for organization
const VALID_CATEGORIES = [
  'Electrical', 'HVAC', 'Interior', 'Exterior', 'Suspension', 
  'Brakes', 'Drivetrain', 'Software', 'Maintenance', 'Wheels'
];

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { frontmatter: {}, body: content };
  
  const frontmatterStr = match[1];
  const body = content.slice(match[0].length);
  
  const frontmatter = {};
  const lines = frontmatterStr.split(/\r?\n/);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip empty lines and array items (handled by parent key)
    if (!line.trim() || line.match(/^\s+-/)) continue;
    
    // Match key: value (with or without quotes)
    const kvMatch = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (kvMatch) {
      const key = kvMatch[1];
      let value = kvMatch[2].trim();
      
      // Remove surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Check if this is an array (value is empty, next lines are array items)
      if (value === '' && i + 1 < lines.length && lines[i + 1].match(/^\s+-/)) {
        const arrayItems = [];
        i++;
        while (i < lines.length && lines[i].match(/^\s+-/)) {
          arrayItems.push(lines[i].trim());
          i++;
        }
        i--; // Back up one since loop will increment
        frontmatter[key] = arrayItems;
      } else {
        frontmatter[key] = value;
      }
    }
  }
  
  return { frontmatter, body };
}

function countWords(text) {
  // Remove markdown formatting
  const cleaned = text
    .replace(/```[\s\S]*?```/g, '') // code blocks
    .replace(/`[^`]+`/g, '') // inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/[#*_~]/g, '') // formatting
    .replace(/<[^>]+>/g, '') // HTML tags
    .replace(/\|[^|]+\|/g, '') // table cells
    .trim();
  
  return cleaned.split(/\s+/).filter(w => w.length > 0).length;
}

function extractLinks(body) {
  const internalLinks = [];
  const externalLinks = [];
  const affiliateLinks = [];
  
  // Markdown links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  
  while ((match = linkRegex.exec(body)) !== null) {
    const [, text, url] = match;
    if (url.startsWith('/') || url.includes('tesladiyrepair.com')) {
      internalLinks.push({ text, url });
    } else if (url.includes('amazon.') || url.includes('sovrn.co') || url.includes('rrcarparts')) {
      affiliateLinks.push({ text, url });
    } else {
      externalLinks.push({ text, url });
    }
  }
  
  return { internalLinks, externalLinks, affiliateLinks };
}

function extractImages(body) {
  const images = [];
  const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  
  while ((match = imgRegex.exec(body)) !== null) {
    images.push({ alt: match[1], src: match[2] });
  }
  
  return images;
}

function checkAffiliateOpportunities(body, existingTools) {
  const opportunities = [];
  const bodyLower = body.toLowerCase();
  
  for (const [provider, keywords] of Object.entries(AFFILIATE_KEYWORDS)) {
    for (const keyword of keywords) {
      if (bodyLower.includes(keyword.toLowerCase())) {
        // Check if already has this affiliate type
        const hasAffiliate = existingTools.some(t => 
          t.toLowerCase().includes(provider) || 
          t.toLowerCase().includes(keyword)
        );
        if (!hasAffiliate) {
          opportunities.push({ provider, keyword, reason: `Mentions "${keyword}" but no ${provider} affiliate link` });
        }
      }
    }
  }
  
  return opportunities;
}

function analyzePost(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(content);
  const fileName = path.basename(filePath, '.md');
  
  const issues = [];
  const warnings = [];
  const suggestions = [];
  
  // === SEO Checks ===
  
  // Title
  const title = frontmatter.title || '';
  if (!title) {
    issues.push('Missing title');
  } else {
    if (title.length < SEO_RULES.titleMinLength) {
      warnings.push(`Title too short (${title.length} chars, min ${SEO_RULES.titleMinLength})`);
    }
    if (title.length > SEO_RULES.titleMaxLength) {
      warnings.push(`Title too long (${title.length} chars, max ${SEO_RULES.titleMaxLength})`);
    }
  }
  
  // Description
  const description = frontmatter.description || '';
  if (!description) {
    issues.push('Missing meta description');
  } else {
    if (description.length < SEO_RULES.descMinLength) {
      warnings.push(`Description too short (${description.length} chars, min ${SEO_RULES.descMinLength})`);
    }
    if (description.length > SEO_RULES.descMaxLength) {
      warnings.push(`Description too long (${description.length} chars, max ${SEO_RULES.descMaxLength})`);
    }
  }
  
  // Category
  if (!frontmatter.category) {
    warnings.push('Missing category');
  } else if (!VALID_CATEGORIES.includes(frontmatter.category)) {
    suggestions.push(`Category "${frontmatter.category}" not in standard list`);
  }
  
  // Required fields
  if (!frontmatter.difficulty) warnings.push('Missing difficulty level');
  if (!frontmatter.readTime) warnings.push('Missing read time');
  if (!frontmatter.models) warnings.push('Missing models field');
  
  // === Content Quality ===
  
  const wordCount = countWords(body);
  if (wordCount < SEO_RULES.minWordCount) {
    warnings.push(`Low word count (${wordCount}, min ${SEO_RULES.minWordCount})`);
  } else if (wordCount > SEO_RULES.maxWordCount) {
    suggestions.push(`Very long article (${wordCount} words) - consider splitting`);
  }
  
  // === FAQ Schema ===
  const hasFaq = frontmatter.faq && Array.isArray(frontmatter.faq) && frontmatter.faq.length > 0;
  if (!hasFaq) {
    suggestions.push('No FAQ schema - add faq array for Google rich snippets');
  }
  
  // === Links ===
  const { internalLinks, externalLinks, affiliateLinks } = extractLinks(body);
  
  if (internalLinks.length === 0) {
    suggestions.push('No internal links - consider linking to related guides');
  }
  
  // === Images ===
  const images = extractImages(body);
  const missingAlt = images.filter(img => !img.alt || img.alt.trim() === '');
  if (missingAlt.length > 0) {
    warnings.push(`${missingAlt.length} image(s) missing alt text`);
  }
  if (images.length === 0) {
    suggestions.push('No images - visual guides improve engagement');
  }
  
  // === Affiliate Opportunities ===
  const toolsArray = Array.isArray(frontmatter.tools) ? frontmatter.tools : 
                     (frontmatter.tools ? [frontmatter.tools] : []);
  const amazonUsArray = Array.isArray(frontmatter.amazonUs) ? frontmatter.amazonUs :
                        (frontmatter.amazonUs ? [frontmatter.amazonUs] : []);
  const toolsText = toolsArray.join(' ') + ' ' + amazonUsArray.join(' ');
  const affiliateOpps = checkAffiliateOpportunities(body, [toolsText]);
  if (affiliateOpps.length > 0) {
    affiliateOpps.forEach(opp => {
      suggestions.push(`Affiliate opportunity: ${opp.reason}`);
    });
  }
  
  // === Tools/Affiliate Links ===
  const hasTools = frontmatter.tools && (Array.isArray(frontmatter.tools) ? frontmatter.tools.length > 0 : true);
  const hasAmazonUs = frontmatter.amazonUs && (Array.isArray(frontmatter.amazonUs) ? frontmatter.amazonUs.length > 0 : true);
  
  if (!hasTools && !hasAmazonUs) {
    suggestions.push('No affiliate tools listed - potential revenue opportunity');
  } else if (hasTools && !hasAmazonUs) {
    suggestions.push('Has EU affiliate links but no US links (amazonUs)');
  }
  
  return {
    fileName,
    title: title.substring(0, 50) + (title.length > 50 ? '...' : ''),
    category: frontmatter.category || 'Uncategorized',
    wordCount,
    hasFaq,
    hasTools,
    hasAmazonUs,
    internalLinks: internalLinks.length,
    images: images.length,
    issues,
    warnings,
    suggestions,
    score: calculateScore(issues, warnings, suggestions, wordCount, hasFaq, hasTools)
  };
}

function calculateScore(issues, warnings, suggestions, wordCount, hasFaq, hasTools) {
  let score = 100;
  
  // Deductions
  score -= issues.length * 15;
  score -= warnings.length * 5;
  score -= suggestions.length * 2;
  
  // Bonuses
  if (wordCount >= SEO_RULES.idealWordCount) score += 5;
  if (hasFaq) score += 10;
  if (hasTools) score += 5;
  
  return Math.max(0, Math.min(100, score));
}

function generateReport(results) {
  console.log('\n' + '═'.repeat(70));
  console.log('  🔍 TESLA DIY REPAIR BLOG - HEALTH AUDIT REPORT');
  console.log('  📅 ' + new Date().toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  }));
  console.log('═'.repeat(70));
  
  // Summary stats
  const totalPosts = results.length;
  const avgScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / totalPosts);
  const withFaq = results.filter(r => r.hasFaq).length;
  const withTools = results.filter(r => r.hasTools).length;
  const totalWords = results.reduce((sum, r) => sum + r.wordCount, 0);
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);
  
  console.log('\n📊 SUMMARY');
  console.log('─'.repeat(40));
  console.log(`  Total Articles:     ${totalPosts}`);
  console.log(`  Average Score:      ${avgScore}/100`);
  console.log(`  Total Word Count:   ${totalWords.toLocaleString()}`);
  console.log(`  With FAQ Schema:    ${withFaq}/${totalPosts} (${Math.round(withFaq/totalPosts*100)}%)`);
  console.log(`  With Affiliate:     ${withTools}/${totalPosts} (${Math.round(withTools/totalPosts*100)}%)`);
  console.log(`  Total Issues:       ${totalIssues}`);
  console.log(`  Total Warnings:     ${totalWarnings}`);
  
  // Category breakdown
  const byCategory = {};
  results.forEach(r => {
    byCategory[r.category] = (byCategory[r.category] || 0) + 1;
  });
  
  console.log('\n📁 ARTICLES BY CATEGORY');
  console.log('─'.repeat(40));
  Object.entries(byCategory)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count}`);
    });
  
  // Articles needing attention (score < 70)
  const needsWork = results.filter(r => r.score < 70).sort((a, b) => a.score - b.score);
  
  if (needsWork.length > 0) {
    console.log('\n⚠️  ARTICLES NEEDING ATTENTION (Score < 70)');
    console.log('─'.repeat(70));
    needsWork.slice(0, 10).forEach(r => {
      console.log(`\n  📄 ${r.fileName}`);
      console.log(`     Score: ${r.score} | Words: ${r.wordCount} | Category: ${r.category}`);
      if (r.issues.length > 0) {
        r.issues.forEach(i => console.log(`     ❌ ${i}`));
      }
      if (r.warnings.length > 0) {
        r.warnings.forEach(w => console.log(`     ⚠️  ${w}`));
      }
    });
    if (needsWork.length > 10) {
      console.log(`\n  ... and ${needsWork.length - 10} more articles below threshold`);
    }
  }
  
  // Quick wins (easy improvements)
  const noFaq = results.filter(r => !r.hasFaq && r.score >= 70);
  const noUsLinks = results.filter(r => r.hasTools && !r.hasAmazonUs);
  
  console.log('\n💡 QUICK WINS');
  console.log('─'.repeat(70));
  
  console.log(`\n  Add FAQ Schema (${noFaq.length} articles):`);
  noFaq.slice(0, 5).forEach(r => {
    console.log(`    - ${r.fileName}`);
  });
  if (noFaq.length > 5) console.log(`    ... and ${noFaq.length - 5} more`);
  
  if (noUsLinks.length > 0) {
    console.log(`\n  Add US Affiliate Links (${noUsLinks.length} articles):`);
    noUsLinks.slice(0, 5).forEach(r => {
      console.log(`    - ${r.fileName}`);
    });
    if (noUsLinks.length > 5) console.log(`    ... and ${noUsLinks.length - 5} more`);
  }
  
  // Top performers
  const topPosts = results.filter(r => r.score >= 90).sort((a, b) => b.score - a.score);
  
  if (topPosts.length > 0) {
    console.log('\n⭐ TOP PERFORMERS (Score 90+)');
    console.log('─'.repeat(70));
    topPosts.slice(0, 5).forEach(r => {
      console.log(`  ${r.score}/100 - ${r.fileName}`);
    });
  }
  
  // Generate action items
  console.log('\n📋 PRIORITY ACTION ITEMS');
  console.log('─'.repeat(70));
  
  const actions = [];
  
  if (totalIssues > 0) {
    actions.push(`Fix ${totalIssues} critical issues (missing titles/descriptions)`);
  }
  if (noFaq.length > 10) {
    actions.push(`Add FAQ schema to ${noFaq.length} articles for Google rich snippets`);
  }
  if (noUsLinks.length > 5) {
    actions.push(`Add US affiliate links to ${noUsLinks.length} articles with EU-only links`);
  }
  const noImages = results.filter(r => r.images === 0).length;
  if (noImages > 5) {
    actions.push(`Add images to ${noImages} text-only articles`);
  }
  const lowWord = results.filter(r => r.wordCount < SEO_RULES.minWordCount).length;
  if (lowWord > 3) {
    actions.push(`Expand ${lowWord} thin articles (< ${SEO_RULES.minWordCount} words)`);
  }
  
  actions.forEach((action, i) => {
    console.log(`  ${i + 1}. ${action}`);
  });
  
  if (actions.length === 0) {
    console.log('  ✅ No critical actions needed - blog is in good health!');
  }
  
  console.log('\n' + '═'.repeat(70));
  console.log('  Audit complete! Run `npm run audit` anytime to check blog health.');
  console.log('═'.repeat(70) + '\n');
}

function main() {
  console.log('🔍 Scanning blog posts...\n');
  
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  
  const results = files.map(file => {
    const filePath = path.join(POSTS_DIR, file);
    try {
      return analyzePost(filePath);
    } catch (err) {
      console.error(`Error analyzing ${file}:`, err.message);
      return null;
    }
  }).filter(Boolean);
  
  generateReport(results);
  
  // Save detailed report as JSON for further analysis
  const reportPath = path.join(__dirname, '..', 'audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`📄 Detailed report saved to: audit-report.json\n`);
}

main();
