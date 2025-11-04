import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider.jsx";
import { db } from "../firebase/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Booking(){
  const { user } = useAuth();
  const loc = useLocation();
  const job = loc.state?.job || null;
  const nav = useNavigate();

  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);

  async function submit(e){
    e.preventDefault();
    if(!user){ nav('/login'); return; }
    if(!consent) return alert('You must agree to disclosure to proceed.');
    await addDoc(collection(db, 'bookings'), {
      userId: user.uid,
      jobId: job?.id || null,
      jobTitle: job?.title || 'Custom job',
      address, date, notes,
      price: job?.price || null,
      status: 'open',
      createdAt: serverTimestamp()
    });
    nav('/client-dashboard');
  }

  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Booking Details</h2>
      <p className="text-sm text-gray-600 mb-4">Job: <strong>{job?.title || 'Custom'}</strong></p>
      <form onSubmit={submit} className="space-y-3">
        <label>Address<input required value={address} onChange={e=>setAddress(e.target.value)} className="w-full p-2 border rounded" /></label>
        <label>Date & Time<input required type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} className="w-full p-2 border rounded" /></label>
        <label>Job details<textarea value={notes} onChange={e=>setNotes(e.target.value)} className="w-full p-2 border rounded" /></label>
        <label className="flex items-start gap-2 mt-2">
          <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} />
          <span className="text-sm">I consent to sharing my name and phone number with providers only after a provider accepts the job and completes agreements.</span>
        </label>
        <div className="flex justify-end">
          <button className="bg-redbrand text-white px-4 py-2 rounded">Continue to Disclosure</button>
        </div>
      </form>
    </div>
  );
}
