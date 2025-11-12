import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function JobForm() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "jobs"), job);
      alert("Job submitted successfully!");
      setJob({ title: "", description: "", location: "" });
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl text-red-500 font-bold mb-4">Submit a Job Request</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 h-24"
          required
        ></textarea>
        <input
          type="text"
          name="location"
          placeholder="Job Location"
          value={job.location}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
}
