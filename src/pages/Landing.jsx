import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();
  return (
    <div className="container">
      <div style={{ textAlign: "center", padding: "48px 0" }}>
        <h1 style={{ fontSize: 30, margin: 0 }}>
          Welcome to <span style={{ fontWeight: 700 }}>🧰1clikfix.com</span>
        </h1>
        <p style={{ color: "#666", marginTop: 8 }}>Please choose an option to continue</p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
          <button onClick={() => nav("/login")}>Sign In</button>

          <button onClick={() => nav("/client-booking")} className="secondary">Need a Service Provider?</button>

          <a href="https://1clikfixsquare.square.site/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <button>Are you a Service Provider?</button>
          </a>
        </div>

        <p style={{ color: "#999", fontSize: 13, marginTop: 18 }}>
          Providers must subscribe via Square, then create an account and profile to access calendar and jobs.
        </p>
      </div>
    </div>
  );
}
