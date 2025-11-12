import React from "react";

export default function JobCard({ job, onAccept }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-300">{job.description}</p>
      <p className="text-sm text-gray-400">Location: {job.location} • Price: {job.price || "TBD"}</p>
      {onAccept && <button onClick={() => onAccept(job.id)} className="btn btn-primary mt-2">Accept Job</button>}
    </div>
  );
}
