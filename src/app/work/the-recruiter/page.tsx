"use client";

import { CaseStudy } from "@/components/CaseStudy";

const RECRUITER_YELLOW = "#ffd21e";

export default function TheRecruiterPage() {
  return (
    <CaseStudy
      titleLines={["THE", "RECRUITER"]}
      accent={RECRUITER_YELLOW}
      intro="HIRING OPS FOR NOON'S TALENT TEAM — EVERY APPLICANT, EVERY STAGE, ONE SCREEN."
      facts={[
        { k: "ROLE", v: "UX/UI DESIGNER" },
        { k: "CLIENT", v: "NOON — INTERNAL" },
        { k: "PLATFORM", v: "WEB · RESPONSIVE" },
        { k: "SCOPE", v: "DASHBOARD · 6 MODULES" },
        { k: "YEAR", v: "2024" },
      ]}
      cover={{
        src: "/images/recruiter-case-pipeline.jpg",
        alt: "The Recruiter dashboard — job openings, applications table with stages and buckets",
      }}
      brief={[
        "Hiring involves a lot of moving pieces, from reviewing applications and keeping track of candidates to managing different stages of the recruitment process. The Recruiter is a platform designed to bring all of that together in one place. I worked on creating an experience that makes these workflows easier to manage, with a focus on organizing information, simplifying navigation, and helping recruiters spend less time figuring out the system and more time finding the right people.",
      ]}
      chapters={[
        {
          title: "PIPELINE AT A GLANCE",
          kicker: "DASHBOARD",
          image: "/images/recruiter-case-pipeline.jpg",
          alt: "Dashboard with job opening cards showing application velocity, and the applications table",
          body: [
            "The dashboard leads with openings, not menus: each role is a card carrying its application count and weekly velocity, so a recruiter lands knowing where the fire is. Below, every applicant sits in one table — no per-role silos.",
            "Stages are a color language, not a status column: green for accepted, blue for design challenge, purple for interviews, red for rejected. Scanning a hundred rows takes seconds because the eye reads color before words.",
          ],
        },
        {
          title: "THE CUT",
          kicker: "SMART FILTERING",
          image: "/images/recruiter-case-filters.jpg",
          alt: "Filters drawer with major, GPA range, university, date range and stage sections",
          body: [
            "Screening is subtraction. The filter drawer stacks compound criteria — major, GPA range, university, application window, stage — and every applied filter becomes a chip above the table: visible, removable, and shareable as a saved view.",
            "Triage buckets finish the job. Straight from a row, a candidate lands in bucket 1, 2, or 3 — shortlist tiers the whole team shares — without ever opening a profile or leaving the list.",
          ],
        },
        {
          title: "ONE VOCABULARY",
          kicker: "COMPONENT LANGUAGE",
          image: "/images/recruiter-case-system.jpg",
          alt: "Component board: stage pills, bucket picker, filter chips, opening card, candidate row",
          body: [
            "Every element — stage pills, bucket picker, filter chips, opening cards, candidate rows — is one component with one meaning, reused across dashboard, candidate profiles, and archive. Learn the vocabulary once, read every screen.",
            "The same pieces reflow from a 27-inch monitor to a phone: the table becomes cards, the drawer becomes a sheet, and nothing changes its meaning on the way down.",
          ],
        },
      ]}
      outcome={{
        lines: (
          <>
            2,000 APPLICANTS.
            <br />
            <span style={{ color: RECRUITER_YELLOW }}>TWENTY MINUTES</span>.
            <br />
            ONE SHORTLIST.
          </>
        ),
        detail:
          "SHIPPED TO NOON'S TALENT ACQUISITION TEAM AS THEIR DAILY DRIVER — SCREENING SESSIONS THAT TOOK AFTERNOONS NOW FIT BETWEEN MEETINGS. FULL WALKTHROUGH AVAILABLE IN A CALL.",
      }}
      next={{ href: "/work/linkedin-ai-interview", label: "LINKEDIN AI INTERVIEW" }}
    />
  );
}
