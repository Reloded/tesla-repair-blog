/* Listen to My Tesla — browser-only acoustic triage prototype.
 * Audio never leaves the device. This is decision support, not a diagnosis.
 */
(function (root) {
  'use strict';

  const CAUSES = [
    {
      id: 'suspension-clunk', name: 'Suspension joint or fastener play',
      summary: 'Low, impulsive knocks often point to sway-bar links, control-arm joints, top mounts, or a loose fastener.',
      href: '/posts/tesla-suspension-noise-fix/', urgency: 'Inspect soon',
      acoustic: { centroid: [70, 1100], impulse: [0.48, 1], lowRatio: [0.38, 1] },
      context: { when: ['bumps', 'turning'], area: ['front-left', 'front-right', 'rear'], words: ['clunk', 'knock'] },
      checks: ['While parked, gently turn the steering wheel left and right and listen for a repeatable front-end creak.', 'Have a qualified technician inspect suspension joints, bushings, and fastener play before replacing parts.'],
      sources: [
        { title: 'Tesla: Suspension - Front (Inspection)', url: 'https://service.tesla.com/docs/Model3/ServiceManual/en-us/GUID-348F8D9A-AE1C-498F-B34A-32A2C1FA0F03.html', strength: 'official procedure', applicability: 'Model 3 2017–2023 procedure; confirm model year and current revision' },
        { title: 'Model S knocking noise: control-arm replacement outcome', url: 'https://www.youtube.com/watch?v=3fmcP0Hus8I', strength: 'repair-confirmed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' }
      ]
    },
    {
      id: 'underbody-shield-rattle', name: 'Possible loose underbody shield or mounting contact',
      summary: 'A loose or displaced aero shield, wheel-arch clip, or another underbody mounting can rattle during slow maneuvers and imitate a suspension or axle fault. Audio alone cannot rule out a loose subframe or structural fastener.',
      href: '/guides/exterior-body/', urgency: 'Inspect before driving; do not drive if loose, hanging, or dragging',
      acoustic: { centroid: [1800, 3000], tone: [0.08, 0.26], highRatio: [0.42, 0.62], impulse: [0.35, 0.7] },
      context: { when: ['low-speed', 'turning'], area: ['underbody', 'front'], requiredArea: ['underbody', 'front'], requiredModels: ['Model S'], words: ['below', 'under car', 'underbody', 'shield', 'plate'] },
      checks: ['Park safely and inspect only from outside the vehicle for a hanging shield edge, missing wheel-arch or underbody clips, scrape marks, or fresh contact. Never crawl beneath a vehicle supported only by a jack.', 'Do not drive if a panel is loose, hanging, dragging, or could contact a tire or the road; arrange safe recovery or a qualified lift inspection. If the panel appears secure, steering or handling changes, or subframe/crossmember fasteners are suspected, stop road testing. Do not guess torque values or retighten structural fasteners without the exact Tesla procedure.'],
      sources: [
        { title: 'Tesla 2021+ Model S: Front Aero Shield — Remove and Replace', url: 'https://service.tesla.com/docs/ModelS/ServiceManual/Palladium/en-us/GUID-61A52E3D-C980-4FCB-9B76-482F1596617F.html', strength: 'official draft procedure', applicability: '2021+ Model S; identifies wheel-arch and underbody clips plus nine shield bolts at the front subframe; confirm current revision' }
      ]
    },
    {
      id: 'brake-squeal', name: 'Brake pad / rotor squeal',
      summary: 'A stable high-frequency tone during braking commonly comes from pad glazing, debris, wear indicators, or corrosion.',
      href: '/posts/tesla-squeaky-brakes-fix/', urgency: 'Check before the next long drive',
      acoustic: { centroid: [1800, 8000], tone: [0.38, 1], highRatio: [0.48, 1] },
      context: { when: ['braking'], area: ['front-left', 'front-right', 'rear'], words: ['squeal', 'scrape'] },
      checks: ['Confirm whether the sound occurs only when the brake pedal is applied.', 'Without dismantling anything, visually look through the wheel for rotor scoring or trapped debris; grinding or changed braking requires service.'],
      sources: [
        { title: 'Tesla: Basic Vehicle Inspection', url: 'https://service.tesla.com/docs/Model3/ServiceManual/en-us/GUID-C24C6004-94BF-4099-8681-8D6598EE6E50.html', strength: 'official procedure', applicability: 'Model 3 2017–2023 procedure; confirm model year and current revision' },
        { title: 'Tesla brake dust-cover rock removal example', url: 'https://www.youtube.com/watch?v=QZwrdzBcriE', strength: 'owner-claimed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' }
      ]
    },
    {
      id: 'hvac-whine', name: 'HVAC blower or heat-pump whine',
      summary: 'A sustained tonal sound while climate control runs can come from the blower, debris, a bearing, or normal heat-pump operation.',
      href: '/posts/tesla-ac-not-cooling/', urgency: 'Monitor; inspect if worsening',
      acoustic: { centroid: [650, 4200], tone: [0.42, 1], impulse: [0, 0.3] },
      context: { when: ['climate'], area: ['dash', 'front'], words: ['whine', 'buzz'] },
      checks: ['While parked, vary only the blower speed and note whether the pitch or volume follows it.', 'Switch climate control off; if the sound stops, visually check the accessible intake and cabin-filter area for leaves or debris.'],
      sources: [
        { title: 'Tesla: Clean the Blower Motor', url: 'https://service.tesla.com/docs/Model3/ServiceManual/en-us/GUID-4617F820-1B74-4F1A-A9E7-3E826979DAF6.html', strength: 'official procedure', applicability: 'Model 3 2017–2023 procedure; confirm model year and current revision' },
        { title: 'Model 3/Y AC buzzing and bracket vibration example', url: 'https://www.youtube.com/watch?v=pkmxhWiMQq4', strength: 'owner-claimed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' }
      ]
    },
    {
      id: 'cabin-sensor-fan', name: 'Possible small cabin-sensor fan noise',
      summary: 'On some Tesla configurations, a small aspirator fan near the center display draws cabin air across an interior sensor. Dust, contact, or fan wear can create a persistent high buzz distinct from the main HVAC blower.',
      href: '/guides/hvac-climate/', urgency: 'Usually safe to monitor; inspect if persistent',
      acoustic: { centroid: [1800, 5200], tone: [0.35, 1], highRatio: [0.4, 1], impulse: [0, 0.5] },
      context: { when: ['awake', 'climate'], area: ['under-screen', 'dash', 'cabin'], words: ['fan', 'sensor', 'buzz', 'under screen', 'air quality', 'temperature'] },
      checks: ['While safely parked, switch the main climate blower off and listen close to the underside of the center display; note whether the smaller buzz continues.', 'Do not replace parts from the sound match alone. Have the sensor inlet, small fan, connector, and mounting checked for dust, contact, or bearing wear; component name and location vary by model year.'],
      sources: [
        { title: 'Tesla Model 3 Service Manual', url: 'https://service.tesla.com/docs/Model3/ServiceManual/en-us/', strength: 'official service reference', applicability: 'Confirm the exact sensor name, location, and procedure for the vehicle model and year' }
      ]
    },
    {
      id: 'wheel-bearing', name: 'Wheel bearing or tire resonance',
      summary: 'A broad hum that rises with road speed may be tire pattern noise, uneven wear, or a wheel bearing.',
      href: '/posts/tesla-wheel-bearing-replacement/', urgency: 'Inspect soon if it changes in turns',
      acoustic: { centroid: [120, 1800], tone: [0.05, 0.48], lowRatio: [0.32, 1] },
      context: { when: ['speed', 'turning'], area: ['front-left', 'front-right', 'rear'], words: ['hum', 'drone'] },
      checks: ['Note whether the hum follows road speed rather than motor power or HVAC speed.', 'If the sound or vibration changes during gentle cornering, arrange a wheel, tire, and hub inspection; do not lift or spin the car without proper equipment.'],
      sources: [
        { title: 'Model 3 wheel hub replacement outcome', url: 'https://www.youtube.com/watch?v=esvGGlUisL8', strength: 'repair-confirmed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' },
        { title: 'Tesla wheel-bearing diagnosis example', url: 'https://www.youtube.com/watch?v=fuM_ndJoWpU', strength: 'owner-claimed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' }
      ]
    },
    {
      id: 'trim-rattle', name: 'Interior trim or loose-item rattle',
      summary: 'Repeated mid-frequency impulses over rough roads are often trim clips, seat hardware, belts, or objects in storage areas.',
      href: '/posts/tesla-creaking-rattling-fix/', urgency: 'Usually safe to monitor',
      acoustic: { centroid: [450, 3500], impulse: [0.28, 0.8], highRatio: [0.18, 0.65] },
      context: { when: ['bumps', 'speed'], area: ['dash', 'cabin', 'rear'], words: ['rattle', 'click'] },
      checks: ['Remove loose items from storage areas and repeat the same road condition.', 'With the vehicle parked, gently press the suspected trim area; do not remove airbag-adjacent trim.'],
      sources: [
        { title: 'Model 3/Y rear-seat bracket rattle example', url: 'https://www.youtube.com/watch?v=nn2mBrJVefo', strength: 'owner-claimed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' },
        { title: 'Model 3 dash-rattle isolation example', url: 'https://www.youtube.com/watch?v=2jnFpf9MF10', strength: 'owner-claimed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' }
      ]
    },
    {
      id: 'halfshaft-click', name: 'Halfshaft spline or CV-joint click',
      summary: 'A metallic click when torque first loads or reverses can originate at a halfshaft spline, axle fastener, or CV joint.',
      href: '/posts/tesla-halfshaft-clicking-fix/', urgency: 'Inspect soon; urgent if vibration or steering changes',
      acoustic: { centroid: [450, 4200], impulse: [0.45, 1], highRatio: [0.15, 0.72] },
      context: { when: ['acceleration', 'turning'], area: ['front-left', 'front-right', 'rear'], words: ['click', 'clicking', 'axle'] },
      checks: ['While parked, note whether one click occurs exactly as Drive or Reverse torque first loads; do not stand near a moving vehicle.', 'Record whether it repeats at full steering lock or under acceleration, then have axle hardware and CV joints professionally inspected.'],
      sources: [
        { title: 'Model 3 axle-click spline cleaning and lubrication example', url: 'https://www.youtube.com/watch?v=1HncCmgMp-s', strength: 'owner-claimed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' }
      ]
    },
    {
      id: 'wind-whistle', name: 'Window or door-seal wind whistle',
      summary: 'A high, airy sound tied to vehicle speed can come from window alignment, a door seal, mirror trim, or a body-panel gap.',
      href: '/posts/tesla-door-seal-maintenance/', urgency: 'Usually safe to monitor',
      acoustic: { centroid: [2200, 8000], tone: [0.12, 0.72], highRatio: [0.52, 1] },
      context: { when: ['speed'], area: ['front-left', 'front-right', 'cabin'], words: ['wind', 'whistle', 'air'] },
      checks: ['Compare the sound at the same speed with climate control off and recirculation unchanged.', 'While parked, visually inspect the suspected window and door seal for folds, gaps, debris, or uneven contact; do not adjust glass without the correct procedure.'],
      sources: [
        { title: 'Model S driver-window wind-noise adjustment example', url: 'https://www.youtube.com/watch?v=7QZQI737E1g', strength: 'owner-claimed example', applicability: 'Individual vehicle shown in source; confirm your model, year, and configuration' }
      ]
    },
    {
      id: 'drive-unit-whine', name: 'Drive-unit or reduction-gear whine',
      summary: 'A tonal whine that follows motor speed or changes between acceleration and regeneration may come from the drive unit or reduction gearing.',
      href: '/posts/tesla-drive-unit-noise-fix/', urgency: 'Arrange diagnosis if new, loud, or worsening',
      acoustic: { centroid: [500, 5200], tone: [0.42, 1], impulse: [0, 0.28] },
      context: { when: ['acceleration', 'speed'], area: ['front', 'rear'], words: ['whine', 'motor', 'gear', 'regen'] },
      checks: ['Compare acceleration, steady-speed, and regenerative-deceleration phases without changing HVAC settings.', 'If accompanied by vibration, warning messages, fluid leakage, or rapidly increasing volume, stop testing and arrange professional service.'],
      sources: [
        { title: 'Tesla DIY Repair: Drive Unit Noise guide', url: 'https://tesladiyrepair.com/posts/tesla-drive-unit-noise-fix/', strength: 'editorial diagnostic guide', applicability: 'General Tesla overview; verify the procedure for your exact drive-unit configuration' },
        { title: 'Tesla Model 3 Service Manual', url: 'https://service.tesla.com/docs/Model3/ServiceManual/en-us/', strength: 'official service reference', applicability: 'Model 3 only; select the correct model year and current procedure revision' }
      ]
    }
  ];


  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
  function rangeFit(value, range, softness) {
    const min = range[0], max = range[1];
    if (value >= min && value <= max) return 1;
    const distance = value < min ? min - value : value - max;
    return clamp(1 - distance / (softness || Math.max(0.01, (max - min) * 0.8)), 0, 1);
  }

  function extractFeatures(samples, sampleRate) {
    if (!samples || samples.length < 256) throw new Error('Audio sample is too short to analyze.');
    if (!sampleRate || samples.length / sampleRate > 60) throw new Error('Audio sample is too long. Use a recording under 60 seconds.');
    let sum = 0, sumSq = 0, crossings = 0, peak = 0, transientCount = 0, clippedSamples = 0;
    const envelopeWindow = Math.max(32, Math.floor(sampleRate * 0.01));
    let previousEnvelope = 0, envelope = 0;
    for (let i = 0; i < samples.length; i++) {
      const value = samples[i];
      sum += value;
      sumSq += value * value;
      peak = Math.max(peak, Math.abs(value));
      if (Math.abs(value) >= 0.985) clippedSamples++;
      if (i && (value >= 0) !== (samples[i - 1] >= 0)) crossings++;
      envelope += Math.abs(value);
      if (i % envelopeWindow === envelopeWindow - 1) {
        const current = envelope / envelopeWindow;
        if (current > Math.max(0.025, previousEnvelope * 2.8)) transientCount++;
        previousEnvelope = current;
        envelope = 0;
      }
    }
    const rms = Math.sqrt(sumSq / samples.length);
    const mean = sum / samples.length;
    const variation = Math.sqrt(Math.max(0, sumSq / samples.length - mean * mean));
    const duration = samples.length / sampleRate;
    const impulse = clamp((transientCount / Math.max(1, duration * 4)) + (peak / Math.max(rms, 0.001) - 2.2) / 9, 0, 1);
    const zeroCrossingRate = crossings / samples.length;

    // Analyze the highest-energy windows so a short clunk is not lost between
    // uniformly sampled frames. This is still intentionally small and local.
    const size = 1024;
    const candidates = [];
    const hop = Math.floor(size / 2);
    for (let start = 0; start + size <= samples.length; start += hop) {
      let energy = 0;
      for (let n = 0; n < size; n += 4) energy += samples[start + n] * samples[start + n];
      candidates.push({ start, energy });
    }
    candidates.sort((a, b) => b.energy - a.energy);
    const selected = candidates.slice(0, Math.min(5, candidates.length));
    const spectrum = new Float64Array(size / 2);
    selected.forEach(frame => {
      const start = frame.start;
      for (let k = 1; k < size / 2; k++) {
        let real = 0, imag = 0;
        for (let n = 0; n < size; n++) {
          const sample = samples[start + n] || 0;
          const hann = 0.5 - 0.5 * Math.cos(2 * Math.PI * n / (size - 1));
          const angle = 2 * Math.PI * k * n / size;
          real += sample * hann * Math.cos(angle);
          imag -= sample * hann * Math.sin(angle);
        }
        spectrum[k] += Math.sqrt(real * real + imag * imag);
      }
    });
    let total = 0, weighted = 0, low = 0, high = 0, maxBin = 0;
    for (let k = 1; k < spectrum.length; k++) {
      const magnitude = spectrum[k];
      const hz = k * sampleRate / size;
      total += magnitude; weighted += magnitude * hz;
      if (hz < 500) low += magnitude;
      if (hz > 1800) high += magnitude;
      maxBin = Math.max(maxBin, magnitude);
    }
    const centroid = total ? weighted / total : 0;
    const tone = total ? clamp((maxBin * 12) / total, 0, 1) : 0;
    return {
      duration, rms, variation, peak, zeroCrossingRate, centroid,
      lowRatio: total ? low / total : 0,
      highRatio: total ? high / total : 0,
      impulse, tone, clippingRatio: clippedSamples / samples.length
    };
  }

  function assessQuality(features) {
    const issues = [];
    if (features.duration < 2) issues.push('too-short');
    if (features.rms < 0.003) issues.push('too-quiet');
    if (features.variation < 0.001) issues.push('no-variation');
    if (features.clippingRatio > 0.03) issues.push('clipping');
    const durationScore = clamp(features.duration / 4, 0, 1);
    const levelScore = clamp((features.rms - 0.003) / 0.047, 0, 1);
    const clippingScore = clamp(1 - features.clippingRatio / 0.03, 0, 1);
    const score = Math.round(100 * (0.35 * durationScore + 0.35 * levelScore + 0.30 * clippingScore));
    return { accepted: issues.length === 0, issues, score };
  }

  function analyze(features, context) {
    const quality = assessQuality(features);
    const safety = [];
    if (context.warningBrake) safety.push('Braking performance changed');
    if (context.warningSteering) safety.push('Steering feel changed');
    if (context.warningSmoke) safety.push('Smoke, burning smell, or unusual heat');
    if (context.warningImpact) safety.push('Sound started after an impact');
    if (!quality.accepted) {
      return {
        ranked: [], safety, stopDriving: safety.length > 0, abstained: true, quality,
        message: 'Please record again: the sample is too short, too quiet, clipped, or contains no usable variation.'
      };
    }
    const words = String(context.words || '').toLowerCase();
    const ranked = CAUSES.map(cause => {
      let acousticTotal = 0, acousticCount = 0;
      Object.keys(cause.acoustic).forEach(key => {
        acousticTotal += rangeFit(features[key] || 0, cause.acoustic[key]); acousticCount++;
      });
      const acousticScore = acousticCount ? acousticTotal / acousticCount : 0;
      let contextHits = 0;
      if (cause.context.when.includes(context.when)) contextHits += 1.4;
      if (cause.context.area.includes(context.area)) contextHits += 0.8;
      if (cause.context.words.some(word => words.includes(word))) contextHits += 0.8;
      const contextScore = clamp(contextHits / 3, 0, 1);
      let score = clamp(0.62 * acousticScore + 0.38 * contextScore, 0, 1);
      if (cause.context.requiredArea && !cause.context.requiredArea.includes(context.area)) score *= 0.35;
      if (cause.context.requiredModels && !cause.context.requiredModels.includes(context.model)) score *= 0.35;
      const confidence = Math.round(28 + score * 67);
      return Object.assign({}, cause, {
        score, confidence,
        reasons: explainMatch(cause, features, context)
      });
    }).sort((a, b) => b.score - a.score);

    return { ranked: ranked.slice(0, 3), safety, stopDriving: safety.length > 0, abstained: false, quality };
  }

  function explainMatch(cause, f, c) {
    const reasons = [];
    if (cause.context.when.includes(c.when)) reasons.push('matches when the sound occurs');
    if (cause.context.area.includes(c.area)) reasons.push('matches the reported area');
    if (f.impulse > 0.45 && cause.acoustic.impulse) reasons.push('audio contains sharp transients');
    if (f.tone > 0.4 && cause.acoustic.tone) reasons.push('audio contains a sustained tone');
    if (f.lowRatio > 0.38 && cause.acoustic.lowRatio) reasons.push('energy is concentrated at low frequencies');
    if (f.highRatio > 0.45 && cause.acoustic.highRatio) reasons.push('energy is concentrated at high frequencies');
    return reasons.slice(0, 3);
  }

  function makeDemo(kind, sampleRate) {
    sampleRate = sampleRate || 16000;
    const duration = 3.2, samples = new Float32Array(Math.floor(duration * sampleRate));
    for (let i = 0; i < samples.length; i++) {
      const t = i / sampleRate;
      const noise = (Math.random() * 2 - 1) * 0.012;
      if (kind === 'clunk') {
        const pulse = [0.55, 1.35, 2.15, 2.72].reduce((sum, at) => {
          const dt = t - at;
          return sum + (dt >= 0 && dt < 0.12 ? Math.exp(-dt * 34) * Math.sin(2 * Math.PI * 125 * dt) : 0);
        }, 0);
        samples[i] = noise + pulse * 0.78;
      } else if (kind === 'squeal') {
        samples[i] = noise + (t > 0.35 && t < 2.9 ? 0.34 * Math.sin(2 * Math.PI * 3100 * t) : 0);
      } else {
        samples[i] = noise + 0.23 * Math.sin(2 * Math.PI * 1180 * t) + 0.08 * Math.sin(2 * Math.PI * 2360 * t);
      }
    }
    return { samples, sampleRate };
  }

  function makeCaseReport(features, context, outcome, createdAt) {
    const numericFeatures = {};
    Object.keys(features).forEach(key => {
      if (typeof features[key] === 'number') numericFeatures[key] = Number(features[key].toFixed(6));
    });
    return {
      schemaVersion: 2,
      createdAt: createdAt || new Date().toISOString(),
      privacy: 'No raw audio is included in this report.',
      vehicle: { model: context.model || 'Unknown', year: context.year || 'Unknown' },
      conditions: { when: context.when || '', area: context.area || '', description: context.words || '' },
      quality: outcome.quality,
      safety: { stopDriving: outcome.stopDriving, reasons: outcome.safety || [] },
      features: numericFeatures,
      matches: (outcome.ranked || []).map(cause => ({
        id: cause.id, name: cause.name, score: cause.confidence,
        urgency: cause.urgency, checks: (cause.checks || []).slice()
      }))
    };
  }

  function makeCaseReportHtml(report) {
    const escape = value => String(value == null ? '' : value).replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));
    const whenLabels = {
      bumps: 'Over bumps / rough road', 'low-speed': 'At low speed / parking maneuver',
      braking: 'While braking', turning: 'While turning', acceleration: 'Under acceleration / regeneration',
      speed: 'Changes with road speed', climate: 'With climate control', awake: 'While parked / vehicle awake'
    };
    const areaLabels = {
      'front-left': 'Front left', 'front-right': 'Front right', front: 'Under the hood / front',
      underbody: 'Underbody / below the car', dash: 'Dashboard', 'under-screen': 'Under the center screen',
      cabin: 'Inside the cabin', rear: 'Rear of vehicle'
    };
    const matches = (report.matches || []).map((match, index) => {
      const profile = CAUSES.find(cause => cause.id === match.id);
      const urgency = match.urgency || profile && profile.urgency || '';
      const checks = (match.checks || profile && profile.checks || []).map(check => `<li>${escape(check)}</li>`).join('');
      const guidance = urgency || checks
        ? `<div class="guidance">${urgency ? `<p><strong>Precaution:</strong> ${escape(urgency)}</p>` : ''}${checks ? `<details><summary>Verification steps</summary><ol>${checks}</ol></details>` : ''}</div>` : '';
      return `<article class="match"><div class="match-head"><div><span class="rank">${index + 1}</span><strong>${escape(match.name)}</strong></div><b>${escape(match.score)}% match</b></div>${guidance}</article>`;
    }).join('') || '<p>No usable matches were produced.</p>';
    const safetyReasons = (report.safety && report.safety.reasons || []).map(reason => `<li>${escape(reason)}</li>`).join('');
    const safety = report.safety && report.safety.stopDriving
      ? `<section class="alert"><h2>Safety warning</h2><p><strong>Stop driving when safe and arrange a professional inspection.</strong></p>${safetyReasons ? `<ul>${safetyReasons}</ul>` : ''}<p>Sound matching cannot clear a safety-critical symptom.</p></section>`
      : '<section class="safe"><h2>No emergency safety checkbox was selected</h2><p>This reflects only the answers provided and is not a safety clearance. Review every match-specific precaution below. Stop using the vehicle if braking, steering, heat, smoke, impact damage, or warning-light concerns are present.</p></section>';
    const measurements = Object.entries(report.features || {}).map(([key, value]) => `<tr><th>${escape(key)}</th><td>${escape(value)}</td></tr>`).join('');
    const created = new Date(report.createdAt);
    const createdLabel = Number.isNaN(created.getTime()) ? report.createdAt : created.toUTCString();
    const description = report.conditions && report.conditions.description
      ? `<div class="description"><span>Description</span><p>${escape(report.conditions.description)}</p></div>` : '';
    return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:"><title>Tesla Sound Check report</title><style>
:root{color-scheme:light;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#182033;background:#edf1f6}*{box-sizing:border-box}body{margin:0;padding:32px 16px}.sheet{max-width:820px;margin:auto;background:white;border-radius:20px;padding:36px;box-shadow:0 15px 45px #15213a18}header{border-bottom:3px solid #e82127;padding-bottom:20px;margin-bottom:24px}.eyebrow,.label,.description span{font-size:12px;text-transform:uppercase;letter-spacing:.09em;color:#68758b;font-weight:800}h1{margin:7px 0 4px;font-size:32px}h2{font-size:18px;margin:28px 0 12px}.meta{color:#68758b}.privacy{background:#edf8f1;color:#17663a;padding:12px 15px;border-radius:10px;font-weight:700}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.card,.description,.safe,.alert,details{padding:16px;border-radius:12px;background:#f5f7fa}.card b{display:block;margin-top:4px;font-size:18px}.description{margin-top:12px}.description p{margin:6px 0 0;white-space:pre-wrap}.match{padding:15px 0;border-bottom:1px solid #e5e9ef}.match-head{display:flex;align-items:center;justify-content:space-between;gap:16px}.match-head>div{display:flex;align-items:center;gap:10px}.rank{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#182033;color:white;font-weight:800}.match-head>b{white-space:nowrap;color:#b7191f}.guidance{margin:10px 0 0 38px;color:#46536a}.guidance p{margin:0}.guidance details{margin-top:8px;padding:10px}.guidance ol{margin-bottom:0;padding-left:20px}.safe{border-left:4px solid #3157d5}.alert{background:#fff0f0;border-left:4px solid #d21f2b}.alert h2,.safe h2{margin-top:0}details{margin-top:24px}summary{cursor:pointer;font-weight:800}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{text-align:left;padding:7px;border-bottom:1px solid #e3e7ed}footer{margin-top:26px;color:#68758b;font-size:13px}.disclaimer{font-weight:700;color:#46536a}@media(max-width:600px){.sheet{padding:24px 18px}.grid{grid-template-columns:1fr}.match-head{align-items:flex-start;flex-direction:column}.guidance{margin-left:0}}
</style></head><body><main class="sheet"><header><div class="eyebrow">Private case report · Experimental beta</div><h1>Tesla Sound Check</h1><div class="meta">Created ${escape(createdLabel)}</div></header><p class="privacy">🔒 ${escape(report.privacy || 'No raw audio is included in this report.')}</p><section><h2>Vehicle and recording context</h2><div class="grid"><div class="card"><span class="label">Vehicle</span><b>${escape(report.vehicle && report.vehicle.model)} · ${escape(report.vehicle && report.vehicle.year)}</b></div><div class="card"><span class="label">Signal quality</span><b>${escape(report.quality && report.quality.score)}/100</b></div><div class="card"><span class="label">When</span><b>${escape(whenLabels[report.conditions && report.conditions.when] || report.conditions && report.conditions.when || 'Not provided')}</b></div><div class="card"><span class="label">Area</span><b>${escape(areaLabels[report.conditions && report.conditions.area] || report.conditions && report.conditions.area || 'Not provided')}</b></div></div>${description}</section>${safety}<section><h2>Likely matches</h2>${matches}<p class="disclaimer">Match percentages are heuristic ranking scores, not calibrated probabilities or a diagnosis.</p></section><details><summary>Technical measurements</summary><p>These values help compare recordings; they are not repair specifications.</p><table>${measurements}</table></details><footer><p>${escape(report.privacy || 'No raw audio is included in this report.')}</p><p>Independent prototype. Not affiliated with or endorsed by Tesla, Inc. Verify findings with an appropriately qualified professional before replacing parts.</p></footer></main></body></html>`;
  }

  const api = { CAUSES, extractFeatures, assessQuality, analyze, makeDemo, makeCaseReport, makeCaseReportHtml };
  root.TeslaSoundLab = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
