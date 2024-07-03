import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import DataPatrimoine from "./components/data/DataPatrimoine";

export const metadata: Metadata = {
  title: "Patrimoine de Crolles",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json"></link>  
      </Head>
      <body className="font-arial">{children}</body>
    </html>
  );
}
