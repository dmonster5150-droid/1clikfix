import React from "react";
import LoginForm from "../components/LoginForm";

export default function ProviderPortal() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brandRed mb-4">Provider Portal</h2>
      <p className="text-gray-300 mb-4">Providers must subscribe to access calendar and jobs.</p>
      <LoginForm role="provider" />
      <div className="mt-4">
        <a href={import.meta.env.VITE_SQUARE_SITE_URL || "https://1clikfixsquare.square.site"} target="_blank" rel="noreferrer" className="btn btn-primary">Subscribe via Square</a>
      </div>
    </div>
  );
}
