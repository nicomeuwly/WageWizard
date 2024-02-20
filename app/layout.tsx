import type { Metadata, Viewport } from "next";
import "./globals.css";
import './globalicon.css';
import React from "react";
import Footer from "@/components/footer";

const APP_NAME = "WageWizard";
const APP_DEFAULT_TITLE = "WageWizard - Assistant du temps de travail et du salaire";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Gestions des heures de travail et calcul du salaire.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#313131",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col">
        <div className="basis-[90%]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
