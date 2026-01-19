# ByteBeings

A space where I share my thoughts about **everything that exists as bytes** — from data to software to AI.

## What is ByteBeings?

ByteBeings is my personal corner of the internet. It's where I write about the things I find fascinating in tech: how AI is reshaping software, the craft of building intelligent systems, and the intersection of data science with real-world problems.

I'm [Smeet Dedhia](https://www.linkedin.com/in/smeet-dedhia-9b430621b/), a Data Science grad student at the University of Washington. I've worked on ML systems at places like Intuitive and Microsoft, and I've built everything from agentic AI copilots to computer vision models for drones. This site is where I organize my thinking and share what I learn along the way.

## Why "ByteBeings"?

Everything digital — code, models, data, the AI systems we interact with — exists as bytes. But increasingly, these bytes behave less like static programs and more like *beings* with emergent behavior. The name felt right.

## Tech Stack

This site is built with modern web technologies that I enjoy working with:

- **[Next.js 16](https://nextjs.org/)** — App Router, server components, the works
- **[React 19](https://react.dev/)** — For building the UI
- **[TypeScript](https://www.typescriptlang.org/)** — Because types are nice
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — Smooth animations and transitions
- **[shadcn/ui](https://ui.shadcn.com/)** — Beautiful, accessible components built on Radix
- **Markdown** — Blog posts written in markdown with `gray-matter` for frontmatter and `react-markdown` for rendering

Deployed via GitHub Actions.

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

Then open [http://localhost:3000](http://localhost:3000).

## Directory Structure

```
ByteBeings.com/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and individual post pages
│   │   └── [slug]/        # Dynamic route for blog posts
│   ├── portfolio/         # Portfolio/projects page
│   ├── resume/            # Interactive resume page
│   ├── layout.tsx         # Root layout with nav and footer
│   ├── page.tsx           # Homepage with hero section
│   └── globals.css        # Global styles
│
├── src/
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components (button, card, badge, etc.)
│   │   ├── hero.tsx       # Homepage hero section
│   │   ├── nav.tsx        # Navigation bar
│   │   ├── footer.tsx     # Site footer
│   │   ├── motion.tsx     # Animation wrapper components
│   │   ├── tilt-card.tsx  # Interactive tilting card effect
│   │   └── ...
│   │
│   ├── content/
│   │   └── posts/         # Markdown blog posts
│   │
│   ├── data/
│   │   ├── resume.json    # Resume/CV data
│   │   └── portfolio.json # Portfolio projects data
│   │
│   ├── lib/               # Utility functions
│   │   ├── posts.ts       # Blog post loading and parsing
│   │   ├── resume.ts      # Resume data helpers
│   │   └── utils.ts       # General utilities (cn, etc.)
│   │
│   └── types/             # TypeScript type definitions
│
├── public/
│   └── logos/             # Company logos and site assets
│
└── .github/
    └── workflows/         # CI/CD deployment workflow
```

## Writing a Blog Post

Add a new `.md` file to `src/content/posts/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-01-19"
tags: ["AI", "Thoughts"]
summary: "A brief summary of the post."
published: true
author: "Your Name"
---

Your content here...
```

The post will automatically appear on the blog page.

---

Built with curiosity and caffeine in Seattle.
