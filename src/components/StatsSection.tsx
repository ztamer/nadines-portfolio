"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

const expo = [0.22, 1, 0.36, 1] as const;
const PINK = "#f62a99";

// ── Count-up hook ──────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1.4) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, target, {
      duration,
      ease: expo,
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration, reduced]);

  return { count: reduced && inView ? target : count, ref };
}

// ── Data ───────────────────────────────────────────────────────────────────

const PROOF = [
  {
    number: 2,
    suffix: "+",
    unit: "YEARS",
    detail: "Shipping production design at noon, Telda & Takhzin",
  },
  {
    number: 10,
    suffix: "+",
    unit: "PROJECTS",
    detail: "Web, mobile, dashboards — live and in use",
  },
  {
    number: 5,
    suffix: "+",
    unit: "CLIENTS",
    detail: "From startups to regional platforms",
  },
];

const CLIENTS = ["NOON", "TELDA", "SUPERMALL", "THE RECRUITER", "TAKHZIN", "PETPAL", "VERTEX", "CINEMA BOOKING"];

// ── Proof row ──────────────────────────────────────────────────────────────

function ProofRow({
  number,
  suffix,
  unit,
  detail,
  index,
}: (typeof PROOF)[number] & { index: number }) {
  const { count, ref } = useCountUp(number);
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: expo }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-2 border-t border-white/10 py-7 md:flex-row md:items-baseline md:gap-10 md:py-9"
    >
      {/* Number + unit */}
      <div className="flex items-baseline gap-4 md:w-[44%] md:shrink-0">
        <span
          ref={ref}
          style={{
            fontFamily: '"VC Nudge Black", sans-serif',
            fontSize: "clamp(56px, 7.5vw, 110px)",
            fontWeight: 900,
            lineHeight: 0.9,
            color: hovered ? PINK : "white",
            transition: "color 0.3s cubic-bezier(0.22,1,0.36,1)",
            minWidth: "2ch",
            display: "inline-block",
          }}
        >
          {count}
          {suffix}
        </span>
        <span
          style={{
            fontFamily: '"VC Nudge Black", sans-serif',
            fontSize: "clamp(20px, 2.2vw, 34px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.92)",
          }}
        >
          {unit}
        </span>
      </div>

      {/* Detail */}
      <p
        className="m-0 md:flex-1"
        style={{
          fontFamily: '"Aeonik Mono", monospace',
          fontSize: "clamp(12px, 1vw, 15px)",
          lineHeight: 1.8,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        {detail}
      </p>

      {/* Hover sweep */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full">
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: expo }}
          className="h-full origin-left"
          style={{ backgroundColor: PINK }}
        />
      </div>
    </motion.div>
  );
}

// ── CTA link ───────────────────────────────────────────────────────────────

function WorkCta() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/work"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group inline-flex items-center gap-3"
      style={{
        border: `1.5px solid ${PINK}`,
        borderRadius: 8,
        padding: "14px 26px",
        color: hovered ? "#08090b" : "white",
        backgroundColor: hovered ? PINK : "transparent",
        fontFamily: '"Aeonik Mono", monospace',
        fontSize: 13,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        textDecoration: "none",
        transition: "background-color 0.22s ease-out, color 0.22s ease-out",
      }}
    >
      SEE THE WORK
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

interface StatsSectionProps {
  className?: string;
}

export function StatsSection({ className }: StatsSectionProps) {
  const reduced = useReducedMotion() ?? false;
  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <section
      className={cn("relative bg-[#08090b] pt-24 md:pt-32", className)}
      aria-label="Why work with Nadine"
    >
      {/* ── Heading + statement ── */}
      <div className="px-7 md:px-20">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: expo }}
          viewport={{ once: true, amount: 0.4 }}
          className="m-0"
          style={{
            fontFamily: '"VC Nudge Black", sans-serif',
            fontSize: "clamp(56px, 11vw, 150px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          WHY ME
        </motion.h2>

        <div className="mt-10 mb-14 flex flex-col items-start justify-between gap-8 md:mt-12 md:mb-16 md:flex-row md:items-end">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: expo }}
            viewport={{ once: true, amount: 0.5 }}
            className="m-0 max-w-[52ch]"
            style={{
              fontFamily: '"Aeonik Mono", monospace',
              fontSize: "clamp(13px, 1.1vw, 16px)",
              color: "rgba(255,255,255,0.65)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              lineHeight: 1.75,
            }}
          >
            A UX/UI DESIGNER BASED IN CAIRO, EGYPT. BUILDING DIGITAL PRODUCTS THAT THINK CLEARLY
            AND FEEL DELIBERATE — FROM B2B PLATFORMS TO CONSUMER APPS.
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <WorkCta />
          </motion.div>
        </div>

        {/* ── Proof rows ── */}
        <div className="border-b border-white/10">
          {PROOF.map((stat, i) => (
            <ProofRow key={stat.unit} {...stat} index={i} />
          ))}
        </div>
      </div>

      {/* ── Client marquee — huge outline type, actually moving ── */}
      <div
        className="group/marquee mt-20 overflow-hidden border-y border-white/10 py-6 md:mt-28"
        aria-label={`Brands and products: ${CLIENTS.join(", ")}`}
      >
        <MarqueeTrack>
          {marqueeItems.map((client, i) => (
            <span key={`${client}-${i}`} aria-hidden="true" className="flex items-center">
              <span
                className="select-none whitespace-nowrap uppercase"
                style={{
                  fontFamily: '"VC Nudge Black", sans-serif',
                  fontSize: "clamp(44px, 6.5vw, 96px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.38)",
                  transition: "all 0.3s ease-out",
                }}
              >
                {client}
              </span>
              <span
                className="mx-6 inline-block h-2 w-2 rounded-full md:mx-10"
                style={{ backgroundColor: PINK }}
              />
            </span>
          ))}
        </MarqueeTrack>
      </div>
    </section>
  );
}

// ── rAF marquee — runs everywhere, immune to iOS animation quirks ───────────
function MarqueeTrack({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = Math.min(48, t - last);
      last = t;
      posRef.current -= dt * 0.05; // ~50px/s
      const half = el.scrollWidth / 2;
      if (half > 0 && -posRef.current >= half) posRef.current += half;
      el.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="flex w-max items-center will-change-transform">
      {children}
    </div>
  );
}
