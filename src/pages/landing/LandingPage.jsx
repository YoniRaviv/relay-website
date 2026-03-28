import { Footer } from "../../components/layout/Footer";
import { Shell } from "../../components/layout/Shell";
import {
  ctaContent,
  featureCards,
  governanceContent,
  heroContent,
  platformIntro,
  showcaseContent,
  summaryContent,
  workflowContent,
} from "../../content/landing";
import { CtaSection } from "./sections/CtaSection";
import { GovernanceSection } from "./sections/GovernanceSection";
import { HeroSection } from "./sections/HeroSection";
import { PlatformSection } from "./sections/PlatformSection";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import { SummarySection } from "./sections/SummarySection";
import { WorkflowSection } from "./sections/WorkflowSection";

export function LandingPage() {
  return (
    <Shell currentPath="/">
      <main>
        <HeroSection content={heroContent} />
        <PlatformSection intro={platformIntro} cards={featureCards} />
        <WorkflowSection content={workflowContent} />
        <ShowcaseSection content={showcaseContent} />
        <SummarySection content={summaryContent} />
        <GovernanceSection content={governanceContent} />
        <CtaSection content={ctaContent} />
      </main>
      <Footer />
    </Shell>
  );
}
