import { useEffect, useState } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-2520N9131Y'

export default function CookieConsent() {
  const [seen, setSeen] = useState(true)
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('bisho_cookie_consent')
    if (!saved) {
      setSeen(false)
    } else {
      const parsed = JSON.parse(saved)
      setAnalyticsAllowed(!!parsed.analytics)
      // If allowed, dynamically load GA
      if (parsed.analytics) {
        loadGA()
      }
    }
  }, [])

  function acceptAll() {
    localStorage.setItem('bisho_cookie_consent', JSON.stringify({ analytics: true }))
    setAnalyticsAllowed(true)
    setSeen(true)
    loadGA()
  }

  function acceptNecessary() {
    localStorage.setItem('bisho_cookie_consent', JSON.stringify({ analytics: false }))
    setAnalyticsAllowed(false)
    setSeen(true)
  }

  function loadGA() {
    if (typeof window === 'undefined') return
    if ((window as any).bishoGA) return
    // insert GA script
    const s = document.createElement('script')
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    s.async = true
    document.head.appendChild(s)
    const inline = document.createElement('script')
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `
    document.head.appendChild(inline)
    ;(window as any).bishoGA = true
  }

  if (seen) return null

  return (
    <div className="fixed left-4 right-4 bottom-4 bg-white shadow-lg p-4 rounded flex flex-col md:flex-row md:items-center md:justify-between z-50">
      <div className="mb-3 md:mb-0">
        <strong>Bisho uses cookies</strong>
        <div className="text-sm text-gray-700">We use necessary cookies and analytics to improve the site. You can accept analytics or just necessary.</div>
      </div>
      <div className="flex gap-2">
        <button onClick={acceptNecessary} className="px-4 py-2 border rounded">Necessary only</button>
        <button onClick={acceptAll} className="px-4 py-2 bg-bisho-darkgreen text-white rounded">Accept analytics</button>
      </div>
    </div>
  )
}
