# Bahá'í Micro-Deepening

A guided understanding app for the Bahá'í Writings — not a scripture library
(Ocean already does that well) and not a summary app (sacred text isn't
content to be condensed). This app helps people **study, understand,
remember, apply, and explain** the Writings, built for someone who may know
very little about the Faith.

See **[VISION.md](./VISION.md)** for the full mission statement and standing
design principles — read that before making product or content decisions.

## Concept

- **Thematic learning paths** (Consultation, Unity, Justice, Prayer, the
  Covenant, etc.), each made up of short lessons.
- **Three depth tiers per topic**: Quick (6 min, one idea/passage/action),
  Explore (10 min, the intended default), and Deep Dive (15 min, for
  someone who wants to go deeper) — see the Háhút lesson for the
  established pattern.
- **A consistent lesson flow**: Read → Understand → Reflect → Discuss → Live It,
  ending with a short memorization/review step. (Next planned upgrade: an
  "Explain it in your own words" teach-back step — see VISION.md.)
- **Source integrity as a first-class constraint**: every quotation is verbatim
  with an authoritative citation; sacred text is always visually distinguished
  from interpretation or AI-generated commentary; AI explanations are never
  presented as scripture.
- Optional supporting features under consideration: concept maps between
  themes, cross-references (study-Bible style), spaced-repetition
  memorization, and a consultation/study-circle mode for group use.

## Tech stack

- [Expo](https://expo.dev) (React Native + TypeScript) — one codebase targeting
  iOS, Android, and web.

## Getting started

```bash
npm install
npm run start   # then choose ios / android / web
```

## Status

Early scaffolding. No content pipeline, backend, or AI companion has been
built yet — see project discussion for the full feature exploration.
