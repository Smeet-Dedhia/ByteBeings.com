import { Suspense } from "react"
import { getProjects } from "@/lib/portfolio"
import { PortfolioContent } from "@/components/portfolio-content"

function PortfolioLoading() {
  return (
    <div className="container mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="h-12 bg-muted animate-pulse rounded-lg mb-4 max-w-lg mx-auto" />
        <div className="h-8 bg-muted animate-pulse rounded-lg max-w-md mx-auto" />
      </div>
    </div>
  )
}

export default async function PortfolioPage() {
  const projects = await getProjects()

  return (
    <Suspense fallback={<PortfolioLoading />}>
      <PortfolioContent projects={projects} />
    </Suspense>
  )
}
