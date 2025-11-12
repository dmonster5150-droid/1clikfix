import React from "react";

export default function Subscription() {
  const handleSubscribe = () => {
    window.open("https://1clikfixsquare.square.site/", "_blank");
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl text-red-600 font-bold mb-4">Subscribe to Access</h2>
      <p className="text-gray-300 mb-6">
        Providers must subscribe before accessing the job listings and calendar.
      </p>

      <button onClick={handleSubscribe} className="btn-primary">
        Subscribe via Square
      </button>
    </div>
  );
}
