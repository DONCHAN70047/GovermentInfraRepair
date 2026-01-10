"use client"

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useApp } from "../context/AppContext"
import {
  Construction,
  Lightbulb,
  Trash2,
  Droplets,
  ShieldAlert,
  TreePine,
  MapPin,
  Upload,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"

function ReportForm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { addReport } = useApp()

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [trackingId, setTrackingId] = useState("")

  const [formData, setFormData] = useState({
    category: searchParams.get("category") || "",
    title: "",
    description: "",
    location: "",
    priority: "medium",
    name: "",
    email: "",
    phone: "",
  })

  const categories = [
    { id: "roads", icon: Construction, label: "Roads & Potholes", color: "bg-orange-100 text-orange-600" },
    { id: "streetlights", icon: Lightbulb, label: "Street Lights", color: "bg-yellow-100 text-yellow-600" },
    { id: "garbage", icon: Trash2, label: "Garbage & Sanitation", color: "bg-green-100 text-green-600" },
    { id: "water", icon: Droplets, label: "Water Supply", color: "bg-blue-100 text-blue-600" },
    { id: "safety", icon: ShieldAlert, label: "Public Safety", color: "bg-red-100 text-red-600" },
    { id: "parks", icon: TreePine, label: "Parks & Environment", color: "bg-emerald-100 text-emerald-600" },
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCategorySelect = (categoryId) => {
    setFormData({ ...formData, category: categoryId })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newId = addReport({
      ...formData,
      department: getCategoryDepartment(formData.category),
    })
    setTrackingId(newId)
    setSubmitted(true)
  }

  const getCategoryDepartment = (category) => {
    const departments = {
      roads: "Roads & Infrastructure",
      streetlights: "Electrical Services",
      garbage: "Sanitation",
      water: "Water Services",
      safety: "Public Safety",
      parks: "Parks & Recreation",
    }
    return departments[category] || "General Services"
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Report Submitted Successfully!</h2>
        <p className="text-gray-600 mb-6">Your report has been received. Our team will review it shortly.</p>
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-500 mb-2">Your Tracking ID</p>
          <p className="text-2xl font-mono font-bold text-teal-600">{trackingId}</p>
          <p className="text-sm text-gray-500 mt-2">Save this ID to track your report status</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(`/track?id=${trackingId}`)}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Track Your Report
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                s <= step ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {s}
            </div>
            {s < 3 && <div className={`w-16 sm:w-24 h-1 mx-2 ${s < step ? "bg-teal-600" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 mb-8 text-sm">
        <span className={step >= 1 ? "text-teal-600 font-medium" : "text-gray-400"}>Category</span>
        <span className={step >= 2 ? "text-teal-600 font-medium" : "text-gray-400"}>Details</span>
        <span className={step >= 3 ? "text-teal-600 font-medium" : "text-gray-400"}>Contact</span>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        {/* Step 1: Category Selection */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Issue Category</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                    formData.category === cat.id
                      ? "border-teal-600 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg ${cat.color} flex items-center justify-center`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-gray-900">{cat.label}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.category}
                className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Next Step
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Issue Details */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Issue Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Issue Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Brief title describing the issue"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Provide detailed information about the issue..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Street address or landmark"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                <div className="flex gap-4">
                  {["low", "medium", "high"].map((p) => (
                    <label key={p} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priority"
                        value={p}
                        checked={formData.priority === p}
                        onChange={handleChange}
                        className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="capitalize">{p}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-500 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Drag & drop images or click to browse</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.title || !formData.description || !formData.location}
                className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Next Step
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-teal-600" required />
                  <span className="text-sm text-gray-600">
                    I confirm that the information provided is accurate and I agree to the terms of service and privacy
                    policy.
                  </span>
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Submit Report
                <CheckCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default ReportForm
