import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [status, setStatus] = useState(null); // 'success', 'error', or 'pending'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    
    const formData = new FormData(e.target);
    formData.append("form-name", "contact");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#F6F2EC] min-h-screen text-[#0F1720]">
      <Head>
        <title>Bisho | Contact Global CX & BPO Solutions</title>
        <meta name="description" content="Premium multilingual BPO services for U.S. and Middle East markets." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-2 text-[#1F5D3B]">
          Contact Bisho.
        </h1>
        <p className="text-xl font-medium mb-12 text-[#3C6A46]">Global Business Process Outsourcing</p>

        {status === 'success' && (
          <div className="bg-[#1F5D3B] text-white p-6 rounded mb-8 font-bold uppercase tracking-widest">
            Submission Received. We will be in touch shortly.
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-600 text-white p-6 rounded mb-8 font-bold">
            Something went wrong. Please try again.
          </div>
        )}

        <form
          name="contact"
          onSubmit={handleSubmit}
          className="space-y-8"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <input name="name" placeholder="NAME" className="bg-transparent border-b-2 border-[#C9A77F] p-4 outline-none focus:border-[#1F5D3B] transition-colors" required />
            <input name="email" type="email" placeholder="EMAIL" className="bg-transparent border-b-2 border-[#C9A77F] p-4 outline-none focus:border-[#1F5D3B] transition-colors" required />
          </div>

          <textarea name="message" placeholder="MESSAGE" className="w-full bg-transparent border-b-2 border-[#C9A77F] p-4 outline-none focus:border-[#1F5D3B] transition-colors h-32" required></textarea>

          <button 
            type="submit" 
            className="bg-[#1F5D3B] text-white px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-black transition-all"
            disabled={status === 'pending'}
          >
            {status === 'pending' ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}
