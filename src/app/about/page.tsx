"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";

const expo = [0.22, 1, 0.36, 1] as const;
const BG = "#08090b";

const CAREER = [
  { year: "2024", role: "Interior Design Graduate", place: "Egypt" },
  { year: "2025", role: "Google UX Certificate + CalArts, Coursera", place: "Remote" },
  { year: "2025", role: "Product Designer — Takhzin", place: "Cairo" },
  { year: "2025", role: "Product Designer | Customer Facing Products | noon - Ecommerce", place: "Regional" },
  { year: "2026", role: "Product Designer III | Credit / Revolving Limit | Telda - Fintech", place: "Cairo" },
  { year: "NOW", role: "Open for full-time + freelance", place: "Cairo" },
];

const PROCESS = [
  {
    number: "01",
    phase: "DISCOVER",
    desc: "Before a frame opens: user interviews, competitive landscape, flow mapping. The problem understood clearly enough that the solution follows.",
  },
  {
    number: "02",
    phase: "STRUCTURE",
    desc: "Information architecture, user flows, low-fidelity wireframes. Getting the logic right before adding visual weight.",
  },
  {
    number: "03",
    phase: "CRAFT",
    desc: "High-fidelity design in Figma. Components, states, interactions. Every screen earns its place; nothing ships unclear.",
  },
  {
    number: "04",
    phase: "ITERATE",
    desc: "Usability testing, feedback cycles, developer handoff. Design is not done at handoff. It is done when it is live and working.",
  },
];

