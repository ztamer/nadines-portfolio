"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IntroSectionProps {
  className?: string;
}

const ROLES = [
  "UIUX DESIGNER",
  "HEAD OF DESIGN",
  "COACHING/TEACHER",
  "DESIGN CONSULTANT",
  "EX-HEAD OF FACULTY",
];

const CYCLING_TITLES = ["UIUX DESIGNER", "WEBSITE DESIGNER"];

const EXPERTISE = [
  "WEBSITE DESIGN",
  "UIUX DESIGN",
  "DESIGN SYSTEM",
  "BRANDING DESIGN",
  "TEACHING/TRAINING",
];

const MARQUEE_TEXT = "RISE & SHINE  •  RISE & SHINE  •  RISE & SHINE  •  RISE & SHINE  •  RISE & SHINE  •  RISE & SHINE  •  ";

export function IntroSection({ className }: IntroSectionProps) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % CYCLING_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={cn("relative overflow-hidden", className)}
      style={{ width: "100vw", minHeight: "100vh", backgroundColor: "rgb(246, 42, 153)" }}
    >
      {/* Column grid overlay */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", pointerEvents: "none", zIndex: 0 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ borderRight: "1px solid rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Main centered content */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center", width: "100%",
          paddingLeft: "40px", paddingRight: "40px",
          zIndex: 1,
        }}
      >
        {/* Cycling title — AnimatePresence */}
        <div style={{ position: "relative", height: "clamp(40px, 6vw, 80px)", marginBottom: "16px", overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={CYCLING_TITLES[titleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
                fontFamily: '"VC Nudge Black", sans-serif',
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 900,
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                margin: 0,
              }}
            >
              {CYCLING_TITLES[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", maxWidth: "480px", margin: "0 auto 24px auto", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />

        {/* WHAT I DO */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ fontFamily: '"Aeonik Mono", monospace', fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "10px" }}
        >
          WHAT I DO
        </motion.p>

        {/* Role list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "20px" }}>
          {ROLES.map((role, i) => (
            <motion.p
              key={role}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
              style={{ fontFamily: '"Aeonik Mono", monospace', fontSize: "11px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.15em", margin: 0 }}
            >
              {role}
            </motion.p>
          ))}
        </div>

        {/* Progress quote */}
        <p style={{ fontFamily: '"Aeonik Mono", monospace', fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
          PROGRESS ISN&#39;T A GOAL / IT&#39;S A CONSTANT
        </p>

        {/* EXPERTISE */}
        <p style={{ fontFamily: '"Aeonik Mono", monospace', fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px" }}>
          EXPERTISE
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 16px" }}>
          {EXPERTISE.map((skill, i) => (
            <span key={skill} style={{ fontFamily: '"Aeonik Mono", monospace', fontSize: "11px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              {skill}
              {i < EXPERTISE.length - 1 && <span style={{ color: "rgba(255,255,255,0.35)", marginLeft: "16px" }}>/</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom marquee transition zone */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
          background: "linear-gradient(to bottom, rgb(246,42,153) 0%, rgb(8,9,11) 100%)",
          overflow: "hidden", display: "flex", alignItems: "center", zIndex: 2,
        }}
      >
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee-left 12s linear infinite", willChange: "transform" }}>
          {[0, 1].map((n) => (
            <span
              key={n}
              style={{ fontFamily: '"VC Nudge Black", sans-serif', fontSize: "clamp(60px, 8vw, 100px)", fontWeight: 900, color: "white", paddingRight: "40px", lineHeight: 1 }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
