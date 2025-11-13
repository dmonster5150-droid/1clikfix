import React, { useState } from "react";

export default function ProfileCreation() {
  const [form, setForm] = useState({ name: "", email: "", dob: "", phone: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile created successfully!");
  };

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-xl font-bold mb-4 text-red-600">Create Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 rounded bg-gray-800"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-800"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          className="w-full p-2 rounded bg-gray-800"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 rounded bg-gray-800"
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-primary w-full">
          Save Profile
        </button>
      </form>
    </div>
  );
}
