---
type: news
layout: post.njk
title: "Used Tesla Buying Guide: Pre-Purchase Inspection Checklist"
description: "Complete used Tesla buying guide with a 50-point inspection checklist covering battery health, panel gaps, common failures, and what to check before buying a Model 3, Y, S or X."
date: 2026-02-26
category: "Buying"
difficulty: "Beginner"
readTime: "15 min read"
models: "All Models"
emoji: "🔍"
draft: false
tools:
  - name: "OBD2 Scanner for Tesla (OBDLink CX)"
    link: "https://www.amazon.de/s?k=OBDLink+CX+tesla+obd2&tag=diyrepair-21"
  - name: "Tesla Scan (Android/iOS App)"
    link: "https://www.amazon.de/s?k=tesla+obd2+diagnostic+scanner&tag=diyrepair-21"
  - name: "Paint Thickness Gauge"
    link: "https://www.amazon.de/s?k=paint+thickness+gauge+car&tag=diyrepair-21"
  - name: "12V Battery Tester"
    link: "https://www.amazon.de/s?k=12v+car+battery+tester&tag=diyrepair-21"
  - name: "Flashlight for Inspection"
    link: "https://www.amazon.de/s?k=led+inspection+flashlight+mechanic&tag=diyrepair-21"
---

Buying a used Tesla is different from buying any other used car. There's no engine to listen to, no transmission to worry about, and the car's entire history lives in software logs that most buyers never check. That's a problem, because the expensive failures on these cars aren't obvious — a battery with degraded cells, a heat pump that's about to die, or suspension components worn from years of heavy regenerative braking all look fine from the outside.

This guide covers what actually matters when inspecting a used Tesla, based on real repair shop experience across hundreds of these cars.

## Before You See the Car

### Check the VIN Online

Before driving anywhere, get the VIN and look it up:

- **Tesla's own transfer tool** — log into tesla.com, go to "Add Existing Vehicle" and enter the VIN. If the car has active Supercharging credits, FSD, or warranty, it shows up here.
- **NHTSA recall check** (nhtsa.gov/recalls) — enter the VIN. Tesla does most recalls via OTA software updates, but some require physical service (like the 2023 steering rack recall).
- **Carfax/AutoCheck** — standard stuff, but pay attention to whether the car was ever a fleet vehicle, rental, or salvage title.

### Decode the VIN

Tesla VINs tell you more than most. The 8th character matters:

| Character | Meaning |
|-----------|---------|
| E | Rear motor, single (RWD) |
| F | Dual motor, Performance |
| A/B | Dual motor, standard |
| P | Performance (older Model S/X) |

The 10th character gives you the model year. Cross-reference what the seller claims.

### Request the Tesla Service History

Ask the seller to share their Tesla app service history, or request records from Tesla directly. What you're looking for:

- **Battery replacements or repairs** — if the HV battery was swapped under warranty, ask why. Coolant intrusion? Cell imbalance?
- **Drive unit replacements** — early Model S/X had known drive unit failures. If it's been replaced, that's actually good news (new unit).
- **Suspension work** — especially on Model S/X with air suspension. Those air springs have a lifespan.
- **Recurring complaints** — three visits for the same rattle or noise usually means the problem isn't solved.

## Battery Health: The Most Important Check

Battery condition determines 80% of a used Tesla's real value. Here's how to assess it.

### Check Displayed Range vs. EPA

Charge the car to 100% (or ask the seller to) and note the displayed range. Compare to EPA:

| Model | Year Range | EPA Range (approx.) |
|-------|-----------|---------------------|
| Model 3 RWD | 2017-2020 | 250 miles (402 km) |
| Model 3 LR | 2017-2020 | 322 miles (518 km) |
| Model 3 RWD (LFP) | 2021+ | 272 miles (438 km) |
| Model 3 LR | 2021+ | 358 miles (576 km) |
| Model Y LR | 2020-2023 | 330 miles (531 km) |
| Model Y LR | 2024+ | 310 miles (499 km) |
| Model S LR | 2021+ | 405 miles (652 km) |

**Normal degradation:** 5-10% in the first 2 years, then roughly 1-2% per year after that. A 2020 Model 3 LR showing 285 miles at 100% is normal. One showing 240 miles needs investigation.

### Use an OBD2 Scanner

The displayed range is a rough estimate. For real data, plug in an OBD2 adapter (OBDLink CX or similar) and use Scan My Tesla or TeslaFi:

- **State of Health (SoH)** — anything above 88% for a car under 5 years old is acceptable. Above 92% is great.
- **Cell voltage delta** — the difference between the highest and lowest cell. Under 20mV is healthy. Over 50mV suggests a weak cell group that may need replacement.
- **Charge cycles** — more meaningful than mileage for battery wear. Under 500 cycles is light use.

