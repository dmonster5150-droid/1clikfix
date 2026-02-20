import { auth } from "../firebase";
import { owner_email } from "../owner";
import { use_navigate } from "react-router-dom";
import { use_effect } from "react";

export default function owner_calendar(){

  const navigate = use_navigate();

  use_effect(()=>{

    if(auth.current_user?.email !== owner_email){

      navigate("/");

    }

  },[]);

  return(

    <iframe
      src="https://calendar.google.com"
      width="100%"
      height="800"
    />

  );

}
