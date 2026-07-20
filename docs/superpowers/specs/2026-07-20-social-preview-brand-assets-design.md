# Social Preview and Favicon Design

## Goal

Create a coordinated social-sharing image and browser favicon for Nadine Shokair's portfolio. The assets must feel native to the existing dark, editorial portfolio and remain legible at their intended sizes.

## Approved Direction

Use an editorial portrait-led composition for the social preview and a simplified `NS` monogram for the favicon.

## Open Graph and WhatsApp Preview

- Canvas: 1200 x 630 pixels.
- Background: near-black charcoal matching the site (`#08090b`).
- Portrait: use Nadine's existing portfolio portrait as the identity reference, positioned on the right with a refined editorial treatment.
- Typography: large `Nadine Shokair` headline on the left, with `UX/UI Designer · Cairo` as supporting copy.
- Accent: use the site's vivid pink (`#f62a99`) sparingly for a line, small shape, or typographic detail.
- Mood: polished, confident, contemporary, and design-led.
- Legibility: preserve generous margins and strong contrast so the card remains readable in compact WhatsApp previews.
- Avoid: extra copy, project collages, decorative clutter, watermarks, invented logos, or changes to Nadine's recognizable appearance.

## Browser Favicon

- Design: bold `NS` monogram, visually paired with the Open Graph card.
- Palette: white and vivid pink on near-black.
- Form: simple, centered, high-contrast geometry that remains recognizable at 16 x 16 pixels.
- Deliverables: update the SVG source and provide browser-compatible ICO output.
- Avoid: fine lines, small supporting text, portrait imagery, gradients that disappear at small sizes, or excessive detail.

## Integration

- Add the Open Graph image through the Next.js App Router `opengraph-image` file convention.
- Add a matching Twitter image so social platforms receive an explicit card asset.
- Replace the existing favicon SVG and App Router favicon ICO.
- Preserve the existing page title and description metadata.

## Validation

- Visually inspect both generated assets.
- Confirm the favicon remains distinct at 16, 32, and 48 pixels.
- Confirm the Open Graph image is 1200 x 630, has readable text, and uses the approved content verbatim.
- Run the project's lint, typecheck, and production build.
- After deployment, verify generated metadata and refresh social-platform caches as needed.
