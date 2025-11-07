import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import { useAuth } from "../auth/AuthProvider.jsx";

export default function JobListings() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "jobs"), where("status", "==", "open"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setJobs(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, []);

  const acceptJob = async (jobId) => {
    try {
      const jobRef = doc(db, "jobs", jobId);
      await updateDoc(jobRef, { status: "assigned", providerId: user.uid, providerName: user.displayName || "Provider" });
      alert("Job accepted. Client contact will be revealed after agreements.");
    } catch (e) { console.error(e); alert("Error accepting job"); }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Available Jobs</h1>
      {jobs.length===0 ? <p className="text-center text-gray-500">No open jobs</p> :
      <div className="grid sm:grid-cols-2 gap-4">
        {jobs.map(j => (
          <div key={j.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{j.serviceName}</h3>
            <p className="text-sm text-gray-600">Location: {j.location}</p>
            <p className="text-sm text-gray-600">Price: ${j.price}</p>
            <div className="mt-3"><button onClick={()=>acceptJob(j.id)} className="w-full bg-green-600 text-white py-2 rounded">Accept Job</button></div>
          </div>
        ))}
      </div>}
    </div>
  );
}
