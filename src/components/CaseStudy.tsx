"use client";

import { useRef } from "react";
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

// ── Types ───────────────────────────────────────────────────────────────────

export interface CaseChapter {
  title: string;
  kicker: string;
  image: string;
  alt: string;
  body: string[];
  preserveArtwork?: boolean;
}

export interface CaseStudyProps {
  /** Title lines, rendered stacked (e.g. ["NOON", "SUPERMALL"]) */
  titleLines: string[];
  /** Accent color for the title period (brand color of the project) */
  accent: string;
  intro: string;
  facts: { k: string; v: string }[];
  cover: { src: string; alt: string; preserveArtwork?: boolean };
  brief: string[];
  chapters: CaseChapter[];
  outcome: { lines: React.ReactNode; detail: string };
  next: { href: string; label: string };
}

// ── Bits ────────────────────────────────────────────────────────────────────

function ParallaxFrame({
  src,
  alt,
  priority = false,
  preserveArtwork = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  preserveArtwork?: boolean;
}) {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-md"
      style={{ aspectRatio: "16 / 10", backgroundColor: "#101114" }}
    >
      <motion.div
        className="absolute"
        style={{
          inset: preserveArtwork ? 0 : "-8% 0",
          y: preserveArtwork || reduced ? 0 : imgY,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 88vw"
          priority={priority}
          style={{ objectFit: preserveArtwork ? "contain" : "cover" }}
        />
      </motion.div>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  amount = 0.3,
}: {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
}) {
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: expo }}
    >
      {children}
    </motion.div>
  );
}

// ── Case study template ─────────────────────────────────────────────────────

