---
layout: post.njk
title: "Tesla Coolant Pump Replacement: Symptoms, Diagnosis & DIY Guide"
description: "How to diagnose and replace a failed Tesla coolant pump yourself. Covers battery and powertrain pumps on all models, common THC alert codes, parts, tools, and the full replacement procedure."
date: 2026-03-04
category: "Cooling System"
difficulty: "Advanced"
readTime: "20 min read"
models: "Model 3, Model Y, Model S, Model X"
emoji: "🔧"
draft: false
tools:
  - name: "Socket Set (Metric)"
    link: "https://www.amazon.de/s?k=metric+socket+set+automotive&tag=diyrepair-21"
  - name: "Socket Set (Metric)"
    link: "https://www.amazon.com/s?k=metric+socket+set+automotive&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Tesla G-48 Coolant (4L)"
    link: "https://www.amazon.de/s?k=tesla+g48+coolant&tag=diyrepair-21"
  - name: "Tesla G-48 Coolant (4L)"
    link: "https://www.amazon.com/s?k=tesla+g48+coolant&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Coolant Drain Pan (8-10L)"
    link: "https://www.amazon.de/s?k=coolant+drain+pan+10l&tag=diyrepair-21"
  - name: "Coolant Drain Pan"
    link: "https://www.amazon.com/s?k=coolant+drain+pan+10+liter&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Silicone O-Ring Lubricant"
    link: "https://www.amazon.de/s?k=silicone+o-ring+lubricant&tag=diyrepair-21"
  - name: "Silicone O-Ring Lubricant"
    link: "https://www.amazon.com/s?k=silicone+o-ring+lubricant&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Coolant Vacuum Refill Kit"
    link: "https://www.amazon.de/s?k=coolant+vacuum+refill+kit&tag=diyrepair-21"
  - name: "Coolant Vacuum Refill Kit"
    link: "https://www.amazon.com/s?k=coolant+vacuum+refill+kit&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "Absorbent Shop Towels"
    link: "https://www.amazon.de/s?k=absorbent+shop+towels+automotive&tag=diyrepair-21"
  - name: "Absorbent Shop Towels"
    link: "https://www.amazon.com/s?k=absorbent+shop+towels+automotive&tag=diyrepair07-20"
    provider: "amazon-com"
  - name: "iFixit Pro Tech Toolkit"
    link: "https://sovrn.co/1dw8w9g"
    provider: "ifixit"
---

Your Tesla's cooling system runs on electric coolant pumps, not a belt-driven water pump like a gas car. These pumps circulate G-48 coolant through the battery pack, drive unit, and (on 2021+ cars) the heat pump system. When one fails, you'll get a touchscreen alert, reduced power, or climate issues. The good news: the pumps themselves are bolt-on components, and replacing one is doable if you're comfortable working around coolant systems.

## How many coolant pumps does a Tesla have?

This depends on your model and year. The number catches people off guard.

**Model 3 and Model Y (pre-2021, no heat pump):**
Two pumps. One for the battery thermal loop, one for the powertrain (drive unit and power electronics). Both mount under the front trunk area.

**Model 3 and Model Y (2021+, heat pump equipped):**
Still two pumps, but they bolt directly to the supermanifold, which is the central hub of the heat pump system. The supermanifold routes coolant between the battery, drive unit, cabin heating, and the heat exchanger.

**Model S and Model X:**
Three or four pumps depending on the year. Older pre-refresh models can have battery coolant pump 1, battery coolant pump 2, and a powertrain (motor/inverter) coolant pump. Refresh models consolidated some of this, but still use multiple pumps.

If you're unsure which pump failed, the alert code on the touchscreen will point you to the right one. More on that below.

## Symptoms of a failing coolant pump

A dead or dying coolant pump usually shows up in one of these ways:

- **Touchscreen alert** about the coolant system, thermal management, or a specific pump. The car is actually good at catching this early.
- **Reduced power or "limp mode"** because the battery or drive unit can't maintain safe temperatures. You might see messages about performance being limited.
- **AC or heating stops working**, especially on heat pump cars where coolant circulation is part of the HVAC system.
- **Coolant level drops** without a visible leak. A pump with a bad seal can weep coolant slowly, and it might evaporate before you spot a puddle.
- **Whining or buzzing noise** from the front of the car. Healthy coolant pumps are nearly silent. A failing pump motor might get louder or make grinding sounds before it dies completely.
- **Battery preconditioning takes forever** or doesn't work. If the battery coolant pump can't circulate, the car struggles to warm or cool the pack.

