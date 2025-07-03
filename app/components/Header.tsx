'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 bg-gradient-red rounded-full flex items-center justify-center shadow-glow hover-scale">
              <span className="text-white font-bold text-xl text-shadow">柔</span>
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-gradient-red transition-colors duration-300">ASD Judo Kodokan</h1>
              <p className="text-sm text-red-600 font-medium tracking-wide">Lentini</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="relative text-gray-700 hover:text-red-600 font-medium transition-all duration-300 group">
              <span>Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-red group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/chi-siamo" className="relative text-gray-700 hover:text-red-600 font-medium transition-all duration-300 group">
              <span>Chi Siamo</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-red group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/discipline" className="relative text-gray-700 hover:text-red-600 font-medium transition-all duration-300 group">
              <span>Discipline</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-red group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/gare" className="relative text-gray-700 hover:text-red-600 font-medium transition-all duration-300 group">
              <span>Gare</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-red group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/pacchetti" className="relative text-gray-700 hover:text-red-600 font-medium transition-all duration-300 group">
              <span>Pacchetti</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-red group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/contatti" className="relative text-gray-700 hover:text-red-600 font-medium transition-all duration-300 group">
              <span>Contatti</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-red group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+393347235889"
              className="text-red-600 hover:text-red-700 font-medium transition-colors duration-300 hover:scale-105"
            >
              +39 334 723 5889
            </a>
            <Link
              href="/contatti"
              className="relative bg-gradient-red text-white px-6 py-3 rounded-xl font-semibold shadow-glow hover-lift overflow-hidden group"
            >
              <span className="relative z-10">Prova Gratuita</span>
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/chi-siamo" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Chi Siamo
              </Link>
              <Link href="/discipline" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Discipline
              </Link>
              <Link href="/gare" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Gare
              </Link>
              <Link href="/pacchetti" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Pacchetti
              </Link>
              <Link href="/contatti" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Contatti
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+393347235889"
                  className="block text-red-600 hover:text-red-700 font-medium mb-4"
                >
                  +39 334 723 5889
                </a>
                <Link
                  href="/contatti"
                  className="block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Prova Gratuita
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}