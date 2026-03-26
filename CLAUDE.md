# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Run production server
```

No test runner is configured.

## Architecture

This is a **Next.js 16 App Router** project using TypeScript, React 19, and Tailwind CSS v4.

**Key conventions:**
- All pages/layouts live under `app/` using the App Router file convention (`page.tsx`, `layout.tsx`)
- Path alias `@/*` maps to the project root
- Tailwind v4 is configured via PostCSS (`@tailwindcss/postcss`); use `@import "tailwindcss"` in CSS, not `@tailwind` directives
- Dark mode is handled via CSS `prefers-color-scheme` in `app/globals.css` using CSS variables (`--background`, `--foreground`)
- Fonts are loaded via `next/font` in `app/layout.tsx`

**Stack versions (breaking changes likely vs training data):**
- Next.js 16.2.1 — read `node_modules/next/dist/docs/` before using any Next.js API
- Tailwind CSS v4 — config is no longer `tailwind.config.js`; configuration is done in CSS
- ESLint 9 flat config (`eslint.config.mjs`, not `.eslintrc`)
