import TrackingSearch from "../components/TrackingSearch"
import TrackingResult from "../components/TrackingResult"

function TrackPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Track Your Report</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your tracking ID to view the current status and progress of your submitted report.
          </p>
        </div>
        <TrackingSearch />
        <TrackingResult />
      </div>
    </div>
  )
}

export default TrackPage