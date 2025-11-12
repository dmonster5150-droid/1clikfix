import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl text-red-600 font-bold mb-4">404</h2>
      <p className="text-gray-300 mb-4">Page not found.</p>
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  );
}
