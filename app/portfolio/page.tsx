import { getProjects } from "@/lib/portfolio"
import { PortfolioContent } from "@/components/portfolio-content"

export default async function PortfolioPage() {
  const projects = await getProjects()

  return <PortfolioContent projects={projects} />
}
