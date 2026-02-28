import Logo from "./Logo"

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <Logo size={44} />

        <nav className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-wide">
          <a href="/" className="hover:text-red-500 transition">Home</a>
          <a href="/clients" className="hover:text-red-500 transition">Clients</a>
          <a href="/providers" className="hover:text-red-500 transition">Providers</a>
          <a href="/owner-access" className="hover:text-red-500 transition">Owner</a>
        </nav>

      </div>
    </header>
  )
}
