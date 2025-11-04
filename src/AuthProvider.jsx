import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.js";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, u => { setUser(u); setLoading(false); });
    return ()=> unsub();
  },[]);

  const loginWithGoogle = ()=> signInWithPopup(auth, new GoogleAuthProvider());
  const loginWithEmail = (email, password)=> signInWithEmailAndPassword(auth, email, password);
  const signupWithEmail = (email, password)=> createUserWithEmailAndPassword(auth, email, password);
  const logout = ()=> signOut(auth);

  return <AuthContext.Provider value={{ user, loading, loginWithGoogle, loginWithEmail, signupWithEmail, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext);
