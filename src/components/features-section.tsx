import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Droplets, Lightbulb, Trash2, Construction, TreeDeciduous, Plus } from "lucide-react"

const categories = [
  {
    icon: AlertTriangle,
    title: "Road & Potholes",
    description: "Report damaged roads, potholes, and unsafe conditions",
    count: "2,340 reports",
  },
  {
    icon: Lightbulb,
    title: "Streetlights",
    description: "Non-functional or damaged street lighting issues",
    count: "856 reports",
  },
  {
    icon: Trash2,
    title: "Garbage & Sanitation",
    description: "Waste collection, littering, and sanitation problems",
    count: "1,890 reports",
  },
  {
    icon: Droplets,
    title: "Water & Drainage",
    description: "Water supply issues, leaks, and drainage blockages",
    count: "1,245 reports",
  },
  {
    icon: Construction,
    title: "Public Property",
    description: "Damaged benches, signs, and public infrastructure",
    count: "678 reports",
  },
  {
    icon: TreeDeciduous,
    title: "Parks & Environment",
    description: "Park maintenance, tree hazards, and environmental concerns",
    count: "432 reports",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">What can you report?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a category to report an issue in your neighborhood. Our team will review and take action promptly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <p className="text-xs font-medium text-primary">{category.count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <Plus className="h-4 w-4" />
            Report something else
          </button>
        </div>
      </div>
    </section>
  )
}
