export const TAGS = {
  GIT: 'Git',
  BEST_PRACTICES: 'İyi Pratikler',
  DEVELOPMENT: 'Geliştirme',
  JUNIOR_DEVELOPERS: 'Junior Geliştiriciler',
  AI: 'Yapay Zeka',
  MCP: 'MCP',
  CLAUDE_CODE: 'Claude Code'
} as const;

export type TagType = typeof TAGS[keyof typeof TAGS];