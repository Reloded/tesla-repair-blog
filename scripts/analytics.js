#!/usr/bin/env node
/**
 * Google Analytics 4 API Script
 * Fetches visitor and engagement data for tesladiyrepair.com
 *
 * Setup:
 * 1. Go to https://console.cloud.google.com/
 * 2. Select your project (same as GSC)
 * 3. Enable "Google Analytics Data API"
 * 4. Run: node scripts/analytics.js
 * 5. First run will prompt for authentication
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token-ga.json');

// GA4 Property ID (numeric, not the G-XXXXX measurement ID)
// Will be auto-detected from available properties
let PROPERTY_ID = null;

const SCOPES = [
  'https://www.googleapis.com/auth/analytics.readonly',
];

async function authorize() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('\n❌ Missing credentials.json file!');
    console.log('   Use the same credentials.json from GSC setup.');
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

async function listProperties(auth) {
  const analyticsAdmin = google.analyticsadmin({ version: 'v1beta', auth });

  console.log('\n📋 AVAILABLE GA4 PROPERTIES');
  console.log('═'.repeat(50));

  try {
    const response = await analyticsAdmin.accountSummaries.list();
    const accounts = response.data.accountSummaries || [];

    let foundProperty = null;

    for (const account of accounts) {
      console.log(`\n   Account: ${account.displayName}`);
      if (account.propertySummaries) {
        for (const property of account.propertySummaries) {
          const propertyId = property.property.split('/')[1];
          console.log(`      - ${property.displayName} (${propertyId})`);

          // Look for tesladiyrepair property
          if (property.displayName.toLowerCase().includes('tesla') ||
              property.displayName.toLowerCase().includes('diy')) {
            foundProperty = propertyId;
          }
        }
      }
    }

    return foundProperty;
  } catch (error) {
    if (error.code === 403) {
      console.log('\n⚠️  Access denied. Make sure Google Analytics Data API is enabled.');
      console.log('   Visit: https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com');
    } else {
      console.log('\n⚠️  Error listing properties:', error.message);
    }
    return null;
  }
}

async function getAnalyticsData(auth, propertyId) {
  // Use the REST API directly via googleapis
  const analyticsData = google.analyticsdata({ version: 'v1beta', auth });

  console.log('\n📊 ANALYTICS DATA (Last 28 days)');
  console.log('═'.repeat(50));

  try {
    // Overall metrics
    const response = await analyticsData.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'averageSessionDuration' },
          { name: 'bounceRate' },
        ],
      },
    });

    if (response.data.rows && response.data.rows.length > 0) {
      const row = response.data.rows[0];
      const metrics = row.metricValues;
      console.log(`\n👥 Overall Metrics:`);
      console.log(`   Active Users:    ${metrics[0].value}`);
      console.log(`   Sessions:        ${metrics[1].value}`);
      console.log(`   Page Views:      ${metrics[2].value}`);
      console.log(`   Avg Session:     ${formatDuration(metrics[3].value)}`);
      console.log(`   Bounce Rate:     ${(parseFloat(metrics[4].value) * 100).toFixed(1)}%`);
    } else {
      console.log('\n   No data yet for this period.');
    }

    // Top pages
    const pagesResponse = await analyticsData.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'activeUsers' },
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10,
      },
    });

    if (pagesResponse.data.rows && pagesResponse.data.rows.length > 0) {
      console.log(`\n📄 Top Pages:`);
      pagesResponse.data.rows.forEach((row, i) => {
        const pagePath = row.dimensionValues[0].value;
        const views = row.metricValues[0].value;
        const users = row.metricValues[1].value;
        console.log(`   ${i + 1}. ${pagePath} - ${views} views, ${users} users`);
      });
    }

    // Traffic sources
    const sourcesResponse = await analyticsData.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionSource' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 5,
      },
    });

    if (sourcesResponse.data.rows && sourcesResponse.data.rows.length > 0) {
      console.log(`\n🔗 Traffic Sources:`);
      sourcesResponse.data.rows.forEach((row, i) => {
        const source = row.dimensionValues[0].value || '(direct)';
        const sessions = row.metricValues[0].value;
        console.log(`   ${i + 1}. ${source} - ${sessions} sessions`);
      });
    }

    // Countries
    const countriesResponse = await analyticsData.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'country' }],
        metrics: [{ name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
        limit: 5,
      },
    });

    if (countriesResponse.data.rows && countriesResponse.data.rows.length > 0) {
      console.log(`\n🌍 Top Countries:`);
      countriesResponse.data.rows.forEach((row, i) => {
        const country = row.dimensionValues[0].value;
        const users = row.metricValues[0].value;
        console.log(`   ${i + 1}. ${country} - ${users} users`);
      });
    }

    // Devices
    const devicesResponse = await analyticsData.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [{ name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      },
    });

    if (devicesResponse.data.rows && devicesResponse.data.rows.length > 0) {
      console.log(`\n📱 Devices:`);
      devicesResponse.data.rows.forEach((row) => {
        const device = row.dimensionValues[0].value;
        const users = row.metricValues[0].value;
        console.log(`   ${device}: ${users} users`);
      });
    }

  } catch (error) {
    if (error.code === 403) {
      console.log('\n⚠️  Access denied to this property.');
      console.log('   Make sure you have access to this GA4 property.');
    } else {
      console.log('\n⚠️  Error fetching data:', error.message);
    }
  }
}

function formatDuration(seconds) {
  const s = parseFloat(seconds);
  const mins = Math.floor(s / 60);
  const secs = Math.floor(s % 60);
  return `${mins}m ${secs}s`;
}

async function main() {
  console.log('📈 Google Analytics Report');
  console.log(`📅 Date: ${new Date().toLocaleDateString()}`);

  try {
    const auth = await authorize();

    // List properties and find ours
    const propertyId = await listProperties(auth);

    if (!propertyId) {
      console.log('\n⚠️  Could not auto-detect property.');
      console.log('   Please set PROPERTY_ID manually in the script.');
      process.exit(1);
    }

    console.log(`\n📍 Using Property ID: ${propertyId}`);

    await getAnalyticsData(auth, propertyId);

    console.log('\n' + '═'.repeat(50));
    console.log('✅ Report complete!\n');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
