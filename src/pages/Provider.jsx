import React from "react";
import { Link } from "react-router-dom";

export default function Provider(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Service Providers</h2>
      <p className="text-gray-600 mb-4">Providers must subscribe and be verified. After subscribing you'll register your business and be able to pick jobs from the calendar.</p>
      <div className="flex gap-3">
        <Link to="/subscribe" className="bg-redbrand text-white px-4 py-2 rounded">Subscribe</Link>
        <Link to="/provider-dashboard" className="border px-4 py-2 rounded">Provider Dashboard</Link>
      </div>
    </div>
  );
}
