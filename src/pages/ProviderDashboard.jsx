
import React, { useState } from "react";

const demoJobs = [
  { id: 1, title: "Fix Kitchen Faucet", client: "John D.", status: "Open" },
  { id: 2, title: "Mount TV", client: "Sarah K.", status: "Accepted" },
  { id: 3, title: "Install Ceiling Fan", client: "Mike L.", status: "Completed" },
];

export default function ProviderDashboard() {
  const [jobs, setJobs] = useState(demoJobs);

  const updateStatus = (id, status) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, status } : job)));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
        Provider Dashboard
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Manage your accepted jobs, update statuses, and track progress.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-lg p-4 border-l-4"
            style={{
              borderColor:
                job.status === "Completed"
                  ? "green"
                  : job.status === "Accepted"
                  ? "blue"
                  : "gray",
            }}
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">Client: {job.client}</p>
            <p
              className={`font-semibold ${
                job.status === "Completed"
                  ? "text-green-600"
                  : job.status === "Accepted"
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Status: {job.status}
            </p>
            <div className="mt-3 flex gap-2">
              {job.status === "Open" && (
                <button
                  onClick={() => updateStatus(job.id, "Accepted")}
                  className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                >
                  Accept
                </button>
              )}
              {job.status === "Accepted" && (
                <button
                  onClick={() => updateStatus(job.id, "Completed")}
                  className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
                >
                  Mark Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
