import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from './firebase/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext({ user:null, loading:true })

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, u=> { setUser(u); setLoading(false) })
    return ()=>unsub()
  },[])

  const loginWithGoogle = ()=> signInWithPopup(auth, new GoogleAuthProvider())
  const logout = ()=> signOut(auth)

  return <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)
