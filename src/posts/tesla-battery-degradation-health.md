---
layout: post.njk
title: "Tesla Battery Degradation: What's Normal vs What's a Problem"
description: "Check Tesla battery health in 3 numbers: exact kWh thresholds for all models, 70% warranty threshold calculator, 2026 community data for Highland/Juniper/4680 cells, and how to reclaim lost range via BMS recalibration. Step-by-step warranty claim guide included."
date: 2026-02-17
lastUpdated: 2026-05-03
category: "Battery"
difficulty: "Easy"
readTime: "20 min read"
models: "All Models"
emoji: "🔋"
asin_de: "B0D7F5F4HN"
asin_com: "B0BFFRV43G"
faq:
  - q: "How fast does a Tesla battery degrade?"
    a: "Tesla batteries typically lose 2-3% capacity per year. After 5 years, most owners see 10-15% range reduction. LFP batteries degrade slower and benefit from regular 100% charging."
  - q: "How do I check my Tesla's battery health?"
    a: "Go to Controls > Software and compare your battery's current rated range to the original. For precise data, use a Bluetooth OBD2 scanner with the Scan My Tesla app to see exact degradation percentage."
  - q: "What causes Tesla battery degradation?"
    a: "The main causes are heat exposure, frequent DC fast charging, regularly charging to 100%, and calendar aging. Keeping charge between 20-80% and limiting supercharging slows degradation significantly."
  - q: "Is Tesla battery degradation covered by warranty?"
    a: "Tesla warrants battery capacity for 8 years depending on model. If capacity drops below 70% within the warranty period, Tesla will repair or replace the battery pack."
  - q: "What is the difference between LFP and NCA Tesla batteries?"
    a: "LFP (lithium iron phosphate) batteries are used in Standard Range models from mid-2021. They can be charged to 100% daily, have longer cycle life, but slightly less energy density. NCA batteries are in Long Range and Performance models — charge to 80% daily for best longevity."
  - q: "How many miles does a Tesla battery last?"
    a: "Most Tesla batteries are designed to last 300,000-500,000 miles (500,000-800,000 km). Real-world data shows most packs retain 80%+ capacity at 200,000 miles. Battery replacement before end of vehicle life is uncommon."
  - q: "Does cold weather permanently damage Tesla batteries?"
    a: "No, cold weather causes temporary range reduction (20-40% in extreme cold) but does not permanently damage the battery. The thermal management system protects the cells. Preconditioning before driving recovers most of the lost range."
  - q: "How do I file a Tesla battery warranty claim?"
    a: "Use the Tesla app to schedule a service appointment under 'Battery and Charging'. Include your Scan My Tesla kWh reading vs. the original spec in the description. Tesla's warranty covers below 70% usable capacity — calculate using your model's factory kWh, not the estimated range display."
  - q: "Do V4 Superchargers damage batteries faster than V3?"
    a: "Not for most owners. Model 3 and Y cap out at 170–250 kW regardless of charger type, so connecting to a 500 kW V4 delivers the same rate as V3. Only the Cybertruck actually uses the full 500 kW. For road-trip charging, V4 has negligible impact on degradation vs V3."
tools:
  - name: "OBDLink CX Bluetooth Scanner"
    link: "https://www.amazon.com/dp/B08NFNLKTK?tag=diyrepair07-20"
  - name: "OBDLink CX Scanner (Amazon.de)"
    link: "https://www.amazon.de/dp/B0D7F5F4HN?tag=diyrepair-21"
  - name: "Lectron Portable EV Chargers"
    link: "https://www.awin1.com/cread.php?awinmid=91891&awinaffid=2729872&ued=https%3A%2F%2Fev-lectron.com%2Fcollections%2Fev-chargers"
    provider: "lectron"
  - name: "Tesla Wall Connector"
    link: "https://www.amazon.de/dp/B0CS1YX18P?tag=diyrepair-21"
  - name: "Level 2 EV Charger 32A (Amazon US)"
    link: "https://www.amazon.com/s?k=level+2+ev+charger+32+amp+tesla&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Home Wallbox Type 2 11kW (Amazon DE)"
    link: "https://www.amazon.de/s?k=wallbox+typ+2+11kw+tesla&tag=diyrepair-21"
---

Every Tesla owner eventually wonders: "Is my battery degrading normally?" Whether you're seeing slightly less range after a few years or considering buying a used Tesla, understanding battery health is essential. This guide covers everything you need to know about Tesla battery degradation — how to measure it, what's normal, and how to slow it down.

## Battery Degradation at a Glance

| Metric | Number | What It Means |
|--------|--------|---------------|
| **Year 1 capacity loss** | 5–8% | Normal — much is BMS calibration, not real cell loss |
| **5-year capacity loss** | 10–15% | Expected fleet average across all models |
| **Annual loss (years 2–5)** | 1–2%/year | Gradual decline, curve flattens over time |
| **Warranty threshold** | 70% of original usable kWh | 8-year coverage — below this threshold = file a claim |
| **Healthy cell voltage delta** | Under 20 mV at 100% charge | Check via OBDLink CX + Scan My Tesla |
| **Warning cell delta** | 50–100 mV | Run BMS recalibration; investigate if it persists |
| **Critical cell delta** | Over 100 mV | Schedule service — likely a bad module |
| **LFP daily charge target** | 100% | Standard Range 2021+ — Tesla recommends it daily |
| **NCA/NMC daily charge target** | 80% | Long Range/Performance — save 100% for road trips |
| **Battery design lifespan** | 300,000–500,000 miles | Most packs outlast the rest of the car |
| **Diagnostic cost** | ~€75 + €10 | OBDLink CX adapter + Scan My Tesla app (one-time) |

## Table of Contents

