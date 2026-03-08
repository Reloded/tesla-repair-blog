---
layout: post.njk
title: "Tesla Service Mode: How to Access It, What It Unlocks & When You Need It (2026 Guide)"
description: "Tesla Service Mode gives you access to diagnostics, brake burnishing, camera calibration, and more. Learn how to activate it on Model 3, Model Y, Model S, and Model X — step by step."
date: 2026-02-26
category: "Maintenance"
difficulty: "Easy"
readTime: "10 min read"
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

**If you've ever needed to diagnose a strange warning, calibrate cameras after a windshield replacement, or check your high-voltage battery health — Tesla's built-in Service Mode is the tool you didn't know you had.** It's a hidden diagnostic menu accessible from the touchscreen, and it doesn't require any special tools or subscriptions.

<div class="tip-box">
<strong>Quick answer:</strong> Access Service Mode by going to <strong>Controls → Software</strong>, then <strong>touch and hold the word "MODEL"</strong> (the large text under the vehicle image) for about 5 seconds. When prompted, enter the access code <strong>service</strong> (all lowercase) and tap Enable. A red border appears around the screen, and a red wrench icon appears in the dock. Available on all Tesla models.
</div>

## What Is Tesla Service Mode?

Service Mode is a built-in diagnostic and maintenance utility hidden in every Tesla. It's the same tool Tesla Service Centers use daily — and unlike most other car manufacturers, Tesla doesn't lock it behind a dealer subscription or special hardware.

When Service Mode is active:

- A **red border** appears around the touchscreen edges
- A **red wrench icon** appears in the app dock
- You get access to **diagnostics, calibrations, service alerts, and system tests**
- Certain safety features may behave differently

