import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Nadine Shokair, UX/UI Designer",
  description:
    "Selected projects by Nadine Shokair: visual case studies plus product design work for Noon, Takhzin, and freelance clients.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
