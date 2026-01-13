# STACK

> Technology stack for tesla-repair-blog

**Last updated:** 2026-01-13

---

## Languages

**Primary:**
- JavaScript (ES6+) - Build configuration and 11ty plugins

**Templating:**
- Nunjucks (.njk) - Page templates and layouts
- Markdown (.md) - Blog post content

**Styling:**
- CSS - Custom styles

---

## Runtime

- **Node.js** - Required for build process
- **Version:** Not specified (LTS recommended per README)

---

## Frameworks

**Static Site Generator:**
- Eleventy (11ty) 2.0.1 - `package.json`

**Templating Engine:**
- Nunjucks - Configured in `.eleventy.js`

---

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @11ty/eleventy | ^2.0.1 | Static site generator |
| @11ty/eleventy-plugin-rss | ^1.2.0 | RSS feed generation |

---

## Package Manager

- **npm** - `package-lock.json` present
- No additional build tools (Webpack, Vite, etc.)

---

## Configuration Files

| File | Purpose |
|------|---------|
| `.eleventy.js` | 11ty configuration, plugins, filters, collections |
| `package.json` | Dependencies and npm scripts |
| `src/_data/metadata.json` | Site metadata (title, URL, description) |

---

## Build Scripts

```json
{
  "build": "eleventy",
  "start": "eleventy --serve",
  "deploy": "eleventy && echo 'Site built!'"
}
```

---

## Platform

- **Target:** Static HTML/CSS (no server runtime)
- **Hosting:** Netlify (recommended in README)
- **Output:** `_site/` directory
