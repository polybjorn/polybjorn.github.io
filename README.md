# polybjorn.com

Source for both [polybjorn.com](https://polybjorn.com) (English) and [polybjorn.no](https://polybjorn.no) (Norwegian). The Norwegian site deploys to [polybjorn/polybjorn-no](https://github.com/polybjorn/polybjorn-no).

## Assets

- [Icons8](https://icons8.com) — icons
- [Lucide](https://lucide.dev) — icons
- [Piazzolla](https://fontsource.org/fonts/piazzolla) — typeface

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

