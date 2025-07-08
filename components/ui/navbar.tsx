import React, { useState } from "react"

interface NavbarProps {
  scrolled: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-blue-600/80 via-purple-700/80 to-blue-900/80 backdrop-blur-lg shadow-2xl"
          : "bg-transparent shadow-none backdrop-blur-none"
      }`}
    >
      <div className="flex items-center justify-between p-6">
        {/* Desktop Nav */}
        <div className="hidden custom-sm:flex items-center space-x-8 text-white text-sm">
          <a href="/" className="hover:text-blue-200 transition-all duration-300 hover:scale-110 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/services" className="hover:text-blue-200 transition-all duration-300 hover:scale-110 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="text-white text-2xl font-bold">KandyBTL</div>
        <div className="hidden custom-sm:flex items-center space-x-8 text-white text-sm">
          <a href="/about" className="hover:text-blue-200 transition-all duration-300 hover:scale-110 relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/contact" className="hover:text-blue-200 transition-all duration-300 hover:scale-110 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        {/* Hamburger Icon */}
        <button
          className="custom-sm:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="custom-sm:hidden bg-gradient-to-r from-blue-600/95 via-purple-700/95 to-blue-900/95 px-6 pb-6 pt-2 flex flex-col space-y-4 text-white text-lg shadow-2xl animate-fade-in-down">
          <a href="/" className="hover:text-blue-200 transition-all duration-300" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/services" className="hover:text-blue-200 transition-all duration-300" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="/about" className="hover:text-blue-200 transition-all duration-300" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="/contact" className="hover:text-blue-200 transition-all duration-300" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar 