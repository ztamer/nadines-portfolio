# StatsSection + Footer Specification

## Overview
- **Stats target file:** `src/components/StatsSection.tsx`
- **Footer target file:** `src/components/Footer.tsx`
- **Interaction model:** Stats = scroll-triggered count-up; Footer = static

---

## StatsSection

### Container
- backgroundColor: #08090b
- padding: 100px 80px
- display: grid
- gridTemplateColumns: 1fr 1fr 1fr (with dividers)

### "WHY ME" heading
- fontFamily: "VC Nudge Black"
- fontSize: ~80-100px
- color: white
- textTransform: uppercase
- marginBottom: 24px

### Bio text (below heading)
- "A DIGITAL DESIGNER 🤟 BASED IN SAIGON, VIETNAM, PASSIONATE ABOUT CREATING IMMERSIVE VISUAL EXPERIENCES. FROM CRAFTING REALISTIC RENDERINGS TO DYNAMIC ANIMATIONS AND INTERACTIONS."
- fontFamily: Aeonik Mono Regular
- fontSize: 14-16px
- color: rgba(255,255,255,0.7)
- textTransform: uppercase
- maxWidth: 480px

### EXPLORE NOW Button
- Same pill style as other sections

### Stats Grid (3 columns)
Each stat block:
- Number: fontFamily "VC Nudge Black", fontSize ~120px, color: white
- Suffix "+": same font, same size
- Divider line: 1px solid rgba(255,255,255,0.2), full width
- Label: fontFamily Aeonik Mono, fontSize 18-20px, fontWeight bold, uppercase, white
- Sub-label: fontFamily BDO Grotesk, fontSize 14px, color rgba(255,255,255,0.5)

Stats data:
1. "8+" | "YEARS EXPERIENCE" | "In the web design industry field."
2. "200+" | "PROJECTS DONE" | "Around worldwide"
3. "100+" | "HAPPY CLIENTS" | "from SME to Big Cooperate"

### Stats Animation (count-up)
- Trigger: IntersectionObserver when stats enter viewport
- Duration: 2000ms
- Easing: ease-out
- Count from 0 to target number

### Client Logo Marquee
- Auto-scrolling horizontal ticker, left → right direction (or right → left)
- Container: overflow: hidden, width: 100%
- Inner: display: flex, gap: 0, animation: marquee linear infinite 20s
- Client logo cards:
  - width: ~240px, height: ~120px
  - border: 1px solid rgba(255,255,255,0.15)
  - borderRadius: 16px
  - backgroundColor: rgba(255,255,255,0.05)
  - display: flex, alignItems: center, justifyContent: center
  - Logo images: filter: brightness(0) invert(1) (white logos)

Client logos (in order seen):
1. pangoCDP (panda/dragon icon + "pangoCDP" text)
2. SOA source of asia
3. Animal Doctors International (+)
4. Wunderman Thompson
5. YADEA (Y emblem logo)
6. More logos partially visible

---

## Footer

### Container (section)
- backgroundColor: #08090b
- width: 100%
- height: ~778px
- border-top: 4px solid #f62a99 (hot pink top stripe) — actually bottom or top

### Layout
- Two-column grid: left (CTA text) + right (nav)
- Left: ~65% width
- Right: ~35% width
- padding: 60px 80px
- borderTop: 1px solid rgba(255,255,255,0.15) (subtle line at top)

### CTA Text (left)
- "START SOMETHING" (line 1)
- "GREAT TOGETHER" (line 2)
- fontFamily: "VC Nudge Black"
- fontSize: clamp(50px, 6vw, 90px)
- fontWeight: 900
- color: white
- textTransform: uppercase
- lineHeight: 0.9

### Right Column Nav
- "HOMEPAGE" | • bullet
- "ABOUT"    | • bullet
- "WORKS"    | • bullet
- "ARCHIVE"  | • bullet
- "CONTACT"  | • bullet
- Each: fontFamily Aeonik Mono, fontSize 14px, uppercase, color white
- Bullet: filled circle, right-aligned
- borderBottom: 1px solid rgba(255,255,255,0.15) between each item

### Social Links
- "FOLLOW" label (Aeonik Mono, 12px, color rgba(255,255,255,0.5))
- Icons row: LinkedIn, Instagram, Dribbble
- Icon size: ~24px, color white
- gap: 16px

### Bottom Bar
- Left: "CREATED BY SUN HUNG · ALL RIGHTS RESERVED"
- Right: "VIETNAM 2026"
- fontFamily: Aeonik Mono Regular, fontSize: 11-12px, color: rgba(255,255,255,0.4)
- borderTop: 1px solid rgba(255,255,255,0.1)
- paddingTop: 16px

### Hot Pink Bottom Border
- Very bottom of the page: 4-8px solid #f62a99 stripe
- width: 100%

## Text Content (verbatim)
- CTA: "START SOMETHING GREAT TOGETHER"
- Nav: Homepage, About, Works, Archive, Contact
- Copyright: "CREATED BY SUN HUNG · ALL RIGHTS RESERVED"
- Region: "VIETNAM 2026"
