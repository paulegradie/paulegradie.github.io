# Comprehensive Local Coding Agent Prompt — Update paulgradie.com from State of Paul v2

You are working in Paul Gradie’s personal website repository, likely `paulegradie.github.io`.

Your job is to update the website so it reflects the current “State of Paul” narrative while preserving the existing semi-minimal, concise, tasteful design.

This is not a redesign from scratch. This is a narrative, copy, and content-architecture upgrade.

## Most important correction

Do **not** position Paul primarily as an AI model builder or generic AI consultant.

Paul has real AI credibility, but his strongest and most accurate current positioning is:

> A research-trained software engineer, platform leader, and product builder who turns ambiguous, complex systems into reliable production software — with applied AI, scientific reasoning, and pragmatic engineering leadership as part of the toolkit.

AI should be visible, but not inflated. Use AI as a capability layer, not as the entire identity.

Avoid headline claims like:

- “I help companies build AI models.”
- “I build foundational AI models.”
- “Frontier AI model builder.”
- “Foundation model development” as the primary offer.
- “Model lab” as the central frame.

Prefer precise phrases like:

- applied AI systems
- practical AI workflows
- AI-enabled engineering
- AI-native product and engineering workflows
- production AI/ML background
- model-aware product/platform thinking
- research-to-production engineering
- scientific reasoning and experimentation

## Operating principles

1. Preserve the current visual style unless a small component/layout improvement clearly supports the narrative.
2. Make the site more complete without making it bloated.
3. Treat every page as part of one coherent professional story.
4. Prefer short, high-signal sections over long prose.
5. Use proof-backed claims and avoid generic AI buzzwords.
6. Keep private/sensitive personal details out of the website.
7. Do not invent unverifiable facts.
8. Do not remove existing articles unless clearly broken, duplicate, stale, and safe to remove.
9. Run the local build/test/lint commands before finishing.
10. Produce a clear final summary of changed files and any follow-up tasks.

## Repository orientation

Inspect the repo before editing. Expected structure from public GitHub:

- `src/pages/index.jsx`
- `src/pages/about.jsx`
- `src/pages/articles/index.jsx`
- `src/pages/projects.jsx`
- `src/pages/resume.jsx`
- `src/pages/music.jsx`
- `src/pages/recruiters.jsx`
- `src/pages/uses.jsx`
- `src/pages/thank-you.jsx`
- `src/pages/articles/{year}/{slug}`
- `src/components`
- `src/templates`
- `src/styles`
- `src/lib`
- Next.js, Tailwind CSS, MDX, GitHub Pages static export.

Find the actual package scripts in `package.json`. Use the project’s real commands rather than guessing.

## Site-wide narrative target

Reposition Paul as:

> A scientist-turned-staff software engineer, platform lead, AI-fluent systems thinker, founder/operator, and writer who turns complex ideas into resilient, useful software.

The site should support four audiences at once:

1. Serious recruiters / hiring managers looking for Staff+ / Principal-level engineering talent.
2. Engineering leaders evaluating Paul’s technical judgement and leadership depth.
3. People interested in AI-enabled engineering, agent workflows, platform architecture, and product thinking.
4. Curious readers who want to understand Paul’s writing, products, music, and scientific background.

## Core message

Paul’s differentiator is the combination of:

- Scientific training and evidence-driven reasoning.
- Production software depth across .NET, platform systems, ML/NLP, cloud, and developer tooling.
- AI-native engineering philosophy: AI as collaborative reasoning and execution acceleration, not just code generation.
- Leadership through clarity, systems thinking, delivery discipline, and team process.
- Founder/operator product energy through Launch11 and related tools.
- Public communication through articles on AI, engineering practice, career, science, and team dynamics.

## Canonical career facts

Use these as canonical:

- Staff Software Engineer / Platform Team Lead at Tilt Finance, 2024–present.
- Senior Software Engineer at Octopus Deploy, 2020–2024.
- Software Engineer in Data Science / AI Team at Zendesk, 2017–2020.
- Ph.D. in Developmental Genetics, University of Melbourne, 2014–2017.
- M.Sc. in Genetics, Genomics, and Bioinformatics, University of Connecticut, 2010–2013.
- B.Sc. in Molecular and Cell Biology, University of Connecticut, 2007–2010.
- Based in Melbourne, Australia; works effectively with global/US-facing teams.
- Published in Nature Communications Biology / Communications Biology.
- AI/ML patent holder.
- Founder and repeat product builder.

