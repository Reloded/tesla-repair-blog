# Tesla DIY Repair Blog

## Session Instructions
> **AUTO-SAVE ENABLED:** Update this file after every major task or accomplishment. Commit changes regularly.
> **GSC CHECK:** Run `npm run gsc` at session start to pull latest Search Console stats.
> **ANALYTICS CHECK:** Run `npm run analytics` to pull visitor/traffic data.

---

## Project Summary
Tesla repair affiliate blog targeting EU market. Goal: $1000/month passive income.

## Current Status (2026-07-01)
- **Milestones:** All 3 complete (v1.0, v2.0, v3.0 shipped)
- **Articles:** 156 posts (prune to 41 was REVERTED — see 2026-07-01 session; real GSC data showed the site is growing, not suppressed)
- **Monetization:** Multi-affiliate (Amazon geo-detected + Lectron + iFixit + RR Car Parts + VIN TESLA promo + Payhip product + Shopee SG pilot)
- **Hosting:** Cloudflare Pages (LIVE)
- **Live URL:** https://tesladiyrepair.com
- **Current mode:** Nightly auto-enhance pipeline PAUSED (local Windows Task Scheduler tasks `NightlyBlogEnhancer` + `BlogSEOAudit` disabled 2026-07-01). Re-enable is an open decision.
- **Reality check (CORRECTED 2026-07-01):** Site is NOT suppressed. Traffic grew ~175x since Jan (167→29,297 impressions/28d, 2→168 clicks). Real problem = **page-2 rankings (avg pos 12.7) + low CTR (0.57%)**. Play is pushing striking-distance pages to page 1, not deleting content.

## Affiliate Programs
| Program | Status | ID | Notes |
|---------|--------|-----|-------|
| Amazon.de | **CLOSED** | diyrepair-21 | Closed by Amazon 2026-07 for inactivity (<3 sales in 180 days). Links still resolve, earn nothing. Reapply ONLY once traffic supports 3 sales/180d → new tag ID → bulk link swap needed (Claude can do in one pass). |
| Amazon.com | **LIVE & EARNING** | diyrepair07-20 | ✅ Verified 2026-07-29. Safe from the 3-sales/180d rule (22 orders in 90d). See revenue reality-check below. |
| Lectron (Awin) | **LIVE** | 2729872 | Charging articles |
| iFixit (Sovrn) | **LIVE** | sovrn.co/... | Repair tool links |
| RR Car Parts | **LIVE** | (employer) | ~20 articles; dead links cleaned 2026-03-14 |
| VIN TESLA | **LIVE** | UTM-tracked | Mid-article promo on every post (May 20), `vintesla_click` event |
| AI Prompts (Payhip) | **REMOVED** | - | Sidebar promo removed 2026-07-25 (off-brand for repair audience) |
| Shopee SG | Pilot | deeplinks | USB article (4 drives) + cabin filter; Lazada scaffolding ready |
| Tesmanian | **DEAD** | - | No response after 2 follow-ups, abandoned |
| EVannex (Rakuten) | **DEAD** | - | No response to direct email, abandoned |

## 💰 REVENUE REALITY CHECK (2026-07-29 — first hard numbers)
Amazon.com `diyrepair07-20`, May 1 – Jul 29 2026 (90 days):

