
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import {
  setDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  const updateField = (e) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (loading || accountCreated) return;

    setError("");

    const name = form.name.trim();
    const email = form.email.trim();
    const password = form.password;

    if (name.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== form.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    setLoading(true);

    let createdUser = null;

    try {
      const credential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      createdUser = credential.user;
      setAccountCreated(true);

      await setDoc(doc(db, "users", createdUser.uid), {
        uid: createdUser.uid,
        name,
        email: createdUser.email,
        role: "client",
        subscribed: false,
        created: serverTimestamp()
      });

      await updateProfile(createdUser, {
        displayName: name
      });

      navigate("/clientportal", { replace: true });

    } catch (err) {

      if (createdUser) {
        setError(
          "Your sign-in account was created, but profile setup could not be completed. Please contact support before continuing."
        );
      } else if (err.code === "auth/email-already-in-use") {
        setError(
          "Unable to register with this email. Try signing in or resetting your password."
        );
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        setError("Please choose a stronger password.");
      } else if (err.code === "auth/network-request-failed") {
        setError("Check your internet connection and try again.");
      } else {
        setError("Registration could not be completed. Please try again.");
      }

    } finally {
      setLoading(false);
    }
  };

  const fieldStyle =
    "w-full rounded-xl border border-gray-700 " +
    "bg-black px-4 py-4 text-base text-white " +
    "focus:outline-none focus:ring-2 focus:ring-red-600";

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-12 text-white">

      <div className="mx-auto max-w-md">

        <div className="mb-8 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
            Join the 1ClikFix Platform
          </p>

          <h1 className="text-4xl font-bold">
            Create Your{" "}
            <span className="text-red-500">Account</span>
          </h1>

          <p className="mt-4 leading-relaxed text-gray-400">
            Create a customer account to request
            services and manage your appointments.
          </p>

        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-5 rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-xl sm:p-8"
        >

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
              placeholder="Enter your full name"
              value={form.name}
              onChange={updateField}
              className={fieldStyle}
              maxLength={100}
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
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={updateField}
              className={fieldStyle}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-semibold"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a password"
              value={form.password}
              onChange={updateField}
              className={fieldStyle}
              minLength={8}
              required
            />

            <p className="mt-2 text-xs text-gray-400">
              Use at least 8 characters.
            </p>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block font-semibold"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={updateField}
              className={fieldStyle}
              minLength={8}
              required
            />
          </div>

          <label className="flex items-center gap-3 text-sm text-gray-400">

            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) =>
                setShowPassword(e.target.checked)
              }
              className="h-4 w-4 accent-red-600"
            />

            Show passwords

          </label>

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
            disabled={loading || accountCreated}
            className="w-full rounded-xl bg-red-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Creating account..."
              : accountCreated
              ? "Account Created"
              : "Create Account"}
          </button>

          <div className="border-t border-gray-800 pt-6 text-center">

            <p className="text-sm text-gray-400">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="mt-3 block rounded-xl border border-gray-700 px-4 py-3 font-semibold transition hover:border-red-500"
            >
              Sign In
            </Link>

          </div>

        </form>

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
