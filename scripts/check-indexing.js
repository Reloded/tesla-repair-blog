#!/usr/bin/env node
/**
 * URL Inspection API - Check indexing status for specific URLs
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');
const SITE_URL = 'https://tesladiyrepair.com/';

async function authorize() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  }
  throw new Error('No token found - run gsc.js first');
}

async function inspectUrl(auth, url) {
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  
  try {
    const response = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: url,
        siteUrl: SITE_URL,
      },
    });
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

async function main() {
  console.log('🔍 URL Indexing Status Check');
  console.log(`📅 Date: ${new Date().toLocaleDateString()}`);
  console.log('═'.repeat(50));

  const auth = await authorize();
  
  // Get sitemap URLs
  const webmasters = google.webmasters({ version: 'v3', auth });
  
  // Check key pages
  const urlsToCheck = [
    'https://tesladiyrepair.com/',
    'https://tesladiyrepair.com/posts/tesla-usb-not-working/',
    'https://tesladiyrepair.com/posts/tesla-window-reset-calibration/',
    'https://tesladiyrepair.com/posts/tesla-winter-preparation-guide/',
    'https://tesladiyrepair.com/posts/tesla-12v-battery-replacement/',
    'https://tesladiyrepair.com/posts/tesla-phantom-braking-fix/',
  ];

  console.log('\n📄 Checking indexing status for key pages...\n');

  for (const url of urlsToCheck) {
    const shortUrl = url.replace('https://tesladiyrepair.com', '');
    process.stdout.write(`   ${shortUrl || '/'} ... `);
    
    const result = await inspectUrl(auth, url);
    
    if (result.error) {
      console.log(`❌ Error: ${result.error}`);
    } else {
      const inspection = result.inspectionResult;
      const indexStatus = inspection?.indexStatusResult;
      const verdict = indexStatus?.verdict || 'UNKNOWN';
      const coverageState = indexStatus?.coverageState || 'Unknown';
      const robotsTxt = indexStatus?.robotsTxtState || 'Unknown';
      const crawled = indexStatus?.lastCrawlTime ? new Date(indexStatus.lastCrawlTime).toLocaleDateString() : 'Never';
      
      let icon = '❓';
      if (verdict === 'PASS') icon = '✅';
      else if (verdict === 'NEUTRAL') icon = '⏳';
      else if (verdict === 'FAIL') icon = '❌';
      
      console.log(`${icon} ${verdict}`);
      console.log(`      Coverage: ${coverageState}`);
      console.log(`      Robots: ${robotsTxt}`);
      console.log(`      Last crawl: ${crawled}`);
      
      if (indexStatus?.pageFetchState && indexStatus.pageFetchState !== 'SUCCESSFUL') {
        console.log(`      ⚠️  Fetch issue: ${indexStatus.pageFetchState}`);
      }
      if (indexStatus?.indexingState && indexStatus.indexingState !== 'INDEXING_ALLOWED') {
        console.log(`      ⚠️  Indexing: ${indexStatus.indexingState}`);
      }
    }
    console.log('');
  }

  console.log('═'.repeat(50));
  console.log('✅ Check complete!\n');
}

main().catch(console.error);
