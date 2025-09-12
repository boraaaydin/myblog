export const TAGS = {
  GIT: 'Git',
  BEST_PRACTICES: 'İyi Pratikler',
  DEVELOPMENT: 'Geliştirme',
  JUNIOR_DEVELOPERS: 'Junior Geliştiriciler'
} as const;

export type TagType = typeof TAGS[keyof typeof TAGS];