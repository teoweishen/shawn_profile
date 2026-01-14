export default function Profile() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 920, margin: "40px auto", padding: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 36 }}>Shawn Teo</h1>
          <p style={{ margin: "8px 0 0", fontSize: 16, opacity: 0.8 }}>
            Technology/Operations Consultant • (Product Owner) • Kuala Lumpur
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="mailto:you@email.com" style={btnStyle}>Email</a>
          <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer" style={btnStyle}>LinkedIn</a>
          <a href="https://calendly.com/your-link" target="_blank" rel="noreferrer" style={btnStyle}>Book a call</a>
        </div>
      </header>

      <section style={{ marginTop: 28 }}>
        <h2 style={h2}>What I do</h2>
        <p style={{ lineHeight: 1.6 }}>
          I help <b>(target clients)</b> achieve <b>(outcome)</b> by doing <b>(your service)</b>.
          Previously: <b>(notable companies/projects)</b>.
        </p>
      </section>

      <section style={{ marginTop: 22 }}>
        <h2 style={h2}>Services</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li><b>Consulting package A</b> — 2–4 weeks, deliverables: (…)</li>
          <li><b>Consulting package B</b> — workshop + roadmap: (…)</li>
          <li><b>Advisory / Retainer</b> — monthly support: (…)</li>
        </ul>
      </section>

      <section style={{ marginTop: 22 }}>
        <h2 style={h2}>Proof / Case studies</h2>
        <div style={card}>
          <b>Case Study 1:</b> Problem → Approach → Result (numbers if possible)
        </div>
        <div style={{ ...card, marginTop: 12 }}>
          <b>Case Study 2:</b> Problem → Approach → Result
        </div>
      </section>

      <section style={{ marginTop: 22 }}>
        <h2 style={h2}>Tech / Tools</h2>
        <p style={{ lineHeight: 1.6 }}>
          React • Node • (your tools) • (your domain expertise)
        </p>
      </section>

      <footer style={{ marginTop: 32, paddingTop: 16, borderTop: "1px solid #eee", opacity: 0.8 }}>
        <small>© {new Date().getFullYear()} Your Name • Built with React</small>
      </footer>
    </main>
  );
}

const btnStyle = {
  display: "inline-block",
  padding: "10px 14px",
  border: "1px solid #111",
  borderRadius: 10,
  textDecoration: "none",
  color: "#111",
  fontWeight: 600
};

const h2 = { margin: "0 0 10px", fontSize: 20 };

const card = {
  border: "1px solid #eee",
  borderRadius: 14,
  padding: 14
};
