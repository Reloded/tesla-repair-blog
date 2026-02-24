---
layout: post.njk
title: "Tesla Service Mode: How to Enable It, What It Unlocks & When You Need It (2025 Guide)"
description: "Tesla Service Mode gives you access to jack mode, brake maintenance, window calibration, and more. Learn how to activate it on Model 3, Model Y, Model S, and Model X — step by step."
date: 2026-02-24
category: "Maintenance"
difficulty: "Easy"
readTime: "8 min read"
models: "Model 3, Model Y, Model S, Model X"
emoji: "🔧"
draft: false
tools:
  - name: "Tesla Jack Pad Adapter"
    link: "https://www.amazon.de/s?k=tesla+jack+pad+adapter&tag=diyrepair-21"
  - name: "OBD2 Diagnostic Scanner (Tesla Compatible)"
    link: "https://www.amazon.de/s?k=obd2+scanner+tesla&tag=diyrepair-21"
  - name: "iFixit Pro Tech Toolkit"
    link: "https://sovrn.co/mqnnvon"
    provider: "ifixit"
---

**If you've ever tried to jack up your Tesla and the air suspension fought back, or attempted a brake job only to realize you can't retract the electronic parking brake — Service Mode is what you're missing.** It's Tesla's built-in maintenance mode that unlocks features you need for DIY repairs, and it's accessible right from the touchscreen.

<div class="tip-box">
<strong>Quick answer:</strong> Service Mode is accessed via the touchscreen by navigating to <strong>Controls → Service → Service Mode</strong> (pre-2024) or <strong>Controls → Software → Service Mode</strong> (2024+ vehicles). It disables air suspension leveling, enables jack mode, allows brake service functions, and gives access to diagnostic information. No special tools or passwords required on most vehicles.
</div>

## What Is Tesla Service Mode?

Service Mode is a built-in software feature on all Tesla vehicles that changes how certain systems behave so you can safely work on the car. Think of it as telling the car: "Hey, I'm doing maintenance — stop trying to be smart for a minute."

When Service Mode is active, the car:

- **Stops auto-leveling** the air suspension (Model S/X) so you can safely jack it up
- **Enables Jack Mode** to prevent the suspension from adjusting while on a lift
- **Gives access to brake service functions** (parking brake retraction, brake bleeding)
- **Shows additional diagnostic information** on the touchscreen
- **Disables certain safety features** that would interfere with maintenance
- **Allows window calibration** and other component resets

Without Service Mode, some repairs are either impossible or risk damaging the vehicle. Try jacking up a Model X without it, and the air suspension will keep trying to level itself — not fun.

## How to Enable Service Mode

The exact path depends on your vehicle's software version and model year, but here are the current methods:

### Method 1: Touchscreen (All Models, 2021+)

1. Park the vehicle and keep it powered on
2. Go to **Controls** (car icon at bottom left)
3. Tap **Service**
4. Tap **Service Mode**
5. You may need to enter a confirmation — tap **Enable**

On 2024+ Model 3 (Highland) and refreshed Model Y, the path may be:
1. **Controls → Software → Service Mode**

<div class="warning-box">
<strong>⚠️ Note:</strong> Some Service Mode functions require the vehicle to be in Park with the parking brake engaged. The car will warn you if conditions aren't met.
</div>

### Method 2: Touchscreen (Pre-2021 MCU1 Vehicles)

Older Model S and Model X with MCU1 (manufactured before March 2018) have a slightly different interface:

1. Tap the **Tesla "T"** logo at the top center of the screen
2. Hold for a few seconds until the software info appears
3. Navigate to **Service** options

On very early MCU1 software, some service functions may require a service login. If you see a password prompt, you may need a third-party OBD tool instead.

### Method 3: Third-Party OBD Tools

Tools like **Scan My Tesla**, **TeslFi**, or **OBDLink** can access service functions even on vehicles where the touchscreen method is limited:

- Connect an OBD2 dongle to the diagnostic port (under the center console trim on Model 3/Y)
- Open the companion app
- Navigate to service/maintenance functions

