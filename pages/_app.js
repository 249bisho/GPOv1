import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Sync the HTML direction with the Next.js locale
    const dir = router.locale === 'ar' ? 'rtl' : 'ltr';
    const lang = router.locale === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [router.locale])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Modern Font Injection: Inter for UI, Syne for Headings */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Syne:wght@800&display=swap" 
          rel="stylesheet" 
        />
        <title>Bisho | Global CX & BPO Solutions</title>
      </Head>

      <Layout>
        <main id="main-content">
          <Component {...pageProps} />
        </main>
      </Layout>

      <style jsx global>{`
        /* Global Typography Reset for a Modern Look */
        h1, h2, h3, .bold-heading {
          font-family: 'Syne', sans-serif !important;
          font-weight: 800 !important;
          letter-spacing: -0.05em !important;
          line-height: 0.85 !important;
          text-transform: uppercase;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #F6F2EC; /* Bisho Cream */
          color: #0F1720; /* Bisho Dark */
          -webkit-font-smoothing: antialiased;
        }

        /* Smooth page transitions without needing external libraries */
        main {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

export default MyApp
