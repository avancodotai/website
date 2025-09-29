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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-rose-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoadmapSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
