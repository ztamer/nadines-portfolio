import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noon Supermall — Case Study — Nadine Shokair",
  description:
    "Noon's everything-store redesigned end to end: onboarding, discovery, retention loops, and a seasonal campaign system across 40+ screens.",
};

export default function NoonSupermallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
