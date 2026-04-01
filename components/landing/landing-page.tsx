import { LandingFeatures } from "./landing-features";
import { LandingFooter } from "./landing-footer";
import { LandingHero } from "./landing-hero";
import { LandingHowItWorks } from "./landing-how-it-works";
import { LandingNav } from "./landing-nav";
import { LandingShowcase } from "./landing-showcase";
import { LandingCta } from "./landing-cta";
import { LandingLogos } from "./landing-logos";

export function LandingPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--landing-bg)" }}
    >
      <LandingNav />
      <main>
        <LandingHero />
        <LandingLogos />
        <LandingFeatures />
        <LandingShowcase />
        <LandingHowItWorks />
        <LandingCta />
      </main>
      <LandingFooter />
    </div>
  );
}
