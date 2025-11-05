import React, { useState } from "react";

export default function ProviderProfile() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    skill: "",
    experience: "",
    photo: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Profile Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Your profile has been received and is pending verification.
          </p>
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create Your Provider Profile
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <select
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          >
            <option value="">Select Skill Category</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="hvac">HVAC</option>
            <option value="cleaning">Cleaning</option>
            <option value="handyman">Handyman</option>
            <option value="painting">Painting</option>
          </select>

          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-xl transition-all"
          >
            Submit Profile
          </button>
        </div>
      </form>
    </div>
  );
}
