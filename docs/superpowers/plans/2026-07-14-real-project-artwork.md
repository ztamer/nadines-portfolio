# Real Project Artwork Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace invented PetPal, Vertex, and Cinema imagery with exact crops from the supplied project references and replace the homepage placeholder sequence with four linked real projects.

**Architecture:** Keep the existing `WorkSection` and `CaseStudy` presentation components unchanged except for project data and card links. Produce deterministic 16:10 raster assets from the supplied JPEGs by cropping the authentic project-picture regions, scaling them without distortion, and padding them on a neutral canvas so no UI is lost.

**Tech Stack:** Next.js 16, React 19, TypeScript, Next Image, Framer Motion, Node test runner, FFmpeg for lossless-layout raster extraction.

## Global Constraints

- Preserve the homepage layout, animation, typography, spacing, and dark art direction.
- Use only image pixels from `/Users/zeyad/Downloads/IMG_3106.jpg`, `/Users/zeyad/Downloads/IMG_3107.jpg`, and `/Users/zeyad/Downloads/IMG_3108.jpg` for the three updated projects.
- Homepage sequence: Noon Supermall, The Recruiter, PetPal, Account Management.
- Homepage routes: `/work/noon-supermall`, `/work/the-recruiter`, `/work/petpal`, `/work/noon-profile`.
- Do not stage or commit because the current workspace contains the user's unfinished session changes.

---

### Task 1: Homepage project contract

**Files:**
- Modify: `tests/portfolio-projects.test.mjs`
- Modify: `src/components/WorkSection.tsx`

**Interfaces:**
- Consumes: existing `TEASER_PROJECTS`, `projects`, and `ProjectBgCard` in `WorkSection.tsx`.
- Produces: a single ordered project-data contract with `num`, `name`, `company`, `type`, `tags`, `live`, `bg`, `mockup`, and `href`.

- [ ] **Step 1: Write the failing homepage test**

Add a test that reads `src/components/WorkSection.tsx` and asserts the four visible names occur in order, the old placeholder names are absent, and the four href values exist.

```js
test("the homepage work sequence uses four linked real projects", () => {
  const source = read("src/components/WorkSection.tsx");
  const names = ["NOON SUPERMALL", "THE RECRUITER", "PETPAL", "ACCOUNT MANAGEMENT"];
  const routes = [
    "/work/noon-supermall",
    "/work/the-recruiter",
    "/work/petpal",
    "/work/noon-profile",
  ];

  for (let index = 1; index < names.length; index += 1) {
    assert.ok(source.indexOf(names[index - 1]) < source.indexOf(names[index]));
  }
  for (const route of routes) assert.match(source, new RegExp(route));
  for (const placeholder of ["PANGO CDP", "SEMTECH", "THE MASTER CHANNEL", "EYE ON DESIGN"]) {
    assert.doesNotMatch(source, new RegExp(placeholder));
  }
});
```

- [ ] **Step 2: Run the test and verify RED**

Run: `node --test tests/portfolio-projects.test.mjs`

Expected: the new homepage test fails because the placeholder sequence is still present and the routes do not exist in `WorkSection.tsx`.

- [ ] **Step 3: Replace duplicate placeholder arrays with one real-project array**

Define the requested four objects once and derive the marquee, hero metadata, background cards, and centered mockup layers from the same list. Use `ACCOUNT MANAGEMENT` as the displayed fourth name and `/work/noon-profile` as its route.

- [ ] **Step 4: Add one accessible card link**

Add `href` to `ProjectBgCard` props and render:

```tsx
<Link
  href={href}
  aria-label={`${name} — open case study`}
  className="absolute inset-0 z-[4]"
/>
```

Keep the centered mockup frame presentation-only so it does not overlap the single card link.

- [ ] **Step 5: Run the test and verify GREEN**

Run: `node --test tests/portfolio-projects.test.mjs`

Expected: all portfolio tests pass.

