# Best LED Face Mask International SEO Design

## Goal

Turn `bestledfacemask.org` into an independent international LED face mask comparison publisher that ranks for commercial and educational search queries and sends qualified buyers to the appropriate Buudy storefront.

## Positioning

The site is an affiliate-supported editorial publisher. It must look, read, and identify itself solely as Best LED Face Mask, with no visible or technical reference to any legacy comparison domain. Content should help buyers compare wavelengths, fit, safety, coverage, value, and guarantees while clearly disclosing affiliate relationships.

## Search Architecture

- `/` is the global topic and country-selection hub targeting broad `best LED face mask` intent.
- `/best-led-face-mask-2026` is the global commercial comparison page and x-default ranking.
- Existing UK, Australia, and Canada ranking URLs remain stable.
- `/best-led-face-mask-us-2026` targets United States purchase intent.
- Country pages use self-referencing canonicals and reciprocal hreflang for `en`, `en-GB`, `en-AU`, `en-CA`, and `en-US`.
- Educational articles and competitor comparisons support the ranking pages through contextual internal links.

## Market Routing

- United Kingdom: `https://www.buudy.co.uk/products/buudy-led-mask`
- Australia: `https://au.buudy.com/products/buudy-led-mask`
- Canada: `https://ca.buudy.com/products/buudy-led-mask`
- United States: `https://us.buudy.com/products/buudy-led-mask`
- Global fallback: `https://buudy.com/products/buudy-led-mask`

## Canada Protection Boundary

The visible Canada ranking is frozen. Do not change its rendered copy, products, order, prices, imagery, layout, or outbound destinations. Domain-level canonical URLs, schema IDs, sitemap entries, AI crawler files, and independent tracking attribution may change because those are required to establish the new domain.

## Trust And Content Quality

- Use one consistent editorial identity across visible copy and schema.
- Do not claim independent clinical testing, dermatologist credentials, certifications, customer counts, or medical outcomes without verifiable evidence.
- Separate manufacturer claims from editorial findings.
- Add transparent methodology, editorial policy, corrections policy, affiliate disclosure, and source citations.
- Use UK spelling on UK pages, US spelling on US pages, and market-appropriate currency and terminology elsewhere.

## Technical SEO And GEO

- Replace all old-domain canonicals, schema IDs, sitemaps, robots references, noscript links, legal copy, email addresses, image hosts, and UTM attribution.
- Generate consistent metadata and JSON-LD from shared site and market configuration.
- Publish valid Organization, WebSite, WebPage, Article, ItemList, BreadcrumbList, and VideoObject data. Product and rating data must match visible content.
- Keep `robots.txt`, `sitemap.xml`, `llms.txt`, and `llms-full.txt` aligned with the production domain and canonical routes.
- Preserve AI crawler access.

## Performance And UX

- Preserve native navigation and fast outbound clicks.
- Reduce unnecessary third-party and image cost where it materially affects Core Web Vitals.
- Ensure images have dimensions, meaningful alt text, and efficient formats.
- Maintain accessible headings, links, buttons, dialogs, and media controls.

## Tracking

- Keep GTM and existing outbound events operational.
- Attribute events to `bestledfacemask.org`, the source page, market, destination, and interaction type.
- Do not delay or prevent outbound navigation.
- Keep Google Ads conversion configuration in GTM; the site provides reliable data-layer events for UK, AU, CA, US, and global traffic.

## Verification

- Add regression checks that reject any production reference to the legacy comparison domain.
- Preserve the Canada ranking checks.
- Run route, tracking, localization, asset, lint, typecheck, and production build checks.
- Crawl the built site and verify status, canonical, hreflang, robots, sitemap, schema, and internal links.
- Verify production after deployment.
