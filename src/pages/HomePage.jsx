import HeroSection from "../components/HeroSection"
import StatsSection from "../components/StatsSection"
import FeaturesSection from "../components/FeaturesSection"
import HowItWorks from "../components/HowItWorks"
import RecentReports from "../components/RecentReports"

function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <RecentReports />
    </div>
  )
}

export default HomePage