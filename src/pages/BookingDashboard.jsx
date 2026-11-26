
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  onSnapshot
} from "firebase/firestore";

export default function BookingDashboard() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [authLoading, setAuthLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  // Monitor customer authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setBookings([]);
        setError("");
        setLoading(true);
        setUser(currentUser);
        setAuthLoading(false);
      },
      () => {
        setUser(null);
        setBookings([]);
        setAuthLoading(false);
        setLoading(false);
        setError("Unable to verify your account.");
      }
    );

    return unsubscribe;
  }, []);

  // Load only the signed-in customer's bookings
  useEffect(() => {
    if (!user) {
      setBookings([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    const bookingQuery = query(
      collection(db, "bookings"),
      where("uid", "==", user.uid)
    );

    const unsubscribe = onSnapshot(
      bookingQuery,
      (snapshot) => {
        const results = snapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id
        }));

        results.sort(
          (a, b) =>
            (b.created?.seconds || 0) -
            (a.created?.seconds || 0)
        );

        setBookings(results);
        setLoading(false);
      },
      () => {
        setBookings([]);
        setError(
          "Unable to load your bookings. Please try again later."
        );
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [user]);

  const pending = bookings.filter(
    (booking) => booking.status === "pending"
  ).length;

  const confirmed = bookings.filter(
    (booking) => booking.status === "confirmed"
  ).length;

  const completed = bookings.filter(
    (booking) => booking.status === "completed"
  ).length;

  const filteredBookings = bookings.filter(
    (booking) =>
      filter === "all" || booking.status === filter
  );

  const statusStyle = (status) => {
    switch (status) {
      case "confirmed":
        return "border-blue-800 bg-blue-950 text-blue-300";

      case "completed":
        return "border-green-800 bg-green-950 text-green-300";

      case "cancelled":
        return "border-red-800 bg-red-950 text-red-300";

      case "pending":
        return "border-yellow-800 bg-yellow-950 text-yellow-300";

      default:
        return "border-gray-700 bg-gray-900 text-gray-300";
    }
  };

  const formatDate = (date) => {
    if (!date) return "Not scheduled";

    const parsed = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsed.getTime())) return date;

    return parsed.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  const formatTime = (time) => {
    if (!time) return "Not scheduled";

    const parsed = new Date(`2000-01-01T${time}`);

    if (Number.isNaN(parsed.getTime())) return time;

    return parsed.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    });
  };

  if (authLoading) {
    return (
      <main className="min-h-screen bg-[#0f0f0f] px-6 py-20 text-center text-gray-400">
        Checking your account...
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#0f0f0f] px-4 py-16 text-white">

        <div className="mx-auto max-w-md rounded-2xl border border-gray-800 bg-[#171717] p-8 text-center">

          <h1 className="text-3xl font-bold">
            Customer Access
          </h1>

          <p className="mt-4 text-gray-400">
            Sign in to view your personal booking dashboard.
          </p>

          {error && (
            <p role="alert" className="mt-4 text-red-400">
              {error}
            </p>
          )}

          <Link
            to="/login"
            className="mt-8 block rounded-xl bg-red-700 px-6 py-4 font-bold hover:bg-red-600"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="mt-4 block rounded-xl border border-gray-700 px-6 py-4 font-semibold hover:border-red-500"
          >
            Create Account
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-10 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Dashboard heading */}
        <div className="mb-8">

          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-500">
            1ClikFix Customer Center
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            My <span className="text-red-500">Bookings</span>
          </h1>

          <p className="mt-3 break-words text-gray-400">
            Welcome, {user.displayName || "Customer"}.
            Manage your service requests and appointments.
          </p>

          <Link
            to="/booking"
            className="mt-6 inline-block rounded-xl bg-red-700 px-6 py-4 font-bold transition hover:bg-red-600"
          >
            + New Booking
          </Link>

        </div>

        {/* Booking statistics */}
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">

          {[
            ["Total Bookings", bookings.length, "text-white"],
            ["Pending", pending, "text-yellow-400"],
            ["Confirmed", confirmed, "text-blue-400"],
            ["Completed", completed, "text-green-400"]
          ].map(([label, value, color]) => (

            <div
              key={label}
              className="rounded-2xl border border-gray-800 bg-[#171717] p-5"
            >
              <p className="text-xs font-semibold text-gray-400">
                {label}
              </p>

              <p className={`mt-3 text-3xl font-bold ${color}`}>
                {loading || error ? "—" : value}
              </p>
            </div>

          ))}

        </div>

        {/* Booking filters */}
        <div className="mb-6">

          <h2 className="mb-4 text-xl font-bold">
            Appointment History
          </h2>

          <div className="flex flex-wrap gap-2">

            {[
              "all",
              "pending",
              "confirmed",
              "completed",
              "cancelled"
            ].map((item) => (

              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold capitalize transition ${
                  filter === item
                    ? "border-red-700 bg-red-700 text-white"
                    : "border-gray-700 bg-[#171717] text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        {/* Loading state */}
        {loading && (
          <p role="status" className="py-10 text-center text-gray-400">
            Loading your bookings...
          </p>
        )}

        {/* Error state */}
        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-900 bg-red-950/50 p-5 text-red-300"
          >
            {error}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filteredBookings.length === 0 && (

          <div className="rounded-2xl border border-gray-800 bg-[#171717] p-8 text-center">

            <h3 className="text-xl font-bold">
              No bookings found
            </h3>

            <p className="mt-3 text-gray-400">
              {filter === "all"
                ? "Your service requests will appear here."
                : "No bookings match this status."}
            </p>

            <Link
              to="/booking"
              className="mt-6 inline-block rounded-xl bg-red-700 px-6 py-3 font-semibold hover:bg-red-600"
            >
              Book a Service
            </Link>

          </div>

        )}

        {/* Customer booking cards */}
        {!loading && !error && (

          <div className="grid gap-5 md:grid-cols-2">

            {filteredBookings.map((booking) => (

              <article
                key={booking.id}
                className="rounded-2xl border border-gray-800 bg-[#171717] p-5 shadow-lg"
              >

                <div className="flex flex-wrap items-start justify-between gap-3">

                  <h3 className="break-words text-xl font-bold capitalize">
                    {booking.service || "Service Request"}
                  </h3>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${statusStyle(
                      booking.status
                    )}`}
                  >
                    {booking.status || "Unknown"}
                  </span>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-xs uppercase text-gray-500">
                      Requested date
                    </p>

                    <p className="mt-1 font-semibold">
                      {formatDate(booking.date)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-500">
                      Requested time
                    </p>

                    <p className="mt-1 font-semibold">
                      {formatTime(booking.time)}
                    </p>
                  </div>

                </div>

                {booking.notes && (
                  <div className="mt-5 rounded-xl border border-gray-800 bg-black p-4">

                    <p className="mb-2 text-xs uppercase text-gray-500">
                      Service details
                    </p>

                    <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-gray-300">
                      {booking.notes}
                    </p>

                  </div>
                )}

                <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4">

                  <p className="text-sm text-gray-400">
                    Payment record
                  </p>

                  <span className="text-sm font-semibold text-gray-300">
                    {booking.paid === true
                      ? "Marked paid"
                      : "Not recorded as paid"}
                  </span>

                </div>

                <p className="mt-4 break-all text-xs text-gray-500">
                  Reference: {booking.id}
                </p>

              </article>

            ))}

          </div>

        )}

        <p className="mt-10 text-center text-xs text-gray-500">
          1ClikFix — Professional Service Management
        </p>

      </div>

    </main>
  );
}