### Task 2: Authentic image extraction

**Files:**
- Create: `scripts/extract-real-project-artwork.sh`
- Replace: `public/images/mockup-petpal.jpg`
- Replace: `public/images/project-petpal.jpg`
- Replace: `public/images/petpal-case-discovery.jpg`
- Replace: `public/images/petpal-case-booking.jpg`
- Replace: `public/images/mockup-vertex.jpg`
- Replace: `public/images/project-vertex.jpg`
- Replace: `public/images/vertex-case-challenge.jpg`
- Replace: `public/images/vertex-case-platform.jpg`
- Replace: `public/images/mockup-cinema-booking.jpg`
- Replace: `public/images/project-cinema-booking.jpg`
- Replace: `public/images/cinema-booking-case-discovery.jpg`
- Replace: `public/images/cinema-booking-case-ticket.jpg`

**Interfaces:**
- Consumes: the three user-supplied JPEG references and FFmpeg.
- Produces: twelve 2880×1800 JPEGs using two exact source crops per project.

- [ ] **Step 1: Extend the asset test before extraction**

For every updated asset, read the image dimensions and assert `2880 × 1800`. Add assertions that the extraction script names all three source files and all twelve destination files.

- [ ] **Step 2: Run the test and verify RED**

Run: `node --test tests/portfolio-projects.test.mjs`

Expected: the extraction-script assertions fail because the script does not exist yet.

- [ ] **Step 3: Create the deterministic extraction script**

Use these exact source regions:

- PetPal primary: `crop=568:514:49:4`; secondary: `crop=568:322:678:162`.
- Vertex primary: `crop=569:505:49:0`; secondary: `crop=567:322:679:149`.
- Cinema primary: `crop=569:513:49:4`; secondary: `crop=566:322:679:162`.

For each crop, scale with `force_original_aspect_ratio=decrease` into a 2700×1620 safe area and pad to 2880×1800. Use `#f4f2ed` for PetPal and `#08090b` for Vertex/Cinema. Write the primary crop to the mockup/chapter-one filenames and the secondary crop to the hover/chapter-two filenames.

- [ ] **Step 4: Run the extraction and inspect all outputs**

Run: `bash scripts/extract-real-project-artwork.sh`

Expected: twelve JPEGs are replaced, all at 2880×1800, with no stretching and no surrounding project-page copy.

- [ ] **Step 5: Run the test and verify GREEN**

Run: `node --test tests/portfolio-projects.test.mjs`

Expected: all asset and source-contract tests pass.

### Task 3: Responsive visual verification

**Files:**
- Create: `design-qa.md`
- Create: `docs/design-references/real-project-home-desktop.png`
- Create: `docs/design-references/real-project-home-mobile.png`

**Interfaces:**
- Consumes: the updated homepage and case-study routes running on localhost.
- Produces: browser evidence and a passing design-QA report.

- [ ] **Step 1: Run the app and inspect the homepage**

Open the homepage at 1440×900 and 390×844. Confirm the four projects appear in order, authentic images load, project names remain readable, and `document.documentElement.scrollWidth <= innerWidth`.

- [ ] **Step 2: Verify all homepage destinations**

Confirm the four cards expose exactly one accessible link each with the requested href and that navigation reaches the matching case-study page.

- [ ] **Step 3: Inspect the updated project routes**

Check `/work/petpal`, `/work/vertex`, and `/work/cinema-booking` at desktop and mobile widths. Confirm every authentic project image loads and no core UI is cropped out.

- [ ] **Step 4: Write the QA report**

Record the supplied references, browser screenshots, viewports, interactions, console state, fidelity surfaces, comparison history, and `final result: passed` only when no actionable P0/P1/P2 findings remain.

- [ ] **Step 5: Run final verification**

Run: `npm run check`

Run: `node --test tests/portfolio-projects.test.mjs`

Expected: lint, TypeScript, production build, and every integration test pass.

