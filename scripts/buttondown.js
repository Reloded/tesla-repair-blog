#!/usr/bin/env node
/**
 * Buttondown Newsletter Stats Script
 * Fetches subscriber count and recent activity
 *
 * Setup:
 * 1. Get API key from https://buttondown.com/settings/api
 * 2. Add to .env: BUTTONDOWN_API_KEY=your-key-here
 * 3. Run: npm run newsletter
 */

const fs = require('fs');
const path = require('path');

// Load .env file
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length) {
      process.env[key.trim()] = valueParts.join('=').trim();
    }
  });
}

const API_KEY = process.env.BUTTONDOWN_API_KEY;

if (!API_KEY) {
  console.error('\n❌ Missing BUTTONDOWN_API_KEY!');
  console.log('\nSetup:');
  console.log('1. Get your API key from https://buttondown.com/settings/api');
  console.log('2. Add to .env file: BUTTONDOWN_API_KEY=your-key-here');
  process.exit(1);
}

async function fetchButtondown(endpoint) {
  const response = await fetch(`https://api.buttondown.com/v1/${endpoint}`, {
    headers: {
      'Authorization': `Token ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function main() {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'numeric', day: 'numeric'
  });

  console.log('📧 Buttondown Newsletter Report');
  console.log(`📅 Date: ${date}`);
  console.log('\n' + '═'.repeat(50) + '\n');

  try {
    // Fetch subscribers
    const subscribers = await fetchButtondown('subscribers');

    const total = subscribers.count || 0;
    const results = subscribers.results || [];

    // Count by type
    const regular = results.filter(s => s.subscriber_type === 'regular').length;
    const unsubscribed = results.filter(s => s.subscriber_type === 'unsubscribed').length;
    const unactivated = results.filter(s => s.subscriber_type === 'unactivated').length;

    console.log('👥 Subscribers:');
    console.log(`   Total: ${total}`);
    if (total > 0) {
      console.log(`   Active: ${regular}`);
      if (unactivated > 0) console.log(`   Unconfirmed: ${unactivated}`);
      if (unsubscribed > 0) console.log(`   Unsubscribed: ${unsubscribed}`);
    }

    // Show recent subscribers
    if (results.length > 0) {
      console.log('\n📋 Recent Subscribers:');
      const recent = results.slice(0, 5);
      recent.forEach((sub, i) => {
        const date = new Date(sub.creation_date).toLocaleDateString();
        const status = sub.subscriber_type === 'regular' ? '✓' :
                       sub.subscriber_type === 'unactivated' ? '⏳' : '✗';
        console.log(`   ${i + 1}. ${sub.email_address} (${date}) ${status}`);
      });
    }

    // Fetch emails/newsletters sent
    console.log('\n📨 Newsletters:');
    try {
      const emails = await fetchButtondown('emails');
      const sentEmails = (emails.results || []).filter(e => e.status === 'sent');
      console.log(`   Sent: ${sentEmails.length}`);

      if (sentEmails.length > 0) {
        console.log('\n   Recent:');
        sentEmails.slice(0, 3).forEach((email, i) => {
          const date = new Date(email.publish_date).toLocaleDateString();
          console.log(`   ${i + 1}. "${email.subject}" (${date})`);
        });
      } else {
        console.log('   No newsletters sent yet');
      }
    } catch (e) {
      console.log('   Unable to fetch newsletter data');
    }

    console.log('\n' + '═'.repeat(50));
    console.log('✅ Report complete!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
