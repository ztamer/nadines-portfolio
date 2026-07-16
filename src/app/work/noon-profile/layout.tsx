import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noon Profile — Case Study — Nadine Shokair",
  description:
    "Account and profile management across noon web and mobile: one identity for every noon app, verified contact keys, and microcopy that earns personal data.",
};

export default function NoonProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
