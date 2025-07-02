export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": "ASD Judo Kodokan Lentini",
    "alternateName": "Judo Kodokan Lentini",
    "description": "Associazione Sportiva Dilettantistica dedicata alla pratica e alla promozione delle arti marziali giapponesi, con particolare attenzione al judo e al benessere psicofisico attraverso discipline complementari.",
    "url": "https://www.asdjudokodokanlentini.it",
    "telephone": "+393347235889",
    "email": "asdjudokodokanlentin@libero.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Toledo n.21",
      "addressLocality": "Lentini",
      "addressRegion": "SR",
      "postalCode": "96016",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.283",
      "longitude": "14.833"
    },
    "openingHours": [
      "Mo-Fr 16:00-21:00",
      "Sa 09:00-13:00"
    ],
    "sameAs": [
      "https://www.instagram.com/asdjudokodokanlentini",
      "https://www.facebook.com/ASD-JUDO-Kodokan-Lentini-2396025753956372/",
      "https://www.tiktok.com/@micheleciciulla",
      "https://www.youtube.com/channel/UCl4hr3xNN0Ae68VSepFpNWg"
    ],
    "sport": ["Judo", "Martial Arts", "Taiso", "Chambara"],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Trial Class",
        "value": "Available"
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "All Ages Welcome",
        "value": "Children to Seniors"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "118",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "€€",
    "paymentAccepted": "Cash, Bank Transfer",
    "currenciesAccepted": "EUR"
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ASD Judo Kodokan Lentini",
    "legalName": "Associazione Sportiva Dilettantistica Judo Kodokan Lentini",
    "url": "https://www.asdjudokodokanlentini.it",
    "logo": "https://www.asdjudokodokanlentini.it/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+393347235889",
      "contactType": "customer service",
      "areaServed": "IT",
      "availableLanguage": "Italian"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Toledo n.21",
      "addressLocality": "Lentini",
      "addressRegion": "Sicilia",
      "postalCode": "96016",
      "addressCountry": "Italy"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Michele Ciciulla",
        "jobTitle": "Head Instructor",
        "sameAs": "https://www.tiktok.com/@micheleciciulla"
      }
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Michele Ciciulla",
        "jobTitle": "Principal Instructor"
      },
      {
        "@type": "Person", 
        "name": "Rossana Vacanti",
        "jobTitle": "Technical Instructor"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "CONI",
        "description": "Comitato Olimpico Nazionale Italiano"
      },
      {
        "@type": "Organization",
        "name": "FOLKAM",
        "description": "Federazione Arti Marziali"
      },
      {
        "@type": "Organization",
        "name": "CSEN",
        "description": "Centro Sportivo Educativo Nazionale"
      }
    ]
  };

  const coursesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Discipline e Corsi Offerti",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Judo",
        "description": "Corso di Judo per tutti i livelli, dai principianti agli avanzati",
        "provider": {
          "@type": "Organization",
          "name": "ASD Judo Kodokan Lentini"
        },
        "educationalLevel": "Beginner to Advanced",
        "audience": {
          "@type": "Audience",
          "audienceType": "All Ages"
        }
      },
      {
        "@type": "Course",
        "name": "Taiso",
        "description": "Ginnastica dolce giapponese per il benessere psicofisico",
        "provider": {
          "@type": "Organization",
          "name": "ASD Judo Kodokan Lentini"
        },
        "educationalLevel": "Beginner",
        "audience": {
          "@type": "Audience",
          "audienceType": "Adults and Seniors"
        }
      },
      {
        "@type": "Course",
        "name": "Chambara",
        "description": "Combattimenti simulati con spade morbide",
        "provider": {
          "@type": "Organization",
          "name": "ASD Judo Kodokan Lentini"
        },
        "educationalLevel": "Beginner",
        "audience": {
          "@type": "Audience",
          "audienceType": "Children and Adults"
        }
      },
      {
        "@type": "Course",
        "name": "Crossfit Kids",
        "description": "Allenamento funzionale per bambini e ragazzi",
        "provider": {
          "@type": "Organization",
          "name": "ASD Judo Kodokan Lentini"
        },
        "educationalLevel": "Beginner",
        "audience": {
          "@type": "Audience",
          "audienceType": "Children and Teenagers"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesData) }}
      />
    </>
  );
}