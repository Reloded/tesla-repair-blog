const test = require('node:test');
const assert = require('node:assert/strict');
const lab = require('../src/js/listen-diagnostic.js');
const fs = require('node:fs');
const path = require('node:path');

const contexts = {
  clunk: { when: 'bumps', area: 'front-left', words: 'dull clunk' },
  squeal: { when: 'braking', area: 'front-right', words: 'high squeal' },
  hvac: { when: 'climate', area: 'dash', words: 'steady whine' }
};

for (const [kind, expected] of Object.entries({ clunk: 'suspension-clunk', squeal: 'brake-squeal', hvac: 'hvac-whine' })) {
  test(`${kind} demo ranks ${expected} first`, () => {
    const audio = lab.makeDemo(kind);
    const features = lab.extractFeatures(audio.samples, audio.sampleRate);
    const result = lab.analyze(features, contexts[kind]);
    assert.equal(result.ranked[0].id, expected);
    assert.ok(result.ranked[0].confidence >= 80);
    assert.ok(result.ranked[0].reasons.length > 0);
  });
}

test('owner-provided cabin sensor fan sample ranks the dedicated aspirator profile first', () => {
  // Privacy-safe feature values derived from seconds 8–11 of the local workshop video.
  // No raw audio or video is stored in the repository.
  const features = {
    duration: 3,
    rms: 0.0035,
    variation: 0.0035,
    peak: 0.04,
    zeroCrossingRate: 0.31,
    centroid: 3472,
    lowRatio: 0.152,
    highRatio: 0.694,
    impulse: 0.237,
    tone: 0.521,
    clippingRatio: 0
  };
  const result = lab.analyze(features, {
    when: 'awake',
    area: 'under-screen',
    words: 'steady buzzing under the screen'
  });
  assert.equal(result.ranked[0].id, 'cabin-sensor-fan');
  assert.ok(result.ranked[0].confidence >= 80);
});

test('2024 Model S slow-turn underbody rattle ranks a shield or mounting profile first', () => {
  // Privacy-safe features derived from the complete owner-provided 10.13 s video.
  // No raw audio or video is stored in the repository.
  const features = {
    duration: 10.13,
    rms: 0.00812,
    variation: 0.00812,
    peak: 0.0594,
    zeroCrossingRate: 0.142,
    centroid: 2433,
    lowRatio: 0.161,
    highRatio: 0.546,
    impulse: 0.568,
    tone: 0.174,
    clippingRatio: 0
  };
  const result = lab.analyze(features, {
    model: 'Model S', year: '2024',
    when: 'low-speed', area: 'underbody',
    words: 'rattle below car during a slow turn'
  });
  assert.equal(result.ranked[0].id, 'underbody-shield-rattle');
  assert.ok(result.ranked[0].confidence >= 80);

  const unsupportedModel = lab.analyze(features, {
    model: 'Model 3', year: '2024',
    when: 'low-speed', area: 'underbody',
    words: 'rattle below car during a slow turn'
  });
  assert.equal(unsupportedModel.ranked.some(match => match.id === 'underbody-shield-rattle'), false);
});

test('impulsive wheel click still ranks the halfshaft profile with torque-load context', () => {
  const features = {
    duration: 10.13, rms: 0.00812, variation: 0.00812, peak: 0.0594,
    zeroCrossingRate: 0.142, centroid: 2433, lowRatio: 0.161,
    highRatio: 0.546, impulse: 0.568, tone: 0.174, clippingRatio: 0
  };
  const result = lab.analyze(features, {
    when: 'acceleration', area: 'front-left',
    words: 'single click when torque loads at the wheel'
  });
  assert.equal(result.ranked[0].id, 'halfshaft-click');
  assert.equal(result.ranked.some(match => match.id === 'underbody-shield-rattle'), false);
});

test('underbody profile cannot enter the displayed matches for a cabin trim rattle', () => {
  const features = {
    duration: 10.13, rms: 0.00812, variation: 0.00812, peak: 0.0594,
    zeroCrossingRate: 0.142, centroid: 2433, lowRatio: 0.161,
    highRatio: 0.546, impulse: 0.568, tone: 0.174, clippingRatio: 0
  };
  const result = lab.analyze(features, {
    when: 'bumps', area: 'cabin', words: 'dashboard trim rattle over rough road'
  });
  assert.equal(result.ranked[0].id, 'trim-rattle');
  assert.equal(result.ranked.some(match => match.id === 'underbody-shield-rattle'), false);
});

