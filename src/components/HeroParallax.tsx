"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

interface PhotoConfig {
  src: string;
  style: CSSProperties;
  factor: number;
  height: number;
}

const photos: PhotoConfig[] = [
  { src: "/images/sunhung-photo-7.jpg", style: { top: "5%", left: "2%", width: "200px" }, factor: 300, height: 300 },
  { src: "/images/sunhung-photo-3.jpg", style: { top: "15%", right: "3%", width: "220px" }, factor: -200, height: 320 },
  { src: "/images/sunhung-photo-9.jpg", style: { top: "40%", left: "1%", width: "200px" }, factor: 400, height: 280 },
  { src: "/images/sunhung-photo-4.jpg", style: { bottom: "10%", right: "2%", width: "210px" }, factor: -300, height: 310 },
  { src: "/images/sunhung-photo-2.jpg", style: { top: "25%", right: "25%", width: "180px" }, factor: 160, height: 260 },
];

function ParallaxPhoto({ photo, sectionRef }: { photo: PhotoConfig; sectionRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, photo.factor]);

  return (
    <motion.div
      style={{ position: "absolute", ...photo.style, willChange: "transform", y }}
    >
      <div style={{ position: "relative", width: photo.style.width, height: `${photo.height}px`, overflow: "hidden" }}>
        <Image src={photo.src} alt="" fill style={{ objectFit: "cover" }} sizes="220px" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "6px" }}>
        <div style={{ height: "3px", backgroundColor: "#f62a99", width: "100%" }} />
        <div style={{ height: "3px", backgroundColor: "#f62a99", width: "100%" }} />
      </div>
    </motion.div>
  );
}

export function HeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      style={{ height: "5800px", backgroundColor: "#08090b", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {photos.map((photo) => (
          <ParallaxPhoto key={photo.src} photo={photo} sectionRef={sectionRef} />
        ))}

        <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
          {["HEAD OF DESIGN.", "UIUX DESIGNER.", "AND", "TEACHER.", "(BASE IN VIETNAM)"].map((line) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
