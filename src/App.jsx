// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import ProviderOnboarding from "./pages/provider/provideronboarding";
import ProviderDashboard from "./pages/providerdashboard";
import ProviderSubscribe from "./pages/provider/providersubscribe";
import Subscribe from "./pages/subscribe";
import ClientLanding from "./pages/client/clientlanding";
import ClientBooking from "./pages/client/clientbooking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/provider-onboarding" element={<ProviderOnboarding />} />
      <Route path="/provider-dashboard" element={<ProviderDashboard />} />
      <Route path="/provider-subscribe" element={<ProviderSubscribe />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/client" element={<ClientLanding />} />
      <Route path="/client/book" element={<ClientBooking />} />
    </Routes>
  );
}

export default App;
