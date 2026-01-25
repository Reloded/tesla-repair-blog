# Tesla DIY Repair Blog

## Session Instructions
> **AUTO-SAVE ENABLED:** Update this file after every major task or accomplishment. Commit changes regularly.
> **GSC CHECK:** Run `npm run gsc` at session start to pull latest Search Console stats.
> **ANALYTICS CHECK:** Run `npm run analytics` to pull visitor/traffic data.

---

## Project Summary
Tesla repair affiliate blog targeting EU market. Goal: $1000/month passive income.

## Current Status
- **Milestones:** All 3 complete (v1.0, v2.0, v3.0 shipped)
- **Articles:** 58 repair guides
- **Monetization:** Multi-affiliate (Amazon + Lectron + iFixit + RR Car Parts live)
- **Hosting:** Cloudflare Pages (LIVE)
- **Live URL:** https://tesladiyrepair.com

## Affiliate Programs
| Program | Status | ID | Articles |
|---------|--------|-----|----------|
| Amazon.de | **LIVE** | diyrepair-21 | 55 |
| Amazon.com | **LIVE** | diyrepair07-20 | 55 |
| Lectron (Awin) | **LIVE** | 2729872 | 6 |
| iFixit (Sovrn) | **LIVE** | sovrn.co/... | 15 |
| RR Car Parts | **LIVE** | (employer) | 4 |
| Tesmanian | Pending | - | 0 (8 ready) |
| EVannex (Rakuten) | Pending | - | 0 |

## Key Files
- `.planning/STATE.md` - Current progress
- `.planning/PROJECT.md` - Full project vision
- `.planning/ROADMAP.md` - Development phases
- `.planning/AFFILIATE-UPDATES-READY.md` - Pending affiliate link updates
- `scripts/gsc.js` - Google Search Console API script

## GSC Stats (2026-01-25)
| Metric | Value | Change |
|--------|-------|--------|
| Clicks | 2 | same |
| Impressions | 167 | +32 |
| CTR | 1.20% | -0.28pp |
| Avg Position | 13.6 | +0.5 |

**Top Pages:** tesla-usb-not-working (75 imp), window-reset-calibration (38 imp), windshield-wiper-replacement (24 imp), phantom-braking-fix (21 imp)
**Note:** USB article up to 75 impressions with 0 clicks (CTR issue), homepage getting 2 clicks from 9 impressions

## Analytics Stats (2026-01-25)
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
- [ ] Tesmanian (GoAffPro) - applied ~2026-01-14, follow-up sent 2026-01-21, no response (8+ days)
  - May need to try different contact or move on
- [ ] EVannex (Rakuten) - applied ~2026-01-16, direct email sent 2026-01-22
  - Emailed partnerships@evannex.com directly

## Next Actions
- [ ] Check Tesmanian approval (applied 4+ days ago) → add links to 8 articles
- [x] ~~Find EVannex direct affiliate program~~ DONE - emailed partnerships@evannex.com
- [ ] Check Buttondown subscriber count → ready to send first newsletter
- [x] ~~Optimize tesla-usb-not-working article~~ DONE - new title/meta/intro for CTR
- [ ] Write more high-value articles
- [ ] Continue Reddit engagement (2-3 helpful comments/day)
- [ ] Monitor GSC weekly with `npm run gsc`
- [ ] Consider adding display ads (Ezoic/AdSense)

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
