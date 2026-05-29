"use client";

export default function TopMutualFundsSection() {
  return (
    <section className="top-mf-section">
      {/* Aurora Background Effect */}
      <div className="aurora-wrapper">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "4rem", position: "relative", zIndex: 10 }}>
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
        </div>

        <div className="panel-body mf-panel-body">
          <div className="mf-iframe-wrapper">
            <iframe
              src="https://www.investwell.in/updation/parameter/par_mfperform_schsort.jsp?&ht=ffffff&hbg=015FAF&bt=000000&r1=dddddd&r2=f2f2f2"
              className="mf-iframe"
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
