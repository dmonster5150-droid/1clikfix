import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold mb-4">404 — Page not found</h2>
      <Link to="/" className="text-blue-600 underline">Go home</Link>
    </div>
  );
}
