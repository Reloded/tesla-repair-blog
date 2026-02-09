---
layout: post.njk
title: "Tesla Model 3 Superbottle Replacement: Complete DIY Guide"
description: "Tesla superbottle failed? Learn what it does, why it fails, part numbers, and step-by-step DIY replacement. Tesla charges $986-$2,500 — save up to $1,500 doing it yourself."
date: 2026-02-09
category: "Cooling System"
difficulty: "Hard"
readTime: "20 min read"
models: "Model 3"
emoji: "🧊"
tools:
  - name: "Coolant Drain Pan"
    link: "https://www.amazon.de/s?k=coolant+drain+pan&tag=diyrepair-21"
  - name: "Coolant Drain Pan"
    link: "https://www.amazon.com/s?k=coolant+drain+pan&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Tesla G-48 Coolant"
    link: "https://www.amazon.de/s?k=zerex+g48+coolant+tesla&tag=diyrepair-21"
  - name: "Tesla G-48 Coolant"
    link: "https://www.amazon.com/s?k=zerex+g48+coolant+tesla&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "A/C Manifold Gauge Set (R1234yf)"
    link: "https://www.amazon.de/s?k=ac+manifold+gauge+set+r1234yf&tag=diyrepair-21"
  - name: "A/C Manifold Gauge Set (R1234yf)"
    link: "https://www.amazon.com/s?k=ac+manifold+gauge+set+r1234yf&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Trim Removal Tools"
    link: "https://www.amazon.de/s?k=automotive+trim+removal+tools&tag=diyrepair-21"
  - name: "Trim Removal Tools"
    link: "https://www.amazon.com/s?k=automotive+trim+removal+tools&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Foldable Funnel / Drip Catcher"
    link: "https://www.amazon.de/s?k=foldable+drip+funnel+automotive&tag=diyrepair-21"
  - name: "iFixit Pro Tech Toolkit"
    link: "https://sovrn.co/1dw8w9g"
    provider: "ifixit"
---

The **superbottle** is Tesla's integrated thermal management hub — and one of the most expensive out-of-warranty repairs on the Model 3. Tesla service centers quote **$986 to $2,500** for this job. With the right preparation, you can do it yourself for **$400–900**, though it requires intermediate-to-advanced mechanical skills and A/C system work.

## What Is the Superbottle?

The superbottle is an all-in-one coolant management assembly unique to Tesla. Rather than using separate expansion tanks, pumps, and valves for each thermal loop, Tesla combined them into a single integrated unit.

**The superbottle assembly includes:**
- Coolant reservoir / expansion tank
- Two coolant pump motors (battery loop and powertrain loop)
- 5-way coolant valve with electric actuator
- Chiller with EXV (electronic expansion valve)
- Multiple temperature and pressure sensors

**It manages thermal routing for:**
- Battery pack cooling and heating
- Drive unit(s) cooling
- Cabin heating (via heat pump on 2021+ models)
- A/C refrigerant integration through the chiller

The 5-way valve is the key component — it routes coolant between series mode (shared loop), parallel mode (separate loops), and radiator-engaged modes depending on thermal demand.

## Part Numbers

Tesla has revised the superbottle multiple times. Part numbers vary by model year and configuration:

| Configuration | Part Number | Notes |
|---------------|------------|-------|
| Model 3 AWD (2017–2023) | 1097015-00-K | Earlier revision |
| Model 3 AWD (2017–2023) | 1097015-00-M | Later revision, commonly available |
| Model 3 RWD (2018) | 1111740-00-A | RWD-specific, simpler design |
| 8-way valve upgrade | Varies | Newer design from Tesla, ~$1,468 installed |

<div class="tip-box">
<strong>Always provide your VIN when ordering.</strong> Tesla has issued multiple revisions. The -00-M suffix is the most commonly available as of 2025. The assembly costs approximately $367–$735 depending on source (Tesla parts department vs. third-party OEM sellers).
</div>

## RWD vs. Dual Motor Differences

Tesla has separate service manual procedures for each:

| Aspect | RWD (Single Motor) | AWD (Dual Motor / Performance) |
|--------|-------------------|-------------------------------|
| Coolant loops | Fewer hose connections | More connections (front + rear DU) |
| Access difficulty | Moderate | Harder — tighter spaces |
| Heat exchanger | Simpler routing | Front DU heat exchanger adds complexity |
| Estimated time | 3–4 hours | 4–6 hours |
| Service manual page | "Superbottle (RWD) (Remove and Replace)" | "Superbottle (Dual Motor) (Remove and Replace)" |

