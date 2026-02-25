You are working on a Tesla DIY Repair blog (Eleventy + Cloudflare Pages). Complete ALL tasks in order. Commit after each task.

## TASK 1: IMAGE OPTIMIZATION
- Create scripts/optimize-images.js using sharp (already installed as devDep)
- Find all images in src/images/ over 200KB
- Convert to WebP format with max 1200px width and quality 80
- Save .webp files alongside originals in src/images/
- Update ALL references in .njk and .md files from .jpg/.png to .webp
- Run the script
- Add npm script "optimize-images" to package.json

## TASK 2: CREATE 404 PAGE
- Create src/404.njk using existing base.njk layout
- Friendly message with links to /guides/ and homepage
- Match existing site CSS styling

## TASK 3: FAQ SCHEMA ON USB ARTICLE
- Edit src/posts/tesla-usb-not-working.md
- Add FAQ structured data (application/ld+json) at the bottom as a script block
- Cover these 5 questions:
  - Why is my Tesla USB not working?
  - How do I format a USB drive for Tesla dashcam?
  - What USB format does Tesla use?
  - Why is Tesla Sentry Mode not recording to USB?
  - Can I use a USB hub with Tesla?
- Answers should be concise and accurate based on the article content

## TASK 4: TOPIC CLUSTER HUB PAGES
- Check what category values exist in post frontmatter across all .md files in src/posts/
- Create category landing pages under src/guides/ for each major category
- Each page should list articles in that category with title + description + link
- Use Eleventy collections or pagination to auto-populate from frontmatter
- Update the main guides page (src/guides.njk or similar) to link to these hubs

## TASK 5: ABOUT PAGE E-E-A-T
- Improve src/about.njk with:
  - Author bio: independent Tesla mechanic based in Lithuania working at RR Car Parts
  - Hands-on experience with Model 3 + Y + S + X
  - Workshop photos section using existing images from src/images/ (the workshop/teardown ones)
  - Trust signals: all guides verified against Tesla service manual + 120+ articles published
  - Add Schema.org Person structured data markup

## FINAL
After ALL tasks run: npx @11ty/eleventy
Fix any build errors. Make sure the site builds cleanly.
