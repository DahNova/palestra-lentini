import Link from 'next/link';
import { Metadata } from 'next';
import { Users, Trophy, Award, Star, Castle, Music, User, Shield, Target, Image } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chi Siamo - ASD Judo Kodokan Lentini',
  description: 'Scopri la storia, lo staff e la filosofia di ASD Judo Kodokan Lentini. Michele Ciciulla e Rossana Vacanti, istruttori qualificati con esperienza nazionale.',
  keywords: 'staff judo lentini, istruttori arti marziali, michele ciciulla, rossana vacanti, filosofia judo',
};

export default function ChiSiamo() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-red-warm text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 pattern-seigaiha opacity-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-float">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-shadow-lg leading-tight mb-6">
            <span className="block text-white">Chi</span>
            <span className="block text-yellow-300 drop-shadow-lg">Siamo</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-medium max-w-4xl mx-auto">
            La passione per le arti marziali che unisce tradizione giapponese e innovazione moderna
          </p>
        </div>
      </section>

      {/* La Nostra Storia */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              La Nostra Storia
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>ASD Judo Kodokan Lentini</strong> è un&apos;Associazione Sportiva Dilettantistica 
              dedicata alla pratica e alla promozione delle arti marziali giapponesi, con particolare 
              attenzione al judo e al benessere psicofisico attraverso discipline complementari.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-red-50 to-yellow-50/30 rounded-3xl p-8 mb-16 overflow-hidden">
            <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
            <div className="relative text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-red rounded-full flex items-center justify-center shadow-glow">
                  <Castle className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gradient-red mt-4">I Nostri Valori</h3>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Il Nostro Staff Tecnico
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Istruttori qualificati con esperienza nazionale e internazionale
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Michele Ciciulla */}
            <div className="group bg-white rounded-2xl shadow-soft overflow-hidden relative hover:shadow-lg transition-shadow duration-300 border border-white/50">
              <div className="bg-gradient-red-warm p-6 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale border-2 border-white/30">
                  <Users className="w-12 h-12 text-white" />
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
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors duration-300 hover-scale"
                  >
                    <Music className="w-4 h-4" />
                    Seguilo su TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Rossana Vacanti */}
            <div className="group bg-white rounded-2xl shadow-soft overflow-hidden relative hover:shadow-lg transition-shadow duration-300 border border-white/50">
              <div className="bg-gradient-gray p-6 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale border-2 border-white/30">
                  <Trophy className="w-12 h-12 text-white" />
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

      {/* Galleria Staff e Palestra */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Il Nostro Team in Azione
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Momenti della vita quotidiana della nostra associazione
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Foto Staff */}
            <div className="group bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center z-10">
                <Image className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-500 font-medium">Michele Ciciulla</p>
                <p className="text-gray-400 text-sm mt-1">Istruttore Principale</p>
              </div>
            </div>
            
            <div className="group bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center z-10">
                <Image className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-500 font-medium">Rossana Vacanti</p>
                <p className="text-gray-400 text-sm mt-1">Insegnante Tecnico</p>
              </div>
            </div>
            
            <div className="group bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center z-10">
                <Image className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-500 font-medium">Team Training</p>
                <p className="text-gray-400 text-sm mt-1">Lezione di gruppo</p>
              </div>
            </div>
            
            {/* Foto Palestra */}
            <div className="group bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center z-10">
                <Image className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-500 font-medium">Dojo Principale</p>
                <p className="text-gray-400 text-sm mt-1">Tatami per Judo</p>
              </div>
            </div>
            
            <div className="group bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center z-10">
                <Image className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-500 font-medium">Sala Taiso</p>
                <p className="text-gray-400 text-sm mt-1">Ginnastica Dolce</p>
              </div>
            </div>
            
            <div className="group bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center z-10">
                <Image className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-500 font-medium">Momenti Storici</p>
                <p className="text-gray-400 text-sm mt-1">La nostra storia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Nostra Filosofia */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              La Nostra Filosofia
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-8"></div>
            <span className="text-8xl">柔道</span>
            <p className="text-xl text-gray-600 mt-4">
              La Via della Cedevolezza
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative bg-white/90 rounded-3xl p-8 lg:p-12 shadow-soft border border-white/50">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center">
                <span className="text-white text-xl">&ldquo;</span>
              </div>
              
              <blockquote className="text-xl lg:text-3xl text-gray-700 italic mb-8 leading-relaxed text-center">
                <span className="text-gradient-red font-semibold">Delicato, armonioso e completo</span>, 
                ideale per chi si sta riprendendo da interventi o traumi. 
                La Taiso attiva muscoli che nemmeno immaginavo di avere!
              </blockquote>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-4 h-0.5 bg-red-500"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              
              <footer className="text-lg lg:text-xl text-gradient-gold font-bold text-center">
                — Testimonianza di un nostro atleta
              </footer>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
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
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-400" />
                I Nostri Riconoscimenti
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </div>
                  <div>
                    <p className="font-semibold">Valutazione Eccellente</p>
                    <p className="text-gray-300 text-sm">5/5 stelle con 118 recensioni</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Miglior Palestra Fitness</p>
                    <p className="text-gray-300 text-sm">Riconosciuta tra le migliori di Lentini</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
                <Shield className="w-6 h-6 text-blue-400" />
                Le Nostre Affiliazioni
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center p-6 bg-white/10 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-red rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
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
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-red-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors gap-2"
            >
              <User className="w-5 h-5" />
              Prova Gratuita
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