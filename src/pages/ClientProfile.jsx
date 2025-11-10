import React, { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthProvider.jsx";
import { db } from "../firebase/firebase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function ClientProfile(){
  const { user } = useAuth();
  const [form,setForm] = useState({ name:"", phone:"", address:"" });

  useEffect(()=>{
    if(!user) return;
    (async ()=>{
      const snap = await getDoc(doc(db,"clients",user.uid));
      if(snap.exists()) setForm(snap.data());
    })();
  },[user]);

  const save = async (e) => {
    e.preventDefault();
    if(!user) return alert("Please sign in");
    try {
      await setDoc(doc(db, "clients", user.uid), {
        uid: user.uid,
        name: form.name,
        phone: form.phone,
        address: form.address,
        updatedAt: new Date()
      });
      alert("Profile saved");
    } catch(err){ alert(err.message) }
  };

  return (
    <div className="container" style={{maxWidth:660}}>
      <form onSubmit={save} className="card">
        <h2>Client Profile</h2>
        <input name="name" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
        <input name="address" placeholder="Project address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} required />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
