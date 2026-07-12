import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LATTECH | Agencia de Tecnologia",
  description: "WebApp SaaS de alta performance para Empresas de alto nível.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {/* Navbar global */}
        <Navbar />
        
        {/* Conteúdo das páginas */}
        {children}
      </body>
    </html>
  );
}
