import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#F6F2EC] min-h-screen text-[#0F1720]">
      <Head>
        <title>Bisho | Global CX & BPO Solutions</title>
        <meta name="description" content="Premium multilingual BPO services for U.S. and Middle East markets. Specialized in Healthcare and 24/7 Support." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#C9A77F] font-black uppercase tracking-[0.4em] text-xs mb-6">Global Operations</h2>
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-[#1F5D3B]">
            UNLIMITED <br/>SCALE.
          </h1>
          <p className="max-w-xl text-xl text-[#3C6A46] mb-12 font-medium leading-relaxed">
            High-execution BPO solutions connecting specialized talent from the Middle East to global markets. 24/7 coverage. Zero friction.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#0F1720] text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-[#1F5D3B] transition-all">
              Start Scaling
            </Link>
            <Link href="/services" className="border-2 border-[#1F5D3B] text-[#1F5D3B] px-10 py-5 font-black uppercase tracking-widest hover:bg-[#1F5D3B] hover:text-white transition-all">
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-y border-[#C9A77F]/20 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-[#1F5D3B]">24/7</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#C9A77F]">Availability</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#1F5D3B]">99%</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#C9A77F]">SLA Accuracy</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#1F5D3B]">EN/AR</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#C9A77F]">Native Fluency</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#1F5D3B]">100%</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#C9A77F]">HIPAA Compliant</div>
          </div>
        </div>
      </section>

      {/* MINI SERVICES PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[#C9A77F] font-black uppercase tracking-[0.3em] text-xs mb-2">Capabilities</h2>
              <h3 className="text-4xl font-black uppercase tracking-tighter">Core Verticals</h3>
            </div>
            <Link href="/services" className="text-sm font-black border-b-2 border-[#1F5D3B] pb-1 uppercase tracking-widest hover:text-[#C9A77F] transition-colors">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border-l-4 border-[#1F5D3B] rounded-tr-[30px] shadow-sm">
              <h4 className="font-black text-xl mb-4 uppercase">Healthcare</h4>
              <p className="text-sm text-[#3C6A46]">Patient coordination and specialized medical billing support.</p>
            </div>
            <div className="p-8 bg-white border-l-4 border-[#1F5D3B] rounded-tr-[30px] shadow-sm">
              <h4 className="font-black text-xl mb-4 uppercase">Tech Support</h4>
              <p className="text-sm text-[#3C6A46]">Tier 1-3 technical troubleshooting for SaaS and E-commerce.</p>
            </div>
            <div className="p-8 bg-white border-l-4 border-[#1F5D3B] rounded-tr-[30px] shadow-sm">
              <h4 className="font-black text-xl mb-4 uppercase">Back Office</h4>
              <p className="text-sm text-[#3C6A46]">Data verification, payroll processing, and audit support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
