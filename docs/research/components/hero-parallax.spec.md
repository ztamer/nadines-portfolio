# HeroParallax Specification

## Overview
- **Target file:** `src/components/HeroParallax.tsx`
- **Interaction model:** Scroll-driven parallax (sticky text + floating photos)

## DOM Structure
Very tall section (~9000px). Two sub-sections:
1. Sticky hero text area with floating parallax photos (~5835px tall)
2. Bio/about text section (~3501px tall)

## Sub-section 1: Sticky Hero Text

### Container
- height: 5835px (tall to allow scroll-driven effect)
- backgroundColor: rgb(8, 9, 11) = #08090b
- position: relative
- overflow: hidden

### Sticky Text Block
- position: sticky
- top: 0
- height: 100vh
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- textAlign: center

### Hero Text Lines (each line)
- fontFamily: "VC Nudge Black"
- fontSize: clamp(80px, 12vw, 190px)
- fontWeight: 900
- color: #ffffff
- textTransform: uppercase
- lineHeight: 0.9
- letterSpacing: -0.02em

### Text Content
Line 1: "HEAD OF DESIGN."
Line 2: "UIUX DESIGNER."
Line 3: "AND"
Line 4: "TEACHER."
Line 5: "(BASE IN VIETNAM)"

## Floating Photo Cards
5+ absolutely-positioned photo containers that move at different scroll rates.
Each card:
- position: absolute
- width: ~200-280px
- height: ~280-380px
- objectFit: cover
- borderRadius: 4px
- Will use CSS custom property --scroll-y with JS to create parallax

Photo positions (approximate, relative to section start):
- Photo 1 (sunhung-photo-1.jpg): top: 10%, left: 5%, parallaxFactor: 0.3
- Photo 2 (sunhung-photo-2.jpg): top: 30%, right: 8%, parallaxFactor: -0.2
- Photo 3 (sunhung-photo-7.jpg, teaching): top: 15%, left: 3%, parallaxFactor: 0.4
- Photo 4 (sunhung-photo-9.jpg, DAS Talks): top: 50%, right: 5%, parallaxFactor: 0.25
- Photo 5 (sunhung-photo-6.jpg, robot/futuristic): top: 35%, left: 40%, parallaxFactor: -0.15

Each photo card has pink decorative lines at bottom:
- 2 horizontal lines, hot pink #f62a99
- width: 100% of card

## Sub-section 2: Bio Text

### Container
- height: ~3500px (tall for scroll reveal effect)
- backgroundColor: transparent (background photo shows through)
- position: relative
- overflow: hidden

### Background Photo
- position: absolute
- inset: 0
- width: 100%
- height: 100%
- objectFit: cover
- opacity: 0.6-0.8 (desaturated red-tinted close-up of Sun Hung)
- Image: sunhung-photo-1.jpg or similar close-up

### Sticky Text Block
- position: sticky
- top: 0
- height: 100vh
- display: flex
- flexDirection: column
- alignItems: center
- justifyContent: center
- textAlign: center
- padding: 0 80px
- maxWidth: 1200px
- margin: 0 auto

### Bio Text
- fontFamily: "VC Nudge Black" or BDO Grotesk Bold
- fontSize: clamp(24px, 3.5vw, 48px)
- fontWeight: 900
- color: rgba(255,255,255,0.85)
- textTransform: uppercase
- lineHeight: 1.2
- letterSpacing: 0.05em

### Highlighted words
- "AMBITIOUS BRANDS" and "IMMERSIVE VISUAL EXPERIENCES" get color: #f62a99

### Bio Content (verbatim)
"SUN HUNG IS AN AWARD-WINNING UIUX DESIGNER 🤟 BASED IN SAIGON, VIETNAM, WHO BUILDS BADASS WEBSITES FOR AMBITIOUS BRANDS AND IS PASSIONATE ABOUT CREATING IMMERSIVE VISUAL EXPERIENCES."

### EXPLORE NOW Button
- display: flex
- alignItems: center
- gap: 12px
- padding: 14px 24px
- border: 1.5px solid #f62a99
- borderRadius: 8px
- color: white
- background: transparent
- fontFamily: Aeonik Mono Regular
- fontSize: 14px
- letterSpacing: 0.1em
- marginTop: 48px
- Left icon: pink dotted arrow/icon (CSS or SVG)
- Hover: backgroundColor: #f62a99

## States & Behaviors

### Parallax Effect
- Trigger: window scroll
- Each photo card gets `transform: translateY(scrollY * factor)` where factor varies per card
- Implementation: useEffect with scroll listener, update CSS vars

### Background Reveal (Bio section)
- Background photo fades in as user scrolls into bio section
- Use IntersectionObserver or scroll-based opacity

## Assets
- sunhung-photo-1.jpg through sunhung-photo-9.jpg (floating cards + background)

## Responsive Behavior
- Desktop (1440px): Large text fills most of viewport width
- Mobile (390px): Text scales to ~60px, photos hidden or smaller
