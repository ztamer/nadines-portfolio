"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/components/icons";

const PINK = "#f62a99";

const navLinks = [
  { label: "Homepage", href: "/" },
  { label: "About",    href: "/about" },
  { label: "Works",    href: "/work" },
  { label: "Contact",  href: "mailto:nshokair@hotmail.com" },
];

const socialLinks = [
  { icon: LinkedInIcon,  href: "https://www.linkedin.com/in/nadineshokair/",  label: "LinkedIn"  },
];

// ── Giant name — silver chrome with brand-pink streaks ─────────────────────

const NAME_GRADIENT = `linear-gradient(
  148deg,
  #6a6d75 0%,
  #c3c6cd 9%,
  #f4f5f7 15%,
  #cdd0d6 21%,
  #f62a99 27%,
  #63666e 31%,
  #e6e8ec 39%,
  #ffffff 45%,
  #b2b5bd 53%,
  #f62a99 61%,
  #9fa2aa 67%,
  #f0f1f4 73%,
  #7d8088 81%,
  #ffc2e2 87%,
  #c3c6cd 93%,
  #4d5057 100%
)`;

function GradientName() {
  return (
    <div
      aria-hidden="true"
      className="select-none overflow-hidden"
      style={{ paddingTop: 8, pointerEvents: "none" }}
    >
      {["NADINE", "SHOKAIR"].map((word) => (
        <div
          key={word}
          style={{
            fontFamily: '"VC Nudge Black", sans-serif',
            fontWeight: 900,
            fontSize: "22vw",
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
            lineHeight: 0.82,
            background: NAME_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "block",
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
}

// ── Live Cairo clock ────────────────────────────────────────────────────────

function CairoClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Cairo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
          style={{ backgroundColor: PINK }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: PINK }}
        />
      </span>
      CAIRO {time ?? "--:--"}
    </span>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#08090b",
          position: "relative",
        }}
      >
        {/* ── Main area — stacks on mobile ── */}
        <div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-[1fr_auto]">
          {/* Left — CTA */}
          <div className="px-7 py-12 md:px-10 md:pb-14">
            <h2
              style={{
                fontFamily: '"VC Nudge Black", sans-serif',
                fontWeight: 900,
                fontSize: "clamp(44px, 7.5vw, 108px)",
                color: "white",
                textTransform: "uppercase",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                margin: "0 0 28px 0",
              }}
            >
              START SOMETHING
              <br />
              GREAT TOGETHER
            </h2>
            <a
              href="mailto:nshokair@hotmail.com"
              className="group inline-flex items-center gap-3 transition-colors duration-200"
              style={{
                fontFamily: '"Aeonik Mono", monospace',
                fontSize: "clamp(14px, 1.4vw, 18px)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: PINK,
                textDecoration: "none",
              }}
            >
              NSHOKAIR@HOTMAIL.COM
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>

          {/* Right — nav + socials */}
          <div className="border-t border-white/15 px-7 py-10 md:px-10 lg:min-w-[340px] lg:border-t-0 lg:border-l lg:py-12 lg:pr-12">
            <nav>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between"
                  style={{
                    padding: "13px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    textDecoration: "none",
                  }}
                >
                  <span
                    className="transition-colors duration-200 group-hover:text-[#f62a99]"
                    style={{
                      fontFamily: '"Aeonik Mono", monospace',
                      fontSize: "14px",
                      color: "white",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="transition-colors duration-200 group-hover:bg-[#f62a99]"
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* Social row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: '"Aeonik Mono", monospace',
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginRight: "4px",
                }}
              >
                Follow
              </span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors duration-200 hover:text-[#f62a99]"
                  style={{ color: "rgba(255,255,255,0.7)", display: "flex" }}
                >
                  <Icon width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Giant name — move your cursor to light it up ── */}
        <GradientName />

        {/* ── Bottom bar ── */}
        <div
          className={cn(
            "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          )}
          style={{
            padding: "14px 28px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontFamily: '"Aeonik Mono", monospace',
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <span>Designed by Nadine · All rights reserved</span>
          <CairoClock />
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="group inline-flex w-fit items-center gap-2.5 transition-colors duration-200 hover:text-[#f62a99]"
            style={{
              fontFamily: '"Aeonik Mono", monospace',
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.55)",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            BACK TO TOP
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-[#f62a99] group-hover:bg-[#f62a99] group-hover:text-[#08090b]"
            >
              ↑
            </span>
          </button>
        </div>
      </section>

      {/* Hot-pink bottom stripe */}
      <div style={{ height: 6, width: "100%", backgroundColor: PINK }} />
    </>
  );
}
