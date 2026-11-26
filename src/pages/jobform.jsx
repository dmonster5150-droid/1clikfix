
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

const initialForm = {
  title: "",
  category: "",
  description: "",
  location: ""
};

export default function JobForm() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [job, setJob] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  const categories = [
    "Phone Repair",
    "Computer Repair",
    "Electronics Repair",
    "Technical Support",
    "Diagnostics",
    "Other"
  ];

  // Monitor authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setAuthLoading(false);
        setJob(initialForm);
        setReference("");
        setError("");
      },
      () => {
        setUser(null);
        setAuthLoading(false);
        setError("Unable to verify your account.");
      }
    );

    return unsubscribe;
  }, []);

  const handleChange = (e) => {
    setJob((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }));

    setError("");
  };

  // Submit authenticated service request
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting || reference) return;

    setError("");

    if (!user || auth.currentUser?.uid !== user.uid) {
      setError("Please sign in before submitting a request.");
      return;
    }

    const title = job.title.trim();
    const description = job.description.trim();
    const location = job.location.trim();

    if (title.length < 5 || title.length > 100) {
      setError("Enter a job title between 5 and 100 characters.");
      return;
    }

    if (!categories.includes(job.category)) {
      setError("Please select a service category.");
      return;
    }

    if (description.length < 20 || description.length > 2000) {
      setError("Describe your request using 20 to 2000 characters.");
      return;
    }

    if (location.length < 2 || location.length > 100) {
      setError("Please enter your city or service area.");
      return;
    }

    setSubmitting(true);

    const ownerUid = user.uid;

    try {
      const result = await addDoc(
        collection(db, "jobs"),
        {
          uid: ownerUid,
          title,
          category: job.category,
          description,
          location,
          status: "pending",
          assignedProviderId: null,
          created: serverTimestamp()
        }
      );

      if (auth.currentUser?.uid === ownerUid) {
        setReference(result.id);
        setJob(initialForm);
      }

    } catch (err) {
      if (auth.currentUser?.uid === ownerUid) {
        setError(
          "Unable to submit your request. Please try again."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  const fieldStyle =
    "w-full rounded-xl border border-gray-700 " +
    "bg-black px-4 py-4 text-base text-white " +
    "focus:outline-none focus:ring-2 focus:ring-red-600";

  const primaryStyle =
    "block rounded-xl bg-red-700 px-6 py-4 " +
    "text-center font-bold text-white " +
    "transition hover:bg-red-600";

  const secondaryStyle =
    "block rounded-xl border border-gray-700 " +
    "px-6 py-4 text-center font-semibold " +
    "transition hover:border-red-500";

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

          <p className="mb-8 mt-4 text-gray-400">
            Sign in to submit a custom service request.
          </p>

          {error && (
            <p role="alert" className="mb-5 text-red-400">
              {error}
            </p>
          )}

          <div className="space-y-4">

            <Link to="/login" className={primaryStyle}>
              Sign In
            </Link>

            <Link to="/register" className={secondaryStyle}>
              Create Account
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-12 text-white">

      <div className="mx-auto max-w-2xl">

        {/* Page introduction */}
        <div className="mb-8 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
            1ClikFix Service Marketplace
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Submit a{" "}
            <span className="text-red-500">
              Job Request
            </span>
          </h1>

          <p className="mt-5 leading-relaxed text-gray-400">
            Tell us what you need, describe the problem
            and provide your general service location.
          </p>

        </div>

        {/* Submission confirmation */}
        {reference ? (

          <div className="rounded-2xl border border-green-900 bg-[#171717] p-8 text-center">

            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-950 text-3xl text-green-400"
              aria-hidden="true"
            >
              ✓
            </div>

            <h2 className="text-2xl font-bold">
              Request Submitted
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400">
              Your service request has been saved
              and is pending review.
            </p>

            <div className="my-6 rounded-xl border border-gray-800 bg-black p-4">

              <p className="text-xs uppercase tracking-wider text-gray-500">
                Request Reference
              </p>

              <p className="mt-2 break-all font-mono text-sm">
                {reference}
              </p>

            </div>

            <p className="mb-6 text-sm text-gray-400">
              A submitted request does not guarantee
              provider availability or acceptance.
            </p>

            <div className="space-y-3">

              <button
                type="button"
                onClick={() => setReference("")}
                className={`w-full ${primaryStyle}`}
              >
                Submit Another Request
              </button>

              <Link to="/" className={secondaryStyle}>
                Return to Home
              </Link>

            </div>

          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-xl sm:p-8"
          >

            <div className="border-b border-gray-800 pb-5">

              <h2 className="text-xl font-bold">
                Service Details
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Provide enough information to explain
                your service needs.
              </p>

            </div>

            <fieldset
              disabled={submitting}
              className="space-y-6 disabled:opacity-70"
            >

              {/* Job title */}
              <div>

                <label
                  htmlFor="title"
                  className="mb-2 block font-semibold"
                >
                  Job title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Example: Laptop screen repair"
                  value={job.title}
                  onChange={handleChange}
                  className={fieldStyle}
                  minLength={5}
                  maxLength={100}
                  required
                />

              </div>

              {/* Service category */}
              <div>

                <label
                  htmlFor="category"
                  className="mb-2 block font-semibold"
                >
                  Service category
                </label>

                <select
                  id="category"
                  name="category"
                  value={job.category}
                  onChange={handleChange}
                  className={fieldStyle}
                  required
                >

                  <option value="">
                    Select a service category
                  </option>

                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}

                </select>

              </div>

              {/* Job description */}
              <div>

                <label
                  htmlFor="description"
                  className="mb-2 block font-semibold"
                >
                  Describe your request
                </label>

                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the issue, device or service you need..."
                  value={job.description}
                  onChange={handleChange}
                  className={`${fieldStyle} min-h-[160px] resize-y`}
                  minLength={20}
                  maxLength={2000}
                  required
                />

                <p className="mt-2 text-right text-xs text-gray-500">
                  {job.description.length}/2000
                </p>

              </div>

              {/* General service location */}
              <div>

                <label
                  htmlFor="location"
                  className="mb-2 block font-semibold"
                >
                  Service location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City, State or ZIP code"
                  value={job.location}
                  onChange={handleChange}
                  className={fieldStyle}
                  maxLength={100}
                  required
                />

                <p className="mt-2 text-xs text-gray-400">
                  Enter your general service area,
                  not your full home address.
                </p>

              </div>

            </fieldset>

            {/* Privacy reminder */}
            <div className="rounded-xl border border-gray-800 bg-black p-4">

              <p className="mb-2 text-sm font-bold">
                Protect Your Information
              </p>

              <p className="text-xs leading-relaxed text-gray-400">
                Do not include passwords, payment card
                information, access codes or other
                sensitive personal information.
              </p>

            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-900 bg-red-950/50 p-4 text-sm text-red-300"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-red-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting
                ? "Submitting Request..."
                : "Submit Job Request"}
            </button>

            <p className="text-center text-xs leading-relaxed text-gray-500">
              Submitting a request does not authorize
              a payment or confirm an appointment.
            </p>

          </form>

        )}

        <div className="mt-8 text-center">

          <Link
            to="/booking"
            className="text-sm text-gray-400 hover:text-white"
          >
            Prefer to request an appointment?
          </Link>

          <p className="mt-6 text-xs text-gray-500">
            1ClikFix — Professional Service Management
          </p>

        </div>

      </div>

    </main>
  );
}