| Metric | Value |
|--------|-------|
| Affiliate clicks | 147 (~49/mo) |
| Ordered items | 22 |
| **Conversion rate** | **14.97%** (above Amazon's ~10% average — the audience DOES buy) |
| Ordered revenue | $927.46 |
| **Total earnings** | **$29.84** (~$9.95/month) |
| Avg commission/order | **$1.36** |
| Effective commission rate | 3.3% |

**What this means:** to hit the $1,000/mo goal on Amazon alone would need **~101x** current affiliate clicks — roughly **740 orders and ~4,900 affiliate clicks per month**. Site currently gets ~343 search clicks/28d total. That is not a gap traffic growth closes; it's a business-model gap.

**The good news:** 15% conversion proves the audience is high-intent and buys when shown relevant products. The problem is **$1.36/order**, not audience quality. The same buyer clicking an OEM collision part (€200–2,000 at RR Car Parts) is worth orders of magnitude more.

**Strategic implication (confirms the July direction):** treat Amazon as a small passive bonus, not the plan. Real money paths, in order: (1) **RR Car Parts** — collision/OEM parts, where the collision cluster already funnels the right readers; (2) **local lead-gen** — EU/LT repair enquiries; (3) VIN TESLA. Do NOT invest more effort in Amazon link optimisation.

## Key Files
- `.planning/STATE.md` - Current progress
- `.planning/PROJECT.md` - Full project vision
- `.planning/ROADMAP.md` - Development phases
- `.planning/AFFILIATE-UPDATES-READY.md` - Pending affiliate link updates
- `.planning/GROWTH-PLAN.md` - 90-day growth plan (E-E-A-T, backlinks, LT-language, monetization)
- `.planning/BACKLINK-KIT.md` - Ready-to-use outreach templates + linkable-data-asset plan (Pillar 2)
- `scripts/gsc.js` - GSC API script. Now outputs **per-page query breakdown + ranked opportunities** (🎯 = striking-distance pos 5–20). Run `npm run gsc` locally.

## GSC Stats (2026-08-12 — LIVE, last 28 days) 🎉 BEST YET
| Metric | 2026-07-28 | 2026-08-12 | Change |
|--------|-----------|-----------|--------|
| Clicks | 343 | **591** | +72% |
| Impressions | 47,486 | **63,653** | +34% |
| CTR | 0.72% | **0.93%** | +29% |
| Avg Position | 10.2 | **9.6** | first time under 10 |

**🔥 THE HEADLINE: the RCM collision article is the best-converting page on the site.**
`/posts/tesla-rcm-replacement-post-crash-reset/` — 384 imp, **17 clicks, 4.4% CTR, pos 9.4**. That's **4.7x the site average CTR**, from a page that had ZERO impressions two weeks ago and is ~1 month old. Its queries are exactly the intended ones: "tesla rcm reset" (pos 5.3, 33% CTR), "tesla rcm" (pos 11.8, 16.7%), "clear post crash load shed" (pos 6.9). **This validates the real-expertise/collision strategy outright** — low volume, but the highest-intent, highest-converting traffic on the site. Make more of these.

**Fixes verdict (all shipped 07-24 to 07-29):**
- ✅ **Homepage retarget WORKED:** "tesla diy" pos 7.7→7.1, CTR 1.8%→3.0%; homepage total clicks 3→14, CTR 0.8%→3.9%.
- ✅ **service-mode error code climbing steadily:** thc_w0134 pos 8.1→7.7→6.9→**5.7**.
- ⏳ "tesla service mode access code" no longer in that page's top-5 queries — inconclusive, re-check next pull.
- ⏳ Screen cannibalization: neither screen page in top-15 now — inconclusive.

**Big risers:** software-update-stuck 49→**92 clicks** (9,807 imp, now #1 page), phantom-braking 47→**82 clicks** ("tesla phantom braking 2026" now pos **2.4** @ 22.7% CTR), creaking-rattling 7→**39 clicks**, falcon-wing-door new in top-10 (24 clicks).
**Note:** some "queries" are scraper noise (`"tesla" "firmware" "error" -site:reddit.com...`) — ignore those rows.
**Still zero:** Juniper bumper/tow-hitch guide (pub 07-23) — no impressions yet.
**Next data check:** mid-September.

## GSC Stats (2026-07-28 — superseded)
> First clean comparison — both this pull and 07-25 used the pinned sc-domain property. ⚠️ But only **3 days apart** (and 4 days after the 07-24 fixes shipped), so the 28-day windows overlap heavily. Treat as a trend check, NOT a verdict on the fixes.

| Metric | 2026-07-25 | 2026-07-28 |
|--------|-----------|-----------|
| Clicks | 279 | **343** |
| Impressions | 42,013 | **47,486** |
| CTR | 0.66% | **0.72%** |
| Avg Position | 10.5 | **10.2** |

**CTR is genuinely lifting across the board** — usb-not-working 0.8→1.0%, phantom-braking 0.8→1.0% (clicks 35→47), service-mode 0.5→0.6% (clicks 28→36). The July SEO/meta work compounding.
**🔥 NEW top opportunity: "tesla service mode access code" — 59 imp, pos 19.8, 1.7% CTR.** The article literally answers this in its quick-answer box (code = `service`) but ranks page-2 for it — an on-page targeting gap, not authority. Highest-value single fix available.
**Too early to judge the 07-24 fixes (only 4 days):**
- Homepage "tesla diy": CTR 1.6→1.8%, pos 7.8 flat — noise-level so far.
- Screen cannibalization: NOT resolved yet — screen-black-fix still catching "how to reboot tesla model 3/y screen" at pos 33–41, screen-frozen-reboot still absent from top pages. Expected; these take 4–8 weeks.
**⚠️ Collision cluster still at zero impressions** — RCM now 16 days old, Juniper guide 5 days. Both indexed-eligible by now. Honest read: these may simply be very low-volume queries. Worth one more check before concluding the niche has no search demand.
**Risers:** autopilot-camera-calibration 12→20 clicks (imp 1,548→2,190), software-update-stuck 43→49 clicks.
**Next data check:** late August (give the 07-24 fixes a real 4+ weeks).

## GSC Stats (2026-07-25 — superseded)
> ⚠️ **Property changed this run.** Google listed properties in a different order, so the script used `sc-domain:tesladiyrepair.com` (domain property) instead of `https://tesladiyrepair.com/` (URL-prefix) used in all earlier pulls. Domain property counts more (all subdomains + http), so part of the jump is measurement, not growth. **Fixed 2026-07-25:** gsc.js now pins to sc-domain permanently — all future pulls are comparable to this one, NOT to pre-07-25 figures.

| Metric | 2026-07-12 (url-prefix) | 2026-07-25 (sc-domain) |
|--------|------------------------|------------------------|
| Clicks | 188 | **279** |
| Impressions | 33,812 | **42,013** |
| CTR | 0.56% | **0.66%** |
| Avg Position | 11.9 | **10.5** |

**✅ The July 3 service-mode fix worked — verdict is in.** `service-mode-guide`: clicks **11 → 17 → 28**, CTR 0.2% → 0.5%, position 17.6 → 15.1. The new meta + error-code FAQ did what it was supposed to. Also spawned a new converting query: "tesla service mode void warranty" (pos 6.8, 10% CTR) — straight from the FAQ work.
**Big organic risers (untouched by us):** software-update-stuck 13 → **43 clicks** (imp 1,515 → 4,639; a real Tesla update, 2026.20.6.6, shows in its queries) and navigation-not-working 6 → **23 clicks** (imp 715 → 4,249). Event-driven traffic — worth noting the site now catches software-release waves.
**Striking-distance still climbing:** thc_w0134 7.7 → 6.9, side-camera-cost 7.6 → 5.7, phantom-braking-fix 7.8 → 7.0.
**Collision cluster:** neither RCM (pub 07-12) nor Juniper bumper (pub 07-23) shows impressions yet — expected for low-volume niche queries; re-check next pull.
**Top opportunity now:** homepage ranks pos 7.8 for **"tesla diy"** with 64 impressions but only 1.6% CTR — the July 4 meta targeted "can you fix a tesla yourself" (now just 1 imp). Retarget to "tesla diy".
**Fixes applied 2026-07-25 (verify these next pull):**
1. Homepage retargeted to "tesla diy" (was targeting "can you fix a tesla yourself" = 1 imp). New title leads with the exact keyword + real-mechanic hook. **Watch:** homepage CTR on "tesla diy" (was 1.6% @ pos 7.8).
2. **Keyword cannibalization fixed** — `screen-black-fix` and `screen-frozen-reboot` were competing (both titled "…Frozen…", no cross-links), and Google was landing "how to reset tesla screen" on the *black screen* page at pos 29–49. Now split cleanly: black-fix owns "black / not turning on", frozen-reboot owns "reset / reboot / restart", and they cross-link. **Watch:** whether reset queries move from pos ~29 onto page 1 via frozen-reboot.
3. gsc.js property pinned to sc-domain (see warning above).

**Next data check:** ~2 weeks (early-mid August).

## GSC Stats (2026-07-12 — url-prefix property, superseded)
> Re-authed again (token expires every 7 days — OAuth app still in "Testing" mode; publishing it in Google Cloud Console remains the permanent fix).

| Metric | 2026-07-04 | 2026-07-12 | Trend |
|--------|-----------|-----------|-------|
| Clicks | 171 | 188 | +10% |
| Impressions | 29,908 | 33,812 | +13% |
| CTR | 0.57% | 0.56% | flat |
| Avg Position | 12.5 | **11.9** | best yet |

**🎯 Striking-distance queries all improved this week:** thc_w0134 error code 8.1→7.7, "side camera replacement cost" 8.8→7.6, "not recognizing usb" 8.8→8.4, "tesla diy guide" 6.7→6.2. service-mode-guide recovering (pos 16.6, clicks 11→17; new meta/FAQ live Jul 3-4, full effect expected in 2-4 wks). Risers: software-update-stuck (13→20 clicks), trunk-strut-replacement entered top-5 (4→12 clicks — June enhancement paying off).
**Indexing:** sitemap still reports 160 submitted / 0 indexed — reporting quirk (pages clearly indexed, they rank); low priority.
**Next data check:** ~2 weeks (late July) for the service-mode CTR verdict.

## ⚠️ ANALYTICS ARE ~82% BOT TRAFFIC (discovered 2026-07-30)
GA4 Demographics (Jul 3–30) shows 5,530 "users" — but the engagement split is unambiguous:

| Country | Users | Engagement rate | Avg time | Verdict |
|---------|-------|-----------------|----------|---------|
| Singapore | 3,403 (61.5%) | **0.18%** | **0s** | 🤖 bot |
| China | 1,107 (20.0%) | 2.86% | 2s | 🤖 bot |
| United States | 601 (10.9%) | 28.31% | 42s | ✅ real |
| UK / Canada / NL / AU | ~140 | 30–36% | 30s–1m26s | ✅ real |

**~4,510 of 5,530 "users" (81.6%) are datacenter bots** from SG/CN cloud regions. Real audience ≈ **1,020 users/month**, and **~59% of it is US**; the rest is UK/CA/NL/AU. Anglo/Western, not Asian.

**Consequences:**
1. **Never quote GA4 user counts as traffic.** GSC clicks (343/28d) is the trustworthy number; the GA/GSC gap was always bots arriving "direct". All earlier analytics readings in this file are inflated.
2. **The Shopee/Lazada SG pilot targets an audience that does not exist** — those SG "visitors" are bots and will never buy. Do not extend SG links; consider retiring the pilot. Same for the SG geo-detection special-case (harmless, but pointless).
3. **Audience is US-first** — validates Amazon.com as the live account; the Amazon.de closure matters even less than thought.
4. **Real performance is better than it looked:** 147 Amazon affiliate clicks from ~600 real US users is a healthy CTR. Small but genuinely engaged audience.

**Owner TODO:** filter this traffic so future numbers are honest — GA4 Admin → Data Settings → Data Filters (or a "exclude SG+CN datacenter" segment), and optionally a Cloudflare bot-fight/WAF rule to stop serving it at all.

## Analytics Stats (2026-01-25 — STALE, refresh locally)
| Metric | Value | Change |
|--------|-------|--------|
| Active Users | 183 | +3.4% |
| Sessions | 206 | +3.5% |
| Page Views | 509 | +5.8% |
| Avg Session | 2m 48s | +2s |
| Bounce Rate | 66.0% | -0.8pp |

**Top Traffic:** Direct (195), Facebook (8), Google (2)
**Top Countries:** US (87), Lithuania (30), UK (10), Germany (6)
**Top Pages:** Homepage (182), Winter Guide (62), Guides (59), 12V Battery (33)

## Recent Accomplishments (2026-01-20)
- [x] Completed full article audit - ALL 53 ARTICLES VERIFIED
- [x] Fixed 12V battery article image caption (was misleading about what photo showed)
- [x] Added content verification guidelines to CLAUDE.md (lessons from audit)
- [x] Updated analytics stats: 153 users, 399 page views (+17% from yesterday)
- [x] Checked Tesmanian affiliate - still pending (6+ days), GoAffPro profile is private
- [x] Contacted Buttondown support - requested new email verification link
- [x] Reddit engagement: replied to 12V battery thread (299 views on original comment)
- [x] Reddit engagement: replied to suspension rattle follow-up question
- [x] Reddit engagement: PTC heater comment - went badly, disengaged
  - Called out as AI by 2 users, technical errors pointed out
  - Warranty advice wrong (2019 M3 out of warranty)
  - PTC failure details corrected by experienced commenter
  - Decision: left thread alone, not engaging further
  - Lessons learned:
    - Casual tone only, no numbered lists
    - Don't cite specific warranties/years without verifying
    - Shorter answers = fewer attack surfaces
    - Build karma on simpler threads first
- [x] Updated GSC stats: 115 impressions (+21% from yesterday)
- [x] Optimized USB article CTR (56 imp, 0 clicks) - new title/meta/intro
- [x] Optimized 3 more top articles for CTR:
  - Window calibration (19 imp) - problem-first title
  - Wiper replacement (17 imp) - Service Mode warning hook
  - Phantom braking (16 imp) - relatable scenario opener
- [x] Added real workshop photos to articles:
  - Created /src/images/repairs/ folder
  - 12V battery article: frunk area photo
  - Control arm article: suspension photo
  - Door handle article: door panel interior
  - About page: workshop hero shot (drive unit on hoist)
  - Created .planning/PHOTO-MAPPING-PLAN.md for future photos
- [x] Fixed 12V battery article - clarified battery generations:
  - Pre-late 2021: 12V lead-acid
  - Late 2021-2023: 12V lithium-ion
  - 2024+ (Highland/Juniper): 16V lithium-ion (different system)
  - Added warning about not mixing battery types
- [x] Audited articles against service.tesla.com - Round 1:
  - Window calibration: corrected procedure, fixed Service Mode path
  - Cabin air filter: MAJOR FIX - location is footwell not glovebox, arrows to rear
  - Wiper replacement: verified accurate
- [x] Audited articles against service.tesla.com - Round 2:
  - Brake pads: added EPB Service Mode, fixed torque (83 Nm), new bolts required
  - Tire rotation: fixed pattern (rear stays same side), TPMS calibration path
  - Charge port: added key fob method, HV safety warning
  - Frunk: added 30-second power limit
- [x] Audited articles against service.tesla.com - Round 3:
  - Screen black fix: corrected timing (hold until black, ~30 sec restart)
  - Key fob battery: verified CR2032 correct
  - Camera calibration: verified accurate
- [x] Audited articles against service.tesla.com - Round 4:
  - Gear oil: **CRITICAL FIX** - capacities were 4x too low (590ml → 2.1L)
  - AC not cooling: wrong filter location + added R1234yf refrigerant warning
  - Trunk won't close: verified accurate
  - Regen braking: verified accurate (informational)
- [x] Audited articles against service.tesla.com - Round 5:
  - Slow charging: verified accurate (general guidance)
  - Suspension noise: lug nut torque 129 ft-lbs confirmed correct
  - Door handle: verified accurate
  - Heat pump: fixed cabin air filter location (said "under frunk" - wrong!)
- [x] Audited articles against service.tesla.com - Round 6:
  - 12V battery: already corrected, verified accurate
  - MCU upgrade: informational, verified accurate
  - Mobile connector: **FIXED** red blink codes - code 3 is relay fault not temp
- [x] Audited articles against service.tesla.com - Round 7:
  - Phantom braking: informational, verified accurate
  - Key fob battery: CR2032 confirmed correct
  - Software update: verified accurate
  - Navigation: Premium Connectivity $9.99/mo confirmed correct
- [x] Audited articles against service.tesla.com - Round 8:
  - USB not working: verified accurate (exFAT, TeslaCam folder)
  - Wiper replacement: Service Mode path confirmed (Controls > Service)
  - Window calibration: already corrected, verified accurate
  - Brake pads: already corrected, verified accurate
- [x] Audited articles - Round 9:
  - Phone key not working: verified accurate (menu paths correct)
  - Bluetooth issues: verified accurate
  - HomeLink: **FIXED** - clarified Model 3/Y never includes HomeLink (always $350 add-on)
  - Seat heater: verified accurate (warranty 4yr/50k correct)
- [x] Audited articles - Round 10:
  - Supercharger slow: verified accurate (informational)
  - Sentry mode not recording: verified accurate (20% battery threshold correct)
  - Air suspension issues: verified accurate
  - Control arm replacement: **CRITICAL FIX** - torque values were dangerously wrong (150Nm → 35/62Nm)
- [x] Audited articles - Round 11:
  - Climate keeper: **FIXED** Camp Mode threshold (15% → 20%) + updated COP temp options
  - LTE connectivity: verified accurate
  - Squeaky brakes: verified accurate
  - Range loss: verified accurate
- [x] Audited articles - Round 12:
  - Creaking/rattling fix: verified accurate (DIY content)
  - Wheel alignment DIY: verified accurate (specs are conservative targets)
  - Voice commands fix: verified accurate
  - Autopilot unavailable: verified accurate (camera calibration path correct)
- [x] Audited articles - Round 13:
  - Aero cap removal: verified accurate (Model Y 19" Gemini confirmed)
  - Headlight condensation: verified accurate
  - Rear camera blurry: verified accurate
  - Dashcam not saving: verified accurate (exFAT, TeslaCam folder)
- [x] Audited articles - Round 14 (final):
  - Ceramic coating: verified accurate (DIY guide)
  - Door seal maintenance: verified accurate
  - Falcon wing door fix: verified accurate (Model X specific)
  - PPF installation: verified accurate (DIY guide)
  - Paint chip repair: verified accurate (paint codes correct)
  - Steering wheel buttons: verified accurate
  - Winter preparation guide: verified accurate

**Article Audit Status:** ALL 53 ARTICLES AUDITED. Critical fixes applied to:
- Cabin air filter (location)
- Gear oil (capacities were 4x too low)
- AC/refrigerant (R1234yf warning)
- Mobile connector (blink codes)
- Heat pump (filter location)
- HomeLink (pricing clarification)
- Control arm (torque values were dangerous)
- Camp Mode (battery threshold)
- Cabin Overheat Protection (temperature options)

## Session 2026-06-09 (memory catch-up)
This file went un-updated from 2026-01-25 to 2026-06-09 while ~300 commits shipped. Summary reconstructed from git history:

### February 2026 — Content sprint (58 → ~130 articles)
- Hit article #100 on Feb 11, kept publishing near-daily through Feb
- Notable: OBD2 diagnostics, Wall Connector install, won't-start troubleshooting, Service Mode guide (verified before publish), used Tesla buying guide, 2026 Model 3 Refresh, Model Y Juniper problems, battery degradation, FSD Europe
- SEO infrastructure: WebP images, 404 page, FAQ schema, topic clusters, E-E-A-T about page (Feb 25)
- Added real RR workshop photos to 8 articles (Feb 21)
- Verification discipline held: several articles re-checked against Tesla service docs before/after publish

### March 2026 — Articles to #143 + Terafab event + design overhaul
- New articles through #143: BMS calibration, recall check, warning lights, coolant pump, pyrofuse (safety-critical, verified against service manuals), Highland vs Juniper comparison, Juniper accessories, Juniper suspension rattle, Model Y L specs
- **Terafab live coverage** (Mar 16–22): explainer prepped early, live-updated through Mar 21 launch event, pinned on homepage
- **ASIN migration saga**: converted Amazon search URLs → direct ASIN links (566 links), then **reverted same day** — broken ASINs were 404ing. Partial re-migration only where ASINs verified. Lesson: verify ASINs before bulk conversion.
- Removed dead rrcarparts.com links (Mar 14); ~20 articles still carry working RR links
- Payhip "AI Prompts" sidebar promo added (Mar 5)
- Homepage redesign (Mar 28): Tesla model filter (3/Y/S/X/Cybertruck), hero search bar, "Most Popular Guides" section, SVG icons replacing emoji, a11y fixes (skip-nav, WCAG)

### April 2026 — Structure + SEO recovery + enhancement pipeline starts
- Split news from repair guides: /news page, nav link, posts tagged `type:news` (18 now)
- Fixed HowTo schema misuse on news/info posts — **2 pages had been de-indexed**, refreshed (Apr 26)
- Geo-detect Amazon buttons via Cloudflare trace (Apr 19)
- Quick-tools bar at top of articles, full-width hero, UX fixes
- Sitemap: `lastUpdated` used for lastmod (Apr 26)
- SG market scaffolding: Lazada/Shopee deeplinks, cabin filter pilot (Apr 20)
- **Nightly enhancement pipeline began ~Apr 25**: one article per night "lifted to indexing-grade" (Cybertruck sections, FAQ/JSON-LD, EU buying guides, +1.5–4.4k words each)

### May–June 2026 — Maintenance + nightly enhancements
- VIN TESLA mid-article promo on every post, UTM-tracked with `vintesla_click` GA event (May 20)
- News post: FSD Supervised launches in Lithuania (May 21)
- Shopee SG deeplinks on USB article (May 1)
- SEO audit: fixed internal linking in suspension cluster (May 24)
- Nightly enhance commits continuous through Jun 9 (latest: brake rotor, wiper, frunk/trunk struts, tie rod end, PPF, towing, front bumper)

### Housekeeping notes (2026-06-09)
- Tesmanian and EVannex never responded — marked DEAD above
- GSC/Analytics stats below are from January; OAuth credentials live only on the local machine, refresh there
- `.planning/STATE.md` is even staler (last updated 2026-01-22) — treat this file as the source of truth

### Site audit + fixes (2026-06-09, same session)
Full technical audit of the built site. Verified healthy: clean build, all 528 JSON-LD blocks valid, no HowTo schema on news posts, all ~2,500 Amazon links tagged, all VIN TESLA links UTM-tagged, no duplicate titles/descriptions. Fixed:
- [x] 28 broken internal links — missing `/posts/` prefix in 5 articles (used-buying guide, charging-adapter, wont-start, emergency-door-release, TPMS), wrong slugs (`tesla-battery-drain-fix` → `tesla-phantom-battery-drain-fix`, `tesla-model-3-door-panel-removal` → `tesla-door-panel-removal`), dead `/tags/tires/` link → `/guides/`
- [x] 5 broken image references removed (roof trim ×3, sway bar link, tie rod end) — files never existed; per content guidelines did NOT substitute unverified photos
- [x] Terafab meta-refresh stub (`tesla-terafab-ai-chip-factory`) deleted; proper 301 added to `_redirects`; removes it from sitemap + Pagefind index
- Known remaining (not fixed): external link liveness + 89 ASINs unverifiable from sandbox (check locally); ~100 articles published since Jan never audited against service.tesla.com

### SEO meta trim (2026-06-15)
CTR pass on titles + meta descriptions (the item flagged above). Note: the `<title>` template appends ` | Tesla DIY Repair` (19 chars), so frontmatter titles were trimmed so the keyword shows before truncation.
- [x] 70 titles rewritten to ≤60 chars (was up to 92) — keyword front-loaded, year tags kept
- [x] 92 meta descriptions rewritten to ≤160 chars (was up to 270)
- 111 files changed total. Verified: clean build, every title ≤60 / every description ≤160, no duplicate titles/descriptions, all JSON-LD valid, 0 broken links/images. Titles feed H1 + breadcrumbs + Article JSON-LD headline, all confirmed rendering correctly.
- Specs/numbers preserved (torque, capacities, prices, model lists); no factual claims altered.

## Session 2026-07-18 (first real indexing audit — MAJOR finding)
Ran the new URL Inspection tool over all 161 sitemap URLs. **Only 21 pages (13%) are indexed.** The rest: 65 "Discovered - currently not indexed" (never crawled), 55 "URL is unknown to Google", 18 "Crawled - currently not indexed" (crawled, declined), 2 "Page with redirect".
- **All traffic comes from the ~21 indexed pages.** The other ~140 contribute nothing — Google has effectively declined to index the scaled AI content (quality/authority threshold, NOT a technical issue: canonicals, robots.txt, sitemap all verified clean).
- **Proof the unique-content strategy works: the RCM collision article got indexed within 6 days of publish** while 140 pages have waited months. Unique real-expertise content clears Google's bar; templated content doesn't.
- **Prune-window casualty:** rear-camera-blurry + creaking-rattling (both active traffic pages) were crawled 2026-07-01 during the ~2-day prune window and are stuck as "Page with redirect" → owner to Request Indexing in GSC UI ASAP.
- Note: some churn observed (autopilot-camera-calibration has impressions but shows "Crawled - not indexed" as of Jun 17 — pages drift in/out at the quality margin).
- **Owner action list (GSC UI → URL Inspection → Request Indexing, ~10/day quota):** Day 1: rear-camera-blurry, creaking-rattling-fix, /about/, winter-preparation-guide, brake-pad-replacement, wont-start-turn-on, pyrofuse-guide, used-buying-inspection-guide, supercharger-slow, cabin-air-filter. Day 2: /tools/, 12 more cornerstone pages.
- **Strategy implication:** (1) backlinks/authority raise the whole site's indexing threshold — same #1 lever as before; (2) new content should be collision-cluster / real-expertise style (indexed in days), NOT more templated guides (never indexed); (3) later, consider evidence-based consolidation of never-indexed zero-impression pages — but only with this per-URL data, never a blind prune again.

## Session 2026-07-12b (Amazon.de account closed)
- Amazon.de Partnerprogramm closed `diyrepair-21` for inactivity (<3 sales in 180 days) — standard policy, not a ban. Confirms Amazon was earning ~$0.
- No site changes made: links still resolve for users, dead tag is ignored by Amazon. When traffic justifies reapplying, new tag ID → one-pass bulk swap of ~1,100 amazon.de links.
- Decision: do NOT reapply until striking-distance pages reach page 1 and traffic can clear 3 sales/180d. Doubles down on monetization rethink: RR Car Parts (collision parts + new RCM article funnel), VIN TESLA, future lead-gen > Amazon pennies.
- TODO for owner: check Amazon.com (`diyrepair07-20`) status — same closure rule applies.

## Session 2026-07-01 (real GSC data → prune REVERTED)
Pulled the first live GSC data since January (re-authed OAuth). It overturned the working assumption:
- **Site is growing hard, not suppressed:** 167→29,297 impressions, 2→168 clicks (28d) since Jan. The "scaled-content suppression" diagnosis from June (built on stale Jan data) was WRONG.
- **The 2026-06-15 prune cut ~43% of clicks.** Fresh data showed 5 of the top-10 click pages had been cut — incl. `service-mode-guide` (4,895 imp, the #1 impression page) redirected to a generic hub, plus dashcam-usb-setup, side-repeater-camera, rear-camera-blurry, creaking-rattling, navigation-not-working. Prune was decided on stale data that only knew 8 traffic pages.
- **Action: REVERTED the prune** (`git revert` of the prune commit) before Google recrawled. Back to 156 posts, all redirects removed, all cut traffic pages restored. Kept the genuinely good work: SEO meta trim (titles ≤60 / desc ≤160), E-E-A-T author byline, geo-detect fix, broken-link/image audit fixes.
- Nightly pipeline stays PAUSED for now (disabled on owner's Windows machine). Whether to re-enable is an open call — it may have driven the impression growth, but auto-pushing unreviewed AI content carries quality/accuracy risk and CTR is only 0.57%.
- **Corrected strategy:** this is a page-2 + CTR problem, not a content-volume problem. Levers: (1) push striking-distance pages (pos 8-13) onto page 1, (2) improve CTR on high-impression pages, (3) lean into error-code queries that already rank + convert (e.g. thc_w0134...), (4) real-mechanic E-E-A-T + backlinks (see GROWTH-PLAN.md). Do NOT mass-delete content again.

## Session 2026-01-25
- [x] Updated GSC stats: 167 impressions (+32), 2 clicks (same)
- [x] Updated Analytics: 183 users (+3.4%), 509 page views (+5.8%)
- [x] Wrote article #56: "Tesla Model X Falcon Wing Door Window Replacement"
  - Based on owner's actual repair experience
  - Added iFixit affiliate links, Amazon.de/.com dual links
  - Cross-linked from falcon-wing-door-fix article
- [x] Wrote article #57: "Tesla Model S Rear Caliper Motor Replacement"
  - Electric parking brake motor replacement guide
  - Added iFixit affiliate links, Amazon.de/.com dual links
  - Cross-linked from brake-pad-replacement article
- [x] Wrote article #58: "Tesla Model X Half-Shaft (CV Axle) Replacement"
  - Pusašis/half-shaft replacement guide
  - Added RR Car Parts OEM link, iFixit, Amazon.de/.com
  - Cross-linked from control-arm-replacement article
- [x] Added internal cross-links between new and existing articles

## Session 2026-01-24
- [x] Updated GSC stats: 135 impressions (+10), 2 clicks (same)
- [x] Updated Analytics: 177 users (+2.9%), 481 page views (+2.1%)
- [x] Integrated RR Car Parts (employer) into blog:
  - Added RR Car Parts as new affiliate provider (red EU button)
  - Updated About page with full disclosure about employment
  - Added RR Car Parts links to 4 articles: 12V battery, control arm, suspension, parts guide
  - All parts labeled as "Original OEM" (RR Car Parts sells only genuine Tesla parts)
- [x] Wrote article #55: "Where to Buy Tesla Parts in Europe (2025 Guide)"
  - Comprehensive parts sourcing guide for EU Tesla owners
  - Compares Tesla Service, Tesla Shop, RR Car Parts, Amazon, eBay
  - Features RR Car Parts as Original OEM supplier
  - Cross-links to relevant repair guides
- [x] Featured parts guide on homepage (above winter guide)
- [x] Reddit: replied to Model 3 AWD struts post (r/TeslaSupport) - Bilstein B6 recommendation
- [x] Reddit: replied to 2024 Model 3 brake squeaking post (r/TeslaSupport) - explained regen/glazing issue

## Session 2026-01-22
- [x] Updated GSC stats: 125 impressions (+7), 2 clicks (same)
- [x] Updated Analytics: 172 users (+3.6%), 471 page views (+2.8%)
- [x] Wrote article #54: "How to Format USB for Tesla Dashcam (30-Second Guide)"
  - Targets "format usb for tesla dashcam" query (pos 41, getting impressions)
  - Short, focused how-to (3 min read) vs existing troubleshooting guide
  - Added cross-links from USB, Sentry, and Dashcam articles
- [x] Emailed EVannex directly (partnerships@evannex.com) about affiliate program
- [x] Checked Tesmanian - no response yet to follow-up (8+ days since application)
- [x] Buttondown support replied - email verification fixed, newsletter ready to use
- [x] Created Buttondown API script (`npm run newsletter`)
- [x] Checked subscribers: 1 total (owner email), 0 newsletters sent yet
- [x] Reddit: replied to ceramic coating + rust treatment post (r/TeslaLounge) with article link
- [x] Reddit: replied to Model Y wiper tension post (r/TeslaLounge) - helpful advice, no link
- [x] Reddit: replied to Highland headlight auto-leveling issue (r/TeslaSupport) - checked service.tesla.com for calibration steps

## Session 2026-01-21
- [x] Updated GSC stats: 118 impressions (+3), 2 clicks (same)
- [x] Updated Analytics: 166 users (+8.5%), 458 page views (+14.8%)
- [x] Researched EVannex affiliate: uses Rakuten (already applied), alt: partnerships@evannex.com
- [x] Found Tesmanian contact: sales@tesmanian.com (for 7+ day follow-up)
- [x] Sent follow-up email to Tesmanian about affiliate application
- [x] Removed old Netlify property from GSC (was showing 5xx errors)
- [x] Reddit: posted Armor All stain removal tip (r/TeslaLounge) - IPA solution
- [x] Reddit: posted RCM_a015 tip (r/TeslaLounge) - check connectors under seat

## Session 2026-01-19
- [x] Set up Google Search Console API script (`npm run gsc`)
- [x] Set up Google Analytics API script (`npm run analytics`)
- [x] Created OAuth credentials in Google Cloud Console
- [x] Scripts auto-detect properties and fetch live data
- [x] First organic clicks from Google (2 clicks, 95 impressions)
- [x] Optimized USB article title/meta/intro for better CTR
- [x] Added Amazon.com affiliate (diyrepair07-20) for US visitors
- [x] All 53 articles now show both Amazon.de and Amazon.com buttons
- [x] Fixed Amazon button layout (grouped .de/.com together)
- [x] Posted 3 Reddit comments (2 karma, 1 with paint repair link)

## Session 2026-01-18
- [x] Checked Google Search Console: 5 pages indexed, 52 discovered (normal for new site)
- [x] Added _redirects file for Cloudflare Pages to fix redirect errors
- [x] Proper trailing slash handling now in place

## Session 2026-01-17
- [x] Posted winter guide to Reddit (r/TeslaLounge + r/TeslaSupport)
- [x] 3K+ views, 8+ upvotes, active discussions on Reddit posts
- [x] Replied to Reddit comments for engagement
- [x] Checked Google Search Console (18 impressions, site indexing normally)
- [x] Wrote article #53: Tesla Dashcam & Sentry USB Setup Guide
- [x] Added Pagefind search functionality (/search/ page)
- [x] Search indexes all 53 articles automatically
- [x] Added category filter buttons on /guides/ page (8 categories)
- [x] Added colorful gradient+icon visual headers to article cards
- [x] Optimized internal linking: added 11 cross-links across 12 articles
- [x] Updated winter guide with community tips from Reddit (5 new tips)
- [x] Replied to 5 Reddit comments on winter guide post (16K views, 33 upvotes)
- [x] Added featured "Seasonal Guide" banner on homepage (winter guide)
- [x] Fixed contact email placeholder on About page
- [x] Set up hello@tesladiyrepair.com via Cloudflare Email Routing
- [x] Checked Rakuten - no Tesla advertisers available

## Session 2026-01-16
- [x] iFixit (Sovrn) approved and LIVE
- [x] Added iFixit links to all 15 articles (7 product types)
- [x] Posted 4 Reddit comments (2 with links, 2 karma building)
- [x] Applied to EVannex (via Rakuten)
- [x] Wrote article #52: Tesla Winter Preparation Guide

## Pending Approvals
- None. Tesmanian and EVannex abandoned (no response after follow-ups) — see Session 2026-06-09 notes.

## Next Actions
- [ ] Refresh GSC + Analytics stats locally (`npm run gsc`, `npm run analytics`) and update tables above
- [ ] Continue nightly enhancement pipeline (lift remaining articles to indexing-grade)
- [ ] Check Buttondown subscriber count → first newsletter still unsent
- [ ] Evaluate Shopee SG pilot results → expand or drop Lazada scaffolding
- [ ] Verify remaining Amazon search-URL links → safe ASIN migration where verified
- [ ] Update `.planning/STATE.md` (stale since 2026-01-22)
- [ ] Consider display ads (Ezoic/AdSense) — revisit threshold with current traffic

## Tech Stack
- Eleventy 2.0.1 (static site generator)
- Nunjucks templates
- CSS (no framework)
- Pagefind (client-side search)
- Cloudflare Pages hosting
- GSC API script (`npm run gsc`)
- Analytics API script (`npm run analytics`)
- Buttondown API script (`npm run newsletter`)

## Content Guidelines
- **ALWAYS verify procedures against service.tesla.com** before publishing or Reddit replies
- **NEVER trust AI-generated specs** - verify torque values, fluid capacities, menu paths, thresholds
- **Check image/caption accuracy** - ensure photos actually show what the caption claims
- **Watch for outdated info** - Tesla updates frequently, verify current values
- Link to official Tesla docs when possible
- Note model year differences (pre-2021, 2021-2023, 2024+ Highland/Juniper)
- Battery types: 12V lead-acid → 12V Li-ion → 16V Li-ion (don't mix!)
- Common AI errors to watch for: wrong filter locations, incorrect torque specs, outdated battery thresholds

## Owner Context
- Self-taught Tesla mechanic from Lithuania
- Available evenings/weekends
- Budget: ~$100/month
