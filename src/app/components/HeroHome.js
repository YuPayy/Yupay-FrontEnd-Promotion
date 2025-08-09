"use client";
import SplitBillsEffect from "@/components/SplitBillsEffect";
import StayChillEffect from "@/components/StayChillEffect";
//max-[368px]:w-1/2
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#A2FFEF] to-white overflow-hidden">
      <div className="space-y-10 w-full max-w-6xl ">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full max-[368px]:w-1/2">
          <SplitBillsEffect />
          <StayChillEffect />
        </div>

        <p className="text-lg sm:text-xl max-w-2xl text-gray-600 mx-auto transition-opacity duration-700 delay-1000">
          With YuPay, everyone pays their share—quickly, fairly, and hassle-free.
        </p>

        <button className="px-8 py-4 text-lg font-bold bg-black text-white rounded-full hover:scale-105 transition">
          Split Bill Now
        </button>
      </div>
    </section>
  );
}
