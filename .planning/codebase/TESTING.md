# Testing Documentation

## Current Test Setup
- **No automated tests configured**
- Static site with minimal JavaScript - testing not critical

## Manual Testing Workflow
1. Run `npm run start` for local dev server
2. Preview at `http://localhost:8080`
3. Check pages render correctly
4. Verify affiliate links work
5. Test RSS feed at `/feed.xml`
6. Validate sitemap at `/sitemap.xml`

## Build Verification
```bash
npm run build
# Check _site/ output for:
# - All HTML files generated
# - CSS copied to _site/css/
# - Images copied to _site/images/
# - feed.xml generated
# - sitemap.xml generated
```

## Recommended Future Testing
- [ ] HTML validation (W3C validator)
- [ ] Broken link checker
- [ ] Lighthouse audits for performance/SEO
- [ ] Mobile responsiveness testing

## Deployment Testing
- Netlify provides deploy previews on PR
- Production builds trigger on main branch push
- Build logs available in Netlify dashboard

## Content Validation
- Frontmatter required fields checked by Eleventy
- Missing fields will cause build errors
- Date format must be valid ISO date
