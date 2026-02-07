---
layout: post.njk
title: "How to Fix Tesla Phantom Battery Drain (Vampire Drain)"
description: "Tesla losing charge while parked? Learn what causes phantom battery drain, how to diagnose it, and the exact settings to minimize vampire drain on any Tesla model."
date: 2026-02-07
category: "Software & Settings"
difficulty: "Easy"
readTime: "12 min read"
models: "All Models"
emoji: "🧛"
tools:
  - name: "Tesla-Compatible Smart Plug (for home charging monitoring)"
    link: "https://www.amazon.de/s?k=smart+plug+energy+monitor+wifi&tag=diyrepair-21"
  - name: "12V Battery Monitor (Bluetooth)"
    link: "https://www.amazon.de/s?k=12v+battery+monitor+bluetooth&tag=diyrepair-21"
  - name: "Windshield Sun Shade (reduces Cabin Overheat drain)"
    link: "https://www.amazon.de/s?k=tesla+windshield+sun+shade&tag=diyrepair-21"
---

You come back to your Tesla after a weekend away and it's lost 15% battery — just sitting in the garage. Sound familiar? This is **phantom drain**, also called **vampire drain**, and it's one of the most common complaints from Tesla owners.

The good news: most phantom drain is caused by settings and software you can control. In this guide, we'll cover exactly what causes it, what's normal versus abnormal, and how to minimize drain to nearly zero.

## What Is Phantom Drain?

Phantom drain refers to battery energy lost while your Tesla is parked and not charging. Unlike a gas car that just sits there, your Tesla is essentially a computer on wheels — and computers use power even in "sleep" mode.

Every Tesla has systems that stay partially active when parked:

- **Battery management system (BMS)** — monitors cell temperatures and balances cells
- **12V system** — powers the car's computers, alarm, and connectivity
- **Thermal management** — may run pumps or heaters to protect the battery in extreme temperatures
- **Cellular modem** — maintains connection to Tesla's servers
- **Sentry Mode cameras** — if enabled, constantly recording

Some of this drain is unavoidable. But a lot of it isn't.

## What's Normal vs. Abnormal Drain?

Here's a rough guide to what you should expect:

| Scenario | Expected Drain | Notes |
|----------|---------------|-------|
| Parked, all features off | 1–2% per day | Baseline drain from BMS and 12V systems |
| Parked with Sentry Mode on | 3–5% per day | Camera processing is power-hungry |
| Parked in extreme cold (below -10°C) | 3–6% per day | Battery heating may activate |
| Parked in extreme heat (above 35°C) | 2–4% per day | Cabin Overheat Protection runs AC |
| Third-party apps polling constantly | 4–8% per day | Keeps the car awake 24/7 |

**Rule of thumb:** If you're losing **more than 2–3% per day** with Sentry Mode off and no third-party apps, something needs attention. If you're losing **more than 5% per day** under any conditions, it's worth diagnosing.

<div class="warning-box">
<strong>Important:</strong> Drain percentage depends on your battery size. 1% on a Model S Long Range (~100 kWh) is about 1 kWh, while 1% on a Standard Range Model 3 (~55 kWh) is roughly 0.55 kWh. The actual energy consumed is similar — it just looks worse on smaller batteries.
</div>

## The 7 Main Causes of Phantom Drain

### 1. Sentry Mode

**Impact: 2–4% per day (250–350 watts average)**

Sentry Mode is the single biggest contributor to phantom drain. When active, it keeps all external cameras running, processes video continuously, and stores footage to the USB drive. The car's main computer stays fully awake.

**The math:** Sentry Mode uses roughly 250–350 watts. Over 24 hours, that's 6–8.4 kWh — or about 8–10% on a 75 kWh battery.

**How to minimize it:**
- **Use Sentry Mode scheduling** — Turn it on only at specific locations (work, public parking) and off at home. Go to *Controls > Safety > Sentry Mode > Exclude locations*
- **Exclude Home and Work** — If your car is in a private garage, you probably don't need Sentry Mode there
- **Use "Camera-Based Detection" only** — Available on newer software versions, this reduces processing power by only activating full recording when the cameras detect a person nearby

### 2. Cabin Overheat Protection

**Impact: 1–3% per day in summer**

Cabin Overheat Protection prevents the interior temperature from exceeding 40°C (105°F) when parked. When it activates, it runs the AC compressor and fans — which draws significant power from the high-voltage battery.

**How to minimize it:**
- **Switch to "Fan Only" mode** — Go to *Controls > Safety > Cabin Overheat Protection* and select "Fan Only" instead of "On." This uses much less energy than running the AC compressor
- **Disable it entirely** if you park in a garage or shade
- **Use a windshield sun shade** — Keeps the cabin cooler so Cabin Overheat Protection activates less often
- **Set the temperature threshold** — On 2024+ software, you can adjust the activation temperature

<div class="info-box">
<strong>Tip:</strong> Cabin Overheat Protection automatically turns off 12 hours after you exit the car. If you're leaving the car for extended periods, it won't run forever.
</div>

### 3. Third-Party Apps (The Silent Killer)

