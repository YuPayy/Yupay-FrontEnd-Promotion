import AboutBlock from "@/components/linestarter";
import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main id="about" className="w-full">
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

        {/* Tombol */}
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

        {/* Panah */}
        <div className="mt-10">
          <span className="text-3xl animate-bounce">↓</span>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="absolute top-0 left-1/2 h-full w-px bg-black" />
        <div className="w-full max-w-3xl z-10">
          <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p className="text-gray-600">
            Born from the shared visions of five Telkom University students, we strive to solve real-world financial fragmentation through simple, scalable, and shared technologies.
          </p>
        </div>
        <div className="mt-10">
          <Icon />
        </div>
      </section>
    <AboutBlock>
      {/* Section 2: What We Do */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="absolute top-0 left-1/2 h-full w-px bg-black" />
        
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">What We Do</h2>
            <p className="text-gray-600">
              We build platforms that make it easier for people to share, manage, and track money with trust and transparency at its core.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/what-we-do.png"
                alt="What We Do"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        
        <div className="mt-10">
          <Icon />
        </div>
      </section>

      {/* Section 3: Why We Exist */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="absolute top-0 left-1/2 h-full w-px bg-black" />
        
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">Why We Exist</h2>
            <p className="text-gray-600">
              We believe everyone deserves tools that empower shared goals, financial independence, and collaborative growth in everyday life.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/why-we-exist.png"
                alt="Why We Exist"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
       
        <div className="mt-10">
          <Icon />
        </div>
      </section>

      {/* Section 4: Money Talks */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pb-20">
        <div className="absolute top-0 left-1/2 h-full w-px bg-black" />
        
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">Money Talks</h2>
            <p className="text-gray-600">
              Your money. Your voice. Your decisions. Let your financial actions speak louder than words—together.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/money-talks.png"
                alt="Money Talks"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        
      </section>
      </AboutBlock>
    </main>
  );
}
