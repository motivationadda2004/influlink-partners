import React from "react";

function App() {
  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#111" }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        position: "sticky",
        top: 0,
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        zIndex: 1000
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src="/logo.png" 
            alt="InfluLink Partners Logo" 
            style={{ height: "36px" }} 
          />
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            InfluLink Partners
          </span>
        </div>

        <div style={{ fontWeight: "500", cursor: "pointer" }}>
          Contact
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        textAlign: "center",
        padding: "120px 20px",
        background: "linear-gradient(135deg, #f5f7ff, #e8ecff)"
      }}>
        <h1 style={{ fontSize: "52px", maxWidth: "900px", margin: "0 auto 20px" }}>
          Bridge the Gap Between <span style={{ color: "#4f46e5" }}>Brands</span> and Influence
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "650px", margin: "0 auto 30px", color: "#555" }}>
          We connect ambitious brands with high-impact creators to deliver
          measurable, performance-driven campaigns across digital platforms.
        </p>

        <button
          onClick={scrollToServices}
          style={{
            padding: "14px 28px",
            fontSize: "16px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(79,70,229,0.3)"
          }}
        >
          Get Started
        </button>
      </section>

      {/* STATS SECTION */}
      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "60px",
        padding: "60px 20px",
        background: "white",
        flexWrap: "wrap"
      }}>
        {[
          { number: "500+", label: "Creators" },
          { number: "2,800+", label: "Campaigns Launched" },
          { number: "$80M+", label: "Revenue Generated" }
        ].map((stat, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "36px", color: "#4f46e5" }}>{stat.number}</h2>
            <p style={{ color: "#555" }}>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "100px 20px",
        background: "#f9fafc",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Our Services
        </h2>

        <p style={{ maxWidth: "600px", margin: "0 auto 60px", color: "#555" }}>
          End-to-end influencer marketing solutions designed to scale your brand.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>
          {[
            "Influencer Campaign Management",
            "Brand-Influencer Matchmaking",
            "Performance Analytics & Reporting"
          ].map((service, index) => (
            <div key={index} style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              width: "280px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{ marginBottom: "10px" }}>{service}</h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                Strategic execution designed for measurable growth and ROI.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #4f46e5, #6366f1)",
        color: "white"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Ready to Scale Your Brand?
        </h2>

        <button style={{
          padding: "14px 28px",
          fontSize: "16px",
          backgroundColor: "white",
          color: "#4f46e5",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Book a Strategy Call
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px",
        textAlign: "center",
        background: "#111",
        color: "#aaa"
      }}>
        © 2026 InfluLink Partners. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
