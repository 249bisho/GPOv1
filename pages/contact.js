import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Contact() {
  const { locale } = useRouter();

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Ready to scale your operations? Let's discuss how Pingora can build your global team.",
      name: "Full Name",
      email: "Work Email",
      message: "How can we help you scale?",
      button: "Send Inquiry",
      info: "Global Headquarters",
      address: "Pingora Solutions Group",
      tagline: "Unlimited Scale. Zero Friction."
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "جاهز لتوسيع عملياتك؟ دعنا نناقش كيف يمكن لـ بينغورا بناء فريقك العالمي.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني للعمل",
      message: "كيف يمكننا مساعدتك في التوسع؟",
      button: "إرسال الاستفسار",
      info: "المقر العالمي",
      address: "مجموعة بينغورا للحلول",
      tagline: "توسع لا نهائي. بلا عوائق."
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="bg-white min-h-screen py-24 px-6 text-slate-900">
      <Head>
        <title>Contact | Pingora Global</title>
      </Head>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Info */}
        <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            {t.title}
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-md">
            {t.subtitle}
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-green-600 font-bold uppercase tracking-widest text-xs mb-2">{t.info}</h3>
              <p className="font-bold text-xl">{t.address}</p>
              <p className="text-slate-500">contact@pingora.global</p>
            </div>
            <div className="pt-8 border-t border-gray-100">
              <p className="text-2xl font-black text-slate-200 uppercase italic">
                {t.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">{t.name}</label>
              <input 
                type="text" 
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">{t.email}</label>
              <input 
                type="email" 
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">{t.message}</label>
              <textarea 
                rows="4" 
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg">
              {t.button}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
