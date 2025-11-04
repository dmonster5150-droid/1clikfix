import React, { useState } from "react";

const demoJobs = [
  { id: 1, title: "Fix Kitchen Faucet", client: "John D.", status: "Open" },
  { id: 2, title: "Mount TV", client: "Sarah K.", status: "Accepted" },
  { id: 3, title: "Install Ceiling Fan", client: "Mike L.", status: "Completed" },
];

export default function ProviderDashboard(){
  const [jobs, setJobs] = useState(demoJobs);

  const updateStatus = (id, status) => setJobs(jobs.map(j=> j.id===id ? { ...j, status } : j));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Provider Dashboard</h2>
      <div className="grid gap-3">
        {jobs.map(job=> (
          <div key={job.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{job.title}</div>
              <div className="text-sm text-gray-500">Client: {job.client}</div>
            </div>
            <div className="text-right">
              <div className="mb-2">{job.status}</div>
              {job.status === 'Open' && <button onClick={()=>updateStatus(job.id,'Accepted')} className="bg-blue-600 text-white px-3 py-1 rounded">Accept</button>}
              {job.status === 'Accepted' && <button onClick={()=>updateStatus(job.id,'Completed')} className="bg-green-600 text-white px-3 py-1 rounded">Complete</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
