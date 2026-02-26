import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProviderDashboard() {
  const nav = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('subscriptionPaid') !== 'true') {
      nav('/provider-subscribe');
      return;
    }
    const j = JSON.parse(localStorage.getItem('clientJobs') || '[]');
    setJobs(j);
  }, []);

  function accept(job) {
    if (!confirm('Do you accept this job and its listed payment and agree to the provider terms?')) return;
    const accepted = {
      ...job,
      acceptedBy: (JSON.parse(localStorage.getItem('providerProfile') || '{}')).name || 'Provider',
      acceptedAt: new Date().toISOString()
    };
    const acceptedJobs = JSON.parse(localStorage.getItem('acceptedJobs') || '[]');
    acceptedJobs.push(accepted);
    localStorage.setItem('acceptedJobs', JSON.stringify(acceptedJobs));
    const all = JSON.parse(localStorage.getItem('clientJobs') || '[]').filter(j => j.id !== job.id);
    localStorage.setItem('clientJobs', JSON.stringify(all));
    setJobs(all);
    alert('Job accepted. Client contact is visible in accepted jobs list.');
  }

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
                <p className="text-lg">{job.jobDesc || job.description}</p>
                <p className="text-sm text-gray-500">Date: {job.date || 'N/A'}</p>
              </div>
              <button
                onClick={() => accept(job)}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg"
              >
                Accept
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
