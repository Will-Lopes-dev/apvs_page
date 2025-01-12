import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import ButtonWhatsapp from "../components/buttonWhatsapp/ButtonWhatsapp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APVS com Willian Lopes",
  description: "Proteção veicular com segurança e confiança.",
  icons: {
    icon: '/image/favicon_io/favicon.ico', // Caminho correto
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* <div className=""> */}
          <Menu/>
        {/* </div> */}

        <Header/>

        <main className="flex-grow p-5">
          {children}
        </main>

        <Footer/>

        <ButtonWhatsapp /> 
      </body>
    </html>
  );
}
