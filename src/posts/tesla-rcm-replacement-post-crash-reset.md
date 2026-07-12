---
layout: post.njk
title: "Tesla RCM Replacement & Post-Crash Reset (Toolbox)"
description: "After airbag deployment, the Tesla RCM must be replaced and post-crash data cleared in Toolbox. A collision tech's walkthrough — order, safety, pitfalls."
date: 2026-07-12
category: "Collision Repair"
difficulty: "Professional"
readTime: "9 min read"
models: "Model 3, Model Y, Model S, Model X"
emoji: "🛠️"
faq:
  - q: "What is a Tesla RCM?"
    a: "The RCM (Restraint Control Module) is Tesla's airbag/restraint control unit. It fires the airbags and seatbelt pretensioners in a crash and records the crash event. After a deployment it holds a post-crash state that has to be resolved before the restraint system will reset."
  - q: "Do you have to replace the RCM after a Tesla crash?"
    a: "When airbags have deployed, the standard collision-repair procedure is to fit a new RCM and then clear the post-crash data with Tesla Toolbox — not to reuse the deployed module. Tesla's SRS documentation also requires replacing deployed pyrotechnic components and inspecting related parts."
  - q: "Where is the RCM located on a Tesla?"
    a: "On almost every model, old to new, the RCM sits under the center console. You remove the console to reach it. Access is similar across Model 3, Y, S and X, though console fasteners and trim differ by model and year."
  - q: "Can you reset a Tesla RCM without Toolbox?"
    a: "No. Clearing the RCM / post-crash restraint data requires Tesla Toolbox (Tesla's official diagnostic software, subscription-based at toolbox.tesla.com). There is no owner-side menu that clears it."
  - q: "How much does Tesla Toolbox access cost?"
    a: "As of 2026, Tesla cut Toolbox subscription pricing dramatically — roughly $700/year in the US (down from $3,000), with short-term day passes also available. For a shop that sees even a few Teslas a year, it pays for itself on the first job."
  - q: "What order do you do the RCM job in?"
    a: "Power the car fully down — 12V (LV) and HV both off — remove the console, swap the RCM, power up, then run a software reinstall. Only after the reinstall do you clear the RCM post-crash state in Toolbox. Doing the clear before the reinstall is the classic mistake."
---

**After a Tesla has been in a collision and the correct new parts are on the car, the single most critical electronic step before handoff is the RCM — the Restraint Control Module.** If the airbags fired, that module is holding a post-crash state, and the restraint system will not reset until the module is replaced and the crash data is cleared properly with Toolbox. This is the workflow we use in our collision shop, in the order that actually works.

<div class="warning-box">
<strong>This is a professional procedure.</strong> You're working on the airbag/restraint system — pyrotechnic devices that can cause serious injury if mishandled — and around high voltage. Tesla's own service documentation warns that disturbing the RCM with 12V power connected can <strong>deploy the airbags</strong>. This guide documents the process for collision technicians and shops with <a href="https://toolbox.tesla.com/" target="_blank" rel="noopener">Tesla Toolbox</a> access; it is not a DIY job.
</div>

## What the RCM does — and why a crash locks it

The RCM is the brain of Tesla's passive safety system. It reads the crash sensors, fires the airbags and seatbelt pretensioners, and writes a record of the event. Once it registers a deployment, it holds a **post-crash state**. Until that's resolved you'll have restraint-system warnings on the screen, and the car isn't safe — or legal — to hand back to a customer.

