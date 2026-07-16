# Real Project Artwork Integration

## Objective

Replace invented portfolio artwork with Nadine's authentic project imagery from the three supplied references, and make the homepage selected-work experience use real, linked case studies.

## Source References

- `/Users/zeyad/Downloads/IMG_3106.jpg` — PetPal
- `/Users/zeyad/Downloads/IMG_3107.jpg` — Vertex
- `/Users/zeyad/Downloads/IMG_3108.jpg` — Cinema

The UI and device compositions visible inside these references are the source of truth. Their interface details, colors, typography, imagery, and device mockups must not be generatively redrawn or replaced with invented alternatives.

## Artwork Treatment

Extract the project-picture regions from each reference without including the surrounding portfolio-page titles, descriptions, project numbers, or decorative marks. Preserve the source pixels and device compositions.

Prepare each extracted picture for the existing portfolio system:

- A primary cover for the work index and case-study hero.
- A secondary image for the work-index hover state.
- Two chapter images for each case study, using the distinct compositions present in the reference.
- Neutral framing or letterboxing where necessary so the full UI remains visible inside the existing 16:10 containers. Do not crop away core interface content merely to fill the frame.

PetPal uses the orange vet-profile/list composition and the black date/confirmation composition. Vertex uses the laptop-on-plinth composition and the dark landing-page composition. Cinema uses the in-hand booking composition and the mobile-ticket composition.

## Homepage Selected Work

Replace the placeholder/freelance homepage Work sequence with these four real projects, in this exact order:

1. Noon Supermall — `/work/noon-supermall`
2. The Recruiter — `/work/the-recruiter`
3. PetPal — `/work/petpal`
4. Account Management — `/work/noon-profile`

The Work hero metadata, marquee, full-screen scrolling cards, centered mockup wipe, and progress indicator must all read from the same project sequence. The visible fourth-project name is `ACCOUNT MANAGEMENT`, while its existing case-study destination remains Noon Profile.

Each full-screen project card must expose one accessible link covering the card. The central mockup remains presentation-only so it does not create overlapping or duplicate click targets.

## Existing Portfolio Structure

Keep the current dark portfolio art direction, typography, animation system, case-study template, route structure, responsive behavior, and next-project loop. This task changes project sources and homepage project selection; it does not redesign the surrounding portfolio.

Vertex and Cinema remain available from the main `/work` index and keep their existing routes even though they are not part of the four-project homepage sequence.

## Responsive and Accessibility Requirements

- Preserve the existing desktop scrolling behavior.
- At mobile widths, keep all project names and metadata within the viewport.
- Avoid horizontal overflow at 390 pixels.
- All real project images need descriptive alternative text where informative; hover-only duplicates remain decorative.
- Project cards must be keyboard reachable and have explicit accessible names.
- Reduced-motion behavior must continue to work.

## Verification

- Add or update integration tests for the homepage sequence, image sources, and route links.
- Confirm all extracted images load successfully.
- Verify the homepage and the three updated case studies at desktop and 390-pixel mobile widths.
- Check project-card navigation for all four homepage projects.
- Run ESLint, TypeScript, the production build, and the portfolio integration tests.

