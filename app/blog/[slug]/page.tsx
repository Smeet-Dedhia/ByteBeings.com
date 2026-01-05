import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getPostSlugs } from "@/lib/posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MotionSection } from "@/components/motion"
import { PostMarkdown } from "@/components/post-markdown"
import { Calendar, ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log("PostPage - slug:", slug)
  const post = await getPostBySlug(slug)
  console.log("PostPage - post found:", !!post)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <MotionSection className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </MotionSection>

      <MotionSection delay={0.1}>
        <article>
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.frontmatter.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
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
              {post.frontmatter.author && (
                <span>By {post.frontmatter.author}</span>
              )}
            </div>
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <PostMarkdown content={post.content} />
        </article>
      </MotionSection>
    </div>
  )
}

