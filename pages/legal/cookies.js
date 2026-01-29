import Head from 'next/head'

export default function Cookies() {
  return (
    <div className="bg-[#F6F2EC] min-h-screen text-[#0F1720]">
      <Head>
        <title>Cookie Policy | Bisho Global Operations</title>
        <meta name="description" content="Transparency regarding our use of cookies and data processing at Bisho." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="border-b border-[#C9A77F]/30 pb-12 mb-12">
          <h2 className="text-[#C9A77F] font-black uppercase tracking-[0.4em] text-xs mb-4">Legal Transparency</h2>
          <h1 className="text-5xl font-black tracking-tighter uppercase text-[#1F5D3B]">
            Cookie Policy<span className="text-[#C9A77F]">.</span>
          </h1>
          <p className="mt-4 text-[#3C6A46] font-bold uppercase tracking-widest text-xs">
            Last Updated: January 2024
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 text-[#0F1720]/80 leading-relaxed">
          <section>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">1. Data Integrity</h3>
            <p>
              Bisho utilizes cookies to ensure the security, efficiency, and performance of our operational portal. 
              By using our site, you acknowledge our use of essential cookies designed to optimize your experience.
            </p>
          </section>

          <section className="bg-white p-8 border-l-4 border-[#C9A77F] shadow-sm">
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">2. Performance & Analytics</h3>
            <p className="mb-4">
              We utilize analytical tools to understand how our partners interact with the Bisho brand. This data is 
              anonymized and used exclusively to improve our service delivery speed.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#3C6A46]">
              <li>Session Security</li>
              <li>Load Balancing</li>
              <li>Language Preference Storage</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">3. Global Standards</h3>
            <p>
              In alignment with GDPR and international data privacy laws, Bisho provides you with full control over 
              your data. You may disable cookies through your browser settings, though some enterprise features 
              may be restricted.
            </p>
          </section>
        </div>

        {/* Contact Link */}
        <div className="mt-20 p-10 bg-[#1F5D3B] text-white text-center">
          <h4 className="font-black mb-4">QUESTIONS REGARDING PRIVACY?</h4>
          <p className="text-[#C9A77F] text-sm mb-6">Our compliance team is available for deep-dive inquiries.</p>
          <a href="/contact" className="inline-block border-2 border-white px-8 py-3 font-black uppercase tracking-widest hover:bg-white hover:text-[#1F5D3B] transition-all">
            Contact Compliance
          </a>
        </div>
      </div>
    </div>
  )
}
