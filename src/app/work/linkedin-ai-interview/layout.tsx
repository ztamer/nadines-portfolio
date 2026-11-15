import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn AI Interview Practice — Nadine Shokair",
  description:
    "A visual preview of a LinkedIn AI interview practice experience by Nadine Shokair, from interview setup to performance feedback.",
};

export default function LinkedInAIInterviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
