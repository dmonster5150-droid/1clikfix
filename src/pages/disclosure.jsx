import React from "react";

export default function Disclosures() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h2 className="text-2xl text-red-500 font-bold mb-6">Legal Disclosures & Agreements</h2>

      <div className="max-w-3xl bg-gray-900 p-6 rounded-lg leading-relaxed space-y-4 text-gray-300">
        <p>
          By submitting a job request through 1clikfix.com, you acknowledge that you are
          engaging independent contractors, not employees, and agree to hold 1clikfix.com
          harmless for any damages, losses, or disputes arising from service completion.
        </p>

        <p>
          All users agree to our Terms of Service, Privacy Policy, and any applicable local laws.
          Providers must maintain active subscription status to receive job notifications.
        </p>

        <p>
          Any misuse, false job requests, or fraudulent subscriptions may result in immediate
          suspension of access.
        </p>

        <p className="text-gray-400 italic">
          — 1clikfix.com Administration
        </p>
      </div>
    </div>
  );
}
