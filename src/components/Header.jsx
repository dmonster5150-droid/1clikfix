
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 text-white backdrop-blur-md"
      onKeyDown={(e) => {
        if (e.key === "Escape") setMenuOpen(false);
      }}
    >

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">

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
          className="hidden items-center gap-8 text-sm font-semibold md:flex"
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

          <Link
            to="/booking"
            className="rounded-xl bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 bg-[#171717] transition hover:border-red-500 md:hidden"
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

      {/* Mobile navigation */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="border-t border-gray-800 bg-[#111111] px-5 py-5 md:hidden"
      >

        <div className="mx-auto flex max-w-6xl flex-col gap-3">

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

          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-xl bg-red-700 px-5 py-4 text-center font-bold text-white transition hover:bg-red-600"
          >
            Get Started
          </Link>

          <p className="mt-3 text-center text-xs text-gray-500">
            1ClikFix — Professional Service Management
          </p>

        </div>

      </nav>

    </header>
  );
}
