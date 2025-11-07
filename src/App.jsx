import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Landing from "./pages/Landing.jsx";
import Client from "./pages/Client.jsx";
import Provider from "./pages/Provider.jsx";
import ProviderProfile from "./pages/ProviderProfile.jsx";
import Booking from "./pages/Booking.jsx";
import Agreements from "./pages/Agreements.jsx";
import Subscribe from "./pages/Subscribe.jsx";
import ProviderDashboard from "./pages/ProviderDashboard.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import JobListings from "./pages/JobListings.jsx";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

import { AuthProvider } from "./auth/AuthProvider.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

export default function App(){
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/client" element={<Client/>} />
            <Route path="/provider" element={<Provider/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/subscribe" element={<Subscribe/>} />
            <Route path="/agreements" element={<Agreements/>} />
            <Route path="/about" element={<About/>} />

            {/* Protected provider pages */}
            <Route path="/provider-profile" element={
              <ProtectedRoute><ProviderProfile/></ProtectedRoute>
            } />
            <Route path="/calendar" element={
              <ProtectedRoute><CalendarPage/></ProtectedRoute>
            } />
            <Route path="/jobs" element={
              <ProtectedRoute><JobListings/></ProtectedRoute>
            } />
            <Route path="/provider-dashboard" element={
              <ProtectedRoute><ProviderDashboard/></ProtectedRoute>
            } />

            {/* Client protected pages */}
            <Route path="/profile" element={<Booking/>} />
            <Route path="/client-dashboard" element={<ClientDashboard/>} />

            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
