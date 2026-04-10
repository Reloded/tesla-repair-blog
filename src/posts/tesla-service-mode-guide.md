---
layout: post.njk
title: "Tesla Service Mode: The Hidden Menu Most Owners Miss (2026)"
description: "Access Tesla's hidden Service Mode in 10 seconds — the same diagnostics menu technicians use. See live sensor data, test cameras, check battery health, and run system tests. No OBD tool needed."
date: 2026-02-26
lastUpdated: 2026-04-10
category: "Maintenance"
difficulty: "Easy"
readTime: "15 min read"
models: "Model 3, Model Y, Model S, Model X"
emoji: "🔧"
draft: false
faq:
  - q: "How do I access Tesla Service Mode?"
    a: "Go to Controls > Software, then touch and hold the word MODEL (the large text under the vehicle image) for 5 seconds. Enter the code 'service' when prompted. A red border confirms it's active."
  - q: "What can I do in Tesla Service Mode?"
    a: "Service Mode lets you run diagnostics, calibrate cameras, perform brake burnishing, check battery data, test individual components, and unlock features normally only accessible to Tesla technicians."
  - q: "Is Tesla Service Mode safe to use?"
    a: "Yes, Service Mode is designed for owner and technician use. However, only perform functions you understand - some actions like brake burnishing require specific procedures. Don't change settings unless you know the impact."
  - q: "Does Tesla Service Mode void warranty?"
    a: "Simply accessing Service Mode does not void your warranty. Tesla technicians use it routinely. However, if you make changes that cause damage, Tesla may not cover that specific issue under warranty."
asin_de: "B0D7F5F4HN"
asin_com: "B0BFFRV43G"
tools:
  - name: "Tesla Jack Pad Adapter"
    link: "https://www.amazon.de/dp/B08PVLZ8P6?tag=diyrepair-21"
    link_us: "https://www.amazon.com/s?k=tesla+jack+pad+adapter&tag=diyrepair07-20"
  - name: "OBDLink CX Scanner (Tesla Compatible)"
    link: "https://www.amazon.de/dp/B0D7F5F4HN?tag=diyrepair-21"
    link_us: "https://www.amazon.com/dp/B08NFNLKTK?tag=diyrepair07-20"
    asin_de: "B0D7F5F4HN"
    asin_com: "B08NFNLKTK"
  - name: "Multimeter (for voltage checks)"
    link: "https://www.amazon.de/s?k=automotive+multimeter+digital&tag=diyrepair-21"
    link_us: "https://www.amazon.com/s?k=automotive+digital+multimeter&tag=diyrepair07-20"
  - name: "iFixit Pro Tech Toolkit"
    link: "https://sovrn.co/1dw8w9g"
    provider: "ifixit"
  - name: "iFixit Plastic Pry Tools"
    link: "https://sovrn.co/mqnnvon"
    provider: "ifixit"
---

**If you've ever needed to diagnose a strange warning, calibrate cameras after a windshield replacement, or check your high-voltage battery health - Tesla's built-in Service Mode is the tool you didn't know you had.** It's a hidden diagnostic menu accessible from the touchscreen, and it doesn't require any special tools or subscriptions.

<div class="tip-box">
<strong>Quick answer:</strong> Access Service Mode by going to <strong>Controls → Software</strong>, then <strong>touch and hold the word "MODEL"</strong> (the large text under the vehicle image) for about 5 seconds. When prompted, enter the access code <strong>service</strong> (all lowercase) and tap Enable. A red border appears around the screen, and a red wrench icon appears in the dock. Available on all Tesla models.
</div>

## What Is Tesla Service Mode?

Service Mode is a built-in diagnostic and maintenance utility hidden in every Tesla. It's the same tool Tesla Service Centers use daily - and unlike most other car manufacturers, Tesla doesn't lock it behind a dealer subscription or special hardware.

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
8. A Service Mode warning dialog appears - tap **Enable**

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

