
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useLocation
} from "react-router-dom";
import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "../firebase";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Monitor Firebase authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setAuthLoading(false);
      },
      () => {
        setAuthLoading(false);
        setError("Unable to check account status.");
      }
    );

    return unsubscribe;
  }, []);

  // Close mobile menu after navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Sign out
  const handleSignOut = async () => {
    if (signingOut) return;

    setSigningOut(true);
    setError("");

    try {
      await signOut(auth);
      setMenuOpen(false);
      navigate("/", { replace: true });
    } catch (err) {
      setError("Unable to sign out. Please try again.");
    } finally {
      setSigningOut(false);
    }
  };

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Book a Service", path: "/booking" }
  ];

  const navStyle = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-red-500"
        : "text-gray-300 hover:text-white"
    }`;

  const primaryStyle =
    "rounded-xl bg-red-700 px-5 py-3 " +
    "text-center font-semibold text-white " +
    "transition hover:bg-red-600";

  const secondaryStyle =
    "rounded-xl border border-gray-700 px-5 py-3 " +
    "text-center font-semibold text-white " +
    "transition hover:border-red-500";

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 text-white backdrop-blur-md"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
        }
      }}
    >

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">

        {/* Brand */}
        <Link
          to="/"
          aria-label="1ClikFix Home"
          onClick={() => setMenuOpen(false)}
        >
          <Logo size={44} />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm font-semibold lg:flex"
        >

          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={navStyle}
            >
              {item.name}
            </NavLink>
          ))}

          {!authLoading && (
            user ? (
              <>
                <span className="max-w-[150px] truncate text-gray-400">
                  {user.displayName || "My Account"}
                </span>

                <button
                  type="button"
                  onClick={handleSignOut}
                  disabled={signingOut}
                  className={`${secondaryStyle} disabled:opacity-50`}
                >
                  {signingOut ? "Signing out..." : "Sign Out"}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={secondaryStyle}
                >
                  Sign In
                </Link>

                <Link
                  to="/register"
                  className={primaryStyle}
                >
                  Create Account
                </Link>
              </>
            )
          )}

        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-[#171717] transition hover:border-red-500 lg:hidden"
        >

          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6L18 18M18 6L6 18" />
            ) : (
              <path d="M3 6H21M3 12H21M3 18H21" />
            )}
          </svg>

        </button>

      </div>

      {/* Authentication errors */}
      {error && (
        <div
          role="alert"
          className="border-t border-red-900 bg-red-950/50 px-5 py-3 text-center text-sm text-red-300"
        >
          {error}
        </div>
      )}

      {/* Mobile navigation */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="max-h-[75vh] overflow-y-auto border-t border-gray-800 bg-[#111111] px-5 py-5 lg:hidden"
      >

        <div className="mx-auto flex max-w-6xl flex-col gap-3">

          {/* Customer account status */}
          {!authLoading && user && (
            <div className="mb-3 rounded-xl border border-gray-800 bg-[#171717] p-4">

              <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
                Signed In
              </p>

              <p className="mt-2 break-words text-lg font-bold">
                {user.displayName || "Welcome back"}
              </p>

              <p className="mt-1 break-all text-sm text-gray-400">
                {user.email}
              </p>

            </div>
          )}

          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Navigation
          </p>

          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-4 font-semibold transition ${
                  isActive
                    ? "border border-red-900 bg-red-950/40 text-red-400"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="my-2 border-t border-gray-800" />

          {authLoading ? (
            <p className="py-3 text-center text-sm text-gray-400">
              Checking account status...
            </p>
          ) : user ? (
            <button
              type="button"
              onClick={handleSignOut}
              disabled={signingOut}
              className={`${secondaryStyle} disabled:opacity-50`}
            >
              {signingOut ? "Signing out..." : "Sign Out"}
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={secondaryStyle}
              >
                Sign In
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className={primaryStyle}
              >
                Create Account
              </Link>
            </>
          )}

          <p className="mt-4 text-center text-xs text-gray-500">
            1ClikFix — Professional Service Management
          </p>

        </div>

      </nav>

    </header>
  );
}
