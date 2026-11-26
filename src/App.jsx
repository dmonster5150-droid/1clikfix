
import { Routes, Route, Link } from "react-router-dom";

// Core components
import Header from "./components/Header";
import Hero from "./components/Hero";

// Customer authentication
import Login from "./pages/login";
import Register from "./pages/register";

// Customer ecosystem
import ClientPortal from "./pages/clientportal";
import ProfileCreation from "./pages/profilecreation";
import JobForm from "./pages/jobform";

// Booking and scheduling
import Booking from "./pages/Booking";
import BookingDashboard from "./pages/BookingDashboard";
import Calendar from "./pages/Calendar";

// Payments
import Pay from "./pages/Pay";

// Legal infrastructure
import Disclosures from "./pages/disclosure";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";

// Global footer
function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black px-6 py-12 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand identity */}
          <div>

            <Link
              to="/"
              className="text-3xl font-extrabold text-red-600"
            >
              1ClikFix
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              A modern service platform designed to
              simplify service requests, appointment
              scheduling and customer management.
            </p>

          </div>

          {/* Customer services */}
          <div>

            <h2 className="mb-5 font-bold">
              Customer Services
            </h2>

            <nav
              aria-label="Customer services"
              className="flex flex-col gap-4 text-sm text-gray-400"
            >

              <Link
                to="/clientportal"
                className="hover:text-red-500"
              >
                Customer Portal
              </Link>

              <Link
                to="/booking"
                className="hover:text-red-500"
              >
                Book a Service
              </Link>

              <Link
                to="/jobform"
                className="hover:text-red-500"
              >
                Submit a Job Request
              </Link>

              <Link
                to="/booking-dashboard"
                className="hover:text-red-500"
              >
                My Bookings
              </Link>

              <Link
                to="/profile"
                className="hover:text-red-500"
              >
                My Profile
              </Link>

            </nav>

          </div>

          {/* Legal navigation */}
          <div>

            <h2 className="mb-5 font-bold">
              Trust & Transparency
            </h2>

            <nav
              aria-label="Legal information"
              className="flex flex-col gap-4 text-sm text-gray-400"
            >

              <Link
                to="/disclosures"
                className="hover:text-red-500"
              >
                Disclosures & Agreements
              </Link>

              <Link
                to="/terms"
                className="hover:text-red-500"
              >
                Terms of Service
              </Link>

              <Link
                to="/privacy"
                className="hover:text-red-500"
              >
                Privacy Policy
              </Link>

            </nav>

          </div>

        </div>

        {/* Footer bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} 1ClikFix.
            All rights reserved.
          </p>

          <p className="mt-3 text-xs font-semibold tracking-wider text-gray-500">
            Professionalism • Transparency • Accountability
          </p>

        </div>

      </div>

    </footer>
  );
}

// Fallback page
function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#0f0f0f] px-6 py-16 text-white">

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

// Main application
export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f0f0f] text-white">

      <Header />

      <div className="flex-1">

        <Routes>

          {/* Homepage */}
          <Route
            path="/"
            element={<Hero />}
          />

          {/* Customer authentication */}
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* Customer portal */}
          <Route
            path="/clientportal"
            element={<ClientPortal />}
          />

          <Route
            path="/clients"
            element={<ClientPortal />}
          />

          {/* Customer profile */}
          <Route
            path="/profile"
            element={<ProfileCreation />}
          />

          {/* Marketplace requests */}
          <Route
            path="/jobform"
            element={<JobForm />}
          />

          {/* Service booking */}
          <Route
            path="/booking"
            element={<Booking />}
          />

          {/* Customer dashboard */}
          <Route
            path="/booking-dashboard"
            element={<BookingDashboard />}
          />

          {/* Scheduling */}
          <Route
            path="/calendar"
            element={<Calendar />}
          />

          {/* Payments */}
          <Route
            path="/pay"
            element={<Pay />}
          />

          {/* Legal infrastructure */}
          <Route
            path="/disclosures"
            element={<Disclosures />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          <Route
            path="/privacy"
            element={<Privacy />}
          />

          {/* Unavailable pages */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </div>

      <Footer />

    </div>
  );
}
