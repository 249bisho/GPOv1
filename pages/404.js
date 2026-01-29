import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-[#F6F2EC] min-h-[80vh] flex items-center justify-center text-[#0F1720] px-6">
      <Head>
        <title>404 | Page Not Found - Bisho</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>

      <div className="text-center">
        {/* The Big Bold Error Number */}
        <h1 className="text-[12rem] font-black leading-none text-[#1F5D3B] opacity-10 select-none">
          404
        </h1>
        
        {/* The Message */}
        <div className="relative -mt-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
            Connection Lost.
          </h2>
          <p className="text-[#3C6A46] font-medium mb-12 max-w-md mx-auto">
            The operational path you're looking for doesn't exist or has been moved. 
            Let's get you back to headquarters.
          </p>

          {/* Action Button */}
          <Link 
            href="/" 
            className="inline-block bg-[#1F5D3B] text-white px-10 py-4 font-black uppercase tracking-[0.2em] hover:bg-[#0F1720] transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
