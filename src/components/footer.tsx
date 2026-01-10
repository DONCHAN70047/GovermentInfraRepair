import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">CivicReport</span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Empowering citizens to build better communities through efficient civic engagement and transparent
              governance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/report" className="hover:text-background transition-colors">
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-background transition-colors">
                  Track Status
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-background transition-colors">
                  Issue Map
                </Link>
              </li>
              <li>
                <Link href="/statistics" className="hover:text-background transition-colors">
                  Statistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/help" className="hover:text-background transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="hover:text-background transition-colors">
                  Reporting Guidelines
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-background transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@civicreport.gov</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-CIVIC-01</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  City Municipal Office
                  <br />
                  123 Government Plaza
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">© 2025 CivicReport. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-background/70">
            <Link href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-background transition-colors">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-background transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
