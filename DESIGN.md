---
name: Luis Miguel Del Gallego Horta — Portfolio
description: A git-commit-log framing of an 18-year engineering career, in dark terminal mono and editorial serif.
colors:
  terminal-black: "#0b0d0f"
  raised-black: "#14171a"
  card-black: "#101315"
  paper: "#eae6dc"
  cool-gray: "#9aa0a6"
  faded-slate: "#7a8087"
  terminal-green: "#d7ff3f"
  terminal-green-dim: "#9db32b"
  terminal-green-bright: "#e4ff70"
  warning-ember: "#ff6b45"
  hairline: "rgba(234, 230, 220, 0.12)"
  hairline-strong: "rgba(234, 230, 220, 0.22)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.6rem, 6.5vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.4rem, 6vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.9rem, 4vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.008em"
  body:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  xs: "3px"
  sm: "4px"
  md: "6px"
  pill: "999px"
  full: "50%"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.75rem"
  lg: "2.75rem"
  xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.terminal-green}"
    textColor: "{colors.terminal-black}"
    rounded: "{rounded.sm}"
    padding: "0.85em 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.terminal-green-bright}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.85em 1.4em"
  button-ghost-hover:
    textColor: "{colors.terminal-green}"
  tag-pill:
    backgroundColor: "transparent"
    textColor: "{colors.cool-gray}"
    rounded: "{rounded.pill}"
    padding: "0.45em 0.8em"
  tag-pill-hover:
    backgroundColor: "{colors.terminal-green}"
    textColor: "{colors.terminal-black}"
  card-default:
    backgroundColor: "{colors.card-black}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "1.6rem 1.8rem"
  card-accent:
    backgroundColor: "{colors.warning-ember}"
    textColor: "{colors.terminal-black}"
    rounded: "{rounded.md}"
    padding: "1.5rem 1.7rem"
---

# Design System: Luis Miguel Del Gallego Horta — Portfolio

## Overview

**Creative North Star: "The Commit Log"**

The site reads as a terminal session documenting one engineer's career: a blinking cursor, `$ whoami` / `$ cat skills.json` / `$ ./contact.sh` prompts, a scroll-position progress bar that behaves like a loading indicator, and an Experience section explicitly modeled as `git log --oneline` — branch names, commit dots, a rail connecting them, older roles "squashed" into one faded entry. Fraunces serif breaks in only at the handful of moments that need editorial weight (the name, section headlines, the closing statement, large numerals); everything else — navigation, labels, body copy, buttons — stays in IBM Plex Mono, because this is a tool built by an engineer, not a brochure.

The mood is precise and confident, with a controlled amount of technical humor (the blinking cursor, the `⎇` branch glyph, the terminal-prompt copy) rather than either pure austerity or editorial softness. Dark mode only — there is no light theme to preserve parity with.

**Key Characteristics:**
- Two-typeface system: Fraunces for rare display/editorial moments, IBM Plex Mono for everything else — never a third family or a generic sans-serif.
- Flat-by-default surfaces separated by 1px hairlines, not resting shadows; shadows appear only as hover/scroll feedback or a deliberate colored halo.
- One rare, warm "alert" color (Warning Ember) breaks the otherwise green-on-black palette exactly once, to mark the AI/agentic-coding differentiator.
- A real git-log metaphor (branches, commits, squashed history) structures the Experience section; it's a structural device, not a decorative icon.

## Colors

The palette is a near-black terminal canvas with a single high-signal green and one rare warm "alert" color that never spreads beyond its one job.

### Primary
- **Terminal Green** (`#d7ff3f`): the only color that means "this is live, active, or the primary action." Used for the active nav link, the scroll-progress bar, the blinking cursor, the primary CTA button, the current-job commit dot, and link/tag hover fills. If something is lime, it is interactive or current — never passive decoration.
- **Terminal Green Dim** (`#9db32b`): a desaturated/darker Terminal Green for secondary structural marks that still belong to the "green" family but shouldn't compete with the primary signal — section numbers (`01`, `02`…), branch labels, list-item `+` markers, the timeline rail once it's been "passed."
- **Terminal Green Bright** (`#e4ff70`): the primary button's hover state only — a brightened Terminal Green, not a separate semantic color.

