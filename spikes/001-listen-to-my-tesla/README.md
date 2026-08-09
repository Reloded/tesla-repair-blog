# 001: Listen to My Tesla

## Question

**Given** a Tesla owner who can capture a short suspicious noise, **when** a static-site tool analyzes the audio entirely in the browser and combines it with vehicle context, **then** can it produce an explainable, safety-aware ranking that routes the owner into existing repair guides without a server or trained model?

## Prototype

The prototype is integrated at `/listen/` and uses only browser APIs plus a small transparent JavaScript rules engine:

- microphone recording via `MediaRecorder`
- local upload and decoding via `AudioContext`
- local extraction of spectral centroid, low/high frequency energy, tonality, and transients
- context from when/where the sound occurs and plain-language description
- top-three likely symptom families with reasons and guide links
- hard safety escalation for braking, steering, smoke/heat, or impact indicators
- three generated demos for deterministic hands-on evaluation

Audio is never uploaded. The prototype makes no network request for analysis.

## Run

```bash
npm install
npm run build
npm start
```

Open `http://localhost:8080/listen/`.

Run logic tests:

```bash
node --test test/listen-diagnostic.test.js
```

## Verdict: PARTIAL

### What worked

- A useful, interactive acoustic triage flow fits the existing Eleventy/static Cloudflare architecture.
- The browser can extract enough broad sound characteristics to distinguish the included clunk, squeal, and HVAC-whine demonstrations.
- Safety escalation is independent of the acoustic rank, preventing a reassuring match from clearing dangerous symptoms.
- Results are explainable and link back into the site's core guide library.

### What didn't

- Ranking scores are heuristic, not calibrated diagnostic probabilities.
- The five profiles are illustrative; they were not trained or validated against labeled real workshop recordings.
- Phone placement, cabin acoustics, road speed, and background noise are uncontrolled.

### Surprises

- Uniform FFT window sampling missed short clunks and measured mostly background noise. Selecting the highest-energy windows fixed the prototype's transient analysis.
- A fully local implementation requires no backend, which makes privacy and static deployment unusually easy.

### Recommendation for the real build

Pilot with mechanic-labeled recordings across 8–12 high-volume symptom families. Collect explicit consent, vehicle configuration, phone placement, and mechanic-confirmed outcome. Keep the safety rules deterministic even if the ranking later moves to a trained audio model. Display calibrated uncertainty and abstain when signal quality is poor.
