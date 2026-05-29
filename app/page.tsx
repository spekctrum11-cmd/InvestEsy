import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TopMutualFundsSection from "../components/TopMutualFundsSection";
import InvestCTASection from "../components/InvestCTASection";
import FinancialCalculators from "../components/FinancialCalculators";
import WhyInvestEsy from "../components/WhyInvestEsy";

export default function Home() {
  return (
    <main>
      <div className="hero-bg-wrapper">
        <Navbar />
        <HeroSection />
      </div>
      <TopMutualFundsSection />
      <InvestCTASection />
      <FinancialCalculators />
      <WhyInvestEsy />
      <div style={{ height: "4rem" }}></div>
    </main>
  );
}
