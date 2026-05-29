import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TopMutualFundsSection from "../components/TopMutualFundsSection";
import InvestCTASection from "../components/InvestCTASection";
import FinancialCalculators from "../components/FinancialCalculators";

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
      <div style={{ height: "4rem" }}></div>
    </main>
  );
}
