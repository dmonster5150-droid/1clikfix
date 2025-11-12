import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ClientPortal from "./pages/ClientPortal";
import ProviderPortal from "./pages/ProviderPortal";
import Subscribe from "./pages/Subscribe";
import Profile from "./pages/ClientPortal"; // ClientPortal includes links to profile/jobform
import ProviderDashboard from "./components/ProviderDashboard";
import ClientDashboard from "./components/ClientDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Disclosures from "./pages/Disclosures";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<ClientPortal />} />
          <Route path="/provider" element={<ProviderPortal />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/disclosures" element={<Disclosures />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route
            path="/provider-dashboard"
            element={
              <ProtectedRoute>
                <ProviderDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/client-dashboard"
            element={
              <ProtectedRoute clientOnly={true}>
                <ClientDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
