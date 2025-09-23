'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, Translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'tr';

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('tr')) return 'tr';

  return 'tr'; // default fallback
}

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'tr';

  const stored = localStorage.getItem('language') as Language;
  if (stored && (stored === 'tr' || stored === 'en')) {
    return stored;
  }

  return getBrowserLanguage();
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const initialLanguage = getStoredLanguage();
    setLanguageState(initialLanguage);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const value = {
    language: isClient ? language : 'tr',
    setLanguage,
    t: translations[isClient ? language : 'tr']
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}