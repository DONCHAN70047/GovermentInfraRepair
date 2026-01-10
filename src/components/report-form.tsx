"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, MapPin, CheckCircle2 } from "lucide-react"

const categories = [
  "Road & Potholes",
  "Streetlights",
  "Garbage & Sanitation",
  "Water & Drainage",
  "Public Property",
  "Parks & Environment",
  "Other",
]

const priorities = [
  { value: "low", label: "Low - Minor inconvenience" },
  { value: "medium", label: "Medium - Needs attention" },
  { value: "high", label: "High - Safety concern" },
  { value: "critical", label: "Critical - Immediate danger" },
]

export function ReportForm() {
  const [submitted, setSubmitted] = useState(false)
  const [files, setFiles] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((f) => f.name)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  if (submitted) {
    return (
      <Card className="text-center py-12">
        <CardContent className="space-y-6">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent/20">
            <CheckCircle2 className="h-10 w-10 text-accent" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Report Submitted!</h2>
            <p className="text-muted-foreground">Your tracking ID is:</p>
            <p className="text-2xl font-mono font-bold text-primary">CR-2025-4522</p>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            You will receive email updates as your report progresses. Use your tracking ID to check the status anytime.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button variant="outline" onClick={() => setSubmitted(false)}>
              Submit Another Report
            </Button>
            <Button>Track This Report</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Issue Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category & Priority */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat.toLowerCase().replace(/\s+/g, "-")}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level *</Label>
              <Select required>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Issue Title *</Label>
            <Input id="title" placeholder="Brief description of the issue" required />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description *</Label>
            <Textarea
              id="description"
              placeholder="Please provide as much detail as possible about the issue..."
              rows={4}
              required
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="location" className="pl-10" placeholder="Enter address or landmark" required />
            </div>
            <Button type="button" variant="outline" size="sm" className="mt-2 gap-2 bg-transparent">
              <MapPin className="h-4 w-4" />
              Use Current Location
            </Button>
          </div>

          {/* Photo Upload */}
          <div className="space-y-2">
            <Label>Attach Photos (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <input type="file" accept="image/*" multiple className="hidden" id="photos" onChange={handleFileChange} />
              <label htmlFor="photos" className="cursor-pointer">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Click to upload photos</p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB each</p>
              </label>
            </div>
            {files.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {files.map((file, i) => (
                  <span key={i} className="text-xs bg-secondary px-2 py-1 rounded">
                    {file}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="border-t border-border pt-6">
            <h3 className="font-medium text-foreground mb-4">Your Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              Submit Report
            </Button>
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
