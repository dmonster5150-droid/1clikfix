
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import {
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";

export default function ProfileCreation() {
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: ""
  });

  const [loading, setLoading] = useState(true);
  const [profileReady, setProfileReady] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load authenticated customer profile
  useEffect(() => {
    let active = true;
    let requestId = 0;

    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        const currentRequest = ++requestId;

        setUser(currentUser);
        setLoading(true);
        setProfileReady(false);
        setError("");
        setSuccess("");
        setForm({ name: "", phone: "" });

        if (!currentUser) {
          setLoading(false);
          return;
        }

        try {
          const profileRef = doc(
            db,
            "users",
            currentUser.uid
          );

          const snapshot = await getDoc(profileRef);

          if (!active || currentRequest !== requestId) {
            return;
          }

          if (!snapshot.exists()) {
            setError(
              "Your account profile is missing. Please contact support."
            );
            return;
          }

          const data = snapshot.data();

          setForm({
            name: data.name || currentUser.displayName || "",
            phone: data.phone || ""
          });

          setProfileReady(true);

        } catch (err) {
          if (active && currentRequest === requestId) {
            setError("Unable to load your profile.");
          }
        } finally {
          if (active && currentRequest === requestId) {
            setLoading(false);
          }
        }
      },
      () => {
        requestId++;
        setUser(null);
        setProfileReady(false);
        setLoading(false);
        setError("Unable to verify your account.");
      }
    );

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const handleChange = (e) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }));

    setSuccess("");
  };

  // Save customer profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !profileReady || saving) return;

    setError("");
    setSuccess("");

    const name = form.name.trim();
    const phone = form.phone.trim();

    if (name.length < 2 || name.length > 100) {
      setError("Please enter a valid full name.");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");

    if (
      phone &&
      (
        !/^[+\d\s().-]+$/.test(phone) ||
        phoneDigits.length < 7 ||
        phoneDigits.length > 15
      )
    ) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (auth.currentUser?.uid !== user.uid) {
      setError("Your session has changed. Please sign in again.");
      return;
    }

    setSaving(true);

    let profileSaved = false;

    try {
      await updateDoc(doc(db, "users", user.uid), {
        name,
        phone,
        updated: serverTimestamp()
      });

      profileSaved = true;

      if (auth.currentUser?.uid === user.uid) {
        await updateProfile(user, {
          displayName: name
        });

        setSuccess("Your profile has been saved successfully.");
      }

    } catch (err) {
      if (auth.currentUser?.uid === user.uid) {
        setError(
          profileSaved
            ? "Your profile was saved, but your account display name could not be synchronized."
            : "Unable to save your profile. Please try again."
        );
      }
    } finally {
      setSaving(false);
    }
  };

  const fieldStyle =
    "w-full rounded-xl border border-gray-700 " +
    "bg-black px-4 py-4 text-base text-white " +
    "focus:outline-none focus:ring-2 focus:ring-red-600";

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0f0f0f] px-6 py-20 text-center text-gray-400">
        Loading your profile...
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
            Sign in to manage your personal profile.
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
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-12 text-white">

      <div className="mx-auto max-w-xl">

        {/* Page heading */}
        <div className="mb-8 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
            1ClikFix Account Management
          </p>

          <h1 className="text-4xl font-bold">
            My <span className="text-red-500">Profile</span>
          </h1>

          <p className="mt-4 leading-relaxed text-gray-400">
            Manage your personal information and
            keep your contact details up to date.
          </p>

        </div>

        {/* Account identity */}
        <div className="mb-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-[#211111] to-[#171717] p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-red-800 bg-red-950 text-2xl font-bold text-red-400">
              {(form.name || user.email || "C")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div className="min-w-0">

              <h2 className="break-words text-xl font-bold">
                {form.name || user.displayName || "Customer"}
              </h2>

              <p className="mt-1 break-all text-sm text-gray-400">
                {user.email}
              </p>

              <p className="mt-2 text-xs font-semibold text-green-400">
                Signed In
              </p>

            </div>

          </div>

        </div>

        {/* Profile information */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-xl sm:p-8"
        >

          <h2 className="text-xl font-bold">
            Personal Information
          </h2>

          <div>

            <label
              htmlFor="name"
              className="mb-2 block font-semibold"
            >
              Full name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className={fieldStyle}
              maxLength={100}
              disabled={!profileReady || saving}
              required
            />

          </div>

          <div>

            <label
              htmlFor="email"
              className="mb-2 block font-semibold"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              value={user.email || ""}
              readOnly
              className={`${fieldStyle} cursor-default opacity-70`}
            />

            <p className="mt-2 text-xs text-gray-500">
              This email is connected to your sign-in account.
            </p>

          </div>

          <div>

            <label
              htmlFor="phone"
              className="mb-2 block font-semibold"
            >
              Phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className={fieldStyle}
              maxLength={30}
              disabled={!profileReady || saving}
            />

            <p className="mt-2 text-xs text-gray-500">
              Optional contact information for service coordination.
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

          {success && (
            <div
              role="status"
              className="rounded-xl border border-green-900 bg-green-950/50 p-4 text-sm text-green-300"
            >
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={saving || !profileReady}
            className="w-full rounded-xl bg-red-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving Profile..." : "Save Profile"}
          </button>

        </form>

        {/* Customer navigation */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">

          <Link
            to="/booking-dashboard"
            className="rounded-xl border border-gray-700 bg-[#171717] px-5 py-4 text-center font-semibold hover:border-red-500"
          >
            My Bookings
          </Link>

          <Link
            to="/booking"
            className="rounded-xl border border-gray-700 bg-[#171717] px-5 py-4 text-center font-semibold hover:border-red-500"
          >
            Request a Service
          </Link>

        </div>

        <div className="mt-8 text-center">

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