If your coolant level is dropping, also check our [coolant leak diagnosis guide](/posts/tesla-coolant-leak-fix/) to rule out hoses and fittings before you blame the pump.

## THC alert codes for coolant pump failures

When you enter [Service Mode](/posts/tesla-service-mode-guide/) on the touchscreen (Controls > Software > hold "MODEL" for 4 seconds > enter "service"), you can read active service alerts. The thermal controller (THC) generates specific codes for pump issues.

Common codes related to coolant pumps:

| Code | Meaning |
|------|---------|
| THC_d0004_pumpPT | Powertrain coolant pump fault detected |
| THC_d0005_pumpBat1 | Battery coolant pump 1 fault detected |
| THC_d0006_pumpBat2 | Battery coolant pump 2 fault (Model S/X) |
| THC_w0039_pumpPTLimp | Powertrain pump in limp mode |
| THC_w0040_pumpPTStop | Powertrain pump stopped |
| THC_w0044_sanityPumpPT | Powertrain pump sanity check failed |
| THC_w0045_pumpPTFaultMax | Powertrain pump max fault threshold |
| THC_w0052_sanityPumpBat1 | Battery pump 1 sanity check failed |
| THC_w0056_pumpBat2Stop | Battery pump 2 stopped (Model S/X) |

If you see any of these, you've found your problem pump. The code tells you whether it's the powertrain or battery circuit, so you know which pump to replace.

## How much does replacement cost?

**At a Tesla Service Center:** $800 to $2,000+, depending on the model and which pump. Labor is the big cost because the service center charges $175-275/hour, and coolant drain/fill adds time. On a Model S/X with multiple pumps, it can climb higher.

**DIY:** $150 to $500 total. A new OEM pump runs $150-300. Used pumps from a Model 3/Y with low miles can be found on eBay for $100-250. Add $30-50 for fresh G-48 coolant and O-rings.

The part itself is the easy bit. The real question is whether you're comfortable draining and vacuum-refilling the coolant system, which requires either a vacuum fill tool or patience with the manual bleed process through Service Mode.

## Before you start

Read these sections fully before you touch anything. Coolant work on a Tesla isn't dangerous the way high-voltage battery work is, but there are things that will ruin your day if you skip them.

**Coolant type matters.** Tesla uses G-48 ethylene glycol coolant (sometimes called HOAT or Hybrid Organic Acid Technology). Don't use generic green coolant, Dex-Cool, or anything else. The wrong coolant can damage seals and corrode aluminum heat exchangers. See our [coolant flush guide](/posts/tesla-coolant-flush-change/) for approved brands.

**O-rings are critical.** Each pump has two O-rings where it meets the supermanifold or coolant block: an inner purple one and an outer black one. Always inspect them when you pull the old pump. If they're cracked, flattened, or brittle, replace them. Lubricate both O-rings with silicone O-ring lubricant before reinstalling. Dry O-rings can pinch and cause leaks.

**Label your connectors.** If you're disconnecting more than one pump (or working near other connectors), put masking tape on each electrical connector and label it with the pump location. Reconnecting the wrong pump to the wrong harness won't damage anything immediately, but the thermal controller will throw new fault codes.

**Protect nearby components.** Place absorbent material under the work area before you disconnect any coolant lines. On Model 3/Y heat pump cars, make sure the absorbent material covers the front drive unit's 12V connector and the steering rack. Coolant on electrical connectors causes corrosion.

## Tools and parts needed

Besides what's listed in the tools section above, you'll want:

