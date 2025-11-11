import React from "react";
import { Link } from "react-router-dom";

export default function SubscriptionPrompt() {
  return (
    <div className="bg-dark text-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">🔒 Access Restricted</h1>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        You need an active provider subscription to view or manage job listings.
      </p>
      <Link
        to="/subscribe"
        className="px-6 py-3 bg-primary rounded hover:bg-red-700"
      >
        Subscribe Now
      </Link>
    </div>
  );
}