This is the fallback for older vehicles or if specific functions aren't available through the touchscreen.

## What Service Mode Unlocks

### 🔧 Jack Mode

**What it does:** Disables active air suspension height adjustments and locks the suspension at a specific height so the car won't move while on a jack or lift.

**Who needs it:** Anyone lifting a Model S or Model X with air suspension. Model 3 and Model Y with coil springs don't technically need it, but enabling it is still good practice — it disables some automatic responses.

**How to use it:**
1. Enable Service Mode
2. Select **Jack Mode** from the service menu
3. The car will raise to a set height and lock
4. You'll see a confirmation on screen — now it's safe to lift

**Related guide:** [Tesla Jack Points & Lifting Guide](/posts/tesla-jack-points-lifting-guide/) — where to place jacks safely on each model.

### 🛑 Brake Service Functions

This is where Service Mode really shines for DIY work:

**Electronic Parking Brake Retraction:**
- The rear calipers on Model 3/Y have an electronic parking brake motor built in
- To replace rear brake pads, you **must** retract the parking brake first
- Service Mode gives you a button to retract and re-engage it

**Brake Bleeding:**
- Service Mode enables the ABS module to cycle fluid through all four corners
- This makes [brake fluid changes](/posts/tesla-brake-fluid-change/) much more effective than manual bleeding alone

**Related guides:**
- [Tesla Brake Pad Replacement](/posts/tesla-brake-pad-replacement/) — front and rear, all models
- [Tesla Brake Rotor Replacement](/posts/tesla-brake-rotor-replacement/) — when pads aren't enough
- [Tesla Brake Fluid Change](/posts/tesla-brake-fluid-change/) — recommended every 2-4 years
- [Squeaky Brakes Fix](/posts/tesla-squeaky-brakes-fix/) — common causes and solutions

### 🪟 Window Calibration

After replacing a window regulator, disconnecting the 12V battery, or if your windows aren't auto-closing properly, you'll need to recalibrate:

1. Enter Service Mode
2. Select **Window Calibration**
3. Each window will cycle up and down automatically
4. Wait for the process to complete (about 30 seconds per window)

**Related guide:** [Tesla Window Reset & Calibration](/posts/tesla-window-reset-calibration/) — full walkthrough with troubleshooting.

### 📊 Diagnostic Information

Service Mode reveals additional data not normally visible:

- **Battery health details** — cell voltage ranges, temperature, charge cycles
- **Motor temperature** readings
- **Tire pressure sensor IDs** — useful when rotating tires or replacing TPMS sensors
- **Firmware versions** for individual modules (BMS, DI, AP computer)
- **Error codes** — active and stored DTCs (diagnostic trouble codes)

This information is invaluable for diagnosing issues before they become expensive problems.

### 🔄 Component Calibration

Beyond windows, Service Mode allows calibration of:

- **Steering angle sensor** — after alignment or suspension work
- **Accelerometer** — after leveling changes
- **Camera calibration** — related to [Autopilot camera calibration](/posts/tesla-autopilot-camera-calibration/)

## When You Need Service Mode: Common Scenarios

| Repair | Service Mode Required? | Why |
|--------|----------------------|-----|
| Brake pad replacement (rear) | ✅ Yes | Must retract electronic parking brake |
| Brake pad replacement (front) | ⚠️ Recommended | Not strictly required but helpful |
| Brake fluid change | ✅ Yes | ABS bleeding cycle needs Service Mode |
| Jacking up (air suspension) | ✅ Yes | Prevents suspension from auto-leveling |
| Jacking up (coil springs) | ⚠️ Recommended | Disables some automatic responses |
| Window calibration | ✅ Yes | Calibration tool is in Service Mode |
| 12V battery replacement | ⚠️ After | Recalibrate windows after reconnecting |
| Tire rotation | ❌ No | But helpful for TPMS ID reassignment |
| Wheel/tire change | ❌ No | Standard jack procedure works |
| [Touchscreen reboot](/posts/tesla-screen-frozen-reboot/) | ❌ No | Scroll wheel reset is separate |

