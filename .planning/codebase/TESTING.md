# TESTING

> Test structure and practices for tesla-repair-blog

**Last updated:** 2026-01-13

---

## Test Framework

**Not detected** - No testing framework configured.

This is common for simple static sites where:
- Build success = site works
- Visual inspection during development (`npm run start`)
- No runtime logic to test

---

## Test Files

None present. No `*.test.js`, `*.spec.js`, or `__tests__/` directories found.

---

## Quality Assurance

**Current approach:**

1. **Local preview:** `npm run start` serves site at localhost:8080
2. **Build validation:** `npm run build` fails if templates have syntax errors
3. **Manual review:** Visual inspection of pages

---

## Recommended Testing (Future)

If testing is needed:

**HTML validation:**
```bash
npm install -D html-validate
npx html-validate "_site/**/*.html"
```

**Link checking:**
```bash
npm install -D broken-link-checker
blc http://localhost:8080 -ro
```

**Lighthouse CI:**
```bash
npm install -D @lhci/cli
lhci autorun
```

---

## Build Verification

The build process itself provides basic validation:

| Check | How it fails |
|-------|--------------|
| Template syntax | 11ty build error |
| Missing includes | 11ty build error |
| Invalid frontmatter | 11ty build error |
| Missing dependencies | npm install fails |

---

## Coverage

Not applicable - no testable runtime code.

---

## CI/CD

Not configured. Deployment is manual:
1. Run `npm run build`
2. Upload `_site/` to Netlify

**Recommended:** Connect to GitHub for automatic Netlify deploys.
