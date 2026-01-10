"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useApp } from "../context/AppContext"
import { Search, AlertCircle } from "lucide-react"

function TrackingSearch() {
  const [searchParams] = useSearchParams()
  const { searchReport, searchedReport } = useApp()
  const [trackingId, setTrackingId] = useState("")
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const idFromUrl = searchParams.get("id")
    if (idFromUrl) {
      setTrackingId(idFromUrl)
      handleSearch(idFromUrl)
    }
  }, [searchParams])

  const handleSearch = (id = trackingId) => {
    if (!id.trim()) {
      setError("Please enter a tracking ID")
      return
    }
    setError("")
    setSearched(true)
    searchReport(id.trim())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID (e.g., CR-2024-001234)"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Search
          </button>
        </div>
        {error && (
          <p className="mt-2 text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {error}
          </p>
        )}
      </form>

      {searched && !searchedReport && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Not Found</h3>
          <p className="text-gray-600">
            We couldn't find a report with the tracking ID "{trackingId}". Please check the ID and try again.
          </p>
        </div>
      )}
    </div>
  )
}

export default TrackingSearch
