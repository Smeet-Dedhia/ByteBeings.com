import Link from "next/link"
import { getResume } from "@/lib/resume"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MotionSection, FadeIn } from "@/components/motion"
import { TiltCard } from "@/components/tilt-card"
import { Psst } from "@/components/psst"
import { Github, Linkedin, Mail, Globe, MapPin, Calendar, Code2, Trophy, FileDown } from "lucide-react"

export default async function ResumePage() {
  const resume = await getResume()

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section with Education */}
      <MotionSection className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Name, Headline, Links */}
          <div className="lg:flex-1">
            <div className="mb-6">
              <h1 
                className="heading-shine text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ '--shine-duration': `${Math.max(2.5, Math.min(5, resume.name.length * 0.15))}s` } as React.CSSProperties}
              >
                {resume.name}
              </h1>
              <p className="mt-2 text-xl text-muted-foreground">{resume.headline}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground">
                {resume.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{resume.location}</span>
                  </div>
                )}
                {resume.links?.email && (
                  <Link
                    href={`mailto:${resume.links.email}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{resume.links.email}</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Links */}
            {resume.links && (
              <div className="flex flex-wrap gap-2">
                {resume.links.linkedin && (
                  <Link
                    href={resume.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground border border-border rounded-md transition-colors hover:text-foreground hover:bg-muted"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                )}
                {resume.links.github && (
                  <Link
                    href={resume.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground border border-border rounded-md transition-colors hover:text-foreground hover:bg-muted"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                )}
                {resume.links.website && (
                  <Link
                    href={resume.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground border border-border rounded-md transition-colors hover:text-foreground hover:bg-muted"
                  >
                    <Globe className="h-4 w-4" />
                    Website
                  </Link>
                )}
                {resume.links.leetcode && (
                  <Link
                    href={resume.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground border border-border rounded-md transition-colors hover:text-foreground hover:bg-muted"
                  >
                    <Code2 className="h-4 w-4" />
                    LeetCode
                  </Link>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {resume.links?.resumePdf && (
                <Link
                  href={resume.links.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
                >
                  <FileDown className="h-4 w-4" />
                  Resume - PDF
                </Link>
              )}
              <div className="relative">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
                >
                  <Globe className="h-4 w-4" />
                  Projects Portfolio →
                </Link>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-muted-foreground font-scribble text-lg">
                  Domain-wise Projects showcase
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Education Cards */}
          <div className="lg:w-[420px] shrink-0">
            <h2 className="mb-6 text-3xl font-bold">Education</h2>
            <div className="grid gap-4 grid-cols-2">
              {resume.education.map((edu, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <TiltCard className="h-full">
                    <Card className="h-full transition-shadow hover:shadow-lg relative overflow-visible">
                      {/* Psst whisper from data */}
                      {edu.psst && (
                        <Psst position="top-right" style={{ '--psst-top': '0.5rem', '--psst-right': '0.5rem' } as React.CSSProperties}>
                          {edu.psst}
                        </Psst>
                      )}
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        {/* Logo */}
                        {edu.logo ? (
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="h-12 w-12 rounded-full object-cover border border-border mb-2"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center border border-border mb-2">
                            <span className="text-lg font-semibold text-muted-foreground">
                              {edu.institution.charAt(0)}
                            </span>
                          </div>
                        )}
                        {/* Institution */}
                        <p className="text-xs font-medium text-muted-foreground line-clamp-1">{edu.institution}</p>
                        {/* Degree */}
                        <h3 className="text-sm font-semibold leading-tight mt-1 line-clamp-2">{edu.degree}</h3>
                        {/* Dates */}
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                          <Calendar className="h-3 w-3" />
                          <span>{edu.startDate} - {edu.endDate || "Present"}</span>
                        </div>
                        {/* GPA */}
                        {edu.gpa && (
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {edu.gpa}
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  </TiltCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Summary */}
      {resume.summary && (
        <MotionSection delay={0.1} className="mb-12">
          <TiltCard>
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{resume.summary}</p>
              </CardContent>
            </Card>
          </TiltCard>
        </MotionSection>
      )}

      {/* Experience */}
      <MotionSection delay={0.2} className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Experience</h2>
        <div className="space-y-6">
          {resume.experience.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <TiltCard>
                <Card id={`exp-${exp.company.toLowerCase().replace(/\s+/g, '-')}`} className="transition-shadow hover:shadow-lg scroll-mt-32">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left Column - Logo & Info */}
                      <div className="md:w-56 shrink-0 flex flex-col items-center md:items-start text-center md:text-left relative">
                        {/* Psst whisper from data */}
                        {exp.psst && (
                          <Psst position="top-right" style={{ '--psst-top': '0', '--psst-right': '0' } as React.CSSProperties}>
                            {exp.psst}
                          </Psst>
                        )}
                        {/* Logo */}
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="h-16 w-16 rounded-full object-cover border border-border mb-3"
                          />
                        ) : (
                          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center border border-border mb-3">
                            <span className="text-xl font-semibold text-muted-foreground">
                              {exp.company.charAt(0)}
                            </span>
                          </div>
                        )}
                        {/* Company */}
                        <p className="text-base font-medium text-muted-foreground">{exp.company}</p>
                        {/* Role */}
                        <h3 className="text-lg font-semibold leading-tight mt-1">{exp.role}</h3>
                        {/* Dates */}
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{exp.startDate} - {exp.endDate || "Present"}</span>
                        </div>
                        {/* Location */}
                        {exp.location && (
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>

                      {/* Right Column - Description & Tech */}
                      <div className="flex-1 md:border-l md:pl-6 border-border">
                        {/* Description */}
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </MotionSection>

      {/* Projects - Hidden, available at /portfolio */}
      {/* <MotionSection delay={0.3} className="mb-12">
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
      </MotionSection> */}

      {/* Skills */}
      <MotionSection delay={0.3} className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resume.skills.map((group, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <TiltCard className="h-full">
                <Card className="h-full transition-shadow hover:shadow-lg">
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
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </MotionSection>

      {/* Awards */}
      {resume.awards && resume.awards.length > 0 && (
        <MotionSection delay={0.4}>
          <h2 className="mb-6 text-3xl font-bold">Honors & Awards</h2>
          <div className="space-y-4">
            {resume.awards.map((award, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <TiltCard>
                  <Card className="transition-shadow hover:shadow-lg">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <Trophy className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                        <div>
                          <CardTitle className="text-lg">{award.title}</CardTitle>
                          <CardDescription className="mt-1">{award.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </MotionSection>
      )}
    </div>
  )
}

