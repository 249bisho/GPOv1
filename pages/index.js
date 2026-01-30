import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const { locale } = useRouter();
  
  // This is the "Safe" way. If 'ar' is missing, it falls back to 'en'.
  const content = {
    en: {
      hero: "Unlimited Scale.",
      sub: "High-execution BPO solutions connecting specialized talent from the Middle East to global markets.",
    },
    ar: {
      hero: "توسع لا نهائي.",
      sub: "حلول تعهيد العمليات عالية التنفيذ التي تربط المواهب المتخصصة من الشرق الأوسط بالأسواق العالمية.",
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Bisho | Global Talent</title>
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-6">
          {t.hero}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          {t.sub}
        </p>
        
        <div className="mt-10">
          <button className="bg-[#0CAA41] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all">
            {locale === 'en' ? 'View Services' : 'عرض الخدمات'}
          </button>
        </div>
      </main>
    </div>
  );
}
