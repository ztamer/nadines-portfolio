import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Nadine Shokair, UX/UI Designer",
  description:
    "Selected projects by Nadine Shokair: visual case studies, a LinkedIn AI interview practice concept, and product design work for noon, Telda, Takhzin, and freelance clients.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
