import React from 'react'
import { Link } from 'react-router-dom'

export default function ProviderLogin(){
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Provider login</h2>
      <p className="mb-4">Providers must subscribe and be verified before accessing jobs.</p>
      <Link to="/provider" className="bg-primary text-white px-4 py-2 rounded">Enter Provider Dashboard (placeholder)</Link>
    </div>
  )
}
