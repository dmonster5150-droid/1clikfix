import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-4 py-8 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
