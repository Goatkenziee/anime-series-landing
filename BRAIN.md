# BRAIN.md

## What this app does
An anime series landing page for "Chrono Strike" — styled like Dragon Ball Z / One Punch Man with dark theme, orange/purple accents, smooth scroll animations, and particle background.

## Current state
VERIFICATION FIX PASS 1/2 — complete. All 3 issues resolved:
1. ✅ Missing `Footer` component created at `components/Footer.tsx`
2. ✅ TypeScript passes cleanly (npx tsc --noEmit exits 0)
3. ✅ Production build succeeds (next build exits 0)

## Tech stack
- Next.js 14.2 (App Router + Pages Router hybrid)
- React 18
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 11 (animations)
- clsx + tailwind-merge (class utilities)

## What has been built
- app/globals.css — global styles, custom scrollbar, keyframes
- app/layout.tsx — root layout with metadata, fonts
- app/not-found.tsx — 404 page
- app/page.tsx — main page assembly (all components wired)
- app/sitemap.ts — sitemap generation
- components/Navbar.tsx — sticky nav with scroll-aware glass effect
- components/HeroSection.tsx — full-screen hero with animated title/CTAs
- components/SynopsisSection.tsx — story synopsis with staggered reveal
- components/CharactersSection.tsx — character cards with hover effects
- components/ParticleBackground.tsx — animated particle canvas
- components/ErrorBoundary.tsx — React error boundary wrapper
- components/Footer.tsx — site footer with links + social icons
- pages/_app.tsx — Pages Router app wrapper
- pages/_document.tsx — Pages Router document wrapper
- tailwind.config.ts — custom colors, animations, breakpoints
- tsconfig.json — path aliases (@/*)

## Latest verification
- ✅ TypeScript: npx tsc --noEmit — zero errors
- ✅ Build: next build — compiled successfully, all routes static
- ✅ No missing modules or unresolved imports

## What's still pending
- Deploy to Vercel (if GitHub/deploy tools are available)
- Any further feature additions the user requests

## User preferences detected
- Dragon Ball Z / One Punch Man style anime aesthetic
- Dark theme with orange/purple accent colors
- Smooth scroll animations
- Particle background

## Run notes
- Last updated: 2026-06-20T07:34:00.375Z
- Autonomous iteration: 2
- VERIFICATION FIX PASS 1/2 completed: created Footer.tsx, all builds pass
