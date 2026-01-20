"use client"

import { Construction } from "lucide-react"

export function WipBanner() {
  return (
    <div className="mb-8 rounded-md border border-border/50 bg-muted/30 px-4 py-3">
      <div className="flex items-center gap-2.5 text-muted-foreground">
        <Construction className="h-4 w-4 shrink-0 opacity-60" />
        <p className="text-sm">
          <span className="font-medium">This Blog is Developing...</span>
          {" "}
          <span className="opacity-80">
            Feel free to view my AI-formatted raw notes while I work on the purely human-written version.
          </span>
        </p>
      </div>
    </div>
  )
}
