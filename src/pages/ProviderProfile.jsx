// src/pages/ProviderProfile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../auth/AuthProvider.jsx";

export default function ProviderProfile(){
  const { user } = useAuth();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    businessName: "",
    fullName: "",
    dob: "",
    phone: "",
    email: "",
    skill: "",
    experienceYears: "",
    vehicle: false,
    tools: false,
    speaksEnglish: true,
    certification: "",
    notes: ""
  });
  const [photoFile, setPhotoFile] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    if(type === "checkbox"){
      setForm(prev => ({ ...prev, [name]: checked }));
    } else if(type === "file"){
      setPhotoFile(files[0] || null);
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    // require subscription + minimal fields
    if(!form.fullName || !form.phone || !form.skill){
      return alert("Please fill name, phone and skill category.");
    }
    setLoading(true);
    try {
      // prepare provider doc
      const doc = {
        uid: user?.uid || null,
        businessName: form.businessName || null,
        fullName: form.fullName,
        dob: form.dob || null,
        phone: form.phone,
        email: form.email || null,
        skill: form.skill,
        experienceYears: form.experienceYears || null,
        vehicle: form.vehicle,
        tools: form.tools,
        speaksEnglish: form.speaksEnglish,
        certification: form.certification || null,
        notes: form.notes || null,
        verified: false,
        createdAt: serverTimestamp()
      };

      // save to Firestore 'providers' collection
      await addDoc(collection(db, "providers"), doc);

      // NOTE: photo upload & verification flow can be added later (storage + admin review)
      setLoading(false);
      alert("Profile submitted. You will be contacted after verification.");
      nav("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Failed to submit profile: " + (err.message || err));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={submit} className="w-full max-w-2xl bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Provider Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input required name="businessName" placeholder="Business Name (optional)"
                 value={form.businessName} onChange={handleChange}
                 className="p-2 border rounded" />

          <input required name="fullName" placeholder="Full Name"
                 value={form.fullName} onChange={handleChange}
                 className="p-2 border rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <input name="dob" type="date" value={form.dob} onChange={handleChange} className="p-2 border rounded" />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="p-2 border rounded" />
          <input name="email" type="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} className="p-2 border rounded" />
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <select required name="skill" value={form.skill} onChange={handleChange} className="p-2 border rounded">
            <option value="">Select Primary Skill</option>
            <option value="handyman">Handyman</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="painting">Painting</option>
            <option value="yard">Yard / Landscaping</option>
            <option value="carpentry">Carpentry</option>
            <option value="hvac">HVAC</option>
          </select>

          <input name="experienceYears" type="number" min="0" placeholder="Years of experience"
                 value={form.experienceYears} onChange={handleChange} className="p-2 border rounded" />
        </div>

        <div className="mt-3 flex gap-3 items-center">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="vehicle" checked={form.vehicle} onChange={handleChange} />
            <span>Reliable vehicle</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="tools" checked={form.tools} onChange={handleChange} />
            <span>Have required tools</span>
          </label>
          <label className="flex items-center gap-2 ml-2">
            <input type="checkbox" name="speaksEnglish" checked={form.speaksEnglish} onChange={handleChange} />
            <span>Speaks English</span>
          </label>
        </div>

        <div className="mt-3">
          <input name="certification" placeholder="Certifications (if any)" value={form.certification} onChange={handleChange} className="p-2 border rounded w-full" />
        </div>

        <div className="mt-3">
          <textarea name="notes" placeholder="Additional notes or skills" value={form.notes} onChange={handleChange} className="p-2 border rounded w-full" rows="4"></textarea>
        </div>

        <div className="mt-3">
          <label className="block">Upload profile image (optional)</label>
          <input name="photo" type="file" accept="image/*" onChange={handleChange} />
        </div>

        <div className="mt-4 flex justify-end">
          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
            {loading ? "Submitting..." : "Submit Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