### Secondary
- **Warning Ember** (`#ff6b45`): reserved exclusively for the "AI & Agentic Coding" skill tile. It is the one deliberate break from the green/black palette, and it exists to make the AI/agentic-coding differentiator impossible to scroll past. It must never appear on any other tile, button, or surface — introducing a second Ember use dilutes the one signal it's built to carry.

### Neutral
- **Terminal Black** (`#0b0d0f`): page background, and the text color used on top of Terminal Green (buttons, tags-on-hover).
- **Raised Black** (`#14171a`): the mobile nav dropdown surface — one step up from the page background.
- **Card Black** (`#101315`): commit cards and skill tiles — the resting surface for content blocks.
- **Paper** (`#eae6dc`): primary text color; a warm off-white rather than pure white, consistent with the "printed terminal output" feel.
- **Cool Gray** (`#9aa0a6`): secondary/body text — descriptions, nav labels at rest, tag text.
- **Faded Slate** (`#7a8087`): tertiary/meta text — dates, section numbers' companion captions, the squashed-history note.
- **Hairline** (`rgba(234,230,220,0.12)`) / **Hairline Strong** (`rgba(234,230,220,0.22)`): the two border opacities used to separate every surface at rest; see the Elevation section — this system borders, it does not shadow.

### Named Rules
**The Live Signal Rule.** Terminal Green only ever marks something interactive or currently true (active nav, current job, blinking cursor, primary action). It never decorates a static element.

**The Ember Exception Rule.** Warning Ember belongs to exactly one tile. Any new "callout" or "featured" surface reaches for a border, a size span, or motion before it reaches for a second color.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback) — a variable serif loaded at weights 400 and 600, plus an italic 500 cut that is currently unused and available for a future pull-quote-style moment.
**Body/Label Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular, Menlo fallback) — loaded at weights 400/500/600, used for literally everything that isn't a display moment: body copy, nav, buttons, labels, card titles.

**Character:** A serif/mono duality where the serif is reserved for the handful of moments that carry emotional or editorial weight (the name, section headlines, the closing pitch, big numerals) and the mono carries every operational surface — the site is a terminal with occasional moments of print.

### Hierarchy
- **Display** (600, `clamp(2.6rem, 6.5vw, 4.6rem)`, line-height 1.02): the hero name only. Letter-spacing starts at `-0.012em` and tightens to `-0.018em` at ≥760px and `-0.024em` at ≥1100px as the rendered size grows — tracking is never a single fixed value across breakpoints. Fraunces at regular 400 also appears at display scale for the About section's large numeral stats (2.4rem) and the sidebar brand mark (1.5rem) — a quieter, non-bold expression of the same typeface for secondary emphasis.
- **Headline** (600, `clamp(2.4rem, 6vw, 3.6rem)`, line-height 1.05): the Contact section's closing statement ("Let's ship something."). Tracking scales `-0.01em` → `-0.016em` → `-0.02em` across the same breakpoints as Display.
- **Title** (600, `clamp(1.9rem, 4vw, 2.6rem)`): the four numbered section headlines (About, Experience, Skills, Contact). Tracking scales `-0.008em` → `-0.012em` → `-0.016em`.
- **Body** (400, 16px / line-height 1.6, mono): default reading copy. The About section's lede paragraph uses Fraunces at regular 400, `clamp(1.25rem, 2.4vw, 1.55rem)`, line-height 1.5 instead — a softer editorial-intro register that still counts as Body, not Display.
- **Label** (400, `0.72–0.85rem`, uppercase, `0.06em` tracking, mono): nav links, stat labels, tag chips. A second, non-uppercase label register (no letter-spacing) carries meta text — commit dates, branch names, section sub-captions — at the same size range.

### Named Rules
**The No-Third-Font Rule.** Fraunces and IBM Plex Mono are the entire system. A generic sans-serif anywhere breaks the terminal/editorial duality that defines it.

**The Optical Tracking Rule.** Any display-scale heading's letter-spacing tightens as its clamp'd font-size grows with the viewport; a single fixed tracking value across all breakpoints is always wrong at one end of the range.

## Layout

