# BRAIN.md

## What this app does
Anime-style landing page for the "Soul Blaze" animated series — like One Punch Man or Dragon Ball Z.

## Current state
Build succeeds (exit 0). All components render. Fixed the stale `pages/` directory that caused `/_document` not-found error.

## Tech stack and why
- **Next.js 14.2.5** (App Router) — modern React, static generation
- **Tailwind CSS 3.4** — utility-first styling
- **Framer Motion 11** — scroll-triggered animations
- **TypeScript** — type safety

## What has been built
- `app/page.tsx` — main landing page composing all sections
- `app/layout.tsx` — root layout with Inter font + metadata
- `app/globals.css` — Tailwind base + custom scrollbar + dark theme
- `app/error.tsx` — client error boundary
- `app/not-found.tsx` — 404 page
- `app/sitemap.ts` — dynamic sitemap
- `components/anime-hero.tsx` — fullscreen hero with particle canvas + CTA buttons
- `components/anime-characters.tsx` — 4 character cards with element orbs
- `components/anime-transformations.tsx` — power-level progression bars
- `components/anime-episodes.tsx` — 6 episode cards with status badges
- `components/anime-footer.tsx` — 3-column footer with links + social
- `components/ui/button.tsx` — shadcn-style button with variants
- `components/ui/card.tsx` — shadcn-style card
- `lib/utils.ts` — cn() utility

## Latest verification
Build: ✅ `npm run build` exits 0, all routes static
TypeScript: ✅ Compiled successfully

## What's still pending
- Deploy to Vercel (needs Vercel integration reconnection)

## User preferences detected
- Anime/DBZ aesthetic: dark bg, orange/purple gradients, particles, power levels
- Keep changes focused, modern, and production-ready

## Run notes
- Last updated: 2026-06-20T15:00:54.400Z
- Autonomous iteration: 1
- Fix: removed stale empty `pages/` dir + cleared `.next/` cache
