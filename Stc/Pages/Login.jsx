import React from 'react'
import { useAuth } from '../authProvider'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const { loginWithGoogle } = useAuth()
  const nav = useNavigate()

  async function goGoogle(){
    try{
      await loginWithGoogle()
      nav('/')
    }catch(err){
      alert('Sign in failed: '+err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign in</h2>
      <p className="mb-4">Continue with Google to save your bookings.</p>
      <button onClick={goGoogle} className="w-full border py-2 rounded">Continue with Google</button>
    </div>
  )
}
