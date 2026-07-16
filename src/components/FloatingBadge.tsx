"use client";

import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  className?: string;
}

export function FloatingBadge({ className }: FloatingBadgeProps) {
  return (
    <div
      className={cn("fixed z-40 flex flex-col", className)}
      style={{
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      {/* Top part — "W." on hot pink */}
      <div
        style={{
          backgroundColor: "rgb(246, 42, 153)",
          padding: "8px 12px",
          color: "white",
          fontFamily: '"Aeonik Mono", monospace',
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        W.
      </div>

      {/* Bottom part — "Honors" on teal, rotated vertical */}
      <div
        style={{
          backgroundColor: "rgb(154, 219, 210)",
          padding: "8px 10px 40px 10px",
          color: "white",
          fontFamily: '"Aeonik Mono", monospace',
          fontSize: "10px",
          letterSpacing: "0.1em",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        Honors
      </div>
    </div>
  );
}
