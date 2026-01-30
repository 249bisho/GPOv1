
  import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css' // CRITICAL: This must be here!

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Re-injecting Inter for that Glassdoor look */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <title>Bisho | Global Solutions</title>
      </Head>

      <Layout>
        {/* This tag is what connects your pages to the Layout styles */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
