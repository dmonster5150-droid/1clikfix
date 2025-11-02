import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.desc}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">${(job.price/100).toFixed(2)}</div>
          <div className="text-xs text-gray-400">est.</div>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <Link to="/profile" state={{ job }} className="text-white bg-redbrand px-3 py-1 rounded">Select Job</Link>
      </div>
    </div>
  );
}
