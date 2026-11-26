
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ClientPortal() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        setError("");
      },
      () => {
        setUser(null);
        setLoading(false);
        setError("Unable to verify your account.");
      }
    );

    return unsubscribe;
  }, []);

  const primaryStyle =
    "block rounded-xl bg-red-700 px-6 py-4 " +
    "text-center font-bold text-white " +
    "transition hover:bg-red-600";

  const secondaryStyle =
    "block rounded-xl border border-gray-700 " +
    "px-6 py-4 text-center font-semibold " +
    "transition hover:border-red-500";

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-12 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Portal introduction */}
        <div className="mb-10 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
            1ClikFix Customer Experience
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Customer{" "}
            <span className="text-red-500">
              Portal
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400">
            Your central destination for requesting
            services, tracking appointments and
            managing your service history.
          </p>

        </div>

        {loading ? (

          <p role="status" className="py-12 text-center text-gray-400">
            Checking your account...
          </p>

        ) : error ? (

          <div
            role="alert"
            className="rounded-xl border border-red-900 bg-red-950/50 p-6 text-center text-red-300"
          >
            {error}
          </div>

        ) : user ? (

          <>
            {/* Customer welcome */}
            <div className="mb-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-[#211111] to-[#171717] p-6 sm:p-8">

              <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
                Your Customer Account
              </p>

              <h2 className="mt-3 break-words text-2xl font-bold">
                Welcome, {user.displayName || "Customer"}
              </h2>

              <p className="mt-2 break-all text-sm text-gray-400">
                {user.email}
              </p>

            </div>

            {/* Customer actions */}
            <div className="grid gap-5 md:grid-cols-2">

              <article className="flex flex-col rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-lg">

                <span className="mb-5 text-4xl" aria-hidden="true">
                  🛠️
                </span>

                <h2 className="text-2xl font-bold">
                  Request a Service
                </h2>

                <p className="mb-6 mt-3 flex-1 leading-relaxed text-gray-400">
                  Select a service, describe your needs
                  and request your preferred appointment.
                </p>

                <Link
                  to="/booking"
                  className={primaryStyle}
                >
                  New Booking
                </Link>

              </article>

              <article className="flex flex-col rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-lg">

                <span className="mb-5 text-4xl" aria-hidden="true">
                  📋
                </span>

                <h2 className="text-2xl font-bold">
                  My Bookings
                </h2>

                <p className="mb-6 mt-3 flex-1 leading-relaxed text-gray-400">
                  Review your service requests,
                  appointment details and current statuses.
                </p>

                <Link
                  to="/booking-dashboard"
                  className={secondaryStyle}
                >
                  View My Bookings
                </Link>

              </article>

            </div>

          </>

        ) : (

          /* Guest access */
          <div className="mx-auto max-w-lg rounded-2xl border border-gray-800 bg-[#171717] p-6 text-center shadow-xl sm:p-8">

            <h2 className="text-2xl font-bold">
              Get Started with 1ClikFix
            </h2>

            <p className="mb-8 mt-4 leading-relaxed text-gray-400">
              Create your customer account or sign in
              to access your personal service center.
            </p>

            <div className="space-y-4">

              <Link
                to="/register"
                className={primaryStyle}
              >
                Create Customer Account
              </Link>

              <Link
                to="/login"
                className={secondaryStyle}
              >
                Sign In
              </Link>

            </div>

          </div>

        )}

        <div className="mt-10 text-center">

          <Link
            to="/"
            className="text-sm text-gray-400 hover:text-white"
          >
            Back to Home
          </Link>

          <p className="mt-6 text-xs text-gray-500">
            1ClikFix — Professional Service Management
          </p>

        </div>

      </div>

    </main>
  );
}