Service Mode is not the same as Jack Mode (that's in the normal vehicle menus) or Transport Mode (for towing). It's a full diagnostic interface with dozens of tools.

## How to Access Service Mode

### Step-by-Step (All Models)

This works on Model 3, Model Y, Model S, Model X, and Cybertruck. Options vary by model, features, and year.

1. **Park the vehicle** and keep it powered on
2. Go to **Controls** (the car icon at the bottom of the screen)
3. Tap **Software**
4. Find the vehicle image and model badge (e.g., "MODEL Y Long Range")
5. **Touch and hold the large word "MODEL"** for about 5 seconds, then release
6. A dialog appears: "Please enter access code"
7. Type **service** (all lowercase) and press **OK**
8. A Service Mode warning dialog appears — tap **Enable**

After a couple of seconds, the red border appears and Service Mode is active.

<div class="warning-box">
<strong>⚠️ Important:</strong> Do NOT drive the vehicle in Service Mode. Many safety features are disabled or behave differently while active. Exit Service Mode before driving.
</div>

### Exiting Service Mode

1. Tap the **red wrench icon** in the dock (or find it in All Apps)
2. In the service menu, scroll to the bottom of the left navigation
3. Tap the red **"Exit Service Mode"** button
4. **Press and hold** for about 5 seconds to confirm

The red border disappears and normal operation resumes.

### Alternative: Tesla Toolbox 3

Tesla technicians can also enable Service Mode using a laptop running Toolbox 3, connected to the vehicle's diagnostic port. This is primarily for service centers and isn't needed for DIY work — the touchscreen method gives you access to the same features.

## What Service Mode Unlocks

### 📋 Vehicle Info

Shows basic vehicle details plus six function buttons and a list of system areas. Useful for:
- Confirming VIN, software version, and configuration
- Checking module firmware versions
- Identifying installed hardware (AP computer version, battery type, etc.)

### 🚨 Service Alerts

View all active and historical service alerts in two categories:

- **Service-Fix** — technical alerts including both important issues and minor non-issues
- **Customer** — alerts that appear on the main display during normal driving

Tap any alert for details. Some common alerts in older vehicles (like `thc_w0134_radrightshutrnofeedbk`) are unimportant aero shutter errors that Tesla service typically ignores.

### 🛑 Brake Burnishing

**When you need it:** After replacing [brake pads](/posts/tesla-brake-pad-replacement/) or [brake rotors](/posts/tesla-brake-rotor-replacement/).

New pads need to be "bedded in" — smoothed against the rotors through controlled braking. Service Mode's brake burnishing function:
- Guides you through the burnishing procedure
- **Disables regenerative braking** so only friction brakes are used
- Ensures even pad-to-rotor contact

This is critical for proper brake feel and stopping power after a brake job.

### 🔧 Service Settings

A long, scrollable list of vehicle settings that are normally limited or disabled while in Service Mode. You can override specific settings when working on a particular system. This prevents Service Mode from interfering with the exact component you're servicing.

### 📱 Touch Check

Diagnostic tool for the touchscreen itself. If the touch panel is damaged and creating phantom touch events:
- Fake touches appear as small **red X** marks on screen
- Tap anywhere to verify touch input is registering correctly
- Useful for diagnosing [touchscreen issues](/posts/tesla-screen-frozen-reboot/) before deciding on replacement

### 📷 Driver Assist (Cameras & Sensors)

Two sections: **Cameras** and **Sensors**.

**Cameras:**
- Check status of all DAS (Driver Assist System) cameras
- Green dot = camera functioning normally
- **Preview each camera feed** — useful for checking alignment
- **Calibrate front cameras** — essential after windshield replacement

**Sensors** (depending on hardware):
- Radar status (pre-Tesla Vision vehicles)
- Ultrasonic sensor status and calibration (if equipped)
- ECU status
- GPS status and satellite count

**Related guide:** [Autopilot Camera Calibration](/posts/tesla-autopilot-camera-calibration/)

### 🔋 High Voltage

Four sections with detailed EV-specific diagnostics:

**Charging:**
- Charge type and status
- Charge port details and connector state

**HV System:**
- Status of all high-voltage systems
- Internal and external isolation resistance (should be well above minimum thresholds)

**HV Battery:**
- Cell voltage ranges and temperatures
- State of health information
- Charge cycle data

**HVIL (High Voltage Interlock Loop):**
- Safety circuit status — confirms all HV connections are properly sealed

<div class="warning-box">
<strong>⚠️ High voltage warning:</strong> The HV battery is always live, even in Service Mode. These diagnostics are for <strong>viewing information only</strong>. Never disconnect or touch orange HV cables or components unless you are specifically trained for high-voltage EV work.
</div>

### 📡 Infotainment

Three sections:

**Connectivity:** WiFi and cellular connection status and signal strength.

**Software:** Shows memory Bank A and Bank B for the three major software modules — Infotainment, Autopilot, and Maps. New updates install to the unused bank, then the system switches to it.

**ECU Update Status:** Shows which Electronic Control Units were last updated and in which software version.

### 💻 Software Reinstall

Reinstalls the current software version (does **not** upgrade or downgrade). Used when:
- Replacing certain ECUs that need to sync with vehicle software
- Software corruption suspected
- **Not** for computer (MCU/HW) replacements — those have a separate procedure

### 📝 Release Notes

Service Mode has its own release notes, separate from the customer-facing software release notes. You can select a software version on the left and scroll through the changes — useful for understanding what diagnostic capabilities were added.

## Common DIY Scenarios

| Repair | Service Mode Needed? | What You'll Use |
|--------|---------------------|-----------------|
| [Brake pad replacement](/posts/tesla-brake-pad-replacement/) | ⚠️ Recommended | Brake burnishing after install |
| [Brake rotor replacement](/posts/tesla-brake-rotor-replacement/) | ⚠️ Recommended | Brake burnishing after install |
| Windshield replacement | ✅ Yes | Camera calibration |
| Diagnosing warnings | ✅ Yes | Service Alerts, HV diagnostics |
| [Touchscreen issues](/posts/tesla-screen-frozen-reboot/) | ⚠️ Helpful | Touch Check diagnostic |
| Camera alignment check | ✅ Yes | Driver Assist camera preview |
| Checking battery health | ✅ Yes | HV Battery diagnostics |
| [Brake fluid change](/posts/tesla-brake-fluid-change/) | ❌ No | Standard procedure, no Service Mode |
| [Jacking up the car](/posts/tesla-jack-points-lifting-guide/) | ❌ No | Jack Mode is in normal Controls menu |
| [Window calibration](/posts/tesla-window-reset-calibration/) | ❌ No | Available in normal Service menu |
| Tire rotation | ❌ No | Standard procedure |

## Service Mode vs. Jack Mode vs. Transport Mode

People sometimes confuse these. Here's the difference:

**Service Mode** — Full diagnostic interface for technicians and DIYers. Hidden menu with access code. Shows detailed system status, allows calibrations, brake burnishing, and more. Don't drive with it active.

**Jack Mode** — Found in the normal vehicle menus (Controls → Service or Suspension settings on air suspension vehicles). Raises the car to a set height and locks the suspension so it won't auto-level while on a [jack or lift](/posts/tesla-jack-points-lifting-guide/). Model 3/Y with coil springs don't need it but it's available.

**Transport Mode** — For towing and flatbed loading. Releases the parking brake and puts the car in neutral/tow mode so the car can roll freely without driving it.

**Power Off** — Controls → Safety → Power Off. Shuts down all systems. Car wakes when you open a door or press the brake. Useful for [frozen screen](/posts/tesla-screen-frozen-reboot/) situations.

## Safety Warnings

<div class="warning-box">
<strong>⚠️ Important safety notes:</strong>

<ul>
<li><strong>Don't drive in Service Mode.</strong> Safety features are disabled or altered. Always exit before driving.</li>
<li><strong>The high-voltage battery is always live</strong> — even in Service Mode. Don't touch orange cables or HV components.</li>
<li><strong>Be careful with calibration functions.</strong> Incorrect calibration of cameras or sensors can affect Autopilot and safety systems. If unsure, leave it to a professional.</li>
<li><strong>Service Mode is view-only for most things.</strong> You can look at diagnostics without risk. The dangerous actions (like software reinstall) have their own confirmations.</li>
<li><strong>When working under the car,</strong> always use jack stands — never rely on a jack alone. See our <a href="/posts/tesla-jack-points-lifting-guide/">jack points guide</a> for safe lifting locations.</li>
</ul>
</div>

## Frequently Asked Questions

**Is the access code always "service"?**
Yes, on all current Tesla vehicles. It's the same for everyone — Tesla doesn't restrict access to Service Mode. The code is documented in Tesla's own public service manual.

**Will using Service Mode void my warranty?**
No. Service Mode is a normal vehicle function that Tesla Service Centers use daily. What matters is the quality of work performed, not whether you accessed the diagnostic tools.

**Can I break something by exploring Service Mode?**
Mostly no. The diagnostic screens are read-only — you're just viewing information. Calibration functions and software reinstall have their own confirmation steps and warnings. Don't run calibrations unless you have a specific reason to.

**Does Service Mode disable Sentry Mode?**
Not automatically. It's a good idea to disable Sentry Mode manually before working on the car to avoid false alarms.

**Do I need WiFi or cellular to use Service Mode?**
No. Service Mode runs entirely on-vehicle. Some features (like checking for software updates) obviously need connectivity, but the diagnostic tools work offline.

**Is Service Mode available on older MCU1 vehicles?**
Yes, though the interface and available features may differ. On very old software versions, some functions may be more limited. Updating to the latest available software is recommended.

## Wrapping Up

Service Mode is one of the best things about owning a Tesla from a DIY perspective. While other manufacturers charge hundreds for dealer diagnostic software subscriptions, Tesla gives you a full diagnostic suite built into the car — no adapters, no subscriptions, no dealer appointment.

Even if you never plan to wrench on your car, knowing how to access Service Mode is valuable. Checking service alerts, previewing camera feeds, and monitoring battery health can catch problems early — before they become expensive.

<div class="tip-box">
<strong>💡 Pro tip:</strong> Take screenshots of the Service Alerts and HV Battery screens periodically (use the vehicle's screenshot function). This gives you a baseline to compare against if issues appear later. It's also useful when discussing problems with Tesla service or independent shops.
</div>

---

*This guide is based on Service Mode as documented in Tesla's public service manuals and confirmed across multiple Tesla models. Menu options and available features vary by model, year, and software version. Information verified against service.tesla.com documentation and community sources (TeslaTap, NotATeslaApp) as of February 2026.*

## Related Guides

- [Tesla Jack Points & Lifting Guide: How to Safely Jack Up Any Tesla](/posts/tesla-jack-points-lifting-guide/) — Easy · Maintenance
- [Tesla 2026.2.3 Update: Hidden Features, Battery Recalibration, Autopark & Service Mode Changes](/posts/tesla-2026-2-3-software-update-features/) — Easy · Software & Tech
- [Tesla Windshield Wiper Replacement: 5-Min DIY Guide + Correct Sizes](/posts/tesla-windshield-wiper-replacement/) — Easy · Maintenance
- [Tesla Brake Fluid Change: DIY Guide to Bleeding & Flushing Your Brakes](/posts/tesla-brake-fluid-change/) — Intermediate · Brakes
- [Tesla Coolant Flush & Change: Complete DIY Guide](/posts/tesla-coolant-flush-change/) — Medium · Model 3, Model Y, Model S, Model X · Cooling System
- [Tesla Door Seal Maintenance: Prevent Wind Noise](/posts/tesla-door-seal-maintenance/) — Easy · Maintenance
- [Tesla Headlight Replacement: Complete DIY Guide (Model 3, Y, S, X)](/posts/tesla-headlight-replacement/) — Moderate
- [Tesla Camera Calibration: How to Recalibrate Autopilot Cameras](/posts/tesla-autopilot-camera-calibration/) — Easy · Autopilot
- [Tesla Battery Degradation: How to Check Health & Maximize Lifespan](/posts/tesla-battery-degradation-health/) — Easy · Battery
- [Tesla Phantom Braking Issue: 5 Proven Fixes](/posts/tesla-phantom-braking-fix/) — Easy · Autopilot & Safety
