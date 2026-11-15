"use client";

import { CaseStudy } from "@/components/CaseStudy";

const VERTEX_SILVER = "#b7c8ce";

export default function VertexPage() {
  return (
    <CaseStudy
      titleLines={["VERTEX"]}
      accent={VERTEX_SILVER}
      intro="A PROP-TRADING LANDING PAGE THAT PUTS THE OFFER, PROOF, AND NEXT ACTION IN ONE FRAME."
      facts={[
        { k: "ROLE", v: "UX/UI DESIGNER" },
        { k: "CLIENT", v: "VERTEX" },
        { k: "PLATFORM", v: "WEB · RESPONSIVE" },
        { k: "SCOPE", v: "ACQUISITION · PRODUCT" },
        { k: "YEAR", v: "2025" },
      ]}
      cover={{
        src: "/images/mockup-vertex-landing.jpg",
        alt: "Vertex landing page with funded account offer and trading benefits",
      }}
      brief={[
        "For Vertex, the challenge was to create a website that introduces a prop trading firm in a way that feels clear, professional, and trustworthy. I focused on translating the brand into a digital experience, organizing the content so visitors can quickly understand what the firm offers, and creating a visual direction that supports its credibility. The goal was to make the website informative without making it feel overwhelming.",
      ]}
      chapters={[
        {
          title: "FUNDED ACCOUNTS. ONE CLICK.",
          kicker: "ACQUISITION LANDING PAGE",
          image: "/images/vertex-case-landing.jpg",
          alt: "Full Vertex landing page with funded accounts headline and calls to action",
          body: [
            "The central headline carries the whole proposition, while the supporting sentence explains capital access, AI risk management, and zero-hassle funding without competing for attention.",
            "Open App and Discover More create a clean decision pair. The darker primary route feels product-led; the white secondary route gives cautious visitors a lower-commitment way to continue.",
          ],
        },
        {
          title: "THE OFFER IN FRAME",
          kicker: "BENEFITS & TRUST",
          image: "/images/vertex-case-landing-detail.jpg",
          alt: "Closer view of the Vertex hero, benefit points, navigation, and actions",
          body: [
            "Profit split, account size, guaranteed payout, and the no-time-limit promise sit at the edges of the hero like a compact evidence layer. Each message stays short enough to scan without weakening the central statement.",
            "A dark navigation capsule, protection status, account entry point, scroll cue, and horizon indicator make the screen feel like the opening frame of a larger product rather than a static campaign page.",
          ],
        },
      ]}
      outcome={{
        lines: (
          <>
            THE OFFER
            <br />
            IS <span style={{ color: VERTEX_SILVER }}>VISIBLE.</span>
            <br />
            SO IS THE PATH.
          </>
        ),
        detail:
          "THE LANDING PAGE HOLDS THE PROMISE, PROOF, AND NEXT ACTION IN A SINGLE COMPOSITION. THE RESULT FEELS PREMIUM, DIRECT, AND EASY TO UNDERSTAND BEFORE A TRADER MOVES DEEPER INTO THE PRODUCT.",
      }}
      next={{ href: "/work/base360", label: "BASE360" }}
    />
  );
}
