# BRAIN.md

## What this app does
An animated landing page for "CHRONO STRIKE" — an anime series inspired by Dragon Ball Z and One Punch Man.

## Current state
**Build succeeds perfectly.** All pages compiled, zero errors, zero warnings.
Both App Router (`/`, `/_not-found`) and Pages Router (`/_app`, `/_document`) compile successfully.

## Tech stack
- Next.js 14.2.35 (hybrid App Router + Pages Router)
- Tailwind CSS 3.4
- TypeScript
- Framer Motion (for scroll animations)
- Canvas-based particle background

## What has been built
- CRITERIA.md
- PROJECT_STATE.json
- app/globals.css (dark theme, gradient text, scroll animations, custom scrollbar)
- app/layout.tsx (root layout with Poppins font, metadata)
- app/not-found.tsx (404 page)
- app/page.tsx (main page assembling all components)
- components/Navbar.tsx (sticky nav with scroll-based glass effect, smooth scroll links)
- components/HeroSection.tsx (title "CHRONO STRIKE", subtitle, CTA buttons, scroll indicator)
- components/SynopsisSection.tsx (scroll-driven fade-in story paragraphs, quote block)
- components/CharactersSection.tsx (4 character cards: Kael, Seraphina, Draven, Mira)
- components/ParticleBackground.tsx (canvas-based orange particle system with connections)
- pages/_document.tsx (Next.js custom Document)
- pages/_app.tsx (Next.js custom App)
- next.config.js
- package.json
- postcss.config.js
- tailwind.config.ts
- tsconfig.json
- next-env.d.ts

## Latest verification
**`next build` → exit 0 ✅**
- Compiled successfully
- Linting and types pass
- Static pages generated (4/4)
- Both App Router and Pages Router routes compiled

## What's still pending
- **Vercel deploy**: Blocked — integration expired. User needs to reconnect at Settings → Integrations → Vercel.

## User preferences detected
- Dragon Ball Z / One Punch Man style anime aesthetic
- Dark theme with orange/purple accent colors
- Smooth scroll animations
- Particle background

## Run notes
- Last updated: 2026-06-20
- GitHub: https://github.com/Goatkenziee/anime-series-landing
