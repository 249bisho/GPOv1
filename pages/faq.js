export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">FAQ</h1>
      <div className="space-y-4">
        <details className="bg-white p-4 rounded shadow-sm">
          <summary className="font-semibold">What services do you offer?</summary>
          <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet — placeholder answer.</p>
        </details>
        <details className="bg-white p-4 rounded shadow-sm">
          <summary className="font-semibold">Do you provide Arabic support?</summary>
          <p className="mt-2 text-sm text-gray-600">Yes — we provide Arabic & English support teams.</p>
        </details>
      </div>
    </div>
  )
}
