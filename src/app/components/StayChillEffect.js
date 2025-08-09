"use client";
import { useEffect, useState } from "react";

export default function StayChillEffect() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex-1 overflow-hidden sm:mt-32 mt-4 text-center transform transition-all duration-700 ease-out ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="relative w-full ">
        <div className="marquee flex whitespace-nowrap text-3xl sm:text-8xl font-extrabold">
          
          <span className="text-gray-400">Stay chill&nbsp;</span>
          <span className="text-gray-900">Split bills&nbsp;</span>
          <span className="text-gray-400">Stay chill&nbsp;</span>
          <span className="text-gray-900">Split bills&nbsp;</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-181%);
          }
        }
        .marquee {
          animation: marquee 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
