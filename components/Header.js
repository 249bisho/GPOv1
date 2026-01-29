import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [lang, setLang] = useState('en');

  // This effect ensures the page direction flips when Arabic is selected
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const content = {
    en: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Book a Call"
    },
    ar: {
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
      cta: "احجز مكالمة"
    }
  };

  const t = content[lang];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-bisho-lightbrown/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-bisho-darkgreen">
          BISHO<span className="text-bisho-lightbrown">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-widest text-bisho-text">
          <Link href="/services" className="hover:text-bisho-lightbrown transition">{t.services}</Link>
          <Link href="/about" className="hover:text-bisho-lightbrown transition">{t.about}</Link>
          <Link href="/contact" className="hover:text-bisho-lightbrown transition">{t.contact}</Link>
        </div>

        {/* Language Toggle & CTA */}
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-bisho-sand rounded-full p-1 border border-bisho-lightbrown/20">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition ${lang === 'en' ? 'bg-bisho-darkgreen text-white' : 'text-bisho-olive'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ar')}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition ${lang === 'ar' ? 'bg-bisho-darkgreen text-white' : 'text-bisho-olive'}`}
            >
              AR
            </button>
          </div>
          
          <Link 
            href="/contact" 
            className="hidden sm:block bg-bisho-text text-white px-5 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-bisho-darkgreen transition"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
