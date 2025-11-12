import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import JobCard from "./JobCard";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOpenJobs = async () => {
    setLoading(true);
    const q = query(collection(db, "jobs"), where("status", "==", "open"));
    const snap = await getDocs(q);
    setJobs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(false);
  };

  useEffect(()=>{ fetchOpenJobs(); }, []);

  const acceptJob = async (id) => {
    if (!auth.currentUser) return alert("Log in as provider to accept.");
    try {
      await updateDoc(doc(db, "jobs", id), { status: "accepted", providerId: auth.currentUser.uid });
      alert("Job accepted.");
      fetchOpenJobs();
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  };

  if (loading) return <div className="p-4">Loading jobs...</div>;
  if (jobs.length===0) return <div className="p-4 text-gray-400">No open jobs at the moment.</div>;

  return (
    <div className="space-y-3">
      {jobs.map(job => <JobCard key={job.id} job={job} onAccept={acceptJob} />)}
    </div>
  );
}