### Battery Red Flags

Walk away or negotiate hard if you see:

- **SoH below 85%** on a car under 100,000 km — something's wrong
- **Cell delta above 50mV** — a weak cell group will only get worse
- **Battery was replaced under warranty** for thermal runaway or coolant intrusion — ask if the cooling system was also addressed
- **BMS errors in the log** — cell balancing failures, contactors sticking

For a deeper dive on battery health monitoring, see our [Tesla Battery Degradation & Health Guide](/tesla-battery-degradation-health/).

## Exterior Inspection

### Paint Quality

Tesla's paint is notoriously thin, especially on 2018-2021 cars from Fremont. Bring a paint thickness gauge.

- **Normal range:** 100-130 microns
- **Repainted panels:** 200+ microns (could indicate accident repair)
- **Bare spots or sub-80 microns:** Factory defect, common on early Model 3

Check the usual spots: lower door edges, rear quarter panels, front bumper (stone chips), A-pillars. For paint repair options, see our [Tesla Paint Chip Repair Guide](/tesla-paint-chip-repair/).

### Panel Gaps

Tesla's panel alignment has improved, but older cars can have significant gaps. Check:

- **Hood to fender gap** — should be even on both sides
- **Trunk/frunk lid alignment** — uneven gaps may indicate accident repair or poor factory build
- **Door gaps** — compare left to right, they should match
- **Charge port door** — should sit flush and open smoothly

Uneven panels aren't always a deal-breaker (it might be factory), but dramatically uneven panels on one side suggest collision repair. See our [Panel Gap Adjustment Guide](/tesla-panel-gap-adjustment/) if minor tweaks are needed.

### Wheels and Tires

- **Curb rash** — extremely common on Tesla wheels (low-profile tires + heavy car). Check all four. Repair costs €100-200 per wheel.
- **Tire date codes** — the DOT code on the sidewall shows manufacture week/year. Tires older than 5 years need replacement regardless of tread.
- **Tire wear pattern** — uneven inner-edge wear is common and suggests alignment issues or worn suspension components. Teslas eat tires, especially rear tires on RWD cars.
- **Matching tires** — all four should be the same brand and model. Mismatched tires suggest the owner was cutting corners.

For wheel repairs, see our [Curb Rash Repair Guide](/tesla-curb-rash-wheel-repair/).

### Underbody

Get under the car if possible (or use your phone camera):

- **Battery pack** — look for scrapes, dents, or impact marks on the skid plate. A hard hit can damage cells internally without visible exterior damage.
- **Suspension components** — check for rust on control arms and subframe bolts. Surface rust is normal in cold climates. Flaking rust is a concern.
- **Coolant lines** — look for any green/orange residue under the car, especially around the front subframe area.

More on protecting the underside in our [Rust Prevention & Undercoating Guide](/tesla-rust-prevention-undercoating/).

## Interior Inspection

### Touchscreen

The screen is the car's brain. Check carefully:

- **Response time** — tap through menus. Sluggish response on MCU1 (Model S/X pre-2018) is normal. Sluggish on MCU2+ is not.
- **Yellow border** — a yellow band around the screen edge indicates adhesive failure. Tesla replaced these under warranty, but if it's out of warranty, it's a €500+ repair.
- **Dead pixels or discoloration** — look for dark spots or uneven brightness.
- **eMMC wear** — on MCU1 cars, ask if the eMMC chip has been replaced. If not, it will need it eventually (the original 8GB chip wears out from logging).

See our [MCU & Touchscreen Upgrade Guide](/tesla-mcu-touchscreen-upgrade/) for options.

### Seats and Interior Trim

- **Seat bolster wear** — the driver's side bolster (the raised edge you slide against getting in/out) wears first. Check for cracking or peeling on the white/cream interior especially.
- **Headliner** — look for sagging near the A-pillar and rear window. This is a known issue on some Model 3/Y builds.
- **Door panel alignment** — press gently on door panels. Clips break over time, causing rattles.
- **Wireless charger** — test it with your phone. The pad fails frequently.

### Climate System

Run both heating and cooling during the test:

- **Heat pump** (2021+ Model 3/Y, 2021+ Model S/X) — listen for clicking, grinding, or excessive noise from the front. Heat pump failures are a known and expensive issue.
- **A/C performance** — should blow cold within 60 seconds. Weak cooling could mean a refrigerant leak or failing compressor.
- **Cabin filter smell** — musty smell on fan startup means the cabin filter hasn't been changed. Not a deal-breaker but indicates maintenance neglect.

