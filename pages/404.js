import Head from 'next/head'

// Inside your function:
<Head>
  <title>Bisho | Global CX & BPO Solutions</title>
  <meta name="description" content="Premium multilingual BPO services for U.S. and Middle East markets." />
  <link rel="icon" href="/favicon.ico" />
</Head>
  export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-2">Page not found — Lorem ipsum.</p>
      </div>
    </div>
  )
}
