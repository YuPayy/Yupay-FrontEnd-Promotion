import Link from 'next/link';

export default function Icon() {
  return (
    <section>
      <div className="fixed absolute top-4 left-4 z-[9999]">
        <Link href="/" className="group flex items-center space-x-2">
          <img
            src="/assets/icon.png"
            alt="YuPay icon"
            className="w-12 h-12 object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className="opacity-0 transform -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-xl font-bold "
          >
            <span className="text-black">Yu</span>
            <span className="text-teal-600">Pay</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
