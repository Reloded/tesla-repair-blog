const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const consent = require('../src/js/listen-consent.js');

const root = path.join(__dirname, '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');

test('sound check starts only after every required acknowledgement', () => {
  assert.equal(consent.canStart({ privacy: true, limitations: true, safety: true }), true);
  assert.equal(consent.canStart({ privacy: true, limitations: true, safety: false }), false);
  assert.equal(consent.canStart({ privacy: true, limitations: false, safety: true }), false);
  assert.equal(consent.canStart({ privacy: false, limitations: true, safety: true }), false);
});

test('consent evaluator rejects missing and truthy non-boolean values', () => {
  assert.equal(consent.canStart({}), false);
  assert.equal(consent.canStart({ privacy: 1, limitations: true, safety: true }), false);
  assert.deepEqual(consent.REQUIRED, ['privacy', 'limitations', 'safety']);
});

test('listen tool is locked behind explicit privacy, limitations, and safety consent', () => {
  const page = read('src/listen.njk');
  for (const id of ['consent-privacy', 'consent-limitations', 'consent-safety']) {
    assert.match(page, new RegExp(`id="${id}"`));
  }
  assert.match(page, /id="consent-start"[^>]*disabled/);
  assert.match(page, /id="tool-workspace"[^>]*hidden/);
  assert.match(page, /id="consent-withdraw"/);
  assert.match(page, /audio is processed locally[^.]*never uploaded/i);
  assert.match(page, /not a diagnosis/i);
  assert.match(page, /cannot confirm that (?:my|your) vehicle is safe/i);
  assert.match(page, /parked|passenger/i);
  assert.match(page, /local emergency services/i);
});

test('sound check has discoverable links from primary site surfaces', () => {
  const base = read('src/_includes/base.njk');
  const home = read('src/index.njk');
  assert.match(base, /<li><a href="\/listen\/">Sound Check <span[^>]*>Beta<\/span><\/a><\/li>/);
  assert.match(base, /<li><a href="\/listen\/">Tesla Sound Check \(Beta\)<\/a><\/li>/);
  assert.match(home, /<a href="\/listen\/"[^>]*data-sound-check-entry/);
});

test('hidden audio upload input exposes a visible keyboard focus indicator', () => {
  const page = read('src/listen.njk');
  assert.match(page, /\.file-label:focus-within\s*\{[^}]*outline:/);
});

test('beta tool remains noindex and analytics-free during public validation', () => {
  const page = read('src/listen.njk');
  const base = read('src/_includes/base.njk');
  assert.match(page, /^noindex:\s*true$/m);
  assert.match(base, /if not noindex/);
});

test('audio replacement and consent-gate reset invalidate asynchronous capture work', () => {
  const page = read('src/listen.njk');
  assert.match(page, /let currentAudio = null, activeCapture = null/);
  assert.doesNotMatch(page, /let currentAudio = null, recorder = null, chunks = \[\], stream = null/);
  assert.match(page, /function invalidateOperations\(\)[\s\S]*operationToken \+= 1;[\s\S]*stopCapture\(\)/);
  assert.match(page, /function beginAudioReplacement\(\)[\s\S]*invalidateOperations\(\)/);
  assert.match(page, /pendingRecordToken !== null/);
  assert.match(page, /button\.disabled=true; status\.textContent='Waiting for microphone permission…'/);
  assert.match(page, /const localChunks=\[\], localRecorder=new MediaRecorder\(localStream\)/);
  assert.match(page, /if\(!operationIsCurrent\(token\)\)\{localStream\.getTracks\(\)\.forEach\(t=>t\.stop\(\)\);return;\}/);
  assert.match(page, /function resetConsentGate\(\)[\s\S]*clearSession\(\)/);
});

test('withdrawal clears all session inputs, audio, warnings, and accessible results', () => {
  const page = read('src/listen.njk');
  assert.match(page, /document\.querySelectorAll\('#model,#year,#when,#area'\)[\s\S]*selectedIndex = 0/);
  assert.match(page, /\$\('words'\)\.value = ''/);
  assert.match(page, /\$\('upload'\)\.value = ''/);
  assert.match(page, /#warningBrake,#warningSteering,#warningSmoke,#warningImpact/);
  assert.match(page, /currentAudio = null; lastAnalysis = null; analyzeButton\.disabled = true/);
  assert.match(page, /emptyResultsMarkup = '[^']*id="results-title"/);
  assert.match(page, /\$\('results'\)\.innerHTML = emptyResultsMarkup/);
});

test('silent consent-gate reset completely restores the locked initial gate', () => {
  const page = read('src/listen.njk');
  const reset = page.match(/function resetConsentGate\(\) \{([\s\S]*?)\n  \}/);
  assert.ok(reset, 'resetConsentGate should exist');
  assert.match(reset[1], /consentGranted = false/);
  assert.match(reset[1], /clearSession\(\)/);
  assert.match(reset[1], /Object\.values\(consentChecks\)[\s\S]*input\.checked = false/);
  assert.match(reset[1], /refreshConsent\(\)/);
  assert.match(reset[1], /toolWorkspace\.hidden = true/);
  assert.match(reset[1], /consentPanel\.hidden = false/);
  assert.doesNotMatch(reset[1], /invalidateOperations|stopCapture/);
  assert.doesNotMatch(reset[1], /focus|scrollIntoView/);

  const withdrawal = page.match(/\$\('consent-withdraw'\)\.addEventListener\('click', \(\) => \{([\s\S]*?)\n  \}\);/);
  assert.ok(withdrawal, 'withdrawal handler should exist');
  assert.match(withdrawal[1], /resetConsentGate\(\)/);
  assert.match(withdrawal[1], /focus\(\{ preventScroll: true \}\)/);
  assert.match(withdrawal[1], /scrollIntoView/);

  const start = page.match(/consentStart\.addEventListener\('click', \(\) => \{([\s\S]*?)\n  \}\);/);
  assert.ok(start, 'consent start handler should exist');
  assert.match(start[1], /status\.textContent = 'Choose a demo, record, or upload a sound\.'/);
});

test('BFCache lifecycle silently restores the consent gate', () => {
  const page = read('src/listen.njk');
  assert.match(page, /window\.addEventListener\('pagehide', resetConsentGate\)/);
  assert.match(page, /window\.addEventListener\('pageshow', event => \{ if \(event\.persisted\) resetConsentGate\(\); \}\)/);
  assert.doesNotMatch(page, /window\.addEventListener\('pagehide',[^{]*\{[^}]*invalidateOperations\(\)/);
});
