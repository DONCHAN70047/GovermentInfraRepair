import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReportForm } from "@/components/report-form"

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Report a Civic Issue</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Help us improve your community by reporting local problems
            </p>
          </div>
          <ReportForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}