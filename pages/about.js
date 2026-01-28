export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">About Bisho</h1>
      <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Short company mission and leadership overview.</p>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="font-semibold">Bashir A.</div>
          <div className="text-sm text-gray-600">Founder & CEO</div>
          <p className="text-sm mt-2">Placeholder bio for leadership.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="font-semibold">Head of Delivery</div>
          <div className="text-sm text-gray-600">Placeholder</div>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="font-semibold">Head of Talent</div>
          <div className="text-sm text-gray-600">Placeholder</div>
        </div>
      </section>
    </div>
  )
}
