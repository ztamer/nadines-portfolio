import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertex Case Study — Nadine Shokair",
  description:
    "Vertex is a prop-trading acquisition site and funded trader room designed by Nadine Shokair.",
};

export default function VertexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
