# Implementation Checklist — Website Update v2

## Before editing

- [ ] Read `05_POSITIONING_DECISION_RECORD.md`.
- [ ] Read `02_CANONICAL_NARRATIVE.md`.
- [ ] Inspect actual repo structure and `package.json` scripts.
- [ ] Confirm current routes and navigation.
- [ ] Identify whether `/uses/` and `/thank-you/` are live, hidden, or unused.

## Positioning checks

- [ ] Homepage does not claim Paul’s main work is building AI models.
- [ ] AI is framed as applied AI, AI-enabled engineering, workflow design, and production AI/ML background.
- [ ] The primary identity is staff-level software/platform/product engineering.
- [ ] Scientific/research training is visible but not over-explained.
- [ ] Founder/product work is visible but does not weaken senior engineering credibility.
- [ ] Copy does not sound like a generic AI consultant landing page.

## Content checks

- [ ] Home page has a sharper, accurate hero.
- [ ] About page explains the through-line from science to software to platform/product leadership.
- [ ] Resume page is evidence-rich but concise.
- [ ] Projects page reads like a coherent portfolio, not random side hustles.
- [ ] Articles page includes “Start here” or theme-based surfacing if feasible.
- [ ] Recruiters page public shell is clear and serious.
- [ ] Music page remains human and lightweight.
- [ ] Sailfish docs are not accidentally disrupted.

## Routing / stale-link checks

- [ ] Check `/articles/2026/closing-the-adoption-gap-vibe-coding/` and either restore, redirect, or remove references.
- [ ] Check `src/pages/articles/2023/.career-story-1` and leave hidden unless restoring intentionally.
- [ ] Check article previous/next links.
- [ ] Check all main nav routes.
- [ ] Ensure Articles nav includes Resume if the site-wide nav normally does.

## Privacy / confidentiality checks

- [ ] No personal finance details.
- [ ] No family details.
- [ ] No compensation details except where intentionally present in public articles.
- [ ] No internal confidential company specifics.
- [ ] No token-gated private details if the gate is client-side only.

## Build checks

Use the real repo scripts, but generally:

- [ ] Install dependencies if needed.
- [ ] Run lint if available.
- [ ] Run typecheck if available.
- [ ] Run build.
- [ ] Run static export if required.
- [ ] Spot-check desktop and mobile layout.

## Final response expected from coding agent

- [ ] Files changed.
- [ ] Summary of narrative/content changes.
- [ ] Commands run and results.
- [ ] Pages intentionally left unchanged and why.
- [ ] Follow-ups for Paul.
