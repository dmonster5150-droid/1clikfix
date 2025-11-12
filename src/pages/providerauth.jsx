import React, { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ProviderAuth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "providers", userCredential.user.uid), {
          email,
          subscribed: false,
        });
        alert("Account created! Please subscribe to activate access.");
        navigate("/subscribe");
      }
    } catch (error) {
      alert("Authentication error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl text-red-500 font-bold mb-6">
        {isLogin ? "Provider Login" : "Register as Provider"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg w-full max-w-md space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-6 text-gray-400 underline"
      >
        {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
      </button>
    </div>
  );
}
