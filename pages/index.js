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
      hero: "We’re testing a simpler way to run customer support.",
      sub: "This is an early-stage pilot exploring whether a small, founder-led team can deliver focused, accountable CX without bloated outsourcing models.",
      cta: "Join the pilot",

      problemTitle: "The problem isn’t support. It’s how it’s handled.",
      problemPoints: [
        "Support becomes a dumping ground instead of a system",
        "Founders and senior staff get pulled into tickets",
        "Outsourced teams optimize for volume, not accountability",
        "Quality drops quietly while costs creep up"
      ],

      experimentTitle: "What we’re testing",
      experimentSub: "This pilot is not a full-service solution. It’s an experiment focused on execution quality.",
      experimentPoints: [
        "A very small team (1–3 agents)",
        "Founder-managed workflows and QA",
        "Email and chat only (for now)",
        "Limited scope by design"
      ],

      forWhoTitle: "Who this is for (and who it’s not)",
      forWhoGood: [
        "Early-stage or lean teams",
        "Founders tired of managing support themselves",
        "Companies open to pilots and iteration"
      ],
      forWhoBad: [
        "Enterprises looking for polished vendors",
        "Anyone expecting instant scale",
        "Teams that need 24/7 coverage today"
      ],

      whyTitle: "Why we’re doing this",
      whyText:
        "Most CX offerings overpromise and under-deliver. Instead of selling a fantasy, we’re running a controlled pilot to see what actually works when accountability stays close to the founder.",

      nextTitle: "What happens next",
      nextPoints: [
        "Run the pilot with a small number of partners",
        "Collect real feedback and data",
        "Decide whether this deserves to become a real service"
      ]
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>Pingora | CX Pilot</title>
        <meta name="description" content="An early-stage pilot exploring a more accountable CX model." />
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
          <button className="w-fit border border-gray-300 bg-white px-8 py-3 rounded-full hover:bg-green-50 transition">
            {t.cta}
          </button>
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

        {/* EXPERIMENT */}
        <section className="py-28 bg-gray-50 -mx-6 px-6">
          <h2 className="text-4xl font-bold mb-4">{t.experimentTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-8">{t.experimentSub}</p>
          <ul className="space-y-3 text-lg text-slate-700 max-w-3xl">
            {t.experimentPoints.map((p, i) => (
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

        {/* WHY */}
        <section className="py-28 bg-gray-50 -mx-6 px-6">
          <h2 className="text-4xl font-bold mb-6">{t.whyTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl">{t.whyText}</p>
        </section>

        {/* NEXT */}
        <section className="py-28">
          <h2 className="text-4xl font-bold mb-8">{t.nextTitle}</h2>
          <ul className="space-y-4 text-lg text-slate-700 max-w-3xl">
            {t.nextPoints.map((p, i) => <li key={i}>— {p}</li>)}
          </ul>
        </section>

      </main>
    </div>
  );
}
