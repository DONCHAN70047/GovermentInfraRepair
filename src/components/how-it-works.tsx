import { FileEdit, Search, Clock, CheckCircle } from "lucide-react"

const steps = [
  {
    step: "1",
    icon: FileEdit,
    title: "Submit Report",
    description: "Fill out a simple form with issue details, location, and photos",
  },
  {
    step: "2",
    icon: Search,
    title: "Review & Assign",
    description: "Our team reviews your report and assigns it to the relevant department",
  },
  {
    step: "3",
    icon: Clock,
    title: "Track Progress",
    description: "Get real-time updates as your issue moves through the system",
  },
  {
    step: "4",
    icon: CheckCircle,
    title: "Issue Resolved",
    description: "Receive notification when your reported issue has been fixed",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">How it works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Reporting a civic issue is simple and takes just a few minutes
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
              )}

              <div className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-6">
                {step.step}
              </div>

              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border mb-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
