
import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";

export default function Register() {
  const [params] = useSearchParams();
  const type = params.get("type");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password, name } = form;
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        name,
        email,
        role: type || "client",
        subscribed: false,
      });
      navigate("/dashboard");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-dark text-white min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="bg-grayish p-8 rounded-xl w-80 flex flex-col gap-4 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">
          {type === "provider" ? "Provider Registration" : "Client Registration"}
        </h2>

        <input
          className="p-2 rounded bg-dark border border-gray-700 focus:outline-none"
          type="text"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="p-2 rounded bg-dark border border-gray-700 focus:outline-none"
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="p-2 rounded bg-dark border border-gray-700 focus:outline-none"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="bg-primary py-2 rounded text-white hover:bg-red-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
