# BRAIN.md

## What this app does
Anime series landing page for "Shadow Realm Saga" — a Dragon Ball Z / One Piece style animated landing page with particle effects, character showcase, episodes section, and transformations gallery.

## Current state
✅ **VERIFICATION FIX PASS 1/2 — Complete.** All TypeScript errors in `components/anime-hero.tsx` fixed.

## Tech stack
- Next.js 14.2.5 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- class-variance-authority + tailwind-merge + clsx (UI utilities)

## What has been built
- `.gitignore`
- `CRITERIA.md`
- `PROJECT_STATE.json`
- `app/error.tsx` — Client error boundary with gradient theme
- `app/globals.css` — Global styles + gradient text utility
- `app/layout.tsx` — Root layout with SEO metadata (OG, Twitter, robots)
- `app/not-found.tsx` — Custom 404 page
- `app/page.tsx` — Main page assembling all sections
- `app/sitemap.ts` — Auto-generated sitemap
- `components/anime-hero.tsx` — Hero with particle canvas animation
- `components/anime-characters.tsx` — Character showcase grid
- `components/anime-episodes.tsx` — Episode listing
- `components/anime-footer.tsx` — Footer with links
- `components/anime-transformations.tsx` — Transformation gallery
- `components/ui/button.tsx` — Reusable button component
- `components/ui/card.tsx` — Reusable card component
- `lib/utils.ts` — cn() utility
- `next-env.d.ts`
- `next.config.js` / `next.config.mjs`
- `package.json`
- `postcss.config.mjs`
- `public/robots.txt`
- `tailwind.config.ts`
- `tsconfig.json`

## Latest verification
- ✅ TypeScript check: `npx tsc --noEmit` passes (exit 0)
- ✅ Production build: `npm run build` passes (exit 0)
- All 26 files present and consistent

## What's still pending
- Vercel deployment (blocked by platform tool availability)
