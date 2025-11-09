import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import ClientProfile from "./pages/ClientProfile.jsx";
import ClientBooking from "./pages/ClientBooking.jsx";
import Agreements from "./pages/Agreements.jsx";
import ClientJobs from "./pages/ClientJobs.jsx";

import ProviderProfile from "./pages/ProviderProfile.jsx";
import Subscribe from "./pages/Subscribe.jsx";
import Calendar from "./pages/Calendar.jsx";
import JobListings from "./pages/JobListings.jsx";

import ProtectedRoute from "./auth/ProtectedRoute.jsx";

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/client-profile" element={<ClientProfile />} />
          <Route path="/client-booking" element={<ClientBooking />} />
          <Route path="/agreements" element={<Agreements />} />
          <Route path="/client-jobs" element={<ClientJobs />} />

          <Route path="/provider-profile" element={<ProtectedRoute><ProviderProfile /></ProtectedRoute>} />
          <Route path="/subscribe" element={<ProtectedRoute><Subscribe /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
          <Route path="/jobs" element={<ProtectedRoute><JobListings /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
