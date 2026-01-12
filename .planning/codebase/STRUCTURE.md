# Structure Documentation

## Directory Layout
```
tesla-repair-blog/
├── .claude/                    # GSD commands and workflows
│   ├── commands/gsd/           # GSD slash commands
│   └── get-shit-done/          # GSD templates and workflows
├── .planning/                  # Project planning (GSD)
│   └── codebase/               # Codebase documentation
├── src/                        # Source files (Eleventy input)
│   ├── _data/                  # Global data files
│   │   └── metadata.json       # Site configuration
│   ├── _includes/              # Template partials
│   │   ├── base.njk            # Master HTML template
│   │   └── post.njk            # Article template
│   ├── css/                    # Stylesheets
│   │   └── style.css           # Main stylesheet
│   ├── images/                 # Image assets
│   ├── posts/                  # Blog articles (Markdown)
│   │   └── *.md                # 11 Tesla repair articles
│   ├── feed.njk                # RSS/Atom feed template
│   ├── index.njk               # Homepage template
│   ├── robots.txt              # SEO crawler directives
│   └── sitemap.njk             # XML sitemap template
├── _site/                      # Build output (gitignored)
├── .eleventy.js                # Eleventy configuration
├── package.json                # Dependencies and scripts
├── new-article.bat             # Article creation script
└── build-and-preview.bat       # Local dev script
```

## Key Files
| File | Purpose |
|------|---------|
| `.eleventy.js` | Build config, plugins, filters, collections |
| `src/_data/metadata.json` | Site URL, title, description |
| `src/_includes/base.njk` | HTML shell, analytics, meta tags |
| `src/_includes/post.njk` | Article layout with affiliate box |
| `src/posts/*.md` | Content with affiliate links |

## Module Organization
- **Templates:** `src/_includes/` - Nunjucks layouts
- **Content:** `src/posts/` - Markdown articles
- **Static:** `src/css/`, `src/images/` - Passthrough assets
- **SEO:** `feed.njk`, `sitemap.njk`, `robots.txt`
