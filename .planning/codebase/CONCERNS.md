# CONCERNS

> Technical debt and areas of concern for tesla-repair-blog

**Last updated:** 2026-01-13

---

## Overall Assessment

**Codebase is relatively clean.** This is a static site with minimal complexity. A few configuration items need attention before the site is fully personalized and monetization-ready.

---

## High Priority - Configuration Required

### 1. Placeholder Email Address
- **File:** `src/about.njk` (line 66)
- **Issue:** Contact email shows `hello@tesladiyrepair.com (replace with your actual email)`
- **Impact:** Placeholder text visible on published site
- **Fix:** Replace with actual contact email

### 2. Google AdSense Not Configured
- **File:** `src/_includes/base.njk` (line 38)
- **Issue:** AdSense script commented out with placeholder `ca-pub-YOURCODE`
- **Impact:** No ad revenue until configured
- **Fix:** Uncomment and add actual AdSense publisher ID when approved

### 3. Amazon Affiliate Links - German Domain
- **Files:** All posts in `src/posts/*.md`, `src/_includes/post.njk`, `src/tools.njk`
- **Issue:** All 79 affiliate links use `amazon.de` with tag `diyrepair-21`
- **Impact:** Users outside Germany see wrong Amazon store
- **Fix:** Update to appropriate regional Amazon domain if targeting other markets

---

## Medium Priority - UX Issues

### 4. Mobile Navigation Missing
- **File:** `src/css/style.css` (lines 605-607)
- **Issue:** `.nav-links` set to `display: none` on mobile (max-width: 768px)
- **Problem:** No hamburger menu or alternative navigation provided
- **Impact:** Mobile users cannot navigate to Guides, Tools, or About pages
- **Fix:** Add hamburger menu or mobile navigation component

### 5. Domain Hardcoded in Multiple Places
- **Files:**
  - `src/_data/metadata.json` (line 3)
  - `src/_includes/base.njk` (lines 15, 29)
  - `src/robots.txt` (line 4)
- **Issue:** Domain `https://tesladiyrepair.com` hardcoded
- **Impact:** Must update manually if domain changes
- **Fix:** Consider centralizing in metadata.json only

---

## Low Priority - Minor Improvements

### 6. No Node.js Version Pinning
- **Location:** Missing `.nvmrc` or `engines` in `package.json`
- **Risk:** Low - Eleventy is stable across Node versions
- **Fix:** Add `"engines": { "node": ">=18" }` to `package.json`

### 7. RSS Feed Has No Item Limit
- **File:** `src/feed.njk`
- **Issue:** Feed includes ALL posts (currently 16, could grow large)
- **Best Practice:** Limit to last 20-50 items for performance
- **Fix:** Add `| head(20)` filter to collection loop

### 8. Emoji Cards Missing Accessibility
- **File:** `src/index.njk` (lines 24, 54, 62, 70)
- **Issue:** Emoji in `.post-card-image` divs have no alt text or ARIA labels
- **Impact:** Screen readers can't describe content
- **Fix:** Add `aria-label` attributes to emoji containers

### 9. Loose Dependency Versions
- **File:** `package.json`
- **Issue:** Uses `^2.0.1` for Eleventy (allows up to `<3.0.0`)
- **Risk:** Major updates could introduce breaking changes
- **Fix:** Pin to specific version for stability

---

## Not Issues - Verified Clean

| Item | Status |
|------|--------|
| Hardcoded secrets | None found |
| Security vulnerabilities | N/A - static site |
| TODO/FIXME comments | None in application code |
| Duplicate code | Minimal, acceptable |
| Performance issues | None - fast static site |
| SEO basics | Implemented (sitemap, RSS, Open Graph) |
| Affiliate disclosure | Present on tools page and posts |

---

## Current Integrations Status

| Integration | Status | Action Needed |
|-------------|--------|---------------|
| Google Analytics | Active (`G-MHWB6T22RQ`) | Verify ownership |
| Amazon Affiliate | Active (`diyrepair-21`) | Verify tag is yours |
| Buttondown Newsletter | Active | Working |
| Google AdSense | Placeholder | Configure when approved |
| Netlify Hosting | Recommended | Set up deployment |

---

## Recommended Action Order

1. **Fix mobile navigation** - Critical for user experience
2. **Verify affiliate tag** - Ensure `diyrepair-21` is your Amazon Associate ID
3. **Update contact email** - Remove placeholder text
4. **Set up Netlify** - Enable automatic deployments
5. **Configure AdSense** - When traffic justifies approval
