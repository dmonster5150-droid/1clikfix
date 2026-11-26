
import { Link } from "react-router-dom";

const disclosures = [
  {
    number: "01",
    title: "Platform Overview",
    content:
      "1ClikFix is a technology platform designed to connect customers with independent service providers and facilitate service requests, appointment scheduling and service management."
  },
  {
    number: "02",
    title: "Independent Service Providers",
    content:
      "Service providers are intended to operate as independent businesses or contractors. Providers are responsible for the services they perform and their applicable professional obligations. Legal classification depends on applicable law and the actual working relationship."
  },
  {
    number: "03",
    title: "Licensing and Compliance",
    content:
      "Service providers are responsible for obtaining and maintaining any licenses, permits, certifications and insurance required for their services under applicable local, state and federal laws."
  },
  {
    number: "04",
    title: "Service Requests and Availability",
    content:
      "Submitting a service request or requesting an appointment does not guarantee provider availability, acceptance, pricing or completion of the requested service."
  },
  {
    number: "05",
    title: "Pricing and Payments",
    content:
      "Customers should review applicable service charges, fees and payment terms before authorizing a transaction. Submitting a service request alone does not authorize a payment."
  },
  {
    number: "06",
    title: "Customer Responsibilities",
    content:
      "Customers should provide accurate service information, communicate respectfully and avoid submitting passwords, financial credentials or unnecessary sensitive personal information through service request forms."
  },
  {
    number: "07",
    title: "Service Concerns and Disputes",
    content:
      "Customers and providers should document service concerns and communicate through appropriate support channels. Applicable consumer protections and legal rights remain in effect."
  },
  {
    number: "08",
    title: "Privacy and Account Security",
    content:
      "Users should protect their account credentials and report suspected unauthorized account activity. Information collection, use and retention must be addressed in the platform's Privacy Policy."
  },
  {
    number: "09",
    title: "Applicable Legal Rights",
    content:
      "Nothing in these preliminary disclosures is intended to waive consumer protections, statutory rights or obligations that cannot legally be waived."
  }
];

export default function Disclosures() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-12 text-white">

      <div className="mx-auto max-w-4xl">

        {/* Legal center introduction */}
        <div className="mb-10 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
            1ClikFix Trust & Transparency
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Legal{" "}
            <span className="text-red-500">
              Center
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            Understand our platform, service relationships,
            responsibilities and important disclosures.
          </p>

        </div>

        {/* Document status */}
        <div className="mb-8 rounded-2xl border border-yellow-900 bg-[#201b10] p-6">

          <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
            Document Status
          </p>

          <h2 className="mt-3 text-xl font-bold">
            Preliminary Disclosures
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            These disclosures are under development
            and pending legal review. They are not
            a finalized Terms of Service agreement.
          </p>

          <p className="mt-4 text-xs text-gray-400">
            Draft version: 0.1
          </p>

        </div>

        {/* Document heading */}
        <div className="mb-6">

          <h2 className="text-2xl font-bold">
            Platform Disclosures & Agreements
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Important information for customers
            and service providers.
          </p>

        </div>

        {/* Disclosure sections */}
        <div className="space-y-4">

          {disclosures.map((section) => (

            <article
              key={section.number}
              className="rounded-2xl border border-gray-800 bg-[#171717] p-6 sm:p-8"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-900 bg-red-950/50 text-sm font-bold text-red-400">
                  {section.number}
                </div>

                <div className="min-w-0">

                  <h3 className="text-lg font-bold sm:text-xl">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {section.content}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* Transparency statement */}
        <section className="mt-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-[#211111] to-[#171717] p-6 sm:p-8">

          <p className="text-xs font-bold uppercase tracking-widest text-red-400">
            Our Commitment
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Building With Transparency
          </h2>

          <p className="mt-4 leading-relaxed text-gray-400">
            Our goal is to build a professional service
            platform that promotes clear communication,
            responsible service practices and respect
            for customers and independent providers.
          </p>

        </section>

        {/* Navigation */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <Link
            to="/"
            className="rounded-xl border border-gray-700 bg-[#171717] px-6 py-4 text-center font-semibold transition hover:border-red-500"
          >
            Return to Home
          </Link>

          <Link
            to="/booking"
            className="rounded-xl bg-red-700 px-6 py-4 text-center font-bold text-white transition hover:bg-red-600"
          >
            Explore Services
          </Link>

        </div>

        <footer className="mt-10 border-t border-gray-800 pt-6 text-center">

          <p className="font-bold text-red-500">
            1ClikFix
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Professional Service Management
          </p>

          <p className="mt-3 text-xs text-gray-500">
            Trust • Transparency • Accountability
          </p>

        </footer>

      </div>

    </main>
  );
}
