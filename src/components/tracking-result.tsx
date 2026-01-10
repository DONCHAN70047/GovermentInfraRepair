import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, MapPin, FileText, User, Calendar, ArrowRight } from "lucide-react"

const timeline = [
  {
    status: "Report Submitted",
    date: "Jan 10, 2025 - 9:30 AM",
    description: "Your report has been successfully submitted and is pending review.",
    completed: true,
  },
  {
    status: "Under Review",
    date: "Jan 10, 2025 - 11:45 AM",
    description: "Report is being reviewed by our civic management team.",
    completed: true,
  },
  {
    status: "Assigned to Department",
    date: "Jan 10, 2025 - 2:15 PM",
    description: "Assigned to Roads & Infrastructure Department. Reference: RD-2025-891",
    completed: true,
  },
  {
    status: "Work In Progress",
    date: "Jan 11, 2025 - 8:00 AM",
    description: "Field team dispatched. Expected completion within 48 hours.",
    completed: false,
    current: true,
  },
  {
    status: "Resolved",
    date: "Pending",
    description: "Issue will be marked resolved after completion and verification.",
    completed: false,
  },
]

export function TrackingResult() {
  return (
    <Card>
      <CardHeader className="border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Tracking ID</p>
            <CardTitle className="text-xl font-mono">CR-2025-4521</CardTitle>
          </div>
          <Badge className="bg-chart-3 text-foreground w-fit">In Progress</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Issue Summary */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-border">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Issue</p>
                <p className="font-medium text-foreground">Large pothole causing traffic issues</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">Main Street & Oak Avenue</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Reported On</p>
                <p className="font-medium text-foreground">January 10, 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Assigned To</p>
                <p className="font-medium text-foreground">Roads & Infrastructure Dept.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <h3 className="font-semibold text-foreground mb-6">Progress Timeline</h3>
        <div className="space-y-0">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex gap-4">
              {/* Line */}
              {index < timeline.length - 1 && (
                <div
                  className={`absolute left-[15px] top-8 w-0.5 h-full ${item.completed ? "bg-primary" : "bg-border"}`}
                />
              )}

              {/* Icon */}
              <div
                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full shrink-0 ${
                  item.completed
                    ? "bg-primary text-primary-foreground"
                    : item.current
                      ? "bg-chart-3 text-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {item.completed ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : item.current ? (
                  <Clock className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <p className={`font-medium ${item.current ? "text-primary" : "text-foreground"}`}>{item.status}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.date}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
