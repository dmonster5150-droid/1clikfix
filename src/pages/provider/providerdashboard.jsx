import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function ProviderDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    async function verify() {
      const user = auth.currentUser;
      if (!user) return navigate("/login");

      const snap = await getDoc(doc(db, "providers", user.uid));
      if (!snap.exists()) return navigate("/provider-onboarding");

      if (!snap.data().approved) return navigate("/pending-approval");
    }

    verify();
  }, []); { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ProviderDashboard() {
  const [provider, setProvider] = useState(null);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return navigate("/login");

    const unsub = onSnapshot(doc(db, "providers", user.uid), snap => {
      setProvider(snap.data());
    });

    return () => unsub();
  }, []);

  if (!provider) return <h2>Loading dashboard...</h2>;

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Welcome Provider</h1>

      <p><b>Email:</b> {user.email}</p>
      <p><b>Skill Level:</b> {provider.skillLevel}</p>
      <p><b>Status:</b> {provider.approved ? "Approved" : "Pending Review"}</p>

      <br />

      <button>📋 View Available Jobs</button>
      <br /><br />
      <button>💰 Payment & Subscription</button>
      <br /><br />
      <button onClick={() => auth.signOut()}>Log Out</button>
    </div>
  );
} React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function ProviderDashboard(){
  const nav = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('subscriptionPaid') !== 'true'){
      nav('/provider-subscribe'); return;
    }
    const j = JSON.parse(localStorage.getItem('clientJobs')||'[]');
    setJobs(j);
  },[]);

  function accept(job){
    // require agreement
    if(!confirm('Do you accept this job and its listed payment and agree to the provider terms?')) return;
    // mark accepted and save contact visible (for demo we attach acceptedBy)
    const accepted = {...job, acceptedBy: (JSON.parse(localStorage.getItem('providerProfile')||'{}')).name || 'Provider', acceptedAt: new Date().toISOString()};
    const acceptedJobs = JSON.parse(localStorage.getItem('acceptedJobs')||'[]');
    acceptedJobs.push(accepted);
    localStorage.setItem('acceptedJobs', JSON.stringify(acceptedJobs));
    // remove from clientJobs
    const all = JSON.parse(localStorage.getItem('clientJobs')||'[]').filter(j=>j.id!==job.id);
    localStorage.setItem('clientJobs', JSON.stringify(all));
    setJobs(all);
    alert('Job accepted. Client contact is visible in accepted jobs list.');
  }

  return (
    <div>
      <div className="card">
        <h1>Provider Dashboard — Available Jobs</h1>
        <p className="small">Only visible to subscribed & onboarded providers.</p>
      </div>

      <div className="grid">
        {jobs.length === 0 && <div className="card">No jobs available currently.</div>}
        {jobs.map(job=>(
          <div key={job.id} className="card">
            <h3>{job.jobDesc || 'Job'}</h3>
            <p className="small">Date: {job.date || 'N/A'}</p>
            <p className="small">Offered by: {job.name} — {job.phone}</p>
            <button className="button" onClick={()=>accept(job)}>Accept job</button>
          </div>
        ))}
      </div>

      <div className="card" style={{marginTop:18}}>
        <h2>Accepted Jobs</h2>
        <div>
          { (JSON.parse(localStorage.getItem('acceptedJobs')||'[]')).map(a=>(
            <div key={a.id} style={{borderTop:'1px solid #eee', paddingTop:8, marginTop:8}}>
              <strong>{a.jobDesc}</strong><div className="small">Client: {a.name} {a.phone} — Address: {a.address}</div>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}
