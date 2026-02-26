// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import ProviderOnboarding from "./pages/provider/provideronboarding";
import ProviderDashboard from "./pages/providerdashboard";

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
