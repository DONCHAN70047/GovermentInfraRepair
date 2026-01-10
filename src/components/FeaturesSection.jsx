import { Link } from "react-router-dom"
import { Construction, Lightbulb, Trash2, Droplets, ShieldAlert, TreePine, ArrowRight } from "lucide-react"

function FeaturesSection() {
  const categories = [
    {
      icon: Construction,
      title: "Roads & Potholes",
      description: "Report damaged roads, potholes, and pavement issues",
      color: "bg-orange-100 text-orange-600",
      count: "2,341 reports",
    },
    {
      icon: Lightbulb,
      title: "Street Lights",
      description: "Report broken or malfunctioning street lights",
      color: "bg-yellow-100 text-yellow-600",
      count: "1,892 reports",
    },
    {
      icon: Trash2,
      title: "Garbage & Sanitation",
      description: "Report missed collections or illegal dumping",
      color: "bg-green-100 text-green-600",
      count: "3,127 reports",
    },
    {
      icon: Droplets,
      title: "Water Supply",
      description: "Report leaks, contamination, or supply issues",
      color: "bg-blue-100 text-blue-600",
      count: "1,456 reports",
    },
    {
      icon: ShieldAlert,
      title: "Public Safety",
      description: "Report safety hazards and security concerns",
      color: "bg-red-100 text-red-600",
      count: "987 reports",
    },
    {
      icon: TreePine,
      title: "Parks & Environment",
      description: "Report park maintenance and environmental issues",
      color: "bg-emerald-100 text-emerald-600",
      count: "1,044 reports",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Would You Like to Report?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our categories below to submit a report. Our team will review and address your concern promptly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/report?category=${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover group"
            >
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{category.count}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection