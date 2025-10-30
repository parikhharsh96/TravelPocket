"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface CollapsibleSectionProps {
  number: number
  title: string
  children?: React.ReactNode
  isExpanded?: boolean
  onToggle?: () => void
}

export function CollapsibleSection({
  number,
  title,
  children,
  isExpanded: controlledExpanded,
  onToggle,
}: CollapsibleSectionProps) {
  const [internalExpanded, setInternalExpanded] = useState(false)

  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalExpanded(!internalExpanded)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-6 hover:bg-accent/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
            {number}
          </div>
          <h2 className="text-xl font-serif">{title}</h2>
        </div>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {isExpanded && children && <div className="p-6 pt-0">{children}</div>}
    </div>
  )
}
