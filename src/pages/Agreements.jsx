import React from "react";

export default function Agreements() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-red-600 text-center">
        User Agreements & Disclosure
      </h2>
      <p className="text-gray-700 mb-4">
        By using 1ClikFix, you agree that your contact information will only be
        shared with verified service providers after both parties confirm and
        sign disclosure terms. Our goal is to protect your privacy and ensure
        trustworthy transactions.
      </p>
      <button
        onClick={() => alert('Agreement accepted!')}
        className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
      >
        Accept & Continue
      </button>
    </div>
  );
}
