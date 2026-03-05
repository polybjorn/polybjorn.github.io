# [polybjorn.com](https://polybjorn.com)

Personal portfolio and contact point — who I am, what I do, where to find my work, and how to reach me.

Bilingual — English at [polybjorn.com](https://polybjorn.com), Norwegian at [polybjorn.no](https://polybjorn.no). This repo contains the source code for both. The Norwegian site is deployed separately to [polybjorn/polybjorn-no](https://github.com/polybjorn/polybjorn-no).

## Stack

- **[Astro](https://astro.build)** — static site generator, with **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
- **[Cloudflare](https://cloudflare.com)** — DNS
- **[Cloudinary](https://cloudinary.com)** — image hosting and transformation
- **[GitHub Pages](https://pages.github.com)** — hosting
- **[GitHub Actions](https://github.com/features/actions)** — automatic deployment on push
- **[Umami](https://umami.is)** — cookieless, privacy-friendly analytics

## Assets

- **[Lucide](https://lucide.dev)** — icons
- **[Piazzolla](https://fontsource.org/fonts/piazzolla)** — typeface

## Structure

```
src/
  layouts/Layout.astro      — shared layout
  pages/                    — English pages
  pages/no/                 — Norwegian pages
  data/                     — content as plain JS objects
scripts/
  prepare-deploy.mjs        — splits build output for two-repo deploy
```

## Privacy

- No ads or third-party tracking
- Analytics via Umami — cookieless, no personal data collected
- Encoded information in the HTML to reduce scraping
