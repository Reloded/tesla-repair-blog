---
layout: post.njk
title: "Tesla Door Actuator and Latch Replacement: Complete DIY Guide"
description: "Fix a Tesla door that won't open, won't close, or shows 'door ajar' warnings. Step-by-step door latch and actuator replacement for Model 3, Model Y, Model S, and Model X."
date: 2026-02-09
category: "Body & Exterior"
difficulty: "Intermediate to Advanced"
readTime: "25 min read"
models: "All Models"
emoji: "🔧"
tools:
  - name: "Trim Removal Tool Set"
    link: "https://www.amazon.de/s?k=car+trim+removal+tools&tag=diyrepair-21"
  - name: "T30 Torx Bit"
    link: "https://www.amazon.de/s?k=T30+torx+screwdriver&tag=diyrepair-21"
  - name: "T45 Torx Socket"
    link: "https://www.amazon.de/s?k=T45+torx+socket&tag=diyrepair-21"
  - name: "10mm Socket"
    link: "https://www.amazon.de/s?k=10mm+socket+set&tag=diyrepair-21"
  - name: "Torque Wrench"
    link: "https://www.amazon.de/s?k=torque+wrench+nm&tag=diyrepair-21"
  - name: "iFixit Pro Tech Toolkit"
    link: "https://sovrn.co/1eq15x9"
    provider: "ifixit"
faq:
  - q: "How much does Tesla charge to replace a door latch?"
    a: "Tesla service centers typically charge $400-800 for a door latch replacement, including parts and labor. DIY, the part costs $80-200 depending on whether you go OEM or aftermarket."
  - q: "Can I drive with a broken door latch?"
    a: "It's not safe. A door that won't latch properly could open while driving. If the door won't close securely, get it fixed before driving. If it's a 'door ajar' sensor issue only and the door physically latches, you can drive carefully but the warning will drain your 12V battery faster."
  - q: "Why does my Tesla door keep showing 'door ajar' when it's closed?"
    a: "Usually a failing latch microswitch or a misaligned striker. Try cleaning the latch mechanism with silicone spray first. If the warning persists, the latch assembly likely needs replacement."
  - q: "Are aftermarket door latches reliable?"
    a: "Quality aftermarket latches from brands like A-Premium or Dorman work well and cost 30-50% less than OEM. Cheap no-name parts from generic sellers are risky — stick with known aftermarket brands or OEM."
  - q: "Do I need to recalibrate anything after replacing the door latch?"
    a: "On Model 3 and Model Y, you may need to recalibrate the window by holding the window switch up for 5 seconds after the window fully closes. Model S/X may require a door handle recalibration via the touchscreen."
---

A Tesla door that won't open, won't close, or constantly throws "door ajar" warnings is more than an annoyance — it's a safety issue. The door latch and actuator assembly is the electromechanical heart of your door's locking system, and when it fails, you'll know immediately.

Tesla service centers charge **$400-800** for this repair. With this guide, you can do it yourself for **$80-200 in parts** and 1-3 hours of work, depending on your model.

## Symptoms of a Failing Door Latch or Actuator

Before ordering parts, confirm the latch is actually your problem:

- **Door won't open** from inside or outside — the latch mechanism is stuck or the actuator motor has failed
- **Door won't close or stay closed** — the latch doesn't engage the striker properly
- **"Door ajar" warning on the touchscreen** when the door is fully closed — microswitch inside the latch is failing
- **Phantom door openings** — the latch intermittently releases, especially in cold weather
- **Clicking or grinding noises** when locking/unlocking — worn gears inside the actuator
- **Door locks/unlocks slowly or only halfway** — the actuator motor is dying
- **Door works manually but not from the app/fob** — electrical side of the actuator has failed

