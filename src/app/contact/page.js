"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";

export default function ContactPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100 py-12">
      <Icon />

      {/* Judul Contact Us - kotak pertama (full width, center) */}
      <div
        className={`transition-all duration-700 mb-12 text-center ${
          show ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold text-teal-600">Contact Us</h1>
      </div>

      {/* Dua kotak di bawah: form + info */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Formulir - kotak kiri */}
        <div
          className={`transition-all duration-700 delay-200 ${
            show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <form className="bg-white p-6 rounded shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full border px-4 py-2 rounded"
              rows={4}
            ></textarea>
            <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Info YuPay - kotak kanan */}
        <div
          className={`transition-all duration-700 delay-300 ${
            show ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2 text-teal-600">YuPay Office</h2>
            <p className="text-gray-600">Bandung, Indonesia</p>
            <p className="text-gray-600">Email: support@yupay.com</p>
            <p className="text-gray-600">Phone: +62 812 3456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
}
