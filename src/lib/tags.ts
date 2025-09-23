export const TAGS = {
  GIT: {
    slug: 'git',
    tr: 'Git',
    en: 'Git'
  },
  BEST_PRACTICES: {
    slug: 'best-practices',
    tr: 'İyi Pratikler',
    en: 'Best Practices'
  },
  DEVELOPMENT: {
    slug: 'development',
    tr: 'Geliştirme',
    en: 'Development'
  },
  JUNIOR_DEVELOPERS: {
    slug: 'junior-developers',
    tr: 'Junior Geliştiriciler',
    en: 'Junior Developers'
  },
  AI: {
    slug: 'ai',
    tr: 'Yapay Zeka',
    en: 'Artificial Intelligence'
  },
  MCP: {
    slug: 'mcp',
    tr: 'MCP',
    en: 'MCP'
  },
  CLAUDE_CODE: {
    slug: 'claude-code',
    tr: 'Claude Code',
    en: 'Claude Code'
  }
} as const;

export type TagKey = keyof typeof TAGS;
export type TagSlug = typeof TAGS[TagKey]['slug'];
export type TagInfo = typeof TAGS[TagKey];

export function getTagBySlug(slug: string): TagInfo | undefined {
  return Object.values(TAGS).find(tag => tag.slug === slug);
}

export function getTagDisplayName(tagKey: TagKey, locale: 'tr' | 'en' = 'tr'): string {
  return TAGS[tagKey][locale];
}