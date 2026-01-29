const services = [
  { title: "Customer Experience", desc: "Omnichannel support in English & Arabic.", icon: "💬" },
  { title: "Back Office Operations", desc: "Data entry, payroll, and administrative scale.", icon: "⚙️" },
  { title: "Healthcare BPO", desc: "HIPAA-compliant patient support and billing.", icon: "🏥" },
  { title: "Technical Support", desc: "Tier 1-3 support for U.S. SaaS companies.", icon: "🛠️" },
];

export default function Services() {
  return (
    <div className="bg-bisho-sand min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-black tracking-[0.3em] text-bisho-lightbrown uppercase mb-4">Our Expertise</h2>
        <h1 className="text-5xl font-black text-bisho-darkgreen mb-12 tracking-tighter">OPERATIONAL EXCELLENCE.</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-tr-[40px] border-l-4 border-bisho-darkgreen shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-bisho-text">{s.title}</h3>
              <p className="text-bisho-olive text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
