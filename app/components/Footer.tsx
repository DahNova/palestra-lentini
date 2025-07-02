import Link from 'next/link';
import { MapPin, Phone, Instagram, Facebook, Video, Music, Award, Star, Navigation, Laptop } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 border border-red-400/20 rounded-full animate-pulse delay-1000 opacity-40"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-500 opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative w-16 h-16 bg-gradient-red rounded-full flex items-center justify-center shadow-glow hover-scale border-2 border-white/20">
                <span className="text-white font-bold text-2xl text-shadow">柔</span>
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient-gold">ASD Judo Kodokan Lentini</h3>
                <p className="text-red-300 font-medium tracking-wide">Arti Marziali & Benessere</p>
              </div>
            </div>
            
            <div className="glass bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group">
              <p className="text-gray-100 mb-6 leading-relaxed">
                Associazione Sportiva Dilettantistica dedicata alla pratica e alla promozione 
                delle arti marziali giapponesi, con particolare attenzione al judo e al 
                benessere psicofisico.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/asdjudokodokanlentini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover-scale border border-white/20 hover:border-red-400/50 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.facebook.com/ASD-JUDO-Kodokan-Lentini-2396025753956372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover-scale border border-white/20 hover:border-red-400/50 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.tiktok.com/@micheleciciulla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover-scale border border-white/20 hover:border-red-400/50 transition-all duration-300"
                  aria-label="TikTok"
                >
                  <Music className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCl4hr3xNN0Ae68VSepFpNWg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover-scale border border-white/20 hover:border-red-400/50 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Video className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="glass bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
              <h4 className="text-xl font-bold text-gradient-red mb-6 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-red-400" />
                Menu
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="group flex items-center gap-3 text-gray-100 hover:text-white transition-colors duration-300">
                    <div className="w-1 h-1 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/chi-siamo" className="group flex items-center gap-3 text-gray-100 hover:text-white transition-colors duration-300">
                    <div className="w-1 h-1 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Chi Siamo</span>
                  </Link>
                </li>
                <li>
                  <Link href="/discipline" className="group flex items-center gap-3 text-gray-100 hover:text-white transition-colors duration-300">
                    <div className="w-1 h-1 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Discipline</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contatti" className="group flex items-center gap-3 text-gray-100 hover:text-white transition-colors duration-300">
                    <div className="w-1 h-1 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Contatti</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <div className="glass bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
              <h4 className="text-xl font-bold text-gradient-red mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-400" />
                Contatti
              </h4>
              <div className="space-y-4">
                <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-red rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Via Toledo n.21</p>
                    <p className="text-gray-200">96016 Lentini (SR)</p>
                  </div>
                </div>
                
                <div className="group">
                  <a
                    href="tel:+393347235889"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-red/20 transition-all duration-300 hover-lift"
                  >
                    <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-gold transition-shadow">
                      <Phone className="w-5 h-5 text-red-900" />
                    </div>
                    <span className="text-white font-medium group-hover:text-yellow-300 transition-colors">
                      +39 334 723 5889
                    </span>
                  </a>
                </div>
                
                <div className="group">
                  <a
                    href="mailto:asdjudokodokanlentin@libero.it"
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gradient-red/20 transition-all duration-300 hover-lift"
                  >
                    <div className="w-10 h-10 bg-gradient-red rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow flex-shrink-0">
                      <span className="text-white text-lg">✉️</span>
                    </div>
                    <span className="text-white font-medium group-hover:text-red-300 transition-colors break-all">
                      asdjudokodokanlentin@libero.it
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliations & Copyright */}
        <div className="relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Affiliations */}
            <div className="glass bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-gray-300 font-medium mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Affiliati a:
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gradient-red rounded-xl text-white font-bold text-sm shadow-glow">CONI</span>
                <span className="px-4 py-2 bg-gradient-gold rounded-xl text-red-900 font-bold text-sm shadow-gold">FOLKAM</span>
                <span className="px-4 py-2 bg-gradient-red rounded-xl text-white font-bold text-sm shadow-glow">CSEN</span>
              </div>
            </div>

            {/* Copyright & Reviews */}
            <div className="text-center lg:text-right space-y-2">
              <div className="flex items-center justify-center lg:justify-end gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-yellow-300 font-bold">5/5</span>
                <span className="text-gray-300">•</span>
                <span className="text-white font-medium">118 recensioni</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-2">
                © 2025 ASD Judo Kodokan Lentini. Tutti i diritti riservati.
              </p>
              
              <p className="text-gray-400 text-xs flex items-center justify-center lg:justify-end gap-1">
                <Laptop className="w-4 h-4 text-red-400" />
                Design by{' '}
                <a
                  href="https://github.com/DahNova/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient-gold font-medium hover:text-yellow-300 transition-colors hover-scale inline-block"
                >
                  Claudio Novaglio
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}