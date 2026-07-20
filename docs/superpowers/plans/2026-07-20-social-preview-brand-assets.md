# Social Preview Brand Assets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the portfolio's browser favicon and add a coordinated 1200 x 630 Open Graph image for WhatsApp and other social previews.

**Architecture:** Generate a restrained editorial background, then compose it deterministically with the existing transparent Nadine portrait and exact typography so identity and copy remain accurate. Publish static image files through Next.js 16 metadata file conventions, while retaining the existing metadata title and description.

**Tech Stack:** Next.js 16 App Router metadata conventions, SVG, Sharp, AI image generation, npm verification scripts

## Global Constraints

- Use `#08090b` as the near-black background and `#f62a99` as the vivid pink accent.
- Social image copy must read `Nadine Shokair` and `UX/UI Designer · Cairo` verbatim.
- Use the existing Nadine portrait without changing her recognizable appearance.
- Open Graph output must be exactly 1200 x 630 pixels and remain below 8 MB.
- Twitter output must remain below 5 MB.
- The favicon must remain recognizable at 16 x 16, 32 x 32, and 48 x 48 pixels.
- Preserve the existing page title and description metadata.

---

### Task 1: Create the editorial Open Graph artwork

**Files:**
- Create: `src/app/opengraph-image.png`
- Create: `src/app/twitter-image.png`
- Create: `src/app/opengraph-image.alt.txt`
- Create: `src/app/twitter-image.alt.txt`
- Consume: `public/images/nadine-cutout.png`

**Interfaces:**
- Consumes: the existing 1448 x 1086 transparent portrait and the approved palette/copy.
- Produces: static Next.js metadata images at 1200 x 630 and matching alternative text.

- [ ] **Step 1: Inspect the source portrait**

Use image inspection to confirm the cutout, pose, edge quality, and safe crop before generation or composition.

- [ ] **Step 2: Generate a text-free editorial background**

Use the built-in image generation path with this prompt:

```text
Use case: ads-marketing
Asset type: text-free Open Graph background for a UX/UI designer portfolio
Primary request: Create an abstract editorial backdrop for a sophisticated personal design portfolio.
Scene/backdrop: deep near-black charcoal field with restrained architectural geometry, subtle tactile grain, and one vivid pink accent gesture.
Style/medium: premium contemporary art-direction, minimal, high contrast, polished.
Composition/framing: landscape 1200:630 composition; quiet negative space on the left for typography and a visually interesting but uncluttered right side behind a portrait.
Color palette: dominant #08090b, limited #f62a99 accent, small soft-white details.
Constraints: no people, no portraits, no letters, no words, no logos, no watermark; keep the left half dark and calm for readable type.
Avoid: gradients that look generic, neon cyberpunk styling, busy patterns, mockup devices, interface screenshots.
```

- [ ] **Step 3: Compose the final 1200 x 630 image**

Use Sharp to resize/crop the generated background, place `public/images/nadine-cutout.png` on the right without altering identity, and render the exact approved copy on the left. Use the bundled `VC Nudge Black` font for the name and `Aeonik Mono` for the role. Export an optimized PNG as `src/app/opengraph-image.png`.

- [ ] **Step 4: Create Twitter and alt assets**

Copy the verified Open Graph artwork to `src/app/twitter-image.png`. Write `Nadine Shokair — UX/UI Designer in Cairo` to both `.alt.txt` files.

- [ ] **Step 5: Validate the artwork**

Run:

```bash
sips -g pixelWidth -g pixelHeight src/app/opengraph-image.png
du -h src/app/opengraph-image.png src/app/twitter-image.png
```

Expected: both dimensions are 1200 x 630; Open Graph is below 8 MB and Twitter is below 5 MB. Inspect the output visually for exact text, portrait fidelity, contrast, and safe margins.

### Task 2: Replace the browser favicon

**Files:**
- Modify: `public/seo/favicon.svg`
- Modify: `src/app/favicon.ico`
- Verify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: existing `metadata.icons.icon` reference to `/seo/favicon.svg`.
- Produces: a coordinated `NS` monogram in SVG and multi-resolution ICO formats.

- [ ] **Step 1: Create the monogram SVG**

Replace the existing mark with a simple rounded-square near-black field, a bold white `N`, and vivid-pink `S`. Keep all geometry centered with enough padding for 16 x 16 rendering.

- [ ] **Step 2: Generate the ICO**

Render the SVG to 16, 32, and 48 pixel raster layers and package them as `src/app/favicon.ico`, preserving the App Router favicon convention.

- [ ] **Step 3: Inspect favicon sizes**

Render and visually inspect 16, 32, and 48 pixel previews. Confirm the letters remain distinguishable and the pink/white contrast survives reduction.

### Task 3: Verify Next.js metadata and production build

**Files:**
- Verify: `src/app/layout.tsx`
- Verify: `src/app/opengraph-image.png`
- Verify: `src/app/twitter-image.png`

**Interfaces:**
- Consumes: Next.js static metadata files and existing root metadata.
- Produces: a production build with `og:image`, `twitter:image`, and favicon metadata.

- [ ] **Step 1: Run the full project check**

Run:

```bash
npm run check
```

Expected: ESLint, TypeScript, and the Next.js production build all exit successfully.

- [ ] **Step 2: Verify generated metadata routes**

Inspect the Next.js build output and rendered document metadata. Confirm the root route exposes Open Graph and Twitter image metadata while keeping the existing title and description.

- [ ] **Step 3: Review the final diff**

Run:

```bash
git diff --check
git status --short
```

Expected: no whitespace errors; only the planned branding assets, metadata files, and planning documentation are changed.

- [ ] **Step 4: Commit the implementation**

```bash
git add public/seo/favicon.svg src/app/favicon.ico src/app/opengraph-image.png src/app/twitter-image.png src/app/opengraph-image.alt.txt src/app/twitter-image.alt.txt docs/superpowers/plans/2026-07-20-social-preview-brand-assets.md
git commit -m "feat: add branded social preview assets"
```
