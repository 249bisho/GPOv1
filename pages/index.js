import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function Home() {
  const { locale } = useRouter();
  const vantaRef = useRef(null);

  const initVanta = () => {
    if (window.VANTA && window.VANTA.TOPOLOGY) {
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
      })
    }
  };

  const content = {
    en: {
      hero: "Unlimited Scale.",
      sub: "High-execution BPO solutions connecting specialized talent from the Middle East to global markets.",
      btn: "View Services"
    },
    ar: {
      hero: "توسع لا نهائي.",
      sub: "حلول تعهيد العمليات عالية التنفيذ التي تربط المواهب المتخصصة من الشرق الأوسط بالأسواق العالمية.",
      btn: "عرض الخدمات"
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>Bisho | Global Talent</title>
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

      {/* Main Content Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-2 items-center gap-12 pt-20">
        
        {/* Left Side: Text */}
        <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 uppercase leading-[0.9]">
            {t.hero}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium mb-10">
            {t.sub}
          </p>
          <button className="nav-link-elegant border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm scale-110">
            {t.btn}
          </button>
        </div>

        {/* Right Side: The Pencil Drawing */}
        <div className="flex justify-center items-center relative">
          <div className="relative animate-float z-20">
            <img 
              src="/images/cx-expert.png" 
              alt="CX Representative Sketch"
              className="max-w-full h-auto drop-shadow-2xl"
              style={{ width: '550px' }} 
              onLoad={() => console.log("Success: Image loaded.")}
              onError={(e) => console.log("Error: Browser cannot find /images/cx-expert.png")}
            />
          </div>
          
          {/* Subtle Glow behind the sketch */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100 rounded-full blur-[120px] z-10 opacity-40" />
        </div>

      </main>
    </div>
  );
}
