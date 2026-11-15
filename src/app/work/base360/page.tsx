import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Base360 Website & Landing Page — Nadine Shokair",
  description: "Visual direction, content structure, and page layouts for the Base360 website and landing page.",
};

export default function Base360Page() {
  return (
    <CaseStudy
      titleLines={["BASE360"]}
      accent="#caff00"
      intro="WEBSITE & LANDING PAGE"
      facts={[
        { k: "ROLE", v: "WEB DESIGN" },
        { k: "PLATFORM", v: "WEB" },
        { k: "FOCUS", v: "VISUAL DIRECTION · CONTENT STRUCTURE" },
      ]}
      cover={{
        src: "/images/mockup-base360.jpg",
        alt: "Base360’s landing page hero on a laptop with the headline Turn conversations into customers",
        preserveArtwork: true,
      }}
      brief={[
        "Every brand needs a digital presence that communicates what it does and gives people a reason to explore further. For Base360, I worked on creating a website and landing page that bring the brand's identity and offering together. I focused on the overall visual direction, content structure, and page layouts, making sure the experience feels cohesive while keeping the information clear and easy to follow.",
      ]}
      chapters={[
        {
          title: "FROM COMMENT TO CUSTOMER",
          kicker: "CONTENT STRUCTURE · CUSTOMER JOURNEY",
          image: "/images/base360-case-journey.jpg",
          alt: "Base360 website section showing a timeline from a social comment to a customer record",
          preserveArtwork: true,
          body: [],
        },
        {
          title: "HANDLE THE ROUTINE",
          kicker: "PAGE LAYOUT · PRODUCT EXPLANATION",
          image: "/images/base360-case-workflow.jpg",
          alt: "Website section explaining which tasks Base360 handles and when the team steps in",
          preserveArtwork: true,
          body: [],
        },
        {
          title: "CONTROL WITHOUT MICROMANAGING",
          kicker: "VISUAL DIRECTION · PRODUCT DETAILS",
          image: "/images/base360-case-controls.jpg",
          alt: "Base360 website section pairing control settings with an example customer profile",
          preserveArtwork: true,
          body: [],
        },
      ]}
      next={{ href: "/work/cinema-booking", label: "CINEMA BOOKING" }}
    />
  );
}
