import MarketTicker from "../components/MarketTicker";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TopMutualFundsSection from "../components/TopMutualFundsSection";
import InvestCTASection from "../components/InvestCTASection";
import FinancialCalculators from "../components/FinancialCalculators";
import WhyInvestEsy from "../components/WhyInvestEsy";
import AppDownloadSection from "../components/AppDownloadSection";
import OurAssociatesSection from "../components/OurAssociatesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <main>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />
        <HeroSection />
      </div>
      <TopMutualFundsSection />
      <InvestCTASection />
      <FinancialCalculators />
      <WhyInvestEsy />
      <AppDownloadSection />
      <OurAssociatesSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
