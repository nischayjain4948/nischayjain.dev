// app/components/Navbar.js
"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-bold">
          Nischay
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link href="/nischayjain.pdf" target="_blank" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
            Download Resume
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/nischayjain.pdf"
            target="_blank"
            className="block px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
