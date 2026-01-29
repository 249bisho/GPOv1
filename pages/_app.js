import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Set dir attribute for RTL locales automatically
    if (router.locale === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
    }
  }, [router.locale])

  return (
    <>
      <Head>
        {/* These tags apply to every single page on the site */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Bisho | Global CX & BPO Solutions</title>
      </Head>

      <Layout>
        {/* Accessibility skip link (hidden by default in CSS) */}
        <a href="#main-content" className="sr-only focus:not-sr-only px-4 py-2 bg-bisho-gold text-white absolute z-50">
          Skip to content
        </a>
        
        <main id="main-content">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  )
}

export default MyApp
