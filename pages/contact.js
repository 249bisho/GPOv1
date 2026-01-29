import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null); // 'success', 'error', or 'pending'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    
    const formData = new FormData(e.target);
    
    // CRITICAL FIX: This tells Netlify which form dashboard to send the data to.
    formData.append("form-name", "contact"); 

    try {
      const response = await fetch("/__forms.html", { // Post directly to the decoy file
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams(formData).toString(),
});

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // Clears the form fields
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

      {/* Status Notifications */}
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
        className="space-y-4 bg-white p-6 rounded shadow-sm border border-gray-100"
      >
        {/* Identifying the form for Netlify's bots */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Spam Protection */}
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input name="company" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input name="phone" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" className="w-full border rounded p-2 outline-none focus:ring-1 focus:ring-black" rows="4" required></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input id="consent" type="checkbox" name="consent" required className="cursor-pointer" />
          <label htmlFor="consent" className="text-sm text-gray-500 cursor-pointer">I agree to the privacy policy and processing of my data.</label>
        </div>

        <div className="flex gap-2 pt-2">
          <button 
            type="submit" 
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition disabled:bg-gray-400 font-bold"
            disabled={status === 'pending'}
          >
            {status === 'pending' ? 'Sending...' : 'Send'}
          </button>
          <a href="#" className="bg-white px-6 py-2 rounded border border-gray-200 hover:bg-gray-50 transition">Book a Call</a>
        </div>
      </form>

      <div className="mt-8 text-sm text-gray-500">
        <div>Phone: <a href="tel:placeholder" className="underline">placeholder</a></div>
        <div>Email: <a href="mailto:abdulhalimbasheer@gmail.com" className="underline">abdulhalimbasheer@gmail.com</a></div>
      </div>
    </div>
  );
}
