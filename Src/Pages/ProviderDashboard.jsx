import React from 'react'

export default function ProviderDashboard(){
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Provider Dashboard</h2>
      <p>Welcome, provider. Upcoming jobs and bookings will appear here after subscription and verification.</p>
      <div className="mt-4 space-y-3">
        <div className="p-3 border rounded">Sample job card — client: Jane Doe — Plumbing — 2025-11-01</div>
      </div>
    </div>
  )
}
