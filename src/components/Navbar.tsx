"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DotsGridIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const expo = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
  { label: "CONTACT", href: "mailto:nshokair@hotmail.com" },
];

const SOCIAL_LINKS = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/nadineshokair/" },
];

interface NavbarProps {
  className?: string;
  light?: boolean;
}

export function Navbar({ className, light }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion() ?? false;
  const fg = light ? "oklch(8% 0.005 250)" : "white";

  const isActive = (href: string) => {
    if (!href.startsWith("/")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Lock body scroll while the menu is open + close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-50 flex items-center justify-between",
          className
        )}
        style={{
          height: "80px",
          paddingLeft: "28px",
          paddingRight: "28px",
          background: "transparent",
        }}
      >
        {/* Left: Name logo */}
        <Link
          href="/"
          aria-label="Nadine Shokair — home"
          style={{
            fontFamily: '"VC Nudge Black", sans-serif',
            fontWeight: 900,
            fontSize: "18px",
            color: fg,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          <div>NADINE</div>
          <div>SHOKAIR</div>
        </Link>

        {/* Right: Dots grid menu icon */}
        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center transition-transform duration-300 ease-out hover:rotate-90"
          style={{
            color: fg,
            width: "40px",
            height: "40px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <DotsGridIcon style={{ width: "20px", height: "20px" }} />
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduced ? 0.15 : 0.65, ease: expo }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{
              backgroundColor: "#0a0a0a",
              backgroundImage: "radial-gradient(circle, #2a2a2a 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          >
            {/* Close button */}
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-7 flex items-center justify-center text-white transition-transform duration-300 ease-out hover:rotate-90"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "28px",
                lineHeight: 1,
                padding: "4px",
              }}
            >
              ×
            </button>

            {/* Centered nav links — staggered rise */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.div
                    initial={reduced ? { opacity: 0 } : { y: "110%" }}
                    animate={reduced ? { opacity: 1 } : { y: "0%" }}
                    exit={reduced ? { opacity: 0 } : { y: "110%" }}
                    transition={{
                      duration: reduced ? 0.15 : 0.7,
                      delay: reduced ? 0 : 0.18 + i * 0.06,
                      ease: expo,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group relative block"
                      style={{
                        fontFamily: '"VC Nudge Black", sans-serif',
                        fontWeight: 900,
                        fontSize: "clamp(52px, 10vw, 120px)",
                        lineHeight: 0.9,
                        letterSpacing: "-0.02em",
                        textTransform: "uppercase",
                        color: isActive(link.href) ? "#555" : "#fff",
                        textDecoration: "none",
                        transition: "color 0.25s ease-out",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(link.href))
                          (e.currentTarget as HTMLElement).style.color = "#f62a99";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(link.href))
                          (e.currentTarget as HTMLElement).style.color = "#fff";
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: reduced ? 0 : 0.45 }}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between"
              style={{ padding: "28px 32px 32px" }}
            >
              <span
                style={{
                  fontFamily: '"Aeonik Mono", monospace',
                  fontSize: "13px",
                  color: "#666",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                ©2026 ALL RIGHTS RESERVED
              </span>

              <div className="flex gap-6">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-[#f62a99]"
                    style={{
                      fontFamily: '"Aeonik Mono", monospace',
                      fontSize: "13px",
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
