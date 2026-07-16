# IntroSection Specification

## Overview
- **Target file:** `src/components/IntroSection.tsx`
- **Screenshot:** Pink fullscreen intro splash
- **Interaction model:** Static (load animation in Framer, simplified for clone)

## DOM Structure
Full viewport height section. Contains:
1. Pink background fill
2. 5-column grid overlay (vertical divider lines)
3. SUN HUNG logo (top left)
4. `::` dots menu icon (top right)
5. Right-side "W. Honors" award badge (SEPARATE COMPONENT — FloatingBadge)
6. Center cycling content area

## Computed Styles

### Container
- width: 100vw
- height: 100vh (or ~992px)
- backgroundColor: rgb(246, 42, 153) = #f62a99
- position: relative
- overflow: hidden

### Grid Overlay (5 column dividers)
- position: absolute
- inset: 0
- display: grid
- gridTemplateColumns: repeat(5, 1fr)
- Each column has a right border: 1px solid rgba(255,255,255,0.15)
- pointerEvents: none

### Logo (top left)
- position: absolute
- top: 20px
- left: 24px
- width: ~100px
- color: white
- Font: VC Nudge Black (custom SVG logo shape)
- The logo is "SUN" on top line, "HUNG" on bottom — stylized blocky letters

### Menu Dots (top right)
- position: absolute
- top: 20px
- right: 24px
- Two rows of 2 dots each (2x2 grid = "::" visual)
- color: white
- size: ~20px

### Center Content
- position: absolute
- top: 50%
- left: 50%
- transform: translate(-50%, -50%)
- textAlign: center
- Contains cycling role text (simplified as static for clone)

## Center Content Detail
Left column shows cycling text with these values:
- "UIUX DESIGNER" / "WEBSITE DESIGNER" (main title cycling)
- "WHAT I DO" (label, monospace small)
- Role list: UIUX DESIGNER / HEAD OF DESIGN / COACHING/TEACHER / DESIGN CONSULTANT / EX-HEAD OF FACULTY
- "PROGRESS ISN'T A GOAL / IT'S A CONSTANT"
- "EXPERTISE" label
- Skills: WEBSITE DESIGN / UIUX DESIGN / DESIGN SYSTEM / BRANDING DESIGN / TEACHING/TRAINING

All text: white, font Aeonik Mono Regular or BDO Grotesk Medium

## Text Content (verbatim)
- Main cycling: "UIUX DESIGNER" + "WEBSITE DESIGNER"
- What I do label: "WHAT I DO"
- Roles: UIUX DESIGNER, HEAD OF DESIGN, COACHING/TEACHER, DESIGN CONSULTANT, EX-HEAD OF FACULTY
- Progress motto: "PROGRESS ISN'T A GOAL" + "IT'S A CONSTANT"
- Expertise label: "EXPERTISE"
- Skills: WEBSITE DESIGN, UIUX DESIGN, DESIGN SYSTEM, BRANDING DESIGN, TEACHING/TRAINING

## States & Behaviors
- Static render (simplified from Framer animation)
- Show one role at a time with CSS animation cycling every 2s

## Assets
- No images in this section (pure color + text)
- Logo: SVG path (see icons.tsx SunHungLogo component)

## Responsive Behavior
- Desktop (1440px): full viewport
- Mobile (390px): same proportions, text scales down
