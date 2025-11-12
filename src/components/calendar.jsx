import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function Calendar() {
  const [myJobs, setMyJobs] = useState([]);
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    const q = query(collection(db, "jobs"), where("providerId", "==", user.uid));
    const unsub = onSnapshot(q, (snap) => {
      setMyJobs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  return (
    <div>
      <h2 className="text-2xl text-brandRed font-bold mb-4">Calendar (simple list)</h2>
      {myJobs.length === 0 ? <p className="text-gray-400">No scheduled jobs.</p> :
        <ul className="space-y-3">
          {myJobs.map(j => (
            <li key={j.id} className={`card ${j.status === 'completed' ? 'opacity-70' : ''}`}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{j.title}</h3>
                  <p className="text-gray-300">{j.location}</p>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <div>{j.date || "No date"}</div>
                  <div>{j.status}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
