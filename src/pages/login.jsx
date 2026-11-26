
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError("");
    setMessage("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      navigate("/booking", { replace: true });

    } catch (err) {
      if (err.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else if (err.code === "auth/network-request-failed") {
        setError("Network unavailable. Check your connection.");
      } else {
        setError("Unable to sign in. Check your email and password.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (loading) return;

    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Enter your email address first.");
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());

      setMessage(
        "If an account exists for this email, password reset instructions will be sent."
      );

    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setMessage(
          "If an account exists for this email, password reset instructions will be sent."
        );
      } else {
        setError("Unable to request a password reset. Check your email and try again.");
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
            1ClikFix Customer Access
          </p>

          <h1 className="text-4xl font-bold">
            Welcome <span className="text-red-500">Back</span>
          </h1>

          <p className="mt-4 text-gray-400">
            Sign in to request services and manage your account.
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6 rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-xl sm:p-8"
        >

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
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            <div className="relative">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${fieldStyle} pr-20`}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-controls="password"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            <button
              type="button"
              disabled={loading}
              onClick={handlePasswordReset}
              className="mt-3 text-sm font-medium text-red-400 hover:text-red-300 disabled:opacity-50"
            >
              Forgot your password?
            </button>

          </div>

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-900 bg-red-950/50 p-4 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          {message && (
            <div
              role="status"
              className="rounded-xl border border-green-900 bg-green-950/50 p-4 text-sm text-green-300"
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Sign In"}
          </button>

          <div className="border-t border-gray-800 pt-6 text-center">

            <p className="text-sm text-gray-400">
              New to 1ClikFix?
            </p>

            <Link
              to="/register"
              className="mt-3 block rounded-xl border border-gray-700 px-4 py-3 font-semibold transition hover:border-red-500"
            >
              Create an Account
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
