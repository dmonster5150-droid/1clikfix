import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import ClientLanding from "./pages/client/clientlanding";
import ClientBooking from "./pages/client/clientbooking";
import ProviderSubscribe from "./pages/provider/providersubscribe";
import ProviderOnboarding from "./pages/provider/provideronboarding";
import ProviderProfile from "./pages/provider/providerprofile";
import ProviderDashboard from "./pages/provider/providerdashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/client" element={<ClientLanding />} />
      <Route path="/client/booking" element={<ClientBooking />} />
      <Route path="/provider/subscribe" element={<ProviderSubscribe />} />
      <Route path="/provider/onboarding" element={<ProviderOnboarding />} />
      <Route path="/provider/profile" element={<ProviderProfile />} />
      <Route path="/provider/dashboard" element={<ProviderDashboard />} />
    </Routes>
  );
}

export default App;
