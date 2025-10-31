import React from 'react'
import { Link } from 'react-router-dom'

const services=['Plumbing','Electrical','Carpentry','Painting','Yard Work','General Maintenance','Appliance Repair']

export default function Jobs(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Choose a service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s=> (
          <div key={s} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{s}</h3>
            <p className="text-sm text-gray-500 mt-2">Quick description for {s}.</p>
            <div className="mt-4"><Link to="/book" state={{service:s}} className="text-primary font-semibold">Book {s}</Link></div>
          </div>
        ))}
      </div>
    </div>
  )
}
