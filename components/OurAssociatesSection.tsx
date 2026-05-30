"use client";

const AMC_LOGOS = [
  "axis.png", "bank-of-india.jpg", "birla.png", "bnp-paribas.jpg", "canara-robeco-mf.png", 
  "dsp.png", "edelweiss-mf.png", "FranklinTempleton.png", "hdfc-logo.png", "hsbc.png", 
  "icici.png", "idbi.png", "bandhan.png", "invesco-mf.png", "iti-mf.png", "kotak.png", 
  "lic-mf.png", "mirae.png", "motilal.png", "Navi-Mutual-Fund.png", "nipponindia.png", 
  "nj-mutual-fund.png", "pgim-mf.png", "PPFAS-MF.png", "quant-mf.png", "quantum-mf.png", 
  "samco-mutual-fund.png", "sbi.png", "tata.png", "Taurus-Mutual-Fund.png", "trust.png", 
  "union-mf.png", "uti.png", "whiteoak.png"
];

export default function OurAssociatesSection() {
  // Duplicate array for seamless infinite scroll
  const logosToRender = [...AMC_LOGOS, ...AMC_LOGOS];

  return (
    <section className="associates-section" style={{ padding: "2rem 0", position: "relative" }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .associates-marquee-container {
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 1rem 0;
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .associates-marquee-track {
          display: flex;
          align-items: center;
          animation: scrollMarquee 40s linear infinite;
          width: max-content;
        }
        .associates-marquee-track:hover {
          animation-play-state: paused;
        }
        .associates-logo {
          height: 32px;
          margin-right: 2.5rem;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .associates-logo:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }
      `}} />
      <div className="container animate-fade-in">
        <div style={{ textAlign: "center", marginBottom: "2rem", position: "relative", zIndex: 10 }}>
          <h2 className="why-title text-gradient" style={{ marginBottom: "0.5rem" }}>
            Our Associates
          </h2>
          <div className="animated-underline"></div>
        </div>
        
        <div className="associates-marquee-container">
          <div className="associates-marquee-track">
            {logosToRender.map((logo, index) => (
              <img 
                key={index}
                src={`https://resources.investwellonline.com/websiteitem/amc-logos-new/${logo}`}
                alt="AMC Logo"
                className="associates-logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
