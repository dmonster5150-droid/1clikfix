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
}
