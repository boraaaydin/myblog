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
2. Add the post entry to the `blogPosts` array in `src/lib/blog.ts`
3. Use existing tags from `src/lib/tags.ts` or add new ones

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
    ├── blog.ts        # Blog post definitions
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
- BasePath configured as "blog"
- Sitemap available at https://boraaydin.com/blog/sitemap.xml