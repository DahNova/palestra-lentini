'use client';

import { useState } from 'react';
import { Phone, Image } from 'lucide-react';

// Metadata defined but not exported in client component

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    disciplina: '',
    messaggio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulazione invio form
    setTimeout(() => {
      setSubmitMessage('Messaggio inviato con successo! Ti contatteremo presto.');
      setIsSubmitting(false);
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        disciplina: '',
        messaggio: ''
      });
    }, 1000);
  };

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
              <Phone className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-shadow-lg leading-tight mb-6">
            <span className="block text-yellow-300 drop-shadow-lg">Contattaci</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-medium max-w-4xl mx-auto mb-8">
            Prenota la tua prova gratuita o richiedi informazioni
          </p>
          
          <div className="bg-yellow-400 text-red-900 px-6 py-3 rounded-lg inline-block font-bold text-lg shadow-gold">
            🎁 PROVA GRATUITA DISPONIBILE!
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form di Contatto */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Prenota la Tua Prova Gratuita
                </h2>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 text-green-700">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Il tuo nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="disciplina" className="block text-sm font-medium text-gray-700 mb-2">
                      Disciplina di Interesse
                    </label>
                    <select
                      id="disciplina"
                      name="disciplina"
                      value={formData.disciplina}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Seleziona una disciplina</option>
                      <option value="judo">🥋 Judo</option>
                      <option value="taiso">🧘‍♂️ Taiso (Ginnastica Dolce)</option>
                      <option value="chambara">⚔️ Chambara</option>
                      <option value="crossfit-kids">🏃‍♂️ Crossfit Kids</option>
                      <option value="sport-camp">🏕️ Sport Camp</option>
                      <option value="informazioni">ℹ️ Informazioni Generali</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows={4}
                      value={formData.messaggio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Raccontaci qualcosa di te, della tua esperienza o delle tue aspettative..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Invio in corso...' : '🥋 Prenota Prova Gratuita'}
                  </button>
                </form>

                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Privacy:</strong> I tuoi dati verranno utilizzati solo per contattarti riguardo 
                    alla tua richiesta e non verranno condivisi con terze parti.
                  </p>
                </div>
              </div>
            </div>

            {/* Informazioni di Contatto */}
            <div className="space-y-8">
              {/* Informazioni Principali */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Come Raggiungerci
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Indirizzo</h3>
                      <p className="text-gray-600">Via Toledo n.21</p>
                      <p className="text-gray-600">96016 Lentini (SR), Sicilia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefono</h3>
                      <a
                        href="tel:+393347235889"
                        className="text-red-600 hover:text-red-700 font-medium text-lg"
                      >
                        +39 334 723 5889
                      </a>
                      <p className="text-gray-500 text-sm">Clicca per chiamare</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:asdjudokodokanlentin@libero.it"
                        className="text-red-600 hover:text-red-700 font-medium break-all"
                      >
                        asdjudokodokanlentin@libero.it
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900 text-white rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Seguici sui Social</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.instagram.com/asdjudokodokanlentini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="text-2xl">📷</span>
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-gray-300 text-sm">@asdjudokodokanlentini</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/ASD-JUDO-Kodokan-Lentini-2396025753956372/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="text-2xl">📘</span>
                    <div>
                      <p className="font-semibold">Facebook</p>
                      <p className="text-gray-300 text-sm">ASD JUDO Kodokan</p>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@micheleciciulla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="text-2xl">🎵</span>
                    <div>
                      <p className="font-semibold">TikTok</p>
                      <p className="text-gray-300 text-sm">@micheleciciulla</p>
                    </div>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCl4hr3xNN0Ae68VSepFpNWg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="text-2xl">📺</span>
                    <div>
                      <p className="font-semibold">YouTube</p>
                      <p className="text-gray-300 text-sm">Canale ufficiale</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Orari e Info Utili */}
              <div className="bg-yellow-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informazioni Utili
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎁</span>
                    <div>
                      <p className="font-semibold text-gray-900">Prova Gratuita</p>
                      <p className="text-gray-600 text-sm">Disponibile per tutte le discipline</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👥</span>
                    <div>
                      <p className="font-semibold text-gray-900">Attività Associativa</p>
                      <p className="text-gray-600 text-sm">Riservata ai soci con quota associativa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <p className="font-semibold text-gray-900">Tutte le Età</p>
                      <p className="text-gray-600 text-sm">Corsi per bambini, adulti e senior</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mappa e Indicazioni */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dove Siamo
            </h2>
            <p className="text-xl text-gray-600">
              Nel cuore di Lentini, facilmente raggiungibile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Mappa Placeholder */}
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-gray-600 font-medium">Via Toledo n.21, Lentini (SR)</p>
                <a
                  href="https://maps.google.com/?q=Via+Toledo+21,+Lentini+SR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Apri in Google Maps
                </a>
              </div>
            </div>

            {/* Indicazioni */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Come Raggiungerci
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">In Auto</h4>
                    <p className="text-gray-600">
                      Dalla A18: uscita Lentini, seguire indicazioni per il centro. 
                      Via Toledo si trova nel centro storico di Lentini.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🚌</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Mezzi Pubblici</h4>
                    <p className="text-gray-600">
                      Autobus urbani con fermata in Via Toledo. 
                      Stazione ferroviaria di Lentini a 10 minuti di auto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🚶</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">A Piedi</h4>
                    <p className="text-gray-600">
                      Nel centro di Lentini, facilmente raggiungibile a piedi 
                      da qualsiasi punto del centro storico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  💡 Suggerimento
                </h4>
                <p className="text-gray-600">
                  Chiamaci prima di venire per assicurarti che ci siano posti disponibili 
                  per la prova gratuita nella disciplina che ti interessa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galleria Sede */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              La Nostra Sede
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Scopri i nostri spazi e l&apos;ambiente accogliente che ti aspetta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="group bg-gray-200 rounded-2xl h-48 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center z-10">
                  <Image className="w-12 h-12 text-gray-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-500 font-medium text-sm">
                    {i === 0 ? "Ingresso Principale" :
                     i === 1 ? "Reception" :
                     i === 2 ? "Spogliatoi" : "Area Relax"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="group bg-gray-200 rounded-2xl h-56 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center z-10">
                  <Image className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-500 font-medium">
                    {i === 0 ? "Staff al Lavoro" :
                     i === 1 ? "Atmosfera Palestra" : "Via Toledo 21"}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {i === 0 ? "I nostri istruttori" :
                     i === 1 ? "Durante le lezioni" : "La nostra posizione"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}