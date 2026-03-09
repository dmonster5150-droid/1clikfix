import { Link } from "react-router-dom"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <Logo size={44} />

        <nav className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-wide">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/clients" className="hover:text-red-500 transition">Clients</Link>
          <Link to="/providers" className="hover:text-red-500 transition">Providers</Link>
          <Link to="/owner-access" className="hover:text-red-500 transition">Owner</Link>
        </nav>

      </div>
    </header>
  )
}
