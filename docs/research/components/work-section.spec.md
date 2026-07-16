# WorkSection Specification

## Overview
- **Target file:** `src/components/WorkSection.tsx`
- **Interaction model:** Scroll-driven (header transition) + static cards

## Sub-component 1: Work Header

### Container
- height: ~2334px (tall for scroll animation)
- backgroundColor: #08090b
- position: relative
- overflow: hidden

### "WORK" Title
- position: sticky
- top: 0
- height: 100vh
- display: flex
- alignItems: center
- justifyContent: center
- fontFamily: "VC Nudge Black"
- fontSize: clamp(120px, 18vw, 260px)
- fontWeight: 900
- color: #ffffff
- textTransform: uppercase
- z-index: 2

### Background Burst Animation
- Hot pink/black pinwheel/spiral pattern appears during scroll transition
- Implemented as: CSS conic-gradient or SVG radial burst
- Colors alternate: #f62a99 (pink) and #000000 (black)
- The burst rotates/scales as you scroll into the section

### Subtitle text (below "WORK" on settling)
- "work" (lowercase label)
- "Explore a collection of high-quality, innovative designs crafted to elevate brands and captivate audiences. Each project reflects our commitment to creativity and excellence."
- fontFamily: BDO Grotesk Medium
- fontSize: 16-18px
- color: rgba(255,255,255,0.7)
- maxWidth: 480px

### EXPLORE NOW Button
- Same style as bio section button
- border: 1.5px solid #f62a99

## Sub-component 2: Work Project Cards

### Container
- display: flex
- flexDirection: column
- gap: 0
- width: 100%

### Each Project Card
- width: 100%
- height: ~778px
- position: relative
- overflow: hidden
- cursor: pointer

### Project Card Content
- Project name (top-left): Aeonik Mono Regular, 14-16px, letter-spacing 0.1em, uppercase, white
- Category tags (top-right): Aeonik Mono Regular, 12px, rgba(255,255,255,0.6)
- Large background image fills the card
- Image: objectFit: cover, width: 100%, height: 100%

## Project Data

### 1. Pango CDP
- tags: "WEB. GRAPHIC. DESIGN SYSTEM"
- image: public/images/project-pango-cdp.jpg (purple 3D blocks with laptop)
- Colors: deep purple background
- description: CDP platform with "Create Memorable Customer Experiences" visible in mockup

### 2. SEMTECH
- tags: "WEB, UIUX DESIGN"
- image: public/images/project-2.jpg
- Colors: dark tech background

### 3. The Master Channel
- tags: "WEB, GRAPHIC, DESIGN SYSTEM"
- image: public/images/project-master-channel.jpg (tablet on green/dark surface)
- Colors: dark green background
- description: "What can you expect from working at TMC?" visible in tablet mockup

### 4. Eye on Design
- tags: "EXHIBITION, EVENT"
- image: public/images/project-3.jpg
- Colors: orange/industrial background

## States & Behaviors

### Hover State
- image: scale(1.03) with transition: transform 0.4s ease
- overlay: slight darkening rgba(0,0,0,0.1)

## Text Content (verbatim)
- Section label: "work"
- Section subtitle: "Explore a collection of high-quality, innovative designs crafted to elevate brands and captivate audiences. Each project reflects our commitment to creativity and excellence."

## Responsive Behavior
- Desktop (1440px): Full-width cards, large images
- Mobile (390px): Stacked cards, reduced image height ~400px, text smaller
