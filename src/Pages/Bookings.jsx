import React, { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    location: "",
    time: "",
    details: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! Our team will contact you soon.");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
        Job Booking Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="location"
          placeholder="Job Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="datetime-local"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="details"
          placeholder="Special instructions..."
          value={form.details}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
