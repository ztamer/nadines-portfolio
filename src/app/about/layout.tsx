import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nadine Shokair, UX/UI Designer",
  description:
    "Nadine Shokair is a UX/UI designer based in Cairo, Egypt. Former Interior Design graduate turned product designer, with experience at Takhzin and Noon.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
