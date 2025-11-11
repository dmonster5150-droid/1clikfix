
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Subscribe from "./pages/Subscribe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-dark text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
            />
            <Route
              path="/calendar"
              element={<ProtectedRoute><Calendar /></ProtectedRoute>}
            />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
