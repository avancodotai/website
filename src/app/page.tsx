import { CTASection } from "@/components/cta";
import { FAQSection } from "@/components/faq";
import { FeaturesSection } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works";
import { RoadmapSection } from "@/components/roadmap";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <RoadmapSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
