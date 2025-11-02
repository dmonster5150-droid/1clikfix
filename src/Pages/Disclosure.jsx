import React from "react";
import { useNavigate } from "react-router-dom";

export default function Disclosure(){
  const nav = useNavigate();

  function agree(){
    // agreement accepted — show confirmation and route to dashboard
    alert('You accepted the terms.');
    nav('/client-dashboard');
  }

  return (
    <div className="max-w-3xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Disclosure & User Agreement</h2>
      <div className="text-sm text-gray-700 space-y-3 mb-4">
        <p>By booking, you consent to share your contact details with providers only after they accept the job. Providers agree to follow local codes and show proper certification for specialized work. 1ClikFix is a platform connecting clients and providers; payments and on-site work are between client and provider.</p>
        <p>Cancellation fee: $50 if provider cancels after accepting a job.</p>
        <p>Please read all terms carefully.</p>
      </div>
      <div className="flex justify-end">
        <button onClick={agree} className="bg-redbrand text-white px-4 py-2 rounded">Agree & Submit</button>
      </div>
    </div>
  );
}
