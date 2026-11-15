import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Bosta Consumer App — Nadine Shokair",
  description: "Product design for Bosta’s consumer app, with a focus on the Send Package experience.",
};

export default function BostaPage() {
  return (
    <CaseStudy
      titleLines={["BOSTA"]}
      accent="#e00019"
      intro="CONSUMER APP: TRACK, SEND & SHOP"
      facts={[
        { k: "ROLE", v: "PRODUCT DESIGN" },
        { k: "PLATFORM", v: "MOBILE" },
        { k: "FOCUS", v: "SEND PACKAGE" },
      ]}
      cover={{
        src: "/images/mockup-bosta.jpg",
        alt: "Bosta home screen with shortcuts to track deliveries, send packages, and shop local brands",
        preserveArtwork: true,
      }}
      brief={[
        "Bosta brings different delivery services into one app, from tracking packages to sending shipments and discovering shopping opportunities. I worked on the Send Package experience, focusing on making the process as simple and straightforward as possible. From understanding what information users need to provide to organizing each step of the journey, the goal was to remove unnecessary friction and make sending a package feel effortless.",
      ]}
      chapters={[
        {
          title: "WELCOME TO BOSTA",
          kicker: "TRACK · SEND · SHOP",
          image: "/images/bosta-case-welcome.jpg",
          alt: "Welcome screen introducing delivery tracking, package sending, and shopping from local brands",
          preserveArtwork: true,
          body: [],
        },
        {
          title: "PACKAGE IN TRANSIT",
          kicker: "TRACKING · DELIVERY PROGRESS",
          image: "/images/bosta-case-in-transit.jpg",
          alt: "In-transit package view with a progress timeline and a shortcut to send a package",
          preserveArtwork: true,
          body: [],
        },
        {
          title: "ARRIVING TODAY",
          kicker: "ETA · DELIVERY OPTIONS",
          image: "/images/bosta-case-arriving.jpg",
          alt: "Out-for-delivery screen with an estimated arrival time, live map, and rescheduling option",
          preserveArtwork: true,
          body: [],
        },
      ]}
      next={{ href: "/work/the-recruiter", label: "THE RECRUITER" }}
    />
  );
}
