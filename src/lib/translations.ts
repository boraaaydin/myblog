export const translations = {
  tr: {
    // Header
    siteTitle: "Bora'nın Yazılım Notları",
    nav: {
      home: "Ana Sayfa",
      contact: "İletişim"
    },

    // Hero section
    hero: {
      title: "Yazılım, Mimari ve",
      titleHighlight: "Teknoloji",
      description: "Yazılım geliştirme sürecinde karşılaştığım problemler, bulduğum çözümler ve öğrendiklerimi paylaştığım kişisel alan."
    },

    // Blog section
    blog: {
      recentPosts: "Son Yazılar",
      recentPostsDescription: "En güncel yazılarım ve teknik içerikler",
      allPosts: "Tüm Yazılar"
    },

    // Footer
    footer: {
      description: "Yazılım geliştirme sürecinde karşılaştığım problemler, bulduğum çözümler ve öğrendiklerimi paylaştığım kişisel alan.",
      tags: "Etiketler",
      links: "Bağlantılar",
      copyright: "Tüm hakları saklıdır."
    },

    // Contact page
    contact: {
      title: "İletişim",
      description: "Benimle iletişime geçmek için aşağıdaki sosyal medya hesaplarımı kullanabilirsiniz.",
      linkedin: {
        title: "LinkedIn",
        description: "Profesyonel ağım ve kariyer güncellemeleri"
      },
      twitter: {
        title: "X (Twitter)",
        description: "Güncel düşüncelerim ve teknoloji paylaşımları"
      }
    },

    // Language
    language: {
      turkish: "Türkçe",
      english: "English"
    }
  },

  en: {
    // Header
    siteTitle: "Bora's Software Notes",
    nav: {
      home: "Home",
      contact: "Contact"
    },

    // Hero section
    hero: {
      title: "Software, Architecture and",
      titleHighlight: "Technology",
      description: "A personal space where I share the problems I encounter in software development, the solutions I find, and what I learn."
    },

    // Blog section
    blog: {
      recentPosts: "Recent Posts",
      recentPostsDescription: "My latest articles and technical content",
      allPosts: "All Posts"
    },

    // Footer
    footer: {
      description: "A personal space where I share the problems I encounter in software development, the solutions I find, and what I learn.",
      tags: "Tags",
      links: "Links",
      copyright: "All rights reserved."
    },

    // Contact page
    contact: {
      title: "Contact",
      description: "You can use my social media accounts below to get in touch with me.",
      linkedin: {
        title: "LinkedIn",
        description: "My professional network and career updates"
      },
      twitter: {
        title: "X (Twitter)",
        description: "My current thoughts and technology shares"
      }
    },

    // Language
    language: {
      turkish: "Türkçe",
      english: "English"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.tr;
export type Translations = typeof translations.tr;