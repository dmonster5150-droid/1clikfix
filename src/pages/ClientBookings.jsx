import React, { useState } from "react";
import { useAuth } from "../auth/AuthProvider.jsx";
import { db } from "../firebase/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ClientBooking(){
  const { user } = useAuth();
  const nav = useNavigate();
  const [form,setForm] = useState({ serviceName:"", description:"", date:"", time:"", price:"" });

  const submit = async (e)=>{
    e.preventDefault();
    if(!user) return alert("Please sign in and create profile first");
    try{
      await addDoc(collection(db,"jobs"), {
        clientId: user.uid,
        clientName: user.displayName || "",
        serviceName: form.serviceName,
        description: form.description,
        date: form.date,
        time: form.time,
        price: form.price,
        status: "open",
        createdAt: new Date()
      });
      alert("Job request submitted");
      nav("/client-jobs");
    }catch(err){ alert(err.message) }
  };

  return (
    <div className="container" style={{maxWidth:720}}>
      <form onSubmit={submit} className="card">
        <h2>Describe the job</h2>
        <input placeholder="Service (e.g., Handyman - Broken step)" value={form.serviceName} onChange={e=>setForm({...form,serviceName:e.target.value})} required />
        <textarea placeholder="Details" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
        <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required />
        <input type="time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})} required />
        <input placeholder="Your budget or price willing to pay" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} />
        <button type="submit">Submit Job Request</button>
      </form>
    </div>
  );
}
