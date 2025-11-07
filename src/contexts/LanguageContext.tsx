
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: string;
}

const translations: Record<Language, Translations> = {
  en: {
    heroTitle: 'Connect with People Around You',
    heroSubtitle: 'Chat with nearby users on a live map or join the global lounge',
    signInGoogle: 'Sign in with Google',
    continueGuest: 'Continue as Guest',
    localMap: 'Local Map',
    globalLounge: 'Global Lounge',
    startNewVibe: 'Start a new vibe',
    features: 'Features',
    featureLocalChat: 'Local Chat',
    featureLocalChatDesc: 'Chat with people within 1-10 km radius',
    featureGlobalLounge: 'Global Lounge',
    featureGlobalLoungeDesc: 'Connect with users worldwide',
    featureVideoCalls: 'Video Calls',
    featureVideoCallsDesc: 'Voice and video calls with WebRTC',
    featureRichChat: 'Rich Messaging',
    featureRichChatDesc: 'Send text, images, videos, and emojis',
    featureGhostMode: 'Ghost Mode',
    featureGhostModeDesc: 'Hide your location while chatting',
    featureMultiLang: 'Multi-language',
    featureMultiLangDesc: 'English and Arabic support',
    allRightsReserved: 'All rights reserved.',
    enterMap: 'Enter Map',
    switchLanguage: 'Switch language',
    toggleTheme: 'Toggle theme',
    explore: 'Explore',
  },
  ar: {
    heroTitle: 'تواصل مع الأشخاص من حولك',
    heroSubtitle: 'دردش مع المستخدمين القريبين على خريطة حية أو انضم إلى الصالة العالمية',
    signInGoogle: 'تسجيل الدخول بجوجل',
    continueGuest: 'متابعة كضيف',
    localMap: 'الخريطة المحلية',
    globalLounge: 'الصالة العالمية',
    startNewVibe: 'ابدأ موجة جديدة',
    features: 'المميزات',
    featureLocalChat: 'دردشة محلية',
    featureLocalChatDesc: 'دردش مع الأشخاص ضمن نطاق 1-10 كم',
    featureGlobalLounge: 'صالة عالمية',
    featureGlobalLoungeDesc: 'تواصل مع المستخدمين في جميع أنحاء العالم',
    featureVideoCalls: 'مكالمات فيديو',
    featureVideoCallsDesc: 'مكالمات صوتية ومرئية باستخدام WebRTC',
    featureRichChat: 'رسائل غنية',
    featureRichChatDesc: 'أرسل نصوص وصور وفيديوهات ورموز تعبيرية',
    featureGhostMode: 'وضع الشبح',
    featureGhostModeDesc: 'إخفاء موقعك أثناء الدردشة',
    featureMultiLang: 'متعدد اللغات',
    featureMultiLangDesc: 'دعم اللغة الإنجليزية والعربية',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    enterMap: 'دخول الخريطة',
    switchLanguage: 'تبديل اللغة',
    toggleTheme: 'تغيير الوضع',
    explore: 'استكشف',
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}