"use client"

import { createContext, useContext, useState } from "react"

const AppContext = createContext()

// Sample reports data
const initialReports = [
  {
    id: "CR-2024-001234",
    category: "roads",
    title: "Large pothole on Main Street",
    description: "There is a dangerous pothole near the intersection of Main Street and Oak Avenue.",
    location: "123 Main Street, Downtown",
    priority: "high",
    status: "in-progress",
    createdAt: "2024-01-15T10:30:00",
    updatedAt: "2024-01-18T14:20:00",
    department: "Roads & Infrastructure",
    timeline: [
      { status: "Submitted", date: "2024-01-15", description: "Report received and logged", completed: true },
      { status: "Under Review", date: "2024-01-16", description: "Assigned to Roads Department", completed: true },
      { status: "In Progress", date: "2024-01-18", description: "Repair crew dispatched", completed: true },
      { status: "Resolved", date: null, description: "Pending completion", completed: false },
    ],
  },
  {
    id: "CR-2024-001235",
    category: "streetlights",
    title: "Broken streetlight on Elm Road",
    description: "Streetlight has been out for a week, making the area unsafe at night.",
    location: "456 Elm Road, Westside",
    priority: "medium",
    status: "pending",
    createdAt: "2024-01-17T09:15:00",
    updatedAt: "2024-01-17T09:15:00",
    department: "Electrical Services",
    timeline: [
      { status: "Submitted", date: "2024-01-17", description: "Report received and logged", completed: true },
      { status: "Under Review", date: null, description: "Awaiting assignment", completed: false },
      { status: "In Progress", date: null, description: "Pending", completed: false },
      { status: "Resolved", date: null, description: "Pending completion", completed: false },
    ],
  },
  {
    id: "CR-2024-001236",
    category: "garbage",
    title: "Missed garbage collection",
    description: "Garbage has not been collected for two weeks on our street.",
    location: "789 Pine Avenue, Northend",
    priority: "medium",
    status: "resolved",
    createdAt: "2024-01-10T08:00:00",
    updatedAt: "2024-01-14T16:45:00",
    department: "Sanitation",
    timeline: [
      { status: "Submitted", date: "2024-01-10", description: "Report received and logged", completed: true },
      { status: "Under Review", date: "2024-01-11", description: "Assigned to Sanitation Department", completed: true },
      { status: "In Progress", date: "2024-01-12", description: "Collection rescheduled", completed: true },
      { status: "Resolved", date: "2024-01-14", description: "Garbage collected successfully", completed: true },
    ],
  },
  {
    id: "CR-2024-001237",
    category: "water",
    title: "Water main leak",
    description: "Water is leaking from the main pipe causing flooding on the sidewalk.",
    location: "321 Cedar Lane, Eastside",
    priority: "high",
    status: "in-progress",
    createdAt: "2024-01-18T07:30:00",
    updatedAt: "2024-01-18T11:00:00",
    department: "Water Services",
    timeline: [
      { status: "Submitted", date: "2024-01-18", description: "Emergency report received", completed: true },
      { status: "Under Review", date: "2024-01-18", description: "Marked as priority", completed: true },
      { status: "In Progress", date: "2024-01-18", description: "Emergency crew on site", completed: true },
      { status: "Resolved", date: null, description: "Pending completion", completed: false },
    ],
  },
]

export function AppProvider({ children }) {
  const [reports, setReports] = useState(initialReports)
  const [searchedReport, setSearchedReport] = useState(null)


  const stats = {
    totalReports: 12847,
    resolvedReports: 11234,
    avgResolutionTime: "3.2 days",
    activeReports: 1613,
  }

  
  const addReport = (reportData) => {
    const newReport = {
      id: `CR-2024-${String(reports.length + 1238).padStart(6, "0")}`,
      ...reportData,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      timeline: [
        {
          status: "Submitted",
          date: new Date().toISOString().split("T")[0],
          description: "Report received and logged",
          completed: true,
        },
        { status: "Under Review", date: null, description: "Awaiting assignment", completed: false },
        { status: "In Progress", date: null, description: "Pending", completed: false },
        { status: "Resolved", date: null, description: "Pending completion", completed: false },
      ],
    }
    setReports([newReport, ...reports])
    return newReport.id
  }

  // Search for a report by ID
  const searchReport = (trackingId) => {
    const found = reports.find((r) => r.id.toLowerCase() === trackingId.toLowerCase())
    setSearchedReport(found || null)
    return found
  }

 
  const getRecentReports = (count = 5) => {
    return reports.slice(0, count)
  }

  return (
    <AppContext.Provider
      value={{
        reports,
        stats,
        searchedReport,
        addReport,
        searchReport,
        getRecentReports,
        setSearchedReport,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
