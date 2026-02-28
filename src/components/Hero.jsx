export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">

        {/* Tagline */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
          Built for modern service professionals
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          The Smart Way To
          <br />
          <span className="text-red-600">Book & Manage Services</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Connect clients with verified providers. 
          Secure payments. Instant scheduling. 
          Everything handled in one streamlined platform.
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="/clients"
            className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-2xl text-lg font-semibold transition transform hover:-translate-y-1 shadow-xl"
          >
            Book a Service
          </a>

          <a
            href="/providers"
            className="border border-gray-700 hover:border-white px-10 py-4 rounded-2xl text-lg font-semibold transition transform hover:-translate-y-1"
          >
            Join as Provider
          </a>

        </div>

      </div>
    </section>
  )
}
