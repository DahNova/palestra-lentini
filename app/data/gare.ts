// ========================================
// CONFIGURAZIONE GARE E COMPETIZIONI
// ========================================
// 
// ISTRUZIONI PER IL CLIENTE:
// 1. Modifica i dati qui sotto per aggiornare le gare sul sito
// 2. Aggiungi/rimuovi gare dalla lista "prossimeGare"
// 3. Aggiungi/rimuovi risultati dalla lista "risultatiRecenti" 
// 4. Salva il file per vedere le modifiche sul sito
//
// FORMATO DATE: "GG Mese AAAA" (es: "15 Marzo 2025")
// STATO ISCRIZIONI: "Aperte", "Chiuse", "A breve"
// TIPO GARA: "Nazionale", "Regionale", "Provinciale", "Locale"
//

export interface GaraInterface {
  id: number;
  nome: string;
  data: string;
  luogo: string;
  categoria: string;
  iscrizioni: "Aperte" | "Chiuse" | "A breve";
  tipo: "Nazionale" | "Regionale" | "Provinciale" | "Locale";
}

export interface RisultatoInterface {
  id: number;
  gara: string;
  atleta: string;
  posizione: string;
  categoria: string;
  data: string;
}

// ========================================
// PROSSIME GARE - MODIFICARE QUI
// ========================================
export const prossimeGare: GaraInterface[] = [
  {
    id: 1,
    nome: "Trofeo Regionale Sicilia del Puzzo",
    data: "15 Marzo 2025",
    luogo: "Palestra Comunale - Catania",
    categoria: "Esordienti A/B",
    iscrizioni: "Aperte",
    tipo: "Regionale"
  },
  {
    id: 2,
    nome: "Campionato Provinciale",
    data: "22 Marzo 2025", 
    luogo: "Palasport - Siracusa",
    categoria: "Tutte le categorie",
    iscrizioni: "Aperte",
    tipo: "Provinciale"
  },
  {
    id: 3,
    nome: "Gran Prix di Primavera",
    data: "5 Aprile 2025",
    luogo: "Centro Sportivo - Lentini",
    categoria: "Junior/Senior",
    iscrizioni: "A breve",
    tipo: "Nazionale"
  },
  // AGGIUNGI NUOVE GARE QUI:
  // {
  //   id: 4,
  //   nome: "Nome della gara",
  //   data: "GG Mese AAAA",
  //   luogo: "Luogo - Città",
  //   categoria: "Categoria atleti",
  //   iscrizioni: "Aperte" | "Chiuse" | "A breve",
  //   tipo: "Nazionale" | "Regionale" | "Provinciale" | "Locale"
  // },
];

// ========================================
// RISULTATI RECENTI - MODIFICARE QUI
// ========================================
export const risultatiRecenti: RisultatoInterface[] = [
  {
    id: 1,
    gara: "Campionato Regionale 2024",
    atleta: "Marco Rossi",
    posizione: "1° Posto",
    categoria: "Junior -73kg",
    data: "Novembre 2024"
  },
  {
    id: 2,
    gara: "Trofeo Sicilia Sud",
    atleta: "Sofia Bianchi", 
    posizione: "2° Posto",
    categoria: "Cadetti -57kg",
    data: "Ottobre 2024"
  },
  {
    id: 3,
    gara: "Memorial Giuseppe Garibaldi",
    atleta: "Luca Verdi",
    posizione: "3° Posto", 
    categoria: "Senior -81kg",
    data: "Settembre 2024"
  },
  // AGGIUNGI NUOVI RISULTATI QUI:
  // {
  //   id: 4,
  //   gara: "Nome della gara",
  //   atleta: "Nome Cognome",
  //   posizione: "1° Posto" | "2° Posto" | "3° Posto",
  //   categoria: "Categoria peso",
  //   data: "Mese AAAA"
  // },
];

// ========================================
// CONFIGURAZIONE STAGIONI - MODIFICARE SE NECESSARIO
// ========================================
export const stagioniInfo = [
  {
    nome: "Primavera",
    periodo: "Marzo - Maggio",
    descrizione: "Tornei regionali e nazionali",
    colore: "red"
  },
  {
    nome: "Estate",
    periodo: "Giugno - Agosto", 
    descrizione: "Stage e camp estivi",
    colore: "yellow"
  },
  {
    nome: "Autunno",
    periodo: "Settembre - Novembre",
    descrizione: "Campionati e qualificazioni", 
    colore: "blue"
  },
  {
    nome: "Inverno",
    periodo: "Dicembre - Febbraio",
    descrizione: "Preparazione e allenamenti",
    colore: "gray"
  }
];

// ========================================
// FUNZIONI HELPER (NON MODIFICARE)
// ========================================
export const getColorClasses = (tipo: string) => {
  switch (tipo) {
    case 'Nazionale':
      return {
        gradient: 'bg-gradient-red-warm',
        text: 'text-red-600',
        badge: 'bg-yellow-400 text-red-900'
      };
    case 'Regionale':
      return {
        gradient: 'bg-gradient-gray',
        text: 'text-gray-600', 
        badge: 'bg-white text-gray-900'
      };
    case 'Provinciale':
      return {
        gradient: 'bg-gradient-gold',
        text: 'text-yellow-600',
        badge: 'bg-white text-red-900'
      };
    default:
      return {
        gradient: 'bg-gradient-to-r from-blue-500 to-blue-600',
        text: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-900'
      };
  }
};

export const getPosizioneColor = (posizione: string) => {
  if (posizione.includes('1°')) {
    return 'bg-gradient-gold text-red-900';
  } else if (posizione.includes('2°')) {
    return 'bg-gradient-gray text-white';
  } else {
    return 'bg-gradient-to-r from-orange-400 to-orange-500 text-white';
  }
};