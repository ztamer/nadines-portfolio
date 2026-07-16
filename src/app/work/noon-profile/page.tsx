"use client";

import { CaseStudy } from "@/components/CaseStudy";

const NOON_YELLOW = "#ffef00";

export default function NoonProfilePage() {
  return (
    <CaseStudy
      titleLines={["NOON", "PROFILE"]}
      accent={NOON_YELLOW}
      intro="ACCOUNT & PROFILE MANAGEMENT ACROSS NOON WEB AND MOBILE — ONE IDENTITY, EVERY NOON APP. LIVE IN PRODUCTION."
      facts={[
        { k: "ROLE", v: "UX/UI DESIGNER" },
        { k: "CLIENT", v: "NOON — DUBAI" },
        { k: "PLATFORM", v: "WEB · iOS · ANDROID" },
        { k: "SCOPE", v: "PROFILE & IDENTITY" },
        { k: "STATUS", v: "LIVE · 2024" },
      ]}
      cover={{
        src: "/images/mockup-noon-profile.jpg",
        alt: "Noon account profile on web and the mobile profile screen",
      }}
      brief={[
        "A noon profile isn't one app's settings page — it's the identity behind Supermall, Food, Minutes, and every login in between. Change your phone number here and it changes everywhere; get it wrong and the user is locked out of an ecosystem.",
        "The brief: make identity editing feel effortless without ever feeling casual — clear about what a field is used for, honest about what can't be undone, and consistent from a 27-inch browser to a phone in one hand.",
      ]}
      chapters={[
        {
          title: "THE ACCOUNT HUB",
          kicker: "WEB",
          image: "/images/profile-case-hub.jpg",
          alt: "Web My Account page with sidebar navigation, contact and personal information cards",
          body: [
            "On web, profile lives inside one account hub: a single sidebar covering orders, payments, credits, and identity, so nothing hides behind a second menu. The active area is a pair of calm cards — contact information and personal information — with inline pencil edits instead of a fragile everything-at-once form.",
            "The update button stays disabled until something actually changes, the email field is locked where it's managed by login, and the phone number carries a note explaining its real weight: it signs you into every noon app.",
          ],
        },
        {
          title: "POCKET IDENTITY",
          kicker: "MOBILE",
          image: "/images/profile-case-mobile.jpg",
          alt: "Mobile profile and preferences screens with gender pills, toggles and dietary chips",
          body: [
            "Mobile isn't the web page squeezed down — it's the same identity rebuilt from native patterns. Fields become tappable rows, gender becomes thumb-sized pills, and preferences get their own screen with switches instead of dropdowns.",
            "Every screen keeps the same reading order as web, so a user who edits on desktop finds nothing rearranged in their pocket. Save stays pinned, disabled until a change is made — the same honesty at every size.",
          ],
        },
        {
          title: "SMALL DECISIONS",
          kicker: "MICROCOPY & COMPONENTS",
          image: "/images/profile-case-details.jpg",
          alt: "Component details: gender segment, tourist toggle, dietary chips, verified phone, immutable birthday, upsell card",
          body: [
            "Profile forms live or die on detail. The birthday field says \"you cannot change this later\" before you commit, then earns the data with a birthday-offers promise. The tourist question explains itself — helps personalise your offers — because unexplained questions get dishonest answers.",
            "A verified badge marks the phone as a login key, dietary chips make a sensitive preference feel optional, and the noon-one upsell sits in a dismissible slot instead of a modal. Every component is shared between web and app: one vocabulary, one identity.",
          ],
        },
      ]}
      outcome={{
        lines: (
          <>
            EDITED ONCE,
            <br />
            <span style={{ color: NOON_YELLOW }}>TRUSTED EVERYWHERE</span> —
            <br />
            AND LIVE TODAY.
          </>
        ),
        detail:
          "SHIPPED IN PRODUCTION ACROSS NOON'S WEB AND MOBILE APPS — MILLIONS OF PROFILES, ONE IDENTITY LAYER, ZERO GUESSWORK ABOUT WHAT A FIELD DOES. FULL WALKTHROUGH AVAILABLE IN A CALL.",
      }}
      next={{ href: "/work/petpal", label: "PETPAL" }}
    />
  );
}
