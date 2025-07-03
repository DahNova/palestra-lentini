import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Trophy, Calendar, Medal, Users, MapPin, Camera, Award,
  Target, Eye, CheckCircle, ArrowRight, Image
} from 'lucide-react';
import { prossimeGare, risultatiRecenti, stagioniInfo, getColorClasses, getPosizioneColor } from '../data/gare';

export const metadata: Metadata = {
  title: 'Gare e Competizioni - ASD Judo Kodokan Lentini',
  description: 'Scopri il calendario delle gare annuali, i risultati delle competizioni e la galleria foto dei nostri atleti.',
  keywords: 'gare judo lentini, competizioni arti marziali, tornei sicilia, risultati gare judo',
};

export default function Gare() {
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
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-shadow-lg leading-tight mb-6">
            <span className="block text-white">Gare e</span>
            <span className="block text-yellow-300 drop-shadow-lg">Competizioni</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-medium max-w-4xl mx-auto">
            Scopri il nostro calendario agonistico e i risultati dei nostri atleti nelle competizioni regionali e nazionali
          </p>
        </div>
      </section>

      {/* Prossime Gare */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Prossime Gare
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Le competizioni in programma per i prossimi mesi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prossimeGare.map((gara) => {
              const colors = getColorClasses(gara.tipo);
              return (
                <div key={gara.id} className="group bg-white rounded-2xl shadow-soft overflow-hidden relative hover:shadow-lg transition-shadow duration-300 border border-white/50">
                  <div className={`p-6 relative overflow-hidden ${colors.gradient}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.badge}`}>
                          {gara.tipo}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{gara.nome}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-red-500" />
                        <span className="text-gray-700 font-medium">{gara.data}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600">{gara.luogo}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600">{gara.categoria}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${gara.iscrizioni === 'Aperte' ? 'text-green-500' : 'text-yellow-500'}`} />
                        <span className={`font-medium ${gara.iscrizioni === 'Aperte' ? 'text-green-600' : 'text-yellow-600'}`}>
                          Iscrizioni: {gara.iscrizioni}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Link
                        href="/contatti"
                        className="group/btn inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors duration-300 hover-scale"
                      >
                        <span>Iscriviti alla gara</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risultati Recenti */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Risultati Recenti
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              I successi dei nostri atleti nelle ultime competizioni
            </p>
          </div>
          
          <div className="space-y-6">
            {risultatiRecenti.map((risultato) => (
              <div key={risultato.id} className="group bg-white rounded-2xl shadow-soft p-6 hover:shadow-lg transition-shadow duration-300 border border-white/50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-soft ${
                      risultato.posizione.includes('1°') ? 'bg-gradient-gold' :
                      risultato.posizione.includes('2°') ? 'bg-gradient-gray' : 'bg-gradient-to-r from-orange-400 to-orange-500'
                    }`}>
                      <Medal className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {risultato.gara}
                      </h3>
                      <p className="text-gray-600">{risultato.data}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                    <div className="text-center lg:text-left">
                      <p className="font-bold text-gray-900">{risultato.atleta}</p>
                      <p className="text-gray-600">{risultato.categoria}</p>
                    </div>
                    <div className={`px-6 py-3 rounded-xl font-bold text-lg shadow-soft ${getPosizioneColor(risultato.posizione)}`}>
                      {risultato.posizione}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galleria Fotografica con Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Galleria delle Gare
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Momenti indimenticabili dalle nostre competizioni
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="group bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center z-10">
                  <Image className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-500 font-medium">Foto Gara {i + 1}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-red-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendario Annuale */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Calendario Annuale 2025
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-8"></div>
            
            <div className="relative inline-block">
              <div className="text-6xl mb-8 animate-float relative z-10">🗓️</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-red-200 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-yellow-200 rounded-full animate-pulse delay-1000 opacity-30"></div>
            </div>
            
            <p className="text-lg text-gray-600 font-medium">Programma Competizioni</p>
          </div>
          
          <div className="relative bg-white/90 rounded-3xl p-8 lg:p-12 shadow-soft border border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stagioniInfo.map((stagione, index) => (
                <div key={index} className={`text-center p-4 bg-${stagione.colore}-50 rounded-xl`}>
                  <h4 className={`font-bold text-${stagione.colore}-600 mb-2`}>{stagione.nome}</h4>
                  <p className="text-gray-600 text-sm">{stagione.periodo}</p>
                  <p className="text-gray-700 text-sm mt-2">{stagione.descrizione}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-red-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-10"></div>
        
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-yellow-400/30 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-float">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-shadow-lg">
              Inizia il Tuo 
              <span className="block text-gradient-gold">Percorso Agonistico</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/10 rounded-3xl p-8 lg:p-12 border border-white/20 mb-12">
            <p className="text-xl lg:text-2xl mb-6 text-red-100 leading-relaxed">
              <span className="font-bold text-yellow-300">Vuoi competere?</span> 
              <br />Unisciti al nostro team agonistico e partecipa alle gare!
            </p>
            
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400 fill-current" />
                <span>Preparazione professionale</span>
              </div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-400" />
                <span>Supporto completo</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contatti"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-gold text-red-900 font-bold text-xl rounded-2xl shadow-gold hover-lift overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Trophy className="w-6 h-6" />
                <span>Inizia a Competere</span>
              </span>
              <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-gold opacity-30 rounded-2xl blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="/discipline"
              className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-2xl hover-lift backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Eye className="w-6 h-6" />
                <span>Scopri le Discipline</span>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}