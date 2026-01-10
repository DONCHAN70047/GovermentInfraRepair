import { FileText, CheckCircle, Clock, Users } from "lucide-react"

const stats = [
  {
    icon: FileText,
    value: "24,500+",
    label: "Issues Reported",
    description: "Total complaints filed this year",
  },
  {
    icon: CheckCircle,
    value: "18,200+",
    label: "Issues Resolved",
    description: "Successfully addressed problems",
  },
  {
    icon: Clock,
    value: "3.2 days",
    label: "Avg. Resolution Time",
    description: "Faster than ever before",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Active Citizens",
    description: "Making a difference daily",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
