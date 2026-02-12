"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full bg-white fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'shadow-lg backdrop-blur-sm bg-white/95 border-b border-gray-100' 
          : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Left side: Logo + Name */}
          <Link 
            href="#home" 
            className="flex items-center space-x-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                Mark Onyango
              </span>
            
            </div>
          </Link>

          {/* Desktop Navigation (Right side) */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
            <motion.a
              href="assets/resume.pdf"
              download="Mark_Onyango_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <FileDown size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 flex items-center justify-center focus:outline-none group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 top-3' : 'top-1'
                }`} />
                <span className={`absolute h-0.5 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? 'w-0 opacity-0 top-3' : 'w-6 opacity-100 top-3'
                }`} />
                <span className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 top-3' : 'top-5'
                }`} />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all duration-200 group"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <motion.a
                  href="/resume.pdf"
                  download
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  <FileDown size={16} />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}