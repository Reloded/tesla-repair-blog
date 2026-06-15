---
layout: post.njk
title: "Tesla Trunk Latch Replacement: Complete 2026 DIY Guide (All Models)"
description: "Tesla 'Trunk Open' warning won't clear? Replace the latch in 30-60 min for $45-120. Model 3/Y/S/X, OEM part numbers, actuator diagnosis & 2026 Juniper/Highland notes."
date: 2026-02-11
lastUpdated: 2026-06-15
category: "Body"
difficulty: "Beginner"
readTime: "22 min read"
models: "Model 3, Model Y, Model S, Model X"
emoji: "🔒"
estimatedCost: "45-120"
faq:
  - q: "Why does my Tesla show Trunk Open when the trunk is closed?"
    a: "The most common cause is a failed micro switch inside the trunk latch assembly. The switch tells the car whether the latch is engaged. When the contacts corrode, the car permanently reads open even when the trunk is latched. Clean the latch with electrical contact cleaner first — this resolves about 30% of cases. If the warning returns within a week, replace the full latch assembly ($45-120 from aftermarket suppliers). Less common causes include a misaligned striker or a damaged trunk wiring harness."
  - q: "How much does Tesla trunk latch replacement cost?"
    a: "DIY cost: $45-120 for the latch assembly plus 30-60 minutes of your time. Tesla Service Center: $230-450 total (parts $80-150 plus labor $150-300). Independent Tesla shop: $140-260 total. DIY savings: $110-330 compared to the dealer. The repair requires only a 10mm socket, T30 Torx bit, and trim removal tools."
  - q: "Does the Model Y have a different trunk latch than the Model 3?"
    a: "Yes. Model 3 uses a conventional trunk lid with a passive latch mechanism and a separate electric release actuator. Model Y uses a power liftgate with an integrated latch and motorized actuator — a more complex unit. Model Y Juniper (2024+) uses an updated liftgate assembly with different part numbers. Model 3 Highland (2024+) also has a redesigned trunk latch. Always order parts using your VIN at parts.tesla.com to get the correct revision."
  - q: "How do I know if my trunk problem is the latch or the power liftgate actuator?"
    a: "Manually push the trunk closed and listen for a firm click from the latch engaging. If it clicks and holds but the screen shows Trunk Open, the latch micro switch has failed — replace the latch assembly. If the trunk will not hold closed at all (no click), the latch mechanism has failed. If the power liftgate stops short of fully closing — halting 5-10 cm from shut — that is the actuator or an uncalibrated liftgate. Run Controls > Vehicle > Trunk > Calibrate Liftgate before ordering parts."
  - q: "Can I replace just the micro switch in the Tesla trunk latch?"
    a: "Technically yes, but it is not recommended. The micro switch is a surface-mount component inside a sealed latch body. Accessing it requires disassembling the latch housing. The switch costs $3-8, but corroded contacts usually mean the latch claw contacts are also degraded. Replace the full assembly for $45-120 in 30 minutes rather than spending 3 hours on micro-switch surgery with a high risk of reassembly failure."
  - q: "Will DIY trunk latch replacement void my Tesla warranty?"
    a: "No. The Magnuson-Moss Warranty Act (US) prohibits voiding warranties solely because the owner used aftermarket parts on out-of-warranty components. Latch replacement does not affect your battery or powertrain warranty. In the EU, Directive 1999/44/EC provides similar protection. If your car is within the 4-year New Vehicle Limited Warranty, report the latch defect via the Tesla app first — Tesla covers manufacturing defects at no charge during this period."
  - q: "What is the Tesla Model 3 trunk latch part number?"
    a: "Model 3 (2017-2020): trunk latch assembly 1082215-00-B. Model 3 (2021-2023): revised to 1082215-00-C or a later revision — confirm via VIN. Model 3 Highland (2024+): redesigned unit, verify via VIN at parts.tesla.com. Model Y liftgate latch (2020-2023): verify via VIN as multiple revisions exist. Always confirm your exact part number via VIN before ordering — aftermarket latches compatible with 2017-2023 Model 3 are available on Amazon for $45-80."
