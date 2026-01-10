import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight } from "lucide-react"

const reports = [
  {
    id: "CR-2025-4521",
    title: "Large pothole causing traffic issues",
    category: "Road & Potholes",
    location: "Main Street & Oak Avenue",
    status: "In Progress",
    statusColor: "bg-chart-3 text-foreground",
    time: "2 hours ago",
    image: "/pothole-on-street-road-damage.jpg",
  },
  {
    id: "CR-2025-4520",
    title: "Streetlight not working for 3 days",
    category: "Streetlights",
    location: "Park Lane, Block 5",
    status: "Assigned",
    statusColor: "bg-primary text-primary-foreground",
    time: "5 hours ago",
    image: "/broken-streetlight-at-night-dark-street.jpg",
  },
  {
    id: "CR-2025-4518",
    title: "Overflowing garbage bin",
    category: "Garbage & Sanitation",
    location: "Central Market Area",
    status: "Resolved",
    statusColor: "bg-accent text-accent-foreground",
    time: "1 day ago",
    image: "/overflowing-garbage-bin-trash-waste.jpg",
  },
  {
    id: "CR-2025-4515",
    title: "Water pipe leakage on sidewalk",
    category: "Water & Drainage",
    location: "River Road, Near Hospital",
    status: "Under Review",
    statusColor: "bg-muted text-muted-foreground",
    time: "1 day ago",
    image: "/water-pipe-leak-on-sidewalk-flooding.jpg",
  },
]

export function RecentReports() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Recent reports in your area</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what your neighbors are reporting and track community improvements
            </p>
          </div>
          <Button variant="outline" className="gap-2 shrink-0 bg-transparent">
            View All Reports
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report) => (
            <Card key={report.id} className="group cursor-pointer hover:shadow-lg transition-all overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img
                  src={report.image || "/placeholder.svg"}
                  alt={report.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 right-3 ${report.statusColor}`}>{report.status}</Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-xs font-medium text-primary mb-1">{report.category}</p>
                <h3 className="font-semibold text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                  {report.title}
                </h3>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="truncate">{report.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{report.time}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">ID: {report.id}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
