import Link from "next/link"
import { getResume } from "@/lib/resume"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MotionSection, FadeIn } from "@/components/motion"
import { Github, Linkedin, Mail, Globe, MapPin, Calendar } from "lucide-react"

export default async function ResumePage() {
  const resume = await getResume()

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <MotionSection className="mb-12">
        <div className="mb-6">
          <h1 
            className="heading-shine text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ '--shine-duration': `${Math.max(2.5, Math.min(5, resume.name.length * 0.15))}s` } as React.CSSProperties}
          >
            {resume.name}
          </h1>
          <p className="mt-2 text-xl text-muted-foreground">{resume.headline}</p>
          {resume.location && (
            <div className="mt-2 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{resume.location}</span>
            </div>
          )}
        </div>

        {/* Links */}
        {resume.links && (
          <div className="flex flex-wrap gap-4">
            {resume.links.github && (
              <Link
                href={resume.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            )}
            {resume.links.linkedin && (
              <Link
                href={resume.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            )}
            {resume.links.website && (
              <Link
                href={resume.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Globe className="h-4 w-4" />
                Website
              </Link>
            )}
            {resume.links.email && (
              <Link
                href={`mailto:${resume.links.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                Email
              </Link>
            )}
          </div>
        )}
      </MotionSection>

      {/* Summary */}
      <MotionSection delay={0.1} className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{resume.summary}</p>
          </CardContent>
        </Card>
      </MotionSection>

      {/* Experience */}
      <MotionSection delay={0.2} className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Experience</h2>
        <div className="space-y-6">
          {resume.experience.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-base">
                        {exp.company}
                        {exp.location && ` • ${exp.location}`}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {exp.startDate} - {exp.endDate || "Present"}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </MotionSection>

      {/* Education */}
      <MotionSection delay={0.3} className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Education</h2>
        <div className="space-y-6">
          {resume.education.map((edu, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">
                        {edu.institution}
                        {edu.location && ` • ${edu.location}`}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {edu.startDate} - {edu.endDate || "Present"}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                {edu.description && (
                  <CardContent>
                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {edu.gpa && (
                      <p className="mt-4 text-sm text-muted-foreground">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </CardContent>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </MotionSection>

      {/* Projects */}
      <MotionSection delay={0.4} className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {resume.projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                      {project.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Globe className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-4 space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </MotionSection>

      {/* Skills */}
      <MotionSection delay={0.5}>
        <h2 className="mb-6 text-3xl font-bold">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resume.skills.map((group, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </MotionSection>
    </div>
  )
}

