import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import JobForm from "./JobForm";

export default function ClientDashboard() {
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) { setLoading(false); return; }
    const q = query(collection(db, "jobs"), where("clientId", "==", user.uid));
    const unsub = onSnapshot(q, (snap) => {
      setMyJobs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl text-brandRed font-bold mb-4">Your Requests</h2>
      <JobForm />
      <div className="mt-6 space-y-3">
        {myJobs.length === 0 ? <p className="text-gray-400">No jobs yet.</p> :
          myJobs.map(j => (
            <div key={j.id} className="card">
              <h3 className="font-semibold">{j.title}</h3>
              <p className="text-gray-300">{j.description}</p>
              <p className="text-sm text-gray-400">Status: {j.status}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
