import type { Metadata } from "next";
import "./globals.css";
import './globalicon.css';
import React from "react";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "WageWizard",
  description: "Gestion des heures de travail et calcul du salaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <header>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png"></link>
        <meta name="theme-color" content="#313131" />
      </header>
      <body className="flex flex-col">
        <div className="basis-[90%]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
