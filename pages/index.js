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
      hero: "Founder-managed customer support for teams that need help now.",
      sub: "Pingora runs your CX with a small, trained team and direct founder oversight. Controlled scope, clear expectations, and hands-on delivery.",
      ctaPrimary: "Talk to the founder",
      ctaSecondary: "See if we’re a fit",

      problemTitle: "The problem is operational.",
      problemPoints: [
        "Support backlog keeps stacking up",
        "Founders are still answering tickets",
        "Engineers get pulled into CX work",
        "Customers wait too long for clear answers"
      ],

      approachTitle: "What we deliver",
      approachSub: "Service-first, not volume-first.",
      approachPoints: [
        "Email and chat support",
        "Optional voice support",
        "1–3 dedicated agents",
        "Partial coverage aligned to your time zones",
        "Founder involved in delivery and QA"
      ],

      modelTitle: "How the service works",
      modelSub: "Hands-on delivery with a short initial engagement.",
      modelPoints: [
        "We run part or all of your customer support",
        "Workflows and quality standards are aligned up front",
        "The initial engagement establishes the operating rhythm",
        "Ongoing service continues only if there is mutual fit"
      ],

      forWhoTitle: "Who this is for / not for",
      forWhoGood: [
        "Early growth teams with CX pain",
        "Operators who want control and accountability",
        "Companies that need a small, focused team"
      ],
      forWhoBad: [
        "Enterprise RFPs or long vendor cycles",
        "24/7 SLA requirements",
        "Massive volume or call center needs"
      ],

      techTitle: "A quick note on the site",
      techText:
        "The Vanta background animation is heavy on low-end devices. We’ll remove it on mobile or lazy-load it if it gets in the way. Clarity beats ego.",

      ctaTitle: "Start a CX engagement",
      ctaText: "If this fits your operating style, let’s talk. You’ll speak with the founder."
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>Pingora | CX Pilot</title>
        <meta name="description" content="Founder-managed CX services with a small team, direct oversight, and clear expectations." />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js" onLoad={initVanta} />

      <div ref={vantaRef} className="fixed inset-0 z-0" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24">

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 max-w-3xl">
            {t.hero}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mb-10">
            {t.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="w-fit border border-gray-300 bg-white px-8 py-3 rounded-full hover:bg-green-50 transition">
              {t.ctaPrimary}
            </button>
            <button className="w-fit border border-gray-300 bg-white px-8 py-3 rounded-full hover:bg-green-50 transition">
              {t.ctaSecondary}
            </button>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-28">
          <h2 className="text-4xl font-bold mb-8">{t.problemTitle}</h2>
          <ul className="space-y-4 text-lg text-slate-700 max-w-3xl">
            {t.problemPoints.map((p, i) => (
              <li key={i}>— {p}</li>
            ))}
          </ul>
        </section>

        {/* APPROACH */}
        <section className="py-28 bg-gray-50 -mx-6 px-6">
          <h2 className="text-4xl font-bold mb-4">{t.approachTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-8">{t.approachSub}</p>
          <ul className="space-y-3 text-lg text-slate-700 max-w-3xl">
            {t.approachPoints.map((p, i) => (
              <li key={i}>— {p}</li>
            ))}
          </ul>
        </section>

        {/* OPERATING MODEL */}
        <section className="py-28">
          <h2 className="text-4xl font-bold mb-4">{t.modelTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-8">{t.modelSub}</p>
          <ul className="space-y-3 text-lg text-slate-700 max-w-3xl">
            {t.modelPoints.map((p, i) => (
              <li key={i}>— {p}</li>
            ))}
          </ul>
        </section>

        {/* WHO IT’S FOR */}
        <section className="py-28">
          <h2 className="text-4xl font-bold mb-10">{t.forWhoTitle}</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <h3 className="font-semibold mb-4">Good fit if you are:</h3>
              <ul className="space-y-3 text-slate-700">
                {t.forWhoGood.map((p, i) => <li key={i}>— {p}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Not a fit if you are:</h3>
              <ul className="space-y-3 text-slate-700">
                {t.forWhoBad.map((p, i) => <li key={i}>— {p}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* TECH NOTE */}
        <section className="py-28 bg-gray-50 -mx-6 px-6">
          <h2 className="text-4xl font-bold mb-6">{t.techTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl">{t.techText}</p>
        </section>

        {/* CTA */}
        <section className="py-28">
          <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-8">{t.ctaText}</p>
          <div className="flex flex-wrap gap-4">
            <button className="w-fit border border-gray-300 bg-white px-8 py-3 rounded-full hover:bg-green-50 transition">
              {t.ctaPrimary}
            </button>
            <button className="w-fit border border-gray-300 bg-white px-8 py-3 rounded-full hover:bg-green-50 transition">
              {t.ctaSecondary}
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
