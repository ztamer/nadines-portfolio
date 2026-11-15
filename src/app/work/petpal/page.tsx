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
        "Finding the right veterinary care for a pet shouldn't feel like another difficult task. PetPal is a mobile app concept that brings pet owners and veterinary services closer together. I explored how users could discover vets, browse available options, and book appointments without going through unnecessary steps. The focus was on making the experience feel simple, approachable, and easy to navigate, especially when it comes to something as important as a pet's health.",
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