For climate issues, check our [AC & Heater Troubleshooting Guide](/tesla-ac-heater-not-working/) and [Heat Pump Problems Guide](/tesla-heat-pump-problems/).

## Driving Test

### What to Listen For

- **Clunking over bumps** — likely worn control arms (front) or sway bar links. Common on cars over 60,000 km. Budget €300-800 for parts plus labor.
- **Clicking during tight turns** — CV joint or half-shaft issue. More common on dual motor cars. See our [Half-Shaft Clicking Fix](/tesla-halfshaft-clicking-fix/).
- **Humming or whining from the drive unit** — some whine is normal on Tesla motors. Excessive or changing pitch under load could indicate bearing wear.
- **Rattles from the dashboard or doors** — common on all Teslas. Annoying but usually fixable. See our [Creaking & Rattling Fix Guide](/tesla-creaking-rattling-fix/).

### Brakes

Tesla brakes last much longer than ICE cars because regenerative braking does most of the work. But this creates its own problem:

- **Brake rotors can rust** from disuse, especially in humid/salty climates. Check rotor surfaces for heavy pitting.
- **Test low-speed braking** — any pulsation means warped or corroded rotors.
- **Emergency braking feel** — should be firm and progressive, not spongy.

See our [Brake Pad Replacement](/tesla-brake-pad-replacement/) and [Brake Rotor Replacement](/tesla-brake-rotor-replacement/) guides.

### Suspension

- **Air suspension** (Model S/X) — cycle through all ride height settings during the test. Each corner should adjust within 10-15 seconds. Slow response or failure to reach a setting means a dying air spring or compressor.
- **Coil suspension** (Model 3/Y) — push down hard on each corner and release. The car should bounce once and settle. Multiple bounces = worn struts.
- **Alignment** — on a flat, straight road, briefly let go of the wheel. Significant pull to one side means alignment is off or a suspension component is bent.

## Software and Features

### Verify What's Actually Included

Tesla's feature set is tied to software, and some features transfer with the car while others don't:

- **Full Self-Driving (FSD)** — check the car's software page. FSD should show as "included" if it was purchased for this VIN. Tesla has been inconsistent about FSD transfer on used sales.
- **Premium Connectivity** — the LTE data connection for streaming, traffic visualization, and satellite maps. Check if it's active or if you'll need to subscribe (€9.99/month).
- **Acceleration Boost** — the paid performance upgrade on dual motor cars. Should transfer with the VIN.

### Software Version

Check the current software version (Controls → Software). If the car is several versions behind, it could mean:

- The car was offline for a long time
- There's a hardware compatibility issue blocking updates
- The previous owner declined updates (rare but possible)

## The 50-Point Inspection Checklist

Print this or save it to your phone:

### Battery & Charging
1. ☐ Charge to 100% — note displayed range
2. ☐ OBD2 scan — SoH percentage
3. ☐ Cell voltage delta (under 50mV)
4. ☐ Charge port opens/closes smoothly
5. ☐ Test AC charging (home charger)
6. ☐ Check for BMS error codes

### Exterior
7. ☐ Paint thickness (all panels)
8. ☐ Panel gaps (compare left to right)
9. ☐ All four wheels (curb rash)
10. ☐ Tire tread depth and date codes
11. ☐ Tire wear pattern (inner edge)
12. ☐ Windshield (chips, cracks)
13. ☐ All glass seals (run finger along edges)
14. ☐ Charge port door flush fit
15. ☐ Underbody/skid plate condition
16. ☐ Front bumper stone chips
17. ☐ Rear bumper scuffs
18. ☐ Roof glass (stress cracks around edges)

### Interior
19. ☐ Touchscreen responsiveness
20. ☐ Yellow border on screen
21. ☐ All cameras display properly
22. ☐ Wireless phone charger works
23. ☐ Both USB ports functional
24. ☐ All seat adjustments work
25. ☐ Heated seats (all positions)
26. ☐ Heated steering wheel
27. ☐ Door panel clips (press gently)
28. ☐ Glovebox latch
29. ☐ Center console lid/hinge
30. ☐ Rear seat latch and fold-down
31. ☐ Headliner condition
32. ☐ Driver seat bolster wear

### Driving
33. ☐ Steering alignment (hands-off straight road)
34. ☐ Brake feel (no pulsation)
35. ☐ Suspension noise (bumps/speed bumps)
36. ☐ Drive unit sound (acceleration whine)
37. ☐ Clicking in tight turns
38. ☐ Regen braking strength
39. ☐ Window operation (all four)
40. ☐ Wiper operation
41. ☐ Turn signals and exterior lights

