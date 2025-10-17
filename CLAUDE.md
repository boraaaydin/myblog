# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Next.js 15, TypeScript, and TailwindCSS. The blog is configured for static export and deployment to GitHub Pages.

### Architecture

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: TailwindCSS v4
- **Blog System**: Component-based blog posts stored as React components
- **Routing**: Dynamic routing with slug-based URLs and tag filtering
- **Deployment**: Static export to GitHub Pages

### Key Configuration

- **Static Export**: Configured with `output: 'export'` for GitHub Pages
- **Base Path**: Uses `/blog` base path in production
- **Turbopack**: Enabled for development and build
- **Images**: Unoptimized for static export compatibility

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Build for production with static export
npm run build

# Start production server (for local testing)
npm start

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Blog Post System

Blog posts are managed through a component-based system:

1. **Post Definition**: All posts are defined in `src/lib/blog.ts`
2. **Post Components**: Individual post components in `src/components/posts/`
3. **Routing**: Dynamic routes handle `/[slug]` and `/tag/[tag]` patterns
4. **Tags**: Centralized tag system in `src/lib/tags.ts`

### Adding New Blog Posts

1. Create a new React component in `src/components/posts/`
2. Add the post entry to the `blogPosts` array in `src/lib/posts.ts`
3. Use existing tags from `src/lib/tags.ts` or add new ones

### Naming Conventions

- **Slugs**: Use lowercase letters with hyphens between words (e.g., `claude-code-mcp`, `git-best-practices`)
- **Component names**: Use lowercase letters with hyphens between words (e.g., `claude-code-mcp`, `commit-best-practices`)
- **File names**: Use lowercase letters with hyphens between words (e.g., `claude-code-mcp.tsx`, `commit-best-practices.tsx`)

## File Structure

```
src/
├── app/                 # Next.js App Router
│   ├── [slug]/         # Dynamic blog post routes
│   ├── tag/[tag]/      # Tag-based filtering
│   └── contact/        # Contact page
├── components/         # Reusable components
│   └── posts/         # Blog post components
└── lib/               # Utilities and data
    ├── blog.ts        # Blog utility functions
    ├── posts.ts       # Blog post definitions
    └── tags.ts        # Tag constants
```

## SEO & Site Features

### Sitemap
The blog includes automatic sitemap generation for SEO:
- **Sitemap URL**: `/sitemap.xml` - automatically generates XML sitemap
- **Robots.txt**: `/robots.txt` - includes sitemap reference for search engines
- **Coverage**: Includes all blog posts, static pages, and tag pages
- **Auto-updating**: Sitemap updates automatically when new posts are added

### Sitemap Content
The sitemap includes:
- Home page (`/blog`)
- Contact page (`/blog/contact`)
- All blog posts (`/blog/[slug]`)
- All tag pages (`/blog/tag/[tag]`)

## Deployment

The project is configured for GitHub Pages deployment:
- Static files are exported to `out/` directory
- CNAME file configured for custom domain
- Deploy script handles git operations automatically
- Live site will be served in https://boraaydin.com/blog/
- Local address will be http://localhost:3000/blog
- Sitemap available at https://boraaydin.com/blog/sitemap.xml

## Internal Blog Links

When linking to other blog posts within the blog content, use the `BlogLink` component instead of regular `<a>` tags or Next.js `Link` components.

### BlogLink Component

The `BlogLink` component automatically handles language-aware routing for internal blog links.

**Usage:**
```tsx
import BlogLink from "@/components/BlogLink";

<BlogLink href="/blog/beginner-git-usage">Link Text</BlogLink>
```

**Features:**
- Automatically prepends the current language (`tr` or `en`) to the href
- Uses `LanguageContext` to detect the current language
- Built on top of Next.js `Link` for optimal performance and SEO
- Supports all standard link attributes (className, etc.)

**Example:**
- Turkish page: renders as `/tr/blog/beginner-git-usage`
- English page: renders as `/en/blog/beginner-git-usage`

## Tooltips

Junior developers may not be familiar with certain technical terms. Create tooltips for these terms within the blog posts.

### Rules for Creating Tooltips

- Each tooltip must include both Turkish and English translations
- Example: If the blog post mentions "commit" (which is Git-related), create the tooltip key name as git-commit
- Key naming convention: Use English for all tooltip key names
- If same tooltip is written in text, don't add tooltip in the headers

### Rules for Creating Blog Pages

- Don' t fill blog page when asked to create one. Add single title and paragraph with Lorem Ipsum.