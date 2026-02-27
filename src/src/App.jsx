import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Connecting Brands with Authentic Influence
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 30px" }}>
          InfluLink Partners bridges the gap between ambitious brands and
          high-impact creators to deliver measurable, performance-driven
          campaigns across Instagram, YouTube, and emerging platforms.
        </p>
        <button
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Our Services
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          We help brands connect with authentic influencers, manage campaigns,
          and drive real results through data-driven strategies.
        </p>
      </section>

    </div>
  );
}

export default App;
