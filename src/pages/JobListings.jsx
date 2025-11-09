import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase.js";
import { collection, query, where, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../auth/AuthProvider.jsx";

export default function JobListings(){
  const { user } = useAuth();
  const [jobs,setJobs] = useState([]);

  useEffect(()=>{
    const q = query(collection(db,"jobs"), where("status","==","open"));
    const unsub = onSnapshot(q, snap => setJobs(snap.docs.map(d=>({id:d.id, ...d.data()}))));
    return () => unsub();
  },[]);

  const accept = async (jobId) => {
    try {
      const ref = doc(db,"jobs",jobId);
      await updateDoc(ref, { status: "assigned", providerId: user.uid, providerName: user.displayName || "" });
      alert("Job accepted! Client details available after acceptance.");
    } catch(err){ alert(err.message) }
  };

  return (
    <div className="container">
      <h2>Available Jobs</h2>
      {jobs.length===0 ? <p>No open jobs now.</p> : (
        <div>
          {jobs.map(j=>(
            <div key={j.id} className="card" style={{marginBottom:12}}>
              <h3>{j.serviceName}</h3>
              <p>{j.description}</p>
              <p>Location: {j.location || "Client provided"}</p>
              <p>Price: {j.price || "TBD"}</p>
              <button onClick={()=>accept(j.id)}>Accept Job</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
