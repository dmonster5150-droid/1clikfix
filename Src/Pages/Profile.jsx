import React from 'react'
import { useAuth } from '../authProvider'

export default function Profile(){
  const { user, logout } = useAuth()
  if(!user) return <p>Please sign in</p>
  return (
    <div className="max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Profile</h2>
      <p className="mt-2">{user.displayName}</p>
      <p className="text-sm text-gray-500">{user.email}</p>
      <button onClick={logout} className="mt-4 border px-3 py-1 rounded">Logout</button>
    </div>
  )
}