> **💡 Quick check first:** Before replacing the latch, try spraying **silicone lubricant** (not WD-40) into the latch mechanism. Tesla even has a [DIY service bulletin](https://service.tesla.com/docs/Public/diy/model3/en_us/GUID-41052CF5-1F9C-4ABA-9F13-780C7569214C.html) recommending this for sticky latches. If that fixes it, you just saved yourself a few hundred dollars.

Also check your **[12V battery](/posts/tesla-12v-battery-replacement/)** — a weak 12V battery can cause intermittent door latch behavior since it powers all the body control electronics.

## Understanding the Door Latch System

Tesla door latches are integrated assemblies that combine multiple functions into one unit:

- **Latch mechanism** — physically catches and holds the door closed via the striker
- **Lock actuator motor** — electrically locks and unlocks the door
- **Release actuator** — electrically releases the latch when you press the door button
- **Microswitches** — detect door position (open/closed/ajar) and lock state
- **Emergency release cable** — connects to the manual interior door release

The latch bolts to the rear edge of the door and engages with a **striker** mounted on the door frame (B-pillar or C-pillar). The striker is a separate, simpler component — essentially a U-shaped metal loop.

## Part Numbers and Costs

### Model 3 (2017-2023) Door Latch Assembly

| Position | OEM Part Number | Approximate Cost |
|----------|----------------|-----------------|
| Front Left (Driver) | 1500673-91-B (also 1500672-00-B) | $100-180 |
| Front Right (Passenger) | 1500672-91-B | $100-180 |
| Rear Left | 1500675-91-B | $100-180 |
| Rear Right | 1500674-91-B | $100-180 |

### Model 3 Highland (2024+) Door Latch Assembly

The 2024+ Highland refresh uses updated latch assemblies with different part numbers. Verify your exact part number via your VIN on [Tesla's parts catalog](https://epc.tesla.com) or pull the old latch and match the number stamped on it.

### Model Y (2020-2024) Door Latch Assembly

Model Y shares many door latch parts with the pre-Highland Model 3. The same OEM numbers above (1500672 through 1500675 series) generally apply. Always verify by VIN.

### Model S Door Latch Assembly

| Position | OEM Part Number | Approximate Cost |
|----------|----------------|-----------------|
| Front Right | 6008912-00-C | $150-250 |
| Other positions | Varies by generation | $150-250 |

Model S latches are different from Model 3/Y. The presenting door handle mechanism is separate from the latch — see our **[door handle guide](/posts/tesla-door-handle-not-working/)** if your issue is the handle not presenting rather than the latch itself.

### Model X

Model X front doors use a similar latch design to Model S. The falcon wing rear doors have a completely different and more complex system — see our **[falcon wing door guide](/posts/tesla-falcon-wing-door-fix/)** for rear door issues.

### Door Striker

If your issue is a loose striker causing the door not to close properly, the striker bolts use a **T45 Torx socket** and torque to **26 Nm (19.2 ft-lbs)** per the Tesla service manual.

### Where to Buy Parts

- **[Tesla Official Parts](https://shop.tesla.com)** — OEM, guaranteed fit, highest price
- **[eBay](https://www.ebay.com/sch/i.html?_nkw=tesla+model+3+door+latch+actuator)** — OEM pulled parts ($60-120) or aftermarket
- **[Amazon](https://www.amazon.com/s?k=tesla+model+3+door+latch+actuator&tag=diyrepair07-20)** | **[Amazon.de](https://www.amazon.de/s?k=tesla+model+3+t%C3%BCrschloss+aktuator&tag=diyrepair-21)** — Aftermarket (A-Premium, Dorman)
- **[eEuroparts](https://www.eeuroparts.com/Tesla/)** — OEM parts, sometimes discounted

For European buyers, check our **[Tesla parts buying guide for Europe](/posts/tesla-parts-europe-buying-guide/)**.

## Tools Needed

- **Trim removal tools** (plastic — never use metal pry bars on Tesla panels)
- **T30 Torx bit** — door panel screws
- **10mm socket** — various interior fasteners
- **T20 Torx bit** — latch mounting bolts on some models
- **T45 Torx socket** — striker bolts (if adjusting)
- **Torque wrench** — for striker bolts (26 Nm)
- **Painter's tape** — to protect paint when working near door edges
- **Phone/camera** — photograph every connector and wire routing before disassembly

## Step-by-Step: Model 3/Model Y Door Latch Replacement

**Difficulty:** Intermediate | **Time:** 1.5-2.5 hours | **Cost:** $80-180

### Step 1: Preparation

1. **Park on a flat surface** and put the car in Park
2. **Disable the door** — on the touchscreen, go to Controls > Locks and disable "Walk-Away Lock" to prevent the car from trying to lock while you're working
3. **Disconnect the 12V battery** if you want to be extra safe (prevents any unexpected actuator movements), though this isn't strictly necessary
4. **Photograph everything** before you start — door panel, latch area, wire routing

### Step 2: Remove the Door Panel

This procedure is the same as our **[window regulator guide](/posts/tesla-window-regulator-replacement/)** — refer to that for detailed photos.

1. **Remove the two T30 Torx screws** at the bottom of the door panel (hidden behind small plastic covers — pop them off with a trim tool)
2. **Insert your trim tool** between the panel and door frame at the bottom edge
3. **Work around the edges**, popping the plastic clips free — there are approximately 8-10 clips around the perimeter
4. **Lift the panel upward** to unhook it from the window sill rail
5. **Disconnect electrical connectors:**
   - Window switch connector
   - Door handle release cable (push the clip and slide off)
   - Puddle lamp connector
   - Speaker connector (if applicable)
6. **Set the panel aside** face-down on a towel

> **⚠️ Be gentle with clips.** Tesla's plastic clips are notorious for breaking. Have a few spares on hand — they're cheap on Amazon. If one breaks, it's not the end of the world, but the panel may rattle later.

### Step 3: Remove the Inner Closeout Panel

1. **Carefully peel away the black plastic closeout panel** that covers the inner door cavity
2. This panel is attached with adhesive and clips — work slowly from one corner
3. You now have full access to the latch mechanism at the rear edge of the door

### Step 4: Disconnect the Old Latch

1. **Locate the latch** at the trailing edge of the door (the side with the hinges is the leading edge — the latch is on the opposite side)
2. **Disconnect the electrical connector** going to the latch — press the release tab and pull straight out
3. **Disconnect the latch release cable** — this connects from the interior door release handle to the latch. Note the routing carefully.
4. **Disconnect the exterior handle cable** — runs from the outer door handle to the latch
5. **Take photos** of all cable routing before removing anything

### Step 5: Remove the Latch Assembly

1. **Remove the 3 bolts** that attach the latch to the rear of the door (visible from inside the door cavity)
2. **Feed the latch cable through the opening** in the door — the latch has a rubber grommet where the cable passes through
3. **Remove the latch assembly** from the door

### Step 6: Install the New Latch

1. **Compare old and new latches** side by side — verify all mounting points, connector orientation, and cable attachment points match
2. **Feed the latch cable through the door opening** and seat the grommet
3. **Install the 3 mounting bolts** — tighten evenly in a star pattern. Don't overtorque — these thread into the door sheet metal
4. **Reconnect the exterior handle cable** to the latch
5. **Reconnect the interior release cable**
6. **Reconnect the electrical connector** — you should hear/feel it click into place

### Step 7: Test Before Reassembly

**This is critical** — test everything before putting the door panel back on:

1. **Close the door** — it should latch firmly with the striker
2. **Open the door** from the exterior handle — should release smoothly
3. **Open the door** from the interior release — should work
4. **Lock and unlock** via the touchscreen or app
5. **Check the touchscreen** — no "door ajar" warnings when closed
6. **Check the emergency manual release** — pull the hidden release lever (behind the trim near the door handle on front doors)

If anything doesn't work, double-check your cable connections and electrical connector.

### Step 8: Reassemble

1. **Reattach the closeout panel** — use fresh adhesive if the original won't stick
2. **Reconnect all electrical connectors** to the door panel
3. **Hook the door panel** onto the window sill rail and press it into place
4. **Push firmly around all clip locations** — you'll hear each clip snap in
5. **Reinstall the two T30 Torx screws** and snap the covers back on

### Step 9: Post-Installation

1. **Recalibrate the window:** Lower the window fully, then raise it fully. Hold the window switch in the UP position for 5 seconds after the window reaches the top. This resets the auto-close function.
2. **Re-enable Walk-Away Lock** if you disabled it
3. **Test the door** several more times over the next few days — open, close, lock, unlock from all methods (handle, touchscreen, phone app, key card)

## Model S/X Differences

### Model S (2012-2024)

Model S door latch replacement follows the same general principles, but with key differences:

- **Door panel removal** requires removing 3 screws instead of 2, and there's an additional trim piece around the door handle
- **Presenting door handles** are separate from the latch — if the handle won't present, that's a handle mechanism issue, not a latch issue (see our **[door handle guide](/posts/tesla-door-handle-not-working/)**)
- **The latch part numbers** are completely different from Model 3/Y — use the 6008912 series or match your VIN
- **Post-replacement:** You may need to perform a door handle recalibration through the touchscreen (Controls > Service > Calibrate Door Handles) or via a firmware reinstall if the door behaves erratically

### Model X

- **Front doors** use a similar latch to Model S
- **Falcon wing doors** have a completely different, motorized latch and hinge system — this is **not** a beginner DIY job. See our **[falcon wing door repair guide](/posts/tesla-falcon-wing-door-fix/)** instead
- **Model X front door actuators** can fail causing the door not to open from handle or fob — similar symptoms to Model 3 but different parts

## Striker Adjustment (All Models)

Sometimes the problem isn't the latch — it's the **striker** on the door frame. If the striker is loose or misaligned:

1. The door may not close fully or requires excessive force
2. You may get intermittent "door ajar" warnings
3. The door may rattle at highway speeds

### To adjust or tighten the striker:

1. **Loosen the striker bolts** using a **T45 Torx socket** — don't remove them fully
2. **Adjust the striker position** — move it slightly in/out or up/down as needed
3. **Retighten to 26 Nm (19.2 ft-lbs)** — this is the Tesla service manual spec
4. **Test the door** — it should close smoothly without excessive force and latch with a solid "thunk"

> **Note:** Striker adjustment affects door alignment. If you move it, check that the door sits flush with the body panel. See our **[panel gap adjustment guide](/posts/tesla-panel-gap-adjustment/)** for tips.

## Troubleshooting

### Door still won't open after latch replacement
- Check the release cables — they may be routed incorrectly or not fully seated
- Verify the electrical connector is fully clicked in
- Test with the manual emergency release lever

### "Door ajar" warning persists
- The new latch microswitch may need a few open/close cycles to "settle"
- Check striker alignment — the latch may not be fully engaging
- Perform a soft reboot (hold both scroll wheels for 10 seconds)

### Door opens but won't lock
- Electrical connector issue — reseat the connector
- Check for damaged wiring in the door harness (common at the rubber boot where wires flex between door and body)

### Cold weather issues
- Tesla door latches can stick in freezing conditions. Apply silicone lubricant to the latch mechanism before winter. See our **[winter preparation guide](/posts/tesla-winter-preparation-guide/)** for more tips.

## When to Call Tesla Service

Some situations are better left to the pros:

- **Falcon wing door** latch/actuator issues on Model X (complex motorized system)
- **Warranty repairs** — if your car is under warranty or extended warranty, let Tesla handle it at no cost to you
- **Wiring harness damage** inside the door — if the issue is a broken wire in the flex area between door and body, it requires soldering and careful routing
- **Multiple doors failing simultaneously** — this usually points to a body control module issue, not individual latches

## Related Guides

- **[Tesla Door Handle Not Working](/posts/tesla-door-handle-not-working/)** — for handle mechanism issues (especially Model S/X presenting handles)
- **[Tesla Window Regulator Replacement](/posts/tesla-window-regulator-replacement/)** — uses the same door panel removal procedure
- **[Tesla Door Seal Maintenance](/posts/tesla-door-seal-maintenance/)** — prevent water intrusion that causes latch corrosion
- **[Tesla Falcon Wing Door Fix](/posts/tesla-falcon-wing-door-fix/)** — Model X rear door specific issues
- **[Tesla Panel Gap Adjustment](/posts/tesla-panel-gap-adjustment/)** — if door alignment is off after repair
- **[Tesla 12V Battery Replacement](/posts/tesla-12v-battery-replacement/)** — weak 12V causes phantom door issues
- **[Tesla Winter Preparation Guide](/posts/tesla-winter-preparation-guide/)** — prevent cold weather latch problems
- **[Tesla Creaking and Rattling Fix](/posts/tesla-creaking-rattling-fix/)** — if the door rattles after repair
