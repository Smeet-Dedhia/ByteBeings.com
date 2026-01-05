import { readFile } from "fs/promises"
import { join } from "path"
import type { Resume } from "@/types/resume"

const resumePath = join(process.cwd(), "src", "data", "resume.json")

export async function getResume(): Promise<Resume> {
  try {
    const fileContents = await readFile(resumePath, "utf8")
    const resume: Resume = JSON.parse(fileContents)
    return resume
  } catch (error) {
    console.error("Error reading resume data:", error)
    throw new Error("Failed to load resume data")
  }
}