tools:
  - name: "Plastic Trim Removal Tool Set (US)"
    asin_com: "B09Y45XBT7"
  - name: "Plastic Trim Removal Tool Set (EU)"
    asin_de: "B07PKCMF3T"
  - name: "10mm Socket"
    link: "https://www.amazon.com/s?k=10mm+deep+socket+set&tag=diyrepair07-20"
  - name: "T30 Torx Bit Set"
    link: "https://www.amazon.com/s?k=T30+torx+bit+security+set&tag=diyrepair07-20"
  - name: "Electrical Contact Cleaner (US)"
    link: "https://www.amazon.com/s?k=electrical+contact+cleaner+spray&tag=diyrepair07-20"
  - name: "Electrical Contact Cleaner (EU)"
    link: "https://www.amazon.de/s?k=kontaktreiniger+spray+auto&tag=diyrepair-21"
  - name: "Tesla Model 3 Trunk Latch Assembly (US)"
    link: "https://www.amazon.com/s?k=tesla+model+3+trunk+latch+assembly+replacement&tag=diyrepair07-20"
  - name: "Tesla Model Y Liftgate Latch (US)"
    link: "https://www.amazon.com/s?k=tesla+model+y+liftgate+latch+assembly&tag=diyrepair07-20"
  - name: "Tesla Trunk Latch Assembly (EU)"
    link: "https://www.amazon.de/s?k=tesla+trunk+latch+schloss+ersatz&tag=diyrepair-21"
  - name: "iFixit Pro Tech Toolkit"
    link: "https://sovrn.co/1dw8w9g"
    provider: "ifixit"
---

![Tesla Model Y with trunk liftgate open in repair workshop](/images/repairs/model-y-trunk-open.jpg)

## At a Glance: Tesla Trunk Latch Replacement (2026)

| Question | Answer |
|----------|--------|
| **Difficulty** | 2 / 5 — beginner-friendly, no mechanical experience needed |
| **Time** | 30–60 min (latch only) · 60–90 min (liftgate actuator) |
| **DIY parts cost** | $45–120 / €40–110 (latch assembly) |
| **Tesla Service cost** | $230–450 / €200–400 (parts + labor) |
| **Your savings** | $110–330 / €90–290 |
| **Model 3 latch part #** | 1082215-00-B (2017-2020) · verify later revisions via VIN |
| **Latch bolt torque** | 9 Nm (7 ft-lbs) |
| **Striker bolt torque** | 12 Nm (9 ft-lbs) |
| **Tools required** | 10mm socket, T30 Torx, trim removal tools, contact cleaner |
| **Calibration needed?** | Only Model Y power liftgate — run via Controls > Trunk |
| **Warranty impact** | None (Magnuson-Moss Act / EU Directive 1999/44/EC) |

---

A Tesla trunk that won't latch, randomly opens, or shows a "Trunk Open" warning when it's clearly closed is almost always caused by a failed micro switch inside the latch assembly. This is a common issue on Model 3 and Model Y, especially in cold or wet climates where moisture corrodes the switch contacts.

## Table of Contents

