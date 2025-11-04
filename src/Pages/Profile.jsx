import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider.jsx";
import { db } from "../firebase/firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function Profile(){
  const { user } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const selectedJob = loc.state?.job || null;

  const [name, setName] = useState(user?.displayName || "");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  async function submit(e){
    e.preventDefault();
    if(!user){ nav('/login'); return; }
    await addDoc(collection(db, 'clients'), { uid:user.uid, name, phone, dob, createdAt: new Date().toISOString() });
    nav('/booking', { state: { job: selectedJob } });
  }

  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Client Profile</h2>
      <form onSubmit={submit} className="space-y-3">
        <label className="block">Full name<input required value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 border rounded" /></label>
        <label className="block">Phone<input required value={phone} onChange={e=>setPhone(e.target.value)} className="w-full p-2 border rounded" /></label>
        <label className="block">Date of birth<input type="date" value={dob} onChange={e=>setDob(e.target.value)} className="w-full p-2 border rounded" /></label>
        <div className="flex justify-end">
          <button className="bg-redbrand text-white px-4 py-2 rounded">Save & Continue</button>
        </div>
      </form>
    </div>
  );
}
