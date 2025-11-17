import React from "react";
import { Link } from "react-router-dom";

export default function Landing(){
  return (
    <div>
      <div className="card">
        <h1>Welcome to 1clikfixx</h1>
        <p className="small">Choose an option to continue</p>
        <div style={{marginTop:12}}>
          <Link className="button" to="/client">I need a service</Link>
          <Link className="button ghost" style={{marginLeft:12}} to="/provider-subscribe">I am a provider</Link>
          <Link className="button ghost" style={{marginLeft:12}} to="/client/book">Sign In</Link>
        </div>
      </div>
      <div className="card">
        <h2>How it works</h2>
        <ul>
          <li>Clients post jobs → pick a date and price</li>
          <li>Providers subscribe, view calendar of jobs, accept work</li>
          <li>Providers must subscribe before calendar access</li>
        </ul>
      </div>
    </div>
  );
}
