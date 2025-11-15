## Instructions

This command accepts a blog topic as a parameter.

### Steps:

1. **Generate SEO-friendly titles and slug**:
   - Create an SEO-optimized slug in English (lowercase with hyphens)
   - Generate SEO-friendly titles in both Turkish and English
   - Ensure slug follows naming conventions: lowercase letters with hyphens

2. **Create blog post components**:
   - Create Turkish version in `src/components/posts-tr/`
   - Create English version in `src/components/posts-en/`
   - Follow the CLAUDE.md rules: Don't fill the blog page, add only a single title and paragraph with Lorem Ipsum
   - IMPORTANT: Blog posts should NOT include an `<h1>` header tag at the beginning

3. **Add tags**:
   - Use existing tags from `src/lib/tags.ts` or add new appropriate tags if needed

4. **Add post entry**:
   - Add the blog post to `src/lib/posts.ts`
   - Set `draft: true` in the post entry
   - Import both Turkish and English components
   - Include: id, slug, date (today), tags, readingTime, tr/en titles and excerpts