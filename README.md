# Trustpilot Review Shop

Clean pnpm/Turborepo monorepo for the Trustpilot Review Shop LED face mask review site.

This repository contains one deployable Next.js application, `@trustpilotreview/site`, plus shared workspace packages for TypeScript, ESLint, UI, and shared utilities. The project was refactored from a mixed static/Vite export into a scalable monorepo while preserving the original content, visual output, media, tracking scripts, SEO files, and GEO/LLM files.

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- pnpm workspaces
- Turborepo
- TypeScript
- ESLint 9

## Repository Structure

```text
.
|-- apps/
|   `-- site/
|       |-- public/
|       |   |-- assets/
|       |   |-- img/
|       |   |-- llms-full.txt
|       |   |-- llms.txt
|       |   |-- robots.txt
|       |   `-- sitemap.xml
|       `-- src/
|           |-- app/
|           |-- components/
|           |-- data/
|           |-- legacy-pages/
|           `-- lib/
|-- packages/
|   |-- eslint-config/
|   |-- shared/
|   |-- tsconfig/
|   `-- ui/
|-- scripts/
|-- package.json
|-- pnpm-workspace.yaml
`-- turbo.json
```

## Applications And Packages

- `apps/site`: The only deployable app. Package name: `@trustpilotreview/site`.
- `packages/tsconfig`: Shared TypeScript configuration.
- `packages/eslint-config`: Shared ESLint configuration.
- `packages/shared`: Shared utility package, currently minimal and ready for future shared code.
- `packages/ui`: Shared UI package, currently minimal and ready for future shared components.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the site locally:

```bash
pnpm dev:site
```

Build the site:

```bash
pnpm build:site
```

Run the full monorepo build:

```bash
pnpm build
```

## Root Scripts

```bash
pnpm dev          # Run Turbo dev tasks
pnpm build        # Build all workspace packages/apps
pnpm lint         # Lint all workspace packages/apps
pnpm typecheck    # Typecheck all workspace packages/apps
pnpm dev:site     # Run only the Next.js site app
pnpm build:site   # Build only the Next.js site app
pnpm verify       # Run custom project verification scripts
```

## Canonical Routes

The deployable canonical site surface is intentionally limited to the routes from the current SEO/GEO files plus legal pages:

```text
/
/best-led-face-mask-uk-2026
/best-led-face-mask-au-2026
/best-led-face-mask-ca-2026
/currentbody-vs-buudy
/theraface-vs-other-masks
/deluxeskin-vs-buudy
/qureskincare-vs-buudy
/silicone-led-mask-dangers
/floating-head-warning
/missing-colors-expose
/led-density-scam
/brand-name-premium
/privacy
/terms
/disclosure
/contact
/blog/red-light-therapy-ultimate-guide
/blog/blue-red-light-blemish-prone-skin
/blog/led-masks-for-mature-skin
/blog/led-mask-face-neck-coverage-guide
/blog/choosing-safe-led-mask
/blog/understanding-led-light-colours
```

## Legacy Redirects

The following old or non-canonical paths are configured as permanent redirects to `/best-led-face-mask-uk-2026` in `apps/site/next.config.ts`:

```text
/new
/new-advertorial
/best-led-face-mask-in-uk
/best-red-light-therapy-mask
/best-red-light-therapy-mask/:path*
/top-5-led-mask
/top-5-led-mask/:path*
/pages/buudy-led-mask
/pages/buudy-led-mask/:path*
/pages/buudy-led-face-mask
/pages/buudy-led-face-mask/:path*
/buudy-led-mask-uk
/buudy-led-mask-uk/:path*
/therabody-vs-buudy
/therabody-vs-buudy/:path*
/pages/buudy-led-mask-product-redesign
/pages/buudy-led-mask-product-redesign/:path*
```

## Public Assets

Only the referenced local public assets are kept:

```text
/assets/microsoft-consent-mode.js
/assets/buudy-outbound-failsafe.js
/assets/buudy-exit-popup.js
/assets/buudy-dermatologist-verdict-poster.jpg
/assets/buudy-dermatologist-verdict.mp4
/img/dense_led_macro_1774237501628.png
/img/luxury_mask_markup_1774237538064.png
/img/neck_led_mask_1774237229811.png
/img/seven_colors_mask_1774237479088.png
/robots.txt
/sitemap.xml
/llms.txt
/llms-full.txt
```

The SEO/GEO text files are served from `apps/site/public` and should remain stable unless the content strategy changes intentionally.

## Advertorial Markets

The main advertorial is market-driven from `apps/site/src/lib/advertorialMarkets.ts`:

```text
UK  -> /best-led-face-mask-uk-2026 -> https://uk.buudy.com/products/buudy-led-mask
AU  -> /best-led-face-mask-au-2026 -> https://au.buudy.com/products/buudy-led-mask
CA  -> /best-led-face-mask-ca-2026 -> https://ca.buudy.com/products/buudy-led-mask
```

AU keeps the same ranking, design, sections, media, and conversion flow as the UK source page while localizing country wording, prices, gift values, canonical metadata, JSON-LD, noscript content, sitemap entries, and LLM/GEO files. CA keeps the same design and conversion flow, but uses a Canada-specific top five: Buudy, CurrentBody, Kala, TheraFace, and Equinox.

## SEO, GEO, And Tracking

The Next app preserves:

- Canonical metadata for canonical pages
- Open Graph and Twitter metadata
- JSON-LD structured data
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `llms-full.txt`
- Legal page `noindex, nofollow` metadata
- Microsoft consent script
- Buudy outbound failsafe script
- Buudy exit popup script
- Route-based Buudy destination handling for UK, AU, and CA advertorial pages
- Google Tag Manager script
- Tawk.to widget script

Security and cache headers live in `apps/site/next.config.ts`.

## Verification

Run:

```bash
pnpm verify
pnpm lint
pnpm typecheck
pnpm build
```

`pnpm verify` checks:

- Tracking, exit popup, and Buudy outbound conversion configuration
- Canonical route existence
- Legacy redirect configuration
- Referenced public asset existence
- Approved public asset set

Current lint status may include warnings from untouched legacy source imports. Those warnings are non-blocking and are intentionally left alone unless a future cleanup pass is allowed to modify legacy page source.

## Content Preservation Rules

This project was migrated under strict preservation constraints:

- Do not change existing copy casually.
- Do not change image, video, affiliate, or tracking URLs casually.
- Do not remove SEO/GEO files.
- Do not introduce deployable legacy routes unless they are intentionally canonical.
- Keep visual changes out of infrastructure-only edits.
- Treat `apps/site/src/legacy-pages` as preserved migrated source.

## Future GitHub And Vercel Setup

This pass is local-only. No GitHub repository or Vercel project is linked in this repo.

For a fresh GitHub repository:

1. Create a new empty GitHub repository.
2. Initialize Git in this folder if needed.
3. Commit the cleaned monorepo structure.
4. Push to the new repository.

For a fresh Vercel deployment:

1. Import the new GitHub repository into Vercel.
2. Select the monorepo app `apps/site`.
3. Use pnpm as the package manager.
4. Build command: `pnpm build` from `apps/site`, or `pnpm build:site` from the repository root.
5. Output directory: Next.js default `.next`.
6. Do not reuse the old `.vercel/project.json`; old Vercel project state was removed intentionally.

## Notes

- The site uses remote product/media images from the preserved source. Allowed remote image hosts are configured in `apps/site/next.config.ts`.
- `node_modules`, `.next`, `.turbo`, and build info files are ignored and should not be committed.
- The project currently has no Git history in this folder unless Git is initialized separately.
