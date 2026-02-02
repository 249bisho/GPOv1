import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { useRef } from 'react';

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
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0caa41,
        backgroundColor: 0xffffff,
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>Pingora | Founder-Led CX Support</title>
        <meta
          name="description"
          content="Founder-led CX support for growing SaaS teams. High-touch email and chat support, tested through a 30-day pilot."
        />
      </Head>

      {/* Scripts for Vanta */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
        onLoad={initVanta}
      />

      {/* Background */}
      <div
        ref={vantaRef}
        className="fixed inset-0 z-0"
        style={{ height: '100vh' }}
      />

      {/* HERO SECTION */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-2 items-center gap-12 pt-20">

        {/* LEFT: POSITIONING */}
        <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Founder-Led CX Support<br />for Growing SaaS Teams
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed mb-10">
            High-touch email and chat support delivered by founder-trained agents.
            Start with a 30-day pilot — no long-term commitment.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition"
            >
              Start a 30-Day Pilot
            </a>

            <span className="text-slate-500 text-sm">
              1–3 agents • Founder managed
            </span>
          </div>
        </div>

        {/* RIGHT: VISUAL */}
        <div className="flex justify-center items-center relative">
          <div className="relative animate-float z-20">
            <img
              src="/images/cx-expert.png"
              alt="Founder-led CX support team"
              className="max-w-full h-auto drop-shadow-2xl"
              style={{ width: '550px' }}
              onLoad={() => console.log('Hero image loaded')}
              onError={() =>
                console.log('Image not found: /public/images/cx-expert.png')
              }
            />
          </div>

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100 rounded-full blur-[120px] z-10 opacity-40" />
        </div>

      </main>
    </div>
  );
}
