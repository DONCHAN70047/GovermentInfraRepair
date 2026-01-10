import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrackingSearch } from "@/components/tracking-search"
import { TrackingResult } from "@/components/tracking-result"

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Track Your Report</h1>
            <p className="mt-4 text-lg text-muted-foreground">Enter your tracking ID to see real-time status updates</p>
          </div>
          <TrackingSearch />
          <TrackingResult />
        </div>
      </main>
      <Footer />
    </div>
  )
}