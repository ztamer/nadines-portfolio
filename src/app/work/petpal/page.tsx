"use client";

import { CaseStudy } from "@/components/CaseStudy";

const PETPAL_TEAL = "#31b8c6";

export default function PetPalPage() {
  return (
    <CaseStudy
      titleLines={["PETPAL"]}
      accent={PETPAL_TEAL}
      intro="VET CARE WITHOUT THE PHONE CALLS: FIND, BOOK, AND CONFIRM IN UNDER A MINUTE."
      facts={[
        { k: "ROLE", v: "PRODUCT DESIGNER" },
        { k: "PROJECT", v: "PERSONAL CONCEPT" },
        { k: "PLATFORM", v: "iOS · ANDROID" },
        { k: "SCOPE", v: "DISCOVERY · BOOKING" },
        { k: "YEAR", v: "2025" },
      ]}
      cover={{
        src: "/images/mockup-petpal.jpg",
        alt: "PetPal vet list, vet profile, and appointment time screens",
      }}
      brief={[
        "Finding a vet is usually a chain of phone calls: ask whether the clinic treats your pet, ask when the doctor is free, then repeat the same details to book. In a stressful moment, the owner is doing the coordination the service should have done.",
        "PetPal turns that call tree into one calm mobile path. The concept brings specialties, ratings, distance, live availability, pet details, and price into the same flow, so the decision and the appointment happen together.",
      ]}
      chapters={[
        {
          title: "FIND THE HUMAN",
          kicker: "DISCOVERY & TRUST",
          image: "/images/petpal-case-discovery.jpg",
          alt: "PetPal vet search results and a detailed vet profile",
          body: [
            "Search starts with the questions owners actually have: who is highly rated, who handles emergencies, and who is nearby. Compact result rows expose specialty, rating, distance, and a direct booking action without making the owner open four profiles first.",
            "The profile then earns the tap. Experience, specialties, reviews, location, availability, and contact options sit in one scan, with the appointment action held in the thumb zone. Trust is visible before commitment.",
          ],
        },
        {
          title: "FOUR TAPS TO BOOKED",
          kicker: "DATE · TIME · PET · CONFIRM",
          image: "/images/petpal-case-booking.jpg",
          alt: "PetPal appointment time selection and confirmation screens",
          body: [
            "The booking flow asks only what changes the appointment: day, time, and pet. Available slots stay in a single grid, the selection is repeated in plain language, and the pet record removes another form from the process.",
            "Confirmation behaves like a receipt before payment. Doctor, clinic, address, instructions, pet, and price are gathered in one card, making the final action feel informed instead of irreversible.",
          ],
        },
      ]}
      outcome={{
        lines: (
          <>
            ONE MINUTE.
            <br />
            <span style={{ color: PETPAL_TEAL }}>ONE APPOINTMENT.</span>
            <br />
            ZERO HOLD MUSIC.
          </>
        ),
        detail:
          "A COMPLETE DISCOVERY-TO-CONFIRMATION CONCEPT BUILT AROUND STRESSFUL, TIME-SENSITIVE PET CARE. THE FLOW REDUCES THE WORK TO WHAT THE OWNER KNOWS AND LETS THE PRODUCT HANDLE THE COORDINATION.",
      }}
      next={{ href: "/work/vertex", label: "VERTEX" }}
    />
  );
}
