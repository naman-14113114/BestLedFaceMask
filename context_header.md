# Buudy & Muuhu Business Context and Operational Memory

## Core Business Understanding
**Owners:** Naman Kharbanda (Sahil) & Collaborator Naman
**Core Goal:** Generate qualified search traffic for high-intent queries, funnel traffic through comparison/educational properties to regional storefronts, and sell devices.
**Marketing Channels:** Microsoft/Bing Ads, Google Ads, SEO, GEO/AI search. (No Facebook).

### Properties & Domains
- **buudy.com**: ShopBase platform - The strictly guarded, ONLY payment gateway (PlusBase).
- **us.buudy.com**: US storefront.
- **www.buudy.co.uk**: UK dedicated storefront.
- **naman-14113114/muuhu**: The current monorepo handling US, UK, CA, and AU apps.
- **www.trustpilotreview.shop**: UK search advertorial/comparison property.
- **www.bestledfacemask.org**: Independent international comparison property.
- **learn.buudy.com**: Education/organic search hub.
- **app.buudy.com**: Companion application.

### Product Matrix
1. **Muuhu IPL Hair Removal / Muuhu Ultra Pro**: 999,999 flashes, Ice cooling ~8°C, 9 intensity levels. Current active product. $129.
2. **Muuhu LED Mask Pro**: 216 LEDs, 4 modes, 10-min sessions.
3. **Muuhu Massage Kit**: 3-piece Resin Gua Sha. Replaced Red Light Torch as the free gift. $79 value.
4. **Buudy LED Mask & Buudy Red Torch**: Legacy products.

### Security Posture
- `SECRETS.local.md` & `agent-secrets.local.md` hold highly sensitive API keys (PlusBase, Klaviyo, Bing, OpenAI, Supabase).
- NEVER commit these to git, print in chat, or move into public operating manuals.

---

## Standard Operational Checklist
*To be followed every single time work is requested.*

1. **[ ] Memory Check**: ALWAYS check `CONTEXT.md` FIRST to see if this exact task or topic was discussed before.
   - If NEW: Do the work, then append it as new detail at the bottom of `CONTEXT.md`.
   - If EXISTING: Do the work, then update the existing entry in `CONTEXT.md` instead of duplicating it.
   - *Rule:* NEVER delete or shrink existing details in `CONTEXT.md`.
2. **[ ] Context Loading**: Internalize the mandatory reference files (`AGENTS.md`, handoff indexes, etc.).
3. **[ ] Verification Check**: Identify the exact domain/repo. Run `git remote -v`. Inspect the live page and verify product IDs, tracking IDs, and prices before touching code.
4. **[ ] Scope Discipline**: Apply exactly what was asked. Preserve all existing design, conversion assets (gifts, reviews, layout), and product logic. DO NOT perform broad redesigns unless commanded.
5. **[ ] Cross-Store Sync**: Guarantee that every fix is applied simultaneously across all 4 country apps (`us`, `uk`, `ca`, `au`) if working in the Muuhu monorepo.
6. **[ ] Tooling & Editing Rules**: Use subagents and manual file edits (`replace_file_content`, `multi_replace_file_content`). DO NOT write Node/PowerShell scripts to perform search-and-replace across files.
7. **[ ] Visual & Revenue Path Validation**: Run the local server (`npm run build` or `pnpm dev`). Check for encoding issues (mojibake). Never present the website as done without visual browser verification and ensuring the path to the PlusBase checkout bridge is unbroken.
8. **[ ] Log & Record**: Upon completion, append the detailed session log (including logic, constraints, and actions taken) to both `AGENTS.md` and `CONTEXT.md`.

---
# Complete Historical File Archives
Below is the full, untrimmed content of all foundational business files as requested.