## Safety Warnings

<div class="warning-box">
<strong>⚠️ Important safety notes:</strong>

<ul>
<li><strong>Never crawl under a Tesla supported only by a jack.</strong> Always use jack stands. The car is heavy (1,800–2,500 kg depending on model) and a jack failure is fatal.</li>
<li><strong>The high-voltage battery is always live</strong> even in Service Mode. Don't touch orange cables or components unless you're specifically trained for HV work.</li>
<li><strong>Service Mode doesn't disable the drivetrain completely.</strong> The car can still move if you accidentally tap the accelerator. Always use wheel chocks.</li>
<li><strong>Re-engage the parking brake</strong> after brake service. The car will remind you, but double-check before driving.</li>
<li><strong>Exit Service Mode when done.</strong> Some safety features are reduced while active. Don't drive in Service Mode.</li>
</ul>
</div>

## Service Mode vs. Transport Mode vs. Power Off

People sometimes confuse these three. Here's the difference:

**Service Mode** — For maintenance and repairs. Disables specific systems to allow safe work. Vehicle stays powered on with full touchscreen access.

**Transport Mode** — For towing and flatbed loading. Releases the parking brake and puts the car in neutral/tow mode. The car can roll freely. Used when the car needs to be moved without driving it.

**Power Off** — Accessed via Controls → Safety → Power Off. Shuts down all vehicle systems. The car will wake up again when you open a door or touch the brake pedal. Useful for [touchscreen freezes](/posts/tesla-screen-frozen-reboot/) but not needed for most service work.

## Model-Specific Notes

### Model 3 & Model Y
- Coil spring suspension (no jack mode needed, but available)
- Electronic parking brake on rear calipers — **Service Mode required for rear brake pads**
- OBD port under center console trim (left side)
- 2024+ Highland/Juniper may have slightly different menu paths

### Model S & Model X
- Air suspension models **must** use Jack Mode before lifting
- Older MCU1 vehicles may have limited touchscreen Service Mode access
- Model X falcon wing doors should be closed and locked before lifting
- [Falcon wing door window replacement](/posts/tesla-falcon-wing-door-window-replacement/) may require Service Mode for recalibration

## Frequently Asked Questions

**Can I drive in Service Mode?**
Technically the car will move, but don't. Safety features are reduced, and some systems behave differently. Always exit Service Mode before driving.

**Will Service Mode void my warranty?**
No. Accessing Service Mode is a normal function of the vehicle. Tesla Service Centers use it daily. What matters is the quality of the work you do, not whether you used Service Mode.

**Do I need a Tesla account to use Service Mode?**
No. Service Mode is accessed from the vehicle's touchscreen and doesn't require any account login on modern software versions.

**Can I get locked out of Service Mode?**
On very old software or MCU1, some functions may be restricted. A software update usually resolves this. If not, third-party OBD tools can access the same functions.

**Does Service Mode disable Sentry Mode?**
Service Mode doesn't automatically disable Sentry Mode, but it's a good idea to turn it off manually before working on the car — you don't want alarms going off while you're under it.

## Wrapping Up

Service Mode is one of those things that separates a frustrating Tesla DIY experience from a smooth one. The first time you try to do rear brakes without retracting the electronic parking brake, you'll understand why it exists.

The good news: it's free, built into every Tesla, and requires no special equipment to access. Just a few taps on the touchscreen and you're ready to work.

**Before you start any repair, check the table above** — if Service Mode is required, enable it first. It takes 10 seconds and saves you from fighting the car's automated systems.

<div class="tip-box">
<strong>💡 Pro tip:</strong> Take a photo of the diagnostic screen while in Service Mode before starting work. If something goes wrong or a warning light appears after your repair, you'll have a baseline to compare against.
</div>

---

*This guide covers Tesla Service Mode as of software version 2024.38+. Menu paths and available functions may vary on older software versions. When in doubt, update your vehicle's software before attempting maintenance.*
