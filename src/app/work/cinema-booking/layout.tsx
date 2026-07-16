import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cinema Booking Case Study — Nadine Shokair",
  description:
    "A web and mobile cinema discovery, seat selection, and digital ticket concept by Nadine Shokair.",
};

export default function CinemaBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
