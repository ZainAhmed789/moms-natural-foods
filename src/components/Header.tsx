// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
        <div>
           <Image 
             src="/assets/logo.png" 
             alt="Moms Natural Foods Logo" 
             width={150} 
             height={50} 
             className="object-contain"
           />
        </div>
         
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' ? 'text-primary font-medium' : 'text-dark hover:text-primary'} font-medium`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`nav-link ${pathname === '/about' ? 'text-primary font-medium' : 'text-dark hover:text-primary'} font-medium`}
          >
            About
          </Link>
          <Link 
            href="/products" 
            className={`nav-link ${pathname === '/products' ? 'text-primary font-medium' : 'text-dark hover:text-primary'} font-medium`}
          >
            Products
          </Link>
          <Link 
            href="/contact" 
            className={`nav-link ${pathname === '/contact' ? 'text-primary font-medium' : 'text-dark hover:text-primary'} font-medium`}
          >
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/products" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
            Shop Now
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-primary font-medium' : 'text-dark hover:text-primary'} font-medium py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${pathname === '/about' ? 'text-primary font-medium' : 'text-dark hover:text-primary'} font-medium py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/products" 
              className={`${pathname === '/products' ? 'text-primary font-medium' : 'text-dark hover:text-primary'} font-medium py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className={`${pathname === '/contact' ? 'text-primary font-medium' : 'text-dark hover:text-primary'} font-medium py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;