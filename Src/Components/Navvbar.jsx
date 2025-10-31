import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div>
          <div className="text-2xl font-black text-blackish">1clikfix</div>
          <div className="text-sm text-gray-500">Book a handyman with 1clikfix</div>
        </div>
        <nav className="flex items-center gap-3">
          <Link to="/" className="text-sm">Home</Link>
          <Link to="/book" className="text-sm">Book</Link>
          <Link to="/calendar" className="text-sm">Calendar</Link>
          <Link to="/provider-login" className="text-sm">Provider</Link>
          <Link to="/login" className="bg-primary text-white px-3 py-1 rounded font-semibold">Sign in</Link>
        </nav>
      </div>
    </header>
  )
}
