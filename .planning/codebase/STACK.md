# Stack Documentation

## Languages
- **JavaScript** (Node.js) - Build configuration
- **HTML/Nunjucks** (.njk) - Template engine
- **Markdown** (.md) - Content authoring
- **CSS** - Styling (CSS3 with custom properties)

## Frameworks
- **Eleventy (11ty)** v2.0.1 - Static site generator
  - Template engine: Nunjucks
  - Markdown processing: markdown-it
  - File watching and dev server built-in

## Key Dependencies
```json
{
  "@11ty/eleventy": "^2.0.1",
  "@11ty/eleventy-plugin-rss": "^1.2.0"
}
```

## Build Tools
- **npm** - Package manager
- **Scripts:**
  - `npm run build` - Generate static site to `_site/`
  - `npm run start` - Dev server with hot-reload (localhost:8080)
  - `npm run deploy` - Build + deployment message

## Configuration Files
- `.eleventy.js` - Build configuration, plugins, filters, collections
- `package.json` - Dependencies and npm scripts
- `.gitignore` - Excludes node_modules, _site

## Node.js Requirements
- Minimum Node 14+ required
- npm for package management
