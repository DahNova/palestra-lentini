import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ASD Judo Kodokan Lentini - Palestra Arti Marziali Lentini",
  description: "Scopri l'arte del Judo, Taiso, Chambara e Crossfit Kids presso ASD Judo Kodokan Lentini. Prova gratuita disponibile. Via Toledo 21, Lentini (SR).",
  keywords: "judo lentini, arti marziali lentini, palestra lentini, taiso, chambara, crossfit kids, sport camp, sicilia",
  authors: [{ name: "ASD Judo Kodokan Lentini" }],
  creator: "ASD Judo Kodokan Lentini",
  publisher: "ASD Judo Kodokan Lentini",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ASD Judo Kodokan Lentini - Palestra Arti Marziali",
    description: "Scopri l'arte del Judo e delle discipline orientali a Lentini. Prova gratuita disponibile!",
    url: "https://www.asdjudokodokanlentini.it",
    siteName: "ASD Judo Kodokan Lentini",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASD Judo Kodokan Lentini - Palestra Arti Marziali",
    description: "Scopri l'arte del Judo e delle discipline orientali a Lentini. Prova gratuita disponibile!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