Do not overstate anything beyond these facts unless the existing site/repo already contains stronger evidence.

## Strategic copy model

The homepage and site should move away from:

> “Paul helps companies build AI models.”

And toward:

> “Paul helps teams turn ambiguous, high-leverage software problems into reliable production systems, practical AI workflows, and useful products.”

The strongest site-wide frame is:

> Research depth. Production discipline. Product instinct.

or:

> I build software where research, product, and production meet.

## Site map and content tasks

### 1. Home page — `src/pages/index.jsx`

Current purpose: hero, latest writing, education/career snapshot.

Update goal: make this the sharpest possible landing page. The first screen must be accurate, senior, and differentiated without claiming Paul’s main work is AI model-building.

Suggested structure:

1. Hero
   - Eyebrow: “Melbourne-based, building for global teams”
   - H1 recommended: “I build software where research, product, and production meet.”
   - H1 alternative: “Research depth. Production discipline. Product instinct.”
   - Subhead recommended: “I’m Paul Gradie — a scientist-trained staff software engineer, platform lead, founder, and AI-fluent product builder. I help teams turn ambiguous technical problems into resilient software, practical AI workflows, and products that survive contact with reality.”
   - CTA buttons:
     - Explore Projects
     - Read Writing
     - View Resume
     - Download CV, only if already wired

2. “What I do”
   Use 3–4 compact cards:
   - Platform architecture and resilient systems.
   - Product engineering from ambiguity to production.
   - AI-enabled engineering and practical workflow design.
   - Founder-led product experiments.

3. Latest writing
   Keep existing latest writing behavior, but ensure it includes current 2026 posts.

4. Career snapshot
   Keep concise timeline:
   - Tilt Finance — Staff Software Engineer / Platform Team Lead
   - Octopus Deploy — Senior Software Engineer
   - Zendesk — Software Engineer, Data Science / AI Team
   - University of Melbourne — PhD
   - UConn — MSc / BSc

5. Optional “Start here” section
   Link to:
   - We Need to Start Talking to AI Like It Thinks
   - Guild Driven Development
   - Proxy Coding
   - The Glass Wall in Global Tech Pay
   - Sailfish
   - Launch11

Implementation notes:
- Don’t make the hero too long.
- Preserve visual restraint.
- Add a stronger “why Paul” section only if it fits naturally.
- Avoid “Applied AI and model-driven products” as a card title; use “Applied AI and practical workflows” if needed.

### 2. About page — `src/pages/about.jsx`

Current purpose: short bio.

Update goal: this should become the primary narrative page.

Suggested sections:

1. Opening
   H1: “Scientist mindset. Production software execution.”
   Body: “I started in developmental genetics, moved through data science and applied AI, and now lead platform engineering work for financial technology systems. That path shaped how I think: evidence first, systems always, production reality over theoretical cleverness.”

2. “The through-line”
   Explain:
   - Biology trained complex adaptive systems thinking.
   - ML/NLP at Zendesk connected models to production users.
   - Octopus built devtools/platform/product engineering maturity.
   - Tilt requires platform leadership, reliability, delivery, and cross-time-zone alignment.
   - Launch11/products/writing are how Paul explores the next edge.

3. “How I work”
   Bullets/cards:
   - Turn ambiguity into concrete technical plans.
   - Build testable/observable/resilient systems.
   - Use AI as a reasoning partner and workflow accelerator.
   - Lead through clarity, tradeoff discipline, and steady delivery.
   - Invest in teams, review quality, and shared language.

4. “What I’m exploring now”
   - AI-enabled engineering teams.
   - Agent workflows and review models.
   - Organizational knowledge systems.
   - Productized AI tools for individuals and small businesses.
   - Biologically aligned learning experiments / research frontier, phrased carefully as experimental exploration.

5. Closing CTA
   “If you’re building serious software, integrating AI into real workflows, or looking for a Staff+/Principal-level engineer who can operate across product, platform, and research-shaped ambiguity, I’m open to meaningful conversations.”

### 3. Resume page — `src/pages/resume.jsx`

Current purpose: concise web resume.

Update goal: make it more persuasive without duplicating the full CV.

Suggested headline:

> Staff-level engineer operating across platform architecture, production reliability, applied AI systems, and product delivery.

