import type { Metadata } from "next";
import "./globals.css";
import './globalicon.css';
import React from "react";
import Header from "@/components/header";
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
      <body className="flex flex-col flex-wrap justify-between"><Header title="Tableau de bord"/>{children}<Footer /></body>
    </html>
  );
}
