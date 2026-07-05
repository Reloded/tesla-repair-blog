<!--
  DRAFT — not published. Lives in .planning/drafts/ so Eleventy never builds it.
  To publish: (1) fill the [OWNER: …] gaps below, (2) delete this comment and the
  "Editor notes" block, (3) move this file to src/posts/, (4) set draft: false.

  EDITOR NOTES — specifics to add before publish (only you know these; I won't invent them):
  - Console removal: how many fasteners / clip types, and any model-year differences (pre-2021 vs Highland/Juniper).
  - Any torque values you actually use on the RCM bracket / console.
  - Toolbox: the exact routine name(s) you run for "software reinstall" and "clear RCM / post-crash".
  - Part sourcing: is the RCM VIN-matched? New-only, or can it be a used coded unit? (affects the buying section)
  - Anything that commonly goes wrong + your real fix (this is the gold — one or two war stories).
-->
---
layout: post.njk
title: "Tesla RCM Replacement & Post-Crash Reset (Toolbox)"
description: "After a Tesla crash or airbag deployment, the restraint control module (RCM) must be replaced and its post-crash data cleared in Toolbox. Pro collision walkthrough."
date: 2026-07-04
category: "Collision Repair"
difficulty: "Professional"
readTime: "9 min read"
models: "Model 3, Model Y, Model S, Model X"
emoji: "🛠️"
draft: true
faq:
  - q: "What is a Tesla RCM?"
    a: "The RCM (Restraint Control Module) is Tesla's airbag/restraint control unit. It fires the airbags and seatbelt pretensioners in a crash and records the crash event. After a deployment or recorded impact it stores a post-crash state that has to be cleared before the restraint system will reset."
  - q: "Do you have to replace the RCM after a Tesla crash?"
    a: "When airbags have deployed or the module has logged a crash, the standard collision-repair procedure is to fit a new RCM and then clear the post-crash data — not just clear the old one. A module that has recorded a deployment should be replaced."
  - q: "Where is the RCM located on a Tesla?"
    a: "On almost every model, old to new, the RCM sits under the center console. You remove the console to reach it. Access is similar across Model 3, Y, S and X, though the console fasteners differ by model and year."
  - q: "Can you reset a Tesla RCM without Toolbox?"
    a: "No. Clearing the RCM / post-crash data requires Tesla Toolbox 3 (Tesla's official web-based service software, which needs a paid subscription). There is no owner-side menu that clears it."
  - q: "What order do you do the RCM job in?"
    a: "Power the car fully down — 12V (LV) and HV both off — remove the console, swap the RCM, then power up and do a software reinstall. Only after the reinstall do you clear the RCM / post-crash state in Toolbox."
---

**After a Tesla has been in a collision and the correct parts are back on the car, the single most critical electronic step before handoff is the RCM — the Restraint Control Module.** If the airbags fired or the car logged a crash, that module is holding a post-crash state, and the restraint system will not reset until it's replaced and cleared properly. Here's the workflow we use in the shop.

<div class="warning-box">
<strong>This is a professional procedure.</strong> You're working on the airbag/restraint system — pyrotechnic devices that can cause serious injury if mishandled — and around high voltage. It requires <strong>Tesla Toolbox 3</strong> access and proper training. This guide documents the process for collision technicians and shops; it is not a casual DIY job.
</div>

## What the RCM does — and why a crash locks it

The RCM is the brain of Tesla's passive safety system. It reads the crash sensors, fires the airbags and seatbelt pretensioners, and writes a record of the event. Once it registers a deployment or a qualifying impact, it holds a **post-crash / crash-recorded state**. Until that's resolved, you'll have restraint-system warnings and the airbag light on, and the car isn't safe to hand back.

For a car that actually deployed, the fix isn't to "reset" the old module — it's to fit a new RCM and then clear the post-crash data with Toolbox.

## Before you start

- **Tesla Toolbox 3 access** (subscription) — required for the software reinstall and the clear. No Toolbox, no reset.
- **The correct new RCM** for the exact model and year. <!-- [OWNER: note whether it's VIN-matched / new-only vs a coded used unit] --> OEM restraint parts are what RR Car Parts stocks, and fitting the right part number matters here more than almost anywhere on the car.
- **Basic hand tools** to remove the center console and trim.
- A safe, powered-down car (next step).

## Step 1 — Power the car down: LV and HV off

Do **all** of this work with the car fully de-energized — **both** the 12V/low-voltage system **and** the high-voltage system off. You do not open up restraint electronics on a live car. Follow Tesla's power-down procedure for the model you're on before you touch anything under the console.

<!-- [OWNER: if you want, add the exact power-down sequence you follow — first responder loop / HV disconnect / 12V disconnect order] -->

## Step 2 — Remove the center console to reach the RCM

The RCM lives under the center console on essentially every model, so the console has to come out to get to it. The approach is similar across Model 3, Y, S and X, but the fasteners and trim clips differ by model and year.

<!-- [OWNER: fill in — number/type of fasteners, clip locations, any Highland/Juniper differences, gotchas] -->

## Step 3 — Swap the RCM

With the console out and the module exposed, disconnect the RCM, remove it, and fit the new unit in the same orientation. Make sure every connector is fully seated — a partially seated restraint connector will throw its own fault.

<!-- [OWNER: torque values you use on the bracket, connector locking tabs, anything easy to get wrong] -->

## Step 4 — Software reinstall

A new RCM has to be brought into the car's configuration. Once the module is in and the car is powered back up, run a **software reinstall** through Toolbox. Don't skip this — the clear in the next step won't take correctly until the car and the new module are on the same page.

<!-- [OWNER: exact Toolbox routine name you run for the reinstall] -->

## Step 5 — Clear the RCM / post-crash data in Toolbox

Only after the software reinstall do you clear the RCM. In Toolbox, run the routine that clears the post-crash state on the restraint module. This is the step that actually resets the system.

<!-- [OWNER: exact Toolbox routine / menu name for the clear] -->

## Step 6 — Verify before handoff

Confirm the airbag/restraint warning is gone and there are no lingering restraint faults. Anything still flagged usually points to a connector that isn't fully seated or a related part that wasn't addressed. In practice, if you have Toolbox access you have the knowledge to chase down whatever's left — but the car doesn't leave until the restraint system is clean.

## A note for shops that don't specialize in Tesla

If you're a body shop handling a Tesla for the first time: the panel and paint work is the easy part. The RCM/post-crash reset is the step that catches people out, because there's no owner-facing way to do it — it genuinely needs Toolbox and the right new part. If you don't have Toolbox access, this is the step to sub out to someone who does.

## Related guides

- [Tesla Pyrofuse Explained](/posts/tesla-pyrofuse-guide/) — the other safety-critical device that can trip in a collision
- [Tesla Service Mode Guide](/posts/tesla-service-mode-guide/) — reading service alerts and camera calibration after reassembly
- [Tesla Won't Start or Turn On](/posts/tesla-wont-start-turn-on/) — powering up a car that's been sitting after a wreck
- [Tesla Front Bumper Removal](/posts/tesla-front-bumper-removal/) — pre-paint teardown
