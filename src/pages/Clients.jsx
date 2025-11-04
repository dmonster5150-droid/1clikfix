import React from "react";
import { useNavigate } from "react-router-dom";

const jobs = [
  { name: "Furniture Assembly", price: "$60/hr" },
  { name: "TV Mounting", price: "$80/hr" },
  { name: "Light Fixture Installation", price: "$100/hr" },
  { name: "Plumbing Repair", price: "$120/hr" },
  { name: "Painting & Drywall", price: "$90/hr" },
  { name: "General Maintenance", price: "$70/hr" },
];

export default function Client() {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        Our Trusted Handyman Services
      </h1>
      <p className="text-gray-700 mb-6">
        Here at <span className="font-semibold">1ClikFix</span>, we aim to
        satisfy our clients with easily available, trusted professionals that
        specialize in handyman and home repair services.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {jobs.map((job) => (
          <div
            key={job.name}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-blue-700">{job.name}</h2>
            <p className="text-gray-600">{job.price}</p>
            <button
              onClick={() => navigate("/profile")}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Choose Job
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/booking")}
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700"
      >
        Go to Booking
      </button>
    </div>
  );
}
