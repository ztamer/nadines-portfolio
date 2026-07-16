"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const expo = [0.22, 1, 0.36, 1] as const;
const CHARSET = "0123456789@#$%&*!";

// ── Content ───────────────────────────────────────────────────────────────────

const beats = [
  {
    number: "01",
    tag: "THE PIVOT",
    headline: ["NOT THE", "EXPECTED", "PATH."],
    body: "Interior Design gave me spatial thinking, trained proportion, and obsession with how people inhabit environments. Then I pivoted: Google UX certification, CalArts on Coursera. That background was never a detour. It became the foundation.",
  },
  {
    number: "02",
    tag: "THE GRIND",
    headline: ["REAL", "PRODUCTS,", "REAL STAKES."],
    body: "Takhzin: logistics under real operational constraints. Then Noon, one of the largest e-commerce platforms in the Arab world. Mobile apps, dashboards, platform features used by millions. Those products are still live today.",
  },
  {
    number: "03",
    tag: "WHO I AM",
    headline: ["FULL", "RANGE,", "NO GAPS."],
    body: "Consumer mobile, enterprise tooling, e-commerce, dashboards. UX and UI, not one or the other. I design in Figma, think in systems, and care about the details. Accessibility isn't an afterthought. Neither is the component on page three of a flow.",
  },
] as const;

// ── Number scramble ───────────────────────────────────────────────────────────

function useScramble(target: string, active: boolean, reduced: boolean) {
  const [display, setDisplay] = useState(target);
  const hasRun = useRef(false);

  useEffect(() => {
    if (reduced) return;
    setDisplay(target.split("").map(() => CHARSET[Math.floor(Math.random() * CHARSET.length)]).join(""));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!active || reduced || hasRun.current) return;
    hasRun.current = true;
    let i = 0;
    const total = 14;
    const id = setInterval(() => {
      if (i >= total) { setDisplay(target); clearInterval(id); return; }
      setDisplay(target.split("").map((ch, ci) =>
        i > total * 0.5 + ci * 1.5 ? ch : CHARSET[Math.floor(Math.random() * CHARSET.length)]
      ).join(""));
      i++;
    }, 38);
    return () => clearInterval(id);
  }, [active, target, reduced]);

  return display;
}

// ── Cursor glow ───────────────────────────────────────────────────────────────

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -999, y: -999 });
  const pos = useRef({ x: -999, y: -999 });
  const raf = useRef(0);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.045);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.045);
      if (ref.current) {
        ref.current.style.transform =
          `translate(calc(${pos.current.x}px - 50%), calc(${pos.current.y}px - 50%))`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    const move = (e: MouseEvent) => { target.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed", top: 0, left: 0,
        width: "36vw", height: "36vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(246,42,153,0.068) 0%, transparent 70%)",
        filter: "blur(72px)",
        pointerEvents: "none",
        zIndex: 40,
      }}
    />
  );
}

// ── Beat ──────────────────────────────────────────────────────────────────────

function Beat({
  beat,
  isLast,
}: {
  beat: (typeof beats)[number];
  isLast: boolean;
}) {
  const reduced = useReducedMotion() ?? false;
  const [active, setActive] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrambled = useScramble(beat.number, active, reduced);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el || reduced) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  const fromLeft = (delay: number) =>
    reduced ? {} : {
      initial: { opacity: 0, x: -22, y: 0 } as const,
      whileInView: { opacity: 1, x: 0 } as const,
      viewport: { once: true, amount: 0.12 },
      transition: { duration: 0.68, delay, ease: expo },
    };

  const fromRight = (delay: number) =>
    reduced ? {} : {
      initial: { opacity: 0, x: 22 } as const,
      whileInView: { opacity: 1, x: 0 } as const,
      viewport: { once: true, amount: 0.12 },
      transition: { duration: 0.72, delay, ease: expo },
    };

  const headlineReveal = (i: number) =>
    reduced ? {} : {
      initial: { opacity: 0, y: 64, rotateX: 48 } as const,
      whileInView: { opacity: 1, y: 0, rotateX: 0 } as const,
      viewport: { once: true, amount: 0.12 },
      transition: { duration: 0.9, delay: 0.1 + i * 0.13, ease: expo },
    };

  return (
    <>
      <div
        className="md:min-h-screen"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(72px, 12vh, 140px) clamp(28px, 4vw, 64px)",
          position: "relative",
        }}
      >
        {/* Chapter label */}
        <div ref={triggerRef}>
          <motion.div
            {...fromLeft(0)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "clamp(32px, 4.5vh, 56px)",
            }}
          >
            <span style={{
              fontFamily: "'Aeonik Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.28em",
              color: "#f62a99",
              minWidth: "2ch",
              display: "inline-block",
            }}>
              {scrambled}
            </span>
            <div aria-hidden="true" style={{ width: "22px", height: "1px", background: "rgba(246,42,153,0.32)" }} />
            <span style={{
              fontFamily: "'Aeonik Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.22)",
            }}>
              {beat.tag}
            </span>
          </motion.div>
        </div>

        {/* Ghost chapter number — fills the negative space on desktop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[3vw] hidden -translate-y-1/2 select-none md:block"
          style={{
            fontFamily: "'VC Nudge Black', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(320px, 38vw, 640px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "transparent",
            WebkitTextStroke: "2px rgba(246, 42, 153, 0.13)",
            zIndex: 0,
          }}
        >
          {beat.number}
        </div>

        {/* Headline + body — stacks on mobile, two columns from md up */}
        <div className="relative z-[1] grid grid-cols-1 gap-y-9 md:grid-cols-[1fr_clamp(200px,26vw,400px)] md:gap-x-[clamp(36px,5vw,72px)] md:items-end">
          {/* Headline — left column, left-aligned, fills its lane */}
          <div style={{ perspective: "1200px" }}>
            {beat.headline.map((line, i) => (
              <motion.p
                key={i}
                {...headlineReveal(i)}
                style={{
                  fontFamily: "'VC Nudge Black', sans-serif",
                  fontSize: "clamp(64px, 11.5vw, 174px)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.88,
                  letterSpacing: "-0.022em",
                  color: "oklch(99% 0.003 340)",
                  margin: 0,
                  textAlign: "left",
                  transformOrigin: "left bottom",
                  willChange: "transform, opacity",
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Body — right column, aligned to bottom of headline */}
          <motion.p
            {...fromRight(0.46)}
            style={{
              fontFamily: "'Aeonik Mono', monospace",
              fontSize: "clamp(13px, 1.05vw, 15px)",
              lineHeight: 1.95,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              paddingBottom: "clamp(4px, 0.8vh, 14px)",
            }}
          >
            {beat.body}
          </motion.p>
        </div>
      </div>

      {/* Divider — draws left to right */}
      {!isLast && (
        <div style={{ margin: "0 clamp(28px, 4vw, 64px)" }}>
          <motion.div
            initial={reduced ? {} : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: expo }}
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.07)",
              transformOrigin: "left center",
            }}
          />
        </div>
      )}
    </>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function StorySection() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section style={{ backgroundColor: "#08090b", overflowX: "clip", position: "relative" }}>
      {!reduced && <CursorGlow />}
      {beats.map((beat, i) => (
        <Beat key={beat.number} beat={beat} isLast={i === beats.length - 1} />
      ))}
    </section>
  );
}
