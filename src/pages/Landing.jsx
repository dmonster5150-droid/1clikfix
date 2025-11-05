// src/pages/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing(){
  const nav = useNavigate();
  return (
    <div className="grid gap-8 items-center text-center py-12 px-4">
      <div>
        <h1 className="text-4xl font-extrabold">Welcome to 1ClikFix</h1>
        <p className="mt-2 text-gray-600">Please choose an option to continue</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => nav('/login')}
          className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white rounded font-semibold"
        >
          Sign In
        </button>

        {/* Provider flow: first go to Square subscription page in a new tab,
            then after subscribing the provider should come back to create profile */}
        <a
          href="https://1clikfixsquare.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center px-6 py-3 border rounded inline-block"
        >
          Go to Provider Subscription (Square)
        </a>

        <button
          onClick={() => nav('/provider-profile')}
          className="w-full sm:w-auto px-6 py-3 border rounded"
        >
          Create Provider Profile
        </button>

        <button
          onClick={() => nav('/client')}
          className="w-full sm:w-auto px-6 py-3 border rounded"
        >
          I Need a Service Provider
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        Providers must subscribe via Square, then complete their profile and verification.
      </p>
    </div>
  );
} React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing(){
  const nav = useNavigate();
  return (
    <div className="grid gap-8 items-center text-center py-12">
      <div>
        <h1 className="text-4xl font-extrabold">Welcome to 1clikfix</h1>
        <p className="mt-2 text-gray-600">Please choose an option to continue</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={()=>nav('/login')} className="w-full sm:w-auto px-6 py-3 bg-redbrand text-white rounded font-semibold">Sign In</button>
        <button onClick={()=>nav('/provider')} className="w-full sm:w-auto px-6 py-3 border rounded">I am a Service Provider</button>
        <button onClick={()=>nav('/client')} className="w-full sm:w-auto px-6 py-3 border rounded">I Need a Service Provider</button>
      </div>
    </div>
  );
}
