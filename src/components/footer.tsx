import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ByteBeings. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/resume"
              className="transition-colors hover:text-foreground"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

