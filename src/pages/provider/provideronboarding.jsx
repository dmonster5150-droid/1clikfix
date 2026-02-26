import React, {useEffect, useState} from "react";
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
