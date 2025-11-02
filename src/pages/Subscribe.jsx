import React from "react";

export default function Subscribe(){
  // This is a placeholder. For real payments use the Netlify server function to create Square payment link.
  function goPay(){
    alert('This will open the Square payment link (placeholder).');
    // In production: POST to /.netlify/functions/createPaymentLink
  }

  return (
    <div className="max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-3">Provider Subscription</h2>
      <p className="text-gray-600 mb-4">Subscribe for $20.99 to access provider dashboard and job calendar.</p>
      <button onClick={goPay} className="bg-redbrand text-white px-4 py-2 rounded">Pay $20.99 (Sandbox)</button>
      <p className="text-xs text-gray-400 mt-3">Note: This button is a placeholder for Square integration.</p>
    </div>
  );
}
