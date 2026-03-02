# polybjorn.com

Personal website for Bjørn A. Andersen — 3D printing, CAD design, fabrication and courses based on Røvær, Haugesund.

## What this is

This is my personal portfolio and contact point. It lists who I am, what I do, where to find my work, and how to reach me. The site is deliberately minimal — no tracking, no ads, no frameworks beyond what's needed.

## Stack

- **[Astro](https://astro.build)** — static site generator
- **[GitHub Pages](https://pages.github.com)** — hosting
- **[GitHub Actions](https://github.com/features/actions)** — automatic deployment on push
- **[Cloudinary](https://cloudinary.com)** — image hosting and transformation
- **[Cloudflare](https://cloudflare.com)** — DNS
- **[Umami](https://umami.is)** — cookieless, privacy-friendly analytics

## Structure

Bilingual — English and Norwegian. Gallery of made and found things. CV. All content lives in `src/data/` — gallery images, CV entries, and translations are plain JS objects, easy to edit.

## Privacy

- No cookies
- No ads or third-party tracking
- Analytics via Umami — cookieless, no personal data collected
- Phone and email are base64-encoded in the HTML to reduce scraping
