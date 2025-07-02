'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">柔</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ASD Judo Kodokan</h1>
              <p className="text-sm text-red-600">Lentini</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/chi-siamo" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Chi Siamo
            </Link>
            <Link href="/discipline" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Discipline
            </Link>
            <Link href="/contatti" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Contatti
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+393347235889"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              +39 334 723 5889
            </a>
            <Link
              href="/contatti"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Prova Gratuita
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