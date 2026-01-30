import Link from 'next/link'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()
  const { locale } = router

  // Simple translations for the menu updated for Pingora
  const navItems = {
    en: [
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' }
    ],
    ar: [
      { name: 'عن بينغورا', path: '/about' },
      { name: 'خدماتنا', path: '/services' },
      { name: 'اتصل بنا', path: '/contact' }
    ]
  }

  const currentNav = navItems[locale] || navItems.en

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-10 flex justify-between items-center bg-white border-b border-gray-100 sticky top-0 z-50">
        {/* Logo updated to PINGORA */}
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-slate-900 uppercase">
          PINGORA
        </Link>

        {/* Navigation with Elegant Effect */}
        <nav className="hidden md:flex gap-2">
          {currentNav.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className="nav-link-elegant"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <Link 
            href={router.asPath} 
            locale={locale === 'en' ? 'ar' : 'en'}
            className="nav-link-elegant border border-gray-200 ml-4"
          >
            {locale === 'en' ? 'العربية' : 'EN'}
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer updated to Pingora Global */}
      <footer className="py-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Pingora Global. All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
