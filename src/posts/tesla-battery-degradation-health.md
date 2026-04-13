---
layout: post.njk
title: "Tesla Battery Degradation: What's Normal vs What's a Problem"
description: "Is your Tesla losing range too fast? Real owner data shows what's normal (5-10% in year 1 is fine). Free tools to check your actual battery health — and the one number that triggers a warranty claim. Updated 2026."
date: 2026-02-17
updated: 2026-04-13
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
---

Every Tesla owner eventually wonders: "Is my battery degrading normally?" Whether you're seeing slightly less range after a few years or considering buying a used Tesla, understanding battery health is essential. This guide covers everything you need to know about Tesla battery degradation — how to measure it, what's normal, and how to slow it down.

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
- [OBDLink CX Bluetooth adapter](https://www.amazon.com/dp/B08NFNLKTK?tag=diyrepair07-20) (~$80)
- Scan My Tesla app (Android/iOS, ~$10)

**What to look for:**
- **Full pack energy (kWh):** Compare to your car's original capacity
- **Cell voltage delta:** Difference between highest and lowest cell voltages
- **Battery capacity (Ah):** Compared to nominal

**Interpreting results:**
- **Cell voltage delta < 20mV** when fully charged = healthy pack
- **Cell voltage delta > 50mV** = possible cell imbalance, needs balancing
- **Cell voltage delta > 100mV** = potential bad cell, contact service

For a complete guide on diagnostic tools, see our [Tesla OBD2 Scanner & Diagnostics Guide](/posts/tesla-obd2-scanner-diagnostics/).

### Method 3: Tesla Service Mode

If your car has access to Service Mode (some older firmware):

1. Go to **Controls > Software > Service Mode** (if available)
2. Look for battery capacity readings
3. Note: Tesla has restricted access to Service Mode in recent updates

### Method 4: TeslaFi or Similar Tracking

Long-term tracking services like TeslaFi log every charge session:

- Track degradation over months/years with graphs
- Compare your car to fleet averages
- See the effect of charging habits over time
- Costs ~$5/month

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

---

*Last updated: April 2026. Degradation data based on publicly available fleet statistics and community reports.*

## Related Guides

- [Tesla Range Loss: Why It Happens & How to Fix It](/posts/tesla-range-loss-fix/) — Medium · Battery
- [Tesla 12V Battery Replacement: Step-by-Step DIY (Save €200+)](/posts/tesla-12v-battery-replacement/) — Easy · Electrical
- [Tesla 2026.2.3 Update: Hidden Features, Battery Recalibration, Autopark & Service Mode Changes](/posts/tesla-2026-2-3-software-update-features/) — Easy · Software & Tech
- [Tesla Battery Preconditioning: Faster Charging & Better Range](/posts/tesla-battery-preconditioning-guide/) — Beginner · Battery & Charging
- [Tesla Battery Replacement Cost: What It Really Costs in 2026](/posts/tesla-battery-replacement-cost/) — Informational · Model 3, Model Y, Model S, Model X · Battery & Electrical
- [Tesla Key Fob Battery Replacement: 2-Minute Fix](/posts/tesla-key-fob-battery/) — Easy · Model S, Model X · Electrical
- [How to Fix Tesla Phantom Battery Drain (Vampire Drain)](/posts/tesla-phantom-battery-drain-fix/) — Easy · Software & Settings
- [Tesla Charging Adapter Guide](/posts/tesla-charging-adapter-guide/) — Charging equipment for home
- [Tesla Supercharger Slow Charging Fix](/posts/tesla-slow-charging-fix/) — Fix slow charging speeds
- [Tesla Service Mode Guide](/posts/tesla-service-mode-guide/) — Access battery diagnostics
- [Tesla Used Buying Inspection Guide](/posts/tesla-used-buying-inspection-guide/) — Check battery before buying used
- [Tesla Camera Calibration Guide](/posts/tesla-autopilot-camera-calibration/) — Another common maintenance task
