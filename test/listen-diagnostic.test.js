const test = require('node:test');
const assert = require('node:assert/strict');
const lab = require('../src/js/listen-diagnostic.js');

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
