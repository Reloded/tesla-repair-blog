#!/usr/bin/env node
/**
 * Google Search Console API Script
 * Fetches performance and indexing data for tesladiyrepair.com
 *
 * Setup:
 * 1. Go to https://console.cloud.google.com/
 * 2. Create a new project (or use existing)
 * 3. Enable "Google Search Console API"
 * 4. Create OAuth 2.0 credentials (Desktop app)
 * 5. Download JSON and save as scripts/credentials.json
 * 6. Run: node scripts/gsc.js
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');
let SITE_URL = 'https://tesladiyrepair.com/'; // Will be auto-detected

const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];

async function authorize() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('\n❌ Missing credentials.json file!');
    console.log('\nSetup instructions:');
    console.log('1. Go to https://console.cloud.google.com/');
    console.log('2. Create or select a project');
    console.log('3. Enable "Google Search Console API"');
    console.log('4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID');
    console.log('5. Choose "Desktop app" as application type');
    console.log('6. Download the JSON file');
    console.log('7. Save it as: scripts/credentials.json');
    console.log('8. Run this script again\n');
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check for existing token
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  }

  // Get new token
  return getNewToken(oAuth2Client);
}

async function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('\n🔐 Authorize this app by visiting this URL:\n');
  console.log(authUrl);
  console.log('\n');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question('Enter the authorization code: ', async (code) => {
      rl.close();
      try {
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
        console.log('\n✅ Token saved to', TOKEN_PATH);
        resolve(oAuth2Client);
      } catch (err) {
        reject(err);
      }
    });
  });
}

async function getPerformanceData(auth) {
  const webmasters = google.webmasters({ version: 'v3', auth });

  // Last 28 days
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 28);

  const formatDate = (d) => d.toISOString().split('T')[0];

  console.log('\n📊 PERFORMANCE DATA (Last 28 days)');
  console.log('═'.repeat(50));

  try {
    // Overall metrics
    const response = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: [],
      },
    });

    if (response.data.rows && response.data.rows.length > 0) {
      const row = response.data.rows[0];
      console.log(`\n📈 Overall Metrics:`);
      console.log(`   Clicks:      ${row.clicks}`);
      console.log(`   Impressions: ${row.impressions}`);
      console.log(`   CTR:         ${(row.ctr * 100).toFixed(2)}%`);
      console.log(`   Avg Position: ${row.position.toFixed(1)}`);
    } else {
      console.log('\n   No performance data yet (new site)');
    }

    // Top queries
    const queriesResponse = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: ['query'],
        rowLimit: 10,
      },
    });

    if (queriesResponse.data.rows && queriesResponse.data.rows.length > 0) {
      console.log(`\n🔍 Top Search Queries:`);
      queriesResponse.data.rows.forEach((row, i) => {
        console.log(`   ${i + 1}. "${row.keys[0]}" - ${row.impressions} imp, ${row.clicks} clicks, pos ${row.position.toFixed(1)}`);
      });
    }

    // Top pages
    const pagesResponse = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: ['page'],
        rowLimit: 10,
      },
    });

    if (pagesResponse.data.rows && pagesResponse.data.rows.length > 0) {
      console.log(`\n📄 Top Pages:`);
      pagesResponse.data.rows.forEach((row, i) => {
        const pagePath = row.keys[0].replace('https://tesladiyrepair.com', '');
        console.log(`   ${i + 1}. ${pagePath || '/'} - ${row.impressions} imp, ${row.clicks} clicks`);
      });
    }

  } catch (error) {
    if (error.code === 403) {
      console.log('\n⚠️  Access denied. Make sure you have access to this property in GSC.');
      console.log('   Try using URL prefix property instead of domain property.');
      console.log('   Edit SITE_URL in this script to: https://tesladiyrepair.com/');
    } else {
      throw error;
    }
  }
}

async function getIndexingStatus(auth) {
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  console.log('\n\n📑 INDEXING STATUS');
  console.log('═'.repeat(50));

  try {
    // Get sitemaps
    const webmasters = google.webmasters({ version: 'v3', auth });
    const sitemapsResponse = await webmasters.sitemaps.list({
      siteUrl: SITE_URL,
    });

    if (sitemapsResponse.data.sitemap && sitemapsResponse.data.sitemap.length > 0) {
      console.log('\n🗺️  Sitemaps:');
      sitemapsResponse.data.sitemap.forEach((sitemap) => {
        console.log(`   ${sitemap.path}`);
        if (sitemap.contents) {
          sitemap.contents.forEach((content) => {
            console.log(`      - ${content.type}: ${content.submitted} submitted, ${content.indexed} indexed`);
          });
        }
      });
    } else {
      console.log('\n   No sitemaps found. Consider submitting your sitemap.');
    }

  } catch (error) {
    if (error.code === 403) {
      console.log('\n⚠️  Cannot access indexing data for domain property.');
    } else {
      console.log('\n⚠️  Could not fetch indexing status:', error.message);
    }
  }
}

async function listSites(auth) {
  const webmasters = google.webmasters({ version: 'v3', auth });

  console.log('\n📋 AVAILABLE GSC PROPERTIES');
  console.log('═'.repeat(50));

  try {
    const response = await webmasters.sites.list();
    if (response.data.siteEntry && response.data.siteEntry.length > 0) {
      response.data.siteEntry.forEach((site, i) => {
        console.log(`   ${i + 1}. ${site.siteUrl} (${site.permissionLevel})`);
      });
      return response.data.siteEntry;
    } else {
      console.log('   No sites found. Make sure you have properties in GSC.');
      return [];
    }
  } catch (error) {
    console.log('   Error listing sites:', error.message);
    return [];
  }
}

async function main() {
  console.log('🔍 Google Search Console Report');
  console.log(`📅 Date: ${new Date().toLocaleDateString()}`);

  try {
    const auth = await authorize();

    // First list available sites
    const sites = await listSites(auth);

    // Find our site
    const targetSite = sites.find(s => s.siteUrl.includes('tesladiyrepair'));

    if (targetSite) {
      console.log(`\n📍 Using: ${targetSite.siteUrl}`);
      SITE_URL = targetSite.siteUrl;
    } else {
      console.log('\n⚠️  tesladiyrepair.com not found in your GSC properties.');
      console.log('   Make sure you\'ve added the site to Google Search Console.');
      process.exit(1);
    }

    await getPerformanceData(auth);
    await getIndexingStatus(auth);

    console.log('\n' + '═'.repeat(50));
    console.log('✅ Report complete!\n');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.code === 'ENOTFOUND') {
      console.log('   Check your internet connection.');
    }
    process.exit(1);
  }
}

main();
