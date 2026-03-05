import React from "react";

export default function Calendar() {
  return (
    <div className="p-8 text-white bg-dark min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Provider Job Calendar</h1>
      <p className="text-gray-400">Available job listings and scheduled appointments will appear here.</p>
      <p className="mt-6">
        🔒 Providers must be subscribed to view active job listings.
      </p>
    </div>
  );
} { ispai duser } from "../lib/paymentlock"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
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
