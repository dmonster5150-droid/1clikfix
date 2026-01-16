import React from "react";
import { Link } from "react-router-dom";

const demoJobs = [
  { id:'j1', title: 'Fix leaky faucet', price: 50 },
  { id:'j2', title: 'Replace outlet', price: 80 },
  { id:'j3', title: 'Patch drywall', price: 120 },
  { id:'j4', title: 'Cabinet repair', price: 100 }
];

export default function ClientLanding(){
  return (
    <div>
      <div className="card">
        <h1>Clients — Book a handyman</h1>
        <p className="small">Select a job from the list then create a profile to continue.</p>
        <div className="grid" style={{marginTop:12}}>
          {demoJobs.map(j=>(
            <div key={j.id} className="card">
              <h3>{j.title}</h3>
              <p className="small">Estimated price: ${j.price}</p>
              <Link to="/client/book" className="button">Select</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
