import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Agreements(){
  const [accepted,setAccepted] = useState(false);
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if(!accepted) return alert("You must accept the terms");
    nav("/client-booking");
  };

  return (
    <div className="container" style={{maxWidth:720}}>
      <form onSubmit={submit} className="card">
        <h2>User Disclosures & Agreements</h2>
        <div style={{background:'#fafafa', padding:12, borderRadius:8, marginBottom:12}}>
          <p>By booking through 1clikfix.com you consent to share your name and phone number with the provider once they accept the job. Cancellation fees may apply. Providers are independent contractors; 1ClikFix is not responsible for work quality — please verify provider credentials. Providers must comply with local codes and be licensed where required.</p>
        </div>

        <label><input type="checkbox" checked={accepted} onChange={(e)=>setAccepted(e.target.checked)} /> I have read and agree to the terms</label>
        <br />
        <button type="submit">Continue to Booking</button>
      </form>
    </div>
  );
}
