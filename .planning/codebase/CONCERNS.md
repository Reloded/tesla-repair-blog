# Concerns Documentation

## Technical Debt
- [ ] Google Analytics not configured (placeholder ID in template)
- [ ] No image optimization pipeline
- [ ] No minification of CSS/HTML

## Known Issues
1. **Analytics placeholder** - `G-XXXXXXXXXX` needs real tracking ID
2. **No favicon** - Browser shows default icon
3. **No 404 page** - Missing custom error page

## Security Considerations
- Static site - minimal attack surface
- No user input or forms
- All external links use HTTPS
- Affiliate links properly tagged

## Performance
- Good: Static files served from CDN
- Good: No JavaScript framework overhead
- Improve: Add image lazy loading
- Improve: Consider CSS minification

## Scalability
- Eleventy handles hundreds of posts easily
- Build time increases linearly with content
- No server-side concerns (static hosting)

## Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| Amazon affiliate rejection | Loss of revenue | Diversify to other programs |
| Low traffic | No income | SEO optimization, Reddit promotion |
| Content outdated | Reduced trust | Regular updates with new Tesla info |

## Recommended Improvements
1. **High Priority**
   - Set up Google Analytics with real tracking ID
   - Add favicon

2. **Medium Priority**
   - Create custom 404 page
   - Add image optimization
   - Implement Open Graph meta tags for social sharing

3. **Low Priority**
   - CSS minification
   - Add more affiliate programs (eBay, local stores)
   - Email newsletter signup