1. [Battery Degradation at a Glance](#quick-reference)
2. [How Tesla Batteries Degrade](#how-tesla-batteries-degrade)
3. [What's Normal Degradation?](#whats-normal-degradation)
4. [Real-World Degradation by Model](#real-world-degradation-by-model)
5. [2026 Community Tracking Data](#2026-community-tracking-data-which-batteries-age-best)
6. [2026 Model Year Breakdown](#2026-model-year-breakdown-what-to-expect-by-purchase-year)
7. [How Battery Degradation Affects Resale Value](#how-battery-degradation-affects-tesla-resale-value)
8. [Temperature's Impact on Battery Health](#temperatures-impact-on-battery-health)
9. [How to Check Your Battery Health](#how-to-check-your-battery-health)
10. [Your 3-Number Battery Health Snapshot](#your-3-number-battery-health-snapshot)
11. [BMS Calibration: Fake vs Real Degradation](#bms-calibration-the-fake-degradation)
12. [10 Tips to Maximize Battery Lifespan](#10-tips-to-maximize-battery-lifespan)
13. [Common Degradation Myths](#common-degradation-myths)
14. [2024+ Models: Highland, Juniper & 4680 Cells](#2024-models-whats-different-about-highland-juniper--4680-cells)
15. [V4 Superchargers and Battery Health](#v4-superchargers-and-battery-health-what-you-need-to-know)
16. [Replace, Repair, or Keep? Decision Framework](#replace-repair-or-keep-the-2026-decision-framework)
17. [Tesla Battery Replacement Costs](#tesla-battery-replacement-costs)
18. [When to Contact Tesla Service](#when-to-contact-tesla-service)
19. [How to File a Battery Warranty Claim](#how-to-file-a-tesla-battery-warranty-claim-step-by-step)
20. [Buying a Used Tesla: Battery Check Protocol](#buying-a-used-tesla-battery-health-check-protocol)
21. [Battery Degradation FAQ](#battery-degradation-faq)

---

## How Tesla Batteries Degrade

Tesla uses lithium-ion battery cells (NCA, NMC, or LFP depending on model and year). All lithium-ion batteries lose capacity over time through two main mechanisms:

### Calendar Aging
- Happens regardless of use
- Chemical reactions slowly reduce capacity
- Accelerated by heat and high state of charge
- Typically 1-2% per year just from aging

### Cycle Aging
- Caused by charging and discharging
- Each charge cycle slightly wears the electrodes
- Deeper cycles (0-100%) cause more wear than shallow ones (20-80%)
- Fast charging at high power generates more heat, accelerating wear

## What's Normal Degradation?

Based on real-world data from hundreds of thousands of Tesla vehicles:

### First Year
- **5-8% range drop is normal** — don't panic
- Much of this is the battery management system (BMS) recalibrating
- Some initial capacity loss is built into battery chemistry
- The car may also have been displaying optimistic range estimates initially

### Years 2-5
- **~1-2% per year** is typical for most drivers
- Total degradation of 8-15% at 5 years / ~100,000 km is normal
- LFP batteries (Standard Range+ from mid-2021) may show slightly less degradation in this period

### Long Term (5-10+ years)
- Degradation curve typically flattens after the initial drop
- Most Teslas retain **80-90% capacity at 200,000 km**
- Tesla's battery warranty covers below **70% capacity** within the warranty period:
  - **Model 3 Standard Range:** 8 years / 160,000 km
  - **Model 3 Long Range/Performance:** 8 years / 192,000 km
  - **Model S/X:** 8 years / unlimited km (older) or 240,000 km (newer)
  - **Model Y:** Same as equivalent Model 3 tiers

> ⚠️ **Note:** Warranty terms vary by market and model year. Always check your specific warranty documentation.

### LFP vs NCA/NMC Batteries

| Factor | LFP (Iron Phosphate) | NCA/NMC (Nickel-based) |
|--------|---------------------|----------------------|
| **Models** | Standard Range (2021+) | Long Range, Performance |
| **Charge to 100%** | ✅ Recommended daily | ❌ Only when needed |
| **Cycle life** | Higher (~3,000+ cycles) | Lower (~1,500 cycles) |
| **Calendar aging** | Slightly better | Slightly worse |
| **Cold weather range** | Worse | Better |
| **Degradation curve** | Flatter over time | Steeper initial drop |

## Real-World Degradation by Model

Community data from thousands of vehicles gives us a clearer picture of what to expect for each Tesla model. Here's what owners are actually seeing after 5 years of ownership:

| Model | Battery | Original Range (WLTP) | Typical 5-Year Range | Avg Degradation |
|-------|---------|----------------------|---------------------|-----------------|
| Model 3 SR+ (LFP) | 60 kWh | 491 km | 430-450 km | 8-12% |
| Model 3 LR (NCA) | 75 kWh | 602 km | 520-550 km | 8-14% |
| Model Y LR (NCA) | 75 kWh | 533 km | 460-490 km | 8-14% |
| Model S LR (NCA) | 100 kWh | 652 km | 570-600 km | 8-12% |
| Model 3 Highland (NMC) | 60/79 kWh | 513-629 km | Too new | TBD |

> **Note:** These are approximate ranges based on community data. Your results depend on climate, charging habits, and driving style. The Model 3 Highland uses newer NMC chemistry that may age differently — we'll update this table as more data becomes available.

The key takeaway: most Tesla models cluster around 10-12% degradation at the 5-year mark, which is better than many EVs on the market. The Model S with its larger 100 kWh pack tends to do slightly better because each driving mile represents a smaller percentage of total capacity.

## 2026 Community Tracking Data: Which Batteries Age Best?

Battery tracking communities (Recurrent, What About Tesla, TeslaFi fleet stats) now have multi-year data on hundreds of thousands of vehicles. Here's what stands out in the 2026 picture.

### Best-Performing Batteries

**2021–2023 LFP Standard Range (Model 3/Y)**

The move to lithium iron phosphate cells in mid-2021 was the most significant degradation improvement Tesla has made. Two- to three-year-old LFP cars are tracking at **4–7% lifetime degradation** — considerably below the equivalent NCA cars of the same vintage. The chemistry's flatter voltage curve also means the BMS has less drift, so what you measure is closer to what you actually have.

If you charge to 100% regularly (as Tesla recommends for LFP), these packs are calibrated and honest. Owners who charge LFP to 80% out of habit inherited from an old NCA car are often artificially suppressing range display without actually protecting anything.

**2022–2023 Model Y Long Range (NMC)**

Community data shows 2022 Model Y LR packs holding up slightly better than comparable 2020–2021 units — likely a result of cell manufacturing improvements in the Austin Gigafactory ramp. Average community-reported degradation at 80,000 km is **7–9%**, with fewer outliers above 12% than in the 2020–2021 cohort.

### Watch List: Higher-Than-Average Degradation

**Early 2019 Model 3 Long Range (NCA, pre-CCS)**

First-generation 2019 LR packs from the early Fremont ramp show higher-than-average degradation by the 5-year mark — community averages are closer to **14–18%** at 100,000+ km, particularly in warm-climate markets. If you're buying one of these used, budget for above-average degradation and check the OBD2 reading carefully.

**Hot-climate ownership (any model, sustained 35°C+)**

Fleet data consistently shows that geography matters more than model year for long-term health. A 2022 Model Y in Phoenix degrades measurably faster than the same car in Stockholm — roughly **2–4% more total degradation** over 5 years, all else equal. If you're evaluating a used Tesla from a hot-climate market, apply a mental penalty of a few percentage points versus the fleet average.

### 4680 Cells (Cybertruck, 2024+ Model Y with structural pack)

As of April 2026, the longest-owned 4680-pack vehicles are approaching 18–24 months. Community tracking on TMC and Reddit r/TeslaLounge shows:

- Average degradation at 12 months: **2–4%** (encouraging)
- Cell voltage delta readings remain tight — no early cell-imbalance issues emerging at scale
- Peak charge rate stability appears better than early 2170 cohorts at the same mileage

The sample size is still limited. Check community trackers in late 2026 for more robust conclusions.

### How to Find Your Car's Cohort Average

TeslaFi's fleet stats let you filter by model, year, and region to see how your car compares to similar vehicles. If your degradation is within 2–3% of the cohort average for your mileage, you're doing fine. More than 5% above the cohort average for your mileage is worth investigating (OBD2 check, service appointment if still in warranty).

### Estimated 5-Year Degradation by Charging Profile

Beyond model and climate, *how* you charge is the biggest controllable variable. Community fleet data organized by primary charging method tells a consistent story:

| Primary Charging Method | Est. 5-Year Degradation (Model 3/Y LR NCA) |
|------------------------|---------------------------------------------|
| Home AC only, 80% daily limit | 8–11% |
| Home AC + occasional Supercharging (1–4×/month) | 9–13% |
| Mixed: Supercharging 50%+ of sessions | 12–16% |
| Supercharger-primary, hot climate | 15–22% |

The difference between "home AC primary" and "Supercharger primary" is typically **3–7% of total capacity over 5 years**. On a 75 kWh pack, that's 2.25–5.25 kWh — roughly 15–35 km of preserved daily range.

For LFP vehicles (Standard Range), the spread is narrower — LFP chemistry tolerates DC fast charging better. But even for LFP, home AC charging produces less cumulative heat stress. A quality [home wallbox (Type 2, 11 kW)](https://www.amazon.de/s?k=wallbox+typ+2+11kw+tesla&tag=diyrepair-21) ([US Level 2](https://www.amazon.com/s?k=level+2+ev+charger+32+amp+tesla&tag=diyrepair07-20)) pays back through preserved battery capacity and deferred replacement costs — not just per-kWh electricity savings.

## 2026 Model Year Breakdown: What to Expect by Purchase Year

Every Tesla model year uses different battery chemistry and carries a different track record. Here is what fleet data shows in 2026 for each production cohort — use this to benchmark your own car or evaluate a used purchase.

### 2019–2020 (NCA — Maturing Fleet, Established Degradation Curves)

The first production years of Model 3/Y have the most real-world mileage behind them. By 2026, many of these vehicles are at 150,000–250,000 km.

| Model | Cell Chemistry | Avg Degradation at 5–6 Years | Watch For |
|-------|---------------|------------------------------|-----------|
| Model 3 LR NCA (2019) | NCA | 14–20% | Early Fremont ramp units worst; hot-climate cars push 20%+ |
| Model 3 SR NCA (2019–2020) | NCA | 10–14% | Smaller pack amplifies percentage loss |
| Model Y LR (2020–early 2021) | NCA/NMC | 10–15% | Early Austin ramp units slightly worse than later builds |
| Model S/X 100D (2019–2020) | NCA | 8–13% | Large pack absorbs degradation better; per-kWh loss still significant |

**Bottom line for this cohort:** 2019 Model 3 LR units with 120,000+ km in warm climates are where outlier degradation concentrates. A cell voltage delta above 50 mV is common here — run a BMS recalibration before assuming real cell loss.

### 2021–2022 (LFP SR + NCA/NMC LR — The Benchmark Cohort)

The 2021–2022 transition to LFP for Standard Range models is the single biggest quality step in Tesla battery history. This cohort now has 3–4 years of real-world data and is the most predictable.

| Model | Cell Chemistry | Avg Degradation at 3–4 Years | Notes |
|-------|---------------|------------------------------|-------|
| Model 3 SR+ LFP (2021–2022) | LFP | 4–8% | Best-performing Tesla pack at this age |
| Model 3 LR NCA (2021–2022) | NCA | 8–12% | Measurably improved over 2019–2020 cohort |
| Model Y LR NMC (2021–2022) | NMC | 7–11% | Austin Gigafactory cell improvements visible in data |
| Model S LR (2021–2022) | NCA | 6–10% | Large pack; excellent long-term data |
| Model X LR (2021–2022) | NCA | 6–10% | Comparable to Model S LR pack |

**LFP owners:** Charge to 100% regularly — it actively benefits cell balancing. Owners who cap LFP at 80% (old NCA habit) are degrading their range estimate accuracy without protecting anything.

### 2023 (NMC Transition + LFP Continuation)

Two to three years of real-world data. Trends are visible but not fully confirmed.

| Model | Cell Chemistry | Avg Degradation at 2–3 Years | Notes |
|-------|---------------|------------------------------|-------|
| Model 3 SR+ LFP (2023) | LFP | 3–6% | Consistent with 2021–2022 LFP pattern |
| Model 3 LR NMC (2023) | NMC | 5–9% | Tracking slightly better than 2021 NCA at same mileage |
| Model Y LR NMC (2023) | NMC | 5–9% | Similar to Model 3 LR 2023 performance |
| Model Y RWD LFP (2023) | LFP | 3–6% | Consistent with LFP performance pattern |

### 2024–2025 (Highland, Juniper, NMC21 + 4680 — Early Data Only)

Limited data — 12–24 months of real-world records available as of May 2026.

| Model | Cell Chemistry | Avg Degradation at 12 Months | Notes |
|-------|---------------|------------------------------|-------|
| Model 3 Highland LR (2024+) | NMC21 | 3–6% | First-year trending slightly better than older NMC |
| Model Y Juniper LR (2025+) | NMC21 | 3–6% | Matching Highland trend; very small sample still |
| Model 3/Y SR (2024+) | LFP | 2–4% | Consistent with established LFP pattern |
| Cybertruck AWD (2024+) | 4680 | 2–5% | Very limited sample — check Tesla Motors Club for updates |

**Important caveat:** Don't choose a 2025 Juniper over a well-maintained 2022 Model Y LR purely on expected degradation. The difference in data confidence is wider than the likely real-world difference. A 2022 car with documented charging habits and known history is often the safer bet over a 2025 car with unknown history and 12 months of data.

## How Battery Degradation Affects Tesla Resale Value

This is the section most guides skip — but it's arguably the most useful number for owners who plan to sell within 5–7 years.

### The Buyer's Discount Formula

Used Tesla buyers in Europe increasingly check battery health before making offers, particularly as the market has matured and OBD2 tools are widely known. The rough market discount that experienced buyers apply:

| Degradation vs. Fleet Average | Typical Market Impact (Model Y LR) |
|-------------------------------|-------------------------------------|
| At or below fleet average | No discount, often a selling point |
| 2–4% above fleet average | €500–1,000 off asking price |
| 5–8% above fleet average | €1,500–2,500 off, or longer time to sell |
| 10%+ above fleet average | Significant discount required; some buyers walk |

These aren't hard rules — market conditions, overall mileage, and service history all factor in. But if your car shows 16% degradation at 90,000 km when the fleet average for your model is 10%, expect buyers to know this and price accordingly.

### When to Disclose Proactively

If you're selling privately, disclosing battery health upfront builds trust and filters out time-wasters. Include a Scan My Tesla screenshot (full pack energy at 100%) in your listing. Sellers who do this consistently report faster sales and fewer lowball offers — because you've removed the uncertainty buyers fear.

If your car is **at or below fleet average**, this is a genuine selling point. "Battery health: X kWh / Y% of original, measured April 2026" is worth including in the listing.

### When It Doesn't Matter Much

For cars under 50,000 km with under 10% degradation, most buyers don't pay a meaningful discount. At this point, you're clearly within normal operating range and the warranty is still intact. The degradation conversation becomes more important after 80,000 km or 5 years.

If you're planning to sell within 3–4 years, the most cost-effective thing you can do is maintain charging habits (80% daily, home AC charging) and keep records — not spend money on treatments or services that don't change the underlying chemistry.

### Independent Battery Reports for Private Sales

Some certified EV shops (and Tesla-focused independents) now offer **battery health certificates** — a printed report with OBD2 data, cell voltage readings, and comparison to fleet benchmarks. These cost €40–80 and can be included in the sale documentation. For high-value used sales (Model S, Plaid, early Cybertruck), this level of documentation meaningfully supports asking price. See our [Used Tesla Buying Inspection Guide](/posts/tesla-used-buying-inspection-guide/) for what these reports cover.

## Temperature's Impact on Battery Health

Temperature is the single biggest external factor affecting long-term battery health. Tesla's thermal management system does a lot of heavy lifting, but it can't overcome physics entirely.

### Hot Climates (Arizona, Middle East, Southern Europe)

Owners in consistently hot climates (average summer temps above 35°C) can see **15-20% degradation at 5 years** — noticeably higher than the fleet average. The battery pack sits underneath the car, absorbing road heat in addition to ambient temperature. Tesla's cooling system runs more aggressively in hot climates, which helps but adds to energy consumption.

### Cold Climates (Scandinavia, Canada, Northern Europe)

Cold climates cause **less permanent degradation** but significantly more **temporary range loss**. In extreme cold (-20°C and below), you might see 20-40% less range on a given drive. The good news: this range comes back when temperatures rise. Cold storage is actually gentler on lithium-ion chemistry than heat. For tips on handling cold weather range loss, see our [Battery Preconditioning Guide](/posts/tesla-battery-preconditioning-guide/).

### Best Practices for Temperature Management

- **Ideal storage temperature:** 15-25°C. If you can garage park, do it
- **Garage parking vs outdoor** makes a measurable difference — roughly **2-3% less degradation over 5 years** according to fleet data
- Tesla's thermal management system **runs even when parked** to protect the battery in extreme conditions. This is normal and expected — don't be alarmed by occasional fan noise
- In summer, use Cabin Overheat Protection set to "Fan Only" to keep the interior cool without excessive battery drain from the A/C compressor
- Pre-condition the battery before fast charging in cold weather — use **Navigate to Supercharger** to trigger automatic preheating

## How to Check Your Battery Health

### Method 1: In-Car Range Display (Least Accurate)

The simplest but least reliable method:

1. Charge to **100%**
2. Switch display to **km/miles** (not percentage)
3. Compare displayed range to the original EPA/WLTP rating

**Why it's unreliable:** The range estimate depends on recent driving habits, temperature, and BMS calibration — not just battery capacity. You could see "range loss" that's just the car adjusting estimates to your driving style.

### Method 2: Scan My Tesla App (Recommended) 🛒

The best DIY method for accurate battery health data:

**What you need:**
- [OBDLink CX Bluetooth adapter](https://www.amazon.de/dp/B0D7F5F4HN?tag=diyrepair-21) ([US](https://www.amazon.com/dp/B08NFNLKTK?tag=diyrepair07-20)) (~€75–80)
- Scan My Tesla app (Android/iOS, ~€10)

**What to look for:**
- **Full pack energy (kWh):** Compare to your car's original capacity
- **Cell voltage delta:** Difference between highest and lowest cell voltages
- **Battery capacity (Ah):** Compared to nominal

**Interpreting results:**
- **Cell voltage delta < 20mV** when fully charged = healthy pack
- **Cell voltage delta > 50mV** = possible cell imbalance, needs balancing
- **Cell voltage delta > 100mV** = potential bad cell, contact service

For a complete guide on diagnostic tools, see our [Tesla OBD2 Scanner & Diagnostics Guide](/posts/tesla-obd2-scanner-diagnostics/).

### Method 3: Tesla Service Mode (Free — Built Into Every Tesla)

Service Mode gives you the same battery data Tesla technicians use — no additional hardware required. It's available on all models and all current firmware versions.

**How to access:**
1. Park the car (powered on)
2. Go to **Controls → Software**
3. **Touch and hold the large word "MODEL"** (under the vehicle image) for 5 seconds
4. Type **service** (all lowercase) and tap Enable
5. A red border appears — Service Mode is active

**In Service Mode, navigate to High Voltage → HV Battery. Key numbers:**
- **Cell Voltage Min / Max** — subtract to get your delta (target: under 20 mV)
- **Remaining Energy (kWh)** at 100% charge — compare to factory spec for your model
- **Cell temperatures** — sustained readings above 45°C during charging are abnormal

This is the fastest free method for a snapshot health check. For trending over time, you'll still want an OBD2 app. Full walkthrough: [Tesla Service Mode Guide](/posts/tesla-service-mode-guide/).

### Method 4: Battery Monitoring Apps Compared

For ongoing tracking rather than a one-time snapshot, several apps connect via OBD2 and log every charge session:

| App | Platform | Cost | Best For |
|-----|----------|------|----------|
| **Scan My Tesla** | Android/iOS | ~€10 one-time | Detailed cell data, voltage delta, SoH |
| **TeslaFi** | Web (browser) | ~€5/month | Long-term trending, fleet comparison, trip history |
| **Stats for Tesla** | iOS | Free / €5 Pro | Clean UI, charging stats, widget support |
| **BetterBatteryStats** | Android | Free | Lightweight, quick health snapshots |
| **Tessie** | iOS/Android | Free / Pro | Modern UI, trip logging, API-based (no OBD2 needed) |

**Recommendation:** Use **Scan My Tesla** for a one-time health check on a specific car (especially before a used purchase) — it gives raw cell-level data. Use **TeslaFi** if you want long-term degradation curves. Tessie is the easiest to set up since it uses the Tesla API instead of a physical OBD2 adapter.

The [OBDLink CX adapter](https://www.amazon.de/dp/B0D7F5F4HN?tag=diyrepair-21) ([Amazon US](https://www.amazon.com/dp/B08NFNLKTK?tag=diyrepair07-20)) works with all OBD2-based apps. For API-based apps (TeslaFi, Tessie), no adapter is needed — just your Tesla account credentials.

Long-term tracking services like TeslaFi log every charge session:

- Track degradation over months/years with graphs
- Compare your car to fleet averages
- See the effect of charging habits over time
- Costs ~$5/month

## Your 3-Number Battery Health Snapshot

Battery health can feel overwhelming with dozens of OBD2 metrics to parse. In practice, three numbers tell you 90% of what you need to know. Record these once every 6 months.

### Number 1: Full Pack Energy (kWh)

Read via Scan My Tesla (PACK_FULL_ENERGY parameter) or Tesla Service Mode at 100% state of charge. Compare to factory spec:

| Model | Original Usable kWh | Worth Investigating Below |
|-------|--------------------|-|
| Model 3 SR+ LFP (2021–2023) | ~57.5 kWh | 52 kWh |
| Model 3 LR NCA (2021–2023) | ~75–79 kWh | 68 kWh |
| Model Y LR NCA (2020–2023) | ~75 kWh | 68 kWh |
| Model 3 Highland / Y Juniper LR (2024+) | ~79 kWh | 72 kWh |
| Model S LR (2021+) | ~95–99 kWh | 87 kWh |
| Cybertruck AWD | ~120 kWh | 110 kWh |

These "investigate below" thresholds sit roughly halfway between factory spec and the 70% warranty floor — catching meaningful degradation before it becomes a warranty claim.

### Number 2: Cell Voltage Delta (mV)

The spread between your pack's highest and lowest cell voltages. This is the **earliest indicator of developing cell imbalance** — it often appears months before any range drop shows on the display.

- **Under 20 mV** — healthy, balanced pack
- **20–50 mV** — acceptable, monitor over next few charges
- **50–100 mV** — investigate: run a BMS recalibration cycle, then recheck
- **Over 100 mV** — act: schedule a service appointment; likely a failing module

### Number 3: Displayed Range Trend

Charge to exactly 100% and note the displayed km/miles. Do this on three consecutive charge sessions (after normal driving, not after hard acceleration or a Supercharger session) and average them. Compare to what you logged 6 months ago.

A drop of **1–3 km per month** is normal. A sudden drop of **20+ km in one month** suggests either BMS drift (fixable with recalibration) or real cell loss (investigate with OBD2).

**How to log it:** A note in your phone with date, odometer, kWh, and cell delta takes 90 seconds. After a year you'll have a trend — far more useful than any single snapshot. Spike in delta? Run a recalibration. Steady kWh drop with normal delta? Gradual but real degradation — check warranty status if mileage and years permit.

<div class="tip-box">
<strong>💡 Quickest setup:</strong> The <a href="https://www.amazon.de/dp/B0D7F5F4HN?tag=diyrepair-21">OBDLink CX</a> (<a href="https://www.amazon.com/dp/B08NFNLKTK?tag=diyrepair07-20">US</a>) + Scan My Tesla gives all three readings in under 3 minutes. Leave the adapter in your OBD2 port — it draws no power when your phone isn't connected. Perfect for a monthly parking-session check.
</div>

## BMS Calibration: The "Fake" Degradation

Before assuming your battery is degrading, understand that the Battery Management System (BMS) can become miscalibrated, showing inaccurate capacity. If you have access to [Service Mode](/posts/tesla-service-mode-guide/), you can view detailed battery cell data to distinguish between real degradation and BMS drift.

### Signs of BMS Miscalibration
- Sudden large range drops (5%+ overnight without driving)
- Range estimate jumps around between charges
- Car shows less range than expected but drives normally
- Recently changed charging habits significantly

### How to Recalibrate the BMS

**For NCA/NMC batteries:**
1. Drive the car down to **below 10%** state of charge
2. Charge to **100%** using a slow charger (home AC charging)
3. Leave plugged in at 100% for 1-2 hours
4. Repeat 2-3 times over the next few weeks
5. Range estimate should gradually improve

**For LFP batteries:**
1. Charge to **100%** weekly (Tesla recommends this anyway)
2. Leave plugged in at 100% for several hours
3. The BMS calibrates during this time
4. LFP batteries are more prone to miscalibration

> 💡 **Tip:** After a BMS recalibration, it may take several charge cycles for the displayed range to stabilize. Be patient.

## 10 Tips to Maximize Battery Lifespan

### 1. Charge to 80% Daily (NCA/NMC)
- Set your daily charge limit to **80%** for nickel-based batteries
- Only charge to 100% for long trips
- LFP owners: charge to **100%** regularly — it's fine and helps calibration

### 2. Avoid Sitting at 0% or 100%
- Extended time at extreme states of charge accelerates degradation
- If you charge to 100%, drive soon after
- Don't leave the car sitting at very low charge for days

### 3. Minimize Supercharging
- Occasional Supercharging is fine — Tesla designed the system for it
- But making it your **primary** charging method increases heat stress
- Home [AC charging](https://www.awin1.com/cread.php?awinmid=91891&awinaffid=2729872&ued=https%3A%2F%2Fev-lectron.com%2Fcollections%2Fev-chargers) at 7-11 kW is gentlest on the battery. See our [Charging Adapter Guide](/posts/tesla-charging-adapter-guide/) for home charging options

### 4. Precondition Before Fast Charging
- Use **Navigate to Supercharger** so the car preheats the battery
- Cold batteries + fast charging = more degradation
- The car will automatically precondition, but give it enough lead time

### 5. Avoid Extreme Heat
- Park in shade or garages when possible
- Use [Cabin Overheat Protection](/posts/tesla-climate-keeper-issues/) but set to "No A/C" to reduce battery drain
- Extreme heat (40°C+) is the #1 enemy of battery longevity

### 6. Don't Charge Immediately After Hard Driving
- Battery is hot after spirited driving or highway runs
- Let it cool for 15-30 minutes before plugging in to a Supercharger
- Home charging at low power is fine — the charge rate is low enough

### 7. Use Scheduled Departure
- Instead of charging immediately when plugging in, use **Scheduled Departure**
- The car finishes charging just before you leave
- Less time sitting at high state of charge = less degradation

### 8. Keep Software Updated
- Tesla regularly improves battery management through [OTA updates](/posts/tesla-2026-2-3-software-update-features/)
- Updated BMS algorithms can improve capacity estimates and charging curves
- Some updates have actually *recovered* lost range

### 9. Moderate Your Driving
- Constant hard acceleration increases battery temperature
- Regenerative braking is actually good for the battery (recovers energy, reduces heat from friction braking)
- For more on regen: [Tesla Regen Braking Reduced](/posts/tesla-regen-braking-reduced/)

### 10. Store Properly for Extended Periods
- If leaving the car for weeks/months:
  - Set charge limit to **50-60%**
  - Turn off Sentry Mode to prevent [phantom drain](/posts/tesla-phantom-battery-drain-fix/)
  - Leave plugged in if possible (the car manages itself)
  - Check on it every 2-3 weeks

## Common Degradation Myths

Battery degradation is one of the most misunderstood aspects of EV ownership. Let's clear up the most persistent myths.

### Myth: "Supercharging ruins the battery"

**Reality:** Occasional Supercharging has minimal long-term impact. Tesla's own fleet data shows **less than 1% additional degradation over 100,000 miles** for owners who Supercharge moderately (a few times per month). The battery management system actively protects cells during DC fast charging by limiting power and managing temperature. Making Supercharging your *only* charging method is suboptimal, but using it for road trips and occasional top-ups is exactly what it's designed for.

### Myth: "You should never charge to 100%"

**Reality:** This depends entirely on your battery chemistry. **LFP batteries should be charged to 100% regularly** — Tesla specifically recommends it, and it helps the BMS stay calibrated. For NCA/NMC batteries, daily charging to 80% is ideal, but **occasional 100% charges for trips are perfectly fine**. The damage comes from *sitting* at 100% for extended periods, not from briefly reaching full charge. Use Scheduled Departure to time your charge completion with your departure.

### Myth: "Battery replacement costs $20,000+"

**Reality:** Full pack replacements at those prices are increasingly rare. Most battery issues involve individual modules, not the entire pack. **Module-level repairs typically cost €2,000-5,000** and can resolve capacity issues, cell imbalances, and fault codes without replacing the whole battery. Third-party shops and specialists have also brought costs down significantly compared to early Tesla pricing.

### Myth: "Degradation is linear"

**Reality:** The degradation curve is **logarithmic, not linear**. You'll see the fastest capacity loss in the first year (5-8%), then the rate slows dramatically. A battery that lost 5% in year one won't lose another 5% in year two — more like 1-2%. This is why long-term Tesla owners often report that their degradation has essentially "plateaued" after the initial adjustment period. Understanding this curve prevents unnecessary anxiety about early range drops.

## 2024+ Models: What's Different About Highland, Juniper & 4680 Cells

The 2024 refresh models introduced new cell chemistry — and some changes are worth knowing about if you own or are buying a newer Tesla.

### Model 3 Highland & Model Y Juniper (2024+): NMC21 Chemistry

The refreshed Highland and Juniper LR/AWD models switched from the previous NCA (nickel-cobalt-aluminum) formulation to **NMC21** — a newer nickel-manganese-cobalt cathode chemistry. In practice:

- **Similar charge habits apply**: daily 80% limit is still recommended for LR/AWD variants
- **Early owner data (12–18 months)** suggests first-year degradation is tracking on the lower end of normal — around 3–6% vs. the 5–8% typical of older NCA cells
- **The degradation curve appears flatter**: less "pop" in year one, potentially slightly better long-term retention — though it's too early for definitive data
- **Standard Range variants** on both Highland and Juniper still use LFP — charge to 100% regularly, same as before

The Highland and Juniper also received a refreshed thermal management system with improved cooling efficiency, which benefits long-term health in warm climates.

> **Note:** The table in the "Real-World Degradation" section will be updated as fleet data accumulates for 2024+ models. We'll post first meaningful data when Highland LR vehicles hit 30,000+ km in bulk.

### Cybertruck: 4680 Cells

The Cybertruck uses Tesla's proprietary **4680 cylindrical cells** — 46mm diameter, 80mm height, roughly 5× larger than the 2170 cells in other models. Key differences:

- **Tabless design** ("Jelly Roll"): current flows through the entire electrode surface rather than tabs. Less resistance means less heat generation during fast charging.
- **Higher energy density**: ~10% more energy per kg than 2170 cells at pack level
- **Degradation outlook**: Very limited real-world data as of early 2026. Early community reports from 12–18 month owners show 2–5% degradation — tracking well, but the small sample size means these numbers will shift. Check TMC forums for ongoing tracking.
- **Check method**: OBDLink CX + Scan My Tesla works on Cybertruck. Service Mode HV Battery screen works the same way.

### What Doesn't Change

Regardless of cell chemistry, the fundamentals remain: avoid sustained extreme heat, use home AC charging as your primary source, and avoid sitting at 100% for days at a time. The BMS manages the differences in chemistry — your habits are still the biggest variable.

---

## When to Contact Tesla Service

Contact your Tesla service center if:

- **Capacity drops below 70%** within the warranty period
- **Cell voltage delta exceeds 100mV** (possible bad cell module)
- **Rapid unexpected degradation** (10%+ in a few months without explanation)
- **Charging stops prematurely** or battery won't charge past a certain percentage
- **"Battery requires service"** alert appears on screen

Tesla may:
- Run remote diagnostics
- Perform a battery balance cycle
- Replace individual modules (not always the whole pack)
- Replace the pack under warranty if degradation exceeds limits

## How to File a Tesla Battery Warranty Claim (Step by Step)

If you believe your battery has degraded beyond the warranty threshold, a clear and documented approach makes the difference between a quick resolution and being sent home empty-handed.

### Step 1: Build Your Evidence File

Before contacting Tesla, gather:

- **Scan My Tesla or TeslaFi report** showing current pack kWh vs. original spec (a screenshot of the full pack energy at 100% charge is ideal)
- **Service Mode screenshots**: navigate to High Voltage → HV Battery, capture the Remaining Energy, Cell Voltage Min/Max, and Cell Voltage Delta numbers
- **Charge history**: any app logs showing the degradation trend over time, not just a single snapshot
- **Your VIN and build date**: warranty eligibility depends on manufacture date, not purchase date

A single OBD2 reading at one charge level can be dismissed. Trend data from multiple sessions over weeks is much harder for Tesla to dispute.

### Step 2: Calculate If You're Below the Warranty Threshold

Tesla's warranty floor is **70% of original rated capacity** within the warranty period. But Tesla measures energy (kWh), not range — range estimates vary with conditions, but pack energy is absolute.

Quick calculation:
- Find your model's original usable battery capacity (e.g., Model 3 Long Range 2021: ~79 kWh usable)
- At 100% charge, Scan My Tesla should show ~79 kWh if the pack is new
- 70% of 79 kWh = **55.3 kWh** — that's your warranty claim threshold
- If your car shows 55 kWh or less at 100%, you have a valid degradation claim

Model reference capacities (usable, approximate):

| Model | Usable kWh | 70% Threshold |
|-------|-----------|---------------|
| Model 3 SR+ LFP (2021–2023) | 57.5 kWh | 40.3 kWh |
| Model 3 LR (2021–2023) | 75–79 kWh | 52.5–55.3 kWh |
| Model Y LR (2020–2023) | 75 kWh | 52.5 kWh |
| Model 3 Highland LR (2024+) | 79 kWh | 55.3 kWh |
| Model S LR (2021+) | 95–99 kWh | 66.5–69.3 kWh |
| Model X LR (2021+) | 95–98 kWh | 66.5–68.6 kWh |

### Step 3: Open a Service Appointment — Not a Phone Call

Use the Tesla app to **schedule a service appointment** and select "Battery and Charging" as the issue type. In the free-text description, write:

> "Battery capacity appears below warranty threshold. At 100% charge, Scan My Tesla shows [X] kWh usable. Original spec is [Y] kWh. Requesting degradation evaluation per 8-year battery warranty. VIN: [your VIN]."

Specific numbers trigger a formal diagnostic, which goes on record. Vague descriptions ("my range seems low") are easier to deflect.

### Step 4: What Tesla Does at the Appointment

The technician will:
1. Run Tesla's internal "Battery Health Report" — this is their official diagnostic tool, which measures actual capacity vs. factory spec
2. Check for active battery fault codes or logged events
3. Review remote telemetry if they have access to your vehicle's data

**Tesla's official measurement vs. your OBD2 reading may differ slightly** — their internal tools are calibrated to their spec database. If your OBD2 data shows you near the threshold, Tesla's tool might put you just above or below it.

### Step 5: If Tesla Rejects Your Claim

If the official reading comes back above 70% but you have persistent OBD2 data showing degradation, you have options:

- **Request a second measurement after a BMS calibration cycle**: occasionally the in-service pack measurement is taken with a miscalibrated BMS. Ask the technician to run a full charge-discharge cycle before the final measurement.
- **Escalate to Tesla Owner Relations**: the service center reports to a regional team. Document everything in writing via the Tesla app chat — email chains matter in disputes.
- **Contact your country's consumer protection body**: in the EU, electric vehicle battery warranties are backed by legal guarantee periods that Tesla must honor. Germany's Verbraucherzentrale and the UK's trading standards office have helped owners in warranty disputes.
- **Independent verification**: a certified EV shop can produce a report using their own diagnostic tools. This independent report can be used in a formal dispute. See our [Tesla Repair Cost Guide](/posts/tesla-repair-cost-guide/) for independent shop options.

### What to Expect From a Successful Claim

If Tesla confirms degradation below 70%:
- Most modern Tesla battery repairs are **module-level replacements**, not full pack swaps — the faulty section is replaced while healthy modules are reused
- **Turnaround time is typically 3–10 business days**, though it varies significantly by service center workload and parts availability
- You get a **loaner or Uber credit** during the repair (varies by region and service center)
- The replacement carries a **new partial warranty** on the repaired section

---

## V4 Superchargers and Battery Health: What You Need to Know

Tesla's V4 Supercharger network (rolling out globally through 2025–2026) offers peak charging rates up to **500 kW** — double the V3's 250 kW ceiling. For most Tesla owners, this raises a fair question: does faster charging mean faster degradation?

### Your Car's Onboard Charger Is Still the Limiter

The V4 hardware is capable of 500 kW, but every Tesla model has a maximum DC charge rate determined by its battery and power electronics — not the charger. As of 2026:

| Model | Max DC Charge Rate |
|-------|--------------------|
| Model 3 Standard Range (LFP) | ~170 kW |
| Model 3 Long Range / Highland LR | ~250 kW |
| Model Y Long Range / Juniper LR | ~250 kW |
| Model S Plaid | ~250 kW |
| Model X Plaid | ~250 kW |
| Cybertruck AWD / Cyberbeast | ~500 kW |

So for most Model 3 and Y owners, connecting to a V4 supercharger delivers exactly the same charge rate as a V3 — your car simply draws up to its own limit. You won't charge faster than you already could at V3, but you also won't hurt the battery.

### The Cybertruck Exception

The Cybertruck's 500 kW capability is real and usable — at V4 sites, it charges significantly faster than V3. At this power level, heat generation is higher. Tesla's thermal management system in the Cybertruck is engineered for this, but the fundamental physics remain: more energy in per minute means more heat management needed.

Current guidance for Cybertruck owners using V4:
- Use "Navigate to Supercharger" to trigger battery preconditioning before arriving — this is more important at 500 kW than at lower rates
- Avoid back-to-back V4 sessions (two consecutive 500 kW sessions with no driving in between) — let the pack cool between charges
- Long-term 4680 degradation data at V4 charging rates is still accumulating; follow community tracking threads on Tesla Motors Club for current fleet data

### "Charge Mode" Setting on Newer Models

Tesla's 2025+ software introduced a **Charge Mode** option (Settings → Charging) on compatible models, giving owners direct control over the battery charging curve:

| Mode | What It Does | Best For |
|------|-------------|----------|
| **Standard** | Normal charge curve — balances speed and longevity | Most owners, everyday use |
| **Reduced Degradation** | Lowers peak DC rate, limits time held at high SoC | Maximum long-term battery health |
| **Performance** | Allows higher peak rates at Superchargers | When fastest possible charge time is the priority |

**How to enable it:**
1. Go to **Controls → Charging** (tap the car icon, then Charging)
2. Look for **"Charge Mode"** — it appears as a selector pill near the top of the screen
3. Select **Reduced Degradation** for everyday charging
4. Switch to **Standard** or **Performance** temporarily before a long road trip when you need maximum speed

**What "Reduced Degradation" actually does under the hood:**
- Caps peak Supercharger input power at a lower rate — the session takes slightly longer but generates less heat
- Limits how long the pack holds at a high state of charge (the top-of-charge plateau that stresses cells is shortened)
- Does not change your daily charge limit setting — if you've set 80%, 80% is still the target; the *curve to get there* is gentler

Community observations from early adopters suggest Reduced Degradation produces roughly **1–2% less total degradation over 2–3 years** compared to Standard mode — though long-term fleet data is still accumulating as the feature is relatively new.

**Availability note:** Charge Mode is not present on all firmware versions as of April 2026. If you don't see it under Controls → Charging, your vehicle's software doesn't yet include it. Keep your car updated via Controls → Software → Check for Updates — Tesla has been rolling this out incrementally since 2025.

If minimizing long-term degradation is a priority, enabling Reduced Degradation mode is the single most impactful software change available. It's more effective than most individual charging-habit tweaks because it affects every Supercharger session automatically, without requiring you to remember anything.

### V4 vs V3: Practical Impact on Degradation

For the average owner using Superchargers for road trips (not as a primary charging method), the V3-to-V4 transition has **negligible impact on long-term battery health**. The difference is in session time, not battery stress. Home AC charging remains the lowest-degradation option regardless of which Supercharger network you use.

---

## Replace, Repair, or Keep? The 2026 Decision Framework

Battery degradation does not automatically mean battery replacement. Most Tesla owners facing a degradation concern have three paths — and the right answer depends on specific numbers.

### Quick Decision Matrix

| Your Situation | Best Action |
|----------------|-------------|
| Within warranty + below 70% capacity | File warranty claim — free repair or replacement |
| Within warranty + above 70% + over 10% loss | Monitor; build evidence file; claim if mileage/years permit |
| Out of warranty + cell delta under 50 mV + loss under 20% | Keep driving; optimize charging habits |
| Out of warranty + cell delta 50–100 mV + loss 15–25% | Module-level repair assessment (€2,000–5,000) |
| Out of warranty + cell delta over 100 mV | Service inspection immediately; likely module replacement |
| Out of warranty + loss over 30% + 200,000+ km | Full pack replacement or resell decision |

### When to File a Warranty Claim

File immediately if the pack usable energy (PACK_FULL_ENERGY via Scan My Tesla or Tesla Service Mode) reads below **70% of your model's original factory spec** while within the 8-year warranty period.

Quick warranty threshold calculation:
- Model 3 LR (2021–2023): original ~79 kWh → threshold **55.3 kWh**
- Model Y LR (2020–2023): original ~75 kWh → threshold **52.5 kWh**
- Model 3 SR+ LFP (2021–2023): original ~57.5 kWh → threshold **40.3 kWh**
- Model S LR (2021+): original ~95–99 kWh → threshold **66.5–69.3 kWh**

Don't wait until the car "feels" worse. Use kWh numbers. A 2021 Model 3 LR showing 54 kWh at 100% charge is below the 55.3 kWh threshold — that is a valid warranty claim regardless of displayed range.

### When Module Repair Makes Sense

Tesla's pack architecture uses module-level construction — individual cell groups inside the larger pack. When one module degrades ahead of the others, it sets the ceiling for the entire pack. Replacing only the failed module restores full pack capacity without the cost of a complete swap.

Module repair at a certified independent shop: **€2,000–5,000** depending on model and module count.

Module repair makes financial sense when:
- Cell voltage delta is above 50 mV with one or two outlier cell groups pulling the average down (not uniform degradation across all cells)
- Total pack loss is 15–25% with otherwise healthy cells
- The vehicle has under 150,000 km and is otherwise in good condition
- The car's residual value justifies the repair cost

**How to identify a module candidate:** Scan My Tesla shows individual cell group voltages. If one or two groups read significantly lower than the rest, that is module-level failure — a targeted repair rather than a whole-pack problem.

### When to Consider Full Pack Replacement

Full pack replacement (€8,000–16,000 depending on model) makes sense when:
- Multiple modules show high voltage delta or low minimum voltage
- Total degradation exceeds 30% of original capacity
- The vehicle is otherwise low-wear (body, motors, suspension all solid)
- You plan to keep the car 5+ more years
- The car's market value with a new pack significantly exceeds its value without

For a Model S with 250,000 km and 28% degradation, a €15,000 full pack replacement can extend useful life by 8–10 years. For a 2019 Model 3 with 200,000 km and 22% degradation, the math is harder — the total vehicle value may not justify €10,000+ in battery work.

### The "Keep and Manage" Strategy

For out-of-warranty packs with 15–25% degradation and balanced cell voltage:

- A 20%-degraded 75 kWh pack still holds 60 kWh — enough for most daily use
- BMS recalibration may recover 3–5% of apparent loss that is calibration drift, not real capacity
- Maintaining 80% daily charge (NCA/NMC) and home AC charging slows further loss
- Temporarily raising the daily limit to 90% is a valid choice if daily range is tight — the incremental long-term degradation from 80→90% is small

See our [Tesla Repair Cost Guide](/posts/tesla-repair-cost-guide/) for 2026 pricing on module repairs and full pack replacements at independent shops vs. Tesla Service Centers.

---

## Tesla Battery Replacement Costs

If your battery is out of warranty and needs replacement:

| Pack | Approximate Cost |
|------|-----------------|
| Model 3 Standard Range | €8,000 - €12,000 |
| Model 3 Long Range | €12,000 - €16,000 |
| Model S/X | €15,000 - €25,000 |

> Prices vary significantly by region and model year. Third-party shops may offer lower prices. See our [Tesla Repair Cost Guide](/posts/tesla-repair-cost-guide/) for more estimates.

Module-level replacement (fixing just the bad section) can be much cheaper: **€2,000 - €5,000** depending on the module.

## The Bottom Line

Tesla batteries are among the most durable in the EV industry. Most owners will never need a battery replacement during their ownership. Normal degradation of **10-15% over 5 years** is expected and doesn't significantly impact daily driving.

The most impactful things you can do:
1. **Charge to 80% daily** (NCA/NMC) or **100%** (LFP)
2. **Minimize heat exposure**
3. **Use home AC charging** as your primary method
4. **Don't stress about it** — modern Tesla batteries are robust

For diagnosing other battery-related issues, check our guides on [phantom drain](/posts/tesla-phantom-battery-drain-fix/), [slow charging](/posts/tesla-slow-charging-fix/), and [12V battery replacement](/posts/tesla-12v-battery-replacement/).

---

## Buying a Used Tesla? Battery Health Check Protocol

Battery health is the single most important factor when evaluating a used Tesla. A car with 20% degradation at 80,000 km isn't a bargain at any price — it means less range today and a potential €8,000–16,000 battery bill down the line. Here's how to check it properly before you commit.

### The 15-Minute OBD2 Check

Bring an [OBDLink CX Bluetooth adapter](https://www.amazon.com/dp/B08NFNLKTK?tag=diyrepair07-20) ([Amazon DE](https://www.amazon.de/dp/B0D7F5F4HN?tag=diyrepair-21)) and a phone with Scan My Tesla installed. Five minutes after arriving, you'll have hard data no seller can argue with.

**What to check:**

1. **Full pack energy (kWh)** — Compare to the original spec for that model year. A Model 3 Long Range should show ~73 kWh usable. Below 65 kWh is significant degradation (13%+).
2. **Cell voltage delta** — The spread between the highest and lowest cell voltage in the pack:
   - **Under 20 mV**: healthy, balanced pack
   - **20–50 mV**: acceptable, may need balancing soon
   - **50–100 mV**: warning sign — ask for a price reduction or have a shop inspect
   - **Over 100 mV**: likely a bad cell module. Walk away unless the price is very low and you understand what you're getting into
3. **Minimum cell voltage** — Any cell showing below 3.0 V at 50%+ state of charge is a problem cell

### Cross-Check with Range Display

Before the OBD2 check, do a full charge to 100% and note the displayed range. Compare to the original rated range:

| Model | Original WLTP | 10% Loss (Normal) | 15% Loss (High) |
|-------|--------------|-------------------|-----------------|
| Model 3 SR+ LFP | 491 km | 442 km | 417 km |
| Model 3 LR NCA | 602 km | 542 km | 512 km |
| Model Y LR NCA | 533 km | 480 km | 453 km |
| Model S LR | 652 km | 587 km | 554 km |

> Range display isn't perfectly reliable (it's influenced by driving style), but anything more than 15% below original rated range is worth digging into.

### Red Flags on Used Teslas

- **Rapid degradation for the mileage** — more than 15% loss under 100,000 km suggests aggressive supercharging, extended hot-climate storage, or a previous fault
- **Recent battery work history** — check the car's service records. Module replacements aren't inherently bad (Tesla fixed something), but ask what was replaced and why
- **Flashing or recent BMS reset** — a BMS recalibration just before sale can temporarily make range look better than it is. Check the car over multiple days if possible
- **"12V Battery Low" history** — indicates the main battery may have been deeply discharged repeatedly, which stresses the cells

### Using Battery Health as a Negotiation Tool

Even "normal" degradation has real monetary value. If the car shows 12% degradation vs. the fleet average of 10% for that mileage:

- That's roughly 35–50 km less usable range on a daily basis
- It represents accelerated wear relative to comparable cars on the market
- Use it to negotiate: "Battery shows 12% degradation at 90,000 km vs. the 8–10% average — I'd like that reflected in the price"

Most private sellers don't know these numbers. Coming prepared with a real-time OBD2 readout instantly positions you as a serious buyer who won't be oversold. For a full used Tesla inspection checklist beyond just the battery, see our [Used Tesla Buying Inspection Guide](/posts/tesla-used-buying-inspection-guide/).

---

## Battery Degradation FAQ

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast does a Tesla battery degrade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tesla batteries typically lose 2-3% capacity per year after the initial first-year drop of 5-8%. After 5 years, most owners see 10-15% total range reduction. LFP batteries (Standard Range from mid-2021) degrade slower and benefit from regular 100% charging."
      }
    },
    {
      "@type": "Question",
      "name": "How do I check my Tesla battery health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most accurate method is a Bluetooth OBD2 scanner (OBDLink CX) paired with the Scan My Tesla app. Check full pack energy in kWh and cell voltage delta. For a quick estimate, charge to 100% and compare the displayed range to the original EPA/WLTP rating for your model."
      }
    },
    {
      "@type": "Question",
      "name": "What causes Tesla battery degradation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main causes are heat exposure (the #1 factor), frequent DC fast charging, regularly sitting at 100% state of charge, and calendar aging. Keeping charge between 20-80% daily and limiting supercharging significantly slows degradation."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tesla battery degradation covered by warranty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tesla warrants battery capacity for 8 years on all current models. If capacity drops below 70% within the warranty period, Tesla will repair or replace the battery pack. Warranty mileage limits vary by model: 160,000 km for Model 3 SR, 192,000 km for Model 3 LR/Performance."
      }
    },
    {
      "@type": "Question",
      "name": "Does cold weather permanently damage Tesla batteries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Cold weather causes temporary range reduction of 20-40% in extreme cold but does not permanently damage the battery. Tesla's thermal management system protects the cells. Preconditioning before driving and charging recovers most of the lost range."
      }
    },
    {
      "@type": "Question",
      "name": "How many miles does a Tesla battery last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Tesla batteries are designed to last 300,000-500,000 miles (500,000-800,000 km). Real-world data shows most packs retain 80%+ capacity at 200,000 miles. Battery replacement before end of vehicle life is uncommon for well-maintained cars."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good cell voltage delta for a used Tesla battery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under 20 mV cell voltage delta (measured with an OBD2 scanner at full charge) indicates a healthy, balanced pack. 20-50 mV is acceptable but worth monitoring. Over 50 mV suggests cell imbalance needing attention, and over 100 mV indicates a likely bad module that needs professional inspection."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best free app to check Tesla battery health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a free API-based option, Tessie and Stats for Tesla both connect via your Tesla account with no OBD2 adapter needed. For detailed cell-level data (voltage delta, state of health percentage), the Scan My Tesla app paired with an OBDLink CX Bluetooth adapter gives the most accurate picture. Tesla's built-in Service Mode also provides battery cell data at no cost — access it via Controls → Software → hold 'MODEL' 5 seconds → enter 'service'."
      }
    },
    {
      "@type": "Question",
      "name": "Do 2024 Tesla Highland and Juniper models degrade faster or slower?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early data from 12–18 month owners suggests the 2024 Model 3 Highland and Model Y Juniper LR models are tracking at 3–6% first-year degradation — slightly better than the 5–8% typical of older NCA chemistry. These models use newer NMC21 cells. It's too early for definitive long-term data, but the initial trend is encouraging. Standard Range variants on both models still use LFP cells and should be charged to 100% regularly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I file a Tesla battery warranty claim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schedule a service appointment in the Tesla app under 'Battery and Charging'. Before the appointment, document your pack's usable kWh using Scan My Tesla or Tesla Service Mode at 100% charge — then compare to your model's original factory spec. Tesla's warranty threshold is 70% of original usable capacity. A Model 3 Long Range original spec of ~79 kWh means the threshold is ~55.3 kWh. Include specific kWh numbers (not just estimated range) in your appointment description. If Tesla rejects a borderline claim, request a BMS calibration cycle before re-measurement, and escalate to Tesla Owner Relations in writing if needed."
      }
    },
    {
      "@type": "Question",
      "name": "Do V4 Superchargers degrade Tesla batteries faster than V3 chargers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — for most Tesla owners. Model 3 and Model Y are limited to 170–250 kW by their own onboard systems, regardless of whether you plug into a V3 (250 kW) or V4 (500 kW) Supercharger. Your car draws the same power at both. Only the Cybertruck actually uses the full 500 kW V4 capability. For road-trip Supercharging, the V3-to-V4 transition has negligible impact on long-term battery degradation. Home AC charging remains the lowest-degradation primary charging method."
      }
    },
    {
      "@type": "Question",
      "name": "What is PACK_FULL_ENERGY in Scan My Tesla and how do I read it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PACK_FULL_ENERGY (also shown as 'Full Pack Energy' or 'Nom Full Pack Energy') is the OBD2 parameter that shows your battery's current maximum usable capacity in kWh at 100% state of charge. Compare it to your model's original factory spec to calculate degradation. Example: a 2021 Model 3 Long Range originally shows ~79 kWh. If Scan My Tesla shows 71 kWh, that's approximately 10% degradation. Always take this reading after a full charge (100%) with the car fully awake and DC-DC converter active. A single reading can vary slightly — average 2–3 readings for the most accurate picture."
      }
    },
    {
      "@type": "Question",
      "name": "My Tesla has 12% degradation after only 3 years — is that normal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "12% at 3 years is on the higher end of normal but not necessarily a problem. Context matters: if you have 120,000+ km and supercharge frequently in a hot climate, 12% is within the expected range. If you have 40,000 km and primarily home-charge in a moderate climate, 12% is above average and worth investigating. First step: run a BMS recalibration (deep discharge to below 10%, slow-charge to 100%, leave plugged in 2+ hours, repeat 2–3 times). Some 'degradation' is BMS miscalibration, not real capacity loss. If degradation persists above 10% with normal usage and mileage, check your warranty status — Tesla's 8-year warranty covers drops below 70% capacity."
      }
    },
    {
      "@type": "Question",
      "name": "Does how I charge at home affect long-term battery degradation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — home charging habits are the single biggest variable within your control. Charging at 7–11 kW AC (a standard home wallbox or J1772/Type 2 charger) is the gentlest option: low heat generation, no BMS stress, and the car can optimize the charge curve. Charging to 80% daily is optimal for NCA/NMC packs; 100% daily is recommended for LFP. A quality home charger like the Lectron L2 or Tesla Wall Connector pays for itself in extended battery life — see our Charging Adapter Guide for options. Avoid charging at the lowest AC rate (3.7 kW) for extended periods if faster options are available — the extra time at partial charge states doesn't help and occupies the car unnecessarily."
      }
    },
    {
      "@type": "Question",
      "name": "What is Tesla Charge Mode and how does it protect battery health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tesla's Charge Mode (Controls → Charging on 2025+ software) lets owners choose between Standard, Reduced Degradation, and Performance charging profiles. Reduced Degradation limits peak DC charging rate and shortens the time the battery holds at a high state of charge — both of which reduce cumulative heat stress on cells. Community observations suggest 1–2% less total degradation over 2–3 years compared to Standard mode. Not all model years have this option yet; check Controls → Charging for availability and keep your software updated."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my Tesla battery needs recalibration versus actual replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BMS recalibration is needed when displayed range drops suddenly (over a few weeks) without a corresponding drop in actual usable energy. Real degradation shows in both the display AND in OBD2 data — lower PACK_FULL_ENERGY kWh readings via Scan My Tesla or Tesla Service Mode. To recalibrate: discharge below 10%, slow AC charge to 100%, leave plugged in 2+ hours, repeat 2–3 cycles. If kWh readings stay low after recalibration, that's real capacity loss — not a calibration issue. A cell voltage delta over 100 mV always indicates a hardware investigation is needed, regardless of what the range display shows."
      }
    },
    {
      "@type": "Question",
      "name": "Which Tesla model year has the best battery degradation record?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 2021–2022 Model 3 Standard Range+ with LFP chemistry has the best long-term degradation record: 4–8% average at 3–4 years, versus 10–15% for equivalent NCA cars. Among Long Range models, 2022–2023 Model Y LR NMC packs from the Austin Gigafactory average 7–11% at 3–4 years — slightly better than 2020–2021 units. The weakest cohort is 2019 Model 3 LR NCA, which averages 14–20% degradation at 5–6 years, especially in hot climates."
      }
    },
    {
      "@type": "Question",
      "name": "Should I repair, replace, or keep my Tesla battery after significant degradation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Decision depends on four numbers: current kWh vs. factory spec, cell voltage delta, vehicle mileage, and repair cost. Within warranty below 70% capacity: file a warranty claim. Out of warranty with cell delta 50–100 mV and 15–25% loss: get a module-level repair assessment (€2,000–5,000 to replace only the degraded section). Out of warranty with cell delta under 50 mV and loss under 20%: keep driving with optimized charging habits. Full pack replacement (€8,000–16,000) only makes financial sense with 30%+ loss on a well-maintained vehicle where the replaced pack extends 8–10 more years of life."
      }
    },
    {
      "@type": "Question",
      "name": "What is the exact 70% warranty threshold in kWh for each Tesla model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tesla's 8-year warranty covers drops below 70% of original usable capacity. Thresholds by model: Model 3 SR+ LFP (2021–2023): original 57.5 kWh, threshold 40.3 kWh. Model 3 LR (2021–2023): original 75–79 kWh, threshold 52.5–55.3 kWh. Model Y LR (2020–2023): original 75 kWh, threshold 52.5 kWh. Model 3 Highland LR (2024+): original 79 kWh, threshold 55.3 kWh. Model S LR (2021+): original 95–99 kWh, threshold 66.5–69.3 kWh. Measure via PACK_FULL_ENERGY in Scan My Tesla or HV Battery screen in Tesla Service Mode at 100% charge. Use kWh readings, not estimated range — range varies with conditions, kWh is absolute."
      }
    }
  ]
}
</script>

**Q: How fast does a Tesla battery degrade?**
Typically 5–8% in year one, then 1–2% per year after. Most owners hit 10–15% total degradation at the 5-year mark. LFP batteries (Standard Range, 2021+) degrade slower.

**Q: How do I check my Tesla battery health?**
Best method: OBDLink CX Bluetooth adapter + Scan My Tesla app. Checks pack kWh and cell voltage delta in real time. Quick estimate: charge to 100%, compare displayed range to original rated range.

**Q: What causes Tesla battery degradation?**
Heat is #1. Then: frequent DC fast charging, sitting at 100% for long periods, and normal calendar aging. Charging to 80% daily and home AC charging are the most impactful protective habits.

**Q: Is Tesla battery degradation covered by warranty?**
Yes — 8 years, with a 70% capacity floor. If your pack drops below 70% within the warranty period and mileage limit, Tesla repairs or replaces it. Check your specific model's documentation for the mileage cap.

**Q: Does cold weather permanently damage Tesla batteries?**
No. Cold causes temporary range loss (20–40% in extreme cold) but not permanent damage. Preconditioning before driving restores most range. Cold storage is actually gentler on lithium-ion than heat.

**Q: How many miles does a Tesla battery last?**
300,000–500,000 miles (500,000–800,000 km) is the design target. Real-world data shows most packs at 200,000 miles still retain 80%+ capacity. Outright failure before end of vehicle life is uncommon.

**Q: What's a good cell voltage delta for a used Tesla?**
Under 20 mV = healthy. 20–50 mV = acceptable. Over 50 mV = needs attention. Over 100 mV = likely bad module — get a shop inspection before buying.

**Q: What's the best free app to check Tesla battery health?**
Tessie and Stats for Tesla are free API-based options that work without any hardware. For cell-level data (voltage delta, SoH %), Scan My Tesla + OBDLink CX is the most detailed paid option. Tesla's own Service Mode (Controls → Software → hold "MODEL" 5 sec → type "service") gives battery cell data for free, built into every car.

**Q: Do 2024 Highland and Juniper batteries degrade faster or slower?**
Early 12–18 month data shows 3–6% first-year degradation — slightly better than the 5–8% typical of older NCA cells. They use NMC21 chemistry. Standard Range variants still use LFP (charge to 100% regularly). Long-term curves are too early to call definitively.

**Q: What is PACK_FULL_ENERGY in Scan My Tesla?**
It's the OBD2 reading that shows your battery's current maximum usable capacity in kWh at 100% charge. Compare it to your model's original factory spec to get your actual degradation percentage. A 2021 Model 3 LR should read ~79 kWh when new — if yours reads 71 kWh, that's ~10% degradation. Take 2–3 readings after a full charge and average them for accuracy.

**Q: My Tesla shows 12% degradation at 3 years — is that normal?**
Depends on mileage and usage. At 120,000+ km with frequent Supercharging in a hot climate: yes, that's within range. At 40,000 km with mostly home charging: that's above average and worth investigating. Start with a BMS recalibration (discharge below 10%, slow AC charge to 100%, leave plugged in 2+ hours — repeat 2–3 cycles). Some apparent degradation is BMS drift, not real capacity loss. If it persists after recalibration, check your warranty status.

**Q: Does home charging speed affect long-term battery health?**
Yes — 7–11 kW AC home charging is the gentlest option for long-term health. Low charge rates generate less heat and let the BMS optimize the charge curve. Charging to 80% daily (NCA/NMC) or 100% (LFP) at a quality [home wallbox](https://www.awin1.com/cread.php?awinmid=91891&awinaffid=2729872&ued=https%3A%2F%2Fev-lectron.com%2Fcollections%2Fev-chargers) is the single most impactful habit for long-term retention. See our [Charging Adapter Guide](/posts/tesla-charging-adapter-guide/) for home charger options.

**Q: What is Tesla Charge Mode and how does it protect battery health?**
Charge Mode (Controls → Charging, available on 2025+ software) offers Standard, Reduced Degradation, and Performance profiles. Reduced Degradation caps peak Supercharger input and shortens time held at high state of charge — reducing heat stress on cells. Community observations suggest ~1–2% less degradation over 2–3 years versus Standard. Check Controls → Charging for availability; not all model years have it yet.

**Q: How do I tell if my Tesla battery needs recalibration vs actual replacement?**
Recalibration fixes BMS drift — a sudden display range drop without matching real energy loss. Real degradation appears in both the display AND in OBD2 PACK_FULL_ENERGY kWh readings (via Scan My Tesla or Service Mode). Recalibration: discharge to below 10%, slow AC charge to 100%, leave plugged in 2+ hours, repeat 2–3 cycles. If kWh stays low after recalibration, it's real capacity loss. Cell voltage delta over 100 mV always needs hardware investigation regardless of what the display shows.

---

*Last updated: May 2026. Degradation data based on publicly available fleet statistics, TeslaFi, Recurrent, What About Tesla, and community reports. Model year breakdown figures updated to reflect 2026 cohort data.*

## Related Guides

- [Tesla Range Loss: Why It Happens & How to Fix It](/posts/tesla-range-loss-fix/) — Medium · Battery
- [Tesla BMS Calibration & Battery Recalibration](/posts/tesla-bms-calibration-battery-recalibration/) — Easy · Battery (fix BMS drift before assuming real degradation)
- [Tesla Service Mode Guide](/posts/tesla-service-mode-guide/) — Easy · Diagnostics (free built-in battery health check)
- [Tesla 12V Battery Replacement: Step-by-Step DIY (Save €200+)](/posts/tesla-12v-battery-replacement/) — Easy · Electrical
- [Tesla 2026.2.3 Update: Hidden Features, Battery Recalibration, Autopark & Service Mode Changes](/posts/tesla-2026-2-3-software-update-features/) — Easy · Software & Tech
- [Tesla Battery Preconditioning: Faster Charging & Better Range](/posts/tesla-battery-preconditioning-guide/) — Beginner · Battery & Charging
- [Tesla Coolant Flush & Change](/posts/tesla-coolant-flush-change/) — Medium · Maintenance (battery cooling system health)
- [Tesla Slow Charging Fix](/posts/tesla-slow-charging-fix/) — Medium · Charging
- [Tesla Battery Replacement Cost: What It Really Costs in 2026](/posts/tesla-battery-replacement-cost/) — Informational · Model 3, Model Y, Model S, Model X · Battery & Electrical
- [Tesla Key Fob Battery Replacement: 2-Minute Fix](/posts/tesla-key-fob-battery/) — Easy · Model S, Model X · Electrical
- [How to Fix Tesla Phantom Battery Drain (Vampire Drain)](/posts/tesla-phantom-battery-drain-fix/) — Easy · Software & Settings
- [Tesla Charging Adapter Guide](/posts/tesla-charging-adapter-guide/) — Charging equipment for home
- [Tesla Supercharger Slow Charging Fix](/posts/tesla-slow-charging-fix/) — Fix slow charging speeds
- [Tesla Service Mode Guide](/posts/tesla-service-mode-guide/) — Access battery diagnostics
- [Tesla Used Buying Inspection Guide](/posts/tesla-used-buying-inspection-guide/) — Check battery before buying used
- [Tesla Camera Calibration Guide](/posts/tesla-autopilot-camera-calibration/) — Another common maintenance task
- [Tesla Drive Unit Noise Fix](/posts/tesla-drive-unit-noise-fix/) — Diagnose early-stage bearing wear before it escalates
- [Tesla Winter Preparation Guide](/posts/tesla-winter-preparation-guide/) — Cold-climate charging and range management
