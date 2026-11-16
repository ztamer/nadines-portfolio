"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { ThreePinwheel } from "@/components/ThreePinwheel";

const CARD_VH = 110;
const expo  = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    num: "01",
    name: "Noon Supermall – eCommerce Homepage Redesign",
    company: "NOON",
    type: "MOBILE · E-COMMERCE",
    tags: "MOBILE · E-COMMERCE · DESIGN SYSTEM",
    live: true,
    bg: "/images/project-noon-supermall.jpg",
    mockup: "/images/mockup-noon-supermall.jpg",
    href: "/work/noon-supermall",
  },
  {
    num: "02",
    name: "Bosta – Consumer App: Track, Send & Shop",
    company: "BOSTA",
    type: "MOBILE · DELIVERY · PRODUCT DESIGN",
    tags: "MOBILE · DELIVERY · PRODUCT DESIGN",
    live: false,
    bg: "/images/project-bosta.jpg",
    mockup: "/images/mockup-bosta.jpg",
    href: "/work/bosta",
  },
  {
    num: "03",
    name: "The Recruiter – ATS & Hiring Management Platform",
    company: "NOON",
    type: "DASHBOARD · HR OPS",
    tags: "DASHBOARD · B2B · HR OPERATIONS",
    live: true,
    bg: "/images/project-the-recruiter.jpg",
    mockup: "/images/mockup-the-recruiter.jpg",
    href: "/work/the-recruiter",
  },
  {
    num: "04",
    name: "LinkedIn – AI Interview Practice Experience",
    company: "PRODUCT CONCEPT",
    type: "MOBILE · AI INTERVIEW PRACTICE",
    tags: "MOBILE · AI INTERVIEW · PRODUCT DESIGN",
    live: false,
    bg: "/images/project-linkedin-ai-interview.jpg",
    mockup: "/images/mockup-linkedin-ai-interview.jpg",
    href: "/work/linkedin-ai-interview",
  },
  {
    num: "05",
    name: "GXPER – Sports Platform | Web & Mobile App",
    company: "GXPER",
    type: "WEB + MOBILE · SPORTS PLATFORM",
    tags: "WEB + MOBILE · TOURNAMENTS · PRODUCT DESIGN",
    live: false,
    bg: "/images/project-gxper.jpg",
    mockup: "/images/mockup-gxper.jpg",
    href: "/work/gxper",
  },
  {
    num: "06",
    name: "Noon – UAE Resident Status & Profile Management",
    company: "NOON",
    type: "WEB + APP · IDENTITY",
    tags: "WEB + APP · ACCOUNT · IDENTITY",
    live: true,
    bg: "/images/project-noon-profile.jpg",
    mockup: "/images/mockup-noon-profile.jpg",
    href: "/work/noon-profile",
  },
  {
    num: "07",
    name: "PetPal – Veterinary Appointment Booking App",
    company: "PRODUCT CONCEPT",
    type: "MOBILE · VET CARE",
    tags: "MOBILE · VET CARE · BOOKING FLOW",
    live: false,
    bg: "/images/project-petpal.jpg",
    mockup: "/images/mockup-petpal.jpg",
    href: "/work/petpal",
  },
  {
    num: "08",
    name: "Noon – Security & Device Management",
    company: "NOON",
    type: "MOBILE · SECURITY",
    tags: "MOBILE · ACCOUNT SECURITY",
    live: true,
    bg: null,
    mockup: null,
    href: "/work#noon-security",
  },
  {
    num: "09",
    name: "Vertex – Prop Trading Website",
    company: "VERTEX",
    type: "WEB · PROP TRADING",
    tags: "WEB · FINTECH · PRODUCT SYSTEM",
    live: false,
    bg: "/images/project-vertex-landing.jpg",
    mockup: "/images/mockup-vertex-landing.jpg",
    href: "/work/vertex",
  },
  {
    num: "10",
    name: "Base360 – Website & Landing Page",
    company: "BASE360",
    type: "WEB · LANDING PAGE · VISUAL DESIGN",
    tags: "WEB · LANDING PAGE · VISUAL DESIGN",
    live: false,
    bg: "/images/project-base360.jpg",
    mockup: "/images/mockup-base360.jpg",
    href: "/work/base360",
  },
  {
    num: "11",
    name: "Movie Cinema – Ticket Booking App",
    company: "PRODUCT CONCEPT",
    type: "MOBILE · MOVIE TICKETS",
    tags: "MOBILE · BOOKING · COMMERCE",
    live: false,
    bg: "/images/project-cinema-booking-real.jpg",
    mockup: "/images/mockup-cinema-booking-real.jpg",
    href: "/work/cinema-booking",
  },
];

