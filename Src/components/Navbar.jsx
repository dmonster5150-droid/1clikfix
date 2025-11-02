import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-extrabold text-blackish">1clikfix</Link>
          <div className="text-xs text-gray-500">Book a handyman — fast</div>
        </div>
        <nav className="flex items-center gap-3">
          <Link to="/about" className="text-sm text-gray-700">About</Link>
          <Link to="/client" className="text-sm text-gray-700">Clients</Link>
          <Link to="/provider" className="text-sm text-gray-700">Providers</Link>
          <Link to="/pricing" className="text-sm text-gray-700">Pricing</Link>
          {user ? (
            <>
              <button onClick={()=> nav('/client-dashboard')} className="px-3 py-1 bg-gray-800 text-white rounded text-sm">Dashboard</button>
              <button onClick={logout} className="px-3 py-1 border rounded text-sm">Sign out</button>
            </>
          ) : (
            <Link to="/login" className="px-3 py-1 bg-redbrand text-white rounded text-sm">Sign in</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
