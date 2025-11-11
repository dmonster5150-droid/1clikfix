import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;
  if (!user) return <Navigate to="/login" />;
  return children;
}
