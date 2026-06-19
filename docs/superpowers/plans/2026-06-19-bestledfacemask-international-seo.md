# Best LED Face Mask International SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish `bestledfacemask.org` as an independent international comparison publisher with correct market routing, trustworthy content signals, and complete technical SEO/GEO foundations.

**Architecture:** Centralize site identity and market configuration, generate metadata/schema/crawler surfaces from those sources, and add global and US ranking routes without changing the Canada page's visible experience. Regression scripts enforce domain independence and protect the Canada ranking.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, pnpm/Turborepo, Node verification scripts, JSON-LD, XML sitemap, robots.txt, llms.txt.

---

### Task 1: Domain-independence regression gate

**Files:**
- Create: `scripts/verify-domain-independence.mjs`
- Modify: `package.json`

- [ ] Write a verification script that recursively scans production source and public text files and fails on the legacy comparison domain, old support email addresses, or old-domain canonical/schema URLs.
- [ ] Run `node scripts/verify-domain-independence.mjs` and confirm it fails against the current repository.
- [ ] Add the script to the root `verify` command.

### Task 2: Independent site identity and crawl surfaces

**Files:**
- Modify: `apps/site/src/lib/brand.ts`
- Modify: `apps/site/src/lib/metadata.ts`
- Modify: `apps/site/src/components/seo/StructuredData.tsx`
- Modify: `apps/site/src/components/seo/NoscriptContent.tsx`
- Modify: `apps/site/src/legacy-pages/Legal.tsx`
- Modify: `apps/site/next.config.ts`
- Modify: `apps/site/public/robots.txt`
- Modify: `apps/site/public/sitemap.xml`
- Modify: `apps/site/public/llms.txt`
- Modify: `apps/site/public/llms-full.txt`

- [ ] Change the shared site URL to `https://www.bestledfacemask.org` and support email to `support@bestledfacemask.org`.
- [ ] Replace old-domain schema IDs, canonicals, social URLs, noscript links, crawler references, legal copy, and remote-image configuration.
- [ ] Make every canonical route self-reference the new domain.
- [ ] Run the domain-independence gate and confirm it passes.

### Task 3: Market model, hreflang, and storefront routing

**Files:**
- Modify: `apps/site/src/lib/advertorialMarkets.ts`
- Modify: `apps/site/src/lib/marketContext.ts`
- Modify: `apps/site/src/lib/metadata.ts`
- Modify: `apps/site/src/components/MarketLocalizedContent.tsx`
- Modify: `scripts/verify-localization.mjs`

- [ ] Add `global` and `us` market definitions with locale, currency, labels, prices, route, time zone, and Buudy URL.
- [ ] Point the UK market to `https://www.buudy.co.uk/products/buudy-led-mask`.
- [ ] Generate reciprocal hreflang entries for global, UK, AU, CA, and US pages.
- [ ] Keep explicit route market selection ahead of geolocation.
- [ ] Expand localization verification for US and global routing while preserving all Canada assertions.

### Task 4: Global and United States commercial pages

**Files:**
- Create: `apps/site/src/app/best-led-face-mask-2026/page.tsx`
- Create: `apps/site/src/app/best-led-face-mask-us-2026/page.tsx`
- Modify: `apps/site/src/legacy-pages/NewAdvertorial.tsx`
- Modify: `apps/site/src/components/seo/StructuredData.tsx`
- Modify: `apps/site/src/components/seo/NoscriptContent.tsx`
- Modify: `scripts/verify-routes.mjs`

- [ ] Add global and US App Router pages using shared advertorial components and explicit market context.
- [ ] Add global and US product-price and outbound-link localization without altering Canada output.
- [ ] Extend ItemList, Article, Product, Breadcrumb, and Video schema generation to the new markets.
- [ ] Add route verification and confirm both pages build.

### Task 5: Global homepage and internal-link architecture

**Files:**
- Modify: `apps/site/src/legacy-pages/Home.tsx`
- Modify: `apps/site/src/data/articles.ts`
- Modify: `apps/site/src/lib/metadata.ts`
- Modify: `apps/site/src/components/seo/StructuredData.tsx`

- [ ] Reframe the homepage as the global LED face mask authority hub with a matching H1, concise value proposition, country guides, commercial comparison links, and educational clusters.
- [ ] Link each educational article to the most relevant ranking and comparison pages.
- [ ] Link ranking pages back to supporting safety, wavelength, neck-coverage, and buyer guides.
- [ ] Keep affiliate disclosure visible and native navigation intact.

### Task 6: Editorial trust and YMYL cleanup

**Files:**
- Create: `apps/site/src/app/editorial-policy/page.tsx`
- Create: `apps/site/src/app/review-methodology/page.tsx`
- Create: `apps/site/src/app/corrections-policy/page.tsx`
- Modify: `apps/site/src/components/Layout.tsx`
- Modify: `apps/site/src/components/seo/StructuredData.tsx`
- Modify: `apps/site/src/legacy-pages/NewAdvertorial.tsx`
- Modify: `apps/site/src/data/articles.ts`

- [ ] Add editorial, methodology, corrections, sourcing, and affiliate standards pages.
- [ ] Use one consistent author/editor identity across visible content and schema.
- [ ] Label manufacturer-reported results and remove or soften unsupported medical certainty.
- [ ] Add contextual source links for wavelength, safety, and treatment statements.
- [ ] Preserve the Canada page's visible output by guarding shared-copy changes from the CA market.

### Task 7: Tracking independence

**Files:**
- Modify: `apps/site/public/assets/outbound-interactions-v2.js`
- Modify: `apps/site/public/assets/buudy-exit-popup.js`
- Modify: `apps/site/src/app/layout.tsx`
- Modify: `scripts/verify-tracking.mjs`

- [ ] Replace old-domain UTM attribution with `bestledfacemask.org`.
- [ ] Add market, page path, destination host, and interaction type to data-layer events.
- [ ] Support UK, AU, CA, US, and global destinations without preventing native navigation.
- [ ] Keep GTM and existing Microsoft/affiliate events functional.

### Task 8: Images, performance, and accessibility

**Files:**
- Modify: `apps/site/src/app/layout.tsx`
- Modify: `apps/site/src/legacy-pages/Home.tsx`
- Modify: `apps/site/src/legacy-pages/NewAdvertorial.tsx`
- Modify: `apps/site/next.config.ts`
- Modify: `scripts/verify-assets.mjs`

- [ ] Inventory image dimensions, formats, loading priority, and remote dependencies.
- [ ] Add explicit dimensions and priority only where they improve LCP or prevent layout shift.
- [ ] Remove unused preconnects and avoid loading hidden third-party UI.
- [ ] Validate heading order, accessible names, video controls, and focus behavior.

### Task 9: Full verification, audit artifacts, and deployment

**Files:**
- Create: `FULL-AUDIT-REPORT.md`
- Create: `ACTION-PLAN.md`
- Create: `.seo-cache/site-meta.json`
- Create: `.seo-cache/audit-scores.json`
- Modify: `.gitignore`

- [ ] Run `pnpm verify`, `pnpm lint`, `pnpm typecheck`, and `pnpm build`.
- [ ] Crawl all canonical routes and verify 200 status, self-canonical, reciprocal hreflang, unique title/H1, valid schema, and internal links.
- [ ] Confirm the Canada visible page source remains unchanged while its domain metadata is corrected.
- [ ] Produce the SEO audit and prioritized follow-up action plan.
- [ ] Commit only scoped changes, publish to GitHub, wait for deployment, and verify the live domain.
