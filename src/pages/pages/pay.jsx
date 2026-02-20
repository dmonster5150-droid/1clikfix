
import { use_effect } from "react";

export default function pay(){

  use_effect(()=>{

    window.location.href =
    "https://square.link/u/your_live_payment_link";

  },[]);

  return null;

}