Tesla technicians can also enable Service Mode using a laptop running Toolbox 3, connected to the vehicle's diagnostic port. This is primarily for service centers and isn't needed for DIY work - the touchscreen method gives you access to the same features.

## What Service Mode Unlocks

### 📋 Vehicle Info

Shows basic vehicle details plus six function buttons and a list of system areas. Useful for:
- Confirming VIN, software version, and configuration
- Checking module firmware versions
- Identifying installed hardware (AP computer version, battery type, etc.)

### 🚨 Service Alerts

View all active and historical service alerts in two categories:

- **Service-Fix** - technical alerts including both important issues and minor non-issues
- **Customer** - alerts that appear on the main display during normal driving

Tap any alert for details. Some common alerts in older vehicles (like `thc_w0134_radrightshutrnofeedbk`) are unimportant aero shutter errors that Tesla service typically ignores.

### 🛑 Brake Burnishing

**When you need it:** After replacing [brake pads](/posts/tesla-brake-pad-replacement/) or [brake rotors](/posts/tesla-brake-rotor-replacement/).

New pads need to be "bedded in" - smoothed against the rotors through controlled braking. Service Mode's brake burnishing function:
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
- **Preview each camera feed** - useful for checking alignment
- **Calibrate front cameras** - essential after windshield replacement

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
- Safety circuit status - confirms all HV connections are properly sealed

<div class="warning-box">
<strong>⚠️ High voltage warning:</strong> The HV battery is always live, even in Service Mode. These diagnostics are for <strong>viewing information only</strong>. Never disconnect or touch orange HV cables or components unless you are specifically trained for high-voltage EV work.
</div>

### 📡 Infotainment

Three sections:

**Connectivity:** WiFi and cellular connection status and signal strength.

**Software:** Shows memory Bank A and Bank B for the three major software modules - Infotainment, Autopilot, and Maps. New updates install to the unused bank, then the system switches to it.

**ECU Update Status:** Shows which Electronic Control Units were last updated and in which software version.

### 💻 Software Reinstall

Reinstalls the current software version (does **not** upgrade or downgrade). Used when:
- Replacing certain ECUs that need to sync with vehicle software
- Software corruption suspected
- **Not** for computer (MCU/HW) replacements - those have a separate procedure

### 📝 Release Notes

Service Mode has its own release notes, separate from the customer-facing software release notes. You can select a software version on the left and scroll through the changes - useful for understanding what diagnostic capabilities were added.

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

**Service Mode** - Full diagnostic interface for technicians and DIYers. Hidden menu with access code. Shows detailed system status, allows calibrations, brake burnishing, and more. Don't drive with it active.

**Jack Mode** - Found in the normal vehicle menus (Controls → Service or Suspension settings on air suspension vehicles). Raises the car to a set height and locks the suspension so it won't auto-level while on a [jack or lift](/posts/tesla-jack-points-lifting-guide/). Model 3/Y with coil springs don't need it but it's available.

**Transport Mode** - For towing and flatbed loading. Releases the parking brake and puts the car in neutral/tow mode so the car can roll freely without driving it.

**Power Off** - Controls → Safety → Power Off. Shuts down all systems. Car wakes when you open a door or press the brake. Useful for [frozen screen](/posts/tesla-screen-frozen-reboot/) situations.

## Safety Warnings

<div class="warning-box">
<strong>⚠️ Important safety notes:</strong>

<ul>
<li><strong>Don't drive in Service Mode.</strong> Safety features are disabled or altered. Always exit before driving.</li>
<li><strong>The high-voltage battery is always live</strong> - even in Service Mode. Don't touch orange cables or HV components.</li>
<li><strong>Be careful with calibration functions.</strong> Incorrect calibration of cameras or sensors can affect Autopilot and safety systems. If unsure, leave it to a professional.</li>
<li><strong>Service Mode is view-only for most things.</strong> You can look at diagnostics without risk. The dangerous actions (like software reinstall) have their own confirmations.</li>
<li><strong>When working under the car,</strong> always use jack stands - never rely on a jack alone. See our <a href="/posts/tesla-jack-points-lifting-guide/">jack points guide</a> for safe lifting locations.</li>
</ul>
</div>

