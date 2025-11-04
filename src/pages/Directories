import React from "react";
import JobCard from "../components/JobCard.jsx";
import { DEMO_JOBS } from "../data/demoJobs.js";

export default function Client(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Clients</h2>
      <p className="mb-6 text-gray-600">Here at 1ClikFix we aim to satisfy clients with trusted handymen. Choose a job category and price below, then create a profile to continue.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {DEMO_JOBS.map(j=> <JobCard job={j} key={j.id} />)}
      </div>
    </div>
  );
}
