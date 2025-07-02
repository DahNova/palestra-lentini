import Link from 'next/link';
import { Trophy, Target, Star, Zap, Award, Phone, Clock, Users, Heart, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-red-warm text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 pattern-seigaiha opacity-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-shadow-lg leading-tight">
                  <span className="block text-white">Scopri l&apos;Arte del</span>
                  <span className="block text-yellow-300 drop-shadow-lg">Judo a Lentini</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-gold"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-medium">
                Tradizione giapponese, benessere moderno. Judo, Taiso, Chambara e molto altro 
                per tutte le età presso la nostra palestra in Via Toledo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contatti"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-red-900 font-bold text-lg rounded-xl shadow-gold hover-lift overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Prova Gratuita
                  </span>
                  <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/discipline"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-xl hover-lift overflow-hidden"
                >
                  <span className="relative z-10">Scopri le Discipline</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                {/* Main Circle */}
                <div className="relative w-96 h-96 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center shadow-soft group hover-scale border border-white/20">
                  <span className="text-8xl font-bold text-yellow-300 drop-shadow-2xl">柔道</span>
                  
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-gradient-gold opacity-50 animate-spin-slow"></div>
                  
                  {/* Badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold hover-scale group-hover:animate-bounce">
                    <div className="text-center">
                      <span className="block text-red-900 font-bold text-lg">5★</span>
                      <span className="block text-red-900 text-xs font-medium">118</span>
                    </div>
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute top-8 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-500"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-float">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-float delay-1000">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Scegliere Noi */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Perché Scegliere ASD Judo Kodokan Lentini?
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Più di <span className="font-bold text-red-600">118 recensioni a 5 stelle</span> confermano la qualità della nostra associazione sportiva
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-soft border-gradient-red overflow-hidden relative hover:shadow-lg hover:border-red-500/30 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow hover-scale">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                Istruttori Qualificati
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Michele Ciciulla e Rossana Vacanti, istruttori con esperienza nazionale e internazionale
              </p>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-50 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-soft border-gradient-gold overflow-hidden relative hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold hover-scale">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                Discipline Variegate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Judo, Taiso, Chambara, Crossfit Kids e Sport Camp per ogni età e livello
              </p>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-50 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-soft border-gradient-red overflow-hidden relative hover:shadow-lg hover:border-red-500/30 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow hover-scale">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                Riconoscimenti Ufficiali
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Affiliati CONI, FOLKAM e CSEN. Tra le migliori palestre fitness di Lentini
              </p>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-50 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Nostre Discipline */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Le Nostre Discipline
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tradizione e innovazione per il tuo benessere psicofisico
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Judo */}
            <div className="group bg-white rounded-2xl shadow-soft overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-red-warm p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Judo</h3>
                      <p className="text-red-100 font-medium">La Via della Cedevolezza</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Per tutti i livelli, dai principianti agli avanzati. Allenamenti tecnici, 
                  tattici e agonistici in un ambiente sicuro e stimolante.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Discipline olimpica</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Sviluppo carattere e disciplina</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Preparazione agonistica</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Taiso */}
            <div className="group bg-white rounded-2xl shadow-soft overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-gray p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Taiso</h3>
                      <p className="text-gray-100 font-medium">Ginnastica Dolce Giapponese</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;Tempra del corpo&rdquo; - Movimenti fluidi, respirazione e concentrazione. 
                  Ideale per chi si sta riprendendo da interventi o traumi.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-700">Migliora flessibilità ed equilibrio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-700">Sblocco articolare</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-700">Respirazione consapevole</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chambara */}
            <div className="group bg-white rounded-2xl shadow-soft overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-gold p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Chambara</h3>
                      <p className="text-yellow-100 font-medium">Combattimento con Spade Morbide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Combattimenti simulati che migliorano riflessi, coordinazione e autocontrollo 
                  in un&apos;attività ludica e formativa.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Attività ludica e sicura</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Sviluppo riflessi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Coordinazione motoria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Crossfit Kids + Sport Camp */}
            <div className="group bg-white rounded-2xl shadow-soft overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Crossfit Kids & Sport Camp</h3>
                      <p className="text-blue-100 font-medium">Movimento e Divertimento</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Allenamento funzionale per bambini e ragazzi. Include anche attività 
                  extra per feste e grest durante tutto l&apos;anno.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Sviluppo motorio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Forza e agilità</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Attività ricreative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pattern-seigaiha opacity-5"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 relative">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-red mb-6 text-shadow">
              La Nostra Filosofia
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-8"></div>
            
            {/* Simbolo giapponese con cerchi decorativi centrati */}
            <div className="relative inline-block">
              <div className="text-6xl mb-8 animate-float relative z-10">道</div>
              
              {/* Cerchi decorativi centrati attorno al simbolo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-red-200 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-yellow-200 rounded-full animate-pulse delay-1000 opacity-30"></div>
            </div>
            
            <p className="text-lg text-gray-600 font-medium">Il Cammino delle Arti Marziali</p>
          </div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-soft border border-white/50">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center">
              <span className="text-white text-xl">&ldquo;</span>
            </div>
            
            <blockquote className="text-xl lg:text-3xl text-gray-700 italic mb-8 leading-relaxed">
              <span className="text-gradient-red font-semibold">Delicato, armonioso e completo</span>, 
              ideale per chi si sta riprendendo da interventi o traumi. 
              La Taiso attiva muscoli che nemmeno immaginavo di avere!
            </blockquote>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-4 h-0.5 bg-red-500"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            
            <p className="text-lg lg:text-xl text-gradient-gold font-bold">
              Scopri il benessere della Taiso e sperimenta un allenamento che unisce tradizione e salute!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-red-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-yellow-400/30 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-float">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-shadow-lg">
              Pronto a Iniziare il Tuo 
              <span className="block text-gradient-gold">Percorso?</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 mb-12">
            <p className="text-xl lg:text-2xl mb-6 text-red-100 leading-relaxed">
              <span className="font-bold text-yellow-300">Prova gratuita disponibile!</span> 
              <br />Vieni a trovarci in Via Toledo 21, Lentini (SR)
            </p>
            
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>118 recensioni</span>
              </div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>5/5 stelle</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contatti"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-gold text-red-900 font-bold text-xl rounded-2xl shadow-gold hover-lift overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <span>Prenota Ora</span>
              </span>
              <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-gold opacity-30 rounded-2xl blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
            </Link>
            
            <a
              href="tel:+393347235889"
              className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-2xl hover-lift backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <span>+39 334 723 5889</span>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
          
          <div className="mt-12 text-red-100">
            <p className="text-lg">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Orari: Lunedì - Venerdì 16:00-21:00 | Sabato 09:00-13:00
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}