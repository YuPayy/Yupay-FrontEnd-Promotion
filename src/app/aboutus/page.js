"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function AboutPage() {
  const containerRef = useRef(null);
  const bRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateLine = () => {
      if (containerRef.current && bRef.current) {
        const containerTop =
          containerRef.current.getBoundingClientRect().top + window.scrollY;
        const bBottom =
          bRef.current.getBoundingClientRect().bottom + window.scrollY;
        setLineHeight(bBottom - containerTop);
      }
    };

    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);
  }, []);

  return (
    <main id="about" className="w-full">
      <Icon />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="flex justify-center items-center gap-6 text-4xl font-bold">
          <span>Smarter</span>
          <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-white shadow-lg">
            <Image
              src="/team.png"
              alt="Team"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <span>Sharing</span>
        </div>

        <h1 className="text-5xl font-bold mt-4">Better Living</h1>

        {/* Tombol navigasi */}
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="#about">
            <span className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-full cursor-pointer transition">
              About Us
            </span>
          </Link>
          <Link href="#our-team">
            <span className="border border-black py-2 px-6 rounded-full cursor-pointer hover:bg-black hover:text-white transition">
              Our team
            </span>
          </Link>
        </div>

        {/* Panah ke bawah */}
        <div className="mt-10">
          <span className="text-3xl animate-bounce">↓</span>
        </div>

        {/* Who We Are */}
        <div className="w-full max-w-3xl mt-12">
          <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p className="text-gray-600">
            Born from the shared visions of five Telkom University students...
          </p>
        </div>
      </section>

      {/* Our Insights Section */}
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50 py-12"
      >
        {/* Garis Tengah */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px bg-black z-[60] transition-all duration-500"
          style={{ height: `${lineHeight}px` }}
        />

        <h2 className="text-3xl font-bold mb-10">Our Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl text-left">
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold mb-2">Why We Exist</h2>
              <p className="text-gray-600">
                We believe everyone deserves tools that empower shared goals,
                financial independence, and collaborative growth in everyday
                life.
              </p>
            </div>
          ))}
        </div>
        <div ref={bRef} className="w-full max-w-3xl mt-12"></div>
        {/* Batas Bawah Garis */}
        <div  className="w-full max-w-3xl mt-12">
          <h2 className="text-2xl font-bold mb-2">Money Talks</h2>
          <p className="text-gray-600">
            Your money. Your voice. Your decisions. Let your financial actions
            speak louder than words—together.
          </p>
        </div>
      </section>
    </main>
  );
}
