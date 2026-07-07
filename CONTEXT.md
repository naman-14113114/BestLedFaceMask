# CONTEXT.md — Single Complete Memory of the Buudy / Muuhu / Juujo / BestLedFaceMask Business

> **What this file is.** The permanent, append-only working memory of the business that Sahil and Naman run together (one combined source of truth — whose work it was does not matter). Built **2026-06-27** by reading, in full, the complete handoff set:
> - `C:\Users\sahil\Downloads\2026-05-23-buudy-led-mask-redesign.md` (Buudy product-page redesign plan)
> - `C:\Users\sahil\Downloads\2026-06-19-buudy-business-ai-handoff.md` (AI-handoff build plan)
> - `C:\Users\sahil\Downloads\HANDOFF-INDEX.md` (handoff entry point / reading order)
> - `C:\Users\sahil\Downloads\SECRETS.local.md` (private credential vault #1)
> - `E:\1st YEAR DTU\New folder\trustpilot-led-mask-replica\agent.md` (the **main agent file** — a 24 MB / ~437k-line dossier + verbatim Codex-session archive)
> - `E:\1st YEAR DTU\New folder\trustpilot-led-mask-replica\agent-secrets.local.md` (private credential vault #2)
>
> It also folds in the unique facts from a previous `CONTEXT.md` draft (preserved verbatim as the gitignored backup `CONTEXT.prev-full-archive.local.md`). This file lives in the same folder as `agent.md`.

---

## 0. HOW TO USE THIS FILE — STANDING INSTRUCTIONS (read first, every time)

The rules Sahil set going forward. Not optional.

1. **RULE #1 — Always check this file before doing anything.** Before starting *any* requested work, search CONTEXT.md to see whether we've already discussed/done this exact thing.
   - **If NOT** → do the work, then **add it here as a new entry**.
   - **If YES** → do the work, then **update the existing entry** instead of duplicating it.
2. **End of every chat: update CONTEXT.md.** Append/refresh with anything new. **Never delete or shrink existing detail** — only add or extend. This file only grows. Report outcomes faithfully (failures/skips too).
3. **Treat Sahil and Naman as one team**, same goal. No need to attribute work.
4. **No space limit.** Full detail. Don't summarize away specifics (IDs, prices, URLs, paths, reasoning).
5. **Follow the Standard Work Checklist (Section 14) on every task.**
6. **Provenance honesty.** Keep facts labeled by source when it matters; never invent missing dialogue, prices, or IDs; mark uncertainty and verify against live state.

> **Cross-machine note:** Sahil's session cwd is sometimes `C:\Windows\System32`, but the business lives on drive `E:`. This file is canonical regardless of cwd: `E:\1st YEAR DTU\New folder\trustpilot-led-mask-replica\CONTEXT.md`.

---

## 1. CRITICAL OPERATING RULES (non-negotiables)

- **Scope discipline.** Do *exactly* the requested change and **preserve existing design, layout, media, animations, reviews, and product logic** unless an explicit redesign is requested. Never turn a small fix into a broad audit/redesign.
- **Ask before uncertain changes.** If a change could affect **checkout, country behavior, prices, gift offers, reviews, images/videos, SEO text, or third-party integrations** → confirm scope or make the **smallest reversible change**.
- **Verify country behavior.** Cover **US, UK, CA, AU** when multi-country. US/UK repos were confused once and a fix landed in the wrong store — always confirm exact domain + repo first.
- **Cross-store sync.** In the Muuhu/Buudy monorepos, apply each fix simultaneously across all 4 country apps (`us`, `uk`, `ca`, `au`) unless intentionally country-specific.
- **Preserve conversion assets.** Never remove gift cards, bundle logic, free-gift/torch offers, review blocks, images, videos, or trust badges unless explicitly requested.
- **No bulk-edit scripts.** Do NOT write Node/PowerShell scripts to do search-and-replace across files. Use manual/structured file edits (and subagents for breadth). Targeted, reviewable edits only.
- **Be implementation-ready.** Sahil prefers direct fixes, exact file changes, practical plans over vague strategy; concise updates; fast execution.
- **Keep secrets out of committed files.** Provider/name references + env vars in docs; raw keys only in the two ignored vaults (Section 11).
- **Never trust old chat as current state.** Inspect the live page and current source before acting.
- **Never present as "done" without verification.** Visual browser check on desktop + mobile, check for mojibake/encoding issues, and confirm the revenue path to PlusBase checkout is unbroken.

---

## 2. BUSINESS OVERVIEW

A conversion-focused **at-home LED-mask / beauty-device e-commerce operation** across several brands and platforms.

- **Owners:** Sahil and Naman (a prior note recorded "Naman Kharbanda (Sahil) & collaborator Naman" — names not fully disambiguated; treat as the two-person team). GitHub owner handle: `naman-14113114`.
- **Core goal:** generate qualified search traffic for high-intent queries → funnel it through comparison/educational properties → regional storefronts → **sell devices**.
- **Marketing channels:** **Microsoft/Bing Ads, Google Ads, SEO, and GEO/AI-search.** **No Facebook/Meta.** (Search-led acquisition, not social/paid-social.)
- The work is almost always: build/fix high-converting product pages, review/ranking ("advertorial") pages, SEO/GEO content, country pricing & offers, checkout flows, reviews, trust badges, offer presentation — without breaking the working revenue path.

### Brand portfolio
- **Buudy** — primary LED-mask brand/storefront. Multi-country (US/UK/CA/AU). Sold via PlusBase/ShopBase checkout (`buudy.com`) and also rebuilt as independent Next.js country apps.
- **Muuhu** — beauty-device brand. Products: **Muuhu LED Mask Pro**, **Muuhu IPL Hair Removal (aka "Muuhu Ultra Pro")**, and a **Muuhu Massage Kit** (free-gift). Multi-country. The old "Muuhu LED Mask" (192 LEDs / 7 colours / neck coverage) was **fully retired** for the **Mask Pro** (216 LEDs / 4 modes). On Muuhu surfaces use **Muuhu only** — never Buudy/Juujo.
- **Juujo** — current visible brand for the earlier PlusBase/ShopBase custom-HTML storefront (formerly visibly "Muuhu"), built on the **RoseSkinCo** design clone. Products: **Juujo LED Mask Pro** (`muuhu.com/pages/led-mask-pro`), **Juujo IPL Hair Removal 2.0** (`/pages/muuhu-ipl-hair-removal`). Some `muuhu` domains/routes/assets persist for compatibility; copy says **Juujo**. (Note: `juujo.com` also appears as a competitor/reference in places — distinguish before acting.)
- **Trustpilot / BestLedFaceMask** — review/ranking "advertorial" properties funneling to Buudy. Green Trustpilot-style stars, #1 badges, dynamic country headings, expert author **Dr. Megan Vincze**. Surfaces: `trustpilotreview.shop` (UK) and `bestledfacemask.org` (international).
- **Older context (don't reuse unless asked):** a **toothbrush / BrushKit Duo** project and earlier Juujo/RoseSkinCo work exist locally.

---

## 3. BRAND & PRODUCT MATRIX (full detail)

### 3.1 Buudy LED Mask
- **Country product URLs:** US `https://us.buudy.com/products/buudy-led-mask` · UK `https://www.buudy.co.uk/products/buudy-led-mask` · CA `https://ca.buudy.com/products/buudy-led-mask` · AU `https://au.buudy.com/products/buudy-led-mask`.
- **Spec (historical Buudy spec — distinct from Muuhu):** 192 high-intensity LEDs, **8-in-1 wavelengths**, full **neck coverage**, ~32 mW/cm². Wavelengths cited: 830 nm IR, 415 nm blue, 525 nm green, 490 nm cyan, 590 nm yellow, 390 nm purple, 510 nm white. "Made in USA". Rating **4.9★**, "Trusted by **16,000+** customers".
- **Offer/bundle (Buudy page):** unlocking free-gift bundle — **Premium Travel Box (~$39)**, **LED/Red Light Torch (~$70)**, **Skincare E-Book (~$19)**; delivery countdown widget; **90-Day Goddess Guarantee**.
- **Expert:** **Dr. Gabriella Vasili**, dermatologist (Buudy surfaces). (Distinct from Dr. Megan Vincze on the review sites.)
- **Review incentive:** "Write a review to get 10% off any order."
- **Preserve** all media, review blocks, product interactions, free-gift/bundle/checkout behavior, country content.

### 3.2 Muuhu LED Mask Pro (Muuhu-Vercel / muuhu repos)
- **Specs:** **216 precision LEDs**; **4 modes** — Red **630nm**, NIR **850nm**, Blue **415nm**, Yellow **590nm**; **3 intensity levels**; **10-min** sessions; **93 g**; **4.9/5**; **16,000+** reviews.
- **Free gift (current):** **Muuhu Massage Kit — 3-piece Resin Gua Sha, $79 value**, which **replaced** the earlier **Red Light Torch ($69 value)**. (The Mask Pro project rules still list the Red Torch; the Gua Sha kit is the newer free gift — **verify which is live before editing**.)
- **Pricing:** US **$199** (cmp $399) · UK **£199** (£399) · CA **$279** ($559) · AU **$299** ($599).
- **Identifiers:** Mask Pro `id: muuhu-led-mask`, `sku: MUUHU-LED-MASK-PRO`, `slug: muuhu-led-mask`, export `muuhuMask`. Red Torch `id: muuhu-red-torch`, `slug: red-light-torch`, export `muuhuRedTorch`. Asset slug default `"muuhu-led-mask"`.
- **Branding:** Muuhu only — never show `Buudy`/`Juujo`.
- **Content — NEVER mention:** 192 LEDs, 7 colours, 7 wavelengths, 830nm, 633nm, neck coverage, 3-minute routine, `Buudy`, `Juujo`. **ALWAYS:** 216 LEDs, 4 modes, 10-min sessions, 93g, 3 intensity levels, full-face coverage. Comparison table uses **Full-Face Coverage**. `products/muuhu-led-mask-2/page.tsx` removed from all apps. Active slug `muuhu-led-mask` (data = Mask Pro).

### 3.3 Muuhu IPL Hair Removal (aka "Muuhu Ultra Pro")
- **Specs:** **999,999 flashes**, ice cooling ~**46°F / 8°C**, **9 levels up to 16.5J**, **600–1200 nm**, Auto/Manual, LCD touch, memory, AC 100–240V, **not waterproof**. Current active product.
- **Pricing:** **$129** (compare $260). (Some historical drafts say $199/$399 — verify live.)
- **Claims rule:** no invented certifications/medical claims/results timelines/supplier image rights.

### 3.4 Juujo (PlusBase/ShopBase, RoseSkinCo clone)
- **Juujo LED Mask Pro** — live `https://muuhu.com/pages/led-mask-pro`, CTA `/pages/led-mask-pro`. 93g silicone hands-free; 4 modes (Red 630nm, NIR 850nm, Yellow 590nm, Blue 415nm); 216 LEDs; routine 10 min, 3–5×/week; offer "**$129 VALUE OF FREE GIFTS FOR TODAY ONLY**"; free **Juujo Glow Coach App** access.
- **Juujo IPL Hair Removal 2.0** — route `/pages/muuhu-ipl-hair-removal`; visible name "Juujo IPL Hair Removal 2.0"/"Juujo IPL 2.0"; ordered Custom-HTML section snippets.
- Visible brand = **Juujo**; former = **Muuhu**; keep `muuhu` domains/routes/legacy assets for compatibility.

### 3.5 Trustpilot / BestLedFaceMask (advertorial / review)
- Review/ranking pages, **green Trustpilot stars `#00b67a`**, **#1 badge**, dynamic country headings, author **Dr. Megan Vincze**. Keep country pages + site-wide consistency aligned; verify all pages after global changes. Honest ratings; avoid yellow marketplace stars, fabricated medical identities, exaggerated badges, country-link mistakes, generic AI-landing patterns.

### 3.6 Legacy / other products
- **Buudy Red Torch** (legacy). **Muuhu Massage Kit / 3-piece Resin Gua Sha** (free-gift product, $79). **BrushKit Duo / electric toothbrush** (Juujo, older — do not reuse copy/routes unless asked).

---

## 4. DOMAINS & PRODUCTION SURFACES

| Surface | URL | Notes |
| --- | --- | --- |
| PlusBase/ShopBase origin (Buudy) | `https://buudy.com` | **Strictly guarded, ONLY payment gateway (PlusBase).** Admin origin `https://buudy.onshopbase.com`. |
| US storefront | `https://us.buudy.com` | |
| UK sales domain (current) | `https://www.buudy.co.uk` | |
| UK storefront (legacy) | `https://uk.buudy.com` | Audit before use; legacy refs exist. |
| CA / AU storefronts | `https://ca.buudy.com` / `https://au.buudy.com` | |
| Learn / GEO hub | `https://learn.buudy.com` | Vercel project `buudy-learn-geo-hub`. |
| Companion app | `https://app.buudy.com` | Vercel project `buudy-mask-app`. |
| UK advertorial | `https://www.trustpilotreview.shop` | Trustpilot-style funnel → Buudy. |
| International comparison | `https://www.bestledfacemask.org` | |
| Juujo/Muuhu PlusBase store | `https://muuhu.com` | Admin `muuhu.onshopbase.com`; pages like `/pages/led-mask-pro`. |
| Muuhu country (placeholder) | `<cc>.muuhu.com` | `support@muuhu.com`, IG `muuhu_official`, YT `@muuhu`. |
| RoseSkinCo static CDN | `https://roseskinco.vercel.app` | Vercel `roseskinco` (`prj_C7hxlfRo0HTLgI14Nj6ofAmFxezv`); brandless Juujo images/videos. |

---

## 5. REPOSITORIES & LOCAL PATHS

| Surface | GitHub | Local path |
| --- | --- | --- |
| Best LED Face Mask (intl comparison) | `github.com/naman-14113114/BestLedFaceMask` | `./best-led-face-mask-org` (handoff) |
| US Buudy storefront | `github.com/naman-14113114/buudy` | `./github-buudy` |
| UK Buudy storefront | `github.com/naman-14113114/uk-buudy` | `./uk-buudy` |
| Buudy country monorepo (Next.js) | `github.com/naman-14113114/buudy.git` | `E:\1st YEAR DTU\New folder\Buudy-Vercel` |
| Muuhu monorepo | `github.com/naman-14113114/muuhu.git` | `E:\1st YEAR DTU\New folder\muuhu` |
| Muuhu-Vercel monorepo | (no remote reported) | `E:\1st YEAR DTU\New folder\Muuhu-Vercel` |
| Trustpilot replica (THIS repo) | `github.com/naman-14113114/BestLedFaceMask.git` | `E:\1st YEAR DTU\New folder\trustpilot-led-mask-replica` |
| Learn/GEO hub | repo not confirmed | `./seo-pages` (handoff) |
| Buudy companion app | repo not confirmed | `./buudy-mask-app` (handoff) |
| Juujo / RoseSkinCo clone | Vercel `roseskinco` | `E:\1st YEAR DTU\New folder\clone awward winning\roseskinco` |

- GitHub via Codex/ChatGPT app connection (session-based). Shared Codex workspace: `C:\Users\sahil\Documents\Codex\2026-05-14\files-mentioned-by-the-user-chatgpt`.
- **Read-only source assets (do NOT modify):** `E:\1st YEAR DTU\New folder\clone awward winning\roseskinco\Muuhu Vercel creating content\`.

---

## 6. TECH STACK & ARCHITECTURE

### 6.1 Next.js country monorepos (Buudy-Vercel, Muuhu-Vercel, muuhu, best-led-face-mask)
- **pnpm + Turborepo**, `pnpm@11.1.1`. Next.js v16 App Router (Muuhu notes **16.2.6**), React 19, Tailwind v4 (PostCSS), TS 5, ESLint 9.
- **Apps:** `apps/uk|us|ca|au`, each **fully independent** so copy/SEO/pricing/IDs/checkout-labels/policies/images/structure differ per country. **UK = source of truth**; US/CA/AU cloned from UK then localized.
- **Shared packages (generic only):** `packages/shared` (class-merge, money, %-off, delivery-date), `packages/ui` (non-content primitives), `eslint-config`, `tsconfig`. **Never** move product data/policies/layouts/SEO copy/checkout IDs/country images into shared.
- **Critical:** each repo's `AGENTS.md` warns *"This is NOT the Next.js you know"* — read `node_modules/next/dist/docs/` before writing code.
- **best-led-face-mask** = single deployable app `@bestledfacemask/site` + shared packages; has preserved `legacy-pages/`.

**Commands**
```bash
pnpm install
pnpm dev:uk|dev:us|dev:ca|dev:au           # or: pnpm --filter @buudy/uk dev (or @muuhu/…)
pnpm lint && pnpm build && pnpm build:uk
pnpm --filter @muuhu/us typecheck          # per-app = clean signal
pnpm --filter @muuhu/us build              # per-app build = authoritative check
# Best LED Face Mask site:
pnpm dev:site && pnpm build:site
pnpm verify   # verify-domain-independence, -tracking, -routes, -assets, -ca-ranking, -localization
```
> Root `pnpm typecheck` may show pre-existing TS18003 in `@muuhu/shared` (harmless; use per-app). best-led-face-mask lint may show non-blocking legacy-import warnings (left alone unless cleanup authorized).

**Vercel:** one project per country, root `apps/<cc>`; install `pnpm install --frozen-lockfile`; build `pnpm --filter @<scope>/<cc> build`; default Next output; **per-project env vars** (don't blindly share Supabase/Web3Forms/Klaviyo/checkout/admin). best-led-face-mask is currently local-only.

### 6.2 PlusBase / ShopBase (Custom-HTML storefronts: Buudy `buudy.com`, Juujo `muuhu.com`)
- Section/block builder. Landing **Custom HTML blocks run inside an existing platform page** — **body-only** snippets (no `<!doctype>/<html>/<head>/<body>`).
- **PlusBase behaves like an SPA:** content mounts after load; blocks injected/swapped on nav; inline scripts may not run on dynamic insert; a section can look fine after reload but fail on fresh nav; over-eager hydrators duplicate blocks/listeners/FAQ/footer. **Goal = works on first load, after delayed mount, after SPA nav.**
- **Checkout:** limited customization; use **ShopBase Storefront SDK** with a real variant ID — `window.sbsdk.ready(()=>window.sbsdk.cart.add(VARIANT_ID,1))`; otherwise route CTA to the product page (don't fake add-to-cart). **Avoid Shopify assumptions** (`/cart/add`, Shopify section APIs/custom elements/JSON).
- **Custom-HTML structure:** one scoped root `<div id="...-root" data-feature-root>`; scope ALL CSS under the root (never `body/img/*`); one **IIFE**; state inside root; **ready marker** (`data-feature-ready`); init immediately + on lifecycle events; idempotent re-init repairs new DOM without resetting user state; unique data hooks not broad classes; no optional chaining if broad compat matters; don't bind generic handlers to every button/form/img/video; debounce `MutationObserver`. **Lifecycle:** immediate, `DOMContentLoaded`, `load`, `pageshow`, `rsc:plusbase:hydrate`, `plusbase:custom-html:ready`, `visibilitychange`/`MutationObserver` only when needed.
- **Global hydrator (Juujo IPL):** `…\roseskinco\roseskinco-landing-page-sections\00-plusbase-global-hydrator.js` (paste once globally). Version `2026-05-23-global-1`; marks `window.__juujoPbGlobalHydrator`; rehydrates on boot/timers/load/pageshow/focus/history-nav/DOM-add; patches `history.pushState/replaceState`; replays selected external+inline scripts once per DOM instance; dispatches `rsc:plusbase:hydrate`; fallback init for before/after sliders, result/comparison tabs, steps, suitability quiz, social-video. **Rule:** section-local repair for section-local bug; change the global hydrator only for truly global issues.
- **ShopBase Admin API:** Basic auth `apiKey:password`. Helpers `npm.cmd run shopbase:api:status|shop|products|orders`, `shopbase:api -- get /admin/products.json`. Write ops only after explicit approval. Use `npm.cmd` on Windows. Juujo creds in `.shopbase-api.env` (git-ignored; template `.example`) — don't reuse in Buudy.

---

## 7. PRICING (per country / product) — verify live before editing

| Product | US | UK | CA | AU | Compare-at |
| --- | --- | --- | --- | --- | --- |
| Muuhu LED Mask Pro | $199 | £199 | $279 | $299 | $399 / £399 / $559 / $599 |
| Juujo LED Mask Pro | "$129 value of free gifts" | — | — | — | — |
| Muuhu IPL / Ultra Pro | $129 | — | — | — | $260 |
| Buudy LED Mask | verify live | verify live | verify live | verify live | bundle gifts ~$39+$70+$19 |

Free-gift framing recurs everywhere (Massage Kit/Gua Sha $79, or Red/LED Torch $69–$70, travel box, e-book, app access). Preserve it.

---

## 8. PRODUCT & VARIANT IDENTIFIERS (operational, not secret)

ShopBase/PlusBase IDs for the `buudy.onshopbase.com` store (Shop ID `10650730`):
- **LED Mask** product `1000000611225890`, variant `1000019092784268`
- **Red Torch** product `1000000665008955`, current variant `1000020384558655`, obsolete variant `1000020018633106`
- **LED Face Wand** product `1000000662170991`, variant `1000020291098406`
- Muuhu-Vercel checkout env vars `NEXT_PUBLIC_MASK_PRODUCT_ID` / `NEXT_PUBLIC_MASK_VARIANT_ID` were **not yet configured**; missing → checkout returns `available:false` + "coming soon". **No hardcoded IDs in source.**
- Juujo theme-preview/template IDs seen: `theme_preview_id=2160043`, pages `page-85298630688`, `page-85298622467` (juujo.com preview).

---

## 9. CHECKOUT & REVENUE PATH

Test end-to-end on every relevant change:
> **acquisition page → outbound click → regional storefront → cart/bridge → PlusBase checkout (`buudy.com`).**

- Advertorial routing (`apps/site/src/lib/advertorialMarkets.ts`, trustpilot replica): UK → `/best-led-face-mask-uk-2026` → `buudy.co.uk/products/buudy-led-mask`; AU → `/best-led-face-mask-au-2026` → `au.buudy.com/...`; CA → `/best-led-face-mask-ca-2026` → `ca.buudy.com/...`.
- AU mirrors UK ranking/design/sections/media/flow (localized wording/prices/gift values/canonical/JSON-LD/noscript/sitemap/LLM). **CA top-five: Buudy, CurrentBody, Kala, TheraFace, Equinox.**
- Buudy outbound failsafe + exit-popup scripts preserved in the Next app.

---

## 10. ADVERTISING / SEO / GEO / CONVERSION

- Conversion-led everywhere; SEO/GEO must be evidence-led and must NOT sacrifice conversion layout or brand consistency.
- **Funnel:** Trustpilot-style ranking pages (`trustpilotreview.shop`, `bestledfacemask.org`) → Buudy regional stores. Honest ratings, #1 badge, green stars `#00b67a`, country-specific top-5s, expert authority (Dr. Megan Vincze).
- **Channels:** Microsoft/Bing Ads + Google Ads + SEO + GEO/AI-search. **No Facebook.**
- **Trustpilot-replica canonical routes:** `/`, `/best-led-face-mask-uk-2026`, `/best-led-face-mask-au-2026`, `/best-led-face-mask-ca-2026`, `/currentbody-vs-buudy`, `/theraface-vs-other-masks`, `/deluxeskin-vs-buudy`, `/qureskincare-vs-buudy`, `/silicone-led-mask-dangers`, `/floating-head-warning`, `/missing-colors-expose`, `/led-density-scam`, `/brand-name-premium`, `/privacy`, `/terms`, `/disclosure`, `/contact`, + 6 `/blog/*` guides (red-light-therapy-ultimate-guide, blue-red-light-blemish-prone-skin, led-masks-for-mature-skin, led-mask-face-neck-coverage-guide, choosing-safe-led-mask, understanding-led-light-colours).
- **Legacy redirects** (→ `/best-led-face-mask-uk-2026`, permanent, `next.config.ts`): `/new`, `/new-advertorial`, `/best-led-face-mask-in-uk`, `/best-red-light-therapy-mask(/*)`, `/top-5-led-mask(/*)`, `/pages/buudy-led-mask(/*)`, `/pages/buudy-led-face-mask(/*)`, `/buudy-led-mask-uk(/*)`, `/therabody-vs-buudy(/*)`, `/pages/buudy-led-mask-product-redesign(/*)`.
- **SEO/GEO files preserved** (`apps/site/public`): `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`; canonical/OG/Twitter; JSON-LD; legal `noindex,nofollow`; Microsoft consent script; GTM; Tawk.to. Keep stable unless strategy changes.
- **Approved public assets (trustpilot replica):** `/assets/microsoft-consent-mode.js`, `/assets/outbound-interactions-v2.js`, `/assets/buudy-exit-popup.js`, `/assets/buudy-dermatologist-verdict-poster.jpg`, `/assets/buudy-dermatologist-verdict.mp4`, `/img/{dense_led_macro,luxury_mask_markup,neck_led_mask,seven_colors_mask}_*.png`, + the SEO files.

---

## 11. CREDENTIALS & INTEGRATIONS (pointers — raw keys live ONLY in the ignored vaults)

> **Security boundary (enforced).** Raw keys / passwords / tokens / customer PII must **never** be committed, uploaded, pasted into tickets/issues/chat, exposed to client code, or screenshotted. Several keys were pasted into chat historically and **should be rotated**. **Do NOT copy raw secrets into this CONTEXT.md** (it is a committable repo file). The two private vaults:
> - `E:\1st YEAR DTU\New folder\trustpilot-led-mask-replica\agent-secrets.local.md` (git-excluded)
> - `C:\Users\sahil\Downloads\SECRETS.local.md` (intended git-ignored)
> If a vault is missing → **don't guess**; ask the owner or use an authenticated connector/browser session. Never move vault contents into `agent.md`/`AGENTS.md`/`CONTEXT.md`.
>
> ⚠️ **2026-06-27 incident:** the previous `CONTEXT.md` had embedded raw secrets (ShopBase/Klaviyo/Bing/OpenAI keys + the full secrets table) in a **non-ignored** repo file. It was preserved as the gitignored `CONTEXT.prev-full-archive.local.md`, and `*.local.md` was added to `.gitignore`. Treat those embedded keys as exposed → **rotate.**

### Providers (names/locations only)
- **ShopBase/PlusBase Admin API** — store `buudy.onshopbase.com`, storefront `buudy.com`, Shop ID `10650730`; Basic `apiKey:password`; config `shopbase-page-publisher.config.json`. (Juujo store `muuhu.onshopbase.com`; login in vault; store country India / GMT+05:30.)
- **Klaviyo** — public company ID `Tp323F` (`NEXT_PUBLIC_KLAVIYO_COMPANY_ID`); private `KLAVIYO_API_KEY` in vault → rotate.
- **Bing Webmaster** — `BING_WEBMASTER_API_KEY`, site `https://learn.buudy.com/`; key in vault → rotate.
- **OpenAI Image API** — project key in vault (edited first 10 Buudy LED Face Wand images) → revoke/rotate.
- **Supabase** (Buudy-Vercel `.env.local`) — `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (values in vault); `ADMIN_EMAILS` env.
- **Web3Forms** — `WEB3FORMS_ACCESS_KEY` / `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (value in vault).
- **Session-based access (no raw token; test before claiming):** GitHub (`naman-14113114`), Vercel, Google Search Console, Google Analytics, Microsoft Ads, Microsoft Clarity, Bing Webmaster UI, PlusBase/ShopBase admin, Klaviyo UI.
- **Still missing (request if needed):** Supabase for US/UK storefronts + webhook secret, Web3Forms (if other), Microsoft Ads OAuth, GSC/GA service account/OAuth, Vercel access token, GitHub PAT.

### Public identifiers (safe — already in page HTML)
- GSC meta `nqRKsSVoB5bni_WXRqWob9zh6fCXpxqGABAS_XxPr_w` · Bing meta `D96695A78F07F68C8CBE99C96F8381F4`
- MS Ads **UET** `211072489`
- TrustpilotReview: **GTM** `GTM-TQ3HRZMJ`, **Clarity** `w4nply9u93`, **Tawk** `699e744b8a14f51c38e4fa86/1ji9fci26`
- Buudy storefront: **Clarity** `sa3reb9k3m`, **Tawk** `68e4120082c311194f82b349/1j6teckkr`
- UK storefront **GA4** fallback `G-FSV104S5S3`

---

## 12. DESIGN SYSTEMS

### 12.1 Buudy (premium hybrid)
- **Fonts:** Playfair Display (serif) + Inter (body); live PlusBase export also uses **Fraunces** serif + Inter + JetBrains Mono accents.
- **Redesign tokens:** `--bg-light:#FAFAF9`, `--bg-dark:#0C0A09`, `--text-light:#1C1917`, `--text-dark:#FAFAF9`, `--brand-plum:#2E102F`, `--brand-plum-hover:#401842`, `--brand-gold:#CA8A04`, glass `rgba(255,255,255,0.72)`+`blur(12px)`, shadow `0 20px 48px rgba(28,25,23,0.05)`.
- **Live export tokens:** plum `#3a1f3d`, gold `#b89556`, cream `#f7f1e8`, ink `#160d18`, blush `#f1dfd2`; CTA cream→blush wipe (420ms) on a `::before`; fade-in-up (700ms); cart Lottie `lottieflow-ecommerce-14-8-f6ede2-cart.json`.
- **Redesign concept:** light-mode clean e-commerce + dark-mode tech (7-wavelength glow playground `#0C0A09`), glass buy panel, countdown timer, gallery cross-fade, press badges, split accordions, UGC video track, before/after masonry, Dr. Gabriella dark profile, comparison table, app promo, FAQs, sticky bottom action bar. (Plan `2026-05-23-buudy-led-mask-redesign.md`; route `/pages/buudy-led-mask-product-redesign` now redirected.)

### 12.2 Muuhu (Juujo design system, decoded from RoseSkinCo `00-global.html`)
- **Fonts:** Poppins (headings+body, `--font-poppins`); JetBrains Mono for `.muuhu-mono` eyebrows only. **Serif removed.**
- **Tokens:** text **pure black `#000`** everywhere (`--ink`,`--muted`) — never pink. Pink only as accents: `--rose-dark:#d86f86` (eyebrows/checks/stars), `--sage:#ffc4cb` (buttons, **black** text). Dark sections deep plum `--plum:#4a2433` (hero/footer/stats/reviews CTA — NOT black). Page bg `--paper:#fff7f8`. Marquee `--rose:#f7dcdb`. `--cream:#fffaf5`, `--blush:#ffe6ea`, `--coral:#ff6f91` (sale), `--line:rgba(0,0,0,0.12)`. Headlines letter-spacing `-0.045em`, Poppins semibold.
- **Class prefix `muuhu-*`** (`muuhu-wrap/-mono/-heading/-eyebrow/-frame/-band/-band-rose/-btn/-check/-marquee/-cart-wipe`); UI primitives `muuhu-ui-*`. Legacy `--plum/--gold/--cream/--ink/--card/--border/--muted` redirected for back-compat; prefer semantic tokens in new code.
- **Page structure:** Home = Hero(plum) → Marquee(rose) → 4-mode Spotlight → Press → Stats(plum) → Feature grid → Light-therapy story → Torch spotlight → Reviews CTA(plum). Product = ProductHero → BeforeAfterCarousel(14 cards) → TrustBadges → WavelengthSelector → ExpertSection → AppPromo → VideoReviews → ComparisonTable → FAQSection → ProductReviewsSection → BlueLightSection → GuaranteeSection → StickyAddToCart.
- **Assets:** `apps/<app>/public/images|media/products/muuhu-led-mask/…` (gallery `01..15`, transformation tiles, 18 benefit SVG icons, before/after `ba-01..14`, `m1..m35`, lifestyle webp; videos `mask-pro-colors.webm`, `4-colors-demo.mp4`, `muuhu-goddess-bg.mp4`, `muuhu-dermatologists-video.webm`, `review-01..05.mp4`). Favicon `apps/<app>/src/app/icon.svg`. **Do NOT modify review JSON/CSV** (`reviews/muuhu-led-mask-reviews.json`, `muuhu-red-torch-reviews.json`); some legacy bodies still say "7 colors"/"3-minute" — left intact.

### 12.3 Juujo / RoseSkinCo (PlusBase landing system)
- **Tokens:** `--jj-bg:#fff5f7`, `--jj-paper:#fffafc`, `--jj-panel:#ffe7ec`, `--jj-blush:#ffc4cb`, `--jj-active:#ff7e8d`, `--jj-ink:#1f1d24`. Font **Gilroy** (RoseSkinCo CDN woff2). Pink/blush, bold headings, no mobile horizontal overflow, stable media dims, big tap targets; omit card shadows for flat treatment.
- **Landing paste order** (`…\roseskinco-landing-page-sections`): `00-global`, `01-product-hero-gallery-offer`, `02-sticky-add-to-cart`, `03-social-proof-results`, `04-results-timeline`, `05-technology-panels`, `06-benefits`, `07-three-steps`, `08-comparison-tabs`, `09-feature-carousel`, `10-comparison-banner`, `10-suitability-quiz`, `11-video-faq-reviews`, `12-faq`, `13-reviews-products`. Hydrator pasted separately once; no duplicate header/announcement/footer.
- **Quizzes** (Custom HTML, no email capture/external script/add-to-cart): IPL suitability (`juujo-ipl-quiz-page-custom-html.html`, CTA `/pages/muuhu-ipl-hair-removal`); LED Mask Pro routine quiz (`juujo-led-mask-pro-quiz-page-custom-html.html`, 6 Q, CTA `/pages/led-mask-pro`, branches Clear+Calm / Glow+Even Tone / Smooth+Firm / Sensitive Start / Balanced Glow / Check First).
- **Static assets:** deploy from `…\roseskinco` via `vercel --prod --yes`; alias `roseskinco.vercel.app`; brandless webp `…/images/brandless/webp/1..35.webp` (replace in place to keep URLs); videos `…/videos/juujo-mask-video-project-{3,8,10,12}.webm`, `juujo-mask-v1.webm`, social `video-project-{1c,2c,4c,5c,9c}.{mp4,webm}`.

### 12.4 Best LED Face Mask (PRODUCT.md)
- Trustworthy/clear/practical buyer guide; green editorial system; honest accessible ratings; accurate product-specific visuals; keyboard-accessible; alt text; sufficient contrast; don't rely on color alone for rank/score. Anti-references: mismatched imagery, fabricated medical identities, yellow marketplace stars, exaggerated badges, country-link mistakes, generic AI-landing patterns.

---

## 13. KNOWN INCIDENTS & REGRESSION CHECKS

- **US/UK repo confusion** — fixes once landed in wrong store; confirm exact domain + repo first.
- **PlusBase late-mount / SPA nav** — works after reload, fails on fresh nav; hydrator duplicates blocks/listeners/FAQ/footer. Fix path: assume delayed mount/duplicate init → check builder duplication → check global-hydrator vs local-script ownership → move ownership into section with private hooks → add ready marker → preserve user state → retest fresh.
- **Social-video controls** (Juujo `03-social-proof-results.html`) — mute/play worked once (global+section handlers fought). Fix: section owns controls; private hooks `data-jj-social-video/-play/-mute` (not `data-rsc-*`); `preventDefault()+stopPropagation()+stopImmediatePropagation()`; persist `dataset.userPaused/userMuted`; autoplay muted; visibility observers don't override explicit user choice. Keep 5 cards / 9:16 / pink / horizontal mobile carousel.
- **Feature carousel** (`09-feature-carousel.html`) — external script late; cards wrong pre-reload. Fix: scoped first-mount CSS fallbacks, stable card widths, square frames, hide duplicated loop slides pre-init; no second scroll engine; no visible horizontal scrollbars.
- **FAQ accordion** (`12-faq.html`) — smooth open/close, one open at a time, click-open closes, outside-click closes all, works after delayed mount, no duplicate listeners. JS owns `.is-open`, animate `max-height` via real `scrollHeight`, scope to root + one outside-click. FAQ appearing twice below footer → find duplicate source before CSS-patching.
- **Footer hiding** — PlusBase injects/replaces footer; hide narrowly (`footer, .c-footer, [data-section-type*='footer']`), always exclude custom-footer root, bound observer, debounce. Broad `[class*="footer"]`/text-match can wipe adjacent FAQ.
- **Buudy PlusBase export parity** (~June) — 14 section HTML files; compat layer for injected Didot/underlines/button-animations scoped to `[id^="buudy-pb-"]`; CTA cream→blush wipe must keep `::before` (compat layer initially suppressed it); remove PlusBase `::after` on buttons/links without breaking the wipe; native review widget targeted by block-ID (`cbEeVZ`) + `product_reviews` component attr, not generic review classnames.
- **Vite non-blocking warning** — old malformed attr `width="1936"alt=""`; Vercel static deploy still succeeds; fix if editing that page, don't block media uploads.
- **Secrets-in-CONTEXT.md (2026-06-27)** — see Section 11 ⚠️.
- **Removing the muuhu.com PlusBase default footer (2026-06-27).** Goal: REMOVE (not hide) the native PlusBase footer store-wide. Theme-API route is **blocked**: even with Themes read/write granted, `GET /admin/themes.json` → `460 invalid scope` and `themes/{id}/assets.json`, `sections.json`, `online_store/themes`, `website_builder/*` all → `404 no route found / no service available`. Working creds confirmed (`shop.json` 200, `active_theme_id 2162801`); `script_tags.json` IS in scope (could inject site-wide JS via API); `pages.json` in scope; `blogs/themes` not. **Delivered fallback:** a global custom-JS snippet using `removeChild` (true removal) targeting `footer.block-footer` only (keeps custom `footer[role="contentinfo"]`), idempotent, re-runs on load/pageshow/`rsc:plusbase:hydrate`/`plusbase:custom-html:ready` + SPA nav (history patch) + debounced MutationObserver for re-injection. Saved at `…\trustpilot-led-mask-replica\muuhu-remove-default-footer.global.js`. **Verification caveat:** runtime JS removal does NOT change server HTML, so `curl` re-scrape still shows 2; confirm in a real browser / DevTools (no headless tool available in this env). Selector verified consistent on homepage + `/pages/led-mask-pro` (each: 1 `footer.block-footer` native + 1 `footer[role=contentinfo]` custom).
- **muuhu.com has 2 (nested) footers (verified 2026-06-27, live page source, HTTP 200, ~564 KB).** Structure: outer `<footer role="contentinfo">` = the custom Website-Builder footer ("Business Information" block); **nested inside it** `<footer class="p3 overflow-hidden block-footer">` = the **PlusBase native/default platform footer**, still showing **placeholder content** — `548 Market St #14148, San Francisco, CA 94104 USA`, `support@shops-support.net`, default Support/Contact us/Order tracking/FAQs/DMCA menu, payment icons, country switcher, copyright. This is the PlusBase native-footer-injection problem (see "Footer hiding" above): the native footer was never hidden, so visitors see two stacked footers with un-branded placeholder details. **Fix when asked:** narrowly hide the native `block-footer` (exclude the custom footer root); do NOT use a broad `[class*="footer"]` sweep. Admin/API creds were NOT needed — found in public page source.

---

## 14. STANDARD WORK CHECKLIST (run on EVERY task)

**A. Before anything**
1. **Memory check (Rule #1):** has this exact thing been done/discussed in CONTEXT.md? New-entry vs update-entry. Re-read the relevant section + linked incidents.
2. **Load context:** internalize mandatory reference files (`agent.md`, repo `AGENTS.md`, `HANDOFF-INDEX.md`).
3. **Identify the exact target:** brand, domain, repo (`git remote -v`), country/app, platform (Next.js monorepo vs PlusBase Custom HTML vs static Vercel asset).
4. **Confirm scope:** data/content change (preserve design) vs explicit redesign. If it could touch checkout/country/prices/gifts/reviews/media/SEO/integrations → confirm or make smallest reversible change.

**B. Inspect reality (never trust old chat)**
5. Open the **live page** + **current source**; verify product IDs, variant IDs, destination URLs, prices, currency, tracking IDs against what's deployed.
6. Check for dirty worktrees / unrelated user changes and preserve them.

**C. Implement**
7. Focused, minimal change matching existing code style. Preserve media/reviews/animations/offers/trust badges/country content.
8. **No bulk-edit scripts** — manual/structured edits (+ subagents for breadth), not Node/PowerShell search-replace.
9. PlusBase: body-only, single scoped root, scoped CSS, idempotent self-owned JS, ready marker, lifecycle init, private hooks. Next.js: keep country content app-local; don't pollute shared packages; read the new-Next docs if unsure.
10. No raw secrets in code/docs — env var names only.

**D. Verify**
11. Run `pnpm lint && pnpm typecheck && pnpm build` (per-app filters for clean signal); `pnpm verify` for the trustpilot/best-led-face-mask site. PlusBase: test **fresh open (no reload)**, delayed mount, SPA nav; no duplicate sections/listeners; controls work repeatedly.
12. **Cross-store sync:** apply across US/UK/CA/AU if multi-country.
13. **Visual + encoding check:** inspect live result on desktop AND mobile; no horizontal overflow; no mojibake/encoding issues. Never present as "done" without a visual browser check.
14. **Revenue path:** acquisition page → outbound click → regional storefront → cart/bridge → PlusBase checkout.

**E. Close out**
15. Report outcomes faithfully (failures/skips with output).
16. **Update CONTEXT.md** (new entry or update existing; Section 15 ledger + relevant topical section; never delete/shrink). Where the task warrants the broader handoff record, also append the session log to the relevant repo `AGENTS.md`.

---

## 15. SESSION / DECISION LEDGER (chronological — append new at bottom)

From the dossier's Full Source Coverage Manifest (59 readable Codex sessions, 2026-04-17 → 2026-06-25) + handoff files. Early work = infrastructure; e-commerce work concentrates from mid-May 2026.

- **2026-04-17 → 04-29** (`…\Desktop\Experiment`) — Infra: minimal Node proxy (no Express → later Express + serverless-express for AWS Lambda), build/zip Lambda scripts, env `PROXY_USERNAME/PASSWORD/PORT`, `TARGET_URL`; puppeteer/rebrowser automation; Cloudflare + zrok tunnels. Not e-commerce.
- **2026-05-13** (`open-design/.od/projects/*`) — Many short sessions; early IPL/funnel/conversion exploration.
- **2026-05-14** (`…\Codex\2026-05-14\files-mentioned-by-the-user-chatgpt`) — Largest cross-brand session (buudy/trustpilot/muuhu/juujo/plusbase); ShopBase basic-auth API patterns established.
- **2026-05-14** (`…\IPL\you-are-rebuilding-my-own-website-2`) — Muuhu/Juujo IPL rebuild, PlusBase custom HTML, Web3Forms, Supabase, Vercel.
- **2026-05-16/17/18** (`…\Electric ToothBrush\…`, `…\juujo-toothbrush-store\plusbase\…`) — Toothbrush/BrushKit Duo PlusBase sections (Juujo). Don't reuse elsewhere unless asked.
- **2026-05-23** — Buudy LED Mask redesign plan authored (premium hybrid, 8 tasks, local preview `127.0.0.1:4173`, route `/pages/buudy-led-mask-product-redesign`). Global hydrator `2026-05-23-global-1`.
- **2026-05-28** (`…\Buudy Vercel Website`, `…\Buudy Vercel Depolyment`) — Buudy Vercel build/deploy: supabase/web3forms/tawk/seo/ads/conversion/funnel; signed video token; Vercel deployment-protection bypass referenced.
- **2026-06-13/17/18/19** — Heavy work in `trustpilot-led-mask-replica`, `Muuhu-Vercel`, `Buudy-Vercel`: juujo theme-preview/template IDs, cookie/token auth, web3forms plumbing.
- **2026-06-19** — AI-handoff package plan authored → produced `HANDOFF-INDEX.md`, public-safe `AGENTS.md`, ignored `SECRETS.local.md`, `.gitignore` rules. Support case logged: **Simone Armfield** (order `plb10650730_1027`, "not received", tracking `YT2615400706137812`, ordered 2026-06-01, shipped 2026-06-03; contact `buudy.com/pages/contact`; scripts `.tmp-check-plusbase-order.cjs`, `send_simone_armfield_order_update.js`). PII only in vault.
- **2026-06-23/24/25** (`Muuhu-Vercel`, `muuhu`, `Buudy-Vercel`) — Muuhu monorepo finalization (216-LED Mask Pro, Juujo design system, retire 192-LED mask), brand-free assets, before/after carousel.
- **2026-06-25** — Generated `agent.md` (dossier+archive) and `agent-secrets.local.md` (`2026-06-25T08:51:00+05:30`). juujo.com noted as competitor/reference.
- **2026-06-27** — **This CONTEXT.md established.** Read all six handoff files in full; dispatched 3 agents over the 437k-line archive (mostly infra/redacted tool output; archive-only nuggets folded into Sections 3.1 & 13). Discovered a **pre-existing 24 MB `CONTEXT.md`** (thin header + verbatim concatenation of all sources incl. **raw secrets** in a non-ignored repo file). Action: preserved it as gitignored `CONTEXT.prev-full-archive.local.md`, added `*.local.md` to `.gitignore`, folded its unique facts (owners, marketing channels incl. "No Facebook", Muuhu "Ultra Pro" alias, Muuhu Massage Kit / Gua Sha free-gift $79, no-bulk-script + dual-log rules) into this clean rewrite, and flagged the embedded keys for rotation. No production change this session.
- **2026-06-27 (later)** — Confirmed possession of the **Muuhu store** PlusBase/ShopBase creds (API key/password/shared-secret + login email/password) in `agent-secrets.local.md` (Muuhu store `muuhu.onshopbase.com`; distinct from the Buudy store creds in `SECRETS.local.md`). Scraped live `muuhu.com` public page source (no creds needed) and confirmed **2 nested footers** — custom Website-Builder footer wrapping the un-hidden PlusBase native `block-footer` (placeholder SF address + `support@shops-support.net`). Logged under §13.
- **2026-07-03 — NEW PROJECT: Juujo-Vercel rebrand (Buudy LED mask → Juujo premium bedding).** New repo `E:\1st YEAR DTU\New folder\Juujo-Vercel` (a copy of the Buudy country-store monorepo — 4 Next.js apps us/uk/ca/au + shared packages, pnpm/Turborepo; NOT a git repo). Task: fully rebrand + redesign into a luxury **bedding** brand **Juujo** (categories: Grounding Sheets, Weighted Blankets, Cooling Bed Sheets, Pillows), reuse structure, remove ALL Buudy/LED/skincare/wavelength traces, make product template flexible (colors + sizes + variant IDs, dynamic pricing), **remove free gifts and add a Buy 1 / Buy 2 (−10%) / Buy 3 (−20%, recommended) quantity selector**. User decisions: placeholder products+media, domains `us./uk./ca./au.juujo.com`, all 4 apps (UK first as reference). Standards: follow `impeccable` + `emil-design-eng` from `C:\Users\sahil\.codex\skills\` (OKLCH, no em dashes, motion rules; authored `PRODUCT.md`+`DESIGN.md`). **Progress: Phases 0–3 DONE for UK** (PRODUCT.md/DESIGN.md, globals.css bedding OKLCH tokens with legacy aliases, market/site/checkout/media libs, new `products.ts` data model + 4 placeholder products, `cart.ts` gift-free variant-aware); **Phase 4 (product template) in progress**, UK not yet compiling (expected mid-migration). **Full un-summarized handoff + exact changes + remaining breakage list + continuation plan is in `E:\1st YEAR DTU\New folder\Juujo-Vercel\JUUJO-REBRAND-HANDOFF.md`** — read that to continue. Implementation was paused here at user request (continuing on Claude Desktop).

---

## 16. PROVENANCE & NON-RECOVERABLE GAPS

- Built from readable local Codex sessions + local project config (2026-06-25/27). The `agent.md` structured dossier is the authoritative distillation; the verbatim archive is the source of truth for what was actually discussed.
- **Cannot reconstruct from disk:** deleted chats, browser-only ChatGPT chats outside the Codex local store, unavailable accounts, encrypted hidden reasoning, external provider dashboards.
- Some session CWDs are temp/connection-test folders with no business content; large archive sections are redacted tool outputs.
- **Verify before relying:** IPL pricing ($129 vs $199 drafts); free gift (Massage Kit/Gua Sha $79 vs Red Torch $69); Buudy live spec vs redesign concept; Muuhu checkout env vars (not yet configured); owner-name disambiguation.

- **2026-07-06 — Juujo-Vercel: Added Grounding Flat Sheet and Grounding Mat.** (Task #16 from handoff). Created `groundingFlatSheet` and `groundingMat` products. Set up free gift auto-add logic in `cart.ts` using `deriveGiftLines` so purchasing a fitted or flat sheet automatically includes a £0 mat in the cart (non-persisted, derived dynamically). Redesigned `Header.tsx` and `navigation.ts` to include a dropdown structure for Grounding products and commented out weighted blankets, cooling sheets, and pillows from the exported `products` array and site-wide components (`home.ts`, `footer.ts`, `sitemap.ts`, etc.). Created `GroundingMatWhatIsItSection` and `GroundingMatBenefitsSection` using the classified mat videos/images. Copied all changes from `uk` to `us`, `ca`, and `au`. Verified `tsc --noEmit` across all apps to be perfectly clean with 0 errors.

- **2026-07-07 — Juujo-Vercel: fitted grounding sheet BUNDLE + real variant ids + ACTIVE checkout (US app ONLY).** On `apps/us` `/products/grounding-sheets`, replaced the buy box with a **Buy 1 / Buy 2 Get 1 Free** bundle card (reference: thegrounding.co/terra-grounding-bed-sheet). Reference pricing exact: $159.95/sheet, compare $319.90; bundle = $319.90 for 3 sheets (2 paid + 3rd free), save $639.80, $106.63/sheet. Wired **real ShopBase product/variant ids** from `C:\Users\sahil\Downloads\Fitted Grounding Sheets.docx` into `data/products.ts` (colours White/Grey/Green x 7 sizes Single..Cali King; ShopBase product_id varies per size within a colour; Green Twin XL out of stock). Free mat real ids productId `1000000669152669`/variantId `1000020491331605`. Refactored cart (`lib/cart.ts` + `CartProvider`) to hold **one line per selected sheet** (bundle can mix 3 different colours/sizes; 3rd free) + derived free mat; added `setSheetBundle`/`removeLine` and `checkoutProductId`/`bundle`/`free` on `CartLine`. **Activated checkout**: `api/checkout/prepare/route.ts` now builds a real PlusBase cart by looping the selected line ids (was hardcoded mask+torch); `CheckoutForm` posts `items[]` from `getDisplayLines`. Per **user decision, all items (incl. free sheet + mat) are sent at FULL price** — the "get 1 free"/free-mat discounts must be configured on PlusBase; until then checkout overcharges. Verified live in browser: 3 distinct sheet lines with correct docx variant ids (White/Queen `...757983`, Grey/King `...759921`, Green/Full `...760740` free) + free mat, subtotal $319.90, total discount -$709.75, 0 TS errors. Full detail + limitations in `JUUJO-REBRAND-HANDOFF.md` §16B. **Still to do:** flat sheet real ids, uk/ca/au replication, PlusBase automatic discount setup.

---

*End of CONTEXT.md baseline (2026-06-27). Append below this line in future sessions — never delete. Full verbatim source archive preserved in `CONTEXT.prev-full-archive.local.md` (gitignored) and `agent.md`.*

- **2026-07-07 � Juujo-Vercel: Minor UI fixes (Gallery & Accordion), Delivery Timer Extraction, and Bulk Gallery Media addition.** 
  - **Gallery Media Update:** Replaced the wall adapter image ( qcyc9g29pcuna5ga3lcebiskkyv.jpg) with a new video asset (Video_Project_34.mp4) in products.ts. Set it to autoplay (nimated: true) inside the gallery across all 4 apps.
  - **Bulk Image Addition:** Added 19 new high-quality images and infographics to the gallery array for groundingSheets (and groundingFlatSheet by extension) across all four applications. Skipped duplicates and fully populated the local images/ directory in each app.
  - **Product Details Accordion:** Added a new GroundingAccordions.tsx component below the BuyBox to replicate the structure from groundingessentials.com. Extracted "Product Details" (with 90% cotton / 10% silver override), "What's included", and "How it works" text accurately, and integrated it into GroundingBuyBox.tsx for all apps.
  - **Delivery Timer Container:** The user requested to restore the "FREE DELIVERY" / "ORDER WITHIN" timer box shown on the old Buudy store. Created DeliveryTimerBox.tsx exactly mimicking the Buudy-Vercel source code (15-minute countdown, dynamic +3 days delivery date, exact background and border styling, and Lottie truck animation). Inserted directly above the #hero-cta Add to Cart button in both GroundingBuyBox.tsx and ProductBuyBox.tsx globally.
  - **All code changes type-checked and pushed to GitHub.** (Note: The timer changes were kept local for a period of time before pushing).
