"use client"

import { PortfolioSelector } from "@/components/portfolio-selector"
import { MotionSection, FadeIn } from "@/components/motion"

const portfolioCategories = [
  "Agentic AI",
  "Web Development",
  "Statistical Design",
  "ML Systems",
  "Research Prototypes",
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <MotionSection className="mb-12">
        <FadeIn>
          <h1 className="portfolio-title font-medium leading-tight mb-2 sm:mb-3 text-center sm:text-left">
            A proud showcase of my Projects
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-5 text-center sm:text-left">
            <span className="portfolio-line">
              <span className="portfolio-label">Check-out my projects in ...</span>
              <PortfolioSelector
                items={portfolioCategories}
                onSelect={(item, index) => {
                  // Optional: Handle selection change
                  // Could navigate to filtered view, update URL params, etc.
                  console.log(`Selected: ${item} at index ${index}`)
                }}
              />
            </span>
          </p>
        </FadeIn>
      </MotionSection>

      <MotionSection delay={0.1}>
        <FadeIn>
          <div className="space-y-8">
            <div className="rounded-lg border bg-card p-8 text-center">
              <p className="text-muted-foreground">
                Portfolio items will be displayed here based on the selected
                category. Scroll or click the selector above to browse
                categories.
              </p>
            </div>
          </div>
        </FadeIn>
      </MotionSection>
    </div>
  )
}