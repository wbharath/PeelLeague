# Super Peel League — Website

Single-page static site for the Super Peel League (SPL), Peel Region, Ontario.

**Stack:** React 19 + Vite, plain CSS. No backend. `npm run build` outputs static files to `dist/`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
```

## Editing content
Everything (teams, fixtures, results, points table, gallery, sponsors, contact info) lives in **`src/data.js`**.

### Adding your photos
1. Put images in `public/gallery/` (e.g. `final-2026.jpg`). Resize to ~1600px wide / under 500 KB each.
2. In `src/data.js`, change the `gallery` entries: `src: '/gallery/final-2026.jpg'`.
3. Optional: `wide: true` or `tall: true` makes a tile span two columns or rows.
4. The hero background is `public/gallery/hero.svg`. Replace it and update the path in `src/index.css`.

## Deploy to a custom domain (Cloudflare Pages, Netlify or Vercel, all with a free tier)
1. Push this folder to a GitHub repo.
2. Import the repo in Cloudflare Pages, Netlify or Vercel. Build command: `npm run build`. Output dir: `dist`.
3. Buy a domain (e.g. `superpeelleague.ca` / `.com`) from Cloudflare Registrar, Namecheap, etc.
4. In the host's dashboard, add the custom domain and follow its DNS instructions. HTTPS is automatic.
Every push to `main` redeploys automatically.