## Reading the HV Battery Screen: What the Numbers Mean

The High Voltage Battery section in Service Mode is the most powerful feature for DIY battery diagnosis — but it's only useful if you know how to interpret what you're seeing.

### Cell Voltage Delta

This is the **most important number** on the HV Battery screen. It shows the spread between the highest and lowest cell voltages across the entire pack.

| Delta | Meaning | Action |
|-------|---------|--------|
| < 20 mV | Healthy, well-balanced pack | Nothing needed |
| 20–50 mV | Mild imbalance, often resolves with full charge cycles | Do a full 100% charge and leave plugged in for 2+ hours |
| 50–100 mV | Moderate imbalance | Try BMS recalibration; monitor over next few charges |
| > 100 mV | Significant cell imbalance or weak module | Contact Tesla service; may need module-level repair |
| > 200 mV | Bad cell or failing module | Do not ignore; schedule service |

**How to read it:** Navigate to Service Mode → High Voltage → HV Battery. Look for "Cell Voltage Min" and "Cell Voltage Max." Subtract Min from Max to get your delta. Capture a screenshot with the Tesla screengrab shortcut (hold both scroll wheels on the steering wheel).

### State of Health (SoH)

Some firmware versions show a direct SoH percentage. If visible:
- **95–100%:** Excellent — normal for first 2 years
- **85–95%:** Good — typical for 3–6 year old vehicle
- **75–85%:** Moderate degradation — still within warranty threshold of 70%
- **Below 70%:** Warranty claim territory if still within 8 years / mileage limit

If your firmware doesn't show SoH directly, the best proxy is to compare "Remaining Energy (kWh)" at 100% charge against your model's original rated capacity.

### Battery Temperature Readings

The HV Battery screen shows min, max, and average cell temperatures. Key thresholds:
- **Ideal operating range:** 15–35°C
- **Fast charging limited:** Below 10°C or above 40°C (car throttles Supercharger input automatically)
- **Thermal event warning:** Temperatures above 50°C during charging are abnormal — exit the Supercharger and allow the pack to cool

For more on how to optimize charging around temperature, see our [Battery Preconditioning Guide](/posts/tesla-battery-preconditioning-guide/).

---

## Decoding Common Service Alerts

The Service Alerts screen is where most owners get lost. There are hundreds of possible alerts, many of them logged once and never again. Here are the most common ones and what to do:

### Alerts to Ignore (Very Common)

**`thc_w0134_radrightshutrnofeedbk` / `thc_w0133_radleftshutrnofeedbk`**
Aero shutter feedback errors. Common on Model 3/Y with damaged or missing aero shutters. Tesla service typically clears these without action unless the shutters are visibly stuck. If your car has been in any minor front-end impact, check the grille area.

**`VCFRONT_a182_frontTrunkAjarFault`**
Frunk latch sensor intermittent fault. Usually clears itself after a full open-close cycle. If persistent, clean the latch sensor contacts with electrical contact cleaner.

**`BMS_w061_packCurrentNotAvailable`**
Transient BMS communication glitch. One occurrence is ignorable. If it recurs frequently, it can indicate a harness connection issue at the HV battery.

### Alerts That Need Attention

**`DI_a175_DIDie`** (Drive Inverter fault)
The drive inverter recorded an unexpected shutdown. May indicate cooling issues with the drive unit. Check for abnormal sounds or reduced power. See our [Drive Unit Noise Fix guide](/posts/tesla-drive-unit-noise-fix/).

**`CP_a004_pilotFault`** (Charge Port)
Charge port pilot signal fault. Car may refuse to charge or charge intermittently. Check the charge port for debris, bent pins, or moisture. A soft reset (hold both scroll wheel buttons until the Tesla logo appears) often clears temporary occurrences.

