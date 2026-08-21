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
      const score = clamp(0.62 * acousticScore + 0.38 * contextScore, 0, 1);
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
      schemaVersion: 1,
      createdAt: createdAt || new Date().toISOString(),
      privacy: 'No raw audio is included in this report.',
      vehicle: { model: context.model || 'Unknown', year: context.year || 'Unknown' },
      conditions: { when: context.when || '', area: context.area || '', description: context.words || '' },
      quality: outcome.quality,
      safety: { stopDriving: outcome.stopDriving, reasons: outcome.safety || [] },
      features: numericFeatures,
      matches: (outcome.ranked || []).map(cause => ({ id: cause.id, name: cause.name, score: cause.confidence }))
    };
  }

  const api = { CAUSES, extractFeatures, assessQuality, analyze, makeDemo, makeCaseReport };
  root.TeslaSoundLab = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
