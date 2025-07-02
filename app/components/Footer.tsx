import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Info Palestra */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">柔</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">ASD Judo Kodokan Lentini</h3>
                <p className="text-red-400 text-sm">Arti Marziali & Benessere</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Associazione Sportiva Dilettantistica dedicata alla pratica e alla promozione 
              delle arti marziali giapponesi, con particolare attenzione al judo e al 
              benessere psicofisico.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/asdjudokodokanlentini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="https://www.facebook.com/ASD-JUDO-Kodokan-Lentini-2396025753956372/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 transition-colors"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="https://www.tiktok.com/@micheleciciulla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 transition-colors"
                aria-label="TikTok"
              >
                🎵
              </a>
              <a
                href="https://www.youtube.com/channel/UCl4hr3xNN0Ae68VSepFpNWg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                📺
              </a>
            </div>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-gray-300 hover:text-red-400 transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/discipline" className="text-gray-300 hover:text-red-400 transition-colors">
                  Discipline
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-gray-300 hover:text-red-400 transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-red-400">📍</span>
                <div>
                  <p className="text-gray-300">Via Toledo n.21</p>
                  <p className="text-gray-300">96016 Lentini (SR)</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">📞</span>
                <a
                  href="tel:+393347235889"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  +39 334 723 5889
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">✉️</span>
                <a
                  href="mailto:asdjudokodokanlentin@libero.it"
                  className="text-gray-300 hover:text-red-400 transition-colors break-all"
                >
                  asdjudokodokanlentin@libero.it
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliazioni */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">Affiliati a:</p>
              <div className="flex space-x-4 mt-2">
                <span className="text-red-400 font-semibold">CONI</span>
                <span className="text-red-400 font-semibold">FOLKAM</span>
                <span className="text-red-400 font-semibold">CSEN</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 ASD Judo Kodokan Lentini. Tutti i diritti riservati.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                🌟 Valutazione media: 5/5 (118 recensioni)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}