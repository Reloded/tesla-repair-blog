# Article Update Guide for New Affiliates

Step-by-step guide for adding iFixit, Tesmanian, and Lectron affiliate links to existing articles.

---

## Step 1: Get Your Affiliate IDs

After approval from each program, you'll receive:

| Program | ID Format | Where to Find |
|---------|-----------|---------------|
| iFixit | Referral code or tracking URL | Impact Radius dashboard |
| Tesmanian | Affiliate ID parameter | ShareASale or direct dashboard |
| Lectron | Partner code | Refersion portal |

**Store your IDs:**
```
IFIXIT_ID=your_ifixit_id
TESMANIAN_ID=your_tesmanian_id
LECTRON_ID=your_lectron_id
```

---

## Step 2: Link Formats by Program

### iFixit Links
```markdown
[Pro Tech Toolkit](https://www.ifixit.com/products/pro-tech-toolkit?ref=YOUR_IFIXIT_ID)
[Spudger Set](https://www.ifixit.com/products/spudger?ref=YOUR_IFIXIT_ID)
[iOpener Kit](https://www.ifixit.com/products/iopener?ref=YOUR_IFIXIT_ID)
```

### Tesmanian Links
```markdown
[All-Weather Floor Mats](https://www.tesmanian.com/collections/floor-mats?ref=YOUR_TESMANIAN_ID)
[Center Console Organizer](https://www.tesmanian.com/products/console-organizer?ref=YOUR_TESMANIAN_ID)
```

### Lectron Links
```markdown
[Portable EV Charger](https://ev-lectron.com/products/portable-charger?ref=YOUR_LECTRON_ID)
[Tesla to J1772 Adapter](https://ev-lectron.com/products/tesla-j1772-adapter?ref=YOUR_LECTRON_ID)
```

### Amazon.de Links (Existing)
```markdown
[Product Name](https://www.amazon.de/dp/ASIN?tag=diyrepair-21)
```

---

## Step 3: Articles to Update by Category

### Tool-Heavy Articles (iFixit Priority)

These articles recommend tools - add iFixit as primary/alternative:

| Article | iFixit Products |
|---------|-----------------|
| `tesla-12v-battery-replacement.md` | Pro Tech Toolkit, pry tools |
| `tesla-brake-pad-replacement.md` | Socket set, torque wrench |
| `tesla-cabin-air-filter.md` | Trim removal tools |
| `tesla-control-arm-replacement.md` | Full toolkit, torque wrench |
| `tesla-door-handle-not-working.md` | Precision screwdrivers |
| `tesla-mcu-touchscreen-upgrade.md` | iOpener, spudgers, pry tools |
| `tesla-wheel-alignment-diy.md` | Specialty measuring tools |
| `tesla-ppf-installation.md` | Squeegee set, heat gun |
| `tesla-seat-heater-fix.md` | Multimeter, trim tools |
| `tesla-steering-wheel-buttons.md` | Precision screwdrivers, picks |
| `tesla-headlight-condensation.md` | Trim tools, sealant |
| `tesla-air-suspension-issues.md` | Diagnostic tools, jack stands |
| `tesla-falcon-wing-door-fix.md` | Trim tools (if needed) |

### Charging Articles (Lectron Priority)

These discuss charging - add Lectron products:

| Article | Lectron Products |
|---------|------------------|
| `tesla-charge-port-stuck.md` | Charging adapters, replacement cables |
| `tesla-slow-charging-fix.md` | Portable chargers, NEMA adapters |
| `tesla-mobile-connector-issues.md` | Replacement connectors, adapters |
| `tesla-supercharger-slow.md` | CCS adapter, alternative charging |

### Accessories Articles (Tesmanian Priority)

These mention interior/exterior accessories:

| Article | Tesmanian Products |
|---------|-------------------|
| `tesla-cabin-air-filter.md` | Floor mats (while cleaning interior) |
| `tesla-door-seal-maintenance.md` | Weather protection accessories |
| `tesla-trunk-wont-close.md` | Trunk organizers, mats |
| `tesla-aero-cap-removal.md` | Wheel accessories, caps |
| `tesla-ceramic-coating.md` | Interior protection products |

---

## Step 4: Update Process

### For Each Article:

1. **Open the article** in `src/posts/`

2. **Find existing affiliate section** (usually near "Tools Needed" or end of article)

3. **Add new affiliates as alternatives** (don't replace Amazon):

**Before:**
```markdown
## Tools Needed
- [10mm Socket Set](https://www.amazon.de/dp/B08XYZ?tag=diyrepair-21)
```

**After:**
```markdown
## Tools Needed
- 10mm Socket Set: [Amazon](https://www.amazon.de/dp/B08XYZ?tag=diyrepair-21) | [iFixit](https://www.ifixit.com/products/socket-set?ref=YOUR_ID)
```

4. **For tool-heavy articles**, add iFixit toolkit recommendation:

```markdown
<div class="affiliate-box">

**Recommended Toolkit:**
The [iFixit Pro Tech Toolkit](https://www.ifixit.com/products/pro-tech-toolkit?ref=YOUR_ID) includes everything you need for this repair and comes with a lifetime warranty.

</div>
```

5. **For charging articles**, add Lectron section:

```markdown
## Charging Accessories

If you're having ongoing charging issues, consider these alternatives:
- [Portable EV Charger](https://ev-lectron.com/products/portable-charger?ref=YOUR_ID) - Charge anywhere
- [Tesla to J1772 Adapter](https://ev-lectron.com/products/adapter?ref=YOUR_ID) - Use any charging station
```

6. **Test the build:**
```bash
npm start
```

---

## Step 5: Multi-Affiliate Box Format

For articles with multiple product recommendations:

```markdown
<div class="affiliate-box">

**Get the right tools for this repair:**

| Product | Est. Price | Where to Buy |
|---------|------------|--------------|
| Pro Tech Toolkit | ~€75 | [iFixit](link) |
| 10mm Socket Set | ~€25 | [Amazon](link) |
| Floor Mats | ~€150 | [Tesmanian](link) |

*We earn a small commission from purchases made through these links.*

</div>
```

---

## Step 6: Tracking Performance

After updating articles:

1. **Note which articles updated** in a tracking spreadsheet
2. **Check affiliate dashboards weekly** for:
   - Click-through rates by program
   - Conversion rates
   - Top-performing articles
3. **Optimize based on data:**
   - Move best-converting affiliate to first position
   - Add more products to high-traffic articles
   - Remove underperforming links

---

## Priority Order for Updates

Update articles in this order (highest traffic first):

### High Priority (Update First)
1. `tesla-12v-battery-replacement.md` - High search volume
2. `tesla-brake-pad-replacement.md` - Common repair
3. `tesla-cabin-air-filter.md` - Easy DIY, high volume
4. `tesla-charge-port-stuck.md` - Common issue
5. `tesla-mcu-touchscreen-upgrade.md` - High-value repair

### Medium Priority
6. `tesla-slow-charging-fix.md`
7. `tesla-door-handle-not-working.md`
8. `tesla-control-arm-replacement.md`
9. `tesla-wheel-alignment-diy.md`
10. `tesla-mobile-connector-issues.md`

### Lower Priority (Update Later)
- Remaining articles as time permits
- New articles get all affiliates from start

---

## Disclosure Requirements

Ensure each article with affiliate links includes disclosure:

```markdown
*Disclosure: This article contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.*
```

Place at the bottom of articles or in the affiliate box.

---

*Guide created: 2026-01-14*
*Update after receiving affiliate approvals*