### Software & Electrical
42. ☐ Software version (up to date?)
43. ☐ FSD status (if claimed)
44. ☐ Premium Connectivity active
45. ☐ Key card/phone key pairing
46. ☐ Bluetooth audio connection
47. ☐ Sentry Mode recording
48. ☐ Dashcam playback
49. ☐ 12V battery health (voltage check)
50. ☐ All door handles (exterior) work

## What to Pay: Pricing Reality Check

Used Tesla prices fluctuate heavily based on new car pricing changes. Tesla has cut prices multiple times since 2023, which hammered used values. General guidelines for 2026:

- **Depreciation curve** — Tesla holds value better than most EVs but worse than Toyota/Honda. Expect 15-20% depreciation in year one, then roughly 8-10% per year.
- **High-mileage discounts** — a Tesla with 150,000 km should be 40-50% below new price. The battery and motors can handle it, but suspension, brakes, and interior won't be perfect.
- **FSD premium** — a car with FSD purchased (€8,000-12,000 option) should be priced accordingly, but buyers are increasingly skeptical of paying full FSD premium on a used car since the feature hasn't delivered on its promise.

## Red Flags: Walk Away If...

- Seller won't let you do an OBD2 scan
- Battery SoH is below 85% on a car under 5 years old
- The car has been in a flood (check for water stains under rear seats, musty smell, corrosion on 12V battery terminals)
- Salvage/rebuilt title without detailed repair documentation
- Service history shows repeated battery or drive unit repairs
- Screen is unresponsive or shows signs of MCU failure
- Air suspension won't reach all ride heights
- Seller is vague about FSD status ("I think it has it")

## After Purchase

Once you own it:

1. **Change the cabin air filter** immediately — you don't know when it was last done. See our [Cabin Air Filter Guide](/tesla-cabin-air-filter/).
2. **Check the 12V battery** — if it's original and the car is 3+ years old, replace it proactively. A dead 12V battery means you can't open the doors. See our [12V Battery Replacement Guide](/tesla-12v-battery-replacement/).
3. **Get a wheel alignment** — baseline it fresh so you know where you're starting from. See our [Wheel Alignment Guide](/tesla-wheel-alignment-diy/).
4. **Register on Tesla.com** — transfer the car to your account for app access, service scheduling, and software updates.
5. **Check tire condition** and rotate if needed. See our [Tire Rotation Guide](/tesla-tire-rotation/).

## Final Thought

A well-maintained used Tesla is one of the best car purchases you can make — low operating costs, minimal maintenance, and performance that doesn't fade with age. But a neglected one can be an expensive lesson. Take the time to inspect it properly, bring the right tools, and don't let excitement override common sense. The right car at the right price is worth waiting for.

## Related Guides

- [Tesla Battery Replacement Cost: What It Really Costs in 2025](/posts/tesla-battery-replacement-cost/) — Informational · Model 3, Model Y, Model S, Model X · Battery & Electrical
- [Tesla Winter Preparation: Complete Cold Weather Checklist](/posts/tesla-winter-preparation-guide/) — Easy · Maintenance
- [Tesla 2026.2.3 Update: Hidden Features, Battery Recalibration, Autopark & Service Mode Changes](/posts/tesla-2026-2-3-software-update-features/) — Easy · Software & Tech
- [Tesla Coolant Leak: How to Find & Fix It (DIY Guide)](/posts/tesla-coolant-leak-fix/) — Medium · Cooling System
- [Tesla Dent Repair: PDR, DIY Methods & Cost Guide](/posts/tesla-dent-repair-pdr-guide/) — Medium · Exterior
- [Tesla Door Handle Not Working? DIY Fix (Save $500+)](/posts/tesla-door-handle-not-working/) — Intermediate · Body & Exterior
- [Tesla Falcon Wing Door Problems: DIY Fixes](/posts/tesla-falcon-wing-door-fix/) — Medium · Model X · Body
- [Tesla OBD2 Scanner & Diagnostics Guide](/posts/tesla-obd2-scanner-diagnostics/) — Essential tool for pre-purchase battery health checks
- [Tesla Battery Degradation & Health Guide](/posts/tesla-battery-degradation-health/) — What's normal degradation vs a problem
- [Tesla Recall Check Guide](/posts/tesla-recall-check-guide/) — How to verify all recalls are completed before buying
- [Tesla Maintenance Schedule](/posts/tesla-maintenance-schedule/) — Know what service history to look for
- [Tesla Tire Pressure Guide](/posts/tesla-tire-pressure-guide/) — Check tire condition as part of your inspection
