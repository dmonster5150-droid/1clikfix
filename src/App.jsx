// src/App.jsx
import React from "react";
import { Routes, } from "react-router-dom";

import Landing from "./pages/Landing";
import ProviderOnboarding from "./pages/ProviderOnboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/provider-dashboard" element={<ProviderDashboard />} />
    </Routes>
  );
}

export default App;
