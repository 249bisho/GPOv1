import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null); // 'success', 'error', or 'pending'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending'); // Show loading state
    
    const formData = new FormData(e.target);

    try {
      // THE FIX: Fetching to "/" instead of "/__forms.html" bypasses Next.js routing issues
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // Clear the form on success
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="mb-6">Fill the form and our team will reach out. Or use the Book a Call button to schedule a meeting.</p>

      {/* Show Success or Error Messages */}
      {status === 'success' && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4 border border-green-200">
          Success! We received your message and will reach out shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4 border border-red-200">
          Oops! Something went wrong. Please try again or email us directly.
        </div>
      )}

      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-4 bg-white p-6 rounded shadow-sm"
      >
        {/* Hidden field for Netlify form identification */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field for spam bots */}
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" className="w-full border rounded p-2 focus:ring-2 focus:ring-bisho-darkgreen outline-none" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input name="company" className="w-full border rounded p-2 focus:ring-2 focus:ring-bisho-darkgreen outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" className="w-full border rounded p-2 focus:ring-2 focus:ring-bisho-darkgreen outline-none" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input name="phone" className="w-full border rounded p-2 focus:ring-2 focus:ring-bisho-darkgreen outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" className="w-full border rounded p-2 focus:ring-2 focus:ring-bisho-darkgreen outline-none" rows="4"></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input id="consent" type="checkbox" name="consent" required className="h-4 w-4" />
          <label htmlFor="consent" className="text-sm text-gray-700">I agree to the privacy policy and processing of my data.</label>
        </div>

        <div className="flex gap-2 pt-2">
          <button 
            type="submit" 
            disabled={status === 'pending'}
            className={`${status === 'pending' ? 'bg-gray-400' : 'bg-black'} text-white px-6 py-2 rounded font-bold hover:bg-gray-800 transition shadow-md`}
          >
            {status === 'pending' ? 'Sending...' : 'Send'}
          </button>
          <a href="#" className="bg-white px-6 py-2 rounded border border-gray-300 font-bold hover:bg-gray-50 transition">
            Book a Call
          </a>
        </div>
      </form>

      <div className="mt-8 text-sm text-gray-500 border-t pt-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold">Phone:</span>
          <a href="tel:placeholder" className="hover:underline">placeholder</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Email:</span>
          <a href="mailto:abdulhalimbasheer@gmail.com" className="hover:underline">abdulhalimbasheer@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
