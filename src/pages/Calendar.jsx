
import { useEffect,useState } from "react"
import { db } from "../firebase"
import { collection,getDocs } from "firebase/firestore"

export default function Calendar(){

const [bookings,setBookings]=useState([])

useEffect(()=>{

const load=async()=>{

const snap=await getDocs(collection(db,"bookings"))

setBookings(
snap.docs.map(d=>d.data())
)

}

load()

},[])

return(

<div>

<h2>calendar</h2>

{bookings.map((b,i)=>(

<div key={i}>

{b.date} — {b.time} — {b.service}

</div>

))}

</div>

)

}
