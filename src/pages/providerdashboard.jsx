import React, { useEffect, useState } from "react";
import { subscribeToJobs, updateJobStatus } from "../firebase/firestoreJobs";
import { auth } from "../firebase/firebaseConfig";

export default function ProviderDashboard() {
  const [jobs, setJobs] = useState([]);
  const providerId = auth.currentUser?.uid;

  useEffect(() => {
    if (!providerId) return;
    const unsub = subscribeToJobs(providerId, setJobs);
    return () => unsub();
  }, [providerId]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-4">
        Provider Dashboard
      </h1>

      {jobs.length === 0 ? (
        <p className="text-gray-400">No jobs yet.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="p-4 bg-gray-900 rounded-lg flex justify-between"
            >
              <div>
                <p className="text-lg">{job.description}</p>
                <p className="text-sm text-gray-500">Status: {job.status}</p>
              </div>
              {job.status === "pending" && (
                <button
                  onClick={() => updateJobStatus(job.id, "accepted")}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg"
                >
                  Accept
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
