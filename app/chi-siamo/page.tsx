import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi Siamo - ASD Judo Kodokan Lentini',
  description: 'Scopri la storia, lo staff e la filosofia di ASD Judo Kodokan Lentini. Michele Ciciulla e Rossana Vacanti, istruttori qualificati con esperienza nazionale.',
  keywords: 'staff judo lentini, istruttori arti marziali, michele ciciulla, rossana vacanti, filosofia judo',
};

export default function ChiSiamo() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-xl lg:text-2xl">
            La passione per le arti marziali che unisce tradizione giapponese e innovazione moderna
          </p>
        </div>
      </section>

      {/* La Nostra Storia */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              La Nostra Storia
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>ASD Judo Kodokan Lentini</strong> è un&apos;Associazione Sportiva Dilettantistica 
              dedicata alla pratica e alla promozione delle arti marziali giapponesi, con particolare 
              attenzione al judo e al benessere psicofisico attraverso discipline complementari.
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-8 mb-16">
            <div className="text-center mb-8">
              <span className="text-6xl">🏯</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">I Nostri Valori</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">礼</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Rispetto</h4>
                <p className="text-gray-600 text-sm">
                  Il rispetto per se stessi, per gli altri e per la tradizione
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">心</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Spirito</h4>
                <p className="text-gray-600 text-sm">
                  La forza interiore e la determinazione nel percorso
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">体</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Corpo</h4>
                <p className="text-gray-600 text-sm">
                  Il benessere fisico attraverso la pratica costante
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Tecnico */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Il Nostro Staff Tecnico
            </h2>
            <p className="text-xl text-gray-600">
              Istruttori qualificati con esperienza nazionale e internazionale
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Michele Ciciulla */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-red p-6 text-white text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥋</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Michele Ciciulla</h3>
                <p className="text-red-100">Istruttore Principale</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Allenatore qualificato con vasta esperienza nel mondo delle arti marziali, 
                  dimostrando versatilità e dedizione nell&apos;insegnamento delle discipline orientali 
                  e del benessere psicofisico.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Istruttore qualificato di Judo
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Esperienza pluriennale nell&apos;insegnamento
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Specializzazione in Taiso e tecniche tradizionali
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a
                    href="https://www.tiktok.com/@micheleciciulla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    🎵 Seguilo su TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Rossana Vacanti */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-gray p-6 text-white text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Rossana Vacanti</h3>
                <p className="text-gray-100">Insegnante Tecnico</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Atleta di grande esperienza con un curriculum che include competizioni 
                  nazionali e internazionali. La sua competenza tecnica e la sua esperienza 
                  agonistica rappresentano un valore aggiunto per tutti gli allievi.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Atleta con esperienza agonistica
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Competizioni nazionali e internazionali
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Specializzazione in preparazione agonistica
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Nostra Filosofia */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              La Nostra Filosofia
            </h2>
            <span className="text-8xl">柔道</span>
            <p className="text-xl text-gray-600 mt-4">
              La Via della Cedevolezza
            </p>
          </div>

          <div className="space-y-8">
            <blockquote className="text-center bg-red-50 p-8 rounded-xl">
              <p className="text-2xl lg:text-3xl text-gray-700 italic mb-6">
                &ldquo;Delicato, armonioso e completo, ideale per chi si sta riprendendo da interventi o traumi. 
                La Taiso attiva muscoli che nemmeno immaginavo di avere!&rdquo;
              </p>
              <footer className="text-red-600 font-semibold">
                — Testimonianza di un nostro atleta
              </footer>
            </blockquote>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Il Nostro Approccio
              </h3>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                <strong>&ldquo;Scopri il benessere della Taiso e sperimenta un allenamento che unisce tradizione e salute!&rdquo;</strong>
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                La nostra metodologia si basa sull&apos;integrazione di tecniche tradizionali giapponesi 
                con approcci moderni al benessere. Crediamo che ogni persona, indipendentemente dall&apos;età 
                o dal livello di preparazione fisica, possa beneficiare della pratica delle arti marziali 
                e delle discipline orientali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Riconoscimenti e Affiliazioni */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Riconoscimenti e Affiliazioni
            </h2>
            <p className="text-xl text-gray-300">
              La qualità riconosciuta da enti ufficiali e dalla comunità
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">🏆 I Nostri Riconoscimenti</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <span className="text-3xl">⭐</span>
                  <div>
                    <p className="font-semibold">Valutazione Eccellente</p>
                    <p className="text-gray-300 text-sm">5/5 stelle con 118 recensioni</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <span className="text-3xl">🥇</span>
                  <div>
                    <p className="font-semibold">Miglior Palestra Fitness</p>
                    <p className="text-gray-300 text-sm">Riconosciuta tra le migliori di Lentini</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">🤝 Le Nostre Affiliazioni</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center p-6 bg-white/10 rounded-lg">
                  <div className="text-4xl mb-2">🇮🇹</div>
                  <h4 className="font-bold text-xl text-red-400">CONI</h4>
                  <p className="text-gray-300 text-sm">Comitato Olimpico Nazionale Italiano</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <h4 className="font-bold text-lg text-red-400">FOLKAM</h4>
                    <p className="text-gray-300 text-xs">Federazione Arti Marziali</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <h4 className="font-bold text-lg text-red-400">CSEN</h4>
                    <p className="text-gray-300 text-xs">Centro Sportivo Educativo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Unisciti alla Nostra Famiglia
          </h2>
          <p className="text-xl mb-8">
            Scopri come la tradizione delle arti marziali può migliorare la tua vita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-red-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors"
            >
              🥋 Prova Gratuita
            </Link>
            <Link
              href="/discipline"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              Scopri le Discipline
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}