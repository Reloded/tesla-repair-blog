# Tesla DIY Repair Blog

A complete blog website for Tesla repair guides with affiliate monetization.

## Quick Start (One-Time Setup)

### Step 1: Install Node.js

If you don't have Node.js installed:
1. Go to https://nodejs.org
2. Download the LTS version
3. Run the installer (accept all defaults)
4. Restart your computer

### Step 2: Build the Website

Open Command Prompt (search "cmd" in Windows) and run:

```bash
cd C:\Users\rnsst\tesla-repair-blog
npm install
npm run build
```

This creates a `_site` folder containing your complete website.

### Step 3: Deploy to Netlify (Free Hosting)

**Option A: Drag and Drop (Easiest)**
1. Go to https://netlify.com
2. Sign up for a free account
3. Click "Add new site" > "Deploy manually"
4. Drag and drop the `_site` folder onto the page
5. Your site is live! Netlify gives you a URL like `random-name-123.netlify.app`

**Option B: Connect to GitHub (Better for updates)**
1. Create a GitHub account at https://github.com
2. Create a new repository called `tesla-repair-blog`
3. Push this code to GitHub
4. Connect Netlify to your GitHub repo
5. Netlify will auto-deploy whenever you push changes

### Step 4: Get a Custom Domain (Optional)

1. Buy a domain at Namecheap, Google Domains, or similar (~$10-15/year)
2. In Netlify, go to Domain Settings
3. Add your custom domain
4. Follow Netlify's instructions to configure DNS

## Making Money

### Amazon Affiliate Program

1. Sign up at https://affiliate-program.amazon.com
2. Once approved, you get an "Associate ID"
3. Update the Amazon links in the articles to include your Associate ID
4. Format: `https://www.amazon.com/s?k=product+name&tag=YOUR-ID-20`

### Google AdSense

1. Sign up at https://www.google.com/adsense
2. Wait for approval (requires some traffic first)
3. Add the AdSense code to `src/_includes/base.njk` (replace the placeholder comment)

## Adding New Articles

1. Create a new `.md` file in `src/posts/`
2. Copy the format from an existing article
3. Run `npm run build` to regenerate the site
4. Re-deploy to Netlify

## Previewing Locally

To preview changes before deploying:

```bash
npm run start
```

Then open http://localhost:8080 in your browser.

## File Structure

```
tesla-repair-blog/
├── src/
│   ├── _includes/     # Templates
│   ├── posts/         # Blog articles (markdown)
│   ├── css/           # Styles
│   ├── index.njk      # Homepage
│   ├── guides.njk     # All guides page
│   ├── tools.njk      # Tools/affiliate page
│   └── about.njk      # About page
├── _site/             # Built website (deploy this)
├── package.json       # Dependencies
└── .eleventy.js       # Site configuration
```

## Monetization Strategy

### Phase 1: Build Traffic (Months 1-6)
- Focus on SEO-optimized content
- Share in Tesla Facebook groups, Reddit (r/TeslaMotors, r/TeslaModel3)
- Answer Tesla questions on forums and link back

### Phase 2: Monetize (Months 3+)
- Add Amazon affiliate links (can start immediately)
- Apply for AdSense once you have ~1000 monthly visitors
- Consider additional affiliate programs (RockAuto, Ohmmu, etc.)

### Phase 3: Expand (Months 6+)
- Add more articles based on search traffic
- Create video content for YouTube
- Build an email list

## Expected Timeline

- Month 1-2: Building content, minimal traffic
- Month 3-4: Google starts indexing, organic traffic grows
- Month 5-6: 500-1000 monthly visitors possible
- Month 6-12: With consistent effort, $100-500/month achievable
- Month 12+: $1000/month is realistic with good content and traffic

## Tips for Success

1. **Consistency**: Add 1-2 new articles per month
2. **Quality over quantity**: Detailed guides rank better
3. **Keyword research**: Target specific repair searches
4. **Community engagement**: Be helpful in Tesla forums
5. **Patience**: SEO takes 6-12 months to show real results

## Support

If you have questions about running the site, common issues:

- **"npm not found"**: Restart your computer after installing Node.js
- **Build fails**: Make sure you're in the `tesla-repair-blog` folder
- **Netlify upload fails**: Make sure you're uploading the `_site` folder, not the whole project
