export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between">
        <div>
          <div className="font-bold">Bisho</div>
          <div className="text-sm text-gray-600">Global CX & BPO</div>
        </div>
        <div className="text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Bisho</div>
          <div><a href="/legal/privacy" className="underline">Privacy</a> · <a href="/legal/terms" className="underline">Terms</a></div>
        </div>
      </div>
    </footer>
  )
}
