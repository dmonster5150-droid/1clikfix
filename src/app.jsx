import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import ClientLanding from "./pages/client/ClientLanding";
import ClientBooking from "./pages/client/ClientBooking";
import ProviderSubscribe from "./pages/provider/ProviderSubscribe";
import ProviderOnboarding from "./pages/provider/ProviderOnboarding";
import ProviderProfile from "./pages/provider/ProviderProfile";
import ProviderDashboard from "./pages/provider/ProviderDashboard";

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="container">
          <Link to="/" className="logo">🧰 1clikfix.com</Link>
          <nav>
            <Link to="/client">Clients</Link>
            <Link to="/provider-subscribe">Providers</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/client" element={<ClientLanding />} />
          <Route path="/client/book" element={<ClientBooking />} />
          <Route path="/provider-subscribe" element={<ProviderSubscribe />} />
          <Route path="/provider-onboarding" element={<ProviderOnboarding />} />
          <Route path="/provider-profile" element={<ProviderProfile />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="*" element={<div>404 — Not found</div>} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">© 1clikfixx</div>
      </footer>
    </>
  );
}
