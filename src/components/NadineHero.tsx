"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const CYCLING_TITLES = ["UX/UI DESIGNER", "PRODUCT DESIGNER"];
const expo = [0.22, 1, 0.36, 1] as const;

const ROLES = [
  "UX/UI DESIGNER",
  "PRODUCT DESIGNER",
  "DESIGN SYSTEMS",
  "UX RESEARCHER",
  "INTERACTION DESIGN",
];

const EXPERTISE = [
  "UX RESEARCH",
  "INTERACTION DESIGN",
  "DESIGN SYSTEMS",
  "PROTOTYPING",
  "VISUAL DESIGN",
];

const mono: React.CSSProperties = {
  fontFamily: '"Aeonik Mono", monospace',
  textTransform: "uppercase",
  margin: 0,
  whiteSpace: "nowrap",
};

/** Mouse-parallax wrapper: children drift toward/away from the cursor. */
function useParallax(strength: number) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.06);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.06);
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x * strength}px, ${pos.current.y * strength}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const move = (e: MouseEvent) => {
      target.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [strength, reduced]);

  return ref;
}

export function NadineHero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const reduced = useReducedMotion() ?? false;
  const nameRef = useParallax(-26); // type drifts away from cursor
  const figureRef = useParallax(10); // figure drifts gently toward it

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % CYCLING_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Nadine Shokair — UX/UI designer"
      className="relative h-svh w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 30%, #c20000 0%, #880000 35%, #380000 65%, #050000 100%)",
      }}
    >
      {/* LAYER 1 — Big "NADINE" typography behind the figure, parallaxed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 z-[1] whitespace-nowrap"
        style={{ transform: "translate(-50%, -54%)" }}
      >
        <motion.div
          ref={nameRef}
          initial={reduced ? false : { opacity: 0, scale: 1.08, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: expo }}
        >
          <span
            className="select-none uppercase"
            style={{
              fontFamily: '"VC Nudge Black", sans-serif',
              fontSize: "clamp(120px, 26vw, 380px)",
              fontWeight: 900,
              color: "rgba(70, 0, 0, 0.8)",
              letterSpacing: "0.08em",
              lineHeight: 1,
              display: "block",
            }}
          >
            NADINE
          </span>
        </motion.div>
      </div>

      {/* LAYER 2 — Nadine's cutout with slow rise-in */}
      <motion.div
        ref={figureRef}
        className="absolute top-[45%] left-1/2 z-[2] aspect-square w-[min(104vw,74svh)] -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[11svh] md:w-[min(75svh,72vw)] md:translate-y-0"
        initial={reduced ? false : { opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.15, ease: expo }}
      >
        <Image
          src="/images/nadine-home-headshot.webp"
          alt="Nadine Shokair"
          fill
          priority
          unoptimized
          className="object-contain [mask-image:linear-gradient(to_bottom,black_80%,transparent)] md:[mask-composite:intersect] md:[mask-image:linear-gradient(to_bottom,black_90%,transparent),linear-gradient(to_right,black_93%,transparent)]"
        />
      </motion.div>

      {/* LAYER 3 — Cinematic vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 38%, transparent 20%, rgba(3,0,0,0.4) 60%, rgba(3,0,0,0.88) 100%)",
        }}
      />

      {/* LAYER 4 — Bottom fade into the page body */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[4] h-[62%] [background:linear-gradient(to_bottom,transparent,rgba(8,9,11,0.38)_55%,rgba(8,9,11,0.88)_82%,#08090b)] md:h-1/2"
      />

      {/* LAYER 5 — Film grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-[5] opacity-[0.07] mix-blend-overlay"
        style={{
          inset: "-4%",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          animation: "grain-shift 1.2s steps(4) infinite",
        }}
      />

      {/* Top right text columns — hidden on small screens */}
      <motion.div
        className="absolute top-7 right-6 z-10 hidden gap-16 md:flex lg:right-20"
        initial={reduced ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: expo }}
      >
        <div className="flex flex-col gap-1">
          <div className="relative h-4 min-w-40 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={CYCLING_TITLES[titleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
                style={{ ...mono, fontSize: 13, color: "rgba(255,255,255,0.9)", letterSpacing: "0.12em" }}
              >
                {CYCLING_TITLES[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p style={{ ...mono, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em" }}>
            INTERACTION DESIGN
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p style={{ ...mono, fontSize: 13, color: "rgba(255,255,255,0.9)", letterSpacing: "0.12em" }}>
            PROGRESS ISN&#39;T A GOAL
          </p>
          <p style={{ ...mono, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em" }}>
            IT&#39;S A CONSTANT
          </p>
        </div>
      </motion.div>

      {/* Bottom left scroll arrow — desktop only (mobile has the info block) */}
      <div className="absolute bottom-8 left-8 z-10 hidden sm:block">
        <motion.span
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
          style={{
            fontFamily: '"Aeonik Mono", monospace',
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1,
            display: "block",
          }}
        >
          ↓
        </motion.span>
      </div>

      {/* Bottom right WHAT I DO + EXPERTISE — collapses to single column, hidden on phones */}
      <motion.div
        className="absolute right-6 bottom-8 z-10 hidden gap-10 sm:flex lg:right-20 lg:gap-16"
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: expo }}
      >
        <div className="flex flex-col gap-1.5">
          <p style={{ ...mono, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", marginBottom: 4 }}>
            WHAT I DO
          </p>
          {ROLES.map((role) => (
            <p key={role} style={{ ...mono, fontSize: 13, color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em" }}>
              {role}
            </p>
          ))}
        </div>
        <div className="hidden flex-col gap-1.5 md:flex">
          <p style={{ ...mono, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", marginBottom: 4 }}>
            EXPERTISE
          </p>
          {EXPERTISE.map((skill) => (
            <p key={skill} style={{ ...mono, fontSize: 13, color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em" }}>
              {skill}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Mobile-only info block (replaces the corner columns) */}
      <motion.div
        className="absolute inset-x-0 bottom-8 z-10 px-7 sm:hidden"
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <div className="mb-5">
          <div className="relative h-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={CYCLING_TITLES[titleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
                style={{ ...mono, fontSize: 12, color: "rgba(255,255,255,0.9)", letterSpacing: "0.14em" }}
              >
                {CYCLING_TITLES[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p style={{ ...mono, fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.14em", marginTop: 4 }}>
            INTERACTION DESIGN · CAIRO
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <p style={{ ...mono, fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", marginBottom: 3 }}>
              WHAT I DO
            </p>
            {ROLES.slice(0, 4).map((role) => (
              <p key={role} style={{ ...mono, fontSize: 11, color: "rgba(255,255,255,0.8)", letterSpacing: "0.08em" }}>
                {role}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            <p style={{ ...mono, fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", marginBottom: 3 }}>
              EXPERTISE
            </p>
            {EXPERTISE.slice(0, 4).map((skill) => (
              <p key={skill} style={{ ...mono, fontSize: 11, color: "rgba(255,255,255,0.8)", letterSpacing: "0.08em" }}>
                {skill}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