**Impact: 2–5% per day**

This is the cause most people overlook. Third-party apps like **TeslaFi**, **Tessie**, **TeslaMate**, **Stats for Tesla**, and others connect to your car through Tesla's API. Many of these apps **poll your car every few minutes** to check status, location, and battery level.

Here's the problem: **every API poll wakes up the car's computers.** If an app checks every 5 minutes, your car never truly sleeps. It's like someone poking you awake every 5 minutes all night — you never get deep rest.

**How different apps handle this:**

| App | Default Behavior | Sleep Support |
|-----|-----------------|---------------|
| **Tessie** | Uses streaming + telemetry | ✅ Good — supports direct telemetry on firmware 2025.20+ |
| **TeslaFi** | Polls every 1–5 minutes by default | ⚠️ Has sleep settings — must configure manually |
| **TeslaMate** | Self-hosted, configurable polling | ⚠️ Depends on your configuration |
| **Stats for Tesla** | Varies by setting | ⚠️ Check "sleep" settings in the app |
| **Tesla official app** | On-demand only | ✅ Doesn't keep car awake unless you open it |

**How to minimize it:**
- **Enable sleep mode** in every third-party app you use
- **Increase polling intervals** to 15–30 minutes minimum
- **Use streaming/telemetry APIs** instead of polling (Tessie supports this on newer firmware)
- **Temporarily disconnect apps** when parking long-term — revoke API tokens if needed
- **Use Tesla's official app** as your primary — it only wakes the car when you actively open it
- **Check how many apps have access** — Go to your Tesla account at [auth.tesla.com](https://auth.tesla.com) and revoke any apps you don't actively use

<div class="warning-box">
<strong>Firmware 2025.20+ Note:</strong> Tesla introduced "Direct Telemetry" that lets apps like Tessie receive data without waking the car. If you're running older firmware, update when available — this alone can eliminate app-related drain.
</div>

### 4. Pre-Conditioning and Scheduled Departure

**Impact: Variable (can use 2–5% per session)**

If you have **Scheduled Departure** enabled, your Tesla will pre-condition the battery and cabin before your departure time. This is great for daily commuting but can cause unexpected drain if:

- You set it but don't actually drive that day
- It's set for multiple locations
- Battery pre-conditioning runs longer in cold weather

**How to minimize it:**
- Only enable Scheduled Departure for workdays
- Use **Scheduled Charging** instead if you just want to charge at off-peak rates (this doesn't pre-condition)
- Check *Controls > Charging > Scheduled Departure* and make sure it's not set at locations where you don't need it

### 5. The Tesla Mobile App

**Impact: 0.5–1% per day if you check frequently**

Every time you open the Tesla app to check your battery level, you wake up the car. If you're anxiously checking every hour because you noticed phantom drain... you're making it worse.

**How to minimize it:**
- **Stop checking obsessively** — Seriously, this is the easiest fix
- **Check once in the morning, once in the evening** at most
- **Don't open the app "just to check"** when parked long-term

### 6. Software Bugs and Background Processes

**Impact: Variable (0–10%+ per day in rare cases)**

Occasionally, a Tesla software update introduces bugs that increase standby power consumption. This has happened several times:

- **2023–2024:** Several firmware versions had elevated standby drain, especially on Model S/X with MCU2
- **2024.20.x:** Cybertruck owners reported significantly reduced drain after this update
- **2025.20+:** Introduced direct telemetry to reduce API-related wake-ups

If your drain suddenly increased after an update, check Tesla forums and Reddit to see if others report the same issue. These are usually fixed in subsequent updates.

**How to address it:**
- Keep your firmware updated
- If drain spiked after an update, perform a full power cycle: *Controls > Safety > Power Off*, wait 3 minutes, then open the door
- Report the issue through the Tesla app's bug report feature (hold the voice button and say "Bug report — excessive battery drain")

### 7. Winter and Cold Weather Drain

**Impact: 2–5% additional per day below freezing**

Cold weather increases phantom drain for several reasons:

- **Battery heating** — The BMS may periodically warm the battery to prevent cell damage in extreme cold
- **Increased 12V system load** — Cold temperatures reduce 12V battery efficiency
- **Higher self-discharge** — Lithium-ion cells have slightly higher internal resistance in cold
- **Sentry Mode draws more** because the cameras and computers generate less ambient heat and work harder

**Winter vs. Summer comparison:**

| Condition | Summer Drain | Winter Drain |
|-----------|-------------|-------------|
| Baseline (no features) | 1–2%/day | 2–4%/day |
| With Sentry Mode | 3–5%/day | 5–8%/day |
| Extreme temps | 2–4%/day (heat) | 4–8%/day (cold) |

**How to minimize it:**
- **Park in a garage** — Even an unheated garage is typically 5–10°C warmer than outside
- **Keep the car plugged in** — Tesla recommends always plugging in during cold weather. The car will use wall power for battery maintenance instead of stored energy
- **Set a charge limit** rather than unplugging — A plugged-in Tesla with a charge limit of 80% will maintain itself from the wall

## How to Diagnose What's Causing Your Drain

Follow this systematic approach:

### Step 1: Establish a Baseline

1. Charge to your normal limit (e.g., 80%)
2. **Disable Sentry Mode** entirely
3. **Disable Cabin Overheat Protection**
4. **Close all third-party apps** and revoke their API tokens temporarily
5. **Don't open the Tesla app** for 24 hours
6. Check the battery level after 24 hours

You should see **1–3% drain** at most. If you see more, there may be a software issue — try a full power cycle.

### Step 2: Re-enable Features One at a Time

Add back features one per day and monitor the impact:

1. **Day 2:** Enable Sentry Mode → check drain
2. **Day 3:** Enable Cabin Overheat Protection → check drain
3. **Day 4:** Re-connect one third-party app → check drain
4. **Day 5:** Open the Tesla app normally → check drain

This tells you exactly which feature is the biggest contributor in your specific situation.

### Step 3: Check Your 12V Battery

A degraded 12V battery can cause excessive drain because the DC-DC converter works harder to keep it charged. On older Teslas (pre-2021) with lead-acid 12V batteries, this is a common issue.

**Signs of a failing 12V battery:**
- "12V battery needs service" warning
- Higher-than-normal phantom drain
- Car takes longer to "wake up"
- Random errors or reboots

See our [12V battery replacement guide](/posts/tesla-12v-battery-replacement/) for testing and replacement steps.

## The Optimal Settings for Minimum Drain

Here's the configuration for the lowest possible phantom drain while keeping your car functional:

### In the Car (*Controls* menu):

| Setting | Recommended | Location |
|---------|------------|----------|
| Sentry Mode | Exclude Home & Work | Controls > Safety > Sentry Mode |
| Cabin Overheat Protection | Fan Only or Off | Controls > Safety > Cabin Overheat |
| Energy Saving | On | Controls > Display > Energy Saving |
| Always Connected | Off | Controls > Software > Always Connected |
| Scheduled Departure | Only if needed daily | Controls > Charging |

### On Your Phone:

- **Tesla app:** Don't open it just to check battery
- **Third-party apps:** Enable sleep mode, set polling to 30+ minutes
- **Widget:** Remove the Tesla battery widget from your home screen (it polls the car)

### Energy Saving Mode

This is the most underused setting for reducing drain. When enabled:

- The car's displays and computers enter deep sleep faster
- Waking up takes slightly longer (1–2 seconds more)
- Cellular connectivity may be reduced in sleep mode

Go to *Controls > Display > Energy Saving* and turn it **On**.

<div class="info-box">
<strong>Note:</strong> On newer vehicles (2024+ Model 3 Highland, Cybertruck), energy management is improved from the factory. These models typically have lower baseline drain than older vehicles thanks to more efficient power electronics and the 48V architecture.
</div>

## Long-Term Parking (1+ Weeks)

If you're leaving your Tesla parked for an extended period (vacation, business trip):

1. **Plug it in** if at all possible — set charge limit to 50–60%
2. **Disable Sentry Mode** completely
3. **Disable Cabin Overheat Protection**
4. **Turn on Energy Saving mode**
5. **Turn off "Always Connected"**
6. **Revoke third-party app tokens** or disable them
7. **Don't check the app** unless necessary

With these settings, expect roughly **1–2% drain per day** (possibly less on newer models). A plugged-in Tesla with a charge limit set will maintain itself from wall power with zero net battery drain.

**If you can't plug in:**
- Charge to 70–80% before leaving
- Budget for 1–3% per day loss (7–21% per week)
- In winter, add another 1–2% per day
- Set a calendar reminder to check after a week — if drain is excessive, you may need to address it remotely via the app

## When to Visit a Service Center

Most phantom drain is software or settings-related. But sometimes it indicates a hardware issue:

- **Consistent 10%+ drain per day** with all features off → possible HV battery issue or stuck contactor
- **12V battery warnings** combined with high drain → 12V battery or DC-DC converter issue
- **Drain only started after a physical event** (accident, deep water, etc.) → possible electrical fault
- **Thermal system running constantly when parked** in moderate weather → coolant valve or sensor issue

Schedule service through the Tesla app. Before your appointment, document your drain rate with screenshots of the energy graph over several days — this helps the technician diagnose the issue faster.

## Summary: Quick Fix Checklist

If you're experiencing phantom drain, work through this list:

- [ ] Turn on **Energy Saving** mode
- [ ] Set **Sentry Mode** to exclude Home and Work
- [ ] Set **Cabin Overheat Protection** to "Fan Only" or "Off"
- [ ] Turn off **Always Connected**
- [ ] Check third-party apps — enable sleep mode or increase polling intervals
- [ ] Revoke unused API tokens at [auth.tesla.com](https://auth.tesla.com)
- [ ] Stop obsessively checking the Tesla app
- [ ] Update to the latest firmware
- [ ] Check your 12V battery health
- [ ] If parked long-term: plug in and set a charge limit

Most Tesla owners who follow these steps report drain dropping from 5–10% per day down to **1–2% per day** — which is perfectly normal for any EV.

Your Tesla isn't broken. It just needs to be told when to sleep.