The dual motor version requires working around the front drive unit heat exchanger and has additional coolant hose connections.

## Symptoms of a Failing Superbottle

The most common failure is the **5-way valve actuator** — the small electric motor that positions the valve via a worm gear. When it fails, the valve gets stuck in one position.

**Warning signs:**
- **VCFRONT_a210_coolantValveCalib** error in Service Mode
- **Thermal System Test failure** in Service Mode
- **"Power Limited"** or **"Performance Reduced"** warnings
- **A/C not cooling** or inconsistent cabin temperature
- **Reduced Supercharging speeds** (battery can't precondition properly)
- **Coolant loss** with no visible external leak
- **Premature battery degradation** (the stuck valve may not optimally heat/cool the pack)

<div class="warning-box">
<strong>Don't Ignore VCFRONT_a210_coolantValveCalib:</strong> Community members report that even though a stuck valve may not trigger immediate overheating errors, it can cause long-term battery degradation because the battery isn't being optimally thermally managed. One owner reported their battery health dropped to 82% before discovering the actuator had been failed for a long time.
</div>

### How to Check in Service Mode

1. On the touchscreen, go to **Service Mode** (requires entering your car's service access code)
2. Navigate to **Thermal System** and run the **Thermal Test**
3. Check **Service Alerts** for VCFRONT_a210_coolantValveCalib
4. Under **Coolant System**, verify you can switch between series and parallel modes

## Why Superbottles Fail

1. **5-way valve actuator failure** — The worm gear binds or the motor fails. Most common cause.
2. **Chiller EXV malfunction** — The electronic expansion valve may not fully open, causing high refrigerant pressure
3. **Internal coolant leaks** — Passages can develop cracks over time
4. **Sensor failures** — Integrated temperature/pressure sensors
5. **Coolant pump motor failure** — Either of the two integrated pump motors

Failures are reported between **30,000–140,000+ miles** with no clear pattern. The superbottle is covered only under the **basic vehicle warranty (4 years / 50,000 miles)**, not the battery/drivetrain warranty.

## Cost Comparison

| Repair Option | Parts | Labor | A/C Service | Total |
|---------------|-------|-------|-------------|-------|
| Tesla Service Center | $400–800 | $500–1,200 | Included | **$986–2,500** |
| Independent Tesla Shop | $400–735 | $300–600 | Included | **$800–1,500** |
| Full DIY | $367–735 | Your time | $100–200 (shop A/C recharge) | **$500–935** |
| DIY + Valve Actuator Only | ~$50 | Your time | Not needed | **~$50** |

<div class="tip-box">
<strong>Actuator-Only Fix:</strong> If your only issue is the VCFRONT_a210 error, you may be able to replace just the 5-way valve actuator (~$50 from Tesla parts) without replacing the entire superbottle. One TMC forum member reported this solved their issue completely. However, Tesla will still need to recalibrate the valve using Toolbox (~$21 for calibration only).
</div>

## Tools and Parts Needed

### Parts
- **Superbottle assembly** — $367–735 (includes reservoir, pumps, chiller, valve, actuator)
- **Zerex G-48 coolant** — ~$25/gallon (need 1–2 gallons). Must be phosphate-free G-48 spec. Zerex is the main aftermarket brand that lists Tesla approval on the bottle
- **Chiller O-rings** (2x) — Order separately from Tesla parts catalog if replacing the chiller. Not included with the superbottle assembly
- **R1234yf refrigerant** — If you're handling A/C yourself (~$50–80 per can)

### Tools
- Socket set (8mm, 10mm, 13mm)
- Trim removal tools
- Coolant drain pan (8–10L capacity)
- Foldable funnel / drip catcher (Tesla service manual specifically mentions this for catching fluid from the heat exchanger area)
- Coolant vacuum refill tool (recommended for proper bleeding)
- A/C recovery/recharge machine (if doing A/C yourself) — or budget $100–200 for a shop to handle this
- Bungee straps (for pulling wheel arch liner back on dual motor)
- Torque wrench

## Step-by-Step Replacement

### Before You Start

1. **Download the Tesla Service Manual** procedure for your specific variant (RWD or Dual Motor) from service.tesla.com — a subscription costs ~$30/month
2. **Photograph everything** before disconnecting hoses
3. **Have a shop lined up** for A/C recovery/recharge unless you have the equipment and certification
4. **Plan for calibration** — After installation, Tesla must calibrate the 5-way valve using Toolbox. Schedule a service appointment in advance for "coolant valve calibration only" (~$21)

### Step 1: Preparation

1. Power off the vehicle from the touchscreen
2. Disconnect the 12V battery (negative terminal first)
3. Remove the front aero shield — see Tesla service manual "Panel - Aero Shield - Front (Remove and Replace)"
4. Remove the frunk storage/liner for access to the superbottle area

### Step 2: Recover A/C Refrigerant

<div class="warning-box">
<strong>R1234yf is mildly flammable</strong> and requires proper handling. In the US, EPA Section 608 certification is required to purchase and handle automotive refrigerants. In the EU, F-gas regulations apply. Consider having a shop recover the refrigerant before you start and recharge after you finish — typically $100–200 for both services.
</div>

If you have proper equipment:
1. Connect your R1234yf recovery machine to the service ports
2. Recover all refrigerant from the system
3. Record the amount recovered for proper recharge later

**Can you skip the A/C work?** Some owners have attempted to replace the superbottle without disturbing the chiller by carefully transferring the old chiller to the new assembly. However, community experience shows the chiller EXV is often also faulty, and you may end up doing the job twice. If your Thermal Test shows a refrigerant pressure error, you'll need the new chiller.

### Step 3: Drain Coolant

1. Position a drain pan under the vehicle
2. For **Dual Motor**: Use a foldable funnel positioned to cover the front drive unit 12V connector and steering rack — this catches fluid from the heat exchanger coolant outlet
3. For **Dual Motor**: Install a bungee strap to pull the RH front wheel arch liner away from the HV battery to expose coolant hoses
4. Release the coolant hose clips and disconnect hoses from the superbottle
5. Drain coolant into the pan — expect 2–4 liters depending on how much drains

### Step 4: Disconnect Components

Working methodically (photograph each connection before removing):

**Coolant connections:**
- Powertrain supply hose (lower LH side of superbottle)
- Powertrain return hose
- Battery coolant hoses
- Front drive unit heat exchanger hose (Dual Motor only) — release the clip from the heat exchanger coolant outlet

**Electrical connections:**
- Coolant pump motor connectors (2x)
- 5-way valve actuator connector
- Temperature/pressure sensor connectors
- Chiller EXV electrical connector

**Refrigerant connections (if replacing chiller):**
- Suction/liquid line fitting bolt from the chiller and EXV assembly

**Mounting hardware:**
- Superbottle mounting bolts

### Step 5: Remove Old Superbottle

1. With all connections removed, carefully extract the superbottle assembly
2. Note the exact orientation — it only fits one way, but getting it back in the tight space requires knowing the angle

### Step 6: Install New Superbottle

1. If you're transferring the old chiller (not recommended — see Step 2 note), carefully remove it from both old and new assemblies
2. Install new O-rings on the chiller suction/liquid line fitting (must be purchased separately)
3. Position the new superbottle and install mounting bolts
4. Reconnect all electrical connectors
5. Reconnect all coolant hoses and secure clips — ensure each clip clicks firmly
6. Reconnect refrigerant lines and install the suction/liquid line bolt

### Step 7: Refill and Bleed Coolant

1. Use **Zerex G-48 50/50 premixed coolant** — this is a phosphate-free formulation specifically approved for Tesla. Do not use regular coolant.
2. **Vacuum refill method** (recommended by Tesla): Attach a vacuum refill tool to the superbottle with the conical adapter, create vacuum, then open coolant valve to fill
3. **Manual fill method**: Fill slowly through the reservoir cap, run the coolant pumps via Service Mode, top off, repeat until no air bubbles
4. Check for leaks at every connection point

For detailed coolant procedures, see our [Tesla Coolant Flush & Change guide](/posts/tesla-coolant-flush-change/).

### Step 8: Recharge A/C System

1. Have your shop recharge with R1234yf to factory spec
2. Or use your recovery/recharge machine to add the correct amount (refer to your vehicle's A/C spec label)

### Step 9: Tesla Calibration (Required)

1. Reconnect the 12V battery
2. Reinstall the aero shield and frunk components
3. **Schedule a Tesla service visit** for 5-way valve calibration
4. Tesla uses Toolbox software with a custom cable to calibrate the valve position
5. After calibration, verify the VCFRONT_a210 error is cleared
6. Run the **Thermal System Test** in Service Mode to confirm everything passes

<div class="warning-box">
<strong>Calibration is mandatory.</strong> The 5-way valve must be calibrated after installing a new actuator or new superbottle assembly. Without calibration, the valve won't operate correctly and you'll continue to see errors. Budget ~$21 for calibration only if you tell Tesla that's all you need.
</div>

## Hybrid DIY Approach (Recommended)

The most practical approach for most DIYers:

1. **Order the superbottle** from Tesla parts (~$367) or OEM supplier (~$735)
2. **Have a shop recover your A/C refrigerant** ($50–100)
3. **Do the mechanical swap yourself** (3–6 hours)
4. **Have the shop recharge your A/C** ($50–100)
5. **Schedule Tesla for valve calibration** (~$21)

**Total: ~$500–950** vs. $986–2,500 at Tesla

## Where to Buy Parts

| Source | Part Cost | Notes |
|--------|-----------|-------|
| Tesla Parts Department | ~$367 | Provide VIN. Cheapest for the assembly. May need to call. |
| Evolution Parts (OEM new) | ~$735 | Part 1097015-00-M, ships quickly |
| Ingenext (used/recycled) | ~$200–400 | Used parts — check condition. Not recommended for the actuator. |
| eBay (OEM new) | ~$600–800 | Verify seller and part number |

<div class="tip-box">
<strong>Avoid used superbottles.</strong> The actuator worm gear and chiller EXV are the most common failure points. A used unit may have the same problems. The Tesla parts department price (~$367) is often cheaper than third-party OEM sellers.
</div>

## Common Mistakes to Avoid

1. **Ignoring the chiller** — If your Thermal Test fails with a refrigerant pressure error, you need the new chiller too. Don't just swap the actuator.
2. **Using wrong coolant** — Must be G-48 phosphate-free coolant. Zerex G-48 is the go-to aftermarket option. Wrong coolant can damage the $20k+ battery pack.
3. **Skipping calibration** — The valve won't work correctly without Tesla Toolbox calibration. Don't assume it'll self-calibrate.
4. **Not replacing chiller O-rings** — These are not included with the assembly. Order them separately from the Tesla parts catalog.
5. **Rushing the coolant bleed** — Air pockets cause hot spots and pump cavitation. Use the vacuum refill method if possible.

## Third-Party Repair Shops

If DIY isn't for you but Tesla's price is too high:

- **Electrified Garage** — Multiple US locations, Tesla-specialized
- **Gruber Motors** — Phoenix, AZ
- **WattWorks EV** — Specializes in Tesla cooling system repairs
- **Local independent EV shops** — Increasingly available

Typical third-party cost: **$800–1,500** (parts + labor + refrigerant)

## Prevention and Monitoring

1. **Check Service Mode periodically** — Run the Thermal System Test every few months
2. **Monitor for VCFRONT_a210** errors — Don't ignore them, even if the car seems to drive fine
3. **Keep software updated** — Tesla pushes thermal management improvements
4. **Monitor battery degradation** — Unexplained degradation could indicate a stuck coolant valve
5. **Check coolant level** monthly — Top off with G-48 if low

## When to Pay Tesla

Consider Tesla service if:
- Under basic warranty (4 years / 50,000 miles)
- You have extended warranty coverage
- You need the car back same-day
- You're not comfortable with A/C system work
- The repair is straightforward enough for goodwill coverage (ask)

---

*The superbottle is Tesla's most complex thermal management component, and its failure can silently degrade your battery over months. The good news: with the right preparation and a willingness to get your hands dirty, you can save $500–1,500 over Tesla service pricing. The key is not skipping the chiller replacement or the valve calibration.*

## Related Guides

- [Heat Pump Problems](/posts/tesla-heat-pump-problems/) — Related thermal system diagnostics
- [A/C Not Cooling](/posts/tesla-ac-not-cooling/) — Diagnose A/C issues before assuming superbottle failure
- [Coolant Flush & Change](/posts/tesla-coolant-flush-change/) — Detailed coolant drain and refill procedures
- [Climate Keeper Issues](/posts/tesla-climate-keeper-issues/) — Thermal system troubleshooting
- [12V Battery Replacement](/posts/tesla-12v-battery-replacement/) — Another common DIY repair
