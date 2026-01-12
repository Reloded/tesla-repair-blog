# Conventions Documentation

## Code Style

### Markdown/Content
- YAML frontmatter at top of each post
- Required frontmatter: `title`, `description`, `date`, `tags`, `layout`
- Kebab-case filenames: `model-y-black-screen-fix.md`
- H2 headers for main sections
- Affiliate links use full Amazon.de URLs with `tag=diyrepair-21`

### Nunjucks Templates
- 2-space indentation
- Block inheritance: `{% extends "base.njk" %}`
- Content blocks: `{% block content %}{% endblock %}`
- Filters: `{{ date | dateFormat }}`

### JavaScript (.eleventy.js)
- CommonJS modules (`require`/`module.exports`)
- Arrow functions for callbacks
- Descriptive filter/collection names

### CSS
- CSS custom properties for theming
- Mobile-first responsive design
- BEM-style class naming where applicable

## Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Posts | kebab-case | `tesla-12v-battery-replacement.md` |
| Templates | lowercase | `base.njk`, `post.njk` |
| CSS classes | kebab-case | `.post-meta`, `.tools-box` |
| Data files | lowercase | `metadata.json` |

## Content Patterns
- Each article includes "Tools You'll Need" affiliate section
- Amazon links format: `https://www.amazon.de/dp/ASIN?tag=diyrepair-21`
- Difficulty ratings included in posts
- Time estimates for repairs

## Git Conventions
- Descriptive commit messages
- Main branch: `main`
- Auto-deploy on push to main
