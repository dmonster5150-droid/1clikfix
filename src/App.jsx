
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";

// Customer authentication
import Login from "./pages/login";
import Register from "./pages/register";

// Booking and scheduling
import Booking from "./pages/Booking";
import BookingDashboard from "./pages/BookingDashboard";
import Calendar from "./pages/Calendar";

// Payments
import Pay from "./pages/Pay";

// Fallback page
function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f0f0f] px-6 text-white">

      <div className="w-full max-w-lg text-center">

        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">
          1ClikFix
        </p>

        <h1 className="text-7xl font-bold text-red-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Page Not Available
        </h2>

        <p className="mt-4 leading-relaxed text-gray-400">
          This page may be under development,
          temporarily unavailable, or no longer exists.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-red-700 px-8 py-4 font-bold text-white transition hover:bg-red-600"
        >
          Return to Home
        </Link>

      </div>

    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Hero />} />

        {/* Customer authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Booking */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/clients" element={<Booking />} />

        {/* Dashboard */}
        <Route
          path="/booking-dashboard"
          element={<BookingDashboard />}
        />

        {/* Scheduling */}
        <Route path="/calendar" element={<Calendar />} />

        {/* Payments */}
        <Route path="/pay" element={<Pay />} />

        {/* Unavailable pages */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}
