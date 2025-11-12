import React, { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function JobForm() {
  const [job, setJob] = useState({ title: "", description: "", location: "", price: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return alert("Please log in or create a profile first.");
    setLoading(true);
    try {
      await addDoc(collection(db, "jobs"), {
        ...job,
        clientId: auth.currentUser.uid,
        status: "open",
        createdAt: serverTimestamp(),
      });
      alert("Job posted.");
      setJob({ title: "", description: "", location: "", price: "" });
    } catch (err) {
      console.error(err);
      alert("Error creating job: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto card">
      <h2 className="text-xl font-bold mb-3 text-brandRed">Post a Job</h2>
      <input required name="title" placeholder="Title" value={job.title} onChange={(e)=>setJob({...job, title: e.target.value})} className="w-full p-2 rounded bg-gray-800" />
      <textarea required name="description" placeholder="Description" value={job.description} onChange={(e)=>setJob({...job, description: e.target.value})} className="w-full p-2 rounded bg-gray-800 my-2" />
      <input required name="location" placeholder="Location" value={job.location} onChange={(e)=>setJob({...job, location: e.target.value})} className="w-full p-2 rounded bg-gray-800" />
      <input name="price" placeholder="Offered price" value={job.price} onChange={(e)=>setJob({...job, price: e.target.value})} className="w-full p-2 rounded bg-gray-800 my-2" />
      <button type="submit" disabled={loading} className="btn btn-primary w-full">{loading ? "Posting..." : "Post Job"}</button>
    </form>
  );
}
