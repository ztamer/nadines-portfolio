"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";

const expo = [0.22, 1, 0.36, 1] as const;
const PINK = "#f62a99";

// ── Featured case studies (with imagery) ────────────────────────────────────

type FeaturedItem = {
  num: string;
  name: string;
  category: string;
  year?: string;
  image: string;
  hoverImage: string;
  blurb: string;
  href?: string;
};

const FEATURED: FeaturedItem[] = [
  {
    num: "01",
    name: "NOON SUPERMALL",
    category: "MOBILE · E-COMMERCE · DESIGN SYSTEM",
    year: "2025",
    image: "/images/mockup-noon-supermall.jpg",
    hoverImage: "/images/project-noon-supermall.jpg",
    href: "/work/noon-supermall",
    blurb:
      "Noon's everything-store, redesigned end to end — 40+ screens from onboarding to checkout, seasonal campaign systems, and a component library built to ship fast.",
  },
  {
    num: "02",
    name: "BOSTA",
    category: "MOBILE · DELIVERY · PRODUCT DESIGN",
    image: "/images/mockup-bosta.jpg",
    hoverImage: "/images/project-bosta.jpg",
    href: "/work/bosta",
    blurb: "A consumer app for tracking deliveries, sending packages, and discovering local brands, with a design focus on Send Package.",
  },
  {
    num: "03",
    name: "THE RECRUITER",
    category: "DASHBOARD \u00b7 B2B \u00b7 HR OPS",
    year: "2024",
    image: "/images/mockup-the-recruiter.jpg",
    hoverImage: "/images/project-the-recruiter.jpg",
    href: "/work/the-recruiter",
    blurb:
      "Hiring ops dashboard for noon's talent team \u2014 every applicant, every stage, one screen. Compound filters, triage buckets, and a pipeline that reads at a glance.",
  },
  {
    num: "04",
    name: "LINKEDIN AI INTERVIEW",
    category: "MOBILE · AI INTERVIEW · PRODUCT DESIGN",
    year: "CONCEPT",
    image: "/images/mockup-linkedin-ai-interview.jpg",
    hoverImage: "/images/project-linkedin-ai-interview.jpg",
    href: "/work/linkedin-ai-interview",
    blurb: "AI interview practice experience for LinkedIn.",
  },
  {
    num: "05",
    name: "GXPER",
    category: "WEB + MOBILE · SPORTS PLATFORM",
    image: "/images/mockup-gxper.jpg",
    hoverImage: "/images/project-gxper.jpg",
    href: "/work/gxper",
    blurb: "A sports platform designed around clear, connected journeys across web and mobile.",
  },
  {
    num: "06",
    name: "NOON PROFILE",
    category: "WEB + APP \u00b7 IDENTITY \u00b7 LIVE",
    year: "2024",
    image: "/images/mockup-noon-profile.jpg",
    hoverImage: "/images/project-noon-profile.jpg",
    href: "/work/noon-profile",
    blurb:
      "Account and profile management across noon web and mobile \u2014 one identity powering every noon app, edited in seconds and trusted everywhere.",
  },
  {
    num: "07",
    name: "PETPAL",
    category: "MOBILE · VET CARE · BOOKING FLOW",
    year: "2025",
    image: "/images/mockup-petpal.jpg",
    hoverImage: "/images/project-petpal.jpg",
    href: "/work/petpal",
    blurb:
      "Vet discovery and booking without the phone calls: trusted profiles, visible availability, and a four-tap path from search to confirmation.",
  },
  {
    num: "09",
    name: "VERTEX",
    category: "WEB · FINTECH · PRODUCT SYSTEM",
    year: "2025",
    image: "/images/mockup-vertex-landing.jpg",
    hoverImage: "/images/project-vertex-landing.jpg",
    href: "/work/vertex",
    blurb:
      "A prop-trading landing page that brings the offer, proof points, and next action into one focused acquisition frame.",
  },
  {
    num: "10",
    name: "BASE360",
    category: "WEB · LANDING PAGE · VISUAL DESIGN",
    image: "/images/mockup-base360.jpg",
    hoverImage: "/images/project-base360.jpg",
    href: "/work/base360",
    blurb: "A website and landing page that bring the brand’s visual identity and product offering together.",
  },
  {
    num: "11",
    name: "CINEMA BOOKING",
    category: "MOBILE · BOOKING · COMMERCE",
    year: "2025",
    image: "/images/mockup-cinema-booking-real.jpg",
    hoverImage: "/images/project-cinema-booking-real.jpg",
    href: "/work/cinema-booking",
    blurb:
      "One continuous night out: choose the film, showtime, and seats, then carry a scannable mobile ticket straight to the screen.",
  },
];

