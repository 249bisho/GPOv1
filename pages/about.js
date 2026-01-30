import Head from 'next/head'
import { useRouter } from 'next/router'

export default function About() {
  const { locale } = useRouter();

  const content = {
    en: {
      identity: "Our Identity",
      hero: "BRIDGING MARKETS. SCALING TEAMS.",
      sub: "Bisho was founded to eliminate the friction between U.S. operational needs and Middle Eastern talent potential.",
      leadership: "Leadership",
      bashir: "Bashir A.",
      razan: "Razan A.",
      role: "Co-founder",
      mission: "We don't just provide agents; we provide the operational backbone that allows businesses to compete with the giants."
    },
    ar: {
      identity: "هويتنا",
      hero: "ربط الأسواق. توسيع الفرق.",
      sub: "تأسست بيشو لإزالة الاحتكاك بين الاحتياجات التشغيلية الأمريكية وإمكانيات المواهب في الشرق الأوسط.",
      leadership: "القيادة",
      bashir: "بشير أ.",
      razan: "رزان أ.",
      role: "مؤسس مشارك",
      mission: "نحن لا نوفر وكلاء فحسب؛ نحن نوفر العمود الفقري التشغيلي الذي يسمح للشركات بمنافسة العمالقة."
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <Head>
        <title>About Bisho | Leadership</title>
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

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">{t.leadership}</h2>
        
        {/* Founders Grid */}
        <section className="flex flex-wrap justify-center gap-12">
          
          {/* BASHIR A. CARD */}
          <div className="card-client shadow-xl">
            <div className="user-picture">
               <span className="text-2xl text-[#0CAA41] font-bold">BA</span>
            </div>
            <p className="name-client text-white">
              {t.bashir}
              <span className="text-white/80">{t.role}</span>
            </p>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/basheer-abdulhalim-0246802b6" target="_blank" rel="noreferrer">
                <span className="tooltip-social">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <span className="tooltip-social">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* RAZAN A. CARD */}
          <div className="card-client shadow-xl">
            <div className="user-picture">
               <span className="text-2xl text-[#0CAA41] font-bold">RA</span>
            </div>
            <p className="name-client text-white">
              {t.razan}
              <span className="text-white/80">{t.role}</span>
            </p>
            <div className="social-media">
              <a href="#" target="_blank" rel="noreferrer">
                <span className="tooltip-social">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <span className="tooltip-social">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </section>

        {/* Mission Statement */}
        <div className="mt-32 py-16 border-t border-gray-100 text-center max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-medium text-slate-800 italic">
            "{t.mission}"
          </p>
        </div>
      </div>
    </div>
  )
}
