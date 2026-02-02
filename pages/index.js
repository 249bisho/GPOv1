import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { useRef, useEffect } from 'react';

export default function Home() {
  const { locale } = useRouter();
  const vantaRef = useRef(null);

  const initVanta = () => {
    if (typeof window !== 'undefined' && window.VANTA && window.VANTA.TOPOLOGY) {
      window.VANTA.TOPOLOGY({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0caa41,
        backgroundColor: 0xffffff
      });
    }
  };

  const content = {
    en: {
      hero: "Founder-led, U.S.-ready agents delivering high-touch CX.",
      sub: "Test our small, high-quality team for 30 days — no long-term commitment.",
      servicesTitle: "Our Services",
      services: [
        "Email + Chat support (voice optional)",
        "1–3 highly trained agents",
        "Partial coverage in client timezone",
        "Founder-managed, accountable execution"
      ],
      problemTitle: "When Support Starts Costing You Growth",
      problemSub: "Backlogs, slow response times, and senior team pulled into support quietly damage your business. Most teams don’t need more people—they need controlled, accountable execution.",
      pilotTitle: "30-Day CX Pilot",
      pilotSub: "Experience our founder-led team in action for a full month. Fast setup, full accountability, no long-term commitment.",
      cta: "Start Your Pilot",
      trustTitle: "Trusted by Early Growth Companies",
      trustSub: "High-touch CX solutions for e-commerce, SaaS, and international businesses."
    },
    ar: {
      hero: "وكلاء أمريكيون بقيادة المؤسس يقدمون تجربة عملاء عالية الجودة.",
      sub: "اختبر فريقنا الصغير والعالي الجودة لمدة 30 يومًا — بدون التزام طويل الأمد.",
      servicesTitle: "خدماتنا",
      services: [
        "دعم البريد الإلكتروني والدردشة (صوتي اختياري)",
        "1–3 وكلاء مدربون تدريباً عالياً",
        "تغطية جزئية حسب توقيت العميل",
        "قيادة المؤسس مع مسؤولية كاملة"
      ],
      problemTitle: "عندما يبدأ الدعم في إبطاء نموك",
      problemSub: "الطلبات المتراكمة، بطء الاستجابة، وإشراك الفريق القيادي في الدعم يضر بالأعمال بصمت. معظم الفرق لا تحتاج إلى مزيد من الأشخاص — بل إلى تنفيذ منضبط ومسؤول.",
      pilotTitle: "تجربة CX لمدة 30 يومًا",
      pilotSub: "اختبر فريقنا بقيادة المؤسس لمدة شهر كامل. إعداد سريع، مسؤولية كاملة، بدون التزام طويل الأمد.",
      cta: "ابدأ تجربتك",
      trustTitle: "موثوق من قبل الشركات النامية",
      trustSub: "حلول CX عالية الجودة للتجارة الإلكترونية، SaaS، والأعمال الدولية."
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>Pingora | Global Talent & Execution</title>
        <meta name="description" content="Pingora provides high-scale BPO solutions and global specialized talent." />
      </Head>

      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js" 
        strategy="beforeInteractive" 
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js" 
        onLoad={initVanta} 
      />

      {/* 3D Background */}
      <div ref={vantaRef} className="fixed inset-0 z-0" style={{ height: '100vh' }} />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20">

        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center lg:flex-row items-center gap-12">
          <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">
              {t.hero}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl">{t.sub}</p>
            <button className="nav-link-elegant border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm px-8 py-3 rounded-full hover:bg-green-50 transition-all duration-300">
              {t.cta}
            </button>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="relative animate-float z-20">
              <img src="/images/cx-expert.png" alt="Pingora Talent" className="max-w-full h-auto drop-shadow-2xl" style={{ width: '450px' }} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-100 rounded-full blur-[100px] z-10 opacity-40" />
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{t.problemTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl">{t.problemSub}</p>
        </section>

        {/* Services */}
        <section className="py-24 bg-gray-50">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">{t.servicesTitle}</h2>
          <ul className="space-y-4 max-w-3xl">
            {t.services.map((service, idx) => (
              <li key={idx} className="text-lg text-slate-700 flex items-center">
                <span className="text-green-500 mr-3 font-bold">✔</span> {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Pilot Section */}
        <section className="py-24">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{t.pilotTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-8">{t.pilotSub}</p>
          <button className="nav-link-elegant border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm px-8 py-3 rounded-full hover:bg-green-50 transition-all duration-300">
            {t.cta}
          </button>
        </section>

        {/* Trust / Social Proof */}
        <section className="py-24 bg-gray-50 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{t.trustTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.trustSub}</p>
          <div className="mt-12 flex justify-center flex-wrap gap-12">
            <div className="w-32 h-16 bg-slate-200 rounded-lg" />
            <div className="w-32 h-16 bg-slate-200 rounded-lg" />
            <div className="w-32 h-16 bg-slate-200 rounded-lg" />
          </div>
        </section>

      </main>
    </div>
  );
}
