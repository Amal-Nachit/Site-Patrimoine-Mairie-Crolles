// Le reste de votre fichier reste inchangé
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrimoine",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
