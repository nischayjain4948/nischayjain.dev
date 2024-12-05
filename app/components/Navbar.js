// app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">Nischay</Link>
        <div>
          <Link href="/about" className="px-4 hover:text-gray-400">About</Link>
          <Link href="/projects" className="px-4 hover:text-gray-400">Projects</Link>
          <Link href="/contact" className="px-4 hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
