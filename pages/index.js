import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function Home() {
  const router = useRouter();
  const { locale } = router; // This detects 'en' or 'ar'
  
  // This variable now holds the correct language data
  const t = translations[locale] || translations.en;

  return (
    <div className="bg-[#F6F2EC]">
      {/* Dynamic Title */}
      <h1 className="text-7xl font-black text-[#1F5D3B]">
        {t.hero_title}
      </h1>
      
      {/* Dynamic Subtitle */}
      <p className="text-xl text-[#3C6A46]">
        {t.hero_subtitle}
      </p>

      {/* Language Switcher Button */}
      <button 
        onClick={() => router.push(router.pathname, router.asPath, { locale: locale === 'en' ? 'ar' : 'en' })}
        className="mt-8 px-4 py-2 bg-[#C9A77F] font-bold uppercase tracking-widest text-xs"
      >
        {locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      </button>
    </div>
  );
}
