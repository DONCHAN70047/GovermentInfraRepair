import { useApp } from "../context/AppContext"
import { MapPin, Calendar, Building2, AlertTriangle, CheckCircle, Clock, User } from "lucide-react"

function TrackingResult() {
  const { searchedReport } = useApp()

  if (!searchedReport) return null

  const report = searchedReport

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-amber-100 text-amber-700 border-amber-200",
      "in-progress": "bg-blue-100 text-blue-700 border-blue-200",
      resolved: "bg-green-100 text-green-700 border-green-200",
    }
    return colors[status]
  }

  const getStatusLabel = (status) => {
    const labels = {
      pending: "Pending Review",
      "in-progress": "In Progress",
      resolved: "Resolved",
    }
    return labels[status]
  }

  const getPriorityColor = (priority) => {
    const colors = {
      low: "text-green-600",
      medium: "text-amber-600",
      high: "text-red-600",
    }
    return colors[priority]
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Pending"
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Tracking ID</p>
            <p className="text-2xl font-mono font-bold text-gray-900">{report.id}</p>
          </div>
          <div className={`px-4 py-2 rounded-full border ${getStatusColor(report.status)}`}>
            {getStatusLabel(report.status)}
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">{report.title}</h2>
        <p className="text-gray-600 mb-6">{report.description}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-medium text-gray-900">{report.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Submitted On</p>
              <p className="text-sm font-medium text-gray-900">{formatDate(report.createdAt)}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Department</p>
              <p className="text-sm font-medium text-gray-900">{report.department}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <AlertTriangle className={`w-5 h-5 ${getPriorityColor(report.priority)}`} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Priority</p>
              <p className={`text-sm font-medium capitalize ${getPriorityColor(report.priority)}`}>{report.priority}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Progress Timeline</h3>

        <div className="space-y-6">
          {report.timeline.map((item, index) => (
            <div key={index} className="relative flex gap-4">
              {/* Connector Line */}
              {index < report.timeline.length - 1 && (
                <div
                  className={`absolute left-5 top-10 bottom-0 w-0.5 ${item.completed ? "bg-teal-200" : "bg-gray-200"}`}
                />
              )}

              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.completed ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-400"
                }`}
              >
                {item.completed ? <CheckCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="flex items-center justify-between">
                  <h4 className={`font-medium ${item.completed ? "text-gray-900" : "text-gray-400"}`}>{item.status}</h4>
                  <span className={`text-sm ${item.completed ? "text-gray-500" : "text-gray-400"}`}>
                    {item.date || "Pending"}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${item.completed ? "text-gray-600" : "text-gray-400"}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-teal-50 rounded-xl p-6 mt-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-3">
              If you have questions about your report or need to provide additional information, contact our support
              team.
            </p>
            <a href="/contact" className="text-sm text-teal-600 font-medium hover:text-teal-700">
              Contact Support →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackingResult
