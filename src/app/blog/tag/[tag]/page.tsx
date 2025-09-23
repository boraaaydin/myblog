import { redirect } from 'next/navigation';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  redirect(`/tr/blog/tag/${tag}`);
}

export async function generateStaticParams() {
  const { blogPosts } = await import('@/lib/posts');
  const tagSet = new Set<string>();

  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagSet.add(tag.toLowerCase());
    });
  });

  return Array.from(tagSet).map((tag) => ({
    tag: tag,
  }));
}