- Fresh G-48 coolant (at least 2 liters for a top-off after a pump swap; 4+ liters if you're doing a full drain)
- Replacement O-rings if yours look worn (match the pump part number for the right size)
- Masking tape and a marker for labeling connectors
- A vacuum fill kit is optional but saves a lot of time during refill. If you don't have one, you can use Service Mode to run the pump bleed cycle, but it takes longer.

## Step-by-step: replacing a coolant pump (Model 3/Y, 2021+ heat pump)

This covers the most common setup. Model S/X pumps are in different locations but the general process is similar. Always cross-reference the Tesla service manual for your specific year and model.

### 1. Prepare the car

Put the car in [Service Mode](/posts/tesla-service-mode-guide/) from the touchscreen. This prevents the car from trying to run the cooling system while you work. If you need to drain coolant, use the Service Mode drain/fill option.

Open the frunk and remove the cabin intake duct assembly to access the supermanifold area. On Model 3/Y, this is under the front cowl area.

### 2. Drain coolant (partial)

You don't always need a full system drain. For a pump swap, you only need to drain enough coolant so it doesn't pour out when you pull the pump off the supermanifold.

Place your drain pan underneath. The Tesla service manual has a specific drain procedure using the coolant bottle cap and reservoir, but for a pump swap, you can get away with just catching what spills.

If you're doing a full drain and refill while you're in there (recommended if the coolant is more than 4 years old), follow our [complete coolant flush guide](/posts/tesla-coolant-flush-change/).

### 3. Disconnect the pump

Release the locking tab on the electrical connector and disconnect the harness from the coolant pump. Be gentle with the tab; they're plastic and break if you force them.

Remove the four bolts that attach the pump to the supermanifold. These are small metric bolts. Keep them organized because they're all the same size.

Pull the pump straight out from the supermanifold. Some coolant will spill. This is normal. Catch it with your absorbent material.

### 4. Check the O-rings

Look at the mounting face where the pump was seated. You should see both O-rings: the inner purple O-ring and the outer black O-ring. Sometimes one stays on the pump and the other stays on the supermanifold.

Make sure both come off with the old pump. If one is stuck on the supermanifold, carefully remove it. Inspect both O-rings and the sealing surfaces for damage. If the O-rings look okay, you can reuse them, but new ones are cheap insurance.

### 5. Install the new pump

Lubricate both O-rings with silicone O-ring lubricant. Don't use petroleum-based grease because it degrades rubber.

Position the new pump onto the supermanifold. Make sure it seats evenly. Install the four bolts hand-tight first, then snug them down in a cross pattern. **Torque to 1.8 Nm (Torx T20)** — these are small bolts threading into an aluminum housing and are easy to strip if overtightened.

> **Coolant and torque specs verified against Tesla Service Manual (service.tesla.com) - March 2026.** Pump-to-supermanifold: 1.8 Nm × 4 bolts (Torx T20) for both HV Battery pump and Powertrain pump. Approved coolant: EMEA — Tesla G-48 (P/N 1119779-00-A, pre-mixed, do NOT add water); NA — Ethylene glycol 50/50 (P/N 1029320-00-A). Concentration: 50–60% ethylene glycol.

Reconnect the electrical harness and make sure the locking tab clicks.

### 6. Refill and bleed the coolant

This is the step where patience pays off. Air trapped in the system will prevent the pump from circulating properly. The Tesla service manual mentions that if the pump speed hovers at 7,000 RPM during the bleed cycle, the pump is air-locked and you need to try again.

**With a vacuum fill kit:** Connect the kit to the coolant reservoir, pull a vacuum, then let it draw in fresh coolant. This method pulls coolant into all the low spots and pushes air out. It's faster and more reliable.

**Without a vacuum fill kit (manual bleed):** Fill the reservoir to the MAX line. In Service Mode, run the coolant bleed/purge cycle. The car will activate the pumps at varying speeds to push air out. This can take 15-30 minutes. Check the coolant level repeatedly and top off as the level drops.

After bleeding, check that the coolant level sits between the NOM and MAX lines on the reservoir.

**System capacities (filled from dry)** — for reference if you're doing a full drain alongside the pump swap:

| Configuration | Total Capacity (dry fill) |
|---------------|--------------------------|
| RWD SR LFP60 | **14.6 L** ✓ |
| RWD 2170 E1 | **16.3 L** ✓ |
| AWD 2170 E1 | **16.7 L** ✓ |
| AWD 2170 E3 | **18.4 L** ✓ |

For a partial drain-and-refill during a pump swap, plan for 2–4 liters. Have at least 4 liters of G-48 coolant on hand.

### 7. Check for leaks and exit Service Mode

With the coolant system full, visually inspect around the new pump for any seepage. Check the O-ring area and the electrical connector.

On the touchscreen, press and hold the "Exit Service Mode" button. The car will run through its startup checks, which includes activating the coolant pumps. Listen for normal pump operation (near-silent hum) and watch for any new alerts.

Take the car for a short drive, then check the coolant level again when you get back. Air bubbles that were trapped deeper in the system can work their way out during driving, dropping the level slightly.

## Model S/X differences

On Model S and X, the coolant pumps aren't all mounted on a central supermanifold like the Model 3/Y heat pump cars. Depending on the year:

- **Battery coolant pump 1** and **battery coolant pump 2** are separate units mounted in the front trunk area, connected by hoses to the battery pack
- **Powertrain coolant pump 1** (and sometimes pump 2 on dual-motor cars) handles the drive unit and inverter loop

The pump assembly on older Model S/X includes a rubber isolator (vibration mount). When you remove the pump, the isolator comes off as a unit with it. Make sure the new pump includes the isolator, or transfer the old one if it's in good shape.

The drain and fill process is the same concept, but the hose routing and access is different. The Tesla service manual for your specific year is worth consulting here because Model S went through several cooling system revisions over the years.

## Part compatibility between Model 3 and Model Y

Model 3 and Model Y share many cooling system components, including coolant pumps. If you're buying a used pump, check the part number in Tesla's Electronic Parts Catalog (EPC) to confirm compatibility for your specific build year and drive configuration.

One thing to watch: Model Y hoses can be longer than Model 3 hoses where they connect to the pump area. The pump itself is the same, but if you're buying a pump with attached hoses from a different model, the hoses might not fit without modification.

## When to call a professional

This job is doable in a home garage, but there are situations where professional help makes more sense:

- If you get persistent air-lock issues after multiple bleed attempts. Tesla Service Centers have a powered vacuum fill tool that purges the entire system much more thoroughly than a consumer vacuum fill kit.
- If you suspect the supermanifold itself is cracked or damaged. Replacing the supermanifold is a bigger job that involves disconnecting refrigerant lines (heat pump cars), which requires proper R-1234yf recovery equipment.
- If you're seeing multiple THC fault codes that point to different components failing simultaneously. That usually means the problem is bigger than just a pump.

## Preventing pump failures

Tesla coolant pumps are designed to last the life of the car, but a few things can shorten their lifespan:

- **Low coolant level** makes the pump work harder and can cause cavitation (air bubbles collapsing inside the pump), which damages the impeller over time. Check your coolant level once or twice a year.
- **Contaminated coolant** from using the wrong type or mixing types. Stick to G-48 and nothing else.
- **Debris in the system** from a previous repair where particles got into the coolant loop. Always flush after any cooling system work that could introduce contamination.

If you notice your coolant level dropping slowly with no visible leak, investigate early. A small weep at a pump O-ring or hose fitting is much cheaper to fix than a pump that burned out from running dry.

## Related guides

- [Tesla Coolant Flush & Change: Complete DIY Guide](/posts/tesla-coolant-flush-change/)
- [Tesla Coolant Leak: How to Find & Fix It](/posts/tesla-coolant-leak-fix/)
- [Tesla Heat Pump Problems: Diagnosis & Solutions](/posts/tesla-heat-pump-problems/)
- [Tesla Superbottle Replacement Guide](/posts/tesla-superbottle-replacement/)
- [Tesla Battery Coolant Valve Replacement](/posts/tesla-battery-coolant-valve-replacement/)
- [Tesla Service Mode Guide](/posts/tesla-service-mode-guide/)

## FAQ

**Can I drive with a failed coolant pump?**
Not for long. The car may let you drive in a reduced power state, but the battery and drive unit will overheat without proper cooling. Continuing to drive risks permanent damage to expensive components. Get it fixed promptly.

**Do I need to reset anything after replacing the pump?**
Exiting Service Mode typically clears the active fault codes. If alerts persist after a successful replacement and bleed, try a [scroll wheel reboot](/posts/tesla-screen-frozen-reboot/) (hold both scroll wheels for 10 seconds). Persistent codes after that warrant a diagnostic scan.

**Can I use an aftermarket coolant pump?**
Aftermarket options exist but are limited for Tesla. Most people use OEM Tesla pumps (new or used). If you go aftermarket, verify the flow rate and connector match the OEM spec. A pump with the wrong flow rate can cause thermal management issues even if it physically fits.

**How long does this job take?**
Plan for 2-4 hours including the coolant drain, pump swap, refill, and bleed process. Experienced techs do it faster, but the bleed cycle alone can take 30+ minutes. Don't rush the bleed.
