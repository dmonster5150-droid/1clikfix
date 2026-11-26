
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 text-center md:py-28">

        {/* Tagline */}
        <p className="mb-6 text-sm uppercase tracking-widest text-gray-400">
          Built for modern service professionals
        </p>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          The Smart Way To
          <br />
          <span className="text-red-600">
            Book & Manage Services
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Connect with service professionals.
          Request appointments and manage your
          services in one streamlined platform.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col justify-center gap-6 md:flex-row">

          <Link
            to="/booking"
            className="rounded-2xl bg-red-600 px-10 py-4 text-lg font-semibold shadow-xl transition hover:-translate-y-1 hover:bg-red-700"
          >
            Book a Service
          </Link>

          <Link
            to="/providers"
            className="rounded-2xl border border-gray-700 px-10 py-4 text-lg font-semibold transition hover:-translate-y-1 hover:border-white"
          >
            Join as Provider
          </Link>

        </div>

      </div>
    </section>
  );
}
