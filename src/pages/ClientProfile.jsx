import React, { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function ClientProfile(){
  const { user } = useAuth();
  const [form,setForm] = useState({ name:"", phone:"", address:"" });

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
      <form onSubmit={save}>
        <h2>Client Profile</h2>
        <input name="name" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
        <input name="address" placeholder="Project address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
