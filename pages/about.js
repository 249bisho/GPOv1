import Head from 'next/head'
import { useRouter } from 'next/router'

export default function About() {
  const { locale } = useRouter();

  const content = {
    en: {
      identity: "Our Identity",
      hero: "BRIDGING MARKETS. SCALING TEAMS.",
      sub: "Pingora provides founder-led, high-touch CX teams that scale with your business. We deliver specialized global talent on demand, so your support grows without limits.",
      leadership: "Leadership",
      founders: [
        { name: "Bashir A.", role: "Co-founder", initials: "BA", linkedin: "https://www.linkedin.com/in/basheer-abdulhalim-0246802b6", instagram: "#" },
        { name: "Razan A.", role: "Co-founder", initials: "RA", linkedin: "#", instagram: "#" }
      ],
      pilotTitle: "Pilot Your CX",
      pilotSub: "Test 1–3 U.S.-ready agents for 30 days — founder-managed, no long-term commitment.",
      mission: "We don't just provide agents; we provide the operational backbone that lets businesses scale without limits."
    },
    ar: {
      identity: "هويتنا",
      hero: "ربط الأسواق. توسيع الفرق.",
      sub: "توفر بينغورا فرق دعم CX تحت إدارة المؤسس، عالية الجودة وقابلة للتوسع مع عملك. نحن نوفر المواهب المتخصصة عالميًا عند الطلب.",
      leadership: "القيادة",
      founders: [
        { name: "بشير أ.", role: "مؤسس مشارك", initials: "BA", linkedin: "https://www.linkedin.com/in/basheer-abdulhalim-0246802b6", instagram: "#" },
        { name: "رزان أ.", role: "مؤسس مشارك", initials: "RA", linkedin: "#", instagram: "#" }
      ],
      pilotTitle: "اختبر فريقك",
      pilotSub: "اختبر 1–3 وكلاء جاهزين للسوق الأمريكي لمدة 30 يومًا — إدارة المؤسس، بدون التزام طويل الأمد.",
      mission: "نحن لا نوفر وكلاء فقط؛ نحن نوفر العمود الفقري التشغيلي الذي يسمح للشركات بالتوسع دون حدود."
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <Head>
        <title>About Pingora | Leadership</title>
      </Head>

      {/* Hero Section */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#0CAA41] font-bold uppercase tracking-widest text-xs mb-4">{t.identity}</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-tight">
            {t.hero}
          </h1>
          <p className="max-w-2xl text-xl text-slate-600 leading-relaxed">
            {t.sub}
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">{t.leadership}</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {t.founders.map((f, i) => (
            <div key={i} className="card-client shadow-xl">
              <div className="user-picture">
                <span className="text-2xl text-[#0CAA41] font-bold">{f.initials}</span>
              </div>
              <p className="name-client text-white">
                {f.name}
                <span className="text-white/80">{f.role}</span>
              </p>
              <div className="social-media flex justify-center gap-4 mt-2">
                <a href={f.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0CAA41]">LinkedIn</a>
                <a href={f.instagram} target="_blank" rel="noreferrer" className="hover:text-[#0CAA41]">Instagram</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pilot Section */}
      <section className="bg-gray-50 py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.pilotTitle}</h2>
        <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
          {t.pilotSub}
        </p>
      </section>

      {/* Mission Statement */}
      <section className="py-16 border-t border-gray-100 text-center max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-medium text-slate-800 italic">
          "{t.mission}"
        </p>
      </section>
    </div>
  )
}
