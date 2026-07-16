"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function BioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [bgOpacity, setBgOpacity] = useState(0.3);
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollIntoSection = Math.max(0, window.scrollY - sectionTop);
      const sectionHeight = section.offsetHeight;
      // Normalize 0..1 over the first 40% of section scroll
      const progress = Math.min(1, scrollIntoSection / (sectionHeight * 0.4));
      // Map 0.3 -> 0.7
      setBgOpacity(0.3 + progress * 0.4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "3500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transition: "opacity 0.3s ease",
          opacity: bgOpacity,
        }}
      >
        <Image
          src="/images/sunhung-photo-1.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Sticky text block */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          paddingLeft: "clamp(40px, 6vw, 80px)",
          paddingRight: "clamp(40px, 6vw, 80px)",
        }}
      >
        {/* Bio text */}
        <p
          style={{
            fontFamily: "'VC Nudge Black', sans-serif",
            fontSize: "clamp(20px, 3vw, 42px)",
            fontWeight: 900,
            color: "rgba(255, 255, 255, 0.9)",
            textTransform: "uppercase",
            lineHeight: 1.15,
            letterSpacing: "0.03em",
            textAlign: "center",
            maxWidth: "900px",
            margin: 0,
          }}
        >
          SUN HUNG IS AN AWARD-WINNING UIUX DESIGNER{" "}
          <span style={{ display: "inline" }}>🤟</span> BASED IN SAIGON,
          VIETNAM, WHO BUILDS BADASS WEBSITES FOR{" "}
          <span style={{ color: "#f62a99" }}>AMBITIOUS BRANDS</span> AND IS
          PASSIONATE ABOUT CREATING{" "}
          <span style={{ color: "#f62a99" }}>IMMERSIVE VISUAL EXPERIENCES</span>
          .
        </p>

        {/* EXPLORE NOW button */}
        <button
          onMouseEnter={() => setIsHoveringBtn(true)}
          onMouseLeave={() => setIsHoveringBtn(false)}
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 24px",
            border: "1.5px solid #f62a99",
            borderRadius: "8px",
            color: "#ffffff",
            backgroundColor: isHoveringBtn ? "#f62a99" : "transparent",
            fontFamily: "'Aeonik Mono', monospace",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
            outline: "none",
          }}
        >
          {/* Dotted square with arrow icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="4"
              stroke="#f62a99"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <path
              d="M10 22 L22 10 M22 10 H14 M22 10 V18"
              stroke="#f62a99"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          EXPLORE NOW
        </button>
      </div>
    </section>
  );
}