**`BMS_a079_packNeedsService`**
High-priority alert. The BMS has detected a genuine battery issue requiring service center attention. Don't ignore this one.

**`EPAS_a036_epasAssistDisabled`** (Power Steering)
Power steering assist fault. The car may have reduced or no power steering assist. Reboot the car first — this often clears single-occurrence steering ECU communication errors. If persistent, see our [Power Steering Issues guide](/posts/tesla-power-steering-issues/).

### How to Clear Service Alerts

Service alerts are **read-only** in Service Mode — you can view them but cannot delete them. They auto-clear when the underlying condition no longer exists. The only way to permanently clear fault history is through Tesla Toolbox 3 at a service center. Don't waste time trying to delete them from the car.

---

## Using Service Mode for Used Tesla Inspection

If you're buying a used Tesla privately or from a dealer, 10 minutes in Service Mode can save you thousands. Here's a pre-purchase inspection checklist using only the tools already in the car:

### Step 1: Check Service Alert History

Go to **Service Alerts → Service-Fix**. Scroll through all logged alerts. Look for:
- Repeated high-voltage battery alerts (`BMS_a*` codes) — indicates a battery that's been flagged by the system
- Drive inverter faults — can signal a drive unit that's been stressed
- Multiple charge port faults — may indicate a history of cable abuse or liquid ingress

One or two alerts over the car's lifetime is normal. Dozens of recurring alerts is a red flag.

### Step 2: Inspect the HV Battery Screen

Note the cell voltage delta (target: under 20 mV) and compare current pack energy to factory spec. A 2019 Model 3 Long Range should show around 70–74 kWh at 100% charge; if it's showing 60 kWh, that's roughly 17% degradation — worth factoring into your offer.

### Step 3: Check All Camera Feeds

Navigate to **Driver Assist → Cameras** and preview every camera:
- Front main camera (windshield)
- Front narrow (Autopilot)
- Left and right repeater cameras
- Rear camera

Any camera showing offline, degraded image quality, or misalignment is a negotiating point. Replacement cameras cost €150–€300+ each. See our [Side Repeater Camera Replacement guide](/posts/tesla-side-repeater-camera-replacement/) for reference costs.

### Step 4: Verify Software Version and Hardware

In **Vehicle Info**, confirm the AP computer generation (AP2, AP2.5, HW3, or HW4). HW3 is the minimum for FSD capability. HW4 (on 2023+ vehicles) supports features HW3 cannot. Buying an HW2 car is generally a mistake in 2026 unless the price reflects it.

For a complete pre-purchase guide, see our [Tesla Used Buying Inspection Guide](/posts/tesla-used-buying-inspection-guide/).

---

## Camera Calibration After Windshield Replacement: Full Steps

Windshield replacement is one of the most common Tesla repairs — and it's the #1 reason owners need to use camera calibration in Service Mode. Here's the complete procedure:

### Before You Start

1. Confirm the shop that installed the windshield properly repositioned the camera bracket. The forward-facing camera mounts to a bracket bonded to the glass — if the bracket is off-angle, no software calibration will fully correct it.
2. Make sure the car has been driven at least 2 km after the windshield installation (the camera needs some light exposure to begin initializing).

### Running Calibration

1. Enter Service Mode (Controls → Software → hold "MODEL" 5 seconds → enter "service")
2. Navigate to **Driver Assist → Cameras**
3. Select **Front Main Camera** — confirm it shows a live feed (green, not offline)
4. Return to the Driver Assist menu and select **Calibration**
5. Tap **Reset Calibration** for the relevant camera(s)
6. Exit Service Mode
7. Drive the car on a well-lit road with visible lane markings at 40–120 km/h — calibration typically completes in 20–40 km

**While calibrating:**
- Autopilot, Traffic-Aware Cruise Control, and Emergency Braking may be temporarily unavailable — this is normal
- A "Camera Calibration Required" message will appear on the main screen until complete
- Do not try to rush it by driving erratically — the system needs steady, consistent input

