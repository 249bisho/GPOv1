import Head from 'next/head'

export default function About() {
  return (
    <div className="bg-[#F6F2EC] min-h-screen text-[#0F1720]">
      <Head>
        <title>About Bisho | Leadership & Vision</title>
        <meta name="description" content="Premium multilingual BPO services for U.S. and Middle East markets." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Header */}
      <section className="py-24 px-6 bg-[#1F5D3B] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#C9A77F] font-black uppercase tracking-[0.4em] text-xs mb-4">Our Identity</h2>
          <h1 className="text-6xl font-black tracking-tighter mb-8 leading-tight">
            BRIDGING MARKETS. <br/>SCALING TEAMS.
          </h1>
          <p className="max-w-2xl text-lg text-[#F6F2EC]/80 leading-relaxed font-medium">
            Bisho was founded to eliminate the friction between U.S. operational needs and Middle Eastern talent potential. We provide 24/7 coverage with precision and global standards.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-sm font-black tracking-[0.3em] text-[#C9A77F] uppercase mb-12">Leadership</h2>
        
        <section className="grid md:grid-cols-3 gap-10">
          {/* Bashir - CEO */}
          <div className="bg-white p-8 rounded-tr-[40px] border-l-4 border-[#1F5D3B] shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-1 bg-[#C9A77F] mb-6"></div>
            <div className="font-black text-2xl uppercase tracking-tighter">Bashir A.</div>
            <div className="text-xs font-bold text-[#3C6A46] uppercase tracking-widest mt-1 mb-4">Founder & CEO</div>
            <p className="text-sm text-[#0F1720]/70 leading-relaxed">
              Leading the vision for a high-design, high-execution BPO that connects global markets.
            </p>
          </div>

          {/* Head of Delivery */}
          <div className="bg-white p-8 rounded-tr-[40px] border-l-4 border-[#1F5D3B] shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-1 bg-[#C9A77F] mb-6"></div>
            <div className="font-black text-2xl uppercase tracking-tighter">Delivery lead</div>
            <div className="text-xs font-bold text-[#3C6A46] uppercase tracking-widest mt-1 mb-4">Operations</div>
            <p className="text-sm text-[#0F1720]/70 leading-relaxed">
              Managing 24/7 workflows and ensuring quality across all client campaigns.
            </p>
          </div>

          {/* Head of Talent */}
          <div className="bg-white p-8 rounded-tr-[40px] border-l-4 border-[#1F5D3B] shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-1 bg-[#C9A77F] mb-6"></div>
            <div className="font-black text-2xl uppercase tracking-tighter">Talent Lead</div>
            <div className="text-xs font-bold text-[#3C6A46] uppercase tracking-widest mt-1 mb-4">Recruitment</div>
            <p className="text-sm text-[#0F1720]/70 leading-relaxed">
              Sourcing the top 1% of bilingual talent in the Middle East for specialized BPO roles.
            </p>
          </div>
        </section>

        {/* Brand Mission Statement */}
        <div className="mt-24 border-t border-[#C9A77F]/30 pt-12 text-center max-w-3xl mx-auto">
          <p className="italic text-xl text-[#3C6A46]">
            "We don't just provide agents; we provide the operational backbone that allows businesses to compete with the giants."
          </p>
        </div>
      </div>
    </div>
  )
}
