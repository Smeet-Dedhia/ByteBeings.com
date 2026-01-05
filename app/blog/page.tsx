import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MotionSection, FadeIn } from "@/components/motion"
import { Calendar } from "lucide-react"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <MotionSection className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground">
          Thoughts, ideas, and insights on software development and beyond.
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
        <div className="space-y-6">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <Link href={`/blog/${post.slug}`}>
                        <CardTitle className="mb-2 text-2xl transition-colors hover:text-primary">
                          {post.frontmatter.title}
                        </CardTitle>
                      </Link>
                      {post.frontmatter.summary && (
                        <CardDescription className="text-base">
                          {post.frontmatter.summary}
                        </CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.frontmatter.date}>
                        {new Date(post.frontmatter.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </div>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.frontmatter.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  )
}