For a car that actually deployed, the fix isn't to "reset" the old module — it's a **new RCM, then a Toolbox clear**. (You'll find mail-in "RCM reset" services online; in a professional collision workflow the deployed module gets replaced.) Tesla's own [SRS inspection documentation](https://service.tesla.com/docs/ModelY/ServiceManual/2025/en-us/GUID-45F75A2C-4B2C-439C-88BC-EB28D0D16B1B.html) is clear that deployed pyrotechnic components must be replaced and related components inspected.

## Don't confuse the two "post-crash" clears

This trips up shops new to Tesla. A crashed Tesla can be holding **two different post-crash conditions**:

1. **Post-crash load shedding** — the vehicle controller cuts low-voltage systems after a collision so the car "plays dead." On recent firmware there's a documented routine to clear this (Tesla's ODIN routine for post-crash load shedding) once you've confirmed the car is safe to re-energize. This is about *getting the car to power up*.
2. **The RCM post-crash state** — the restraint system's record of the deployment. This is what this guide is about, and clearing it **requires Toolbox** and (after a deployment) a new module.

Clearing the load shed gets you a car that powers on. It does *not* reset the restraint system.

## Before you start

- **Tesla Toolbox access** — required for the software reinstall and the clear. Subscriptions are at [toolbox.tesla.com](https://toolbox.tesla.com/); pricing dropped to roughly $700/year in the US (from $3,000), with day passes for occasional jobs. No Toolbox, no reset — there is no workaround.
- **The correct new RCM** for the exact model and year. OEM restraint parts only — this is the one place on the car where a questionable part is never worth it. (Our shop sources through <a href="https://rrcarparts.com" target="_blank" rel="noopener">RR Car Parts</a>, which stocks genuine Tesla collision parts for EU shops.)
- **Basic hand tools** for the center console and trim.
- A fully de-energized car — next step.

## Step 1 — Power the car down: LV and HV off

All of this work happens with the car fully de-energized — **both** the 12V/low-voltage system **and** the high-voltage system off. Tesla's service documentation is explicit on the why: if 12V power is still connected and the RCM is removed or disturbed, the airbags can deploy. Follow Tesla's power-down procedure for the specific model before touching anything under the console.

## Step 2 — Remove the center console to reach the RCM

The RCM lives **under the center console** on essentially every model, old to new — that's the one consistent thing about this job. The console has to come out to get to it. The approach is similar across Model 3, Y, S and X, but the fastener count, clip locations and trim differ by model and year, so pull the console procedure for the exact car in the service manual (Tesla publishes them at [service.tesla.com](https://service.tesla.com/)) rather than working from memory of a different model.

## Step 3 — Swap the RCM

With the console out and the module exposed: disconnect, remove, and fit the new unit in the same orientation. Make sure every connector is **fully seated and locked** — a partially seated restraint connector will throw its own fault and send you hunting a problem you created.

## Step 4 — Software reinstall

A new RCM has to be brought into the car's configuration. Once the module is in and the car is powered back up, run a **software reinstall** through Toolbox. Don't skip this and don't reorder it — the clear in the next step won't take correctly until the car and the new module are talking properly.

## Step 5 — Clear the RCM post-crash data in Toolbox

Only after the software reinstall do you clear the RCM. In Toolbox, run the post-crash / restraint clearing routine for the module. This is the step that actually resets the restraint system.

**The order matters: new module → software reinstall → clear.** Trying to clear first is the classic sequence mistake on this job.

## Step 6 — Verify before handoff

Confirm the airbag/restraint warnings are gone and no restraint faults remain — check [Service Mode's service alerts](/posts/tesla-service-mode-guide/) as a final pass. Anything still flagged usually points to a connector that isn't fully seated or a related restraint component that wasn't addressed (Tesla's SRS documentation lists what must be replaced vs. inspected after a deployment). In practice, anyone with Toolbox access has the resources to chase down what's left — but the car doesn't leave the shop until the restraint system is clean.

## A note for body shops that don't specialize in Tesla

If you're a body shop handling your first crashed Tesla: the panel and paint work is the familiar part. The RCM post-crash reset is the step that catches shops out, because there's no owner-facing or generic-scan-tool way to do it — it genuinely needs Toolbox and the right new module. Two options: buy a Toolbox day pass and do it in-house, or sub this step out to a Tesla-experienced shop. Either is fine; handing the car back with a restraint fault is not.

## Related guides

- [Tesla Service Mode Guide](/posts/tesla-service-mode-guide/) — reading service alerts and running camera calibration after reassembly
- [Tesla Pyrofuse Explained](/posts/tesla-pyrofuse-guide/) — the other safety-critical device that can trip in a collision
- [Tesla Won't Start or Turn On](/posts/tesla-wont-start-turn-on/) — first checks on a car that's been sitting after a wreck
- [Tesla Front Bumper Removal](/posts/tesla-front-bumper-removal/) — pre-paint teardown, clip by clip
