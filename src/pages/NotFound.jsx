import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Page not found</h2>
      <p className="mt-2">Go back to <Link to="/" className="underline">home</Link>.</p>
    </div>
  );
}
