import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function ProtectedRoute({ children, clientOnly = false }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      if (clientOnly) {
        // allow any authenticated user for client dashboard
        setAllowed(true);
        setLoading(false);
        return;
      }

      // For provider pages: check providers collection 'subscribed' flag
      try {
        const docRef = doc(db, "providers", user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists() && snap.data().subscribed === true) {
          setAllowed(true);
        } else {
          setAllowed(false);
        }
      } catch (err) {
        console.error(err);
        setAllowed(false);
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [clientOnly]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  return allowed ? children : <Navigate to="/subscribe" />;
}
