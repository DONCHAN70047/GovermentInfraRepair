import { Link } from "react-router-dom"
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">CivicReport</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering citizens to build better communities through efficient reporting and tracking of local civic
              issues.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/report" className="hover:text-teal-400 transition-colors">
                  Report Issue
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-teal-400 transition-colors">
                  Track Status
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-white mb-4">Issue Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Roads & Potholes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Street Lights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Garbage & Sanitation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Water Supply
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Public Safety
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>City Hall, 123 Main Street</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <span>1-800-CIVIC-HELP</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>support@civicreport.gov</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CivicReport. All rights reserved. A Government Initiative.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
