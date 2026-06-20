# BRAIN.md

## What this app does
An animated landing page for the "Soul Blaze" anime series — styled like One Punch Man / Dragon Ball Z. Features a particle-canvas hero, character cards, transformation power bars, episode listings, and scroll-triggered animations.

## Current state
✅ **BUILD PASSES** — `npm run build` exits 0, all 5 static pages generated, zero TS errors.
✅ **ROOT CAUSE FIXED** — Empty `pages/` files (`_app.tsx`, `_document.tsx`, `_error.tsx`) deleted from workspace. These were causing `PageNotFoundError: Cannot find module for page: /_document` during the build's "Collecting page data" phase because Next.js 14.2's hybrid Router tried to load them.
✅ All 5 components built: AnimeHero, AnimeCharacters, AnimeTransformations, AnimeEpisodes, AnimeFooter.
✅ Framer Motion scroll animations + canvas particle system + CSS energy effects.
✅ Pushed to GitHub: https://github.com/Goatkenziee/anime-series-landing
❌ Deploy to Vercel blocked — "temporarily unavailable due to platform configuration" on the deployment service. Code is ready to deploy manually.

## Tech stack
- Next.js 14.2.5 (App Router)
- TypeScript
- Tailwind CSS 3.4
- Framer Motion 11.3
- Canvas API (hero particle system)

## What has been built
- **app/page.tsx** — Main landing page composing all sections
- **app/layout.tsx** — Root layout with Inter font + metadata
- **app/globals.css** — Tailwind base + custom scrollbar + gradient background
- **app/error.tsx** — Error boundary UI
- **app/not-found.tsx** — 404 page
- **app/sitemap.ts** — Auto-generated sitemap
- **components/anime-hero.tsx** — Full-screen hero with particle canvas, energy aura, title + CTA buttons
- **components/anime-characters.tsx** — 4 character cards (Ryo, Luna, Kael, Sakura) with element orbs
- **components/anime-transformations.tsx** — 4 power-level bars (Base → Soul Ascension)
- **components/anime-episodes.tsx** — 6 episode cards with streaming status
- **components/anime-footer.tsx** — Footer with brand, links, social icons
- **components/ui/button.tsx** — shadcn-style button with variants
- **components/ui/card.tsx** — shadcn-style card
- **lib/utils.ts** — cn() utility (clsx + tailwind-merge)
- **tailwind.config.ts** — Custom colors (primary/secondary), animations (pulse-glow, float, energy-ball)
- **next.config.mjs** — reactStrictMode + unoptimized images

## Latest verification
- `npm run build` — ✅ exit 0, compiled successfully, 5 static pages generated
- TypeScript — ✅ zero errors
- Lint — ✅ passed
- Pages directory — ✅ deleted (was causing build failure)

## What's still pending
- **Deploy to Vercel** — blocked by platform config. User should deploy manually:
  1. Go to https://vercel.com/new
  2. Import the GitHub repo: https://github.com/Goatkenziee/anime-series-landing
  3. Deploy — no env vars needed

## User preferences detected
- Anime / DBZ / One Punch Man aesthetic
- Dark theme with orange/purple gradients
- Particle effects and energy auras
- Scroll-triggered animations

## Run notes
- Last updated: 2026-06-20T15:10:00.000Z
- Autonomous iteration: 1 (build fix pass)
- Deploy blocked — platform config issue