1. [Symptoms](#symptoms)
2. [Quick Fixes to Try First](#quick-fixes-to-try-first)
3. [Diagnose Before You Order](#diagnose-before-you-order)
4. [What You'll Need](#what-youll-need)
5. [Model-by-Model Guide](#model-by-model-guide)
6. [OEM Part Numbers and Where to Buy](#oem-part-numbers-and-where-to-buy-2026)
7. [Cost Comparison](#cost-comparison)
8. [Step-by-Step: Model 3 Trunk Latch Replacement](#step-by-step-model-3-trunk-latch-replacement)
9. [Step-by-Step: Model Y Liftgate Latch Replacement](#step-by-step-model-y-liftgate-latch-replacement)
10. [Model Y Power Liftgate Actuator Guide](#model-y-power-liftgate-actuator-guide)
11. [Model 3 Highland and Model Y Juniper 2024+ Notes](#model-3-highland-and-model-y-juniper-2024-notes)
12. [Troubleshooting After Replacement](#troubleshooting-after-replacement)
13. [Service Mode: Verify the Repair](#service-mode-verify-the-repair)
14. [From the Workshop: Real Repair Cases](#from-the-workshop-real-repair-cases)
15. [Tesla Warranty Coverage](#tesla-warranty-coverage)
16. [Common Mistakes](#common-mistakes)
17. [Preventing Future Issues](#preventing-future-issues)
18. [Frequently Asked Questions](#frequently-asked-questions)
19. [Related Guides](#related-guides)

---

## Symptoms

- **"Trunk Open" warning** on the touchscreen when the trunk is closed
- **Trunk won't stay latched** — pops open while driving
- **Trunk opens by itself** randomly
- **Interior lights stay on** (car thinks trunk is open)
- **Phantom battery drain** from the car never entering sleep mode — see our [phantom drain guide](/posts/tesla-phantom-battery-drain-fix/) if you notice overnight range loss
- **Sentry mode constantly triggers** due to the persistent "trunk open" state
- **Power liftgate stops short** of fully closing and reverses (Model Y — may be actuator, not latch)
- **Clicking noise on close** with no firm engagement — latch claw worn

---

## Quick Fixes to Try First

### 1. Clean the Latch

Before replacing anything:

1. Open the trunk and locate the latch mechanism on the trunk lid
2. Spray electrical contact cleaner directly into the latch mechanism — [Amazon US](https://www.amazon.com/s?k=electrical+contact+cleaner+spray&tag=diyrepair07-20) / [Amazon DE](https://www.amazon.de/s?k=kontaktreiniger+spray&tag=diyrepair-21)
3. Open and close the trunk 5–6 times to work the cleaner through the contacts
4. Spray the striker (the U-shaped hook on the body) as well
5. Wait 10 minutes and retest

This resolves about 30% of "Trunk Open" warnings — especially those caused by winter salt contamination or a single moisture event.

### 2. Adjust the Striker

A shifted striker is the second most common cause:

1. Loosen the striker bolt (10mm) by a quarter turn — do not remove it
2. Push the striker slightly inward (toward the cabin) by 1–2 mm
3. Retighten to **12 Nm (9 ft-lbs)**
4. Test the trunk closure

### 3. Run Liftgate Calibration (Model Y Only)

If the Model Y liftgate stops short of fully closing:

1. Navigate to **Controls > Vehicle > Trunk**
2. Tap **Calibrate Liftgate**
3. Follow the on-screen instructions — the liftgate cycles fully open and closed twice
4. Retest 3–4 open/close cycles

This free 2-minute step resolves 40% of Model Y "won't close" complaints. Run it before ordering any parts.

If none of these three fixes work, the latch assembly needs replacement.

---

## Diagnose Before You Order

Not all trunk problems are a latch failure. Order the wrong part and you wait a week for nothing. Use this table to pinpoint the root cause before spending money.

| Symptom | Root Cause | Correct Action |
|---------|-----------|----------------|
| Screen shows "Trunk Open," trunk holds closed physically | Micro switch failure in latch | Replace latch assembly |
| Trunk will not hold closed — no click on closing | Latch claw mechanism failure | Replace latch assembly |
| Trunk pops open while driving (from vibration) | Striker misalignment or worn latch claw | Adjust striker first; replace latch if it persists |
| Power liftgate stops 5–10 cm short and reverses | Uncalibrated liftgate height or actuator fault | Run calibration; replace actuator if calibration fails |
| Power liftgate motor runs but liftgate does not move | Motor-to-lead-screw failure in actuator | Replace liftgate actuator (separate from latch) |
| "Trunk Open" warning after impact or accident | Trunk wiring harness connector damage | Inspect harness connector before replacing latch |

**Quick field test:** With the trunk closed, insert a small flat screwdriver through the trunk seal gap and manually depress the latch trigger mechanism. If the "Trunk Open" warning clears when you manually reset the latch, the micro switch is stuck open — you need a new latch assembly. If the warning never clears regardless of latch state, the fault is in the wiring harness. See our [trunk wiring harness repair guide](/posts/tesla-trunk-wiring-harness-repair/) for connector inspection steps.

---

## What You'll Need

**Time Required:** 30–60 minutes (latch); 60–90 minutes (actuator)
**Skill Level:** Beginner — no prior mechanical experience required

**Parts:**

- **Trunk latch assembly** ($45–120 aftermarket; $80–150 OEM from Tesla)
  - The assembly includes the micro switch — you do not need to replace them separately
  - Order using your VIN for exact fitment (see part numbers section below)

**Tools:**

- 10mm socket and ratchet (or 10mm combination wrench)
- T30 Torx bit — check your trim panel before starting; some build years use only clips
- Plastic trim removal tools — [Amazon US](https://www.amazon.com/dp/B09Y45XBT7?tag=diyrepair07-20) / [Amazon DE](https://www.amazon.de/dp/B07PKCMF3T?tag=diyrepair-21)
- Electrical contact cleaner spray — [Amazon US](https://www.amazon.com/s?k=electrical+contact+cleaner+spray&tag=diyrepair07-20) / [Amazon DE](https://www.amazon.de/s?k=kontaktreiniger+spray+auto&tag=diyrepair-21)
- Masking tape or a marker (for striker alignment marking)
- Phone camera (photograph latch position before removal — non-optional)

---

## Model-by-Model Guide

### Model 3 (2017–2023)

The Model 3 trunk is a conventional trunk lid — it does not have a power liftgate motor. The trunk system has:

- A **passive latch mechanism** on the trunk lid that engages a striker on the body
- A separate **electric release actuator** that opens the trunk when you press the key button or use the app
- A **micro switch** in the latch assembly that reports trunk open/closed state to the car

If the trunk **won't close**: latch mechanism or striker alignment.
If the trunk **won't open** (latches fine but button does nothing): the electric release actuator has failed, not the latch. See our [door latch actuator replacement guide](/posts/tesla-door-latch-actuator-replacement/) for actuator-specific steps.

The latch assembly is the same part across all 2017–2023 Model 3 variants (Standard Range, Long Range, Performance) with only revision letter differences.

### Model Y (2020–2023)

The Model Y has a **power liftgate** — a motorized system that opens and closes the trunk automatically. This system has three distinct components:

- **Latch assembly**: the mechanism that physically grabs the striker on the body — same failure modes as Model 3
- **Liftgate actuator motor**: electric linear actuator that drives the liftgate open and closed
- **Height sensor**: reports when the liftgate has reached its calibrated close height

Model Y latch failure presents identically to Model 3 (screen shows "Trunk Open"). Actuator failure presents differently — the liftgate moves incorrectly, stops short, or makes grinding noises during travel. These are separate repairs with separate parts.

### Model S (2012–2024)

The Model S has a motorized trunk liftgate with a different latch design than Model 3/Y. The latch assembly is accessed through the rear trunk interior trim. Part numbers are generation-specific (pre-Raven, Raven, Plaid). On Model S, trunk wiring harness issues are more common than on Model 3/Y — inspect the harness connector before replacing the latch.

### Model X (2015–2024)

The Model X has a rear liftgate separate from the Falcon Wing doors. The rear liftgate uses a motorized latch system similar to Model Y but with Falcon Wing door sensor integration. Latch replacement procedure mirrors Model Y. For Falcon Wing door issues, see our [Falcon Wing door fix guide](/posts/tesla-falcon-wing-door-fix/).

---

## OEM Part Numbers and Where to Buy (2026)

| Model | Year | OEM Part Number | Notes |
|-------|------|-----------------|-------|
| Model 3 | 2017–2020 | 1082215-00-B | Standard trunk latch assembly |
| Model 3 | 2021–2023 | 1082215-00-C or later | Check revision letter via VIN |
| Model 3 Highland | 2024+ | Verify via VIN | Redesigned unit — new part family |
| Model Y | 2020–2023 | Verify via VIN | Power liftgate latch — separate part from actuator |
| Model Y Juniper | 2024+ | Verify via VIN | Updated liftgate design, different part |
| Model S | All years | Verify via VIN | Multiple generations with different parts |
| Model X | All years | Verify via VIN | Rear liftgate latch |

**VIN lookup:** Go to parts.tesla.com, enter your VIN, and navigate to Body > Trunk Lid > Latch. This returns the exact current part number for your specific build date and revision.

**Where to buy:**

| Source | Price (Model 3) | Delivery | Notes |
|--------|-----------------|----------|-------|
| [Amazon US](https://www.amazon.com/s?k=tesla+model+3+trunk+latch+assembly+replacement&tag=diyrepair07-20) | $45–80 | 1–2 days Prime | Aftermarket brands, decent quality |
| [Amazon DE](https://www.amazon.de/s?k=tesla+trunk+latch+schloss+ersatz&tag=diyrepair-21) | €40–75 | 1–2 days EU | EU Prime delivery |
| Tesla Parts (parts.tesla.com) | $80–150 | 3–7 business days | OEM, guaranteed fitment |
| RR Car Parts (Kaunas) | €65–120 | Shipped EU-wide | OEM and aftermarket, Tesla specialists |
| Autodoc.de | €35–65 | 2–4 days EU | Budget aftermarket; check fitment reviews |

**Aftermarket quality note:** Aftermarket latches work reliably for 2017–2023 Model 3/Y. For 2024+ Highland/Juniper, use OEM parts — the revised latch design is less than 2 years old and aftermarket fitment on the new part family is inconsistent as of mid-2026.

---

## Cost Comparison

| Option | Parts | Labor | Total (US) | Total (EU) |
|--------|-------|-------|------------|------------|
| Tesla Service Center | $80–150 | $150–300 | **$230–450** | €200–400 |
| Independent Shop | $60–100 | $80–160 | **$140–260** | €120–240 |
| DIY | $45–120 | Your time | **$45–120** | €40–110 |

**Your savings: $110–330 / €90–290** doing this yourself.

---

## Step-by-Step: Model 3 Trunk Latch Replacement

### Step 1: Access the Latch

1. Open the trunk fully — Model 3 struts hold the lid open on their own
2. Remove the trunk interior trim panel: locate the push-clip centers and press inward with a flathead screwdriver, then lever each clip out with trim tools. Work around the full perimeter
3. On some build years, 2 T30 Torx screws sit near the top edge of the trim — remove these before pulling the panel
4. Pull the trim panel directly away from the trunk lid and set it aside
5. Peel back the sound deadening material at 45 degrees — pull slowly to preserve the adhesive for reinstall
6. The latch assembly is now visible, mounted to the inner trunk lid panel

### Step 2: Photograph and Mark

1. Take clear photos of the latch assembly from multiple angles — this is your reinstall reference
2. Press masking tape around the latch mounting flange perimeter to mark its exact position
3. Note the electrical connector routing direction

### Step 3: Disconnect and Remove

1. Press the release tab on the electrical connector and pull straight out — do not twist or pry
2. Remove the 2–3 mounting bolts (10mm) — note which holes they came from
3. Slide the latch assembly free of the trunk lid

### Step 4: Install the New Latch

1. Align the new latch to your tape marks and reference photos
2. Install the mounting bolts hand-tight first
3. Connect the electrical connector — it clicks once when fully seated; a partial seat causes the "Trunk Open" warning to persist after install
4. Close the trunk gently to test alignment; adjust the latch position if the trunk doesn't close flush with the body
5. Once confirmed flush, torque the mounting bolts to **9 Nm (7 ft-lbs)**

<div class="tip-box">
<strong>Pro Tip:</strong> Take a photo of the latch position before removal. Correct alignment ensures the trunk closes smoothly and prevents panel gaps after reassembly.
</div>

### Step 5: Test Thoroughly

1. Close the trunk — a solid, single click confirms engagement
2. Check the touchscreen — "Trunk Open" warning clears within 5 seconds if the connector is fully seated
3. Open and close 5 times to confirm consistent engagement
4. Test the power trunk open function (key fob button or Tesla app)
5. Run Sentry Mode overnight and check that it doesn't false-trigger

### Step 6: Reassemble

1. Reapply the sound deadening material — press firmly along all edges to reactivate the adhesive
2. Reinstall the trunk interior trim panel — start at the top edge clips and work down
3. Press each clip firmly until it clicks; check the full perimeter twice

---

## Step-by-Step: Model Y Liftgate Latch Replacement

The Model Y liftgate is physically larger and has more trim to remove. Set aside 60 minutes.

### Step 1: Access the Liftgate Interior

1. Open the liftgate fully via touchscreen or the liftgate button
2. Remove the cargo area side trims first — they overlap with the liftgate lower trim
3. The liftgate interior trim panel spans the full width; it has push-clips and 2 T30 Torx screws near the top
4. Remove screws first, then work around the clip perimeter with trim tools
5. Pull the panel away from the liftgate body, bottom to top
6. Disconnect the reading light electrical connector if present

### Step 2: Locate the Latch vs. Actuator

Two components are now visible on the Model Y liftgate interior:

- **Latch assembly**: lower center — the mechanism that physically grabs the body striker
- **Liftgate actuator motor**: upper center or offset — the linear electric motor that drives open/close travel

"Trunk Open" on the screen with the liftgate closed = latch or micro switch failure.
Liftgate moves incorrectly or makes straining noise = actuator issue (see next section).

### Step 3: Remove and Replace the Latch

1. Take reference photos of latch position and connector routing
2. Press the connector release tab and disconnect the electrical connector
3. Remove the mounting bolts (10mm — typically 2 bolts on Model Y)
4. Slide out the old latch assembly
5. Install the new latch, align to reference photos, and torque bolts to **9 Nm (7 ft-lbs)**
6. Reconnect the electrical connector until it clicks
7. Reinstall the liftgate trim panel

### Step 4: Calibrate the Liftgate (Required)

After any latch or actuator work on Model Y, liftgate calibration is mandatory:

1. Navigate to **Controls > Vehicle > Trunk** (or **Controls > Service > Calibrate Liftgate** on older software versions)
2. Tap **Calibrate Liftgate** and follow the prompts
3. The liftgate cycles fully open and fully closed twice — do not interrupt the cycle
4. Test 3–4 open/close cycles to confirm consistent closure

---

## Model Y Power Liftgate Actuator Guide

If the Model Y liftgate moves incorrectly rather than failing to register closed, the actuator is the problem.

**Actuator failure symptoms:**

- Liftgate stops 5–20 cm short of fully closed and reverses
- Liftgate opens and closes slowly (motor struggling against resistance)
- Grinding or straining noise during the last 10% of travel
- Liftgate operates normally when pushed manually but not under power

**Calibration first (2 minutes, free):** Navigate to Controls > Vehicle > Trunk > Calibrate Liftgate. The close-height setting drifts over time and calibration resolves 40% of "stops short" complaints.

If calibration fails to resolve it, the actuator needs replacement. The actuator is a separate assembly from the latch:

- Mounted at the upper center of the liftgate interior
- Held by 3 bolts (10mm)
- OEM actuator cost: $150–250 from Tesla Parts
- Aftermarket: $80–150 from Amazon — [Amazon US](https://www.amazon.com/s?k=tesla+model+y+liftgate+actuator&tag=diyrepair07-20) / [Amazon DE](https://www.amazon.de/s?k=tesla+model+y+liftgate+motor&tag=diyrepair-21)

Worn liftgate struts also force the actuator motor to overwork, causing premature actuator failure. If you are replacing the actuator, inspect the struts at the same time. See our [trunk strut replacement guide](/posts/tesla-trunk-strut-replacement/) for strut condition checks and force rating specs.

---

## Model 3 Highland and Model Y Juniper 2024+ Notes

Tesla revised the trunk and liftgate systems in the 2024 facelifts:

**Model 3 Highland (2024+):**

- Revised trunk lid design with an updated latch assembly in a new part family
- Aftermarket parts for the Highland-specific latch are limited as of mid-2026 — order OEM from Tesla Parts
- The replacement procedure is identical to pre-2024 Model 3 (same tools, same bolt locations)
- Liftgate struts were also revised — see [trunk strut replacement guide](/posts/tesla-trunk-strut-replacement/) for Highland-specific force ratings

**Model Y Juniper (2024+):**

- Updated power liftgate motor and latch integration
- New latch part number that does not cross-reference to 2020–2023 Model Y parts
- Liftgate calibration procedure is the same (Controls > Trunk > Calibrate)
- If the Juniper liftgate shows issues within 4 years of purchase, report via the Tesla app first — it falls under the New Vehicle Limited Warranty at no charge

For both Highland and Juniper, confirm your part number via VIN at parts.tesla.com before ordering any replacement latch. Installing a pre-2024 latch on a 2024+ car causes alignment failure — the bolt patterns do not match.

---

## Troubleshooting After Replacement

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| "Trunk Open" warning still showing after install | Connector not fully seated | Disconnect and reconnect — listen for click |
| "Trunk Open" warning clears but returns within 24 hours | New latch defective (rare) or striker misaligned | Adjust striker; replace latch under warranty if defective |
| Trunk closes but won't open with key or app | Electric release actuator not connected | Check actuator connector (separate from latch) |
| Model Y liftgate stops short after latch replacement | Calibration not run | Run Controls > Trunk > Calibrate Liftgate |
| Trim panel won't sit flush after reinstall | Clip missed during install | Remove panel, check all clip locations |
| Clicking noise on close but trunk does not engage | Latch positioned too far inward | Loosen bolts, shift latch 1–2 mm outward, retorque to 9 Nm |
| "Trunk Open" warning persists with new latch and confirmed seated connector | Trunk wiring harness damage | Inspect harness connector — see trunk wiring harness repair guide |

---

## Service Mode: Verify the Repair

After installation, use Tesla's built-in diagnostics to confirm the latch sensor reads correctly:

1. Tap the Tesla logo at the top center of the touchscreen (some software versions: tap the car icon, then hold Service)
2. Navigate to **Body Controls > Trunk** or **Doors & Locks > Trunk State**
3. The trunk state indicator shows **Closed** when the trunk is physically closed
4. Open and close the trunk — the state changes Closed → Open → Closed in real time with a working latch

If the state indicator does not change with trunk movement, the electrical connector is not transmitting. Recheck the connector seating and inspect the wiring harness between the latch and the body. Our [trunk wiring harness repair guide](/posts/tesla-trunk-wiring-harness-repair/) covers full harness inspection and connector testing with a multimeter.

---

## From the Workshop: Real Repair Cases

At RR Car Parts in Kaunas, Lithuania, we process 4–6 Tesla trunk latch repairs monthly across the Baltic region. These are representative cases from 2025–2026.

**Case 1 — Kaunas, 2023 Model Y, 68,000 km**
Complaint: intermittent "Trunk Open" warning with 2-week overnight battery drain pattern. Root cause: micro switch contacts corroded from winter salt spray entering the latch area through a degraded trunk seal. Fix: replaced latch assembly (€55 aftermarket) and trunk seal (€22). Total repair time: 45 minutes. Total parts: €77. The trunk seal failure was the primary cause — the seal allowed moisture direct access to the latch. See our [door seal maintenance guide](/posts/tesla-door-seal-maintenance/) for annual seal inspection and replacement steps.

**Case 2 — Vilnius, 2021 Model 3, 112,000 km**
Complaint: trunk pops open at highway speed, consistent above 80 km/h. Root cause: latch claw worn to the point where vibration was enough to disengage the striker. The striker was correctly aligned. Fix: replaced latch assembly with OEM part (€98 from RR Car Parts). Total repair time: 35 minutes. High-mileage Model 3 owners should inspect the latch claw for wear at the 100,000 km service — especially if the car lacked a power close function and the trunk was closed manually with force.

**Case 3 — Riga, 2022 Model Y, 54,000 km**
Complaint: Model Y liftgate stops 10 cm short of closing and reverses. The owner had already ordered a new latch assembly based on online forum advice. Root cause: liftgate height calibration drift. Fix: ran Controls > Trunk > Calibrate Liftgate (2 minutes, zero parts cost). The liftgate closed perfectly on the first calibrated cycle. The unused latch assembly was returned. Takeaway: always run the Model Y liftgate calibration before purchasing any parts — it resolves 40% of "won't close" complaints at no cost.

---

## Tesla Warranty Coverage

| Coverage Type | Duration | What Is Covered |
|--------------|----------|-----------------|
| New Vehicle Limited Warranty (US) | 4 years / 50,000 miles | Manufacturing defects in trunk latch and liftgate |
| New Vehicle Limited Warranty (EU) | 4 years / 80,000 km | Same — EU statutory minimum is 2 years |
| Used Vehicle Limited Warranty | 1 year / 10,000 miles | If warranty was transferred at sale |
| Out-of-warranty | N/A | $230–450 at Tesla Service; DIY is $45–120 |

**How to claim warranty coverage:**

1. Screenshot the "Trunk Open" warning with a visible timestamp
2. Open the Tesla app and tap **Service > Schedule Service**
3. Select **Body > Trunk Won't Stay Closed**
4. Attach your screenshot to the service request notes
5. Tesla diagnoses and replaces under warranty at no charge if the fault is a manufacturing defect

**Outside the warranty window:** DIY is the correct approach. Tesla charges $230–450 for a 30-minute repair you can do yourself for $45–120.

---

## Common Mistakes

**1. Replacing the latch before cleaning it.** Electrical contact cleaner resolves 30% of cases in 5 minutes. Clean it first.

**2. Overtightening the latch mounting bolts.** 9 Nm is the torque spec. Overtightening crushes the latch mounting flange and misaligns the mechanism — you create a new problem while fixing the old one.

**3. Forgetting to reconnect the electrical connector.** The most common post-install "failure." The connector must click fully into place or the car permanently reads Trunk Open.

**4. Skipping liftgate calibration on Model Y.** Without calibration, the liftgate stops short on the first power close cycle. It looks like the new latch is defective — usually the calibration is all that is missing.

**5. Ordering parts without using your VIN.** Model 3 and Model Y latches are not interchangeable. 2024+ Highland/Juniper latches do not fit pre-2024 cars. Use your VIN at parts.tesla.com for every order.

---

## Preventing Future Issues

- **Apply silicone spray** to the latch mechanism and trunk seal every 12 months — prevents corrosion and seal freeze in winter
- **Inspect the trunk seal annually** — a cracked or flattened seal lets moisture reach the latch directly. Replace the seal before it causes a latch failure. See our [door seal maintenance guide](/posts/tesla-door-seal-maintenance/)
- **Do not slam the trunk** — let the power close function work. Repeated hard manual slams accelerate latch claw wear and misalign the striker
- **Before winter** in cold climates, spray the latch, striker, and seal with a moisture displacer, then apply silicone spray over it — the silicone repels salt spray through the season
- **Keep the striker clean** — road grime buildup on the striker accelerates latch claw wear. Clean it at each car wash

---

## Frequently Asked Questions

**Why does my Tesla show "Trunk Open" when the trunk is clearly closed?**
The micro switch inside the latch assembly has failed — corroded contacts tell the car the trunk is open even when it is latched. Clean the latch with electrical contact cleaner first ($5, takes 5 minutes). If the warning returns, replace the latch assembly ($45–120).

**How much does Tesla trunk latch replacement cost?**
DIY: $45–120. Tesla Service Center: $230–450. Independent shop: $140–260. You save $110–330 doing it yourself in 30–60 minutes.

**Is the Model Y liftgate latch the same as the Model 3 trunk latch?**
No — completely different part numbers and different designs. The Model Y latch integrates with the power liftgate motor system. They are not interchangeable.

**Will I void my warranty by replacing the latch myself?**
No. The Magnuson-Moss Warranty Act (US) and EU Directive 1999/44/EC protect your right to perform DIY repairs with aftermarket parts without voiding unrelated warranties.

**Can I replace just the micro switch to save money?**
Not worth it. The switch costs $3–8 but requires disassembling the sealed latch housing. Replace the full assembly for $45–120 in 30 minutes.

**My Model Y liftgate stops short of closing — is that the latch?**
Run the liftgate calibration first: Controls > Trunk > Calibrate Liftgate. This free 2-minute step resolves 40% of "stops short" complaints. If it fails, the actuator needs replacement — not the latch.

**What are the latch bolt torque specs?**
Latch mounting bolts: 9 Nm (7 ft-lbs). Striker bolt: 12 Nm (9 ft-lbs).

---

## Related Guides

- [Tesla Trunk Strut Replacement](/posts/tesla-trunk-strut-replacement/) — if weak struts are preventing full latch engagement, or causing the actuator to overwork
- [Tesla Trunk Won't Close](/posts/tesla-trunk-wont-close/) — broader troubleshooting for trunk problems beyond the latch
- [Tesla Door Latch Actuator Replacement](/posts/tesla-door-latch-actuator-replacement/) — if the trunk won't open (release actuator failure, not the latch itself)
- [Tesla Trunk Wiring Harness Repair](/posts/tesla-trunk-wiring-harness-repair/) — when a damaged harness causes persistent Trunk Open warnings after latch replacement
- [Tesla Door Seal Maintenance](/posts/tesla-door-seal-maintenance/) — worn seals let moisture reach the latch; replace the seal to prevent recurrence
- [Tesla Creaking Rattling Fix](/posts/tesla-creaking-rattling-fix/) — a loose latch can generate body rattles that sound unrelated to the trunk
- [Tesla Frunk Won't Open](/posts/tesla-frunk-wont-open/) — front trunk latch issues use the same diagnostic approach
- [Tesla Phantom Battery Drain Fix](/posts/tesla-phantom-battery-drain-fix/) — trunk latch failure is one of the most common sources of overnight phantom drain
