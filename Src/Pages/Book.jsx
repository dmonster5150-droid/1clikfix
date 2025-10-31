import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../authProvider'

export default function Book(){
  const loc = useLocation()
  const preset = loc.state?.service || ''
  const [service,setService]=useState(preset)
  const [date,setDate]=useState('')
  const [desc,setDesc]=useState('')
  const { user } = useAuth()
  const nav = useNavigate()

  useEffect(()=>{ if(preset) setService(preset) },[preset])

  async function submit(e){
    e.preventDefault()
    if(!user){ alert('Please sign in'); nav('/login'); return }
    if(!service||!date) return alert('Pick service and date')
    await addDoc(collection(db,'bookings'),{ userId:user.uid, service, date, desc, status:'pending', createdAt: serverTimestamp() })
    nav('/calendar')
  }

  return (
    <div className="max-w-2xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Book a Service</h2>
      <form onSubmit={submit} className="space-y-4">
        <label className="block text-sm">Service</label>
        <input value={service} onChange={e=>setService(e.target.value)} className="w-full p-2 border rounded" />
        <label className="block text-sm">Date</label>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full p-2 border rounded" />
        <label className="block text-sm">Details</label>
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} className="w-full p-2 border rounded" />
        <button className="bg-blackish text-white px-4 py-2 rounded">Confirm Booking</button>
      </form>
    </div>
  )
}
