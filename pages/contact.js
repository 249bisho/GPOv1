import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    
    const formData = new FormData(e.target);

    try {
      // POSTing to /favicon.ico is a trick to stop the 405 error in Next.js
      const response = await fetch("/favicon.ico", {
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
      <p className="mb-6">Fill the form and our team will reach out. Or use the Book a Call button to schedule a meeting.</p>

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
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <div>
          <label className="block text-sm">Name</label>
          <input name="name" className="w-full border rounded p-2" required />
        </div>

        <div>
          <label className="block text-sm">Company</label>
          <input name="company" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm">Email</label>
          <input name="email" type="email" className="w-full border rounded p-2" required />
        </div>

        <div>
          <label className="block text-sm">Phone</label>
          <input name="phone" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm">Message</label>
          <textarea name="message" className="w-full border rounded p-2" rows="4"></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input id="consent" type="checkbox" name="consent" required />
          <label htmlFor="consent" className="text-sm">I agree to the privacy policy and processing of my data.</label>
        </div>

        <div className="flex gap-2">
          <button 
            type="submit" 
            className="bg-bisho-darkgreen text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={status === 'pending'}
          >
            {status === 'pending' ? 'Sending...' : 'Send'}
          </button>
          <a href="#" className="bg-white px-4 py-2 rounded border">Book a Call</a>
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-600">
        <div>Phone: <a href="tel:placeholder" className="underline">placeholder</a></div>
        <div>Email: <a href="mailto:abdulhalimbasheer@gmail.com" className="underline">abdulhalimbasheer@gmail.com</a></div>
      </div>
    </div>
  );
}
