export interface PostFrontmatter {
  title: string
  slug?: string
  date: string
  tags?: string[]
  summary?: string
  published?: boolean
  author?: string
}

export interface Post {
  frontmatter: PostFrontmatter
  content: string
  slug: string
}

