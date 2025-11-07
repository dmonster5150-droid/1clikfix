}
import React, { useState } from "react";
import { useAuth } from "../auth/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const { loginWithGoogle, loginWithEmail, signupWithEmail } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  async function goGoogle(){
    try { await loginWithGoogle(); nav('/'); } catch(e){ alert('Google sign-in failed'); }
  }
  async function doEmailSignIn(e){
    e.preventDefault();
    try { await loginWithEmail(email,pw); nav('/'); } catch(e){ alert('Email sign-in failed: '+e.message); }
  }
  async function doSignup(e){
    e.preventDefault();
    try { await signupWithEmail(email,pw); nav('/'); } catch(e){ alert('Signup failed: '+e.message); }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-center">
      <h2 className="text-xl font-bold mb-3">Sign in</h2>
      <button onClick={goGoogle} className="w-full border py-2 rounded mb-3">Continue with Google</button>
      <form onSubmit={doEmailSignIn} className="space-y-3">
        <input required type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border rounded" />
        <input required type="password" placeholder="Password" value={pw} onChange={e=>setPw(e.target.value)} className="w-full p-2 border rounded" />
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded">Sign In</button>
          <button onClick={doSignup} className="bg-green-600 text-white px-3 py-2 rounded">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
