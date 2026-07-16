"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+=?|<>{}";

const SKILLS = [
  { number: "01", name: "UX RESEARCH",       descriptor: "Discovery, interviews, usability testing" },
  { number: "02", name: "INTERACTION DESIGN", descriptor: "Flows, states, micro-interactions"        },
  { number: "03", name: "DESIGN SYSTEMS",     descriptor: "Tokens, components, documentation"        },
  { number: "04", name: "VISUAL DESIGN",      descriptor: "Typography, color, composition"           },
  { number: "05", name: "PROTOTYPING",        descriptor: "High-fidelity, interactive, testable"     },
  { number: "06", name: "ACCESSIBILITY",      descriptor: "WCAG compliance, inclusive patterns"      },
];

// Timing constants
const L_DELAY     = 42;   // stagger between letters on scroll-in
const S_DELAY     = 160;  // stagger between skills on scroll-in
const SCRAM_DUR   = 500;  // how long each letter scrambles before snapping
const H_L_DELAY   = 28;   // stagger between letters on hover
const H_SCRAM_DUR = 400;  // how long hover scramble lasts
const MAG_BASE    = 26;   // base magnetic repulsion (px)
const MAG_RADIUS  = 92;   // repulsion field radius (px)

const expo = [0.22, 1, 0.36, 1] as const;

function rnd() { return CHARSET[Math.floor(Math.random() * CHARSET.length)]; }

