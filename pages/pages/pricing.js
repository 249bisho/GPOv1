export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Pricing & How We Work</h1>
      <p className="mb-6">Lorem ipsum dolor sit amet. Example pricing models and explanation of engagement types.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="font-semibold">Hourly</h3>
          <p className="text-sm text-gray-600">Placeholder rates and terms.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="font-semibold">Per seat</h3>
          <p className="text-sm text-gray-600">Placeholder pricing for retained seats.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="font-semibold">Project</h3>
          <p className="text-sm text-gray-600">Flat-fee project work (placeholder).</p>
        </div>
      </div>
    </div>
  )
}
