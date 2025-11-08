import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ClientProfile from "./pages/ClientProfile";
import ClientBooking from "./pages/ClientBooking";
import Agreements from "./pages/Agreements";
import ProviderProfile from "./pages/ProviderProfile";
import Subscribe from "./pages/Subscribe";
import Calendar from "./pages/Calendar";
import JobListings from "./pages/JobListings";
import ClientJobs from "./pages/ClientJobs";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
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

          <Route path="/provider-profile" element={
            <ProtectedRoute><ProviderProfile /></ProtectedRoute>
          } />

          <Route path="/subscribe" element={<ProtectedRoute><Subscribe /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
          <Route path="/jobs" element={<ProtectedRoute><JobListings /></ProtectedRoute>} />

          <Route path="/client-jobs" element={<ProtectedRoute><ClientJobs /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
