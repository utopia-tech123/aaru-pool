import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import MascotSection from "@/components/MascotSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import FAQSection from "@/components/FAQSection";
import SubscribeSection from "@/components/SubscribeSection";
import FooterSection from "@/components/FooterSection";
import { NileWave } from "@/components/EgyptianDecor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <NileWave variant="gold" />
      <ProblemSection />
      <NileWave variant="subtle" flip />
      <SolutionSection />
      <NileWave variant="emerald" />
      <FeaturesSection />
      <MascotSection />
      <NileWave variant="gold" flip />
      <TokenomicsSection />
      <NileWave variant="subtle" />
      <RoadmapSection />
      <NileWave variant="emerald" flip />
      <FAQSection />
      <NileWave variant="gold" />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
};

export default Index;

