import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing(){
  const nav = useNavigate();
  return (
    <div className="grid gap-8 items-center">
      <div className="text-center">
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
