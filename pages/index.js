import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { useRef } from 'react';

export default function Home() {
  const { locale } = useRouter();
  const vantaRef = useRef(null);

  const initVanta = () => {
    if (typeof window !== 'undefined' && window.VANTA?.TOPOLOGY) {
      window.VANTA.TOPOLOGY({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x0caa41,
        backgroundColor: 0xffffff
      });
    }
  };

  const content = {
    en: {
      hero: "Customer Experience as a Service for Growing SaaS Teams",
      sub: "Pingora handles customer support and Tier-1 tickets for companies with 10–100 employees — so your team can focus on building, not inboxes.",
      ctaPrimary: "Start a 30-Day Pilot",
      ctaSecondary: "See How It Works",

      whatTitle: "What we do",
      whatPoints: [
        "Tier-1 support ticket handling",
        "Customer email and chat support",
        "Internal escalation workflows",
        "CX coverage without hiring internally"
      ],

      whoTitle: "Who this is for",
      whoPoints: [
        "SaaS startups scaling post-launch",
        "Teams overwhelmed by support volume",
        "Founders who don’t want to hire CX yet",
        "Companies needing structured CX fast"
      ],

      pilotTitle: "30-Day CX Pilot",
      pilotSub:
        "The 30-day pilot is how companies start working with Pingora — a controlled engagement to evaluate fit, workflows, and support quality in real conditions.",
      pilotPoints: [
        "30 days of real CX work (not a demo)",
        "Limited, clearly defined scope",
        "Tier-1 & Tier-2 support tickets handled by Pingora",
        "Clear communication and escalation rules",
        "Designed to test operational fit, not lock anyone in"
      ],
      pilotExit:
        "If it’s not a good fit, you’re free to walk away — no pressure, no lock-in.",
      pilotCtaPrimary: "Start a 30-Day Pilot",
      pilotCtaSecondary: "Talk to Us First",

      whyTitle: "Why outsource CX early",
      whyPoints: [
        "Control costs while support demand grows",
        "Move faster than building a team from scratch",
        "Avoid premature hiring decisions",
        "Keep founders out of the support queue"
      ],

      ctaTitle: "Start your 30-Day CX Pilot",
      ctaText: "Or talk to us to see if Pingora is a fit."
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>Pingora | CX as a Service</title>
        <meta name="description" content="Pingora runs customer support and Tier-1 tickets for growing SaaS teams. Start a 30-day pilot to see how CX outsourcing works." />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js" onLoad={initVanta} />

      <div ref={vantaRef} className="fixed inset-0 z-0" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24">

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">Pingora CX</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 max-w-3xl">
            {t.hero}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mb-10">
            {t.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="w-fit border border-slate-900 bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition">
              {t.ctaPrimary}
            </button>
            <button className="w-fit border border-slate-300 bg-white px-8 py-3 rounded-full hover:bg-slate-50 transition">
              {t.ctaSecondary}
            </button>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-24">
          <h2 className="text-4xl font-bold mb-8">{t.whatTitle}</h2>
          <ul className="space-y-4 text-lg text-slate-700 max-w-3xl">
            {t.whatPoints.map((p, i) => (
              <li key={i}>— {p}</li>
            ))}
          </ul>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-24 bg-slate-50 -mx-6 px-6">
          <h2 className="text-4xl font-bold mb-8">{t.whoTitle}</h2>
          <ul className="space-y-4 text-lg text-slate-700 max-w-3xl">
            {t.whoPoints.map((p, i) => (
              <li key={i}>— {p}</li>
            ))}
          </ul>
        </section>

        {/* PILOT */}
        <section className="py-24">
          <h2 className="text-4xl font-bold mb-4">{t.pilotTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-8">{t.pilotSub}</p>
          <ul className="space-y-4 text-lg text-slate-700 max-w-3xl">
            {t.pilotPoints.map((p, i) => (
              <li key={i}>— {p}</li>
            ))}
          </ul>
          <p className="text-lg text-slate-600 max-w-3xl mt-6">{t.pilotExit}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="w-fit border border-slate-900 bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition">
              {t.pilotCtaPrimary}
            </button>
            <button className="w-fit border border-slate-300 bg-white px-8 py-3 rounded-full hover:bg-slate-50 transition">
              {t.pilotCtaSecondary}
            </button>
          </div>
        </section>

        {/* WHY OUTSOURCE */}
        <section className="py-24 bg-slate-50 -mx-6 px-6">
          <h2 className="text-4xl font-bold mb-8">{t.whyTitle}</h2>
          <ul className="space-y-4 text-lg text-slate-700 max-w-3xl">
            {t.whyPoints.map((p, i) => (
              <li key={i}>— {p}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="py-24">
          <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-8">{t.ctaText}</p>
          <div className="flex flex-wrap gap-4">
            <button className="w-fit border border-slate-900 bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition">
              {t.ctaPrimary}
            </button>
            <button className="w-fit border border-slate-300 bg-white px-8 py-3 rounded-full hover:bg-slate-50 transition">
              {t.ctaSecondary}
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
