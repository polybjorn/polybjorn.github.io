# Polybjorn v2

Personal portfolio and CV site for Bjørn A. Andersen — maker, designer, fabricator.

## Stack

- **Astro 5** (SSG, no framework)
- Vanilla CSS, no Tailwind
- Hosted on Cloudflare
- Dev server: `npm run dev` on port 4321

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

## Bilingual site

The site is in **English** (default, `/`) and **Norwegian** (`/no/`). Content data files (`cv.js`, `translations.js`) have `en` and `no` keys — always update both languages when editing content.

## Conventions

- Keep data in `src/data/*.js` — pages import from there
- CV skills and software lists are alphabetically sorted
- Commit messages should be short and descriptive
