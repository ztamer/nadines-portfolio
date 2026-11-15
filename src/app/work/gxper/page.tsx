import type { Metadata } from "next";
import { CaseStudy, type CaseChapter } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "GXPER Sports Platform — Nadine Shokair",
  description: "Product design for GXPER, a sports platform with connected web and mobile experiences.",
};

const chapters: CaseChapter[] = [
  {
    title: "THE TOURNAMENT JOURNEY",
    kicker: "WEB · DISCOVERY",
    image: "/images/gxper-case-web-journey.jpg",
    alt: "Desktop tournament journey with four steps, starting with choosing the game",
    body: [],
  },
  {
    title: "THE JOURNEY ON MOBILE",
    kicker: "MOBILE · DISCOVERY",
    image: "/images/gxper-case-mobile-journey.jpg",
    alt: "Phone showing the same four tournament steps in a mobile layout",
    body: [],
  },
  {
    title: "REQUEST A TOURNAMENT",
    kicker: "WEB · ORGANIZER FLOW",
    image: "/images/gxper-case-web-request.jpg",
    alt: "Desktop tournament request form with game, participant count, and location fields",
    body: [],
  },
  {
    title: "PLAYERS AND ORGANIZERS",
    kicker: "MOBILE · PROFILE AND REQUEST",
    image: "/images/gxper-case-mobile-request.jpg",
    alt: "Two phones showing GXPER’s player profile preview and tournament request form",
    body: [],
  },
  {
    title: "CHOOSE A LOCATION",
    kicker: "WEB · MAP SELECTION",
    image: "/images/gxper-case-web-location.jpg",
    alt: "Laptop showing a tournament location picker with a map and confirmation button",
    body: [],
  },
  {
    title: "PIN YOUR ARENA",
    kicker: "MOBILE · MAP SELECTION",
    image: "/images/gxper-case-mobile-location.jpg",
    alt: "Phone showing the location picker with a selected city and a Confirm pin button",
    body: [],
  },
  {
    title: "REQUEST RECEIVED",
    kicker: "MOBILE · CONFIRMATION",
    image: "/images/gxper-case-confirmation.jpg",
    alt: "Phone showing a tournament request confirmation and explaining what happens next",
    body: [],
  },
];

export default function GxperPage() {
  return (
    <CaseStudy
      titleLines={["GXPER"]}
      accent="#ffef00"
      intro="SPORTS PLATFORM: WEB & MOBILE"
      facts={[
        { k: "ROLE", v: "PRODUCT DESIGN" },
        { k: "PLATFORMS", v: "WEB · MOBILE" },
        { k: "FOCUS", v: "CROSS-PLATFORM USER JOURNEYS" },
      ]}
      cover={{
        src: "/images/mockup-gxper.jpg",
        alt: "GXPER sports platform homepage with a championship trophy on the laptop screen",
        preserveArtwork: true,
      }}
      brief={[
        "GXPER is a sports-focused digital platform with experiences across web and mobile. I worked on designing both platforms, thinking about how users interact with each one and how the overall experience could feel connected. The focus was on building clear user journeys, making information easy to navigate, and creating a consistent experience across different devices while respecting the needs of each platform.",
      ]}
      chapters={chapters.map((chapter) => ({ ...chapter, preserveArtwork: true }))}
      next={{ href: "/work/noon-profile", label: "NOON PROFILE" }}
    />
  );
}