If calibration fails to complete after 50+ km, the camera bracket position may need physical adjustment by the windshield shop.

For more on camera issues, see our [Autopilot Camera Calibration Guide](/posts/tesla-autopilot-camera-calibration/).

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I access Tesla Service Mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to Controls > Software, then touch and hold the large word 'MODEL' (under the vehicle image) for 5 seconds. When prompted, type 'service' (all lowercase) and tap Enable. A red border appears around the screen confirming Service Mode is active. Works on Model 3, Y, S, X, and Cybertruck."
      }
    },
    {
      "@type": "Question",
      "name": "What can I do in Tesla Service Mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Service Mode lets you view all service alert history, check live HV battery data (cell voltage delta, state of health, temperatures), preview and calibrate all Autopilot cameras, run brake burnishing after pad replacement, test the touchscreen for faults, and check software and ECU versions. It's the same diagnostic interface Tesla technicians use."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tesla Service Mode safe to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, for reading diagnostics. Most screens are view-only — you're just looking at data. The few actions that can affect the car (camera calibration reset, brake burnishing) have their own warnings and confirmation steps. Never drive the car while Service Mode is active, as some safety features behave differently."
      }
    },
    {
      "@type": "Question",
      "name": "Does using Tesla Service Mode void warranty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Service Mode is a normal built-in function that Tesla technicians use daily. Accessing it does not affect your warranty. Only modifications or repairs that cause damage could result in a specific warranty claim being denied — not the act of opening the diagnostics menu."
      }
    },
    {
      "@type": "Question",
      "name": "What is a normal cell voltage delta in Tesla Service Mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A healthy Tesla battery pack shows a cell voltage delta under 20 mV when fully charged. A delta of 20–50 mV indicates mild imbalance that often resolves with full charge cycles. A delta above 100 mV suggests a significant imbalance or weak module that may need service. Anything above 200 mV warrants contacting Tesla or a specialist."
      }
    },
    {
      "@type": "Question",
      "name": "How do I exit Tesla Service Mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tap the red wrench icon in the dock (or find it under All Apps), scroll to the bottom of the left navigation panel, and press and hold the red 'Exit Service Mode' button for about 5 seconds to confirm. The red border disappears and normal operation resumes. Always exit before driving."
      }
    }
  ]
}
</script>

## Frequently Asked Questions

**Is the access code always "service"?**
Yes, on all current Tesla vehicles. It's the same for everyone - Tesla doesn't restrict access to Service Mode. The code is documented in Tesla's own public service manual.

**Will using Service Mode void my warranty?**
No. Service Mode is a normal vehicle function that Tesla Service Centers use daily. What matters is the quality of work performed, not whether you accessed the diagnostic tools.

**Can I break something by exploring Service Mode?**
Mostly no. The diagnostic screens are read-only - you're just viewing information. Calibration functions and software reinstall have their own confirmation steps and warnings. Don't run calibrations unless you have a specific reason to.

**Does Service Mode disable Sentry Mode?**
Not automatically. It's a good idea to disable Sentry Mode manually before working on the car to avoid false alarms.

**Do I need WiFi or cellular to use Service Mode?**
No. Service Mode runs entirely on-vehicle. Some features (like checking for software updates) obviously need connectivity, but the diagnostic tools work offline.

**Is Service Mode available on older MCU1 vehicles?**
Yes, though the interface and available features may differ. On very old software versions, some functions may be more limited. Updating to the latest available software is recommended.

## Wrapping Up

Service Mode is one of the best things about owning a Tesla from a DIY perspective. While other manufacturers charge hundreds for dealer diagnostic software subscriptions, Tesla gives you a full diagnostic suite built into the car - no adapters, no subscriptions, no dealer appointment.

Even if you never plan to wrench on your car, knowing how to access Service Mode is valuable. Checking service alerts, previewing camera feeds, and monitoring battery health can catch problems early - before they become expensive.

