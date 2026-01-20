export interface PostFrontmatter {
  title: string
  slug?: string
  date: string
  tags?: string[]
  summary?: string
  published?: boolean
  author?: string
  wip?: boolean
}

export interface Post {
  frontmatter: PostFrontmatter
  content: string
  slug: string
}

