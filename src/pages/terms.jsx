
import { Link } from "react-router-dom";

const terms = [
  {
    title: "Platform Purpose",
    content:
      "1ClikFix is a technology platform designed to facilitate connections between customers and independent service providers through service requests, appointment scheduling and service management tools."
  },
  {
    title: "Account Eligibility",
    content:
      "Users must be legally eligible to enter into applicable agreements and provide accurate account information. Users acting on behalf of a business must have appropriate authorization."
  },
  {
    title: "Account Responsibilities",
    content:
      "Users are responsible for maintaining the confidentiality of their account credentials, providing accurate information and reporting suspected unauthorized account activity."
  },
  {
    title: "Acceptable Use",
    content:
      "Users must not engage in fraudulent activity, harassment, impersonation, unlawful conduct, unauthorized access, malicious software distribution or interference with platform operations."
  },
  {
    title: "Customer Responsibilities",
    content:
      "Customers must provide accurate service descriptions, communicate respectfully and review applicable service details before accepting an appointment or authorizing a transaction."
  },
  {
    title: "Independent Service Providers",
    content:
      "Service providers are intended to operate independently and are responsible for their professional services, qualifications and applicable legal obligations. Their legal classification depends on applicable law and the actual working relationship."
  },
  {
    title: "Provider Qualifications",
    content:
      "Providers are responsible for maintaining applicable licenses, permits, certifications and insurance required for the services they offer. Any platform verification requirements must be communicated separately."
  },
  {
    title: "Service Requests and Bookings",
    content:
      "Submitting a job request or appointment request does not guarantee provider availability, acceptance or completion. Service arrangements remain subject to applicable confirmation procedures."
  },
  {
    title: "Pricing and Service Charges",
    content:
      "Applicable prices, service charges and platform fees should be disclosed before a customer authorizes a transaction. Additional charges must be communicated and authorized as required by applicable law."
  },
  {
    title: "Payment Processing",
    content:
      "Payments may be processed through authorized third-party payment services. Payment authorization, processing and confirmation are subject to applicable transaction terms and verified payment records."
  },
  {
    title: "Subscriptions and Memberships",
    content:
      "Any subscription offering must clearly disclose its price, billing frequency, renewal conditions, cancellation procedures and included benefits before enrollment."
  },
  {
    title: "Cancellations and Refunds",
    content:
      "Applicable cancellation, rescheduling and refund conditions must be communicated before a transaction is authorized. Nothing in these preliminary terms limits mandatory consumer refund or cancellation rights."
  },
  {
    title: "Privacy and Personal Information",
    content:
      "The collection, use, protection and retention of personal information must be addressed in the platform's Privacy Policy. Users should avoid sharing unnecessary sensitive information through service requests."
  },
  {
    title: "Intellectual Property",
    content:
      "Users must respect applicable intellectual property rights and must not upload or distribute material that they are not authorized to use. Ownership and permitted use of platform materials remain subject to applicable law."
  },
  {
    title: "Platform Availability",
    content:
      "Platform features may experience interruptions, maintenance periods or technical limitations. Service availability and functionality may change as the platform develops."
  },
  {
    title: "Account Restrictions",
    content:
      "Account access may be restricted when reasonably necessary to address fraud, security threats, unlawful conduct or serious violations of applicable platform policies, subject to legal requirements."
  },
  {
    title: "Service Concerns and Disputes",
    content:
      "Customers and providers should document service concerns and use appropriate communication and support channels. Applicable legal remedies and consumer protections remain available."
  },
  {
    title: "Applicable Law and Legal Rights",
    content:
      "Platform operations and service relationships are subject to applicable laws. Nothing in these preliminary terms is intended to waive rights or protections that cannot legally be waived."
  },
  {
    title: "Changes to Terms",
    content:
      "Finalized terms should include an effective date and version number. Material changes must be communicated to affected users, with renewed acceptance obtained where required."
  }
];

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-12 text-white">

      <div className="mx-auto max-w-4xl">

        {/* Page introduction */}
        <header className="mb-10 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
            1ClikFix Legal Center
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Terms of{" "}
            <span className="text-red-500">
              Service
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            Understanding the responsibilities,
            expectations and conditions associated
            with using the 1ClikFix platform.
          </p>

        </header>

        {/* Document information */}
        <section className="mb-8 rounded-2xl border border-gray-800 bg-[#171717] p-6">

          <h2 className="mb-5 text-xl font-bold">
            Document Information
          </h2>

          <dl className="space-y-4 text-sm">

            <div className="flex justify-between gap-4">
              <dt className="text-gray-400">
                Document
              </dt>
              <dd className="text-right font-semibold">
                Terms of Service
              </dd>
            </div>

            <div className="flex justify-between gap-4">
              <dt className="text-gray-400">
                Version
              </dt>
              <dd className="font-semibold">
                0.1
              </dd>
            </div>

            <div className="flex justify-between gap-4">
              <dt className="text-gray-400">
                Effective Date
              </dt>
              <dd className="font-semibold">
                Not yet effective
              </dd>
            </div>

            <div className="flex justify-between gap-4">
              <dt className="text-gray-400">
                Status
              </dt>
              <dd className="font-semibold text-yellow-400">
                Preliminary Draft
              </dd>
            </div>

          </dl>

        </section>

        {/* Legal review notice */}
        <div className="mb-8 rounded-2xl border border-yellow-900 bg-[#201b10] p-6">

          <h2 className="font-bold text-yellow-400">
            Important Notice
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            This document is a preliminary framework
            under development and pending professional
            legal review. It is not currently presented
            as a finalized or binding user agreement.
          </p>

        </div>

        {/* Table of contents */}
        <nav
          aria-label="Terms of Service contents"
          className="mb-10 rounded-2xl border border-gray-800 bg-[#171717] p-6"
        >

          <h2 className="mb-5 text-xl font-bold">
            Table of Contents
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">

            {terms.map((section, index) => (

              <a
                key={section.title}
                href={`#section-${index + 1}`}
                className="flex items-center gap-3 rounded-lg border border-gray-800 bg-black p-3 text-sm text-gray-300 transition hover:border-red-500 hover:text-white"
              >

                <span className="font-bold text-red-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {section.title}

              </a>

            ))}

          </div>

        </nav>

        {/* Terms sections */}
        <div className="space-y-5">

          {terms.map((section, index) => (

            <article
              key={section.title}
              id={`section-${index + 1}`}
              className="scroll-mt-28 rounded-2xl border border-gray-800 bg-[#171717] p-6 sm:p-8"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-900 bg-red-950/50 text-sm font-bold text-red-400">

                  {String(index + 1).padStart(2, "0")}

                </div>

                <div className="min-w-0">

                  <h2 className="text-lg font-bold sm:text-xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {section.content}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* Platform commitment */}
        <section className="mt-10 rounded-2xl border border-gray-800 bg-gradient-to-br from-[#211111] to-[#171717] p-6 sm:p-8">

          <p className="text-xs font-bold uppercase tracking-widest text-red-400">
            The 1ClikFix Standard
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Professionalism. Transparency. Accountability.
          </h2>

          <p className="mt-4 leading-relaxed text-gray-400">
            Our objective is to develop a responsible
            service marketplace that respects customers,
            service providers and applicable legal rights.
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

        <footer className="mt-10 border-t border-gray-800 pt-8 text-center">

          <p className="text-xl font-bold text-red-500">
            1ClikFix
          </p>

          <p className="mt-3 text-xs text-gray-500">
            Professional Service Management
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Terms of Service — Draft Version 0.1
          </p>

        </footer>

      </div>

    </main>
  );
}
