import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="bg-bisho-sand py-36">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold mb-4 text-bisho-darkgreen">Bisho — Global CX & BPO</h1>
          <p className="mb-6 text-bisho-text">Scaleable Customer Success & Data Operations center based in Cairo, Egypt.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-bisho-darkgreen px-6 py-3 rounded text-white">
              Contact Us
            </Link>
            <a href="#" className="bg-white border border-bisho-darkgreen text-bisho-darkgreen px-6 py-3 rounded">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-bisho-darkgreen">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-2 text-bisho-text">Customer Support</h3>
            <p className="text-sm text-gray-600">High-touch support for global clients.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-2 text-bisho-text">Multilingual Support</h3>
            <p className="text-sm text-gray-600">Specialized Arabic & English support teams.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-2 text-bisho-text">Healthcare BPO</h3>
            <p className="text-sm text-gray-600">HIPAA-compliant data operations.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
