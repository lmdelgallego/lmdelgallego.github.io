# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Luis Miguel Del Gallego Horta for Lead/Senior Frontend or Full-Stack full-time roles. They arrive with a specific role in mind and are scanning for seniority signal, relevant stack match, and credible proof (real companies, real dates, real tech), then deciding whether to reach out or download the CV.

Open to remote international roles, not limited to Colombia/LatAm — the site should not read as geographically restricted.

## Product Purpose

A personal portfolio/CV site whose job is to get a qualified recruiter or hiring manager to email him or download his CV. It exists to compress 18+ years of experience into a scannable, credible case for a Lead/Senior frontend or full-stack hire.

## Positioning

18+ years of frontend/full-stack depth (Angular, React, Vue, TypeScript, Node.js, NestJS) across SaaS, banking, financial services, media, advertising, and desktop applications — combined with applied AI/agentic coding fluency (Claude Code, Codex, OpenAI/Anthropic APIs) as the explicit differentiator versus other candidates with similar tenure. The "AI & Agentic Coding" skill tile is deliberately the one warm/accent-colored tile in the Skills grid; that visual callout is intentional and should be preserved or amplified, not softened, in future design work.

## Operating Context

- Static site, no build step, deployed as a GitHub Pages site at `lmdelgallego.github.io` (plain HTML/CSS/JS "no framework required" per the footer — this is a confirmed constraint, not an oversight).
- Content for Experience/Skills/Stats/profile links lives in `js/data.js`; `index.html` and `js/main.js` render from it. Future content edits should go through `data.js`, not hardcoded markup.
- Single page with anchor-nav sections: About, Experience (commit-log timeline), Skills (bento grid), Contact.
- CV download (`files/Luis-Miguel-Del-Gallego-Horta-CV.pdf`) and direct email/LinkedIn/GitHub links are the primary conversion actions.

## Capabilities and Constraints

- No backend, no CMS, no analytics dashboard beyond GTM — all content changes are static file edits.
- No testimonials, references, or case-study-level proof exist on hand. Do not fabricate quotes, client names, or metrics beyond what's in `data.js`.
- Currently employed (N-iX, Bogotá) — the site should read as "open to the next opportunity," not as actively unemployed/urgent.

## Brand Commitments

- Visual world is a deliberate "engineering blueprint × terminal" aesthetic: dark mode only, Fraunces (display) + IBM Plex Mono (body/UI) pairing, lime accent (`#d7ff3f`) as the primary accent, rust (`#ff6b45`) reserved specifically for the AI/Agentic differentiator callout.
- Real portrait photo, real company names/dates, real schema.org Person markup — nothing here is placeholder; preserve factual accuracy on any content touch.

## Evidence on Hand

- Full job history with real companies, dates, and bullets (`js/data.js`).
- Real CV PDF, real email/GitHub/LinkedIn links, real portrait (`images/portrait.jpg`).
- No testimonials, press mentions, or quantified case studies exist — future work must not invent them.

## Product Principles

1. Scannability over storytelling — a recruiter should get seniority + stack match in seconds; don't bury it under narrative.
2. Every claim must be backed by real content in `data.js`; no invented proof, metrics, or testimonials.
3. The AI/agentic-coding differentiator is the one deliberate visual break from the terminal palette (rust accent) — treat it as the headline differentiator, not a footnote.
4. Geography-agnostic framing — nothing should imply the candidate is restricted to Colombia/LatAm roles.
5. Zero build-step constraint is permanent — any future feature must work as static HTML/CSS/JS on GitHub Pages.
