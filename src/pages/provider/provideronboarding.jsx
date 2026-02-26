import { useState, useEffect } from "react";
import { ispai duser } from "../lib/paymentlock"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom" { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ProviderOnboarding() {
  const [skillLevel, setSkillLevel] = useState("");
  const [over18, setOver18] = useState(false);
  const [agree, setAgree] = useState(false);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  async function handleSubmit() {
    if (!skillLevel || !over18 || !agree) return alert("All fields required");
    setSaving(true);

    await setDoc(doc(db, "providers", user.uid), {
      uid: user.uid,
      email: user.email,
      skillLevel,
      approved: false,
      createdAt: Date.now(),
    });

    navigate("/provider-dashboard");
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Provider Setup</h1>
      <p>Payment confirmed. Complete your onboarding below:</p>

      <label>Skill Level</label>
      <select value={skillLevel} onChange={e => setSkillLevel(e.target.value)}>
        <option value="">Choose...</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Professional">Professional</option>
      </select>

      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={over18}
          onChange={() => setOver18(!over18)}
        /> I confirm I am 18+
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
        /> I agree to the provider terms of service
      </label>

      <br /><br />

      <button disabled={saving} onClick={handleSubmit}>
        {saving ? "Saving..." : "Finish Setup"}
      </button>
    </div>
  );
} React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

export default function ProviderOnboarding(){
  const nav = useNavigate();
  const query = useQuery();
  const paid = query.get('paid') === 'true' || localStorage.getItem('subscriptionPaid') === 'true';
  const [profile, setProfile] = useState({name:'', email:'', phone:'', business:'', skills:'', hasTools:false});
  const [agreed, setAgreed] = useState(false);

  useEffect(()=>{
    if(!paid){
      // not paid — send to subscribe page
      nav('/provider-subscribe');
    } else {
      // mark as paid (in case redirect used)
      localStorage.setItem('subscriptionPaid', 'true');
    }
  },[]);

  function submit(e){
    e.preventDefault();
    if(!agreed){ alert('You must accept the provider agreement'); return; }
    // Save provider profile locally — replace with Firestore code later
    const providers = JSON.parse(localStorage.getItem('providers')||'[]');
    providers.push({...profile, id: Date.now()});
    localStorage.setItem('providers', JSON.stringify(providers));
    localStorage.setItem('providerProfile', JSON.stringify(profile));
    alert('Profile saved. Redirecting to dashboard.');
    nav('/provider-dashboard');
  }

  return (
    <div className="card">
      <h1>Provider Onboarding</h1>
      <p className="small">We confirm payment and collect your provider details & agreements.</p>

      <form onSubmit={submit}>
        <div className="form-row"><input className="input" placeholder="Full name" value={profile.name} onChange={e=>setProfile({...profile,name:e.target.value})} required/></div>
        <div className="form-row"><input className="input" placeholder="Email" value={profile.email} onChange={e=>setProfile({...profile,email:e.target.value})} required/></div>
        <div className="form-row"><input className="input" placeholder="Phone" value={profile.phone} onChange={e=>setProfile({...profile,phone:e.target.value})} required/></div>
        <div className="form-row"><input className="input" placeholder="Business name (optional)" value={profile.business} onChange={e=>setProfile({...profile,business:e.target.value})}/></div>
        <div className="form-row"><input className="input" placeholder="Skills (comma separated)" value={profile.skills} onChange={e=>setProfile({...profile,skills:e.target.value})} required/></div>
        <div className="form-row">
          <label><input type="checkbox" checked={profile.hasTools} onChange={e=>setProfile({...profile,hasTools:e.target.checked})}/> I have tools and a reliable vehicle</label>
        </div>

        <div className="card">
          <h3>Provider Agreement & Disclosures</h3>
          <p className="small">By checking accept you agree to arrive on time, comply with codes, complete the job and accept the listed payment. Cancellation fee is $50 if you cancel after accepting a job.</p>
          <label style={{display:'block', marginTop:8}}><input type="checkbox" checked={agreed} onChange={e=>setAgreed(e.target.checked)}/> I accept the provider agreement</label>
        </div>

        <button className="button" type="submit">Complete Onboarding</button>
      </form>
    </div>
  );
}
