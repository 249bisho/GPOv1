export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">Message Received.</h1>
      <p className="text-lg text-gray-600 mb-8">We'll get back to you within 24 hours.</p>
      <a href="/" className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-800 transition">
        Back to Home
      </a>
    </div>
  )
}
