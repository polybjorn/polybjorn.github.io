# Polybjorn v2

Personal portfolio and CV site for Bjørn A. Andersen.

## Rules

- Always update both `en` and `no` when editing content — the site is bilingual (English at `/`, Norwegian at `/no/`)
- Use `npm`, not yarn or bun
- Do not auto-commit — only commit when explicitly asked
- Keep CV skills and software lists alphabetically sorted
- Keep data in `src/data/*.js` — pages import from there
- Prefer editing existing files over creating new ones

## Project structure

```
src/
  layouts/Layout.astro        — shared layout
  pages/                      — English pages (default)
  pages/no/                   — Norwegian pages (mirrors English structure)
  data/cv.js                  — CV content (experience, education, skills, software)
  data/translations.js        — UI strings for both languages
  data/made.js                — gallery data (things I made)
  data/found.js               — gallery data (things I found)
```

## Stack

- Astro 5 (SSG, no framework), vanilla CSS
- Hosted on Cloudflare
- Dev server: `npm run dev` on port 4321
