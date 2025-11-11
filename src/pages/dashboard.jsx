import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-8 text-white bg-dark min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="mb-8 text-gray-300">
        Choose an action below to manage your 1clikfix experience:
      </p>

      <div className="flex flex-col gap-4">
        <Link to="/calendar" className="bg-primary py-3 rounded text-center hover:bg-red-700">
          View Calendar / Jobs
        </Link>
        <Link to="/subscribe" className="bg-grayish py-3 rounded text-center hover:bg-primary">
          Manage Subscription
        </Link>
      </div>
    </div>
  );
}
