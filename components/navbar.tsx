'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Watches',
    'Smart Watches',
    'Wall Clocks',
    'Electronics',
    'Services',
    'About'
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#0A0A0A] ${
        isScrolled ? 'backdrop-blur-md h-16 border-b border-[rgba(201,168,76,0.2)]' : 'h-20 border-b border-[rgba(201,168,76,0.2)]'
      }`}
    >
      <div className="h-full px-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl">⌚</span>
          <span
            className="text-[#E8C96A] text-2xl font-light tracking-wide"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            Time&Time
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[#F5F0E8] text-xs uppercase tracking-widest hover:text-[#E8C96A] transition-colors"
              style={{ fontFamily: 'Cinzel' }}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="text-[#F5F0E8] hover:text-[#E8C96A] transition-colors p-2">
            <Search size={20} />
          </button>
          <button className="text-[#F5F0E8] hover:text-[#E8C96A] transition-colors p-2 relative">
            <ShoppingCart size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#E8C96A] rounded-full"></span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F5F0E8] hover:text-[#E8C96A] transition-colors p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-[#0A0A0A]/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-8 p-6 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#F5F0E8] text-lg uppercase tracking-widest hover:text-[#E8C96A] transition-colors"
                style={{ fontFamily: 'Cinzel' }}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