A single centered column with one wide exception (the hero) and one full-bleed exception (the fixed sidebar on wide desktop). `--container` caps body sections at 1080px; the hero grid runs wider, to 1280px. Horizontal padding is one fluid token, `--gutter: clamp(1.25rem, 4vw, 3rem)`, applied consistently instead of per-breakpoint hardcoded values.

Three structural breakpoints govern the whole layout, not just typography:
- **≤760px**: the Skills bento grid collapses to one column; Display/Headline/Title tracking sits at its loosest (base) value.
- **≤860px**: the top nav switches from inline links to a hamburger-triggered full-width dropdown.
- **≥1100px**: the top nav disappears entirely and is replaced by a fixed 300px-wide left sidebar (persistent brand, nav, status, and social links); `main` and the footer gain a 300px left margin to clear it. Between 761–1099px the Skills grid runs two columns.

Section vertical rhythm is `6rem` top/bottom padding by default, tightened to `4rem` where two sections sit back-to-back (`#about`'s bottom, `#experience`'s top) so the seam between them doesn't double up the whitespace.

## Elevation & Depth

Flat by default. Every resting surface (nav, cards, tiles, chips) is separated from its background by a 1px hairline border (`--border` / `--border-strong`), never a drop shadow — shadows are reserved strictly as feedback for a state change, not as a static card treatment.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 16px 40px -24px rgba(0,0,0,0.6)`): applied to a skill tile only on `:hover`, alongside a 2px upward translate — depth appears as a direct response to the cursor, not at rest.
- **Scroll-edge shadow** (`box-shadow: 0 12px 24px -16px rgba(0,0,0,0.5)`): fades in under the top nav once the page scrolls, replacing what would otherwise be a hard 1px divider — a soft separation from content passing underneath the glass, not a static rule.
- **Current-node halo** (`box-shadow: 0 0 0 4px rgba(215,255,63,0.15)` / `0 0 0 3px rgba(215,255,63,0.18)`): a lime glow reserved for exactly two "this is live" markers — the current-job commit dot and the sidebar status dot. Never used as generic emphasis.
- **Portrait ambient glow** (`box-shadow: 0 0 60px -12px rgba(60,140,220,0.35)`): a cool blue halo behind the hero portrait only — the one place color temperature breaks from the green/ember system, because it's lighting the photograph, not labeling UI state.

### Named Rules
**The Shadow-Is-Feedback Rule.** A box-shadow only ever appears in response to hover, scroll position, or "this is the current/live one" — never as a resting card treatment. Rest state is a hairline border.

## Shapes

Corners are small and consistent: `3px` on the smallest meta chips (`.tech span`), `4px` on buttons and the social icon buttons, `6px` on every card and tile. Pills (`999px`) are reserved for the Skills tags, and full circles (`50%`) for the commit-log's rail dots. Borders are always 1px hairlines, never thicker, never colored except on hover/active state.

The one signature non-rectangular device is the **bracket mark**: four 2px lime L-shaped corner brackets framing the hero portrait, like a viewfinder or crosshair. It appears exactly once. It is not a reusable photo-frame style — don't apply it to any other image or card.

## Components

### Buttons
- **Shape:** 4px radius, mono 500-weight label, generous `0.85em 1.4em` padding.
- **Primary:** Terminal Green fill, Terminal Black text; hover brightens the fill to Terminal Green Bright and lifts 2px; press (`:active`) snaps to `scale(0.97)` on a fast 0.1s transition so touch users get feedback without waiting for hover.
- **Ghost:** transparent fill, 1px Hairline Strong border, Paper text; hover turns both the border and text Terminal Green. Same lift-on-hover and press-scale behavior as Primary.

### Chips / Tags
- **Skills tags (`.tags span`):** transparent fill, 1px Hairline border, pill radius, Cool Gray text; hover fills solid Terminal Green with Terminal Black text — a full state flip, not a tint.
- **Tech chips (`.tech span`):** smaller, static (no hover), 3px radius, Hairline border — read as metadata, not as interactive controls.

### Cards / Containers
- **Corner style:** 6px radius on both card types.
- **Background:** Card Black at rest.
- **Shadow strategy:** none at rest; see Elevation & Depth.
- **Border:** 1px Hairline, brightening to Hairline Strong on hover.
- **Internal padding:** `1.6rem 1.8rem` (commit cards), `1.5rem 1.7rem` (skill tiles).
- **Distinctive behavior:** both card types track the cursor position via `--mx`/`--my` custom properties (rAF-throttled) to drive a soft radial Terminal-Green spotlight (`rgba(215,255,63,0.08–0.1)`) that follows the pointer under `::before`; the commit card also translates 4px on hover, the skill tile lifts 2px with the hover-lift shadow.
- **Accent variant (skill tile only):** Warning Ember fill, Terminal Black text/border — see the Ember Exception Rule. Its internal tag chips invert to Terminal-Black-on-transparent and flip to Terminal-Black-on-Warning-Ember on hover, keeping the same "full flip" chip behavior as the default tags.

### Navigation
Three responsive forms of the same nav model (logo/brand, four numbered links, a live scroll-progress indicator):
- **≥1100px — sidebar:** fixed 300px left column; brand + nav stacked top, status dot + social icons bottom; a 2px vertical Terminal-Green progress bar on its outer edge.
- **761–1099px — top bar:** fixed translucent glass bar (`rgba(11,13,15,0.72)` + 10px backdrop blur — falls back to solid Terminal Black with no blur under `prefers-reduced-transparency`); inline links; a 2px horizontal Terminal-Green progress bar along its bottom edge; gains the scroll-edge shadow once scrolled.
- **≤860px — dropdown:** same top bar, plus a 44×44px hamburger toggle (visual glyph stays ~22px; the larger box is tap-target padding, not a bigger icon); opens a full-width dropdown sliding down from behind the bar and fading in together, closing back along the identical path — enter and exit never diverge. The closed dropdown is `visibility: hidden` as well as translated/faded so its links leave the tab order entirely; it's not just invisible, it's actually gone until opened.
- **Link states:** Cool Gray at rest, Terminal Green when active/hovered. All interactive elements (links, buttons, the toggle) share one `:focus-visible` treatment — a 2px Terminal Green outline with 2px offset — and a transparent tap-highlight so the custom press/hover feedback is the only thing a touch tap shows.

### The Commit Log (signature component)
The Experience section's real git-log metaphor: each job is a `<li>` with a left rail (a dot, connected by a 1px vertical line to the next entry) and a card carrying a fake `main ← branch-name` header, a commit date, the role/company/location as the "commit message," bullet achievements prefixed with a `+` in Terminal Green Dim, and a tech-tag row. The current job's dot is solid Terminal Green with the current-node halo; past roles get a hollow Faded-Slate dot. The rail line brightens from Hairline Strong to Terminal Green Dim once its card has scrolled into view, so the "history" visually fills in as the visitor reads down it. Older roles collapse into one visually faded, non-interactive "squashed-commits" card — the metaphor extends all the way to git's own squash-merge convention.

## Do's and Don'ts

### Do:
- **Do** keep Terminal Green tied to meaning (live/active/primary) — the Live Signal Rule.
- **Do** use a hairline border for any surface at rest; save box-shadow for a hover, scroll, or "this is current" state.
- **Do** scale display/headline/title letter-spacing across the same three breakpoints (760px / 1100px) already used for tracking elsewhere, rather than a single fixed value.
- **Do** give every new interactive element a `:focus-visible` ring and an `:active` press state — this system treats touch and keyboard as first-class, not hover-only.
- **Do** provide a static/opaque fallback for any new blurred or animated surface under `prefers-reduced-transparency` / `prefers-reduced-motion`.

### Don't:
- **Don't** introduce a second Warning Ember surface. It is load-bearing precisely because it's rare — the Ember Exception Rule.
- **Don't** add a drop shadow to a card or tile's resting state; it reads as off-system immediately.
- **Don't** reuse the portrait's bracket/viewfinder mark on another image, card, or avatar — it's a one-time signature, not a frame component.
- **Don't** introduce a third typeface or a generic sans-serif; the Fraunces/IBM Plex Mono duality is the entire type system.
- **Don't** make the mobile nav dropdown merely invisible when closed (opacity/translate only) — it must also leave the tab order (`visibility: hidden`), or keyboard users tab into off-screen links.
