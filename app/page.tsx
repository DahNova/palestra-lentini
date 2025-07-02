import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow">
                Scopri l&apos;Arte del
                <span className="block text-yellow-300">Judo a Lentini</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-red-100">
                Tradizione giapponese, benessere moderno. Judo, Taiso, Chambara e molto altro 
                per tutte le età presso la nostra palestra in Via Toledo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex justify-center">
              <div className="relative w-96 h-96 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-8xl font-bold text-yellow-300">柔道</span>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-red-900 font-bold text-sm">5★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Scegliere Noi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perché Scegliere ASD Judo Kodokan Lentini?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Più di 118 recensioni a 5 stelle confermano la qualità della nostra associazione sportiva
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Istruttori Qualificati</h3>
              <p className="text-gray-600">
                Michele Ciciulla e Rossana Vacanti, istruttori con esperienza nazionale e internazionale
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discipline Variegate</h3>
              <p className="text-gray-600">
                Judo, Taiso, Chambara, Crossfit Kids e Sport Camp per ogni età e livello
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Riconoscimenti Ufficiali</h3>
              <p className="text-gray-600">
                Affiliati CONI, FOLKAM e CSEN. Tra le migliori palestre fitness di Lentini
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Nostre Discipline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Le Nostre Discipline
            </h2>
            <p className="text-xl text-gray-600">
              Tradizione e innovazione per il tuo benessere psicofisico
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Judo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-red p-6">
                <h3 className="text-2xl font-bold text-white mb-2">🥋 Judo</h3>
                <p className="text-red-100">La Via della Cedevolezza</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Per tutti i livelli, dai principianti agli avanzati. Allenamenti tecnici, 
                  tattici e agonistici in un ambiente sicuro e stimolante.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Discipline olimpica</li>
                  <li>• Sviluppo carattere e disciplina</li>
                  <li>• Preparazione agonistica</li>
                </ul>
              </div>
            </div>

            {/* Taiso */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-gray p-6">
                <h3 className="text-2xl font-bold text-white mb-2">🧘‍♂️ Taiso</h3>
                <p className="text-gray-100">Ginnastica Dolce Giapponese</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  &ldquo;Tempra del corpo&rdquo; - Movimenti fluidi, respirazione e concentrazione. 
                  Ideale per chi si sta riprendendo da interventi o traumi.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Migliora flessibilità ed equilibrio</li>
                  <li>• Sblocco articolare</li>
                  <li>• Respirazione consapevole</li>
                </ul>
              </div>
            </div>

            {/* Chambara */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">⚔️ Chambara</h3>
                <p className="text-yellow-100">Combattimento con Spade Morbide</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Combattimenti simulati che migliorano riflessi, coordinazione e autocontrollo 
                  in un&apos;attività ludica e formativa.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Attività ludica e sicura</li>
                  <li>• Sviluppo riflessi</li>
                  <li>• Coordinazione motoria</li>
                </ul>
              </div>
            </div>

            {/* Crossfit Kids + Sport Camp */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">🏃‍♂️ Crossfit Kids & Sport Camp</h3>
                <p className="text-blue-100">Movimento e Divertimento</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Allenamento funzionale per bambini e ragazzi. Include anche attività 
                  extra per feste e grest durante tutto l&apos;anno.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Sviluppo motorio</li>
                  <li>• Forza e agilità</li>
                  <li>• Attività ricreative</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            La Nostra Filosofia
          </h2>
          <blockquote className="text-xl lg:text-2xl text-gray-700 italic mb-8">
            &ldquo;Delicato, armonioso e completo, ideale per chi si sta riprendendo da interventi o traumi. 
            La Taiso attiva muscoli che nemmeno immaginavo di avere!&rdquo;
          </blockquote>
          <p className="text-lg text-red-600 font-semibold">
            Scopri il benessere della Taiso e sperimenta un allenamento che unisce tradizione e salute!
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto a Iniziare il Tuo Percorso?
          </h2>
          <p className="text-xl mb-8">
            Prova gratuita disponibile! Vieni a trovarci in Via Toledo 21, Lentini (SR)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-red-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors"
            >
              📞 Prenota Ora
            </Link>
            <a
              href="tel:+393347235889"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              +39 334 723 5889
            </a>
          </div>
        </div>
      </section>
    </>
  );
}