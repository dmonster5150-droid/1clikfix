import React from "react";

export default function Calendar() {
  return (
    <div className="p-8 text-white bg-dark min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Provider Job Calendar</h1>
      <p className="text-gray-400">Available job listings and scheduled appointments will appear here.</p>
      <p className="mt-6">
        🔒 Providers must be subscribed to view active job listings.
      </p>
    </div>
  );
}
