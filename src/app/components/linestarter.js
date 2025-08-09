"use client";
import { useEffect, useRef, useState } from "react";

export default function AboutBlock({ children }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        // seberapa besar section ini terlihat
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
        const percentageVisible = visibleHeight / rect.height;

        // atur tinggi garis berdasarkan visibility (maks: full tinggi kontainer)
        const newHeight = percentageVisible * rect.height;
        setHeight(newHeight);
      }
    };

    handleScroll(); // jalankan awal
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative py-32">
      {/* Garis utama (tumbuh dari tengah layar, ke atas dan bawah) */}
      <div
        ref={lineRef}
        className="absolute left-1/2 top-1/2 w-px bg-black -translate-x-1/2 z-10"
        style={{
          height: `${height}px`,
          transform: `translate(-50%, -${height / 2}px)`,
          transition: "height 0.2s ease, transform 0.2s ease",
        }}
      />

      {/* Konten */}
      <div className="w-full max-w-3xl mt-16 flex flex-col gap-24">
      {children}
    </div>
    </div>
  );
}
