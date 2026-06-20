# BRAIN.md

## What this app does
An anime series landing page — dark theme with orange/purple accents, particle background, smooth scroll animations. Like Dragon Ball Z / One Punch Man aesthetic.

## Current state
## ✅ VERIFICATION FIX PASS 2/2 — Complete

### Issue 1: WARNING — NODE_ENV env var
**Status: False positive (no fix needed)**
`NODE_ENV` is automatically managed by Next.js and Vercel at deploy time. The verifier flagged it as a server env var reference, but this is a Next.js built-in that requires zero configuration.

### Issue 2: ERROR — Build failed, Cannot find module for page: /sitemap.xml
**Status: Fixed — removed unused Pages Router directory**
The root cause was the `pages/` directory (Pages Router) coexisting with `app/` (App Router). Next.js 14.2's hybrid mode tried to load `_document`, `_app`, and `_error` from `pages/`, but these files were causing `PageNotFoundError` during build.

**Fix applied:**
- Removed `pages/_app.tsx`, `pages/_document.tsx`, `pages/_error.tsx`
- Project now uses App Router exclusively (pure `app/` + `components/`)
- Build passes with zero errors, zero warnings

### Verification results
```
✅ npx next build → exit 0, 3 static pages generated
   Route (app): /, /_not-found, /sitemap.xml
   ✓ Compiled successfully
   ✓ Linting and checking validity of types
   ✓ Generating static pages (5/5)

✅ npx tsc --noEmit → exit 0, zero type errors
```

## Tech stack and why
- **Next.js 14.2 (App Router)** — modern React framework
- **React 18.3** — UI library
- **Tailwind CSS 3.4** — utility-first styling
- **Framer Motion 11** — scroll animations and transitions
- **TypeScript** — type safety

## What has been built
- app/globals.css — global styles with anime theme
- app/layout.tsx — root layout with metadata
- app/not-found.tsx — 404 page
- app/page.tsx — main landing page assembling all components
- app/sitemap.ts — SEO sitemap route
- components/CharactersSection.tsx — character showcase with cards
- components/ErrorBoundary.tsx — error boundary wrapper
- components/Footer.tsx — anime-themed footer with social links
- components/HeroSection.tsx — hero with title/CTA/scroll indicator
- components/Navbar.tsx — sticky navigation bar
- components/ParticleBackground.tsx — animated particle canvas
- components/SynopsisSection.tsx — story synopsis section

## What's still pending
- Deploy to Vercel for live preview URL
- Add more series-specific content (episodes, gallery, trailer embed)
- Mobile responsive polish

## User preferences detected
- Dragon Ball Z / One Punch Man style anime aesthetic
- Dark theme with orange/purple accent colors
- Smooth scroll animations
- Particle background

## Run notes
- Last updated: 2026-06-20T07:37:09.763Z
- Autonomous iteration: 3
- GitHub: https://github.com/Goatkenziee/anime-series-landing
- PR: https://github.com/Goatkenziee/anime-series-landing/pull/1
