import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const isAr = router.locale === 'ar'
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
    document.documentElement.lang = isAr ? 'ar' : 'en'
  }, [router.locale])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Glassdoor Vibes: Work Sans for Headings, Inter for Body */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Work+Sans:wght@600;700&display=swap" 
          rel="stylesheet" 
        />
        <title>Bisho | Global Talent Solutions</title>
      </Head>

      <Layout>
        <main id="main-content">
          <Component {...pageProps} />
        </main>
      </Layout>

      <style jsx global>{`
        /* Glassdoor Typography Stack */
        h1, h2, h3 {
          font-family: 'Work Sans', sans-serif !important;
          font-weight: 700 !important;
          letter-spacing: -0.02em !important;
          line-height: 1.2 !important;
          color: #111827; /* Dark Slate instead of Black */
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #FFFFFF; /* Pure white like Glassdoor */
          color: #374151;
          -webkit-font-smoothing: antialiased;
        }

        /* Modern Glassdoor Buttons */
        .glassdoor-btn {
          background-color: #0CAA41; /* Glassdoor Green */
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s;
        }
      `}</style>
    </>
  )
}

export default MyApp
