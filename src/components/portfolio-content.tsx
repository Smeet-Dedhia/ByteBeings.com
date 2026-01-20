"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { PortfolioSelector } from "@/components/portfolio-selector"
import { MotionSection, FadeIn } from "@/components/motion"
import { TiltCard } from "@/components/tilt-card"
import type { PortfolioProject } from "@/types/portfolio"

interface PortfolioContentProps {
  projects: PortfolioProject[]
}

// Hardcoded categories in desired order
const PORTFOLIO_CATEGORIES = [
  "Agentic AI & RL",
  "Full-Stack & Cloud",
  "NLP & Deep Learning",
  "Applied ML",
  "Statistical ML",
  "Data Viz & Analytics",
]

// Create URL-friendly slugs for categories
function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

// Create reverse mapping from slug to category
const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
  PORTFOLIO_CATEGORIES.map((cat) => [categoryToSlug(cat), cat])
)

// Mapping of categories to related work experience
const CATEGORY_WORK_EXP: Record<string, { name: string; anchor: string }[]> = {
  "Agentic AI & RL": [
    { name: "Microsoft", anchor: "exp-microsoft" },
    { name: "Intuitive", anchor: "exp-intuitive" },
    { name: "ATX Labs", anchor: "exp-atx-labs" },
  ],
  "NLP & Deep Learning": [
    { name: "Project Dronaid", anchor: "exp-project-dronaid" },
    { name: "Turtlemint", anchor: "exp-turtlemint" },
  ],
  "Full-Stack & Cloud": [
    { name: "ION Group", anchor: "exp-ion-group" },
  ],
  "Applied ML": [
    { name: "UPL Limited", anchor: "exp-upl-limited" },
  ],
  "Statistical ML": [],
  "Data Viz & Analytics": [],
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-border h-full overflow-hidden">
      <CardHeader className="p-3 sm:p-4 lg:p-6 pb-2 sm:pb-3">
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold leading-tight group-hover:text-primary transition-colors break-words hyphens-auto">
          {project.title}
        </h3>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 lg:p-6 pt-0 space-y-2 sm:space-y-3">
        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 dark:text-zinc-100 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
          {project.designSpecUrl && (
            <a
              href={project.designSpecUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-1 rounded-md bg-blue-600 dark:bg-blue-500 text-xs text-white border border-blue-400 dark:border-blue-400 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Spec
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] sm:text-xs px-1.5 sm:px-2">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function PortfolioContent({ projects }: PortfolioContentProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Get category from URL or default to first
  const getCategoryFromUrl = useCallback(() => {
    const categorySlug = searchParams.get("category")
    if (categorySlug && SLUG_TO_CATEGORY[categorySlug]) {
      return SLUG_TO_CATEGORY[categorySlug]
    }
    return PORTFOLIO_CATEGORIES[0]
  }, [searchParams])

  // Use ref to capture initial index only once (prevents re-render loops)
  const initialIndexRef = useRef<number | null>(null)
  if (initialIndexRef.current === null) {
    const initialCategory = getCategoryFromUrl()
    initialIndexRef.current = PORTFOLIO_CATEGORIES.indexOf(initialCategory)
  }
  
  const [selectedCategory, setSelectedCategory] = useState(getCategoryFromUrl)
  const [filteredProjects, setFilteredProjects] = useState<PortfolioProject[]>([])

  // Store latest values in refs to avoid recreating the callback
  const searchParamsRef = useRef(searchParams)
  const pathnameRef = useRef(pathname)
  const routerRef = useRef(router)
  
  useEffect(() => {
    searchParamsRef.current = searchParams
    pathnameRef.current = pathname
    routerRef.current = router
  }, [searchParams, pathname, router])

  // Sync state with URL changes (e.g., browser back/forward)
  // Also redirect to add category param if missing
  useEffect(() => {
    const categoryFromUrl = getCategoryFromUrl()
    setSelectedCategory(categoryFromUrl)
    
    // If no category in URL, redirect to include the default
    const categorySlug = searchParams.get("category")
    if (!categorySlug) {
      const defaultSlug = categoryToSlug(PORTFOLIO_CATEGORIES[0])
      routerRef.current.replace(`${pathnameRef.current}?category=${defaultSlug}`, { scroll: false })
    }
  }, [getCategoryFromUrl, searchParams])

  useEffect(() => {
    if (selectedCategory) {
      const filtered = projects
        .filter((project) => project.category === selectedCategory)
        .sort((a, b) => {
          // Sort by date descending (newest first)
          // Date format is "YYYY-MM" so string comparison works
          return b.date.localeCompare(a.date)
        })
      setFilteredProjects(filtered)
    }
  }, [selectedCategory, projects])

  // Stable callback that doesn't change reference
  const handleCategorySelect = useCallback((category: string, _index: number, isInitial: boolean) => {
    // Skip URL update on initial mount to prevent loops
    if (isInitial) return
    
    setSelectedCategory(category)
    
    // Update URL with the new category (always include it)
    const slug = categoryToSlug(category)
    const params = new URLSearchParams(searchParamsRef.current.toString())
    params.set("category", slug)
    
    const newUrl = `${pathnameRef.current}?${params.toString()}`
    routerRef.current.replace(newUrl, { scroll: false })
  }, []) // Empty deps - callback reference never changes

  return (
    <div className="container mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <MotionSection className="mb-12">
        <FadeIn>
          <h1 className="heading-shine portfolio-title font-medium leading-tight mb-2 lg:mb-3 text-center whitespace-nowrap lg:whitespace-normal">
            A proud showcase of my Projects
          </h1>
          <p className="text-xl lg:text-4xl font-medium leading-tight mb-5 text-center">
            <span className="portfolio-line justify-center">
              <span className="portfolio-label">Check-out my projects with ...</span>
              <PortfolioSelector
                items={PORTFOLIO_CATEGORIES}
                initialIndex={initialIndexRef.current ?? 0}
                onSelect={handleCategorySelect}
              />
            </span>
          </p>
        </FadeIn>
      </MotionSection>

      {/* Related Work Experience Link */}
      {CATEGORY_WORK_EXP[selectedCategory]?.length > 0 && (
        <MotionSection delay={0.05} className="mb-6">
          <FadeIn>
            <p className="text-lg sm:text-xl text-muted-foreground text-center">
              Check my related Work Exp with{" "}
              {CATEGORY_WORK_EXP[selectedCategory].map((exp, index, arr) => (
                <span key={exp.anchor}>
                  <Link
                    href={`/resume#${exp.anchor}`}
                    className="text-primary font-medium hover:underline underline-offset-4"
                  >
                    {exp.name}
                  </Link>
                  {index < arr.length - 1 && (
                    <span>{index === arr.length - 2 ? " & " : ", "}</span>
                  )}
                </span>
              ))}
            </p>
          </FadeIn>
        </MotionSection>
      )}

      <MotionSection delay={0.1}>
        <FadeIn>
          {filteredProjects.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4">
              {filteredProjects.map((project) => (
                <div key={project.title} className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)]">
                  <TiltCard className="h-full">
                    <ProjectCard project={project} />
                  </TiltCard>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border bg-card p-8 text-center">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </FadeIn>
      </MotionSection>
    </div>
  )
}
