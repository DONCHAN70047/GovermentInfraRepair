"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, ArrowRight, Shield, Clock, Users } from "lucide-react"

function HeroSection() {
  const [trackingId, setTrackingId] = useState("")
  const navigate = useNavigate()

  const handleTrack = (e) => {
    e.preventDefault()
    if (trackingId.trim()) {
      navigate(`/track?id=${trackingId}`)
    }
  }

  return (
    <section className="hero-gradient text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Official Government Portal</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Report Local Issues, <span className="text-amber-300">Build Better Communities</span>
            </h1>

            <p className="text-lg text-teal-100 mb-8 max-w-lg">
              Your voice matters. Report civic problems in your neighborhood and track their resolution in real-time.
              Together, we can create positive change.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => navigate("/report")}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Report an Issue
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/track")}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                Track Existing Report
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-300" />
                <span className="text-sm">Avg. 3 days resolution</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-300" />
                <span className="text-sm">50,000+ Active Citizens</span>
              </div>
            </div>
          </div>

          {/* Right Content - Tracking Box */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
            <h2 className="text-gray-900 text-xl font-semibold mb-2">Track Your Report</h2>
            <p className="text-gray-600 text-sm mb-6">Enter your tracking ID to check the status of your complaint</p>

            <form onSubmit={handleTrack}>
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="e.g., CR-2024-001234"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Track Status
              </button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <p className="text-gray-500 text-sm mb-3">Recent report example:</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-gray-700">CR-2024-001234</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">In Progress</span>
                </div>
                <p className="text-sm text-gray-600">Pothole repair on Main Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
