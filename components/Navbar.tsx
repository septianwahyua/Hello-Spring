import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-serif text-3xl font-bold text-gray-700">H</span>
          <span className="font-serif text-xl font-medium text-gray-700 hidden sm:inline">
            HELLO SPRING FLORIST
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-amber-600 transition duration-300">TENTANG</a>
          <a href="#koleksi" className="hover:text-amber-600 transition duration-300">KOLEKSI BUNGA</a>
          <a href="#acara" className="hover:text-amber-600 transition duration-300">ACARA</a>
          <a href="#howto" className="hover:text-amber-600 transition duration-300">CARA MEMBELI</a>
          <a href="#contact" className="hover:text-amber-600 transition duration-300">KONTAK</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition duration-300" aria-label="Keranjang Belanja">
            <ShoppingCart className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition duration-300" 
            aria-label="Menu Mobile"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
            ) : (
                <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t py-4 px-4 flex flex-col space-y-4">
            <a href="#about" className="text-gray-600 hover:text-amber-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>TENTANG</a>
            <a href="#koleksi" className="text-gray-600 hover:text-amber-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>KOLEKSI BUNGA</a>
            <a href="#acara" className="text-gray-600 hover:text-amber-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>ACARA</a>
            <a href="#howto" className="text-gray-600 hover:text-amber-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>CARA MEMBELI</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>KONTAK</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;