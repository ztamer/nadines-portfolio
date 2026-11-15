"use client";

import { CaseStudy } from "@/components/CaseStudy";

const PROJECTOR_YELLOW = "#f6c944";

export default function CinemaBookingPage() {
  return (
    <CaseStudy
      titleLines={["CINEMA", "BOOKING"]}
      accent={PROJECTOR_YELLOW}
      intro="FROM THE FIRST TRAILER TO THE FINAL QR CODE, ONE CONTINUOUS NIGHT OUT."
      facts={[
        { k: "ROLE", v: "PRODUCT DESIGNER" },
        { k: "PROJECT", v: "PERSONAL CONCEPT" },
        { k: "PLATFORM", v: "MOBILE · IOS" },
        { k: "SCOPE", v: "DISCOVERY · BOOKING" },
        { k: "YEAR", v: "2025" },
      ]}
      cover={{
        src: "/images/mockup-cinema-booking-real.jpg",
        alt: "Cinema booking app showing a movie, date, time, and reservation action",
      }}
      brief={[
        "Going to the cinema should be about enjoying the movie, not struggling to book a ticket. This app concept explores a simpler way to discover movies, check showtimes, choose seats, and book tickets all in one place. I focused on connecting these steps into a smooth journey, making it easy for users to find what they want and complete their booking without unnecessary complications.",
      ]}
      chapters={[
        {
          title: "MOVIE TO SHOWTIME",
          kicker: "DISCOVERY · DATE · TIME",
          image: "/images/cinema-booking-case-movie.jpg",
          alt: "Movie detail screen with date, time, and reservation controls",
          body: [
            "The movie artwork, synopsis, date options, and showtimes share one screen, turning discovery directly into a reservation decision. The selected date and time glow in gold while alternatives remain available without leaving the film.",
            "The hierarchy follows the user's real questions in order: what is playing, when can I go, and how do I reserve it? One clear action closes the screen and moves the booking forward.",
          ],
        },
        {
          title: "CHOOSE YOUR SEATS",
          kicker: "SELECTION · SUMMARY · BUY",
          image: "/images/cinema-booking-case-seats.jpg",
          alt: "Cinema seat-selection screen with availability, selected seats, total, and buy action",
          body: [
            "The seat map keeps the screen direction, available seats, reserved seats, and the current selection visible at once. Gold marks the chosen pair while the legend removes ambiguity before payment.",
            "Date, time, VIP section, seat numbers, and total stay attached to the Buy action. The user can verify the entire order without opening another summary screen.",
          ],
        },
        {
          title: "TICKET IN HAND",
          kicker: "CONFIRMATION · BARCODE · ENTRY",
          image: "/images/cinema-booking-case-ticket-real.jpg",
          alt: "Mobile cinema ticket with film details, seat numbers, and barcode",
          body: [
            "After purchase, the booking becomes a mobile ticket with the film, date, time, row, seats, and barcode in one glance. The essential information stays readable while the movie artwork keeps the confirmation connected to the experience.",
            "The ticket sits inside the app's main navigation, ready to reopen at the cinema door. A single scannable object replaces receipts, booking references, and the need to reconstruct the journey.",
          ],
        },
      ]}
      outcome={{
        lines: (
          <>
            TRAILER TO
            <br />
            <span style={{ color: PROJECTOR_YELLOW }}>TICKET</span>,
            <br />
            WITHOUT LOSING THE NIGHT.
          </>
        ),
        detail:
          "A MOBILE BOOKING CONCEPT THAT KEEPS EVERY CHOICE IN CONTEXT, THEN TURNS THE CONFIRMATION INTO A CLEAR, SCANNABLE PIECE OF THE CINEMA EXPERIENCE.",
      }}
      next={{ href: "/work/noon-supermall", label: "NOON SUPERMALL" }}
    />
  );
}
