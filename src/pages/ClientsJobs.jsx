import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../auth/AuthProvider.jsx";

export default function ClientJobs(){
  const { user } = useAuth();
  const [jobs,setJobs] = useState([]);

  useEffect(()=> {
    if(!user) return;
    (async ()=>{
      const q = query(collection(db,"jobs"), where("clientId","==",user.uid));
      const snap = await getDocs(q);
      setJobs(snap.docs.map(d=>({id:d.id,...d.data()})));
    })();
  },[user]);

  return (
    <div className="container">
      <h2>My Job Requests</h2>
      {jobs.length===0 ? <p>No job requests yet.</p> : (
        jobs.map(j=>(
          <div key={j.id} className="card" style={{marginBottom:12}}>
            <h3>{j.serviceName}</h3>
            <p>{j.description}</p>
            <p>Status: {j.status}</p>
          </div>
        ))
      )}
    </div>
  );
}
