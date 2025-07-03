import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, Check, X, Users, Crown, Heart, Baby, Clock, Phone,
  Trophy, Target, Zap, Gift, Calculator, CreditCard, Calendar,
  Sparkles, Shield, Award, ArrowRight, User, Image
} from 'lucide-react';
import { pacchetti, pacchettiFamiglia, opzioniPagamento, serviziInclusi, getColorClasses } from '../data/pacchetti';

export const metadata: Metadata = {
  title: 'Pacchetti e Abbonamenti - ASD Judo Kodokan Lentini',
  description: 'Scopri i nostri pacchetti personalizzati per ogni età e livello. Abbonamenti mensili, trimestrali e annuali con sconti famiglia.',
  keywords: 'abbonamenti judo lentini, prezzi palestra, pacchetti arti marziali, sconti famiglia',
};

export default function Pacchetti() {

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
              <Gift className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-shadow-lg leading-tight mb-6">
            <span className="block text-white">Pacchetti e</span>
            <span className="block text-yellow-300 drop-shadow-lg">Abbonamenti</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-medium max-w-4xl mx-auto">
            Scegli il pacchetto perfetto per te e la tua famiglia. Flessibilità, qualità e convenienza
          </p>
        </div>
      </section>

      {/* Pacchetti Principali */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              I Nostri Pacchetti
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trova la soluzione ideale per le tue esigenze
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pacchetti.map((pacchetto, index) => {
              const colors = getColorClasses(pacchetto.colore);
              return (
                <div 
                  key={pacchetto.id} 
                  className={`group relative bg-white rounded-3xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 ${colors.border} ${
                    index === 1 ? 'lg:-mt-8 lg:mb-8 z-10' : ''
                  }`}
                >
                  {pacchetto.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className={`${colors.button} px-6 py-2 rounded-full font-bold text-sm`}>
                        {pacchetto.badge}
                      </div>
                    </div>
                  )}
                  
                  <div className={`${colors.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          {pacchetto.colore === 'gold' ? <Crown className="w-6 h-6" /> :
                           pacchetto.colore === 'red' ? <Trophy className="w-6 h-6" /> :
                           <Heart className="w-6 h-6" />}
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold">€{pacchetto.prezzo}</div>
                          <div className="text-sm opacity-80">/{pacchetto.periodo}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{pacchetto.nome}</h3>
                      <p className="text-white/90">{pacchetto.descrizione}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-4 mb-8">
                      {pacchetto.caratteristiche.map((caratteristica, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            caratteristica.incluso 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            {caratteristica.incluso ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <X className="w-4 h-4" />
                            )}
                          </div>
                          <span className={`${caratteristica.incluso ? 'text-gray-900' : 'text-gray-400'}`}>
                            {caratteristica.nome}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Adatto per:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pacchetto.adattoPer.map((tipo, idx) => (
                          <span key={idx} className={`px-3 py-1 ${colors.text} bg-gray-50 rounded-full text-sm font-medium`}>
                            {tipo}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href="/contatti"
                      className={`group/btn w-full inline-flex items-center justify-center px-6 py-4 ${colors.button} font-bold text-lg rounded-2xl hover-lift overflow-hidden transition-all duration-300`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span>Scegli Pacchetto</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sconti Famiglia */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Sconti Famiglia
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Più persone della famiglia si iscrivono, più risparmi!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pacchettiFamiglia.map((famiglia, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-soft p-8 hover:shadow-lg transition-shadow duration-300 border border-white/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-16 translate-x-16 group-hover:bg-red-100 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-red rounded-full flex items-center justify-center shadow-glow">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{famiglia.tipo}</h3>
                      <p className="text-gray-600">{famiglia.descrizione}</p>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 rounded-2xl p-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">{famiglia.sconto}</div>
                      <div className="text-lg text-gray-700 font-medium">{famiglia.risparmio}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Sconto automatico sui pacchetti</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Validità su tutti i pacchetti</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Attivazione immediata</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opzioni di Pagamento */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Opzioni di Pagamento
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Scegli la modalità di pagamento più comoda per te
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opzioniPagamento.map((opzione, index) => (
              <div key={index} className={`text-center p-8 bg-white rounded-2xl shadow-soft border ${opzione.badge ? `border-2 border-${opzione.colore}-500/30` : 'border-white/50'} hover:shadow-lg transition-shadow duration-300 relative`}>
                {opzione.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`bg-gradient-${opzione.colore === 'yellow' ? 'gold' : opzione.colore} px-4 py-2 rounded-full ${opzione.colore === 'red' ? 'text-white' : 'text-red-900'} font-bold text-sm`}>
                      {opzione.badge}
                    </div>
                  </div>
                )}
                <div className={`w-20 h-20 bg-${opzione.colore}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {index === 0 && <Calendar className={`w-10 h-10 text-${opzione.colore}-600`} />}
                  {index === 1 && <Calculator className={`w-10 h-10 text-${opzione.colore}-600`} />}
                  {index === 2 && <CreditCard className={`w-10 h-10 text-${opzione.colore}-600`} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{opzione.nome}</h3>
                <p className="text-gray-600 mb-4">{opzione.descrizione}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  {opzione.caratteristiche.map((caratteristica, idx) => (
                    <div key={idx}>• {caratteristica}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi Inclusi */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-seigaiha opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              Servizi Sempre Inclusi
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Qualità e attenzione in ogni dettaglio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviziInclusi.map((servizio, index) => {
              const IconComponent = servizio.icona === 'Shield' ? Shield : 
                                   servizio.icona === 'User' ? User :
                                   servizio.icona === 'Target' ? Target : Sparkles;
              const gradientClass = servizio.colore === 'red' ? 'bg-gradient-red' :
                                   servizio.colore === 'gray' ? 'bg-gradient-gray' :
                                   servizio.colore === 'gold' ? 'bg-gradient-gold' :
                                   'bg-gradient-to-r from-blue-500 to-blue-600';
              const shadowClass = servizio.colore === 'red' ? 'shadow-glow' :
                                 servizio.colore === 'gold' ? 'shadow-gold' : 'shadow-soft';
              const iconColor = servizio.colore === 'gold' ? 'text-red-900' : 'text-white';
              
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 ${gradientClass} rounded-full flex items-center justify-center mx-auto mb-4 ${shadowClass} hover-scale`}>
                    <IconComponent className={`w-10 h-10 ${iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{servizio.nome}</h3>
                  <p className="text-gray-600 text-sm">{servizio.descrizione}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Confronto Immagini Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-red mb-6 text-shadow">
              I Nostri Spazi
            </h2>
            <div className="w-32 h-1 bg-gradient-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ambienti moderni e attrezzature professionali
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="group bg-gray-200 rounded-2xl h-48 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center z-10">
                  <Image className="w-12 h-12 text-gray-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-500 font-medium text-sm">
                    {i === 0 ? "Tatami Judo" :
                     i === 1 ? "Sala Taiso" :
                     i === 2 ? "Area Chambara" :
                     i === 3 ? "Spogliatoi" :
                     i === 4 ? "Reception" : "Area Relax"}
                  </p>
                </div>
              </div>
            ))}
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
                <Gift className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-shadow-lg">
              Pronto a Iniziare?
              <span className="block text-gradient-gold">Prenota la Tua Prova!</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/10 rounded-3xl p-8 lg:p-12 border border-white/20 mb-12">
            <p className="text-xl lg:text-2xl mb-6 text-red-100 leading-relaxed">
              <span className="font-bold text-yellow-300">Prova gratuita disponibile!</span> 
              <br />Scopri il pacchetto perfetto per te senza impegno
            </p>
            
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>Prima lezione gratis</span>
              </div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>Nessun vincolo</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contatti"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-gold text-red-900 font-bold text-xl rounded-2xl shadow-gold hover-lift overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Gift className="w-6 h-6" />
                <span>Prenota Prova Gratuita</span>
              </span>
              <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-gold opacity-30 rounded-2xl blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
            </Link>
            
            <a
              href="tel:+393347235889"
              className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-2xl hover-lift relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <span>+39 334 723 5889</span>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}