export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Contact Us</h1>
      
      {/* This is a "Traditional" Form. 
        It bypasses the JavaScript that is causing your "Oops" error.
      */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact?success=true" 
        className="space-y-6"
      >
        {/* These hidden fields tell Netlify: "This is a real form, save this data" */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <div>
          <label className="block text-sm font-bold uppercase mb-1">Name</label>
          <input name="name" className="w-full border-2 border-black p-4 outline-none focus:border-bisho-darkgreen" required />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase mb-1">Email</label>
          <input name="email" type="email" className="w-full border-2 border-black p-4 outline-none" required />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase mb-1">Message</label>
          <textarea name="message" className="w-full border-2 border-black p-4 outline-none" rows="5" required></textarea>
        </div>

        <button type="submit" className="bg-black text-white px-12 py-4 font-black uppercase tracking-widest hover:bg-gray-800 transition-all w-full md:w-auto">
          Send Message
        </button>
      </form>
    </div>
  );
}
