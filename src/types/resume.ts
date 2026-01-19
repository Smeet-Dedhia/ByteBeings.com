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
  logo?: string // path to company logo
  psst?: string // optional whisper/trivia text
}

export interface EducationItem {
  degree: string
  institution: string
  location?: string
  startDate: string
  endDate: string | null
  description?: string[]
  gpa?: string
  logo?: string // path to institution logo
  psst?: string // optional whisper/trivia text
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

export interface AwardItem {
  title: string
  description: string
  year?: string
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
  awards?: AwardItem[]
  meta?: {
    updatedAt?: string
    version?: string
  }
}

