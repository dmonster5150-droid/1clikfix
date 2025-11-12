import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ClientPortal from "./pages/ClientPortal";
import ProviderPortal from "./pages/ProviderPortal";
import ProfileCreation from "./pages/ProfileCreation";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-red-600">🧰 1clikfix.com</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-red-400">Home</Link>
          <Link to="/client" className="hover:text-red-400">Client</Link>
          <Link to="/provider" className="hover:text-red-400">Provider</Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<ClientPortal />} />
          <Route path="/provider" element={<ProviderPortal />} />
          <Route path="/profile" element={<ProfileCreation />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="text-center p-4 border-t border-gray-700 text-sm text-gray-400">
        © {new Date().getFullYear()} 1clikfix.com — All Rights Reserved
      </footer>
    </div>
  );
}
