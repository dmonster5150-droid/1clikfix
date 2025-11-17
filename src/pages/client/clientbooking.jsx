import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function ClientBooking(){
  const [form,setForm] = useState({name:'',phone:'',email:'',address:'',jobDesc:'',date:''});
  const nav = useNavigate();

  function submit(e){
    e.preventDefault();
    // store job locally for now
    const jobs = JSON.parse(localStorage.getItem('clientJobs')||'[]');
    jobs.push({...form, id: Date.now()});
    localStorage.setItem('clientJobs', JSON.stringify(jobs));
    alert('Job saved. Providers will see this when they sign in (after subscription).');
    nav('/');
  }

  return (
    <div className="card">
      <h1>Describe the job</h1>
      <form onSubmit={submit}>
        <div className="form-row"><input className="input" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
        <div className="form-row"><input className="input" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required/></div>
        <div className="form-row"><input className="input" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/></div>
        <div className="form-row"><input className="input" placeholder="Address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} required/></div>
        <div className="form-row"><textarea rows="4" className="input" placeholder="Job details" value={form.jobDesc} onChange={e=>setForm({...form,jobDesc:e.target.value})} required/></div>
        <div className="form-row"><input type="date" className="input" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required/></div>
        <button className="button" type="submit">Save & Submit</button>
      </form>
    </div>
  );
}