const TEASER_PROJECTS = projects;
const MARQUEE_TEXT = projects.map((project) => project.name).join("  ·  ") + "  ·  ";

// ── Bottom-left project info — lives on the dark zone ─────────────────────
function ProjectInfo({ active }: { active: number }) {
  const p = TEASER_PROJECTS[active];
  return (
    <div className="bottom-[130px] max-w-[calc(100%-64px)] md:bottom-[72px] md:max-w-[65%]" style={{ position: "absolute", left: "clamp(32px, 5vw, 64px)", zIndex: 15 }}>

      {/* Counter */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "5px", marginBottom: 10 }}>
        <div style={{ overflow: "hidden", lineHeight: 1 }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={p.num}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-110%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "block",
                fontFamily: '"VC Nudge Black", sans-serif',
                fontSize: "clamp(28px, 3.5vw, 52px)",
                fontWeight: 900,
                lineHeight: 1,
                color: "#f62a99",
                userSelect: "none",
                textShadow: "0 0 16px rgba(8,9,11,1), 0 2px 12px rgba(8,9,11,1), 0 0 4px rgba(8,9,11,0.9)",
              }}
            >
              {p.num}
            </motion.span>
          </AnimatePresence>
        </div>
        <span style={{
          fontFamily: '"Aeonik Mono", monospace',
          fontSize: "clamp(11px, 1vw, 14px)",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.28)",
          userSelect: "none",
        }}>/ {String(TEASER_PROJECTS.length).padStart(2, "0")}</span>
      </div>

      {/* Project name */}
      <div style={{ overflow: "hidden", lineHeight: 1.05, marginBottom: 8 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={p.num + "name"}
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-105%", opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{
              fontFamily: '"VC Nudge Black", sans-serif',
              fontSize: "clamp(18px, 2.2vw, 32px)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "oklch(98% 0.004 340)",
              userSelect: "none",
              display: "block",
            }}>
              {p.name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Company · type · LIVE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={p.num + "meta"}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 8 }}
          transition={{ duration: 0.22, ease: expo }}
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <span style={{
            fontFamily: '"Aeonik Mono", monospace',
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.42)",
            textTransform: "uppercase",
            userSelect: "none",
          }}>
            {p.company}&nbsp;·&nbsp;{p.type}
          </span>
          {p.live && (
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: '"Aeonik Mono", monospace',
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "1px solid rgba(246,42,153,0.65)",
                color: "#f62a99",
                padding: "2px 7px",
                userSelect: "none",
              }}
            >
              LIVE
            </motion.span>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── Scroll hint — bottom-right ─────────────────────────────────────────────
