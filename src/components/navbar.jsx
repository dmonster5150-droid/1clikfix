import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <nav className="bg-black border-b border-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <span className="text-xl font-bold">🧰 1clikfix<span className="text-brandRed">.com</span></span>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-brandRed">Home</Link>
        <Link to="/client" className="hover:text-brandRed">Clients</Link>
        <Link to="/provider" className="hover:text-brandRed">Providers</Link>
        <Link to="/disclosures" className="hover:text-brandRed">Disclosures</Link>
        {user ? (
          <>
            <button onClick={logout} className="btn btn-primary">Logout</button>
          </>
        ) : (
          <Link to="/subscribe" className="btn btn-primary">Subscribe</Link>
        )}
      </div>
    </nav>
  );
}
