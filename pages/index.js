import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { useRef, useEffect } from 'react';

export default function Home() {
  const { locale } = useRouter();
  const vantaRef = useRef(null);

  const initVanta = () => {
    if (typeof window !== 'undefined' && window.VANTA && window.VANTA.TOPOLOGY) {
      window.VANTA.TOPOLOGY({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0caa41,
        backgroundColor: 0xffffff
      })
    }
  };

  const content = {
    en: {
      hero: "Founder-led, U.S.-ready agents delivering high-touch CX.",
      sub: "Test our small, high-quality team for 30 days — no long-term commitment.",
      servicesTitle: "Our Services",
      services: [
        "Email + Chat support (voice optional)",
        "1–3 highly trained agents",
        "Partial coverage in client timezone",
        "Founder-managed, accountable execution"
      ],
      problemTitle: "When Support Starts Costing You Growth",
      problemSub: "Backlogs, slow response times, and senior team pulled into support quietly damage your business. Most teams don’t need more people—they need controlled, accountable execution.",
      pilotTitle: "30-Day CX Pilot",
      pilotSub: "Experience our founder-led team in action for a full month. Fast setup, full accountability, no long-term commitment.",
      cta: "Start Your Pilot",
      trustTitle: "Trusted by Early Growth Companies",
      trustSub: "High-touch CX solutions for e-commerce, SaaS, and international businesses."
    },
    ar: {
      hero: "وكلاء أمريكيون بقيادة المؤسس يقدمون تجربة عملاء عالية الجودة.",
      sub: "اختبر فريقنا الصغير والعالي الجودة لمدة 30 يومًا — بدون التزام طويل الأمد.",
      servicesTitle: "خدماتنا",
      services: [
        "دعم البريد الإلكتروني والدردشة (صوتي اختياري)",
        "1–3 وكلاء مدربون تدريباً عالياً",
        "تغطية جزئية حسب توقيت العميل",
        "قيادة المؤسس مع مسؤولية كاملة"
      ],
      problemTitle: "عندما يبدأ الدعم في إبطاء نموك",
      problemSub: "الطلبات المتراكمة، بطء الاستجابة، وإشراك الفريق القيادي في الدعم يضر بالأعمال بصمت. معظم الفرق لا تحتاج إلى مزيد من الأشخاص — بل إلى تنفيذ منضبط ومسؤول.",
      pilotTitle: "تجربة CX لمدة 30 يومًا",
      pilotSub: "اختبر فريقنا بقيادة المؤسس لمدة شهر كامل. إعداد سريع، مسؤولية كاملة، بدون التزام طويل الأمد.",
      cta: "ابدأ تجربتك",
      trustTitle: "موثوق من قبل الشركات النامية",
      trustSub: "حلول CX عالية الجودة للتجارة الإلكترونية، SaaS، والأعمال الدولية."
    }
  };

  const t = con