function ScrollHint() {
  return (
    <div className="hidden md:flex" style={{ position: "absolute", bottom: 80, right: "clamp(32px, 5vw, 64px)", zIndex: 15, flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
      <span style={{
        fontFamily: '"Aeonik Mono", monospace',
        fontSize: 10,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.22)",
        userSelect: "none",
      }}>
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        style={{ color: "rgba(255,255,255,0.22)", fontSize: 16, lineHeight: 1 }}
      >
        ↓
      </motion.div>
    </div>
  );
}

// ── Speed-reactive marquee ─────────────────────────────────────────────────
function MarqueeStrip() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const singleRef  = useRef<HTMLSpanElement>(null);
  const posRef     = useRef(0);
  const prevY      = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const rafRef     = useRef<number>(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const single  = singleRef.current;
    if (!wrapper || !single) return;
    prevY.current = window.scrollY;

    const tick = () => {
      const cur      = window.scrollY;
      const velocity = cur - prevY.current;
      prevY.current  = cur;
      const speed    = 1.1 + Math.abs(velocity) * 0.28;
      posRef.current -= speed;
      const w = single.offsetWidth;
      if (w > 0 && posRef.current <= -w) posRef.current += w;
      wrapper.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const mono: React.CSSProperties = {
    fontFamily: '"Aeonik Mono", monospace',
    fontSize: 12,
    letterSpacing: "0.24em",
    color: "rgba(255,255,255,0.55)",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      overflow: "hidden",
      padding: "18px 0",
      zIndex: 15,
      borderTop: "1px solid rgba(255,255,255,0.12)",
      background: "linear-gradient(to top, rgba(8,9,11,0.82) 0%, rgba(8,9,11,0.6) 50%, transparent 100%)",
    }}>
      <div ref={wrapperRef} style={{ display: "inline-flex", willChange: "transform" }}>
        <span ref={singleRef} style={mono}>{MARQUEE_TEXT}</span>
        <span aria-hidden style={mono}>{MARQUEE_TEXT}</span>
      </div>
    </div>
  );
}

// ── Mockup wipe layer ──────────────────────────────────────────────────────
function MockupLayer({ src, index, total, scrollYProgress }: {
  src: string | null; index: number; total: number; scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, (progress: number): string => {
    if (typeof window === "undefined") return index === 0 ? "0%" : "100%";
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const frameW      = Math.min(Math.max(340, 0.34 * vw), 520);
    const frameH      = (frameW * 3) / 4;
    const frameTop    = (vh - frameH) / 2;
    const frameBottom = (vh + frameH) / 2;
    const cardH       = (CARD_VH / 100) * vh;
    const scrollDenom = total * cardH - vh;
    const lef = (b: number) => (b * cardH - frameBottom) / scrollDenom;
    const lex = (b: number) => (b * cardH - frameTop)    / scrollDenom;
    const entryEnter = index === 0         ? null : lef(index);
    const entryExit  = index === 0         ? null : lex(index);
    const exitEnter  = index === total - 1 ? null : lef(index + 1);
    const exitExit   = index === total - 1 ? null : lex(index + 1);
    const pct = (a: number, b: number) => (progress - a) / (b - a);
    if (index === 0) {
      if (!exitEnter || !exitExit || progress <= exitEnter) return "0%";
      if (progress >= exitExit) return "-100%";
      return `${-100 * pct(exitEnter, exitExit)}%`;
    }
    if (index === total - 1) {
      if (!entryEnter || !entryExit || progress <= entryEnter) return "100%";
      if (progress >= entryExit) return "0%";
      return `${100 * (1 - pct(entryEnter, entryExit))}%`;
    }
    if (!entryEnter || !entryExit || progress <= entryEnter) return "100%";
    if (progress <= entryExit) return `${100 * (1 - pct(entryEnter, entryExit))}%`;
    if (!exitEnter || !exitExit || progress <= exitEnter) return "0%";
    if (progress >= exitExit) return "-100%";
    return `${-100 * pct(exitEnter, exitExit)}%`;
  });
  return (
    <motion.div style={{ position: "absolute", inset: 0, y }}>
      {src ? (
        <Image src={src} alt="" fill sizes="clamp(340px, 34vw, 520px)" style={{ objectFit: "cover" }} priority={index === 0} />
      ) : (
        <div aria-hidden="true" className="grid h-full place-items-center bg-[#14130c] text-[#ffef00]">
          <svg className="w-1/4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 6 52 14v14c0 14-9 24-20 30C21 52 12 42 12 28V14L32 6Z" />
            <path d="m24 32 5 5 11-11" />
          </svg>
        </div>
      )}
    </motion.div>
  );
}

