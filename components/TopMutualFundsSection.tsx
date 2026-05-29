"use client";

export default function TopMutualFundsSection() {
  return (
    <section style={{ width: "100%", maxWidth: "1100px", margin: "8rem auto 6rem", padding: "0 2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", letterSpacing: "-0.02em" }} className="text-gradient">Top Mutual Funds</h2>
        <div className="animated-underline"></div>
        <p className="text-muted" style={{ marginTop: "1rem", fontSize: "1.1rem" }}>Explore elite performance across our curated selection of high-yield funds.</p>
      </div>

      <div className="elite-glass-panel animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="panel-header">
          <div className="window-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control expand"></span>
          </div>
          <div className="panel-title">Investwell Market Data</div>
        </div>

        <div className="panel-body" style={{ overflow: "hidden", height: "520px" }}>
          <div style={{ width: "125%", transform: "scale(0.8)", transformOrigin: "top left" }}>
            <iframe 
              src="https://www.investwell.in/updation/parameter/par_mfperform_schsort.jsp?&ht=ffffff&hbg=015FAF&bt=000000&r1=dddddd&r2=f2f2f2" 
              width="100%" 
              height="650" 
              frameBorder="0" 
              scrolling="no"
              style={{ display: "block", border: "none", backgroundColor: "transparent" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
