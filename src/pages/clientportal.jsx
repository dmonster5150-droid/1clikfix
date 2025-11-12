import React from "react";
import { useNavigate } from "react-router-dom";

export default function ClientPortal() {
  const navigate = useNavigate();

  const jobs = [
    { name: "Basic Handyman Service", price: "$75/hr" },
    { name: "Appliance Installation", price: "$120" },
    { name: "Plumbing Repair", price: "$150" },
    { name: "Electrical Work", price: "$180" },
  ];

  return (
    <div>
      <h2 className="text-2xl text-red-600 font-bold mb-4">
        Client Portal — Find Trusted Pros
      </h2>
      <p className="text-gray-300 mb-6">
        At 1clikfix we aim to satisfy our clients with easily available, trusted professionals.
      </p>

      <div className="space-y-3 mb-6">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="card flex justify-between items-center text-white"
          >
            <span>{job.name}</span>
            <span className="text-red-400">{job.price}</span>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/profile")} className="btn-primary">
        Create Your Profile to Continue
      </button>
    </div>
  );
}
