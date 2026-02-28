<img src="/logo.png" alt="1clikfix logo" className="h-12 md:h-16 w-auto" /> { useState } from "react"
import Logo from "./Logo"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Logo size={48} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <a href="/" className="hover:text-red-500 transition">Home</a>
          <a href="/clients" className="hover:text-red-500 transition">Clients</a>
          <a href="/providers" className="hover:text-red-500 transition">Providers</a>
          <a href="/owner-access" className="hover:text-red-500 transition">Owner</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-lg">
          <a href="/" className="hover:text-red-500">Home</a>
          <a href="/clients" className="hover:text-red-500">Clients</a>
          <a href="/providers" className="hover:text-red-500">Providers</a>
          <a href="/owner-access" className="hover:text-red-500">Owner</a>
        </div>
      )}
    </header>
  )
}
