'use client';

import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Barra do Menu */}
        <div className="
            md: bg-blue-800/40
            bg-blue-800 
            text-white 
            flex 
            justify-between 
            items-center 
            px-6 
            py-4
            hover:bg-blue-800
            transition-all
            duration-500
            font-bold
            rounded-lg
            "
        >
            <a href="#" className="text-2xl font-bold">
                {/* <Image className="max-w-16" src={image.logo_header} alt="logo_apvs" /> */}
                APVS
            </a>

            {/* Botão Hambúrguer */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                            isOpen
                            ? "M6 18L18 6M6 6l12 12" // Ícone de "fechar"
                            : "M4 6h16M4 12h16M4 18h16" // Ícone de "menu hambúrguer"
                        }
                    />
                </svg>
            </button>

            {/* Menu Horizontal - Visível apenas em telas maiores */}
            <ul className="hidden md:flex gap-6">
                <li>
                    <a href="#about" className="hover:text-blue-300 transition-all">
                    Sobre APVS
                    </a>
                </li>
                <li>
                    <a href="#services" className="hover:text-blue-300 transition-all">
                    Serviços
                    </a>
                </li>
                <li>
                    <a href="#contato" className="hover:text-blue-300 transition-all">
                    Contato
                    </a>
                </li>
                <li>
                    <a href="#cotacao" className="hover:text-blue-300 transition-all">
                    Faça uma Cotação
                    </a>
                </li>
            </ul>
        </div>

      {/* Menu Deslizante - Cortina */}
      <div
        className={`fixed top-0 left-0 w-full bg-blue-800 text-white transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center py-10 space-y-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 text-white"
          >
            {/* Ícone de "fechar" */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <a
            href="#about"
            className="hover:text-blue-300 text-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Sobre APVS
          </a>
          <a
            href="#services"
            className="hover:text-blue-300 text-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="hover:text-blue-300 text-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
          <a
            href="#cotacao"
            className="hover:text-blue-300 text-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Faça uma Cotação
          </a>
        </div>
      </div>
    </div>
  );
}
