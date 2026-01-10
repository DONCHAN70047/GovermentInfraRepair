"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const [trackingId, setTrackingId] = useState("")

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <CheckCircle2 className="h-4 w-4" />
              Trusted by 50,000+ citizens
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Report local issues. <span className="text-primary">Track progress.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Empowering citizens to report potholes, streetlight outages, garbage problems, and more. Together, we
              build better communities through efficient civic engagement.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Report an Issue
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Recent Reports
              </Button>
            </div>

            {/* Track Complaint */}
            <div className="pt-4">
              <p className="text-sm font-medium text-foreground mb-3">Already filed a report? Track its status:</p>
              <div className="flex gap-2 max-w-md">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter tracking ID (e.g., CR-2025-1234)"
                    className="pl-10"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                </div>
                <Button variant="secondary">Track</Button>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/city-aerial-view-with-location-markers-showing-civ.jpg"
                alt="Interactive city map showing reported civic issues"
                className="w-full h-auto"
              />
              {/* Floating Cards */}
              <div className="absolute top-8 left-8 bg-card rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Resolved Today</p>
                    <p className="text-lg font-semibold text-foreground">127</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 bg-card rounded-lg shadow-lg p-4 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">New Report Filed</p>
                    <p className="text-sm font-medium text-foreground">Pothole on Main St</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
