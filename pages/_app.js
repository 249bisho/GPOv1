import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    </>
  )
}

export default MyApp
