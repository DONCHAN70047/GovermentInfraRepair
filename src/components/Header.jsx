"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, MapPin, FileText, Search, Info, Phone } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: "/", label: "Home", icon: MapPin },
    { path: "/report", label: "Report Issue", icon: FileText },
    { path: "/track", label: "Track Status", icon: Search },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">CivicReport</span>
              <span className="hidden sm:block text-xs text-gray-500">Your Voice, Your City</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path) ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/report"
              className="bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Report Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(path) ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </Link>
              ))}
              <Link
                to="/report"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 bg-teal-600 text-white text-center px-4 py-3 rounded-lg font-medium"
              >
                Report Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