Suggested proof bands:
- 9+ years software experience.
- PhD-trained scientist.
- Published research + AI/ML patent.
- Platform/team leadership.
- Production ML/NLP + applied AI background.
- Global/US-facing remote collaboration.

Role copy:

Tilt Finance:
- Staff Software Engineer / Platform Team Lead.
- Leads high-leverage platform and product work across resilient architecture, migration strategy, incident response, delivery process, operational maturity, and cross-time-zone execution.
- Mention applied AI/product architecture only where supported and not as the dominant claim.
- Keep wording generic enough to avoid confidential specifics.

Octopus Deploy:
- Senior Software Engineer.
- Built and evolved production devtools systems; contributed across backend, UI, CI/CD reliability, performance testing, and developer experience.
- Connect Sailfish here if appropriate.

Zendesk:
- Software Engineer, Data Science / AI Team.
- Delivered ML/NLP and data science capabilities inside high-scale product environments, bridging model work and production software.

Education:
- Keep current education.
- Add “scientific training informs systems reasoning, uncertainty handling, and experimentation.”

CTA:
- Open full CV.
- Contact / LinkedIn.
- Projects and Articles.

### 4. Projects page — `src/pages/projects.jsx`

Current purpose: project card grid.

Update goal: stop reading like random side hustles; make it read like a product/research portfolio.

Suggested heading:

> Products, experiments, and proof-of-work.

Suggested intro:

> Outside my formal roles, I build tools and experiments that let me explore product ideas, AI-enabled workflows, developer experience, and research-shaped software. Some are active products. Some are historical proof-of-work. All of them sharpen how I think about building.

Group projects:

#### Active / current product direction
- Launch11 — studio for products and productized experiments.
- Renaym — AI-assisted media/file renaming.
- Writr — AI-powered writer’s workstation. Add card if not present and you have URL/placeholder.
- Sayr — voice-to-text / local productivity utility. Add card if not present and you have URL/placeholder.
- Siftr — email noise reduction.
- Qwerky Studio — image/art workflow.

#### Open-source / engineering proof-of-work
- Sailfish — production-friendly .NET performance test runner.
- Palavyr — full-stack chatbot-driven information capture and estimate workflows.
- SeqPyPlot — RNA-seq/time-series analysis package.
- VS Code Prompt Library — prompt/workflow management extension. Add if Paul wants it public and repo/link exists.

#### Research / frontier experiments
- Biologically aligned learning experiments.
- Knowledge graph / organizational AI / Recall-like system ideas.
- Keep this section careful: describe as experiments/research, not finished commercial products.

Implementation:
- If a project lacks a URL, use a disabled card, “Coming soon,” or omit until a link exists.
- Add tags per card: AI, .NET, Open Source, Product, Research, Developer Tools, Music/Creative, etc.
- Replace “Side Hustles” if it sounds too casual. “Projects and Product Work” or “Products, Experiments, and Proof-of-Work” is stronger.

### 5. Articles index — `src/pages/articles/index.jsx`

Current purpose: chronological article list.

Update goal: make writing feel like an intellectual/professional asset.

Add optional sections above chronological list:

1. “Start here”
   - We Need to Start Talking to AI Like It Thinks
   - Proxy Coding
   - Guild Driven Development
   - The Glass Wall in Global Tech Pay
   - Seamless AI Agent Thread Transitions

2. “Themes”
   - AI-enabled engineering
   - Software design and delivery
   - Teamwork and review
   - Science and explanation
   - Career and compensation

3. Keep chronological archive.

Fix typos if safe:
- “Artifical” → “Artificial” if it is just a title typo. Be careful about slug stability; do not break URL without redirect.
- “surviability” → “survivability” in summary if present.
- “NextJS” capitalization can remain stylistic, but “Next.js” is preferred.

Stale content checks:
- Remove or redirect references to `/articles/2026/closing-the-adoption-gap-vibe-coding/` if any exist and it is not meant to be live.
- Keep `src/pages/articles/2023/.career-story-1` hidden unless restoring intentionally.

### 6. Music page — `src/pages/music.jsx`

Current purpose: short music page.

Update goal: keep it human and lightweight.

Suggested copy:

> I compose electronic music as a creative outlet. Music scratches a different part of the same itch that pulls me toward software: structure, variation, repetition, texture, and the search for a shape that feels inevitable once it lands.

Keep SoundCloud link. Add album/track cards only if assets already exist.

### 7. Recruiters page — `src/pages/recruiters.jsx`

