"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">CivicReport</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/report"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Report Issue
            </Link>
            <Link
              href="/track"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Track Status
            </Link>
            <Link
              href="/map"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Issue Map
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Report Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/report" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Report Issue
              </Link>
              <Link href="/track" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Track Status
              </Link>
              <Link href="/map" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Issue Map
              </Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                About
              </Link>
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1">
                  Log in
                </Button>
                <Button size="sm" className="flex-1">
                  Report Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