export function CaseStudy({
  titleLines,
  accent,
  intro,
  facts,
  cover,
  brief,
  chapters,
  outcome,
  next,
}: CaseStudyProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <LenisProvider>
      <Navbar />

      <main className="overflow-x-clip bg-[#08090b]">
        {/* ── Hero ── */}
        <header className="px-7 pt-36 pb-12 md:px-16 md:pt-44 md:pb-16">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 no-underline"
            style={{
              fontFamily: '"Aeonik Mono", monospace',
              fontSize: 12,
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <span aria-hidden="true">←</span> ALL PROJECTS
          </Link>

          <div className="mt-8 overflow-hidden">
            <motion.h1
              initial={reduced ? false : { y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: expo }}
              className="m-0"
              style={{
                fontFamily: '"VC Nudge Black", sans-serif',
                fontWeight: 900,
                fontSize: "clamp(48px, 11vw, 168px)",
                lineHeight: 0.88,
                letterSpacing: "-0.025em",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              {titleLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < titleLines.length - 1 ? <br /> : (
                    <span style={{ color: accent }}>.</span>
                  )}
                </span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: expo }}
            className="mt-8 mb-0 max-w-[56ch]"
            style={{
              fontFamily: '"Aeonik Mono", monospace',
              fontSize: "clamp(13px, 1.05vw, 16px)",
              lineHeight: 1.8,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {intro}
          </motion.p>

          {/* Facts strip */}
          <motion.dl
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: expo }}
            className="mt-12 mb-0 grid grid-cols-2 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-3 md:grid-cols-5"
          >
            {facts.map((f) => (
              <div key={f.k}>
                <dt
                  style={{
                    fontFamily: '"Aeonik Mono", monospace',
                    fontSize: 10,
                    letterSpacing: "0.24em",
                    color: PINK,
                  }}
                >
                  {f.k}
                </dt>
                <dd
                  className="m-0 mt-2"
                  style={{
                    fontFamily: '"Aeonik Mono", monospace',
                    fontSize: "clamp(11px, 0.95vw, 14px)",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {f.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </header>

        {/* ── Cover ── */}
        <section aria-label="Project cover" className="px-7 md:px-16">
          <Reveal amount={0.15}>
            <ParallaxFrame
              src={cover.src}
              alt={cover.alt}
              priority
              preserveArtwork={cover.preserveArtwork}
            />
          </Reveal>
        </section>

        {/* ── Brief ── */}
        <section
          aria-label="The brief"
          className="grid gap-10 px-7 pt-24 pb-8 md:grid-cols-[38%_1fr] md:gap-16 md:px-16 md:pt-36 md:pb-12"
        >
          <Reveal>
            <h2
              className="m-0"
              style={{
                fontFamily: '"VC Nudge Black", sans-serif',
                fontWeight: 900,
                fontSize: "clamp(36px, 5.5vw, 80px)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              THE
              <br />
              BRIEF
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="flex flex-col gap-6"
              style={{
                fontFamily: '"Aeonik Mono", monospace',
                fontSize: "clamp(13px, 1.05vw, 16px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {brief.map((para) => (
                <p key={para.slice(0, 24)} className="m-0">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Chapters ── */}
        <div className="flex flex-col gap-24 px-7 pt-16 md:gap-36 md:px-16 md:pt-24">
          {chapters.map((ch, i) => (
            <section key={ch.title} aria-label={ch.title}>
              <Reveal amount={0.4}>
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <h2
                    className="m-0"
                    style={{
                      fontFamily: '"VC Nudge Black", sans-serif',
                      fontWeight: 900,
                      fontSize: "clamp(30px, 4.5vw, 64px)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.02em",
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: '"Aeonik Mono", monospace',
                        fontWeight: 400,
                        fontSize: "clamp(11px, 1vw, 14px)",
                        letterSpacing: "0.24em",
                        color: PINK,
                        marginRight: 18,
                        verticalAlign: "middle",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {ch.title}
                  </h2>
                  <span
                    className="hidden shrink-0 md:inline"
                    style={{
                      fontFamily: '"Aeonik Mono", monospace',
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                    }}
                  >
                    {ch.kicker}
                  </span>
                </div>
              </Reveal>

              <Reveal amount={0.15}>
                <ParallaxFrame
                  src={ch.image}
                  alt={ch.alt}
                  preserveArtwork={ch.preserveArtwork}
                />
              </Reveal>

              <Reveal delay={0.08} amount={0.4}>
                <div
                  className="mt-6 grid gap-4 md:grid-cols-2 md:gap-12"
                  style={{
                    fontFamily: '"Aeonik Mono", monospace',
                    fontSize: "clamp(12px, 1vw, 15px)",
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {ch.body.map((para) => (
                    <p key={para.slice(0, 24)} className="m-0">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            </section>
          ))}
        </div>

        {/* ── Outcome ── */}
        <section
          aria-label="Outcome"
          className="px-7 pt-28 pb-8 md:px-16 md:pt-40 md:pb-12"
        >
          <Reveal amount={0.4}>
            <p
              className="m-0 max-w-[24ch]"
              style={{
                fontFamily: '"VC Nudge Black", sans-serif',
                fontWeight: 900,
                fontSize: "clamp(30px, 4.8vw, 68px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              {outcome.lines}
            </p>
          </Reveal>
          <Reveal delay={0.1} amount={0.4}>
            <p
              className="mt-8 mb-0 max-w-[58ch]"
              style={{
                fontFamily: '"Aeonik Mono", monospace',
                fontSize: "clamp(12px, 1vw, 15px)",
                lineHeight: 1.9,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {outcome.detail}
            </p>
          </Reveal>
        </section>

        {/* ── Next project ── */}
        <section
          aria-label="Next project"
          className="px-7 pt-12 pb-8 md:px-16 md:pt-16"
        >
          <Reveal amount={0.5}>
            <Link
              href={next.href}
              className="group block border-t border-white/10 pt-8 no-underline"
            >
              <span
                style={{
                  fontFamily: '"Aeonik Mono", monospace',
                  fontSize: 11,
                  letterSpacing: "0.24em",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                NEXT
              </span>
              <span
                className="mt-3 flex items-baseline gap-5"
                style={{
                  fontFamily: '"VC Nudge Black", sans-serif',
                  fontWeight: 900,
                  fontSize: "clamp(32px, 6vw, 90px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                <span className="transition-colors duration-300 group-hover:text-[#f62a99]">
                  {next.label}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-2"
                  style={{ color: PINK }}
                >
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        </section>

        <Footer />
      </main>
    </LenisProvider>
  );
}
