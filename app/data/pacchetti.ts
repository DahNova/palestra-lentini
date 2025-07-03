// ========================================
// CONFIGURAZIONE PACCHETTI E ABBONAMENTI
// ========================================
// 
// ISTRUZIONI PER IL CLIENTE:
// 1. Modifica i prezzi e le caratteristiche qui sotto
// 2. Aggiungi/rimuovi caratteristiche dai pacchetti
// 3. Modifica i pacchetti famiglia e sconti
// 4. Salva il file per vedere le modifiche sul sito
//
// COLORI DISPONIBILI: "gray", "red", "gold"
// BADGE DISPONIBILI: null, "Più Popolare", "Esclusivo", "Consigliato"
//

export interface CaratteristicaPacchetto {
  nome: string;
  incluso: boolean;
}

export interface PacchettoInterface {
  id: number;
  nome: string;
  prezzo: string;
  periodo: string;
  colore: "gray" | "red" | "gold";
  descrizione: string;
  caratteristiche: CaratteristicaPacchetto[];
  adattoPer: string[];
  badge: string | null;
}

export interface PacchettoFamigliaInterface {
  tipo: string;
  sconto: string;
  risparmio: string;
  descrizione: string;
}

// ========================================
// PACCHETTI PRINCIPALI - MODIFICARE QUI
// ========================================
export const pacchetti: PacchettoInterface[] = [
  {
    id: 1,
    nome: "Pacchetto Base",
    prezzo: "45",
    periodo: "mese",
    colore: "gray",
    descrizione: "Perfetto per iniziare il tuo percorso",
    caratteristiche: [
      { nome: "2 lezioni settimanali", incluso: true },
      { nome: "Una disciplina a scelta", incluso: true },
      { nome: "Prova gratuita", incluso: true },
      { nome: "Accesso a tutte le discipline", incluso: false },
      { nome: "Preparazione agonistica", incluso: false },
      { nome: "Lezioni private", incluso: false }
    ],
    adattoPer: ["Principianti", "Bambini", "Adulti"],
    badge: null
  },
  {
    id: 2,
    nome: "Pacchetto Premium",
    prezzo: "75",
    periodo: "mese", 
    colore: "red",
    descrizione: "La scelta più popolare per praticanti seri",
    caratteristiche: [
      { nome: "3 lezioni settimanali", incluso: true },
      { nome: "Tutte le discipline incluse", incluso: true },
      { nome: "Preparazione agonistica", incluso: true },
      { nome: "1 lezione privata mensile", incluso: true },
      { nome: "Prova gratuita", incluso: true },
      { nome: "Lezioni private illimitate", incluso: false }
    ],
    adattoPer: ["Atleti", "Competizioni", "Progresso rapido"],
    badge: "Più Popolare"
  },
  {
    id: 3,
    nome: "Pacchetto Elite",
    prezzo: "120",
    periodo: "mese",
    colore: "gold",
    descrizione: "L'esperienza completa per veri campioni",
    caratteristiche: [
      { nome: "Lezioni illimitate", incluso: true },
      { nome: "Tutte le discipline incluse", incluso: true },
      { nome: "Preparazione agonistica personalizzata", incluso: true },
      { nome: "Lezioni private illimitate", incluso: true },
      { nome: "Follow-up nutrizionale", incluso: true },
      { nome: "Accesso prioritario agli eventi", incluso: true }
    ],
    adattoPer: ["Agonisti", "Atleti elite", "Massimi risultati"],
    badge: "Esclusivo"
  }
  // AGGIUNGI NUOVI PACCHETTI QUI:
  // {
  //   id: 4,
  //   nome: "Nome Pacchetto",
  //   prezzo: "PREZZO",
  //   periodo: "mese",
  //   colore: "gray" | "red" | "gold",
  //   descrizione: "Descrizione del pacchetto",
  //   caratteristiche: [
  //     { nome: "Caratteristica 1", incluso: true },
  //     { nome: "Caratteristica 2", incluso: false }
  //   ],
  //   adattoPer: ["Tipo 1", "Tipo 2"],
  //   badge: null | "Badge personalizzato"
  // },
];

