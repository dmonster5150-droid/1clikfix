import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-extrabold">Book a Handyman with <span className="text-primary">1clikfix</span></h1>
        <p className="mt-4 text-gray-600 max-w-lg">Fast, vetted handymen — submit a job and get it scheduled quickly.</p>
        <div className="mt-6 flex gap-4">
          <Link to="/book" className="bg-blackish text-white px-6 py-3 rounded-lg font-semibold">Book a Fix</Link>
          <Link to="/provider-login" className="border px-6 py-3 rounded-lg text-gray-700">Provider Login</Link>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="h-80 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-xl font-bold shadow-xl">Trusted Handymen</div>
      </div>
    </section>
  )
}
