import React, { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthProvider.jsx";
import { db } from "../firebase/firebase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function ProviderProfile(){
  const { user } = useAuth();
  const [form,setForm] = useState({
    businessName:"", fullName:"", phone:"", skill:"", experienceYears:"", vehicle:false, tools:false, speaksEnglish:true, certification:""
  });

  useEffect(()=>{ if(!user) return;
    (async ()=>{
      const snap = await getDoc(doc(db,"providers",user.uid));
      if(snap.exists()) setForm(snap.data());
    })();
  },[user]);

  const save = async (e)=>{
    e.preventDefault();
    if(!user) return alert("Sign in first");
    await setDoc(doc(db,"providers",user.uid), { ...form, uid:user.uid, verified:false, updatedAt:new Date() });
    alert("Profile saved and pending verification.");
  };

  return (
    <div className="container" style={{maxWidth:720}}>
      <form onSubmit={save} className="card">
        <h2>Provider Profile</h2>
        <input placeholder="Business name (optional)" value={form.businessName} onChange={e=>setForm({...form,businessName:e.target.value})} />
        <input placeholder="Full name" value={form.fullName} onChange={e=>setForm({...form,fullName:e.target.value})} required />
        <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required/>
        <select value={form.skill} onChange={e=>setForm({...form,skill:e.target.value})} required>
          <option value="">Select skill</option>
          <option value="handyman">Handyman</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="painting">Painting</option>
        </select>
        <input type="number" placeholder="Years of experience" value={form.experienceYears} onChange={e=>setForm({...form,experienceYears:e.target.value})} />
        <label><input type="checkbox" checked={form.vehicle} onChange={e=>setForm({...form,vehicle:!form.vehicle})} /> Reliable vehicle</label>
        <label><input type="checkbox" checked={form.tools} onChange={e=>setForm({...form,tools:!form.tools})} /> Have necessary tools</label>
        <label><input type="checkbox" checked={form.speaksEnglish} onChange={e=>setForm({...form,speaksEnglish:!form.speaksEnglish})} /> Speaks English</label>
        <input placeholder="Certifications" value={form.certification} onChange={e=>setForm({...form,certification:e.target.value})} />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
