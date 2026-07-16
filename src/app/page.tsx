import { Navbar } from "@/components/Navbar";
import { NadineHero } from "@/components/NadineHero";
import { StorySection } from "@/components/StorySection";
import { BioSection } from "@/components/BioSection";
import { WorkSection } from "@/components/WorkSection";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <div style={{ position: "relative", zIndex: 1 }}>
          <NadineHero />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <StorySection />
        </div>
        <div style={{ position: "relative", zIndex: 3 }}>
          <BioSection />
        </div>
        <div style={{ position: "relative", zIndex: 4 }}>
          <WorkSection />
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <StatsSection />
        </div>
        <div style={{ position: "relative", zIndex: 6 }}>
          <Footer />
        </div>
      </main>
    </LenisProvider>
  );
}
