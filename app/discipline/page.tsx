import Link from 'next/link';
import { Metadata } from 'next';
import { 
  User, Users, Baby, Heart, Zap, Target, Gamepad2, CheckCircle, Sparkles, Flame, Swords, Video, Activity, Trophy, Scale, Wind, BicepsFlexed, Brain
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Discipline - Judo, Taiso, Chambara | ASD Judo Kodokan Lentini',
  description: 'Scopri tutte le discipline offerte: Judo tradizionale, Taiso ginnastica giapponese, Chambara, Crossfit Kids e Sport Camp. Corsi per tutte le età a Lentini.',
  keywords: 'judo lentini, taiso ginnastica giapponese, chambara lentini, crossfit kids, sport camp, discipline arti marziali',
};

export default function Discipline() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Le Nostre Discipline</h1>
          <p className="text-xl lg:text-2xl">
            Tradizione giapponese e innovazione moderna per il tuo benessere psicofisico
          </p>
        </div>
      </section>

      {/* Judo */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Judo</h2>
                  <p className="text-red-600 text-lg">柔道 - La Via della Cedevolezza</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Il Judo è molto più di uno sport: è una disciplina che forma il carattere, 
                insegna il rispetto e sviluppa la forza interiore. Presso la nostra palestra, 
                offriamo corsi per tutti i livelli, dai principianti assoluti agli atleti avanzati.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Discipline Olimpica</h4>
                    <p className="text-gray-600">Sport riconosciuto a livello mondiale</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Preparazione Agonistica</h4>
                    <p className="text-gray-600">Allenamenti tecnici, tattici e agonistici</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sviluppo del Carattere</h4>
                    <p className="text-gray-600">Disciplina, rispetto e autocontrollo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Cosa Imparerai
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-red-600" />
                  </div>
                  <span>Tecniche di proiezione (Nage-waza)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-red-600" />
                  </div>
                  <span>Tecniche di controllo a terra (Ne-waza)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-red-600" />
                  </div>
                  <span>Tecniche di caduta (Ukemi)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-red-600" />
                  </div>
                  <span>Preparazione fisica specifica</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-red-600" />
                  </div>
                  <span>Tattica e strategia di combattimento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Taiso */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Benefici della Taiso
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Activity className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="font-semibold text-sm">Flessibilità</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Scale className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="font-semibold text-sm">Equilibrio</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Wind className="w-6 h-6 text-cyan-500" />
                  </div>
                  <p className="font-semibold text-sm">Respirazione</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <BicepsFlexed className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="font-semibold text-sm">Forza Muscolare</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Brain className="w-6 h-6 text-purple-500" />
                  </div>
                  <p className="font-semibold text-sm">Concentrazione</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="font-semibold text-sm">Cardio</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Taiso</h2>
                  <p className="text-gray-600 text-lg">体操 - Ginnastica Dolce Giapponese</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Il <strong>Taiso</strong> deriva da &ldquo;tai&rdquo; (corpo) e &ldquo;so&rdquo; (tempra), letteralmente &ldquo;tempra del corpo&rdquo;. 
                Ispirata agli esercizi del monaco Bodhidharma nel VI secolo d.C., questa disciplina 
                combina movimenti fluidi, respirazione e concentrazione.
              </p>
              
              <blockquote className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="italic text-gray-700">
                  &ldquo;Delicato, armonioso e completo, ideale per chi si sta riprendendo da interventi o traumi. 
                  La Taiso attiva muscoli che nemmeno immaginavo di avere!&rdquo;
                </p>
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">Due Versioni Disponibili:</h4>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span><strong>Taiso Dolce:</strong> per l&apos;equilibrio energetico dell&apos;organismo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Flame className="w-4 h-4 text-orange-500" />
                  </div>
                  <span><strong>Taiso Forte:</strong> per lo sviluppo della forza muscolare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chambara */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <Swords className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Chambara</h2>
                  <p className="text-yellow-600 text-lg">Combattimento con Spade Morbide</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Il Chambara è un&apos;attività ludica e formativa che utilizza spade morbide per simulare 
                combattimenti in totale sicurezza. Questa disciplina migliora riflessi, coordinazione 
                e autocontrollo in un ambiente divertente e stimolante.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1">
                    <Zap className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sviluppo dei Riflessi</h4>
                    <p className="text-gray-600">Reazioni rapide e istintive</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1">
                    <Target className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coordinazione Motoria</h4>
                    <p className="text-gray-600">Movimenti precisi e controllati</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1">
                    <Gamepad2 className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Attività Ludica</h4>
                    <p className="text-gray-600">Divertimento e formazione insieme</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Video className="w-5 h-5 text-yellow-600" />
                  Guarda le Nostre Dimostrazioni
                </h4>
                <a
                  href="https://www.youtube.com/watch?v=dUIdpz951qI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 font-medium underline"
                >
                  Video dimostrazione Chambara su YouTube
                </a>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Perfetto Per
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-yellow-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Baby className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Bambini</p>
                    <p className="text-gray-600 text-sm">Sviluppo psicomotorio</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-yellow-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Adulti</p>
                    <p className="text-gray-600 text-sm">Stress relief e fitness</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-yellow-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Famiglie</p>
                    <p className="text-gray-600 text-sm">Attività condivisa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crossfit Kids & Sport Camp */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-3xl">🏃‍♂️</span>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Crossfit Kids & Sport Camp
                </h2>
                <p className="text-blue-600 text-lg">Movimento, Divertimento e Crescita</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Crossfit Kids */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                🏃‍♂️ Crossfit Kids
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Allenamento funzionale pensato appositamente per bambini e ragazzi
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500">💪</span>
                  <span>Sviluppo motorio completo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500">⚡</span>
                  <span>Forza, agilità e coordinazione</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500">😄</span>
                  <span>Divertimento garantito</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500">👥</span>
                  <span>Spirito di squadra</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Età consigliata</h4>
                <p className="text-gray-600">Dai 6 ai 17 anni</p>
              </div>
            </div>

            {/* Sport Camp */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                🏕️ Sport Camp
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Attività extra per le varie feste e momenti speciali dell&apos;anno
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">🎉</span>
                  <span>Attività per le feste</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">⛺</span>
                  <span>Grest estivi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">🎨</span>
                  <span>Attività ricreative</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">🎮</span>
                  <span>Giochi di gruppo</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Quando</h4>
                <p className="text-gray-600">Durante le festività e i periodi di vacanza scolastica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per Tutte le Età */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Per Tutte le Età e Tutti i Livelli
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-red-50 rounded-xl">
              <span className="text-4xl mb-4 block">👶</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bambini</h3>
              <p className="text-gray-600">
                Sviluppo psicomotorio, disciplina e divertimento
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <span className="text-4xl mb-4 block">🧑</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adulti</h3>
              <p className="text-gray-600">
                Fitness, autodifesa e crescita personale
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <span className="text-4xl mb-4 block">👴</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Senior</h3>
              <p className="text-gray-600">
                Taiso dolce per mantenere mobilità e benessere
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            Lezione di prova gratuita disponibile per tutte le discipline!
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Quale Disciplina Ti Incuriosisce?
          </h2>
          <p className="text-xl mb-8">
            Non importa la tua età o il tuo livello di preparazione: c&apos;è una disciplina perfetta per te!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-red-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors"
            >
              🥋 Prenota Prova Gratuita
            </Link>
            <a
              href="tel:+393347235889"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              📞 Chiamaci Ora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}