// ── Mockup frame ───────────────────────────────────────────────────────────
function MockupFrame({ scrollYProgress, projectList }: { scrollYProgress: MotionValue<number>; projectList: typeof projects }) {
  const frameY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  return (
    <motion.div
      style={{
        width: "clamp(340px, 34vw, 520px)",
        aspectRatio: "4/3",
        position: "relative",
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06)",
        y: frameY,
      }}
    >
      {projectList.map((p, i) => (
        <MockupLayer key={p.name} src={p.mockup} index={i} total={projectList.length} scrollYProgress={scrollYProgress} />
      ))}
    </motion.div>
  );
}

// ── Scroll-progress bar for project cards ─────────────────────────────────
function CardProgress({ scrollYProgress, total }: { scrollYProgress: MotionValue<number>; total: number }) {
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(Math.floor(v * total), total - 1));
  });
  return (
    <div style={{
      position: "absolute",
      right: "clamp(24px, 4vw, 48px)",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      zIndex: 60,
    }}>
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: i === active ? 28 : 8,
            backgroundColor: i === active ? "#f62a99" : "rgba(255,255,255,0.18)",
          }}
          transition={{ duration: 0.35, ease: expo }}
          style={{ width: 2, borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

// ── Background card ────────────────────────────────────────────────────────
function ProjectBgCard({ num, name, tags, bg, href, index, total }: {
  num: string; name: string; tags: string; bg: string | null; href: string; index: number; total: number;
}) {
  return (
    <div style={{ height: `${CARD_VH}vh`, position: "relative" }}>
      <div style={{
        position: "sticky", top: 0, height: "100vh", overflow: "hidden",
        zIndex: 10 + index, backgroundColor: "#08090b",
      }}>
        {bg ? (
          <div aria-hidden="true" className="absolute inset-0">
            <Image src={bg} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} priority={index === 0} />
          </div>
        ) : (
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#8a761e_0%,#302606_50%,#08090b_95%)]" />
        )}

        <Link
          href={href}
          aria-label={bg ? `${name} — open case study` : `${name} — read the brief`}
          className="absolute inset-0 z-[4]"
        />

        {/* Gradient scrim — stronger at bottom for text legibility */}
        <div style={{
          position: "absolute", inset: 0,
          background: [
            "linear-gradient(to top, rgba(8,9,11,0.88) 0%, rgba(8,9,11,0.42) 28%, transparent 55%)",
            "linear-gradient(to right, rgba(8,9,11,0.3) 0%, transparent 40%)",
          ].join(", "),
          zIndex: 1,
        }} />

        {/* Bottom info bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "clamp(24px, 4vh, 40px) clamp(32px, 5vw, 64px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 24,
          zIndex: 3,
        }}>
          {/* Left: number + name */}
          <div className="min-w-0">
            <span style={{
              fontFamily: '"Aeonik Mono", monospace',
              fontSize: 11,
              letterSpacing: "0.28em",
              color: "#f62a99",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 6,
            }}>
              {num} / {String(total).padStart(2, "0")}
            </span>
            <span style={{
              fontFamily: '"VC Nudge Black", sans-serif',
              fontSize: "clamp(18px, 2.2vw, 30px)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "oklch(98% 0.004 340)",
              display: "block",
            }}>
              {name}
            </span>
          </div>

          {/* Right: tags */}
          <span className="hidden max-w-[30%] shrink-0 md:block" style={{
            fontFamily: '"Aeonik Mono", monospace',
            fontSize: "clamp(10px, 0.85vw, 13px)",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            textAlign: "right",
          }}>
            {tags}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Work Section ───────────────────────────────────────────────────────────
export function WorkSection({ className }: { className?: string }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef  = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end end"],
  });

  // Drive active project from scroll through the teaser
  useMotionValueEvent(headerProgress, "change", (v) => {
    const n = TEASER_PROJECTS.length;
    setActiveProject(Math.min(Math.floor(v * (n + 0.6)), n - 1));
  });

  // Subtle WORK scale on scroll — adds parallax depth
  const workScale = useTransform(headerProgress, [0, 0.5], [1, 1.06]);
  const workOpacity = useTransform(headerProgress, [0.82, 1], [1, 0]);

  return (
    <section className={cn(className)} style={{ backgroundColor: "#08090b", position: "relative" }}>

      {/* ── WORK hero ── */}
      <div ref={headerRef} className="h-[2000px] md:h-[3200px]" style={{ position: "relative", backgroundColor: "#08090b", zIndex: 5 }}>
        <div style={{
          position: "sticky", top: 0, height: "100vh", overflow: "hidden",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          zIndex: 10,
        }}>

          {/* Pinwheel — scroll-driven, centered at viewport bottom */}
          <ThreePinwheel />

          {/* Radial vignette so WORK text always pops over the wedges */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 55% 48% at 50% 46%, rgba(8,9,11,0.72) 0%, rgba(8,9,11,0.28) 55%, transparent 78%)",
            pointerEvents: "none", zIndex: 2,
          }} />

          {/* Top entry veil */}
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "45%",
            background: "linear-gradient(to bottom, #08090b 0%, rgba(8,9,11,0.88) 18%, rgba(8,9,11,0.45) 44%, transparent 70%)",
            pointerEvents: "none", zIndex: 3,
          }} />

          {/* Section label — centered on mobile, right-aligned on desktop */}
          <div
            className="left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[clamp(80px,8vw,120px)]"
            style={{ position: "absolute", top: 40, zIndex: 20, pointerEvents: "none" }}
          >
            <span style={{
              fontFamily: '"Aeonik Mono", monospace',
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.22)",
              textTransform: "uppercase",
              userSelect: "none",
            }}>
              Selected Work
            </span>
          </div>

          {/* WORK heading — scales gently as you scroll */}
          <motion.h2
            style={{
              fontFamily: '"VC Nudge Black", sans-serif',
              fontSize: "clamp(120px, 20vw, 280px)",
              fontWeight: 900,
              color: "oklch(99% 0.003 340)",
              textTransform: "uppercase",
              lineHeight: 1,
              margin: 0,
              userSelect: "none",
              position: "relative",
              zIndex: 4,
              scale: workScale,
              opacity: workOpacity,
              letterSpacing: "-0.02em",
            }}
          >
            WORK
          </motion.h2>

          {/* Project info — bottom-left, sits on the dark zone */}
          <ProjectInfo active={activeProject} />

          {/* Scroll hint — bottom-right */}
          <ScrollHint />

          {/* Marquee — very bottom */}
          <MarqueeStrip />
        </div>
      </div>

      {/* ── Project cards ── */}
      <div ref={cardsRef} style={{ position: "relative" }}>
        {projects.map((p, i) => (
          <ProjectBgCard
            key={p.name}
            num={p.num}
            name={p.name}
            tags={p.tags}
            bg={p.bg}
            href={p.href}
            index={i}
            total={projects.length}
          />
        ))}

        {/* Sticky mockup frame */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 50 }}>
          <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MockupFrame scrollYProgress={scrollYProgress} projectList={projects} />
          </div>
        </div>

        {/* Right-side card progress dots */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 55 }}>
          <div style={{ position: "sticky", top: 0, height: "100vh" }}>
            <CardProgress scrollYProgress={scrollYProgress} total={projects.length} />
          </div>
        </div>
      </div>

    </section>
  );
}
