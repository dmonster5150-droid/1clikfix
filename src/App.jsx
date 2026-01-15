import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import ClientLanding from "./pages/client/clientlanding";
import ClientBooking from "./pages/client/clientbooking";
import ProviderSubscribe from "./pages/provider/providersubscribe";
import ProviderOnboarding from "./pages/provider/provideronboarding";
import ProviderProfile from "./pages/provider/providerprofile";
import ProviderDashboard from "./pages/provider/providerdashboard";
// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ProviderOnboarding from "./pages/ProviderOnboarding";
import ProviderDashboard from "./pages/ProviderDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/provider-onboarding" element={<ProviderOnboarding />} />
      <Route path="/provider-dashboard" element={<ProviderDashboard />} />
    </Routes>
  );
}

export default App;
