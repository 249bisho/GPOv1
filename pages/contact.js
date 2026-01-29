import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    
    const formData = new FormData(e.target);

    try {
      // Sending to "/" avoids the 404 since you don't have a favicon
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
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="mb-6 text-gray-600">Fill the form and our team will reach out shortly.</p>

      {status === 'success' && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4 border border-green-200">
          Success! We received your message.
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
        className="space-y-4 bg-white p-6 rounded shadow-sm border border-gray-100"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Company</label>
          <input name="company" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input name="phone" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" rows="4" required></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input id="consent" type="checkbox" name="consent" required />
          <label htmlFor="consent" className="text-sm text-gray-500">I agree to the privacy policy.</label>
        </div>

        <div className="flex gap-2">
          <button 
            type="submit" 
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition disabled:bg-gray-400"
            disabled={status === 'pending'}
          >
            {status === 'pending' ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}
