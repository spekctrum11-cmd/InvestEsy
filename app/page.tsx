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
import Ecosystem from "../components/Ecosystem";

export default function Home() {
  return (
    <main>
      <MarketTicker />
      <div className="hero-bg-wrapper landing-hero">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="landing-video-bg"
        >
          <source src="/4d85d3503886e31249fb482718f867e5.mp4" type="video/mp4" />
        </video>
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
      <Ecosystem />
    </main>
  );
}
