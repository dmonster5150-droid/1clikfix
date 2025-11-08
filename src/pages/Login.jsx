import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login(){
  const nav = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleEmail = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      nav("/");
    } catch (err) {
      alert("Google sign-in failed: " + err.message);
    }
  };

  return (
    <div className="container" style={{maxWidth:520, marginTop:24}}>
      <form onSubmit={handleEmail}>
        <h2>Sign in to 🧰 1clikfix.com</h2>
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <div style={{display:'flex', gap:10}}>
          <button type="submit">Sign in</button>
          <button type="button" onClick={handleGoogle} className="secondary">Sign in with Google</button>
        </div>
      </form>
    </div>
  );
}
