"use client";

import { CaseStudy } from "@/components/CaseStudy";

export default function LinkedInAIInterviewPage() {
  return (
    <CaseStudy
      titleLines={["LINKEDIN", "AI INTERVIEW", "PRACTICE"]}
      accent="#0a66c2"
      intro="AI INTERVIEW PRACTICE EXPERIENCE FOR LINKEDIN."
      facts={[
        { k: "ROLE", v: "PRODUCT DESIGN" },
        { k: "PROJECT", v: "LINKEDIN CONCEPT" },
        { k: "PLATFORM", v: "MOBILE" },
        { k: "FOCUS", v: "AI INTERVIEW PRACTICE" },
        { k: "STATUS", v: "VISUAL PREVIEW" },
      ]}
      cover={{
        src: "/images/mockup-linkedin-ai-interview.jpg",
        alt: "LinkedIn AI interview practice video call on a phone against a dark textured background",
        preserveArtwork: true,
      }}
      brief={[
        "Interview preparation can be stressful, especially when you don't always have someone to practice with or get feedback from. This independent concept explores how LinkedIn could use AI to make that process easier. I explored an experience where users can practice interview questions, receive personalized feedback, and understand where they can improve. The idea was to make AI feel less like a chatbot and more like a helpful practice partner that makes preparing for interviews a little less intimidating.",
      ]}
      chapters={[
        {
          title: "PRACTICE FROM THE JOB",
          kicker: "JOB DETAILS · ENTRY POINT",
          image: "/images/linkedin-ai-interview-case-job.jpg",
          alt: "LinkedIn job details with a Practice Interview button",
          preserveArtwork: true,
          body: [],
        },
        {
          title: "MAKE IT YOURS",
          kicker: "ROLE · FORMAT · DURATION",
          image: "/images/linkedin-ai-interview-case-setup.jpg",
          alt: "Hands holding a phone with interview customization for job role, video or voice, interview type, and duration",
          preserveArtwork: true,
          body: [],
        },
        {
          title: "THE INTERVIEW REPORT",
          kicker: "PRACTICE · PERFORMANCE · FEEDBACK",
          image: "/images/linkedin-ai-interview-case-report.jpg",
          alt: "Two phone mockups showing the practice interview introduction and a performance report with a radar chart and feedback scores",
          preserveArtwork: true,
          body: [],
        },
      ]}
      next={{ href: "/work/gxper", label: "GXPER" }}
    />
  );
}
