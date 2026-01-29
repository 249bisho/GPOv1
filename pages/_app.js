import Head from 'next/head'

// Inside your function:
<Head>
  <title>Bisho | Global CX & BPO Solutions</title>
  <meta name="description" content="Premium multilingual BPO services for U.S. and Middle East markets." />
  <link rel="icon" href="/favicon.ico" />
</Head>
  import '../styles/globals.css'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Set dir attribute for RTL locales
    if (router.locale === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
    }
  }, [router.locale])

  return (
    <Layout>
      <a href="#content" className="skip-link">Skip to content</a>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
