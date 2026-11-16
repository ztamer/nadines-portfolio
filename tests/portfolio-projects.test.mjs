import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);

function read(path) {
  return readFileSync(new URL(path, root), "utf8");
}

function jpegSize(path) {
  const image = readFileSync(new URL(path, root));
  const startOfFrameMarkers = new Set([
    0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7,
    0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf,
  ]);

  let offset = 2;
  while (offset < image.length) {
    if (image[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = image[offset + 1];
    offset += 2;
    if (startOfFrameMarkers.has(marker)) {
      return {
        height: image.readUInt16BE(offset + 3),
        width: image.readUInt16BE(offset + 5),
      };
    }

    if (marker === 0xd8 || marker === 0xd9) continue;
    offset += image.readUInt16BE(offset);
  }

  throw new Error(`Could not read JPEG dimensions for ${path}`);
}

const projects = [
  {
    name: "PETPAL",
    slug: "petpal",
    images: [
      "mockup-petpal.jpg",
      "project-petpal.jpg",
      "petpal-case-discovery.jpg",
      "petpal-case-booking.jpg",
    ],
  },
  {
    name: "VERTEX",
    slug: "vertex",
    images: [
      "mockup-vertex-landing.jpg",
      "project-vertex-landing.jpg",
      "vertex-case-landing.jpg",
      "vertex-case-landing-detail.jpg",
    ],
  },
  {
    name: "CINEMA BOOKING",
    slug: "cinema-booking",
    images: [
      "mockup-cinema-booking-real.jpg",
      "project-cinema-booking-real.jpg",
      "cinema-booking-case-movie.jpg",
      "cinema-booking-case-seats.jpg",
      "cinema-booking-case-ticket-real.jpg",
    ],
  },
];

test("the homepage lists all eleven projects in portfolio order", () => {
  const source = read("src/components/WorkSection.tsx");
  const names = [
    "Noon Supermall – eCommerce Homepage Redesign",
    "Bosta – Consumer App: Track, Send & Shop",
    "The Recruiter – ATS & Hiring Management Platform",
    "LinkedIn – AI Interview Practice Experience",
    "GXPER – Sports Platform | Web & Mobile App",
    "Noon – UAE Resident Status & Profile Management",
    "PetPal – Veterinary Appointment Booking App",
    "Noon – Security & Device Management",
    "Vertex – Prop Trading Website",
    "Base360 – Website & Landing Page",
    "Movie Cinema – Ticket Booking App",
  ];
  const routes = [
    "/work/noon-supermall",
    "/work/bosta",
    "/work/the-recruiter",
    "/work/linkedin-ai-interview",
    "/work/gxper",
    "/work/noon-profile",
    "/work/petpal",
    "/work#noon-security",
    "/work/vertex",
    "/work/base360",
    "/work/cinema-booking",
  ];

  for (let index = 1; index < names.length; index += 1) {
    assert.ok(
      source.indexOf(names[index - 1]) < source.indexOf(names[index]),
      `${names[index - 1]} should appear before ${names[index]}`,
    );
  }

  for (const route of routes) {
    assert.match(source, new RegExp(`href: "${route}"`));
  }

  for (const placeholder of [
    "PANGO CDP",
    "SEMTECH",
    "THE MASTER CHANNEL",
    "EYE ON DESIGN",
  ]) {
    assert.doesNotMatch(source, new RegExp(placeholder));
  }

  assert.match(source, /— open case study/);
  assert.match(source, /— read the brief/);
  assert.match(
    source,
    /<div aria-hidden="true" className="absolute inset-0">\s*<Image src=\{bg\}/,
  );
});

test("the supplied project pictures have a reproducible extraction contract", () => {
  const scriptPath = "scripts/extract-real-project-artwork.sh";
  assert.ok(existsSync(new URL(scriptPath, root)), `missing ${scriptPath}`);
  const script = read(scriptPath);

  for (const source of [
    "IMG_3106.jpg",
    "Vertex Landing Page 2.png",
    "Movie Cinema Ticket App 1.jpg",
    "Movie Cinema Ticket App 2.jpg",
    "Movie Cinema Ticket App 3.jpg",
  ]) {
    assert.match(script, new RegExp(source.replaceAll(".", "\\.")));
  }

  for (const project of projects) {
    for (const image of project.images) {
      assert.match(script, new RegExp(image.replaceAll(".", "\\.")));
      assert.deepEqual(jpegSize(`public/images/${image}`), {
        height: 1800,
        width: 2880,
      });
    }
  }
});

test("Vertex uses the supplied landing-page design without invented screens", () => {
  const script = read("scripts/extract-real-project-artwork.sh");
  const page = read("src/app/work/vertex/page.tsx");

  assert.match(script, /Vertex Landing Page 2\.png/);
  assert.doesNotMatch(script, /IMG_3107\.jpg/);
  assert.match(page, /FUNDED ACCOUNTS\. ONE CLICK/);
  assert.match(page, /ACQUISITION LANDING PAGE/);
  assert.equal((page.match(/preserveArtwork:\s*true/g) ?? []).length, 3);
  assert.doesNotMatch(page, /FUNDED TRADER ROOM/);
  assert.doesNotMatch(page, /CHALLENGE SELECTION/);
  assert.equal(
    existsSync(new URL("scripts/project-artwork/vertex.html", root)),
    false,
  );
});

test("Cinema uses the three supplied booking screens as one real flow", () => {
  const script = read("scripts/extract-real-project-artwork.sh");
  const page = read("src/app/work/cinema-booking/page.tsx");

  for (const source of [
    "Movie Cinema Ticket App 1.jpg",
    "Movie Cinema Ticket App 2.jpg",
    "Movie Cinema Ticket App 3.jpg",
  ]) {
    assert.match(script, new RegExp(source.replaceAll(".", "\\.")));
  }

  assert.doesNotMatch(script, /IMG_3108\.jpg/);
  assert.match(page, /MOVIE TO SHOWTIME/);
  assert.match(page, /CHOOSE YOUR SEATS/);
  assert.match(page, /TICKET IN HAND/);
  assert.equal((page.match(/preserveArtwork:\s*true/g) ?? []).length, 4);
  assert.equal(
    existsSync(new URL("scripts/project-artwork/cinema-booking.html", root)),
    false,
  );
});

test("the work index promotes the final three projects", () => {
  const source = read("src/app/work/page.tsx");

  assert.match(source, /TEN VISUAL PROJECTS/);
  for (const project of projects) {
    assert.match(source, new RegExp(`name: "${project.name}"`));
    assert.match(source, new RegExp(`href: "/work/${project.slug}"`));
  }

  const indexSource = source.slice(source.indexOf("const INDEX"));
  assert.doesNotMatch(indexSource, /name: "PETPAL"/);
  assert.doesNotMatch(indexSource, /name: "VERTEX"/);
  assert.doesNotMatch(indexSource, /name: "CINEMA BOOKING"/);
});

test("every promoted project has metadata, content, and its complete artwork set", () => {
  const workSource = read("src/app/work/page.tsx");

  for (const project of projects) {
    const route = `src/app/work/${project.slug}`;
    assert.ok(existsSync(new URL(`${route}/layout.tsx`, root)));
    assert.ok(existsSync(new URL(`${route}/page.tsx`, root)));

    const pageSource = read(`${route}/page.tsx`);
    const layoutSource = read(`${route}/layout.tsx`);
    assert.match(pageSource, /<CaseStudy/);
    assert.match(layoutSource, /export const metadata/);

    for (const image of project.images) {
      assert.ok(
        existsSync(new URL(`public/images/${image}`, root)),
        `missing public/images/${image}`,
      );
      const imageReference = new RegExp(image.replaceAll(".", "\\."));
      if (image.startsWith("project-")) {
        assert.match(workSource, imageReference);
      } else {
        assert.match(pageSource, imageReference);
      }
    }
  }
});

test("the case-study next links form one closed loop", () => {
  const order = [
    "noon-supermall",
    "bosta",
    "the-recruiter",
    "linkedin-ai-interview",
    "gxper",
    "noon-profile",
    "petpal",
    "vertex",
    "base360",
    "cinema-booking",
  ];

  for (const [index, slug] of order.entries()) {
    const source = read(`src/app/work/${slug}/page.tsx`);
    const next = order[(index + 1) % order.length];
    assert.ok(source.includes(`next={{ href: "/work/${next}"`), `${slug} should link to ${next}`);
  }
});

test("the footer never paints a dark overlay over preceding content", () => {
  const source = read("src/components/Footer.tsx");

  assert.doesNotMatch(source, /Cinematic bridge/);
  assert.doesNotMatch(source, /top:\s*"-80vh"/);
  assert.doesNotMatch(source, /height:\s*"80vh"/);
});
