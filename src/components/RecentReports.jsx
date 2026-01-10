import { useApp } from "../context/AppContext"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function RecentReports() {
  const { getRecentReports } = useApp()
  const recentReports = getRecentReports(4)

  const getStatusBadge = (status) => {
    const styles = {
      pending: "bg-amber-100 text-amber-700",
      "in-progress": "bg-blue-100 text-blue-700",
      resolved: "bg-green-100 text-green-700",
    }
    const labels = {
      pending: "Pending",
      "in-progress": "In Progress",
      resolved: "Resolved",
    }
    return <span className={`text-xs px-2 py-1 rounded-full ${styles[status]}`}>{labels[status]}</span>
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Community Reports</h2>
            <p className="text-gray-600">See what others in your community are reporting</p>
          </div>
          <Link to="/track" className="hidden sm:flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentReports.map((report) => (
            <Link
              key={report.id}
              to={`/track?id=${report.id}`}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-gray-500">{report.id}</span>
                {getStatusBadge(report.status)}
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{report.title}</h3>

              <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{report.location}</span>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                <span>{formatDate(report.createdAt)}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/track" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
            View All Reports
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentReports
