import { db, auth } from "../firebase";
import { collection, query, where, get_docs } from "firebase/firestore";
import { use_state, use_effect } from "react";

export default function provider_payouts(){

  const [payouts,set_payouts] = use_state([]);

  use_effect(()=>{

    async function load(){

      const q =
      query(
        collection(db,"payments"),
        where("provider","==",auth.current_user.email)
      );

      const snap = await get_docs(q);

      set_payouts(
        snap.docs.map(doc=>doc.data())
      );

    }

    load();

  },[]);

  return(

    <div>

      {payouts.map((p,i)=>(

        <div key={i}>

          ${p.amount}

        </div>

      ))}

    </div>

  );

}
