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
  title: "APVS Brasil",
  description: "Proteção veicular com segurança e confiança.",
  icons: {
    icon: '/image/favicon_io/favicon.ico', // Caminho correto
  },
  robots: "index, follow",
  openGraph: {
    title: "APVS Brasil",
    description: "Proteção veicular com segurança e confiança.",
    url: "https://www.apvsbrasil.com.br",
    images: [
      {
        url: "/image/apvs-logomarca.png",
        width: 400,
        height: 200,
        alt: "APVS Logomarca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APVS Brasil",
    description: "Proteção veicular com segurança e confiança.",
    images: ["/public/image/apvs-logomarca.png"],
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
