import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

export default function Calendar(){
  const [jobs,setJobs]=useState([])

  useEffect(()=>{
    const q = query(collection(db,'bookings'), orderBy('createdAt','desc'))
    const unsub = onSnapshot(q, snap=> setJobs(snap.docs.map(d=>({id:d.id, ...d.data()}))))
    return ()=>unsub()
  },[])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Jobs Calendar</h2>
      {jobs.length===0? <p>No jobs yet</p> : (
        <ul className="space-y-3">
          {jobs.map(j=>(
            <li key={j.id} className="bg-white p-4 rounded shadow">
              <strong>{j.service}</strong> — {j.date}
              <div className="text-sm text-gray-500">{j.desc}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
