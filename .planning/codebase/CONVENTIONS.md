# CONVENTIONS

> Code style and patterns for tesla-repair-blog

**Last updated:** 2026-01-13

---

## Code Style

**JavaScript (`.eleventy.js`):**
- No semicolons (inferred)
- Single quotes for strings
- 2-space indentation
- ES6 module.exports pattern
- Arrow functions for callbacks

**CSS (`src/css/style.css`):**
- CSS custom properties (variables) for colors
- Mobile-first responsive design
- BEM-like class naming (e.g., `.card-grid`, `.article-card`)
- Media queries at 768px breakpoint

---

## File Naming

| Type | Convention | Example |
|------|------------|---------|
| Blog posts | kebab-case with `tesla-` prefix | `tesla-brake-pad-replacement.md` |
| Templates | kebab-case | `base.njk`, `post.njk` |
| Pages | kebab-case | `guides.njk`, `about.njk` |
| Config files | dot-prefix or standard names | `.eleventy.js`, `package.json` |

---

## Template Patterns

**Nunjucks blocks:**
```nunjucks
{% block content %}{% endblock %}
```

**Includes:**
```nunjucks
{% include "partial.njk" %}
```

**Filters:**
```nunjucks
{{ post.date | dateFormat }}
```

**Loops:**
```nunjucks
{% for post in collections.posts %}
  ...
{% endfor %}
```

---

## Markdown Patterns

**Frontmatter:** YAML format with required fields:
- `title`, `description`, `date`, `layout`, `tags`

**Optional frontmatter:**
- `difficulty`, `time`, `cost`, `models`

**Content structure:**
- H2 (`##`) for main sections
- H3 (`###`) for subsections
- Affiliate links use Amazon search format
- Tool lists with prices

---

## Affiliate Link Format

```markdown
[Product Name](https://www.amazon.com/s?k=product+keywords&tag=AFFILIATE-ID-20)
```

---

## Comment Style

**JavaScript:**
```javascript
// Single line comments
```

**Nunjucks:**
```nunjucks
{# Template comments #}
```

**No JSDoc or formal documentation** - codebase is simple enough to be self-documenting.

---

## Git Conventions

- `.gitignore` excludes `node_modules/` and `_site/`
- No specific commit message convention detected

---

## Data Patterns

**Global data** in `src/_data/`:
- JSON format
- Accessed directly by key in templates (e.g., `{{ metadata.title }}`)

**Post data:**
- YAML frontmatter
- Accessed via `post.*` in templates