<div class="tip-box">
<strong>💡 Pro tip:</strong> Take screenshots of the Service Alerts and HV Battery screens periodically (use the vehicle's screenshot function: hold both scroll wheels). This gives you a baseline to compare against if issues appear later. It's also useful when discussing problems with Tesla service or independent shops.
</div>

## What to Pair With Service Mode

Service Mode tells you *what* is wrong. These tools help you take action:

- **[OBDLink CX Bluetooth Adapter](https://www.amazon.de/dp/B0D7F5F4HN?tag=diyrepair-21)** ([US](https://www.amazon.com/dp/B08NFNLKTK?tag=diyrepair07-20)) — Adds app-based diagnostics (Scan My Tesla / TeslaFi) that go beyond what Service Mode shows, including historical cell data and charge session logs.
- **[Digital Multimeter](https://www.amazon.de/s?k=automotive+multimeter+digital&tag=diyrepair-21)** ([US](https://www.amazon.com/s?k=automotive+digital+multimeter&tag=diyrepair07-20)) — For validating 12V battery voltage and testing charge port contacts after a fault alert.
- **[iFixit Pro Tech Toolkit](https://sovrn.co/1dw8w9g)** — Torx bits and pry tools for accessing the battery and sensor areas when Service Mode points to a hardware issue.
- **OEM replacement parts** — RR Car Parts stocks Tesla-grade components for when diagnostics find the real problem: [rrcarparts.com](https://rrcarparts.com)

---

*This guide is based on Service Mode as documented in Tesla's public service manuals and confirmed across multiple Tesla models. Menu options and available features vary by model, year, and software version. Last verified April 2026.*

## Related Guides

- [Tesla Battery Degradation: How to Check Health & Maximize Lifespan](/posts/tesla-battery-degradation-health/) — The companion guide to HV Battery diagnostics from Service Mode
- [Tesla OBD2 Scanner & Diagnostics Guide](/posts/tesla-obd2-scanner-diagnostics/) — App-based diagnostics that expand on what Service Mode shows
- [Tesla BMS Calibration & Battery Recalibration](/posts/tesla-bms-calibration-battery-recalibration/) — Use after Service Mode reveals cell imbalance
- [Tesla Camera Calibration: How to Recalibrate Autopilot Cameras](/posts/tesla-autopilot-camera-calibration/) — Full windshield replacement calibration guide
- [Tesla Brake Pad Replacement](/posts/tesla-brake-pad-replacement/) — Requires Service Mode for brake burnishing afterward
- [Tesla Brake Rotor Replacement](/posts/tesla-brake-rotor-replacement/) — Same burnishing requirement post-install
- [Tesla 12V Battery Replacement](/posts/tesla-12v-battery-replacement/) — Service Mode shows 12V system alerts early
- [Tesla Jack Points & Lifting Guide](/posts/tesla-jack-points-lifting-guide/) — Essential before any physical repair Service Mode leads you to
- [Tesla Phantom Battery Drain Fix](/posts/tesla-phantom-battery-drain-fix/) — Service Mode Sentry Mode tips cross-reference
- [Tesla 2026.2.3 Update: Hidden Features & Service Mode Changes](/posts/tesla-2026-2-3-software-update-features/) — What changed in the diagnostic interface in 2026
- [Tesla Used Buying Inspection Guide](/posts/tesla-used-buying-inspection-guide/) — Pre-purchase checklist using Service Mode
- [Tesla Power Steering Issues](/posts/tesla-power-steering-issues/) — What EPAS fault codes in Service Alerts mean
- [Tesla Drive Unit Noise Fix](/posts/tesla-drive-unit-noise-fix/) — Interpreting drive inverter alerts
- [Tesla Side Repeater Camera Replacement](/posts/tesla-side-repeater-camera-replacement/) — Camera replacement when Service Mode shows offline feeds
- [Tesla Maintenance Schedule 2026](/posts/tesla-maintenance-schedule/) — Full service interval guide
