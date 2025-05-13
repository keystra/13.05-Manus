import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"]
});

const roboto = Roboto({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "KeyStra | Consultoria Multidisciplinar Orientada a Resultados",
  description: "A KeyStra é uma consultoria multidisciplinar focada em pequenas e médias empresas, oferecendo serviços nas áreas Financeira, Operacional, Comercial, Recursos Humanos e Engenharia.",
  keywords: "consultoria empresarial, consultoria financeira, consultoria operacional, consultoria comercial, consultoria RH, pequenas e médias empresas, PMEs, resultados mensuráveis, implementação assistida",
  authors: [{ name: "KeyStra Consultoria" }],
  creator: "KeyStra Consultoria",
  publisher: "KeyStra Consultoria",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://keystra.com.br",
    siteName: "KeyStra Consultoria",
    title: "KeyStra | Consultoria Multidisciplinar Orientada a Resultados",
    description: "A KeyStra é uma consultoria multidisciplinar focada em pequenas e médias empresas, oferecendo serviços nas áreas Financeira, Operacional, Comercial, Recursos Humanos e Engenharia.",
    images: [
      {
        url: "https://keystra.com.br/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KeyStra Consultoria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KeyStra | Consultoria Multidisciplinar Orientada a Resultados",
    description: "A KeyStra é uma consultoria multidisciplinar focada em pequenas e médias empresas, oferecendo serviços nas áreas Financeira, Operacional, Comercial, Recursos Humanos e Engenharia.",
    images: ["https://keystra.com.br/images/twitter-image.jpg"],
  },
};

import React from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(require("../../public/schema.json")) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
