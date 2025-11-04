import React from "react";

const demoEvents = [
  { id:1, job: "TV Mounting", date: "2025-11-05 10:00 AM", client: "Sarah K." },
  { id:2, job: "Plumbing Repair", date: "2025-11-06 1:30 PM", client: "John D." }
];

export default function Calendar(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Jobs Calendar</h2>
      <div className="space-y-3">
        {demoEvents.map(ev=> (
          <div key={ev.id} className="bg-white p-3 rounded shadow">
            <div className="font-semibold">{ev.job}</div>
            <div className="text-sm text-gray-500">{ev.date} • {ev.client}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
