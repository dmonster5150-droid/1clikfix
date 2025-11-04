import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-6 text-red-600">
        Welcome to 1ClikFix
      </h1>
      <p className="mb-8">Please choose an option to continue:</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/client")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          I need a service provider
        </button>
        <button
          onClick={() => navigate("/provider")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700"
        >
          I am a service provider
        </button>
      </div>
    </div>
  );
}
