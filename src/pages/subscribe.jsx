import React from "react";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white">
      <h1 className="text-3xl font-bold mb-6">Subscribe to 1clikfix</h1>
      <p className="text-gray-300 mb-10 max-w-md text-center">
        Providers must have an active subscription to access the job listings and calendar.
      </p>
      <a
        href="https://1clikfixsquare.square.site/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-primary rounded-xl hover:bg-red-700 transition"
      >
        Go to Square Subscription
      </a>
    </div>
  );
}
