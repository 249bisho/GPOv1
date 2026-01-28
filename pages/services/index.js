export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. This page lists the primary services Bisho offers.</p>

      <ul className="space-y-4">
        <li className="p-4 bg-white rounded shadow-sm">
          <h3 className="font-semibold">Customer Support (24/7)</h3>
          <p className="text-sm text-gray-600">Placeholder description for support services.</p>
        </li>
        <li className="p-4 bg-white rounded shadow-sm">
          <h3 className="font-semibold">Multilingual CX (Arabic & English)</h3>
          <p className="text-sm text-gray-600">Placeholder description for multilingual capabilities.</p>
        </li>
        <li className="p-4 bg-white rounded shadow-sm">
          <h3 className="font-semibold">Healthcare BPO</h3>
          <p className="text-sm text-gray-600">Placeholder for healthcare-specific operations.</p>
        </li>
      </ul>
    </div>
  )
}
