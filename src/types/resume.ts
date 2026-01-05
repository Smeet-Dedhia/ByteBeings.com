export interface Link {
  label: string
  url: string
}

export interface ExperienceItem {
  role: string
  company: string
  location?: string
  startDate: string
  endDate: string | null // null for current position
  description: string[]
  technologies?: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  location?: string
  startDate: string
  endDate: string | null
  description?: string[]
  gpa?: string
}

export interface ProjectItem {
  name: string
  description: string
  url?: string
  githubUrl?: string
  technologies: string[]
  highlights?: string[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Resume {
  name: string
  headline: string
  summary: string
  location?: string
  links?: {
    github?: string
    linkedin?: string
    website?: string
    email?: string
    [key: string]: string | undefined
  }
  experience: ExperienceItem[]
  education: EducationItem[]
  projects: ProjectItem[]
  skills: SkillGroup[]
  meta?: {
    updatedAt?: string
    version?: string
  }
}

