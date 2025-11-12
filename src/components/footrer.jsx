import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-center p-6 text-gray-400">
      <div>© {new Date().getFullYear()} 1clikfix.com</div>
      <div className="mt-2 space-x-4">
        <Link to="/privacy" className="hover:text-brandRed">Privacy</Link>
        <Link to="/terms" className="hover:text-brandRed">Terms</Link>
      </div>
    </footer>
  );
}
