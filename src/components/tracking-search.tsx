"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function TrackingSearch() {
  const [trackingId, setTrackingId] = useState("")

  return (
    <div className="flex gap-3 max-w-xl mx-auto mb-10">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Enter tracking ID (e.g., CR-2025-1234)"
          className="pl-10 h-12"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
      </div>
      <Button size="lg" className="h-12 px-8">
        Track
      </Button>
    </div>
  )
}