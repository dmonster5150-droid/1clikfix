import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
      <footer className="text-center text-sm text-gray-500 py-8">© 2025 1ClikFix</footer>
    </div>
  )
}
