"use client"

import { useState, useEffect, useCallback } from "react"
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
  "Web Dev & Cloud",
  "NLP & Deep Learning",
  "Applied ML",
  "Statistical ML",
  "Data Viz & Analytics",
]

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
  "Web Dev & Cloud": [
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
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border h-full">
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-2 border-white dark:border-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
            >
              <svg
                className="w-4 h-4"
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
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-blue-600 dark:bg-blue-500 text-white border-2 border-blue-400 dark:border-blue-400 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
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
              Design Spec
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function PortfolioContent({ projects }: PortfolioContentProps) {
  const [selectedCategory, setSelectedCategory] = useState(PORTFOLIO_CATEGORIES[0])
  const [filteredProjects, setFilteredProjects] = useState<PortfolioProject[]>([])

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

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  return (
    <div className="container mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <MotionSection className="mb-12">
        <FadeIn>
          <h1 className="heading-shine portfolio-title font-medium leading-tight mb-2 sm:mb-3 text-center">
            A proud showcase of my Projects
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-5 text-center">
            <span className="portfolio-line justify-center">
              <span className="portfolio-label">Check-out my projects with ...</span>
              <PortfolioSelector
                items={PORTFOLIO_CATEGORIES}
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