export function BioSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[][]>(
    SKILLS.map(s => new Array(s.name.length).fill(null) as (HTMLSpanElement | null)[])
  );
  const cursorRefs = useRef<(HTMLSpanElement | null)[]>(
    new Array(SKILLS.length).fill(null) as (HTMLSpanElement | null)[]
  );

  const mouseRef = useRef({ x: -9999, y: -9999 });
  const velRef   = useRef(0);
  const prevM    = useRef({ x: -9999, y: -9999, t: 0 });

  const stateRef = useRef({
    decodeStart:    null as number | null,
    decodeComplete: false,
    hover:          null as { si: number; t0: number } | null,
  });

  const rafRef = useRef<number>(0);

  // Flash a letter pink on resolve, then fade to white
  const flash = (el: HTMLSpanElement, ch: string) => {
    el.textContent = ch;
    el.style.color = "#f62a99";
    setTimeout(() => { el.style.color = ""; }, 55);
  };

  useEffect(() => {
    // Pre-scramble all non-space letters immediately
    SKILLS.forEach((skill, si) =>
      skill.name.split("").forEach((ch, li) => {
        const el = letterRefs.current[si]?.[li];
        if (el && ch !== " ") el.textContent = rnd();
      })
    );

    // Trigger decode when section enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stateRef.current.decodeStart === null)
          stateRef.current.decodeStart = performance.now();
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // ── Unified RAF loop ─────────────────────────────────────────────────
    const tick = (time: number) => {
      const s  = stateRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // 1 ── Scroll-in decode ──────────────────────────────────────────────
      if (s.decodeStart !== null && !s.decodeComplete) {
        const elapsed = time - s.decodeStart;
        let allDone = true;

        SKILLS.forEach((skill, si) => {
          skill.name.split("").forEach((ch, li) => {
            if (ch === " ") return;
            const el = letterRefs.current[si]?.[li];
            if (!el) return;
            const lEnd = si * S_DELAY + li * L_DELAY + SCRAM_DUR;
            if (elapsed < lEnd) { el.textContent = rnd(); allDone = false; }
            else if (el.textContent !== ch) flash(el, ch);
          });

          // Terminal cursor: blink while this row is decoding
          const cur = cursorRefs.current[si];
          if (cur) {
            const rowStart = si * S_DELAY;
            const rowEnd   = si * S_DELAY + (skill.name.length - 1) * L_DELAY + SCRAM_DUR;
            const active   = elapsed > rowStart && elapsed < rowEnd;
            cur.style.opacity = active && Math.floor(elapsed / 530) % 2 === 0 ? "1" : "0";
          }
        });

        if (allDone) s.decodeComplete = true;
      }

      // 2 ── Hover re-scramble ─────────────────────────────────────────────
      if (s.hover !== null) {
        if (s.hover.t0 < 0) s.hover.t0 = time; // stamp on first frame (rAF clock)
        const { si, t0 } = s.hover;
        const elapsed = time - t0;
        const skill   = SKILLS[si];
        let rowDone = true;

        skill.name.split("").forEach((ch, li) => {
          if (ch === " ") return;
          const el  = letterRefs.current[si]?.[li];
          if (!el) return;
          const lEnd = li * H_L_DELAY + H_SCRAM_DUR;
          if (elapsed < lEnd) { el.textContent = rnd(); rowDone = false; }
          else if (el.textContent !== ch) flash(el, ch);
        });

        // Cursor blink while hover row decodes
        const cur = cursorRefs.current[si];
        if (cur) cur.style.opacity = !rowDone && Math.floor(elapsed / 530) % 2 === 0 ? "1" : "0";

        if (rowDone) s.hover = null;
      }

      // 3 ── Magnetic repulsion (velocity-scaled) ─────────────────────────
      if (mx !== -9999 && sectionRef.current) {
        const sRect = sectionRef.current.getBoundingClientRect();
        const force = MAG_BASE * (1 + velRef.current * 5);

        SKILLS.forEach((skill, si) => {
          skill.name.split("").forEach((ch, li) => {
            if (ch === " ") return;
            const el = letterRefs.current[si]?.[li];
            if (!el) return;
            const r  = el.getBoundingClientRect();
            const cx = r.left + r.width  / 2 - sRect.left;
            const cy = r.top  + r.height / 2 - sRect.top;
            const dx = mx - cx;
            const dy = my - cy;
            const d  = Math.sqrt(dx * dx + dy * dy);

            if (d < MAG_RADIUS && d > 0) {
              const f = (1 - d / MAG_RADIUS) * force;
              const a = Math.atan2(dy, dx);
              el.style.transform = `translate(${(-Math.cos(a)*f).toFixed(1)}px,${(-Math.sin(a)*f).toFixed(1)}px)`;
            } else {
              el.style.transform = "";
            }
          });
        });
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { observer.disconnect(); cancelAnimationFrame(rafRef.current); };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = performance.now();
    const dt  = now - prevM.current.t;
    if (dt > 0 && dt < 100) {
      const speed = Math.sqrt((x - prevM.current.x) ** 2 + (y - prevM.current.y) ** 2) / dt;
      velRef.current = Math.min(speed, 2.5);
    }
    prevM.current   = { x, y, t: now };
    mouseRef.current = { x, y };
  };

  const handleSectionLeave = () => {
    mouseRef.current = { x: -9999, y: -9999 };
    velRef.current   = 0;
    SKILLS.forEach((skill, si) =>
      skill.name.split("").forEach((_, li) => {
        const el = letterRefs.current[si]?.[li];
        if (el) el.style.transform = "";
      })
    );
    setHovered(null);
  };

  const handleRowEnter = (si: number) => {
    // Instantly resolve the previous row if mid-scramble
    const prev = stateRef.current.hover;
    if (prev && prev.si !== si) {
      SKILLS[prev.si].name.split("").forEach((ch, li) => {
        const el = letterRefs.current[prev.si]?.[li];
        if (el && ch !== " ") el.textContent = ch;
      });
      const prevCur = cursorRefs.current[prev.si];
      if (prevCur) prevCur.style.opacity = "0";
    }
    stateRef.current.hover = { si, t0: -1 };
    setHovered(si);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleSectionLeave}
      className="md:min-h-screen"
      style={{
        backgroundColor: "#08090b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "clamp(56px, 9vh, 96px)",
        paddingBottom: "clamp(48px, 8vh, 80px)",
        position: "relative",
        userSelect: "none",
        cursor: "default",
      }}
    >
      {/* Label */}
      <p style={{
        fontFamily: "'Aeonik Mono', monospace",
        fontSize: "13px", letterSpacing: "0.3em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.15)",
        margin: "0 0 40px",
        paddingLeft: "clamp(32px, 8vw, 120px)",
      }}>
        CAPABILITIES
      </p>

      {/* Skill rows */}
      <div
        onMouseLeave={() => setHovered(null)}
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {SKILLS.map((skill, si) => (
          <motion.div
            key={skill.number}
            onMouseEnter={() => handleRowEnter(si)}
            animate={{ opacity: hovered === null ? 1 : hovered === si ? 1 : 0.08 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              display: "flex", alignItems: "center",
              paddingLeft: "clamp(32px, 8vw, 120px)",
              paddingRight: "clamp(32px, 8vw, 120px)",
              paddingTop: "22px", paddingBottom: "22px",
              position: "relative",
            }}
          >
            {/* Number */}
            <span style={{
              fontFamily: "'Aeonik Mono', monospace",
              fontSize: "13px", color: "#f62a99",
              letterSpacing: "0.2em", width: "60px",
              flexShrink: 0, display: "block",
            }}>
              {skill.number}
            </span>

            {/* Letters + terminal cursor */}
            <div style={{ flex: 1 }} aria-label={skill.name}>
              {skill.name.split("").map((ch, li) => (
                <span
                  key={li}
                  ref={el => { if (el) letterRefs.current[si][li] = el; }}
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    fontFamily: "'VC Nudge Black', sans-serif",
                    fontSize: "clamp(26px, 3.6vw, 58px)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: "#ffffff",
                    letterSpacing: "0em",
                    lineHeight: 1,
                    willChange: "transform",
                    transition: "transform 0.14s ease-out, color 0.4s ease-out",
                  }}
                >
                  {ch === " " ? " " : ch}
                </span>
              ))}
              {/* Blinking terminal cursor ▌ */}
              <span
                ref={el => { if (el) cursorRefs.current[si] = el; }}
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  fontFamily: "'Aeonik Mono', monospace",
                  fontSize: "clamp(22px, 3vw, 50px)",
                  color: "#f62a99",
                  lineHeight: 1,
                  opacity: 0,
                  marginLeft: "3px",
                  verticalAlign: "middle",
                }}
              >
                ▌
              </span>
            </div>

            {/* Descriptor slides in on hover */}
            <AnimatePresence>
              {hovered === si && (
                <motion.span
                  key="desc"
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.28, ease: expo }}
                  style={{
                    fontFamily: "'Aeonik Mono', monospace",
                    fontSize: "13px", letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.36)",
                    whiteSpace: "nowrap", marginLeft: "32px",
                  }}
                >
                  {skill.descriptor}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Pink rule sweeps left → right on hover */}
            <div style={{
              position: "absolute", bottom: 0,
              left: "clamp(32px, 8vw, 120px)",
              right: "clamp(32px, 8vw, 120px)",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.06)",
            }}>
              <motion.div
                animate={{ scaleX: hovered === si ? 1 : 0 }}
                transition={{ duration: 0.42, ease: expo }}
                style={{
                  height: "100%", backgroundColor: "#f62a99",
                  transformOrigin: "left center",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Availability */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        paddingLeft: "clamp(32px, 8vw, 120px)",
        marginTop: "44px",
      }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#f62a99" }} />
        <span style={{
          fontFamily: "'Aeonik Mono', monospace",
          fontSize: "13px", letterSpacing: "0.2em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.22)",
        }}>
          AVAILABLE FOR FULL-TIME & FREELANCE
        </span>
      </div>
    </section>
  );
}
