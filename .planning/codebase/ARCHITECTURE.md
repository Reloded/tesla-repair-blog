# ARCHITECTURE

> System design and patterns for tesla-repair-blog

**Last updated:** 2026-01-13

---

## Pattern Overview

**Static Site Generator (SSG)**

Simple build-time rendering pattern:
1. Source files (Markdown, Nunjucks) in `src/`
2. 11ty processes and renders at build time
3. Static HTML output to `_site/`
4. No server runtime required

---

## Layers

```
┌─────────────────────────────────────┐
│           Content Layer             │
│  src/posts/*.md (Blog articles)     │
├─────────────────────────────────────┤
│          Template Layer             │
│  src/_includes/*.njk (Layouts)      │
├─────────────────────────────────────┤
│         Page Layer                  │
│  src/*.njk (Index, Guides, etc.)    │
├─────────────────────────────────────┤
│          Asset Layer                │
│  src/css/, src/images/              │
├─────────────────────────────────────┤
│          Build Layer                │
│  .eleventy.js (Configuration)       │
└─────────────────────────────────────┘
            ↓ npm run build
┌─────────────────────────────────────┐
│          Output (_site/)            │
│  Static HTML, CSS, assets           │
└─────────────────────────────────────┘
```

---

## Data Flow

1. **Build triggered:** `npm run build` or `npm run start`
2. **11ty processes:**
   - Loads `src/_data/metadata.json` as global data
   - Collects posts from `src/posts/*.md`
   - Applies templates from `src/_includes/`
   - Copies static assets (CSS, images, robots.txt)
3. **Output generated:** Complete static site in `_site/`

---

## Key Abstractions

**Collections:**
- `posts` - All blog posts sorted by date (defined in `.eleventy.js`)

**Filters:**
- `dateFormat` - Formats dates for display (defined in `.eleventy.js`)

**Layouts:**
- `base.njk` - Main HTML wrapper with head, nav, footer
- `post.njk` - Individual blog post template

---

## Entry Points

| Entry | File | Purpose |
|-------|------|---------|
| Build config | `.eleventy.js` | 11ty configuration |
| Homepage | `src/index.njk` | Landing page |
| Posts collection | `src/posts/*.md` | Blog content |

---

## Rendering Flow

```
Markdown Post → Nunjucks Processing → post.njk Layout → base.njk → HTML Output
```

Each post:
1. Frontmatter parsed (title, date, description, etc.)
2. Markdown converted to HTML
3. Wrapped in `post.njk` template
4. Wrapped in `base.njk` layout
5. Written to `_site/posts/[slug]/index.html`