// ========================================
// PACCHETTI FAMIGLIA - MODIFICARE QUI
// ========================================
export const pacchettiFamiglia: PacchettoFamigliaInterface[] = [
  {
    tipo: "2 Membri",
    sconto: "15%",
    risparmio: "Risparmia fino a €160/anno",
    descrizione: "Perfetto per coppie o genitore + figlio"
  },
  {
    tipo: "3+ Membri", 
    sconto: "25%",
    risparmio: "Risparmia fino a €450/anno",
    descrizione: "Ideale per famiglie numerose"
  }
  // AGGIUNGI NUOVI SCONTI FAMIGLIA QUI:
  // {
  //   tipo: "Numero Membri",
  //   sconto: "XX%",
  //   risparmio: "Risparmia fino a €XXX/anno",
  //   descrizione: "Descrizione del pacchetto famiglia"
  // },
];

// ========================================
// OPZIONI DI PAGAMENTO - MODIFICARE QUI
// ========================================
export const opzioniPagamento = [
  {
    nome: "Mensile",
    descrizione: "Massima flessibilità",
    sconto: "0%",
    caratteristiche: [
      "Pagamento ogni mese",
      "Nessun vincolo", 
      "Disdetta in qualsiasi momento"
    ],
    colore: "green"
  },
  {
    nome: "Trimestrale",
    descrizione: "Ottimo rapporto qualità-prezzo",
    sconto: "10%",
    caratteristiche: [
      "Pagamento ogni 3 mesi",
      "Sconto 10%",
      "Pianificazione facilitata"
    ],
    colore: "yellow",
    badge: "Risparmio 10%"
  },
  {
    nome: "Annuale", 
    descrizione: "Massimo risparmio",
    sconto: "20%",
    caratteristiche: [
      "Pagamento una volta l'anno",
      "Sconto 20%",
      "Accesso garantito tutto l'anno"
    ],
    colore: "red",
    badge: "Risparmio 20%"
  }
];

// ========================================
// SERVIZI INCLUSI - MODIFICARE QUI
// ========================================
export const serviziInclusi = [
  {
    nome: "Assicurazione",
    descrizione: "Copertura completa per tutte le attività",
    icona: "Shield",
    colore: "red"
  },
  {
    nome: "Istruttori Qualificati", 
    descrizione: "Staff tecnico con esperienza certificata",
    icona: "User",
    colore: "gray"
  },
  {
    nome: "Attrezzature",
    descrizione: "Materiali e spazi sempre a disposizione", 
    icona: "Target",
    colore: "gold"
  },
  {
    nome: "Eventi Speciali",
    descrizione: "Stage, seminari e manifestazioni incluse",
    icona: "Sparkles", 
    colore: "blue"
  }
];

// ========================================
// FUNZIONI HELPER (NON MODIFICARE)
// ========================================
export const getColorClasses = (colore: string) => {
  switch (colore) {
    case 'red':
      return {
        gradient: 'bg-gradient-red-warm',
        text: 'text-red-600',
        button: 'bg-gradient-red text-white shadow-glow',
        border: 'border-red-500/30'
      };
    case 'gold':
      return {
        gradient: 'bg-gradient-gold',
        text: 'text-yellow-600',
        button: 'bg-gradient-gold text-red-900 shadow-gold',
        border: 'border-yellow-500/30'
      };
    default:
      return {
        gradient: 'bg-gradient-gray',
        text: 'text-gray-600',
        button: 'bg-gradient-gray text-white shadow-soft',
        border: 'border-gray-500/30'
      };
  }
};

export const getIconComponent = (iconName: string) => {
  // Questa funzione restituisce la classe CSS per l'icona
  // Sarà utilizzata nel componente React
  return iconName;
};