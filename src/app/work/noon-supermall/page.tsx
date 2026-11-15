"use client";

import { CaseStudy } from "@/components/CaseStudy";

const NOON_YELLOW = "#ffef00";

export default function NoonSupermallPage() {
  return (
    <CaseStudy
      titleLines={["NOON", "SUPERMALL"]}
      accent={NOON_YELLOW}
      intro="NOON'S EVERYTHING-STORE, REDESIGNED END TO END — GROCERIES TO GADGETS IN UNDER TWO HOURS, ACROSS 40+ SCREENS."
      facts={[
        { k: "ROLE", v: "UX/UI DESIGNER" },
        { k: "CLIENT", v: "NOON — DUBAI" },
        { k: "PLATFORM", v: "iOS · ANDROID" },
        { k: "SCOPE", v: "40+ SCREENS" },
        { k: "YEAR", v: "2025" },
      ]}
      cover={{
        src: "/images/mockup-noon-supermall.jpg",
        alt: "Noon Supermall app — home, BESTDEALS and Ramadan screens",
      }}
      brief={[
        "Supermall is where Noon brings together a huge variety of products and shopping experiences. I worked on redesigning its homepage, looking at how users discover products, navigate between categories, and interact with promotions. The challenge was to make the experience easier to explore while also giving products and campaigns the visibility they need. I focused on creating a clearer structure, improving content hierarchy, and making the homepage feel more engaging without overwhelming users.",
      ]}
      chapters={[
        {
          title: "FIRST RUN",
          kicker: "ONBOARDING",
          image: "/images/noon-case-onb3.jpg",
          alt: "Three onboarding screens: 100% authentic products, 2X refund guarantee, fast and reliable delivery",
          body: [
            "Supermall sells everything — which means the first thirty seconds have to answer one question: why buy here instead of anywhere else? The onboarding makes three promises before the first tap: every item is verified authentic, a non-authentic product gets refunded at 2X, and delivery lands in under two hours.",
            "Each promise gets its own screen, its own color world, and one custom illustration. No feature tour, no permissions wall — trust first, interface later.",
          ],
        },
        {
          title: "THE EVERYDAY LOOP",
          kicker: "HOME · DISCOVERY · RETENTION",
          image: "/images/noon-case-commerce.jpg",
          alt: "Home screens showing the authenticity guarantee banner, Buy Again row, and trending products",
          body: [
            "The home screen is built around a delivery promise, not a product grid: the ETA and address sit above everything, in noon's yellow. Below it, the surface reorders itself around habit — a Buy Again row for repeat purchases, category tiles that expose depth (+159 more) without burying it, and edge-cropped carousels that keep a thumb scrolling.",
            "The authenticity guarantee returns as a home banner, turning a one-time onboarding promise into a persistent reason to stay. Every module is a slot in the layout system — merchandising can rearrange the page without a single new design file.",
          ],
        },
        {
          title: "SEASONS & SALES",
          kicker: "CAMPAIGN SYSTEM",
          image: "/images/noon-case-campaigns.jpg",
          alt: "BESTDEALS sale takeover and Ramadan campaign screens",
          body: [
            "Gulf e-commerce lives on moments — BESTDEALS weeks, White Friday, Ramadan. Instead of redesigning the home page for every campaign, the page takes themed skins: one template with swappable art direction, from electric-blue sale takeovers to a gold-on-brown Ramadan world with its own category shelf.",
            "Product cards, prices, and the nav never move. The theatre changes; the muscle memory doesn't.",
          ],
        },
      ]}
      outcome={{
        lines: (
          <>
            ONE SPINE,
            <br />
            <span style={{ color: NOON_YELLOW }}>EVERY SEASON</span>,
            <br />
            ZERO REDESIGNS.
          </>
        ),
        detail:
          "SHIPPED AS A COMPONENT LIBRARY THE NOON TEAM STILL BUILDS ON — CAMPAIGN SKINS, MODULE SLOTS, AND A HOME PAGE THAT RE-MERCHANDISES ITSELF WITHOUT A DESIGNER IN THE LOOP. FULL WALKTHROUGH AVAILABLE IN A CALL.",
      }}
      next={{ href: "/work/bosta", label: "BOSTA" }}
    />
  );
}
