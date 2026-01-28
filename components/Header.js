import Header from './Header'
import Footer from './Footer'
import CookieConsent from './CookieConsent'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bisho-sand text-bisho-text">
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
