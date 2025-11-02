import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase.js";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function CalendarPage(){
  const [jobs, setJobs] = useState([]);
  useEffect(()=>{
    const q = query(collection(db, 'bookings'), orderBy('date','desc'));
    const unsub = onSnapshot(q, snap => setJobs(snap.docs.map(d=>({ id:d.id, ...d.data() }))));
    return ()=> unsub();
  },[]);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Jobs Calendar</h2>
      {jobs.length===0 ? <p>No scheduled jobs.</p> : (
        <ul className="space-y-3">
          {jobs.map(j=> (
            <li key={j.id} className="bg-white p-3 rounded shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{j.jobTitle}</div>
                  <div className="text-sm text-gray-500">{j.address}</div>
                </div>
                <div className="text-right">
                  <div>{j.date}</div>
                  <div className="text-sm">{j.status}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
