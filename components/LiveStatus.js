import { useState, useEffect } from 'react';

export default function LiveStatus() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0F1720] text-[#C9A77F] py-2 px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Systems Operational
      </div>
      <div>Global Time: {time}</div>
      <div className="hidden md:block">Bilingual Support: Active</div>
    </div>
  );
}
