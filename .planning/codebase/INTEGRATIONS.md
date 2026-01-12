# Integrations Documentation

## External Services

### Netlify (Hosting)
- **URL:** https://poetic-cajeta-7acc1e.netlify.app
- **Deployment:** Auto-deploy from GitHub main branch
- **Build command:** `npm run build`
- **Publish directory:** `_site`

### GitHub (Version Control)
- **Repository:** https://github.com/Reloded/tesla-repair-blog
- **Branch:** main
- **Integration:** Connected to Netlify for CI/CD

### Amazon Associates (Monetization)
- **Program:** Amazon.de Associates
- **Affiliate Tag:** `diyrepair-21`
- **Link Format:** `https://www.amazon.de/dp/{ASIN}?tag=diyrepair-21`
- **Products:** Automotive tools, OBD scanners, batteries

### Google Analytics (Pending Setup)
- **Status:** Placeholder in base.njk
- **Action Required:** Replace `G-XXXXXXXXXX` with actual tracking ID
- **Location:** `src/_includes/base.njk`

## APIs Used
- None - fully static site with no runtime API calls

## Data Sources
- Content authored manually in Markdown
- No external data fetching

## RSS/Syndication
- Atom feed at `/feed.xml`
- Uses @11ty/eleventy-plugin-rss
- Auto-updates with new posts

## SEO Integrations
- XML Sitemap at `/sitemap.xml`
- robots.txt allows all crawlers
- Sitemap URL in robots.txt for discovery
