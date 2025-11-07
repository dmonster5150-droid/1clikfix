import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing(){
  const nav = useNavigate();
  return (
    <div className="grid gap-8 items-center text-center py-12 px-4">
      <div>
        <h1 className="text-4xl font-extrabold">Welcome to 1clikfix</h1>
        <p className="mt-2 text-gray-600">Please choose an option to continue</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={()=>nav('/login')} className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white rounded font-semibold">Sign In</button>

        <a href="https://1clikfixsquare.square.site/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-6 py-3 border rounded inline-block">
          Go to Provider Subscription (Square)
        </a>

        <button onClick={()=>nav('/provider-profile')} className="w-full sm:w-auto px-6 py-3 border rounded">Provider Dashboard</button>

        <button onClick={()=>nav('/client')} className="w-full sm:w-auto px-6 py-3 border rounded">I Need a Service Provider</button>
      </div>

      <p className="text-xs text-gray-500 mt-6">Providers must subscribe via Square and complete verification.</p>
    </div>
  );
}
