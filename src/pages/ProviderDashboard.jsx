import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase.js";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function ProviderDashboard(){
  const [jobs, setJobs] = useState([]);

  useEffect(()=> {
    const q = query(collection(db,'bookings'));
    const unsub = onSnapshot(q, snap => {
      setJobs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return ()=> unsub();
  },[]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Provider Dashboard</h2>
      <p className="text-gray-600 mb-4">Available jobs (accept a job to see client contact info after agreement)</p>
      <div className="space-y-3">
        {jobs.length===0 ? <p>No jobs yet.</p> : jobs.map(j=>(
          <div key={j.id} className="bg-white p-3 rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{j.jobTitle}</div>
                <div className="text-sm text-gray-500">{j.address} • {j.date}</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{j.price ? `$${(j.price/100).toFixed(2)}` : ''}</div>
                <button className="mt-2 bg-primary text-white px-3 py-1 rounded">Accept</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
