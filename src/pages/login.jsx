
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials or network issue.");
    }
  };

  return (
    <div className="bg-dark text-white min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-grayish p-8 rounded-xl w-80 flex flex-col gap-4 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="p-2 rounded bg-dark border border-gray-700 focus:outline-none"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 rounded bg-dark border border-gray-700 focus:outline-none"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary py-2 rounded text-white hover:bg-red-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
