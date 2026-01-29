import Head from 'next/head'

export default function Privacy() {
  return (
    <div className="bg-[#F6F2EC] min-h-screen text-[#0F1720]">
      <Head>
        <title>Privacy Policy | Bisho Data Security</title>
        <meta name="description" content="Our commitment to data privacy, HIPAA compliance, and international security standards." />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="border-b border-[#C9A77F]/30 pb-12 mb-12">
          <h2 className="text-[#C9A77F] font-black uppercase tracking-[0.4em] text-xs mb-4">Compliance & Security</h2>
          <h1 className="text-5xl font-black tracking-tighter uppercase text-[#1F5D3B]">
            Privacy Policy<span className="text-[#C9A77F]">.</span>
          </h1>
          <p className="mt-4 text-[#3C6A46] font-bold uppercase tracking-widest text-xs">
            Operational Standard v1.0
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 text-[#0F1720]/80 leading-relaxed">
          <section>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">1. Commitment to Privacy</h3>
            <p>
              Bisho ("we," "us," or "our") operates as a high-security bridge for global operations. We prioritize 
              the confidentiality of our clients' data through rigorous encryption and strict access controls 
              that meet both U.S. and Middle Eastern regulatory requirements.
            </p>
          </section>

          <section className="bg-white p-8 border-l-4 border-[#1F5D3B] shadow-sm">
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">2. Data Processing (BPO Standards)</h3>
            <p className="mb-4">
              As a Business Process Outsourcing provider, we act as both a data controller and a data processor. 
              Our teams are trained in:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#3C6A46]">
              <li><strong>HIPAA Compliance:</strong> Secure handling of patient health information (PHI).</li>
              <li><strong>PCI-DSS:</strong> Safe processing of payment and financial data.</li>
              <li><strong>GDPR:</strong> Protecting the rights of European and global data subjects.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1F5D3B] mb-4">3. Information Security</h3>
            <p>
              We implement industry-leading technical measures, including end-to-end encryption and 
              multi-factor authentication (MFA), to ensure that the data entrusted to our bilingual 
              delivery centers remains impenetrable.
            </p>
          </section>

          <section className="border-t border-[#C9A77F]/20 pt-8">
            <p className="text-xs text-[#3C6A46]">
              *Note: This is an operational policy framework. For specific client-partner non-disclosure 
              agreements (NDAs), please contact your account manager directly.*
            </p>
          </section>
        </div>

        {/* Home Button */}
        <div className="mt-16">
          <a href="/" className="text-sm font-black border-b-2 border-[#1F5D3B] pb-1 uppercase tracking-widest hover:text-[#C9A77F] transition-colors">
            Return to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
