#!/usr/bin/env node
/**
 * URL Inspection API - real per-URL indexing coverage report
 *
 * Usage:
 *   npm run indexing                 -> inspect EVERY URL in the live sitemap (~160, takes a few minutes)
 *   npm run indexing -- --sample 20  -> quick spot-check of 20 URLs (top of sitemap + random)
 *   npm run indexing -- <url> [...]  -> inspect specific URL(s)
 *
 * Notes:
 * - Requires scripts/token.json (run `npm run gsc` first to authenticate).
 * - URL Inspection API quota: 2,000 inspections/day per property — a full run uses ~160.
 * - The sitemaps API "indexed: 0" figure is a DEPRECATED field Google no longer populates
 *   (confirmed by Google's John Mueller). This script is the real indexing status.
 */

const { google } = require('googleapis');
const https = require('https');
const fs = require('fs');
const path = require('path');

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');
const SITE_URL = 'https://tesladiyrepair.com/';
const SITEMAP_URL = 'https://tesladiyrepair.com/sitemap.xml';

async function authorize() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  }
  throw new Error('No token found - run `npm run gsc` first to authenticate');
}

function fetchSitemapUrls() {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => {
        const urls = [...body.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
        urls.length ? resolve(urls) : reject(new Error('No <loc> entries found in sitemap'));
      });
    }).on('error', reject);
  });
}

async function inspectUrl(searchconsole, url) {
  try {
    const response = await searchconsole.urlInspection.index.inspect({
      requestBody: { inspectionUrl: url, siteUrl: SITE_URL },
    });
    return response.data.inspectionResult?.indexStatusResult || {};
  } catch (error) {
    return { error: error.message };
  }
}

async function main() {
  console.log('🔍 URL Indexing Coverage Report');
  console.log(`📅 Date: ${new Date().toLocaleDateString()}`);
  console.log('═'.repeat(50));

  const auth = await authorize();
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  // Resolve URL list: explicit args > sitemap (optionally sampled)
  const args = process.argv.slice(2);
  let urls;
  const sampleIdx = args.indexOf('--sample');
  const explicit = args.filter((a) => a.startsWith('http'));

  if (explicit.length) {
    urls = explicit;
    console.log(`\nInspecting ${urls.length} URL(s) from arguments...`);
  } else {
    console.log('\nFetching live sitemap...');
    urls = await fetchSitemapUrls();
    console.log(`Sitemap contains ${urls.length} URLs.`);
    if (sampleIdx !== -1) {
      const n = parseInt(args[sampleIdx + 1], 10) || 20;
      // half from the top (key pages), half random from the rest
      const top = urls.slice(0, Math.ceil(n / 2));
      const rest = urls.slice(Math.ceil(n / 2));
      const rand = [];
      while (rand.length < Math.floor(n / 2) && rest.length) {
        rand.push(rest.splice(Math.floor(Math.random() * rest.length), 1)[0]);
      }
      urls = [...top, ...rand];
      console.log(`Sampling ${urls.length} of them (--sample).`);
    } else {
      console.log('Inspecting ALL of them — this takes a few minutes.');
    }
  }

  const buckets = {};   // coverageState -> [urls]
  const problems = [];  // anything not indexed / with issues
  let done = 0;

  for (const url of urls) {
    const r = await inspectUrl(searchconsole, url);
    done++;
    const short = url.replace('https://tesladiyrepair.com', '') || '/';

    if (r.error) {
      (buckets['API error'] ||= []).push(short);
      problems.push(`${short} — API error: ${r.error.slice(0, 80)}`);
    } else {
      const state = r.coverageState || 'Unknown';
      (buckets[state] ||= []).push(short);
      const indexedStates = ['Submitted and indexed', 'Indexed, not submitted in sitemap'];
      if (!indexedStates.includes(state)) {
        const crawled = r.lastCrawlTime ? new Date(r.lastCrawlTime).toISOString().slice(0, 10) : 'never';
        problems.push(`${short} — ${state} (verdict ${r.verdict || '?'}, last crawl ${crawled})`);
        if (r.pageFetchState && r.pageFetchState !== 'SUCCESSFUL') problems.push(`    fetch: ${r.pageFetchState}`);
        if (r.robotsTxtState && r.robotsTxtState !== 'ALLOWED') problems.push(`    robots: ${r.robotsTxtState}`);
      }
    }
    if (done % 20 === 0 || done === urls.length) {
      process.stdout.write(`\r   inspected ${done}/${urls.length}...`);
    }
  }
  console.log('\n');

  console.log('📊 COVERAGE SUMMARY');
  console.log('═'.repeat(50));
  Object.entries(buckets)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([state, list]) => {
      const pct = ((list.length / urls.length) * 100).toFixed(0);
      console.log(`   ${list.length} (${pct}%)  ${state}`);
    });

  if (problems.length) {
    console.log('\n⚠️  PAGES NOT INDEXED / WITH ISSUES');
    console.log('═'.repeat(50));
    problems.forEach((p) => console.log('   ' + p));
  } else {
    console.log('\n✅ Every inspected URL is indexed. Nothing to fix.');
  }

  console.log('\nℹ️  Reminder: the "sitemap indexed: 0" line in `npm run gsc` is a deprecated');
  console.log('   API field Google stopped populating — ignore it. THIS report is the truth.');
  console.log('═'.repeat(50));
  console.log('✅ Check complete!\n');
}

main().catch(console.error);
