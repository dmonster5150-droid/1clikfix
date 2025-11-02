import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Landing from "./pages/Landing.jsx";
import Client from "./pages/Client.jsx";
import Provider from "./pages/Provider.jsx";
import Login from "./pages/Login.jsx";
import ProfileForm from "./pages/ProfileForm.jsx";
import BookingForm from "./pages/BookingForm.jsx";
import Disclosure from "./pages/Disclosure.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProviderDashboard from "./pages/ProviderDashboard.jsx";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import Subscribe from "./pages/Subscribe.jsx";

import "./styles/tailwind.css";
import { AuthProvider } from "./auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="client" element={<Client />} />
            <Route path="provider" element={<Provider />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<ProfileForm />} />
            <Route path="booking" element={<BookingForm />} />
            <Route path="disclosure" element={<Disclosure />} />
            <Route path="about" element={<About />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="provider-dashboard" element={<ProviderDashboard />} />
            <Route path="client-dashboard" element={<ClientDashboard />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
