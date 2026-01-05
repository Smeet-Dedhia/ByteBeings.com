"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface PostMarkdownProps {
  content: string
}

export function PostMarkdown({ content }: PostMarkdownProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}


