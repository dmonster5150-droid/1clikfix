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
import { db } from "../firebase";
import { collection, get_docs } from "firebase/firestore";
import { use_state, use_effect } from "react";

export default function admin(){

  const [providers,set_providers] = use_state([]);

  use_effect(()=>{

    async function load(){

      const snap =
      await get_docs(collection(db,"providers"));

      set_providers(
        snap.docs.map(doc=>doc.data())
      );

    }

    load();

  },[]);

  return(

    <div>

      {providers.map((p,i)=>(

        <div key={i}>

          {p.name}

        </div>

      ))}

    </div>

  );

}
