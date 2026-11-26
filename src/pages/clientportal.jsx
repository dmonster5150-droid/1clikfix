
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  onSnapshot
} from "firebase/firestore";
import { auth, db } from "../firebase";

const customerActions = [
  {
    icon: "📅",
    title: "Book a Service",
    description:
      "Choose a service and request your preferred appointment date and time.",
    button: "New Booking",
    path: "/booking",
    primary: true
  },
  {
    icon: "🛠️",
    title: "Custom Job Request",
    description:
      "Describe your service needs and submit a custom request to the marketplace.",
    button: "Submit a Job",
    path: "/jobform",
    primary: true
  },
  {
    icon: "📋",
    title: "My Bookings",
    description:
      "Review your appointment requests, booking details and current statuses.",
    button: "View My Bookings",
    path: "/booking-dashboard",
    primary: false
  },
  {
    icon: "👤",
    title: "My Profile",
    description:
      "Manage your personal information and customer contact details.",
    button: "Manage Profile",
    path: "/profile",
    primary: false
  }
];

const initialActivity = {
  uid: null,
  bookings: null,
  jobs: null,
  bookingError: false,
  jobError: false
};

export default function ClientPortal() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activity, setActivity] =
    useState(initialActivity);

  // Monitor customer authentication
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

  // Load customer-specific activity
  useEffect(() => {
    if (!user) {
      setActivity(initialActivity);
      return;
    }

    const uid = user.uid;
    let active = true;

    setActivity({
      ...initialActivity,
      uid
    });

    const bookingQuery = query(
      collection(db, "bookings"),
      where("uid", "==", uid)
    );

    const jobQuery = query(
      collection(db, "jobs"),
      where("uid", "==", uid)
    );

    const unsubscribeBookings = onSnapshot(
      bookingQuery,
      (snapshot) => {
        if (!active) return;

        const bookings = snapshot.docs.map(
          (document) => document.data()
        );

        setActivity((previous) => ({
          ...previous,
          bookings,
          bookingError: false
        }));
      },
      () => {
        if (!active) return;

        setActivity((previous) => ({
          ...previous,
          bookings: null,
          bookingError: true
        }));
      }
    );

    const unsubscribeJobs = onSnapshot(
      jobQuery,
      (snapshot) => {
        if (!active) return;

        setActivity((previous) => ({
          ...previous,
          jobs: snapshot.size,
          jobError: false
        }));
      },
      () => {
        if (!active) return;

        setActivity((previous) => ({
          ...previous,
          jobs: null,
          jobError: true
        }));
      }
    );

    return () => {
      active = false;
      unsubscribeBookings();
      unsubscribeJobs();
    };
  }, [user]);

  // Prevent displaying another account's activity
  const currentActivity =
    user && activity.uid === user.uid
      ? activity
      : initialActivity;

  const bookings = currentActivity.bookings;

  const statistics = [
    {
      label: "Total Bookings",
      value: bookings?.length,
      error: currentActivity.bookingError
    },
    {
      label: "Pending Bookings",
      value: bookings?.filter(
        (booking) => booking.status === "pending"
      ).length,
      error: currentActivity.bookingError
    },
    {
      label: "Completed Bookings",
      value: bookings?.filter(
        (booking) => booking.status === "completed"
      ).length,
      error: currentActivity.bookingError
    },
    {
      label: "Job Requests",
      value: currentActivity.jobs,
      error: currentActivity.jobError
    }
  ];

  const primaryStyle =
    "block rounded-xl bg-red-700 px-6 py-4 " +
    "text-center font-bold text-white " +
    "transition hover:bg-red-600";

  const secondaryStyle =
    "block rounded-xl border border-gray-700 " +
    "px-6 py-4 text-center font-semibold " +
    "transition hover:border-red-500";

  const accountInitial =
    (user?.displayName || user?.email || "C")
      .charAt(0)
      .toUpperCase();

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-12 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Portal introduction */}
        <header className="mb-10 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
            1ClikFix Customer Experience
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Customer{" "}
            <span className="text-red-500">
              Command Center
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            Manage your appointments, submit service
            requests and access your customer account
            from one centralized destination.
          </p>

        </header>

        {loading ? (

          <p
            role="status"
            className="py-12 text-center text-gray-400"
          >
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

            {/* Personalized account overview */}
            <section className="mb-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-[#251111] to-[#171717] p-6 sm:p-8">

              <div className="flex flex-wrap items-center gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-red-700 bg-red-900 text-2xl font-bold">
                  {accountInitial}
                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Your Customer Account
                  </p>

                  <h2 className="mt-2 break-words text-2xl font-bold sm:text-3xl">
                    Welcome, {user.displayName || "Customer"}
                  </h2>

                  <p className="mt-2 break-all text-sm text-gray-400">
                    {user.email}
                  </p>

                </div>

                <span className="rounded-full border border-green-900 bg-green-950/50 px-4 py-2 text-xs font-semibold text-green-400">
                  Signed In
                </span>

              </div>

            </section>

            {/* Live customer statistics */}
            <section className="mb-10">

              <h2 className="mb-5 text-xl font-bold">
                Your Activity Overview
              </h2>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

                {statistics.map((stat) => (

                  <article
                    key={stat.label}
                    className="rounded-2xl border border-gray-800 bg-[#171717] p-4 sm:p-6"
                  >

                    <p className="text-xs font-semibold text-gray-400 sm:text-sm">
                      {stat.label}
                    </p>

                    <p className="mt-3 text-3xl font-extrabold text-red-500 sm:text-4xl">
                      {stat.error
                        ? "—"
                        : stat.value ?? "…"}
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      {stat.error
                        ? "Unavailable"
                        : stat.value == null
                        ? "Loading..."
                        : "Your account"}
                    </p>

                  </article>

                ))}

              </div>

              {(currentActivity.bookingError ||
                currentActivity.jobError) && (

                <p
                  role="alert"
                  className="mt-4 rounded-xl border border-yellow-900 bg-yellow-950/30 p-4 text-sm text-yellow-300"
                >
                  Some activity information is currently
                  unavailable. You can still access your
                  customer service tools below.
                </p>

              )}

            </section>

            {/* Customer service tools */}
            <section className="mb-10">

              <h2 className="mb-2 text-2xl font-bold">
                Service Management
              </h2>

              <p className="mb-6 text-sm text-gray-400">
                Choose what you would like to do today.
              </p>

              <div className="grid gap-5 md:grid-cols-2">

                {customerActions.map((action) => (

                  <article
                    key={action.path}
                    className="flex flex-col rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-lg transition hover:border-red-900"
                  >

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-red-900 bg-red-950/40">

                      <span
                        className="text-3xl"
                        aria-hidden="true"
                      >
                        {action.icon}
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold">
                      {action.title}
                    </h3>

                    <p className="mb-6 mt-3 flex-1 leading-relaxed text-gray-400">
                      {action.description}
                    </p>

                    <Link
                      to={action.path}
                      className={
                        action.primary
                          ? primaryStyle
                          : secondaryStyle
                      }
                    >
                      {action.button}
                    </Link>

                  </article>

                ))}

              </div>

            </section>

            {/* Marketplace information */}
            <section className="mb-8 rounded-2xl border border-gray-800 bg-[#171717] p-6">

              <h2 className="text-xl font-bold">
                Custom Service Requests
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Custom job requests are separate from
                scheduled appointments. Submitting a job
                request does not confirm provider acceptance
                or authorize a payment.
              </p>

              <p className="mt-3 text-xs text-gray-500">
                Detailed job tracking and provider matching
                are currently under development.
              </p>

            </section>

          </>

        ) : (

          /* Guest customer experience */
          <section className="mx-auto max-w-lg rounded-2xl border border-gray-800 bg-[#171717] p-6 text-center shadow-xl sm:p-8">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-900 bg-red-950/40 text-4xl">
              👤
            </div>

            <h2 className="text-2xl font-bold">
              Get Started with 1ClikFix
            </h2>

            <p className="mb-8 mt-4 leading-relaxed text-gray-400">
              Create your customer account or sign in
              to access your personal service command center.
            </p>

            <div className="mb-8 space-y-3 text-left text-sm text-gray-300">

              {[
                "Request service appointments",
                "Submit custom job requests",
                "Review your booking history",
                "Manage your customer profile"
              ].map((benefit) => (

                <p
                  key={benefit}
                  className="flex items-center gap-3 rounded-lg bg-black/40 p-3"
                >
                  <span className="font-bold text-red-500">
                    ✓
                  </span>

                  {benefit}
                </p>

              ))}

            </div>

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

          </section>

        )}

        {/* Trust and transparency */}
        <section className="mt-10 rounded-2xl border border-gray-800 bg-[#171717] p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-red-400">
            Trust & Transparency
          </p>

          <h2 className="mt-3 text-xl font-bold">
            Your Information Matters
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Learn about our platform, privacy principles
            and preliminary service agreements.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            {[
              {
                name: "Disclosures",
                path: "/disclosures"
              },
              {
                name: "Terms of Service",
                path: "/terms"
              },
              {
                name: "Privacy Policy",
                path: "/privacy"
              }
            ].map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className="rounded-lg border border-gray-700 px-4 py-3 text-xs font-semibold text-gray-300 transition hover:border-red-500 hover:text-white"
              >
                {item.name}
              </Link>

            ))}

          </div>

        </section>

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
