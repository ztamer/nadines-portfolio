# Adding a Project to the Portfolio

The playbook used for Noon Supermall, The Recruiter, and Noon Profile. A project =
**artwork** (5 images) + **featured card** on `/work` + **case study page** at `/work/<slug>`.

---

## 1. Artwork

All project imagery lives in `public/images/` and follows one naming convention:

| File | Used for | Composition |
|---|---|---|
| `mockup-<slug>.jpg` | `/work` card (default) + case cover | Dark scene (`#0b0c0f`), device mockups, mono captions in corners |
| `project-<slug>.jpg` | `/work` card on hover | Color-drenched poster: brand color bg, big VC Nudge title, mono tags |
| `<slug>-case-<chapter>.jpg` | one per case chapter | Dark scene: device pair, ghost outline word, `(0X / 0N)` counter |

**Specs:** 1920×1200 (16:10), rendered at 1.5× (2880×1800), JPEG quality 88.

**House style for scenes** (keeps every project consistent):
- Background `linear-gradient(180deg, #0b0c0f, #0e0f13)` + two faint radial glows
  (project brand color top-right, site pink `#f62a99` or brand secondary bottom-left).
- Corner captions in Aeonik Mono, 19px, letter-spacing `.24em`:
  top-left = project — section, top-right = `(YEAR)` or `(0X / 0N)` in pink,
  bottom-left = summary keywords, bottom-right = brand chip/logo.
- Optional ghost word behind devices: VC Nudge Black, outline stroke `rgba(255,255,255,.12)`.
- Device frames: iPhone (rounded 64px, island) or browser window (traffic lights + URL pill).
- Hover poster: one flat brand color, dot grid texture, title ≤3 stacked lines,
  1 filled + 2 outline tag pills, mono footer line.

**How the images were made here:** the original Behance/Figma exports weren't available
as files, so each screen was **recreated in HTML/CSS** (fonts: Poppins for UI,
VC Nudge + Aeonik Mono from `public/fonts/` for scene chrome) and screenshotted with
headless Chromium. If you have clean 2880×1800 exports from Figma, you can skip that
and just drop the JPGs in — keep the naming and the dark/hover pairing.

## 2. Featured card — `src/app/work/page.tsx`

Add an entry to `FEATURED` (top of file). Order = importance; renumber `num` after inserting:

```ts
{
  num: "0X",
  name: "PROJECT NAME",
  category: "PLATFORM · DOMAIN · TAG",   // shows on the image scrim
  year: "2025",
  image: "/images/mockup-<slug>.jpg",
  hoverImage: "/images/project-<slug>.jpg",
  href: "/work/<slug>",                   // omit → card is not clickable
  blurb: "One or two sentences — what it is and why it matters.",
},
```

Then:
- Remove the project's row from `INDEX` (the NDA/concept list) if it was there.
- Update the hero copy count ("SEVEN VISUAL CASE STUDIES…"). The `(0X + 0Y)` counter updates itself.

`href` gives the card a stretched link plus the pink "VIEW CASE STUDY →" pill on hover — no other wiring needed.

## 3. Case study page — `src/app/work/<slug>/`

Two files, both thin wrappers around the shared template `src/components/CaseStudy.tsx`:

**`layout.tsx`** — metadata only (title + description).

**`page.tsx`** — content only:

```tsx
"use client";
import { CaseStudy } from "@/components/CaseStudy";

export default function Page() {
  return (
    <CaseStudy
      titleLines={["FIRST", "SECOND"]}      // stacked hero lines
      accent="#ffef00"                       // brand color: hero period + outcome highlight
      intro="ONE-LINE PITCH, UPPERCASE."
      facts={[{ k: "ROLE", v: "UX/UI DESIGNER" }, /* client, platform, scope, year */]}
      cover={{ src: "/images/mockup-<slug>.jpg", alt: "..." }}
      brief={["Paragraph 1 — context.", "Paragraph 2 — what the work covered."]}
      chapters={[                            // 2–3 chapters, each with one image
        { title: "CHAPTER", kicker: "SECTION LABEL",
          image: "/images/<slug>-case-x.jpg", alt: "...",
          body: ["Left column paragraph.", "Right column paragraph."] },
      ]}
      outcome={{ lines: <>BIG CLOSING<br/>STATEMENT.</>, detail: "UPPERCASE FOLLOW-UP." }}
      next={{ href: "/work/<prev-or-next>", label: "NEXT PROJECT" }}
    />
  );
}
```

**Keep the chain closed:** point the previous case study's `next` at the new one, and the
new one's `next` back to the start (or `/work`). Current chain:
Supermall → Recruiter → Profile → … → Supermall.

## 4. Verify

```bash
npx tsc --noEmit && npx eslint src/app/work src/components/CaseStudy.tsx
```

Then eyeball `localhost:3000/work`: card hover flip + pill, case page hero animation,
all images loading, next-link chain. `npm run dev` can be started by double-clicking
`run-dev.command` in the project root.
