
import { useEffect, useRef, useState } from "react";
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

const publicNavigation = [
  { name: "Home", path: "/" },
  { name: "Book a Service", path: "/booking" },
  { name: "Request a Job", path: "/jobform" }
];

const accountNavigation = [
  { name: "Customer Portal", path: "/clientportal" },
  { name: "My Bookings", path: "/booking-dashboard" },
  { name: "My Profile", path: "/profile" }
];

const legalNavigation = [
  { name: "Disclosures", path: "/disclosures" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const [error, setError] = useState("");

  const accountRef = useRef(null);
  const accountButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Monitor Firebase authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setAuthLoading(false);
        setError("");
        setAccountOpen(false);
      },
      () => {
        setUser(null);
        setAuthLoading(false);
        setAccountOpen(false);
        setError("Unable to check account status.");
      }
    );

    return unsubscribe;
  }, []);

  // Close navigation after route changes
  useEffect(() => {
    setMenuOpen(false);
    setAccountOpen(false);
  }, [location.pathname]);

  // Close desktop account menu when clicking outside
  useEffect(() => {
    if (!accountOpen) return;

    const handleOutsideClick = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setAccountOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, [accountOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setAccountOpen(false);
  };

  // Sign out securely through Firebase
  const handleSignOut = async () => {
    if (signingOut) return;

    setSigningOut(true);
    setError("");

    try {
      await signOut(auth);
      closeMenus();
      navigate("/", { replace: true });
    } catch (err) {
      setError("Unable to sign out. Please try again.");
    } finally {
      setSigningOut(false);
    }
  };

  const navStyle = ({ isActive }) =>
    `whitespace-nowrap transition-colors duration-200 ${
      isActive
        ? "text-red-500"
        : "text-gray-300 hover:text-white"
    }`;

  const mobileNavStyle = ({ isActive }) =>
    `rounded-xl px-4 py-4 font-semibold transition ${
      isActive
        ? "border border-red-900 bg-red-950/40 text-red-400"
        : "border border-transparent bg-[#1a1a1a] text-gray-300 hover:bg-gray-800"
    }`;

  const primaryStyle =
    "rounded-xl bg-red-700 px-5 py-3 " +
    "text-center font-semibold text-white " +
    "transition hover:bg-red-600";

  const secondaryStyle =
    "rounded-xl border border-gray-700 px-5 py-3 " +
    "text-center font-semibold text-white " +
    "transition hover:border-red-500";

  const accountName =
    user?.displayName || "My Account";

  const accountInitial =
    (user?.displayName || user?.email || "C")
      .charAt(0)
      .toUpperCase();

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 text-white backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          if (accountOpen) {
            setAccountOpen(false);
            accountButtonRef.current?.focus();
          }

          if (menuOpen) {
            setMenuOpen(false);
            mobileButtonRef.current?.focus();
          }
        }
      }}
    >

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">

        {/* Brand identity */}
        <Link
          to="/"
          aria-label="1ClikFix Home"
          onClick={closeMenus}
          className="shrink-0"
        >
          <Logo size={44} />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm font-semibold xl:flex"
        >

          {publicNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={navStyle}
              onClick={closeMenus}
            >
              {item.name}
            </NavLink>
          ))}

          {authLoading ? (

            <span className="text-sm text-gray-400">
              Checking account...
            </span>

          ) : user ? (

            <>
              <Link
                to="/clientportal"
                className={primaryStyle}
                onClick={closeMenus}
              >
                Customer Portal
              </Link>

              {/* Desktop account dropdown */}
              <div
                ref={accountRef}
                className="relative"
              >

                <button
                  ref={accountButtonRef}
                  type="button"
                  aria-expanded={accountOpen}
                  aria-controls="desktop-account-navigation"
                  onClick={() =>
                    setAccountOpen((previous) => !previous)
                  }
                  className="flex items-center gap-3 rounded-xl border border-gray-700 bg-[#171717] px-3 py-2 transition hover:border-red-500"
                >

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-800 font-bold text-white">
                    {accountInitial}
                  </span>

                  <span className="max-w-[120px] truncate">
                    {accountName}
                  </span>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                    className={`transition-transform ${
                      accountOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>

                </button>

                {accountOpen && (

                  <div
                    id="desktop-account-navigation"
                    className="absolute right-0 top-full mt-3 w-72 rounded-2xl border border-gray-800 bg-[#171717] p-3 shadow-2xl"
                  >

                    <div className="border-b border-gray-800 px-3 py-4">

                      <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                        Signed In
                      </p>

                      <p className="mt-2 break-words font-bold">
                        {accountName}
                      </p>

                      <p className="mt-1 break-all text-xs text-gray-400">
                        {user.email}
                      </p>

                    </div>

                    <div className="space-y-1 py-3">

                      {accountNavigation.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={closeMenus}
                          className={({ isActive }) =>
                            `block rounded-lg px-4 py-3 transition ${
                              isActive
                                ? "bg-red-950/50 text-red-400"
                                : "text-gray-300 hover:bg-gray-800"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}

                    </div>

                    <div className="border-t border-gray-800 pt-3">

                      <button
                        type="button"
                        onClick={handleSignOut}
                        disabled={signingOut}
                        className="w-full rounded-xl border border-red-900 px-4 py-3 font-semibold text-red-400 transition hover:bg-red-950/50 disabled:opacity-50"
                      >
                        {signingOut
                          ? "Signing out..."
                          : "Sign Out"}
                      </button>

                    </div>

                  </div>

                )}

              </div>

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

          )}

        </nav>

        {/* Mobile navigation toggle */}
        <button
          ref={mobileButtonRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-[#171717] transition hover:border-red-500 xl:hidden"
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
        className="max-h-[75vh] overflow-y-auto overscroll-contain border-t border-gray-800 bg-[#111111] px-5 py-5 xl:hidden"
      >

        <div className="mx-auto flex max-w-3xl flex-col gap-3">

          {/* Signed-in customer identity */}
          {!authLoading && user && (

            <div className="mb-3 rounded-2xl border border-gray-800 bg-[#171717] p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-800 text-xl font-bold">
                  {accountInitial}
                </div>

                <div className="min-w-0">

                  <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Signed In
                  </p>

                  <p className="mt-1 break-words text-lg font-bold">
                    {user.displayName || "Welcome back"}
                  </p>

                  <p className="mt-1 break-all text-xs text-gray-400">
                    {user.email}
                  </p>

                </div>

              </div>

            </div>

          )}

          {/* Main navigation */}
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
            Explore 1ClikFix
          </p>

          {publicNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenus}
              className={mobileNavStyle}
            >
              {item.name}
            </NavLink>
          ))}

          <div className="my-3 border-t border-gray-800" />

          {/* Customer account navigation */}
          {authLoading ? (

            <p className="py-3 text-center text-sm text-gray-400">
              Checking account status...
            </p>

          ) : user ? (

            <>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                My Account
              </p>

              {accountNavigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenus}
                  className={mobileNavStyle}
                >
                  {item.name}
                </NavLink>
              ))}

              <button
                type="button"
                onClick={handleSignOut}
                disabled={signingOut}
                className="mt-2 rounded-xl border border-red-900 px-5 py-4 font-semibold text-red-400 transition hover:bg-red-950/50 disabled:opacity-50"
              >
                {signingOut
                  ? "Signing out..."
                  : "Sign Out"}
              </button>
            </>

          ) : (

            <>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                Customer Access
              </p>

              <Link
                to="/clientportal"
                onClick={closeMenus}
                className={secondaryStyle}
              >
                Customer Portal
              </Link>

              <Link
                to="/login"
                onClick={closeMenus}
                className={secondaryStyle}
              >
                Sign In
              </Link>

              <Link
                to="/register"
                onClick={closeMenus}
                className={primaryStyle}
              >
                Create Account
              </Link>
            </>

          )}

          {/* Legal navigation */}
          <div className="my-3 border-t border-gray-800" />

          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
            Trust & Transparency
          </p>

          {legalNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenus}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm transition ${
                  isActive
                    ? "text-red-400"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="mt-4 border-t border-gray-800 pt-5 text-center">

            <p className="font-bold text-red-500">
              1ClikFix
            </p>

            <p className="mt-2 text-xs text-gray-500">
              Professional Service Management
            </p>

          </div>

        </div>

      </nav>

    </header>
  );
}
