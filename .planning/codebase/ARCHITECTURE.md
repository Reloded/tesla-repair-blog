# Architecture Documentation

## System Design
- **Type:** Static site generator (JAMstack)
- **Pattern:** Template-driven content compilation
- **Build output:** Static HTML/CSS files in `_site/`

## Data Flow
```
Markdown Content (src/posts/*.md)
        ↓
    Eleventy Build
        ↓
Nunjucks Templates (src/_includes/)
        ↓
Static HTML Output (_site/)
        ↓
    Netlify CDN
        ↓
    End Users
```

## Layers
1. **Content Layer** - Markdown files with YAML frontmatter
2. **Template Layer** - Nunjucks templates for layouts
3. **Build Layer** - Eleventy processes and compiles
4. **Output Layer** - Static HTML/CSS served via CDN

## Key Patterns
- **Collections:** Posts gathered via glob pattern, sorted by date
- **Layouts:** Inheritance chain (post.njk → base.njk)
- **Filters:** Custom date formatting
- **Passthrough:** Static assets copied directly (CSS, images)

## Build Process
1. Eleventy reads `src/` directory
2. Processes Markdown through markdown-it
3. Applies Nunjucks templates
4. Generates RSS feed and sitemap
5. Outputs to `_site/` directory

## Deployment
- GitHub repository triggers Netlify build
- Netlify runs `npm run build`
- Static files deployed to CDN edge nodes
