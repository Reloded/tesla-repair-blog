# INTEGRATIONS

> External services and APIs for tesla-repair-blog

**Last updated:** 2026-01-13

---

## Hosting

**Netlify** (recommended in `README.md`)
- Static site hosting
- Free tier available
- Drag-and-drop or GitHub integration
- Custom domain support

---

## Monetization (Planned)

### Amazon Affiliate Program

- **Status:** Links present, affiliate ID placeholder
- **Format:** `https://www.amazon.com/s?k=product&tag=YOUR-ID-20`
- **Location:** Throughout blog posts in `src/posts/*.md`
- **Setup:** Replace `YOUR-ID-20` with actual Associate ID

### Google AdSense

- **Status:** Placeholder noted in README
- **Location:** To be added in `src/_includes/base.njk`
- **Requirement:** Site needs traffic before approval

---

## SEO

### robots.txt
- **File:** `src/robots.txt`
- **Status:** Basic configuration present

### Sitemap
- **File:** `src/sitemap.njk`
- **Output:** `_site/sitemap.xml`
- **Format:** XML sitemap with all posts

### RSS Feed
- **Plugin:** `@11ty/eleventy-plugin-rss`
- **File:** `src/feed.njk`
- **Output:** `_site/feed.xml`

---

## Analytics

**Not configured** - Google Analytics or similar not present.

**Recommended setup:**
1. Create Google Analytics 4 property
2. Add tracking code to `src/_includes/base.njk`

---

## External APIs

None. This is a static site with no server-side API calls.

---

## CDN/Assets

No external CDN configured. All assets served locally:
- CSS: `src/css/style.css`
- Images: `src/images/`
- No external fonts (system fonts used)

---

## Domain

**Configured in metadata:**
- URL: `https://tesladiyrepair.com`
- File: `src/_data/metadata.json`

**Status:** Domain may need DNS configuration with Netlify.

---

## Third-Party Libraries

None loaded from CDN. All dependencies are build-time only:
- 11ty (build)
- RSS plugin (build)

Output is pure HTML/CSS with no JavaScript dependencies.
