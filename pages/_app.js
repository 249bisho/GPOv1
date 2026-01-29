import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Handling RTL/LTR switch and Body classes for styling
    if (router.locale === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
      document.body.classList.add('font-arabic') // Optional: separate font for Arabic
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
      document.body.classList.remove('font-arabic')
    }
  }, [router.locale])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* INJECTING MODERN FONTS: Syne for Headings, Inter for UI */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Syne:wght@700;800&display=swap" 
          rel="stylesheet" 
        />
        <title>Bisho | Global CX & BPO Solutions</title>
      </Head>

      <Layout>
        {/* Dynamic Page Transition Wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <main id="main-content">
              <Component {...pageProps} />
            </main>
          </motion.div>
        </AnimatePresence>
      </Layout>

      <style jsx global>{`
        /* The "Secret Sauce" for Boldness */
        h1, h2, h3 {
          font-family: 'Syne', sans-serif;
          letter-spacing: -0.04em;
          line-height: 0.9;
        }
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        ::selection {
          background: #1F5D3B;
          color: white;
        }
      `}</style>
    </>
  )
}

export default MyApp
