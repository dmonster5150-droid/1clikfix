import React from "react";
import { useNavigate } from "react-router-dom";

export default function Provider() {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">
        Welcome, Service Provider!
      </h1>
      <p className="text-gray-700 mb-6">
        Join <span className="font-semibold">1ClikFix</span> and connect with
        real clients looking for skilled professionals like you. Fill out your
        profile and disclosure forms to get started.
      </p>

      <button
        onClick={() => navigate("/profile")}
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700"
      >
        Create Provider Profile
      </button>
    </div>
  );
}
