import Head from 'next/head'

export default function Terms() {
  return (
    <div className="bg-[#F6F2EC] min-h-screen text-[#0F1720]">
      <Head>
        <title>Terms of Service | Bisho Global Partnership</title>
        <meta name="description" content="Terms and conditions governing the partnership and service delivery of Bisho BPO." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="border-b border-[#C9A77F]/30 pb-12 mb-12">
          <h2 className="text-[#C9A77F] font-black uppercase tracking-[0.4em] text-xs mb-4">Partnership Framework</h2>
          <h1 className="text-5xl font-black tracking-tighter uppercase text-[#1F5D3B]">
            Terms of Service<span className="text-[#C9A77F]">.</span>
          </h1>
          <p className="mt-4 text-[#3C6A46] font-bold uppercase tracking-widest text-xs">
            Effective Date: January 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 text-[#0F1720]/80 leading-relaxed">
          <section>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">1. Scope of Engagement</h3>
            <p>
              By accessing the Bisho platform or engaging our delivery centers, you agree to the operational 
              standards outlined herein. Bisho provides specialized Business Process Outsourcing (BPO) 
              services, including but not limited to Customer Experience (CX), Technical Support, and Back Office scaling.
            </p>
          </section>

          <section className="bg-white p-8 border-l-4 border-[#C9A77F] shadow-sm">
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">2. Service Level Agreements (SLA)</h3>
            <p className="mb-4">
              Our commitment to excellence is governed by specific KPIs tailored to each partner. 
              Standard engagement includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#3C6A46]">
              <li><strong>Uptime:</strong> 24/7 operational availability for global campaigns.</li>
              <li><strong>Talent:</strong> Provision of verified, bilingual (EN/AR) professionals.</li>
              <li><strong>Security:</strong> Adherence to global data protection protocols.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">3. Professional Conduct</h3>
            <p>
              Bisho maintains a zero-tolerance policy regarding unethical data practices. All partners must 
              comply with international labor standards and data sovereignty laws within the jurisdictions 
              of the United States and the Middle East.
            </p>
          </section>

          <section className="border-t border-[#C9A77F]/20 pt-8">
            <p className="text-xs text-[#3C6A46] italic">
              Disclaimer: This template serves as an operational overview. Final service delivery is 
              governed by the individual Master Service Agreement (MSA) signed by both parties.
            </p>
          </section>
        </div>

        {/* Home Button */}
        <div className="mt-16">
          <a href="/" className="inline-block bg-[#0F1720] text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-[#1F5D3B] transition-all">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  )
}