function Glow({
  top, left, right, bottom, w = 700, h = 700, color, blur = 120, opacity = 0.13,
}: {
  top?: string; left?: string; right?: string; bottom?: string;
  w?: number; h?: number; color: string; blur?: number; opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="hidden md:block"
      style={{
        position: "absolute",
        width: `${w}px`,
        height: `${h}px`,
        background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
        filter: `blur(${blur}px)`,
        top, left, right, bottom,
        pointerEvents: "none",
        opacity,
        zIndex: 0,
      }}
    />
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <LenisProvider>
      <Navbar />

      <main style={{ backgroundColor: BG, overflowX: "clip" }}>

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          style={{
            position: "relative",
            height: "100svh",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <motion.div style={{ position: "absolute", inset: 0, y: imgY }}>
            <Image
              src="/images/nadine-hero.png"
              alt="Nadine Shokair, UX/UI designer based in Cairo"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </motion.div>

          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: [
                `radial-gradient(ellipse 110% 75% at 50% 38%, transparent 0%, rgba(8,9,11,0.38) 100%)`,
                `linear-gradient(to bottom, rgba(8,9,11,0.78) 0%, rgba(8,9,11,0.0) 20%, rgba(8,9,11,0.0) 46%, rgba(8,9,11,0.96) 100%)`,
              ].join(", "),
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              textAlign: "center",
              padding: "0 clamp(24px, 5vw, 80px) clamp(48px, 9vh, 108px)",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: expo }}
              style={{
                fontFamily: "'Aeonik Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#f62a99",
                margin: "0 0 24px 0",
              }}
            >
              ABOUT
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: expo }}
              style={{
                fontFamily: "'VC Nudge Black', sans-serif",
                fontSize: "clamp(58px, 10.5vw, 158px)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.86,
                letterSpacing: "-0.03em",
                color: "oklch(97% 0.005 340)",
                margin: "0 0 40px 0",
              }}
            >
              THE<br />DESIGNER<br />BEHIND<br />THE WORK
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              style={{
                fontFamily: "'Aeonik Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              UX/UI DESIGNER&nbsp;&nbsp;&middot;&nbsp;&nbsp;CAIRO, EGYPT&nbsp;&nbsp;&middot;&nbsp;&nbsp;
              <span style={{ color: "#f62a99" }}>OPEN TO WORK</span>
            </motion.p>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "clamp(108px, 17vh, 220px) clamp(40px, 7vw, 120px) clamp(48px, 7vh, 96px)",
            textAlign: "center",
          }}
        >
          {/* Ghost portrait echo */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.055, pointerEvents: "none", zIndex: 0 }}>
            <Image src="/images/nadine-cutout.png" alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>

          {/* Atmospheric glows */}
          <Glow color="rgba(246,42,153,1)"  top="5%"   left="-5%"  w={800} h={800} opacity={0.45} blur={90} />
          <Glow color="rgba(200,70,20,1)"   bottom="5%" right="-5%" w={700} h={700} opacity={0.38} blur={80} />

          <div aria-hidden="true" style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to bottom, ${BG} 0%, transparent 14%, transparent 90%, ${BG} 100%)`,
            zIndex: 1, pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: expo }}
              viewport={{ once: true, amount: 0.15 }}
              style={{
                fontFamily: "'VC Nudge Black', sans-serif",
                fontSize: "clamp(32px, 5.5vw, 84px)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.9,
                letterSpacing: "-0.025em",
                color: "oklch(97% 0.005 340)",
                margin: "0 auto clamp(52px, 9vh, 100px)",
              }}
            >
              GOOD DESIGN SOLVES THE PROBLEM.<br />GREAT DESIGN MAKES YOU FORGET<br />THERE WAS ONE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: expo }}
              viewport={{ once: true, amount: 0 }}
              style={{
                fontFamily: "'Aeonik Mono', monospace",
                fontSize: "clamp(12px, 1.1vw, 15px)",
                lineHeight: 1.88,
                color: "rgba(255,255,255,0.48)",
                maxWidth: "72ch",
                margin: "0 auto",
              }}
            >
              I started in Interior Design. Trained eye for space, proportion, and how people inhabit
              environments. When I moved into UX, I brought that with me: designing a product flow and
              designing a room share the same core. Understand how people move, what they need at each
              moment, remove everything that interrupts that. I came up through Google UX certification,
              CalArts on Coursera, then 2+ years shipping real products at Takhzin, noon, and Telda. Academic
              rigor plus production-grade experience. That is what I bring to every brief.
            </motion.p>
          </div>
        </section>

        {/* ── CAREER PATH ── */}
        <section
          style={{
            position: "relative",
            padding: "clamp(40px, 6vh, 80px) 0 clamp(80px, 12vh, 160px)",
          }}
        >
          {/* Side glows */}
          <Glow color="rgba(246,42,153,1)" top="20%"    right="-5%"  w={700} h={700} opacity={0.40} blur={85} />
          <Glow color="rgba(246,42,153,1)" top="50%"    left="-8%"   w={600} h={600} opacity={0.32} blur={80} />
          {/* Bottom bleed — flows down into process section */}
          <Glow color="rgba(246,42,153,1)" bottom="-18%" left="calc(50% - 400px)" w={900} h={600} opacity={0.30} blur={120} />

          <div style={{ padding: "0 clamp(40px, 8vw, 120px)" }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: expo }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Aeonik Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.18)",
                margin: "0 0 40px 0",
              }}
            >
              CAREER PATH
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: expo }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'VC Nudge Black', sans-serif",
                fontSize: "clamp(58px, 9.5vw, 138px)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.87,
                letterSpacing: "-0.025em",
                color: "oklch(97% 0.005 340)",
                margin: "0 auto clamp(40px, 7vh, 80px)",
              }}
            >
              WHERE<br />I&apos;VE BEEN.
            </motion.h2>
          </div>

          {/* Timeline — full section width, edge-to-edge with horizontal padding */}
          <div style={{ padding: "0 clamp(40px, 8vw, 120px)" }}>
            {CAREER.map((step, i) => (
              <motion.div
                key={`${step.year}-${step.role}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: expo }}
                viewport={{ once: true, amount: 0 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "clamp(16px, 3vw, 48px)",
                  padding: "clamp(18px, 2.5vh, 28px) 0",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Aeonik Mono', monospace",
                    fontSize: "clamp(12px, 1.1vw, 14px)",
                    color: "#f62a99",
                    letterSpacing: "0.1em",
                    flexShrink: 0,
                    minWidth: "52px",
                  }}
                >
                  {step.year}
                </span>
                <span
                  style={{
                    fontFamily: "'VC Nudge Black', sans-serif",
                    fontSize: "clamp(21px, 2.2vw, 30px)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    color: "oklch(97% 0.005 340)",
                    flex: 1,
                    textAlign: "left",
                  }}
                >
                  {step.role}
                </span>
                <span
                  style={{
                    fontFamily: "'Aeonik Mono', monospace",
                    fontSize: "clamp(10px, 0.9vw, 12px)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.24)",
                    flexShrink: 0,
                    textAlign: "right",
                    minWidth: "52px",
                  }}
                >
                  {step.place}
                </span>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section
          style={{
            position: "relative",
            paddingTop: "clamp(80px, 12vh, 160px)",
          }}
        >
          {/* Glows on the empty sides */}
          <Glow color="rgba(246,42,153,1)" top="-14%" left="calc(50% - 420px)" w={900} h={700} opacity={0.32} blur={120} />
          <Glow color="rgba(246,42,153,1)" top="8%"   left="-5%"               w={700} h={700} opacity={0.42} blur={85} />
          <Glow color="rgba(200,70,20,1)"  top="40%"  right="-5%"              w={650} h={650} opacity={0.36} blur={80} />

          <div style={{ padding: "0 clamp(40px, 8vw, 120px)", marginBottom: "clamp(48px, 8vh, 80px)", position: "relative", zIndex: 2 }}>
            <p style={{
              fontFamily: "'Aeonik Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.18)",
              margin: "0 0 20px 0",
            }}>
              PROCESS
            </p>
            <h2 style={{
              fontFamily: "'VC Nudge Black', sans-serif",
              fontSize: "clamp(58px, 9.5vw, 138px)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.87,
              letterSpacing: "-0.025em",
              color: "oklch(97% 0.005 340)",
              margin: 0,
            }}>
              HOW I<br />WORK.
            </h2>
          </div>

          {/* Process steps — full section width */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "0 clamp(40px, 8vw, 120px) clamp(48px, 12vh, 160px)",
            }}
          >
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: expo }}
                viewport={{ once: true, amount: 0 }}
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  padding: "clamp(36px, 5vh, 60px) 0",
                  display: "grid",
                  gridTemplateColumns: "clamp(52px, 6vw, 80px) 1fr",
                  gap: "0 clamp(24px, 3vw, 48px)",
                  alignItems: "start",
                  textAlign: "left",
                }}
              >
                {/* Step number column */}
                <span
                  style={{
                    fontFamily: "'Aeonik Mono', monospace",
                    fontSize: "clamp(11px, 1vw, 14px)",
                    color: "#f62a99",
                    letterSpacing: "0.1em",
                    paddingTop: "clamp(6px, 0.8vw, 12px)",
                  }}
                >
                  {step.number}
                </span>

                {/* Content column */}
                <div>
                  <p
                    style={{
                      fontFamily: "'VC Nudge Black', sans-serif",
                      fontSize: "clamp(36px, 5.5vw, 88px)",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      lineHeight: 0.9,
                      color: "oklch(97% 0.005 340)",
                      margin: "0 0 clamp(16px, 2vh, 28px) 0",
                    }}
                  >
                    {step.phase}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Aeonik Mono', monospace",
                      fontSize: "clamp(11px, 0.95vw, 14px)",
                      lineHeight: 1.85,
                      color: "rgba(255,255,255,0.38)",
                      margin: 0,
                      maxWidth: "62ch",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
          </div>
        </section>

        {/* ── CONNECT ── */}
        <section
          className="px-10 py-20 md:px-[clamp(40px,7vw,120px)] md:py-[clamp(108px,18vh,240px)]"
          style={{
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Centered glow — two overlapping blooms */}
          <Glow color="rgba(246,42,153,1)" top="10%"  left="calc(50% - 450px)" w={900}  h={700} opacity={0.48} blur={90} />
          <Glow color="rgba(180,30,80,1)"  top="28%"  left="calc(50% - 280px)" w={560}  h={480} opacity={0.40} blur={70} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <p
              style={{
                fontFamily: "'Aeonik Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#f62a99",
                margin: "0 0 28px 0",
              }}
            >
              GET IN TOUCH
            </p>

            <motion.a
              href="mailto:nshokair@hotmail.com"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: expo }}
              viewport={{ once: true, amount: 0 }}
              style={{
                display: "block",
                fontFamily: "'VC Nudge Black', sans-serif",
                fontSize: "clamp(28px, 5.5vw, 88px)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.87,
                letterSpacing: "-0.025em",
                color: "oklch(97% 0.005 340)",
                textDecoration: "none",
                margin: "0 0 60px 0",
                transition: "color 0.18s ease-out",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#f62a99")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "oklch(97% 0.005 340)")
              }
            >
              NSHOKAIR@HOTMAIL.COM
            </motion.a>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#f62a99",
                }}
              />
              <span
                style={{
                  fontFamily: "'Aeonik Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                AVAILABLE FOR FULL-TIME & FREELANCE — CAIRO, EGYPT
              </span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </LenisProvider>
  );
}
