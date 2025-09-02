# Hyperion Dev Studio — Site

A Vite + React + TypeScript single-page site with a hash-routed Blog and an apps showcase.

## Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages
- Update `base` in `vite.config.ts` to `'/<your-repo>/'`
- Add `.github/workflows/deploy.yml` (provided)

## Routes
- `/#` or `/` — Landing
- `/#/blog` — Blog index
- `/#/blog/<slug>` — Blog article

