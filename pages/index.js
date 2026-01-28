import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center py-36">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-semibold mb-4">Bisho — Global CX & BPO</h1>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder headline describing services.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact"><a className="bg-bisho-darkgreen px-6 py-3 rounded text-white">Contact Us</a></Link>
            <a href="#" className="bg-white text-bisho-text px-6 py-3 rounded">Book a Call</a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold mb-2">Customer Support</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold mb-2">Multilingual Support</h3>
            <p className="text-sm text-gray-600">Arabic & English support teams.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold mb-2">Healthcare BPO</h3>
            <p className="text-sm text-gray-600">HIPAA-aware processes (placeholder).</p>
          </div>
        </div>
      </section>
    </main>
  )
}
