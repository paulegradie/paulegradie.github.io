# PaulGradie.com Site Inventory — 2026-05-03

This inventory was prepared from the live site at https://paulgradie.com and the public repository at https://github.com/paulegradie/paulegradie.github.io.

## Live top-level pages

| Route | Page | Current role | Recommended action |
|---|---|---|---|
| `/` | Home | Hero, latest writing, education/career snapshot | Reposition as a stronger executive landing page: scientist-engineer, AI-native systems thinker, platform leader, founder/operator, public writer. |
| `/about/` | About | Short personal/professional bio | Expand into the central narrative page. Preserve minimalism, but add proof-backed sections: research → data science/AI → platform leadership → products/writing. |
| `/articles/` | Articles | Blog index grouped by year | Keep; improve taxonomy, featured series, AI/engineering themes, and maybe add “Start here” guides. |
| `/projects/` | Projects | Project cards and external links | Expand with project categories: active studio/products, open-source/proof-of-work, research/experiments, historical projects. |
| `/resume/` | Resume | Web resume / principal-level snapshot | Keep concise; make it more evidence-rich. Add impact bullets, canonical career spine, “what I do now”, and recruiter-ready CTA. |
| `/music/` | Music | Minimal music page with SoundCloud link | Keep as human texture; lightly improve copy and presentation without over-investing. |
| `/recruiters/` | For Recruiters | Token-gated recruiter page | Keep gated, but improve unlocked shell and gated content brief if local code contains the protected data. |
| `/Sailfish/` | Sailfish docs microsite | Documentation site for Sailfish | Treat as separate product docs. Do not rewrite as biography. Add only cross-links/branding if appropriate. |

## Source-only or likely hidden routes discovered in repository

| File/route | Status | Recommended action |
|---|---|---|
| `src/pages/uses.jsx` → likely `/uses/` | Present in repo, not visible in main nav/search | Decide whether to revive as “Uses / Tools / Workstation” or remove if obsolete. Could become a strong AI-workstation page. |
| `src/pages/thank-you.jsx` → likely `/thank-you/` | Present in repo, not visible in main nav/search | Keep if used by forms/download flows; otherwise confirm before deleting. |
| `src/pages/articles/2023/.career-story-1` | Dot-prefixed content directory; earlier public link returns 404 | Treat as intentionally hidden or broken legacy content. Do not surface unless Paul wants it restored. |
| `/articles/2026/closing-the-adoption-gap-vibe-coding/` | Search index result but returns 404 | Remove stale references if present, or restore/redirect if this content became Proxy Coding or Guild Driven Development. |

## Live article pages visible from the Articles index

### 2026
1. `/articles/2026/we-need-to-start-talking-to-aI-like-it-thinks/` — We Need to Start Talking to AI Like It Thinks — April 16, 2026
2. `/articles/2026/the-glass-wall-in-global-tech-pay/` — The Glass Wall in Global Tech Pay — April 12, 2026
3. `/articles/2026/proxy-code-formerly-known-as-vibe-coding/` — Proxy Coding (formerly known as "Vibe Coding") — February 21, 2026
4. `/articles/2026/guild-driven-development/` — Guild Driven Development: The Review Guild Model for AI enabled development — February 7, 2026

### 2025
5. `/articles/2025/ai-agent-thread-transitions/` — Seamless AI Agent Thread Transitions: A Debugging Success Story — January 24, 2025

### 2024
6. `/articles/2024/building-relationships/` — Building Work Relationships — August 27, 2024

### 2023
7. `/articles/2023/iterative-planning/` — Iterative Planning — December 6, 2023
8. `/articles/2023/need-driven-conversations/` — Need-Driven Conversations — October 30, 2023
9. `/articles/2023/incremental-changes/` — Incremental Changes — October 22, 2023
10. `/articles/2023/ai-first-api-design/` — AI-first API design — October 17, 2023
11. `/articles/2023/the-parallels-between-biology-and-software/` — The Parallels Between Biological Evolution and Software Development — October 6, 2023
12. `/articles/2023/friendly-yet-effective-prs/` — Crafting Friendly yet Effective Pull Requests — October 2, 2023
13. `/articles/2023/how-did-matter-scatter/` — How did matter scatter across the universe? — September 27, 2023
14. `/articles/2023/a-future-with-artificial-intelligence/` — A Future with Artifical Intelligence — September 26, 2023
15. `/articles/2023/moments-of-a-distribution/` — Why are descriptive statistics of a distribution called "moments"? — July 26, 2023
16. `/articles/2023/Syntax-behind-python-sorted/` — Syntax behind sorted(key=lambda: ...) — May 18, 2023
17. `/articles/2023/deploying-nextjs-to-github-pages/` — Error building mdx page with NextJS in github actions — May 17, 2023
18. `/articles/2023/name-phd-or-is-that-too-much/` — Name, PhD - or is that too much? — May 15, 2023

### 2022
19. `/articles/2022/generic-endpoint-abstractions/` — Generic Abstractions in ASP.NET core using MediatR — May 30, 2022
20. `/articles/2022/iterations-of-the-palavyr-api-part-3/` — Iterations on the Palavyr API - Part 3 — May 16, 2022
21. `/articles/2022/iterations-of-the-palavyr-api-part-2/` — Iterations on the Palavyr API - Part 2 — April 21, 2022
22. `/articles/2022/iterations-of-the-palavyr-api-part-1/` — Iterations on the Palavyr API - Part 1 — April 20, 2022
23. `/articles/2022/using-autowired-properties/` — To use Autowired properties or not - that is the question — January 26, 2022

## Repository facts useful to the local coding agent

- Repository: `paulegradie/paulegradie.github.io`
- App structure: `src/components`, `src/images`, `src/lib`, `src/pages`, `src/styles`, `src/templates`
- Framework: Next.js 13
- Styling: Tailwind CSS
- Content: MDX
- Deployment: GitHub Pages static export
- Top-level pages in code: `_app.jsx`, `_document.jsx`, `about.jsx`, `index.jsx`, `music.jsx`, `projects.jsx`, `recruiters.jsx`, `resume.jsx`, `thank-you.jsx`, `uses.jsx`
- Article directory structure: `src/pages/articles/{year}/{slug}` plus `src/pages/articles/index.jsx`

## Important audit notes

1. The live site is already strong and concise, but it under-expresses Paul’s breadth.
2. The best upgrade is not “more content everywhere”; it is better narrative architecture.
3. Preserve the semi-minimal design: short sections, strong headings, crisp cards, high signal.
4. Add proof and breadth without turning the site into a dense CV dump.
5. Treat Sailfish docs as a product documentation microsite, not part of the personal narrative rewrite.
6. Check for stale routes and 404s before publishing.
