import React from "react";

export default function ProviderPortal() {
  const jobs = [
    { title: "Client: John D. — Faucet Leak", location: "Houston, TX" },
    { title: "Client: Sarah M. — Ceiling Fan Install", location: "Dallas, TX" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Provider Dashboard
      </h2>
      <p className="text-gray-300 mb-4">
        You must have an active subscription to access full job details.
      </p>

      <div className="space-y-3">
        {jobs.map((job, i) => (
          <div key={i} className="card">
            <h3 className="text-lg">{job.title}</h3>
            <p className="text-gray-400">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
