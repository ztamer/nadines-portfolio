import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PetPal Case Study — Nadine Shokair",
  description:
    "PetPal is a mobile vet discovery and appointment-booking concept designed by Nadine Shokair.",
};

export default function PetPalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
