import Head from 'next/head'

const services = [
  { title: "Customer Experience", desc: "Native-level omnichannel support in English, Arabic, and global languages.", icon: "💬" },
  { title: "Back Office Operations", desc: "High-accuracy data entry, payroll, and specialized administrative scaling.", icon: "⚙️" },
  { title: "Healthcare BPO", desc: "HIPAA-compliant patient support, medical billing, and clinical assistance.", icon: "🏥" },
  { title: "Technical Support", desc: "Specialized Tier 1-3 support optimized for global SaaS and Tech enterprises.", icon: "🛠️" },
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">
      <Head>
        <title>Services | Pingora Operational Excellence</title>
      </Head>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-black tracking-[0.3em] text-green-600 uppercase mb-4">Our Expertise</h2>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter uppercase">
          OPERATIONAL EXCELLENCE.
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-tr-[40px] border-l-4 border-green-600 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Brand Philosophy Section */}
        <div className="mt-24 p-12 bg-slate-900 rounded-2xl text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Why Pingora?</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              We leverage a decentralized global network to provide specialized talent that doesn't just fill seats—they drive KPIs. From HIPAA compliance to Tier 3 technical troubleshooting, Pingora is the infrastructure behind your growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
