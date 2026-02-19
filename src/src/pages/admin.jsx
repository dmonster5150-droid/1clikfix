import { useState } from "react";

export default function Admin(){

const [pass,setPass]=useState("");

const correct="mike123"; // change this

if(pass===correct){

return(

<div>

<h1>Admin Access Granted</h1>

<a href="/provider-dashboard">Dashboard</a>

<br/>

<a href="/provider-onboarding">Onboarding</a>

</div>

);

}

return(

<div>

<h2>Enter Owner Password</h2>

<input

type="password"

onChange={(e)=>setPass(e.target.value)}

/>

</div>

);

}
