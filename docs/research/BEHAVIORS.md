# Behaviors & Interactions — sunhung.net

## Global Behaviors

### Smooth Scroll
- **Library**: Lenis v1.3.17-framer
- **Effect**: All scrolling is smoothed/eased, not native browser scroll
- **Implementation**: Wrap app in Lenis, call `lenis.raf()` each animation frame

### Award Badge (Fixed Overlay)
- **"W."** + **"Honors"** badges float on the right edge throughout the page
- Fixed position, always visible regardless of scroll
- Teal/mint color (#9adbd2 approx), white text

---

## Section Behaviors

### 1. Intro Splash (Pink Section)
- **Interaction model**: Time-driven (animation on load) + static
- Logo animates in on load
- Cycling text: "UIUX DESIGNER" / "WEBSITE DESIGNER" cycles vertically (likely translateY animation)
- Role tags: "UIUX DESIGNER / HEAD OF DESIGN / COACHING/TEACHER / DESIGN CONSULTANT / EX-HEAD OF FACULTY" scroll vertically (like a ticker)
- Expertise items appear with opacity/slide

### 2. RISE & SHINE Marquee
- **Interaction model**: Time-driven (infinite auto-scroll)
- Text "RISE & SHINE" repeats and scrolls horizontally to the left, infinitely
- Speed: moderate
- Font: VC Nudge Black, very large
- Positioned at the pink-to-black transition zone

### 3. Hero Parallax Section
- **Interaction model**: Scroll-driven
- **Sticky text**: "HEAD OF DESIGN. / UIUX DESIGNER. / AND / TEACHER. / (BASE IN VIETNAM)" sticks in place (position: sticky) while rest scrolls past
- **Floating photos**: 5+ absolutely-positioned photo cards move at different rates (parallax offsets)
  - Each photo drifts upward/sideways as you scroll
  - Photos appear/disappear at different scroll thresholds
  - Images have slight rotation transforms
- **Background**: Pure black, no transition
- **Text**: VC Nudge Black, white, fills viewport width

### 4. Bio Section (inside hero parallax)
- **Interaction model**: Scroll-driven (background reveal)
- Text is centered, uppercase
- Background transitions from black → Sun Hung portrait photo appears (red-tinted close-up)
- "AMBITIOUS BRANDS" and "IMMERSIVE VISUAL EXPERIENCES" are hot pink `#f62a99`
- "EXPLORE NOW" button: pill-shaped, hot pink border, arrow icon left, white text

### 5. Work Section Header
- **Interaction model**: Scroll-driven (color explosion)
- As you scroll into this section: pink/black pinwheel burst animation
- "WORK" text appears as enormous white text over the burst
- Eventually settles into clean layout with subtitle

### 6. Work Project Cards
- **Interaction model**: Click-driven (link to project page)
- Each project: full-width row with project name (left), tags (right), large background image
- Project name in monospace font (Aeonik Mono or PP Supply Mono)
- Tags in small mono text
- Hover: probably scale or brightness effect on image

### 7. Stats Counters
- **Interaction model**: Scroll-triggered (IntersectionObserver)
- Numbers count up from 0 when section enters viewport
- "8+", "200+", "100+" with labels below
- Divider lines between stats

### 8. Client Logo Marquee
- **Interaction model**: Time-driven (infinite auto-scroll)
- Client logos in rounded cards scroll horizontally, left to right (or right to left)
- Speed: slow/moderate, infinite loop

### 9. Footer
- **Interaction model**: Static
- Nav links on right with bullet dots
- Social icons: LinkedIn, Instagram, Dribbble

---

## Hover States
- Nav links: likely underline or color change
- "EXPLORE NOW" button: background fills pink on hover
- Project items: image brightness/scale effect
- Social icons: opacity change
- Footer nav links: bullet animates or color changes

---

## Responsive Breakpoints
- Mobile breakpoint: ~390px (from Framer hidden-1jjyfv8 class)
- Tablet breakpoint: ~768px (from Framer hidden-1898xba class)
- The hidden-1jjyfv8 and hidden-1898xba classes suggest Framer uses these for responsive variants
