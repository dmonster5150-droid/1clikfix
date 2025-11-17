import React, {useState, useEffect} from "react";

export default function ProviderProfile(){
  const [profile, setProfile] = useState(()=>JSON.parse(localStorage.getItem('providerProfile')||'{}'));

  function save(){
    localStorage.setItem('providerProfile', JSON.stringify(profile));
    alert('Saved');
  }

  if(!localStorage.getItem('subscriptionPaid')) return <div className="card"><p>Please subscribe first.</p></div>

  return (
    <div className="card">
      <h1>Your Profile</h1>
      <div className="form-row"><input className="input" value={profile.name||''} onChange={e=>setProfile({...profile,name:e.target.value})} placeholder="Name"/></div>
      <div className="form-row"><input className="input" value={profile.email||''} onChange={e=>setProfile({...profile,email:e.target.value})} placeholder="Email"/></div>
      <div style={{marginTop:12}}><button onClick={save} className="button">Save</button></div>
    </div>
  );
}
