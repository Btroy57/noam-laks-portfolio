# Noam Laks — Portfolio

Personal portfolio recreated as a [Next.js](https://nextjs.org) app (App Router), styled to match the original cream-and-terracotta editorial layout.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Main UI lives in `components/Portfolio.tsx`; global styles are in `app/globals.css`. Fonts use `next/font` (`Playfair Display`, `DM Sans`) in `app/layout.tsx`.

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com/new), import the repository.
3. Use the default settings (Framework Preset: Next.js, Build Command: `next build`, Output: handled automatically).

No extra environment variables are required. Remote images use `images.unsplash.com` (allowed in `next.config.ts`).
