import ReportForm from "../components/ReportForm"

function ReportPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Report a Civic Issue</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Help improve your community by reporting local problems. Fill out the form below and we'll work to resolve
            the issue promptly.
          </p>
        </div>
        <ReportForm />
      </div>
    </div>
  )
}

export default ReportPage