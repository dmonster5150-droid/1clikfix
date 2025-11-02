import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthProvider.jsx";
import { db } from "../firebase/firebase.js";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function ClientDashboard(){
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(()=>{
    if(!user) return;
    const q = query(collection(db,'bookings'), where('userId','==', user.uid));
    const unsub = onSnapshot(q, snap => setBookings(snap.docs.map(d=>({ id:d.id, ...d.data() }))));
    return ()=> unsub();
  },[user]);

  if(!user) return <p>Please sign in to see your bookings.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Your Bookings</h2>
      {bookings.length===0 ? <p>No bookings yet.</p> : bookings.map(b=>(
        <div key={b.id} className="bg-white p-3 rounded shadow mb-3">
          <div><strong>{b.jobTitle}</strong> • {b.date}</div>
          <div className="text-sm text-gray-500">{b.address}</div>
          <div className="mt-2">Status: <strong>{b.status}</strong></div>
        </div>
      ))}
    </div>
  );
}
