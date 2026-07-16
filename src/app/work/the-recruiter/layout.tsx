import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Recruiter — Case Study — Nadine Shokair",
  description:
    "Hiring ops dashboard for noon's talent team: pipeline overview, compound filtering, triage buckets, and a component language built for speed.",
};

export default function TheRecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
