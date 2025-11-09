import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthProvider.jsx";
import { db } from "../firebase/firebase.js";
import { doc, getDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Calendar(){
  const { user } = useAuth();
  const [allowed,setAllowed] = useState(false);
  const [jobs,setJobs] = useState([]);
  const nav = useNavigate();

  useEffect(()=>{
    if(!user) return;
    (async ()=>{
      const sub = await getDoc(doc(db,"subscriptions",user.uid));
      if(!sub.exists() || !sub.data().active) { nav("/subscribe"); return; }
      setAllowed(true);

      const q = query(collection(db,"jobs"), where("providerId","==",user.uid));
      const unsub = onSnapshot(q, snap => setJobs(snap.docs.map(d=>({id:d.id, ...d.data()}))));
      return () => unsub();
    })();
  },[user,nav]);

  if(!allowed) return <p style={{padding:20}}>Checking subscription...</p>;

  return (
    <div className="container">
      <h2>Your Calendar & Assigned Jobs</h2>
      {jobs.length===0 ? <p>No jobs assigned yet.</p> : (
        <ul>
          {jobs.map(j=>(
            <li key={j.id} className="card" style={{marginBottom:12}}>
              <strong>{j.serviceName}</strong> — {j.date} {j.time} — Status: {j.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
