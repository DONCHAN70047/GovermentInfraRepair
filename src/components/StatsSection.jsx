import { useApp } from "../context/AppContext"
import { FileText, CheckCircle, Clock, TrendingUp } from "lucide-react"

function StatsSection() {
  const { stats } = useApp()

  const statItems = [
    {
      icon: FileText,
      value: stats.totalReports.toLocaleString(),
      label: "Total Reports",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: CheckCircle,
      value: stats.resolvedReports.toLocaleString(),
      label: "Issues Resolved",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      value: stats.avgResolutionTime,
      label: "Avg. Resolution Time",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: TrendingUp,
      value: "87%",
      label: "Satisfaction Rate",
      color: "bg-blue-100 text-blue-600",
    },
  ]

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
