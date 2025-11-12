import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ role = "client" }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect according to role after login
        if (role === "provider") navigate("/provider-dashboard");
        else navigate("/client-dashboard");
      } else {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        // Create a profile document
        if (role === "provider") {
          await setDoc(doc(db, "providers", userCred.user.uid), { email, subscribed: false });
          navigate("/subscribe");
        } else {
          await setDoc(doc(db, "clients", userCred.user.uid), { email });
          navigate("/client-dashboard");
        }
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-xl font-bold mb-4 text-brandRed">
        {role === "provider" ? "Provider" : "Client"} {isLogin ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 rounded bg-gray-800" required />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-2 rounded bg-gray-800" required />
        <button type="submit" className="btn btn-primary w-full">{isLogin ? "Login" : "Create account"}</button>
      </form>
      <div className="text-sm text-gray-400 mt-3">
        <button onClick={()=>setIsLogin(!isLogin)} className="underline">{isLogin ? "Create account" : "Have an account? Login"}</button>
      </div>
    </div>
  );
}
