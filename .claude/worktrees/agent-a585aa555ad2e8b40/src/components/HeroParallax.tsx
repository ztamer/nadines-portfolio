"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";

interface PhotoConfig {
  src: string;
  style: CSSProperties;
  factor: number;
  height: number;
}

const photos: PhotoConfig[] = [
  {
    src: "/images/sunhung-photo-7.jpg",
    style: { top: "5%", left: "2%", width: "200px" },
    factor: 0.15,
    height: 300,
  },
  {
    src: "/images/sunhung-photo-3.jpg",
    style: { top: "15%", right: "3%", width: "220px" },
    factor: -0.1,
    height: 320,
  },
  {
    src: "/images/sunhung-photo-9.jpg",
    style: { top: "40%", left: "1%", width: "200px" },
    factor: 0.2,
    height: 280,
  },
  {
    src: "/images/sunhung-photo-4.jpg",
    style: { bottom: "10%", right: "2%", width: "210px" },
    factor: -0.15,
    height: 310,
  },
  {
    src: "/images/sunhung-photo-2.jpg",
    style: { top: "25%", right: "25%", width: "180px" },
    factor: 0.08,
    height: 260,
  },
];

export function HeroParallax() {
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      photoRefs.current.forEach((el, i) => {
        if (!el) return;
        const factor = photos[i].factor;
        el.style.transform = `translateY(${scrollY * factor}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        height: "5800px",
        backgroundColor: "#08090b",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sticky container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Floating photo cards — absolutely positioned within sticky container */}
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            ref={(el) => {
              photoRefs.current[i] = el;
            }}
            style={{
              position: "absolute",
              ...photo.style,
              willChange: "transform",
            }}
          >
            {/* Photo */}
            <div
              style={{
                position: "relative",
                width: photo.style.width,
                height: `${photo.height}px`,
                overflow: "hidden",
              }}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                sizes="220px"
              />
            </div>
            {/* Pink decorative lines */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                marginTop: "6px",
              }}
            >
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#f62a99",
                  width: "100%",
                }}
              />
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#f62a99",
                  width: "100%",
                }}
              />
            </div>
          </div>
        ))}

        {/* Hero text block */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          {["HEAD OF DESIGN.", "UIUX DESIGNER.", "AND", "TEACHER.", "(BASE IN VIETNAM)"].map(
            (line) => (
              <p
                key={line}
                style={{
                  fontFamily: "'VC Nudge Black', sans-serif",
                  fontSize: "clamp(60px, 13vw, 200px)",
                  fontWeight: 900,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                {line}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
