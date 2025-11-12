import React from "react";
import LoginForm from "../components/LoginForm";

export default function ClientPortal() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brandRed mb-4">Client Portal</h2>
      <p className="text-gray-300 mb-4">Create a profile or login to post your job requests.</p>
      <LoginForm role="client" />
    </div>
  );
}
