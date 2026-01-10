import { Shield, Users, Clock, Award, Target, Heart } from "lucide-react"

function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description:
        "We believe in open communication and keeping citizens informed about the progress of their reports.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Our platform is built to serve the community, ensuring every voice is heard and every issue addressed.",
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "We streamline the reporting process to ensure quick response times and faster resolutions.",
    },
    {
      icon: Award,
      title: "Accountability",
      description: "We hold ourselves and departments accountable for resolving issues in a timely manner.",
    },
  ]

  const team = [
    { name: "Sarah Johnson", role: "Director of Operations", image: "/professional-woman-headshot.png" },
    { name: "Michael Chen", role: "Technical Lead", image: "/professional-man-headshot.png" },
    { name: "Emily Rodriguez", role: "Community Manager", image: "/professional-latina-woman-headshot.png" },
    { name: "David Thompson", role: "Support Specialist", image: "/professional-african-american-man-headshot.png" },
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About CivicReport</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Empowering citizens to create positive change in their communities through efficient reporting and
            transparent tracking of local civic issues.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 text-teal-600 mb-4">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Our Mission</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Building Better Communities Together</h2>
            <p className="text-gray-600 mb-6">
              CivicReport was founded with a simple yet powerful vision: to bridge the gap between citizens and local
              government. We believe that every community deserves responsive governance and that every citizen's voice
              matters.
            </p>
            <p className="text-gray-600">
              Our platform makes it easy for residents to report local issues, from potholes and broken streetlights to
              sanitation concerns and public safety hazards. By streamlining the reporting and tracking process, we help
              ensure that problems are addressed quickly and efficiently.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <img src="/community-meeting-diverse-people-discussing.jpg" alt="Community collaboration" className="rounded-xl w-full" />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-teal-600 mb-4">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Our Values</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-teal-600 mb-4">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Our Team</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Meet the People Behind CivicReport</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-8">Our Impact in Numbers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">12,847</div>
              <div className="text-teal-200">Total Reports</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">11,234</div>
              <div className="text-teal-200">Issues Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-teal-200">Partner Departments</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">87%</div>
              <div className="text-teal-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