Current purpose: token-gated information.

Update goal: strengthen the public shell and, if gated content is in repo, align it with the new narrative.

Public shell should say:
- For serious Staff+/Principal-level engineering conversations.
- Paul is Melbourne-based, proven with US/global teams.
- Core interests: Staff/Principal software engineering, platform architecture, AI-enabled engineering, applied AI/product systems, technical leadership.
- Token is on LinkedIn.

Gated content, if present:
- Preferred roles.
- Compensation/location/availability only if Paul already keeps this there and wants it public to token-holders.
- Strong career summary.
- What makes a role worth discussing.
- Links to CV, projects, writing.

Do not expose private details in public markup if the token gate is client-side only. If the content is rendered in JS and merely hidden in the browser, treat it as public from a security standpoint.

### 8. Uses page — `src/pages/uses.jsx`

This exists in code but does not appear in current main navigation.

Decide one of three options:

A. Revive as “Uses / Workstation”
- Tools, stack, AI workflow, editor setup, terminal, .NET, cloud, writing/music stack.
- Good fit for Paul’s brand because he has a strong workstation/agent workflow narrative.

B. Rename/reframe as “Workflows”
- How Paul works with AI, agents, prompts, context documents, review guild ideas, product-building stack.

C. Remove or keep hidden
- If stale and not useful.

Preferred: turn it into a concise “Uses / Workflows” page if it is already functional.

### 9. Thank-you page — `src/pages/thank-you.jsx`

Inspect usage before editing.
- If used by a form or CV download flow, keep it.
- If unused, leave it alone unless cleanup is explicitly safe.

### 10. Sailfish docs — `/Sailfish/`

Do not rewrite the Sailfish docs as part of the personal narrative. It is a product documentation microsite.

Allowed changes:
- Add tasteful cross-link from Projects to Sailfish docs.
- Add a small “Built by Paul Gradie” or portfolio backlink if appropriate and already consistent.
- Do not disrupt docs navigation.

## Copy components to consider

### Home hero candidate A — preferred

Eyebrow:
> Melbourne-based, building for global teams

H1:
> I build software where research, product, and production meet.

Subhead:
> I’m Paul Gradie — a scientist-trained staff software engineer, platform lead, founder, and AI-fluent product builder. I help teams turn ambiguous technical problems into resilient software, practical AI workflows, and products that survive contact with reality.

CTA:
- Explore Projects
- Read Writing
- View Resume

### Home hero candidate B — more compact

H1:
> Research depth. Production discipline. Product instinct.

Subhead:
> I work across platform architecture, product engineering, applied AI, and technical leadership, helping teams move from ambiguity to production systems that are testable, observable, maintainable, and useful.

### About intro candidate

> I started in developmental genetics, moved through data science and applied AI, and now lead platform engineering work for financial technology systems. That path shaped how I think: evidence first, systems always, production reality over theoretical cleverness.

### Project intro candidate

> Outside my formal roles, I build tools and experiments that let me explore product ideas, AI-enabled workflows, developer experience, and research-shaped software. Some are active products. Some are historical proof-of-work. All of them sharpen how I think about building.

### Recruiter intro candidate

> This page is for serious Staff+/Principal-level engineering conversations. I’m Melbourne-based, proven with US-facing and globally distributed teams, and most interested in roles that combine platform architecture, AI-enabled engineering, product judgment, and high-trust technical leadership.

## Quality checklist before finishing

Run:
1. Install dependencies if needed.
2. Lint/typecheck if scripts exist.
3. Build.
4. Static export if the repo requires it.
5. Check internal links.
6. Check all main nav routes.
7. Check article index and latest writing.
8. Check mobile layout.
9. Confirm no confidential/private information was added.
10. Summarize changes.

## Broken/stale route checklist

Check and fix if present:
- `/articles/2026/closing-the-adoption-gap-vibe-coding/` search result currently points to a 404.
- `src/pages/articles/2023/.career-story-1` is hidden/dot-prefixed and may be intentionally excluded.
- Ensure article slugs and “Previous/Next” links do not point to missing pages.
- If correcting “Artifical” → “Artificial,” preserve URL or add redirect/static route if possible.

## Deliverable expected from the coding agent

After making changes, return:

1. Files changed.
2. Summary of content/narrative changes.
3. Any pages intentionally left unchanged and why.
4. Commands run and results.
5. Any unresolved follow-ups for Paul.
