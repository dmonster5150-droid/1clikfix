import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Navbar() {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <nav className="flex items-center justify-between bg-dark text-white px-6 py-4 border-b border-gray-700">
      <Link to="/" className="text-xl font-bold text-primary">
        🧰1clikfix
      </Link>
      <div className="flex gap-4">
        <Link to="/dashboard" className="hover:text-primary">
          Dashboard
        </Link>
        <Link to="/calendar" className="hover:text-primary">
          Calendar
        </Link>
        <Link to="/subscribe" className="hover:text-primary">
          Subscribe
        </Link>
        <button onClick={handleLogout} className="text-gray-400 hover:text-red-500">
          Logout
        </button>
      </div>
    </nav>
  );
}
