# Page Topology — sunhung.net

## Overall Structure
- **URL**: https://www.sunhung.net
- **Total height**: ~18,555px
- **Scroll behavior**: Lenis smooth scroll (v1.3.17-framer)
- **Framework**: Framer (React)

## Sections (top to bottom)

| # | Name | DOM Class | Offset | Height | Interaction |
|---|------|-----------|--------|--------|-------------|
| 1 | Intro Splash | framer-u60laa | 0 | 992px | Static + cycling text |
| 2 | Hero Parallax | framer-1tqkdj9 | 992 | 9346px | Scroll-driven parallax |
| 3 | Work Header | framer-ye1l8t | 10338 | 2334px | Scroll-driven color explosion |
| 4 | Work Projects | framer-1a0acj | 12672 | 3112px | Static with hover |
| 5 | Why Me / Stats | framer-1dhz3rw | 15784 | 1248px | Count-up animation |
| 6 | Footer CTA | framer-orfr90 | 17032 | 778px | Static |

## Floating / Fixed Overlays
- **Navbar**: `framer-1yr7uqa-container` — position: absolute/fixed at top, height 81px
- **Award badge**: "W. Honors" teal/mint vertical badge — fixed right side, appears throughout
  - "W." in a teal rectangle (top)
  - "Honors" written vertically below (teal, rotated)

## Section Detail

### 1. Intro Splash (0–992px)
- Hot pink background: `rgb(246, 42, 153)` = `#f62a99`
- 5-column grid overlay with vertical divider lines (rgba white, subtle)
- Top left: SUN HUNG logo (white SVG)
- Top right: `::` dots icon (menu)
- Right side: "W. Honors" teal badge
- Center content: cycling role text + expertise tags (partially offscreen/animated)
- Bottom: "RISE & SHINE" marquee text (transition zone from pink → black)

### 2. Hero Parallax (992–10338px)
- Contains two sub-sections:
  - **framer-17dvrj6** (0–5835px within section): Sticky hero text + floating photos
  - **framer-w959z1** (5835–9346px within section): Bio text section
- Sub-section A: Sticky large text "HEAD OF DESIGN. / UIUX DESIGNER. / AND / TEACHER. / (BASE IN VIETNAM)"
  - Text sticks while floating photo cards drift in parallax around it
  - ~5 floating photos of Sun Hung at different offsets and positions
  - Background: `rgb(8, 9, 11)` near-black
- Sub-section B: Bio text
  - "SUN HUNG IS AN AWARD-WINNING UIUX DESIGNER 🤟 BASED IN SAIGON, VIETNAM, WHO BUILDS BADASS WEBSITES FOR AMBITIOUS BRANDS AND IS PASSIONATE ABOUT CREATING IMMERSIVE VISUAL EXPERIENCES."
  - Key phrases highlighted: "AMBITIOUS BRANDS", "IMMERSIVE VISUAL EXPERIENCES" in hot pink `#f62a99`
  - "EXPLORE NOW" button (pill shape, pink border with pink arrow icon)
  - Background: Sun Hung portrait photo (red-tinted) reveals/fades in as you scroll

### 3. Work Section Header (10338–12672px)
- Massive "WORK" text (color explodes from pink/black spiral to reveal)
- Subtitle: "Explore a collection of high-quality, innovative designs crafted to elevate brands and captivate audiences."
- "EXPLORE NOW" button
- Background: dramatic pink/black pinwheel/spiral pattern during transition

### 4. Work Projects (12672–15784px)
Four project cards:
1. **Pango CDP** — "Web, Graphic, Design System" — purple 3D blocks background + laptop mockup
2. **SEMTECH** — "Web, UIUX Design"
3. **The Master Channel** — "Web, Graphic, Design System" — green/dark background with tablet mockup
4. **Eye on Design** — "Exhibition, Event"

### 5. Why Me / Stats (15784–17032px)
- "WHY ME" heading
- Bio: "A DIGITAL DESIGNER 🤟 BASED IN SAIGON, VIETNAM, PASSIONATE ABOUT CREATING IMMERSIVE VISUAL EXPERIENCES. FROM CRAFTING REALISTIC RENDERINGS TO DYNAMIC ANIMATIONS AND INTERACTIONS."
- "EXPLORE NOW" button
- Animated counters: 8+ YEARS EXPERIENCE / 200+ PROJECTS DONE / 100+ HAPPY CLIENTS
- Client logo carousel (scrolling): pangoCDP, SOA source of asia, Animal Doctors International, Wunderman Thompson, YADEA, and others

### 6. Footer CTA (17032–17810px)
- "START SOMETHING GREAT TOGETHER" (massive bold text, left side)
- Right side nav links: HOMEPAGE, ABOUT, WORKS, ARCHIVE, CONTACT (each with bullet dot)
- "FOLLOW" label + LinkedIn, Instagram, Dribbble icons
- Bottom: "CREATED BY SUN HUNG · ALL RIGHTS RESERVED" | "VIETNAM 2026"
- Hot pink border/stripe at very bottom
