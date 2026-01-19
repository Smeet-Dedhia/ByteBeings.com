export interface PortfolioProject {
  title: string
  date: string // e.g., "2024-03", "2023-11"
  category: string // Used for the slider scroller widget
  description: string
  githubUrl?: string
  designSpecUrl?: string
  tags: string[]
  featured?: boolean
  image?: string // Optional project thumbnail
}

export interface Portfolio {
  projects: PortfolioProject[]
  meta?: {
    updatedAt?: string
    version?: string
  }
}