test('the same tonal sample still routes to the main HVAC profile with blower context', () => {
  const features = {
    duration: 3, rms: 0.0035, variation: 0.0035, peak: 0.04,
    zeroCrossingRate: 0.31, centroid: 3472, lowRatio: 0.152,
    highRatio: 0.694, impulse: 0.237, tone: 0.521, clippingRatio: 0
  };
  const result = lab.analyze(features, {
    when: 'climate', area: 'dash', words: 'main blower whine changes with fan speed'
  });
  assert.equal(result.ranked[0].id, 'hvac-whine');
});

test('safety symptoms override a benign-looking sound', () => {
  const audio = lab.makeDemo('hvac');
  const features = lab.extractFeatures(audio.samples, audio.sampleRate);
  const result = lab.analyze(features, { ...contexts.hvac, warningSmoke: true });
  assert.equal(result.stopDriving, true);
  assert.deepEqual(result.safety, ['Smoke, burning smell, or unusual heat']);
});

test('ordinary sound does not trigger stop-driving escalation', () => {
  const audio = lab.makeDemo('clunk');
  const result = lab.analyze(lab.extractFeatures(audio.samples, audio.sampleRate), contexts.clunk);
  assert.equal(result.stopDriving, false);
});

test('rejects recordings too short to support analysis', () => {
  assert.throws(() => lab.extractFeatures(new Float32Array(100), 16000), /too short/i);
});

test('quality gate rejects recordings shorter than two seconds', () => {
  const samples = new Float32Array(16000);
  samples.fill(0.1);
  const quality = lab.assessQuality(lab.extractFeatures(samples, 16000));
  assert.equal(quality.accepted, false);
  assert.ok(quality.issues.includes('too-short'));
});

test('quality gate rejects near-silent recordings', () => {
  const samples = new Float32Array(48000);
  samples.fill(0.0002);
  const quality = lab.assessQuality(lab.extractFeatures(samples, 16000));
  assert.equal(quality.accepted, false);
  assert.ok(quality.issues.includes('too-quiet'));
});

test('quality gate rejects heavily clipped recordings', () => {
  const samples = new Float32Array(48000);
  for (let i = 0; i < samples.length; i++) samples[i] = i % 2 ? 1 : -1;
  const quality = lab.assessQuality(lab.extractFeatures(samples, 16000));
  assert.equal(quality.accepted, false);
  assert.ok(quality.issues.includes('clipping'));
});

test('analyzer abstains when recording quality is unacceptable', () => {
  const features = lab.extractFeatures(new Float32Array(48000).fill(0.0001), 16000);
  const result = lab.analyze(features, contexts.clunk);
  assert.equal(result.abstained, true);
  assert.equal(result.ranked.length, 0);
  assert.match(result.message, /record/i);
});

test('safety escalation survives an unusable recording', () => {
  const features = lab.extractFeatures(new Float32Array(16000 * 2), 16000);
  const outcome = lab.analyze(features, { ...contexts.clunk, warningSmoke: true });
  assert.equal(outcome.abstained, true);
  assert.equal(outcome.stopDriving, true);
  assert.ok(outcome.safety.length > 0);
});

test('quality gate rejects constant DC-offset audio', () => {
  const features = lab.extractFeatures(Float32Array.from({ length: 16000 * 3 }, () => 0.1), 16000);
  const quality = lab.assessQuality(features);
  assert.equal(quality.accepted, false);
  assert.ok(quality.issues.includes('no-variation'));
});

test('extractor rejects recordings longer than one minute', () => {
  assert.throws(() => lab.extractFeatures(new Float32Array(16000 * 61), 16000), /too long/i);
});

