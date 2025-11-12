import React from "react";
import { Link } from "react-router-dom";

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Client Portal</h2>
      <p className="text-gray-400 mb-8">
        Create your profile and submit your service request to be connected with trusted providers.
      </p>

      <div className="space-y-4 w-full max-w-xs">
        <Link
          to="/profile"
          className="block bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold"
        >
          Create Profile
        </Link>

        <Link
          to="/jobform"
          className="block bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold"
        >
          Submit Job Request
        </Link>

        <Link
          to="/disclosures"
          className="block bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold"
        >
          View Disclosures / Agreements
        </Link>
      </div>
    </div>
  );
}
