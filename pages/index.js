import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function Home() {
  const { locale } = useRouter();
  const vantaRef = useRef(null);

  // Initialize the 3D Topology effect
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
        color: 0x0caa41,        // Bisho Green lines
        backgroundColor: 0xffffff // White background
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
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Head>
        <title>Bisho | Global Talent</title>
      </Head>

      {/* 1. Load 3D Engine Scripts (CDN Method for GitHub users) */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js" 
        strategy="beforeInteractive" 
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js" 
        onLoad={initVanta} 
      />

      {/* 2. Background Layer (Vanta renders here) */}
      <div 
        ref={vantaRef} 
        className="fixed inset-0 z-0" 
        style={{ height: '100vh', width: '100vw' }}
      />

      {/* 3. Content Layer (z-10 ensures it stays above the lines) */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 uppercase">
          {t.hero}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium">
          {t.sub}
        </p>
        
        <div className="mt-10">
          {/* Using your custom Elegant Button class from globals.css */}
          <button className="nav-link-elegant border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm scale-110">
            {t.btn}
          </button>
        </div>
      </main>
    </div>
  );
}
