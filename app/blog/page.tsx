import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MotionSection, FadeIn } from "@/components/motion"
import { TiltCard } from "@/components/tilt-card"
import { Calendar } from "lucide-react"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <MotionSection className="mb-12">
        <h1 
          className="heading-shine mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ '--shine-duration': '2.5s' } as React.CSSProperties}
        >
          Blog
        </h1>
        <p className="text-xl text-muted-foreground">
        A space where I share my thoughts about everything that exists as Bytes - from Data to Software to AI.
        </p>
      </MotionSection>

      {posts.length === 0 ? (
        <MotionSection delay={0.1}>
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No posts yet. Check back soon!
              </p>
            </CardContent>
          </Card>
        </MotionSection>
      ) : (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <TiltCard className="h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="h-full flex flex-col transition-shadow hover:shadow-xl">
                    <CardHeader className="flex-1">
                      <CardTitle className="text-sm sm:text-base lg:text-lg transition-colors hover:text-primary line-clamp-4 sm:line-clamp-3">
                        {post.frontmatter.title}
                      </CardTitle>
                      {post.frontmatter.summary && (
                        <CardDescription className="text-xs sm:text-sm line-clamp-5 sm:line-clamp-3 mt-2">
                          {post.frontmatter.summary}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={post.frontmatter.date}>
                          {new Date(post.frontmatter.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>
                      {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.frontmatter.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  )
}

