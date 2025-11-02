import React from "react";
import JobCard from "../components/JobCard.jsx";

// sample job/pricing list (updateable)
const JOBS = [
  { id:'j1', title:'Basic Handyman - Small repairs', desc:'Small repairs around the home', price: 4999 },
  { id:'j2', title:'Plumbing - Minor', desc:'Leaks, faucet replacements', price: 6999 },
  { id:'j3', title:'Electrical - Minor', desc:'Switches, outlets', price: 7999 },
  { id:'j4', title:'Yard Work', desc:'Mow, trim, debris removal', price: 3999 },
  { id:'j5', title:'Painting - Patch & touch', desc:'Small painting jobs', price: 5999 }
];

export default function Client(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Clients</h2>
      <p className="mb-6 text-gray-600">Here at 1ClikFix we aim to satisfy clients with trusted handymen. Choose a job category and price below, then create a profile to continue.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {JOBS.map(j=> <JobCard job={j} key={j.id} />)}
      </div>
    </div>
  );
}
