import { ClipboardList, Search, Wrench, CheckCircle } from "lucide-react"

function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Submit Report",
      description: "Fill out the simple form with issue details and location",
    },
    {
      icon: Search,
      step: "02",
      title: "Review & Assign",
      description: "Our team reviews and assigns to the relevant department",
    },
    {
      icon: Wrench,
      step: "03",
      title: "Take Action",
      description: "The assigned team works on resolving your issue",
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Resolution",
      description: "Issue resolved and you receive confirmation",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures your civic concerns are addressed efficiently and transparently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200" />
              )}

              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <item.icon className="w-8 h-8 text-teal-600" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white text-sm font-bold rounded-full flex items-center justify-center z-20">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
