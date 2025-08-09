import Link from 'next/link';

export default function Navbar() {
  return (
    
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent top-2">
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/aboutus">About Us</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
