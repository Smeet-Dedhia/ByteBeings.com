import { readdir, readFile } from "fs/promises"
import { join } from "path"
import matter from "gray-matter"
import type { Post, PostFrontmatter } from "@/types/post"

const postsDirectory = join(process.cwd(), "src", "content", "posts")

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await readdir(postsDirectory)
    return files
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) => file.replace(/\.(md|mdx)$/, ""))
  } catch (error) {
    console.error("Error reading posts directory:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Guard against bad routes like /blog/undefined
  if (!slug || slug === "undefined") {
    console.warn("getPostBySlug called with invalid slug:", slug)
    return null
  }

  console.log("getPostBySlug - Looking for slug:", slug)
  console.log("getPostBySlug - postsDirectory:", postsDirectory)

  try {
    // Try .md first, then .mdx
    let filePath = join(postsDirectory, `${slug}.md`)
    console.log("getPostBySlug - Trying file:", filePath)
    let fileContents: string

    try {
      fileContents = await readFile(filePath, "utf8")
      console.log("getPostBySlug - Successfully read .md file")
    } catch (mdError) {
      console.log("getPostBySlug - .md file not found, trying .mdx")
      // If .md is missing, try .mdx; if that fails too, bail out gracefully
      try {
        filePath = join(postsDirectory, `${slug}.mdx`)
        fileContents = await readFile(filePath, "utf8")
        console.log("getPostBySlug - Successfully read .mdx file")
      } catch (mdxError) {
        console.error(`Error reading post file for slug ${slug}:`, mdxError)
        return null
      }
    }

    const { data, content } = matter(fileContents)
    const frontmatter = data as PostFrontmatter

    return {
      frontmatter: {
        ...frontmatter,
        slug: frontmatter.slug || slug,
      },
      content,
      slug: frontmatter.slug || slug,
    }
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug)
      return post
    })
  )

  // Filter out null posts and unpublished posts
  const validPosts = posts.filter(
    (post): post is Post =>
      post !== null && (post.frontmatter.published !== false)
  )

  // Sort by date (newest first)
  return validPosts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime()
    const dateB = new Date(b.frontmatter.date).getTime()
    return dateB - dateA
  })
}

