'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-transparent border-b border-white/10'
    }`}>
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className={`text-xl font-bold hover:text-accent-blue transition-colors ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}>제이에스일렉트론</Link>
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="/about" className={`hover:text-accent-blue transition-colors ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Company</Link>
          <Link href="/products" className={`hover:text-accent-blue transition-colors ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Product</Link>
          <Link href="/support" className={`hover:text-accent-blue transition-colors ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Customer Center</Link>
          <Link href="/contact" className={`hover:text-accent-blue transition-colors ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Contact</Link>
        </div>
        <div className="md:hidden">
          <button className={isScrolled ? 'text-gray-900' : 'text-white'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
