export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-24 text-center">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Book Trusted Service Providers
          <br />
          <span className="text-red-600">In One Click</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Fast scheduling. Verified professionals. Secure payments.
          Everything you need to fix it — without the hassle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="/clients"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition transform hover:-translate-y-1"
          >
            I Need a Service
          </a>

          <a
            href="/providers"
            className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition transform hover:-translate-y-1"
          >
            I Am a Provider
          </a>

        </div>

      </div>

    </section>
  )
}
