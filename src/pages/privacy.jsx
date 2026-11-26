
import { Link } from "react-router-dom";

const privacySections = [
  {
    title: "Our Privacy Commitment",
    content:
      "1ClikFix aims to collect only the personal information reasonably necessary to operate, maintain and improve its service platform. Our intended policy is not to sell personal information."
  },
  {
    title: "Account Information",
    content:
      "Account registration may involve collecting your name, email address and authentication information. Customers may also provide an optional phone number for service coordination."
  },
  {
    title: "Service Request Information",
    content:
      "Service requests may include service categories, descriptions, appointment preferences, general service locations and information necessary to coordinate requested services."
  },
  {
    title: "Authentication",
    content:
      "1ClikFix uses Firebase Authentication to support account registration and sign-in. Users should maintain the confidentiality of their account credentials."
  },
  {
    title: "Information Storage",
    content:
      "Platform account information, customer profiles, bookings and service requests may be stored using Firebase and Cloud Firestore infrastructure."
  },
  {
    title: "How Information Is Used",
    content:
      "Personal information may be used to manage accounts, process service requests, coordinate appointments, maintain platform functionality, provide customer support and address security concerns."
  },
  {
    title: "Service Provider Access",
    content:
      "The intended provider access model limits customer information to details reasonably necessary for authorized service coordination. Provider access controls must be established before marketplace activation."
  },
  {
    title: "Payment Information",
    content:
      "The platform is intended to use third-party payment processing services, including Square. Payment-related information may be processed according to the applicable payment provider's privacy practices."
  },
  {
    title: "Third-Party Services",
    content:
      "1ClikFix uses or intends to use technology providers for website hosting, authentication, database infrastructure and payment processing. These services may process information necessary to provide their respective functions."
  },
  {
    title: "Sale and Sharing of Information",
    content:
      "Our intended policy is not to sell personal information. Information disclosures to service providers, infrastructure partners or legally authorized recipients must be evaluated and accurately described before public launch."
  },
  {
    title: "Cookies and Browser Storage",
    content:
      "The platform may use browser storage and related technologies to maintain authentication sessions and support website functionality. Additional tracking technologies, if introduced, must be disclosed as applicable."
  },
  {
    title: "Data Protection",
    content:
      "1ClikFix aims to implement appropriate authentication, database access restrictions and security practices. No online system can guarantee absolute protection against every security risk."
  },
  {
    title: "Data Retention",
    content:
      "Personal information should be retained only as reasonably necessary for legitimate operational purposes, applicable legal obligations, transaction records and dispute resolution. Specific retention periods remain to be established."
  },
  {
    title: "Your Privacy Rights",
    content:
      "Depending on applicable law, users may have rights to access, correct or delete personal information and exercise other privacy protections. Procedures for submitting and verifying privacy requests must be established before launch."
  },
  {
    title: "California Privacy Rights",
    content:
      "California residents may have additional privacy rights under applicable California laws. The applicability of these requirements and the necessary consumer request procedures remain subject to legal review."
  },
  {
    title: "Children's Privacy",
    content:
      "The platform is not intended for independent use by children. Final age eligibility requirements and procedures for handling children's information must be established before public launch."
  },
  {
    title: "Protecting Sensitive Information",
    content:
      "Users should not submit passwords, payment card numbers, government identification numbers, access codes or unnecessary sensitive personal information through general service request forms."
  },
  {
    title: "Privacy Policy Updates",
    content:
      "The finalized Privacy Policy will include an effective date and version number. Material changes to information handling practices must be communicated as required by applicable law."
  }
];

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-12 text-white">

      <div className="mx-auto max-w-4xl">

        {/* Privacy center introduction */}
        <header className="mb-10 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-500">
            1ClikFix Privacy & Data Protection
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Privacy{" "}
            <span className="text-red-500">
              Policy
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            Understanding how personal information
            is collected, used, managed and protected
            within the 1ClikFix platform.
          </p>

        </header>

        {/* Privacy principles */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">

          {[
            {
              icon: "🔒",
              title: "Data Protection",
              description: "Responsible information handling."
            },
            {
              icon: "🛡️",
              title: "Privacy First",
              description: "Collect only necessary information."
            },
            {
              icon: "👤",
              title: "User Control",
              description: "Respect applicable privacy rights."
            }
          ].map((item) => (

            <article
              key={item.title}
              className="rounded-2xl border border-gray-800 bg-[#171717] p-6 text-center"
            >

              <span
                className="text-3xl"
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <h2 className="mt-4 font-bold">
                {item.title}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                {item.description}
              </p>

            </article>

          ))}

        </div>

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
              <dd className="font-semibold">
                Privacy Policy
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

        {/* Preliminary document notice */}
        <section className="mb-8 rounded-2xl border border-yellow-900 bg-[#201b10] p-6">

          <h2 className="font-bold text-yellow-400">
            Important Privacy Notice
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            This preliminary policy is under development.
            Actual information handling practices,
            privacy request procedures and applicable
            legal requirements must be verified before
            public launch.
          </p>

        </section>

        {/* Table of contents */}
        <nav
          aria-label="Privacy Policy contents"
          className="mb-10 rounded-2xl border border-gray-800 bg-[#171717] p-6"
        >

          <h2 className="mb-5 text-xl font-bold">
            Table of Contents
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">

            {privacySections.map((section, index) => (

              <a
                key={section.title}
                href={`#privacy-${index + 1}`}
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

        {/* Privacy policy sections */}
        <div className="space-y-5">

          {privacySections.map((section, index) => (

            <article
              key={section.title}
              id={`privacy-${index + 1}`}
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

        {/* Privacy commitment */}
        <section className="mt-10 rounded-2xl border border-gray-800 bg-gradient-to-br from-[#211111] to-[#171717] p-6 sm:p-8">

          <p className="text-xs font-bold uppercase tracking-widest text-red-400">
            The 1ClikFix Standard
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Your Information Matters.
          </h2>

          <p className="mt-4 leading-relaxed text-gray-400">
            Our objective is to develop a responsible
            service platform that respects personal
            information, promotes transparency and
            supports appropriate privacy protections.
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
            Privacy Policy — Draft Version 0.1
          </p>

        </footer>

      </div>

    </main>
  );
}
