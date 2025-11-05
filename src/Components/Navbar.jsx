import { Link } from "react-router-dom";

<Link to="/client">Client</Link>
<Link to="/provider">Provider</Link>
<Link to="/booking">Booking</Link>
<Link to="/calendar">Calendar</Link>
<Link to="/subscribe">Subscribe</Link>
<Link to="/about">About</Link> React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl text-red-600">1ClikFix</Link>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/agreements">Agreements</Link>
      </div>
    </nav>
  );
}<a
  href="https://1clikfixsquare.square.site/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all"
>
  Service Provider Portal
</a>