// ── Index — product work under NDA / personal ──────────────────────────────

const INDEX = [
  {
    num: "08",
    id: "noon-security",
    name: "NOON — SECURITY & DEVICE MANAGEMENT",
    type: "MOBILE · SECURITY",
    note: "LIVE",
    brief: "We use our accounts across different devices, but we don't always know where we're still signed in. This Noon feature gives users the ability to sign out of all active devices from one place. I worked on making this action easy to find and understand, while ensuring users feel confident about what happens when they use it. It's a small feature, but an important one when it comes to giving users more control over their account security. The feature is now live.",
  },
];

const PROJECTS = [...FEATURED, ...INDEX].sort((a, b) => Number(a.num) - Number(b.num));

// ── Featured project block ──────────────────────────────────────────────────

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof FEATURED)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);

  // Gentle parallax inside the image frame
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, ease: expo }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.href && (
        <Link
          href={project.href}
          aria-label={`${project.name} — open case study`}
          className="absolute inset-0 z-10"
        />
      )}
      {/* Meta row */}
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-4 md:gap-6">
          <span
            style={{
              fontFamily: '"Aeonik Mono", monospace',
              fontSize: 12,
              letterSpacing: "0.24em",
              color: PINK,
            }}
          >
            {project.num}
          </span>
          <h2
            className="m-0"
            style={{
              fontFamily: '"VC Nudge Black", sans-serif',
              fontWeight: 900,
              fontSize: "clamp(28px, 4.5vw, 64px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: hovered ? PINK : "white",
              transition: "color 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {project.name}
          </h2>
        </div>
        <span
          className="hidden shrink-0 sm:inline"
          style={{
            fontFamily: '"Aeonik Mono", monospace',
            fontSize: 12,
            letterSpacing: "0.16em",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Image frame */}
      <div
        ref={ref}
        className="relative w-full overflow-hidden rounded-md"
        style={{ aspectRatio: "16 / 10", backgroundColor: "#101114" }}
      >
        <motion.div
          className="absolute"
          style={{ inset: "-8% 0", y: reduced ? 0 : imgY }}
        >
          <Image
            src={project.image}
            alt={`${project.name} — ${project.category.toLowerCase()}`}
            fill
            sizes="(max-width: 768px) 100vw, 88vw"
            priority={index === 0}
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              opacity: hovered ? 0 : 1,
              transition:
                "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          <Image
            src={project.hoverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 88vw"
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1)" : "scale(1.06)",
              opacity: hovered ? 1 : 0,
              transition:
                "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        </motion.div>

        {/* Bottom scrim + category, lives on the image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(to top, rgba(8,9,11,0.82) 0%, transparent 100%)",
          }}
        />
        <span
          className="absolute bottom-4 left-5"
          style={{
            fontFamily: '"Aeonik Mono", monospace',
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {project.category}
        </span>
        {project.href && (
          <span
            aria-hidden="true"
            className="absolute right-5 bottom-4"
            style={{
              fontFamily: '"Aeonik Mono", monospace',
              fontSize: "clamp(10px, 0.85vw, 12px)",
              letterSpacing: "0.18em",
              backgroundColor: PINK,
              color: "#08090b",
              borderRadius: 999,
              padding: "9px 18px",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition:
                "opacity 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            VIEW CASE STUDY →
          </span>
        )}
      </div>

      {/* Blurb */}
      <p
        className="mt-5 mb-0 max-w-[62ch]"
        style={{
          fontFamily: '"Aeonik Mono", monospace',
          fontSize: "clamp(12px, 1vw, 15px)",
          lineHeight: 1.85,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        {project.blurb}
      </p>
    </motion.article>
  );
}

// ── Index row ───────────────────────────────────────────────────────────────

function IndexRow({
  item,
  index,
}: {
  item: (typeof INDEX)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion() ?? false;

  return (
    <article id={item.id} className="scroll-mt-28">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: expo }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col gap-2 border-y border-white/10 py-5 sm:flex-row sm:items-baseline sm:gap-6 md:py-6"
      >
        <span className="text-xs tracking-[0.24em] text-[#f62a99]" style={{ fontFamily: '"Aeonik Mono", monospace' }}>
          {item.num}
        </span>
        <h2
          className="m-0 sm:flex-1"
          style={{
            fontFamily: '"VC Nudge Black", sans-serif',
            fontWeight: 900,
            fontSize: "clamp(20px, 2.6vw, 38px)",
            lineHeight: 1,
            letterSpacing: "-0.015em",
            textTransform: "uppercase",
            color: hovered ? PINK : "rgba(255,255,255,0.92)",
            transition: "color 0.25s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {item.name}
        </h2>
        <span
          className="sm:w-[30%]"
          style={{
            fontFamily: '"Aeonik Mono", monospace',
            fontSize: "clamp(10px, 0.85vw, 13px)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {item.type}
        </span>
        <span
          className="sm:w-28 sm:text-right"
          style={{
            fontFamily: '"Aeonik Mono", monospace',
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: item.note === "LIVE" ? PINK : "rgba(255,255,255,0.3)",
          }}
        >
          {item.note}
        </span>

        {/* Hover sweep */}
        <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full">
          <motion.div
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: expo }}
            className="h-full origin-left"
            style={{ backgroundColor: PINK }}
          />
        </div>
      </motion.div>
      <section aria-label="The brief" className="mt-5 max-w-[62ch] font-['Aeonik_Mono',monospace]">
        <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-white/75">The Brief</h3>
        <p className="m-0 text-[clamp(12px,1vw,15px)] leading-[1.85] text-white/60">
          {item.brief}
        </p>
      </section>
    </article>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const reduced = useReducedMotion() ?? false;

  return (
    <LenisProvider>
      <Navbar />

      <main className="overflow-x-clip bg-[#08090b]">
        {/* ── Hero ── */}
        <header className="px-7 pt-36 pb-16 md:px-16 md:pt-44 md:pb-24">
          <div className="overflow-hidden">
            <motion.h1
              initial={reduced ? false : { y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: expo }}
              className="m-0"
              style={{
                fontFamily: '"VC Nudge Black", sans-serif',
                fontWeight: 900,
                fontSize: "clamp(64px, 16vw, 240px)",
                lineHeight: 0.86,
                letterSpacing: "-0.025em",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              PROJECTS
              <span style={{ color: PINK }}>.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: expo }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <p
              className="m-0 max-w-[52ch]"
              style={{
                fontFamily: '"Aeonik Mono", monospace',
                fontSize: "clamp(12px, 1vw, 15px)",
                lineHeight: 1.8,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              TEN VISUAL PROJECTS, PLUS THE PRODUCT WORK THAT LIVES BEHIND
              LOGIN SCREENS AND NDAS.
            </p>
            <span
              style={{
                fontFamily: '"Aeonik Mono", monospace',
                fontSize: 12,
                letterSpacing: "0.24em",
                color: PINK,
              }}
            >
              ({String(FEATURED.length).padStart(2, "0")} + {String(INDEX.length).padStart(2, "0")})
            </span>
          </motion.div>
        </header>

        <section
          aria-label="Projects"
          className="flex flex-col gap-24 px-7 pb-24 md:gap-36 md:px-16 md:pb-32"
        >
          {PROJECTS.map((project, i) =>
            "image" in project ? (
              <FeaturedProject key={project.num} project={project} index={i} />
            ) : (
              <IndexRow key={project.num} item={project} index={i} />
            )
          )}
        </section>

        <Footer />
      </main>
    </LenisProvider>
  );
}
