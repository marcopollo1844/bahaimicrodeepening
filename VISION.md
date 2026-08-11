# Vision — Bahá'í Micro-Deepening

This document is the durable context for this project. Read it before making
product or content decisions — it explains *why* the app is shaped the way
it is, not just what's currently built.

## Mission

**Help anyone — from a total newcomer to a lifelong Bahá'í — go from
curiosity to genuine understanding of the Bahá'í Writings in minutes, and
leave every session able to explain what they learned, in their own words,
with the source to back it up.**

## The measure of success

Not "lesson completed." Instead:

> After 6–15 minutes, can I explain one Bahá'í idea to another person in my
> own words, and can I show them the source that led me there?

That reframes everything the app does. Success isn't content consumed —
it's whether a person just became capable of a real conversation about the
Faith they weren't capable of having ten minutes earlier.

## Positioning — what this is, and isn't

- **Not a library.** Ocean already does "find and read the Writings"
  excellently. This app doesn't compete there.
- **Not a summary app.** Sacred text isn't content to be condensed — it's
  the foundation everything else explains, reflects on, and points back to.
- **It is a guided understanding experience:** *Ocean helps people find the
  Writings. This app helps people study, understand, remember, apply, and
  explain them.*
- Built for someone who **may know very little about the Faith** — entry
  points are human questions ("Why is there suffering?" "What happens when
  we die?"), not book titles. The literature (Hidden Words, Kitáb-i-Íqán,
  etc.) gets introduced gradually, earned through the questions it answers
  — never a table-of-contents-first home screen.

## Standing design principles

1. **Source integrity is non-negotiable.** Every quotation verbatim and
   cited. Interpretation, analogy, and historical context always
   distinguished from scripture — never presented as if it were revealed
   word. See `content/schema.ts` — `Quotation` (cited scripture) is a
   distinct type from a step's `body` (interpretive text).

2. **Three depth tiers, not endless scroll:**
   - **Quick (6 min) = Spark** — one idea, one passage, one action.
   - **Explore (10 min) = Learn** — the intended *default*, sweet-spot
     experience (idea → Writings → connections → meaning → explanation).
   - **Deep Dive (15 min) = Explore** — for someone who says "I want to
     understand this properly."
   - When building a new topic, default to offering all three rather than
     a single fixed-length lesson. See `hahut-quick` / `hahut-explore` /
     `hahut-deep-dive` in `content/paths/journeyOfTheSoul.ts` for the
     established pattern (shared core steps, `depthLabel` field,
     progressively added depth rather than rewritten-from-scratch content).

3. **Every lesson should build toward explaining, not just absorbing.**
   The intended learning arc is:
   *Discover → Encounter → Understand → Connect → Reflect → Practice →
   Share.*

4. **The most distinctive feature, not yet built: "Explain it."** Every
   lesson should end with the learner typing or speaking a 30-second
   explanation in their own words, which the app compares to a
   source-grounded model answer and can turn into a shareable card. This is
   what turns the app from *content delivery* into *teaching people to
   teach* — the single most differentiating idea in the product research,
   and currently missing from every lesson (they end at "Remember," a
   recall check, not a teach-back).

5. **Content organization avoids feeling like a digital library.** Group by
   relatable human categories (Big Questions, Humanity & Unity, God & the
   Soul, Love & Relationships, Justice & Society, Spiritual Life, Stories,
   Community, Society), not by book title. As more paths are added, the
   home screen should move toward "What would you like to explore?"
   category cards rather than a flat list of paths.

## Where the current build stands against this

Aligned: the Path → Lesson → step-flow architecture, verbatim-cited
quotations via the `Quotation` type, and the Quick/Explore/Deep Dive split
(first applied to the Háhút lesson).

Gap: no lesson yet ends with a genuine "explain it in your own words" step
(principle 4 above). That's the next meaningful upgrade to the lesson
*format* itself, independent of writing more lesson content.