test('every diagnostic profile has evidence and physical verification steps', () => {
  for (const cause of lab.CAUSES) {
    assert.ok(cause.sources && cause.sources.length > 0, `${cause.id} has no sources`);
    assert.ok(cause.checks && cause.checks.length >= 2, `${cause.id} has insufficient checks`);
    for (const source of cause.sources) {
      assert.match(source.url, /^https:\/\//);
      assert.ok(source.applicability, `${cause.id} source lacks an applicability label`);
    }
  }
});

test('underbody profile preserves loose-panel and structural-fastener safety boundaries', () => {
  const cause = lab.CAUSES.find(item => item.id === 'underbody-shield-rattle');
  const guidance = `${cause.urgency} ${cause.checks.join(' ')}`.toLowerCase();
  assert.match(guidance, /do not drive/);
  assert.match(guidance, /never crawl beneath/);
  assert.match(guidance, /do not guess torque values/);
  assert.match(cause.summary.toLowerCase(), /audio alone cannot rule out/);
  assert.match(cause.sources[0].applicability, /2021\+ Model S/);
  assert.deepEqual(cause.context.requiredModels, ['Model S']);
});

test('knowledge base covers axle clicks, wind whistles, sensor fans, and underbody rattles', () => {
  const ids = new Set(lab.CAUSES.map(cause => cause.id));
  assert.ok(ids.has('halfshaft-click'));
  assert.ok(ids.has('wind-whistle'));
  assert.ok(ids.has('drive-unit-whine'));
  assert.ok(ids.has('cabin-sensor-fan'));
  assert.ok(ids.has('underbody-shield-rattle'));
  assert.ok(lab.CAUSES.length >= 10);
});

test('method disclosure states the current ten-profile coverage', () => {
  const listen = fs.readFileSync(path.join(__dirname, '..', 'src', 'listen.njk'), 'utf8');
  assert.match(listen, /ranks ten symptom families/);
});

test('quality score is bounded and accepted demo is usable', () => {
  const audio = lab.makeDemo('clunk');
  const quality = lab.assessQuality(lab.extractFeatures(audio.samples, audio.sampleRate));
  assert.equal(quality.accepted, true);
  assert.ok(quality.score >= 0 && quality.score <= 100);
});

test('case report exports metadata and features without raw audio', () => {
  const audio = lab.makeDemo('clunk');
  const features = lab.extractFeatures(audio.samples, audio.sampleRate);
  const context = { model: 'Model 3', year: '2022', ...contexts.clunk };
  const outcome = lab.analyze(features, context);
  const report = lab.makeCaseReport(features, context, outcome, '2026-08-09T12:00:00.000Z');
  assert.equal(report.schemaVersion, 2);
  assert.equal(report.createdAt, '2026-08-09T12:00:00.000Z');
  assert.equal(report.vehicle.model, 'Model 3');
  assert.equal(report.matches[0].id, 'suspension-clunk');
  assert.ok(report.matches[0].urgency);
  assert.ok(report.matches[0].checks.length >= 2);
  assert.equal('samples' in report, false);
  assert.equal(JSON.stringify(report).includes('Float32Array'), false);
});

test('readable case report is self-contained, human-oriented, and escapes free text', () => {
  const report = {
    schemaVersion: 2,
    createdAt: '2026-08-26T19:05:32.900Z',
    privacy: 'No raw audio is included in this report.',
    vehicle: { model: 'Model S', year: '2024' },
    conditions: { when: 'low-speed', area: 'underbody', description: '<img src=x onerror=alert(1)>' },
    quality: { accepted: true, issues: [], score: 69 },
    safety: { stopDriving: false, reasons: [] },
    features: { centroid: 2433, impulse: 0.568 },
    matches: [{ id: 'underbody-shield-rattle', name: 'Possible loose underbody shield or mounting contact', score: 95, urgency: 'Inspect before driving; do not drive if loose, hanging, or dragging', checks: ['Never crawl beneath a jack-supported vehicle.'] }]
  };
  const html = lab.makeCaseReportHtml(report);
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /Model S/);
  assert.match(html, /2024/);
  assert.match(html, /95%/);
  assert.match(html, /No emergency safety checkbox was selected/);
  assert.match(html, /do not drive if loose, hanging, or dragging/i);
  assert.match(html, /Never crawl beneath a jack-supported vehicle/);
  assert.match(html, /No raw audio/i);
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.doesNotMatch(html, /<img src=x/);
  assert.doesNotMatch(html, /<script/i);
  assert.match(html, /default-src 'none'/);

  const legacyHtml = lab.makeCaseReportHtml({ ...report, schemaVersion: 1, matches: [{
    id: 'suspension-clunk', name: 'Suspension joint or fastener play', score: 95
  }] });
  assert.match(legacyHtml, /<strong>Precaution:<\/strong> Inspect soon/);
  assert.match(legacyHtml, /While parked, gently turn the steering wheel/);
});

test('listen UI separates readable HTML report from technical JSON data', () => {
  const listen = fs.readFileSync(path.join(__dirname, '..', 'src', 'listen.njk'), 'utf8');
  assert.match(listen, /id="export-case"[^>]*>Download readable report/);
  assert.match(listen, /id="export-json"[^>]*>Download technical JSON/);
  assert.match(listen, /text\/html;charset=utf-8/);
  assert.match(listen, /application\/json/);
  assert.match(listen, /\.html'/);
  assert.match(listen, /\.json'/);
});

test('experimental listen page is noindex and disables analytics', () => {
  const listen = fs.readFileSync(path.join(__dirname, '..', 'src', 'listen.njk'), 'utf8');
  const base = fs.readFileSync(path.join(__dirname, '..', 'src', '_includes', 'base.njk'), 'utf8');
  assert.match(listen, /^noindex:\s*true$/m);
  assert.match(base, /if not noindex/);
  assert.match(base, /name="robots" content="noindex, nofollow"/);
});
