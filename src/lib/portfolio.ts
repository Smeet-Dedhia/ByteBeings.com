import { readFile } from "fs/promises"
import { join } from "path"
import type { Portfolio, PortfolioProject } from "@/types/portfolio"

const portfolioPath = join(process.cwd(), "src", "data", "portfolio.json")

export async function getPortfolio(): Promise<Portfolio> {
  try {
    const fileContents = await readFile(portfolioPath, "utf8")
    const portfolio: Portfolio = JSON.parse(fileContents)
    return portfolio
  } catch (error) {
    console.error("Error reading portfolio data:", error)
    throw new Error("Failed to load portfolio data")
  }
}

export async function getProjects(): Promise<PortfolioProject[]> {
  const portfolio = await getPortfolio()
  return portfolio.projects
}

/**
 * Extract unique categories from all projects
 * Categories are automatically derived from the JSON data
 */
export async function getCategories(): Promise<string[]> {
  const portfolio = await getPortfolio()
  const categories = new Set<string>()
  
  portfolio.projects.forEach((project) => {
    if (project.category) {
      categories.add(project.category)
    }
  })
  
  return Array.from(categories)
}

/**
 * Get projects filtered by category
 */
export async function getProjectsByCategory(category: string): Promise<PortfolioProject[]> {
  const portfolio = await getPortfolio()
  return portfolio.projects.filter((project) => project.category === category)
}

/**
 * Format date string to display format
 */
export function formatProjectDate(dateString: string): string {
  const [year, month] = dateString.split("-")
  if (!month) return year
  
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}
