"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["City Hall", "123 Main Street", "Downtown, ST 12345"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Main: 1-800-CIVIC-HELP", "Emergency: 911", "Non-Emergency: (555) 123-4567"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["General: info@civicreport.gov", "Support: support@civicreport.gov", "Media: press@civicreport.gov"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 1PM", "Sunday: Closed"],
    },
  ]

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-teal-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team through any of the channels
            below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-sm text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call our
              main line directly.
            </p>

            {submitted ? (
              <div className="bg-green-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll respond to your inquiry within 1-2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-full min-h-[400px] bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">City Hall Location</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How long does it take to resolve a report?",
                a: "Resolution times vary based on the issue type and priority. On average, reports are resolved within 3-5 business days.",
              },
              {
                q: "Can I submit anonymous reports?",
                a: "Yes, you can submit reports without providing personal information. However, we recommend providing contact details so we can follow up if needed.",
              },
              {
                q: "How do I track my report status?",
                a: "Use the tracking ID provided upon submission to check your report status on our Track page at any time.",
              },
              {
                q: "What types of issues can I report?",
                a: "You can report various civic issues including road damage, streetlight problems, sanitation issues, water supply problems, and more.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
