"use client";

import { useState } from "react";

// import Image from "next/image";
import * as image from "../../../public/image"

export default function Home() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [placa, setPlaca] = useState("");

  const enviarWhatsApp = () => {
    const mensagem = `*Solicitação de cotação*%0A*Nome*: ${nome}%0A*Contato*: ${contato}%0A*Placa do veículo*: ${placa}`;
    const numeroWhatsApp = "5521997889428"; 
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
  };

  const enviarEmail = () => {
    const assunto = "Solicitação de cotação";
    const corpo = `Nome: ${nome}\nContato: ${contato}\nPlaca do veículo: ${placa}`;
    const email = "willian1999lopes@gmail.com"; // Substitua pelo seu email
    window.open(`mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`);
  };

  const handlePlacaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove caracteres inválidos e transforma em maiúsculas
    if (input.length > 7) input = input.slice(0, 7); // Limita a 7 caracteres

    // Valida se segue o padrão LLLNLNN
    const regex = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
    if (input.length === 7 && !regex.test(input)) {
      alert("Placa inválida! O padrão correto é LLLNLNN.");
    }

    setPlaca(input);
  };

  const handleContatoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (input.length > 11) input = input.slice(0, 11); // Limita a 11 dígitos (DDD + número)

    // Formata para o padrão (XX) XXXXX-XXXX
    if (input.length > 10) {
      input = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7)}`;
    } else if (input.length > 6) {
      input = `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(6)}`;
    } else if (input.length > 2) {
      input = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    }
    setContato(input);
  };

  return (
    <div className="font-sans">
      {/* <Header /> */}

      <main className="">
        <section className="mb-10">
          <span className="bg-white/75 text-center py-4 text-black" >
              <h1 className="text-2xl font-bold">Bem-vindo à APVS</h1>
              <p className="text-lg px-2 mt-2">A solução para proteção veicular que você merece.</p>
          </span>
        </section>

        <section className="mb-10 flex justify-between gap-4 items-center flex-wrap text-center md:text-left" id="about" >
          <div className="w-full md:w-1/2 max-w-lg mx-auto">
            <h2 className="text-blue-800 text-xl font-semibold">Sobre a APVS</h2>
              <p className="mt-2 text-gray-700 text-justify">
                A APVS é uma associação especializada em oferecer serviços de proteção veicular.
                Com anos de experiência, ajudamos nossos associados a protegerem seus veículos contra
                diversos imprevistos, como roubo, furto, colisões, e muito mais. Nosso objetivo é garantir
                sua tranquilidade e segurança onde quer que você esteja.
              </p>
          </div>
          <div className="w-full md:w-1/2 max-w-2xl mx-auto">
            <img src={image.veiculos_logo} alt="veiculos_logo" />
          </div>
        </section>

        <section className="mb-10 flex justify-between gap-4 items-center flex-wrap text-center bg-gray-100 md:text-left" id="services">
          <div className="w-full md:w-1/2 max-w-2xl mx-auto">
            <img src={image.veiculos_image} alt="veiculos_imagem" />
          </div>
          <div className="w-full md:w-1/2 max-w-lg mx-auto">
            <h2 className="text-blue-800 text-xl font-semibold">Por que escolher a APVS?</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Proteção completa para o seu veículo.</li>
              <li>Atendimento rápido e humanizado.</li>
              <li>Preço acessível e justo.</li>
              <li>Assistência 24 horas em todo o Brasil.</li>
              <li>Vantagens exclusivas para associados.</li>
            </ul>
          </div>
        </section>

        <section className="text-center mb-10" id="contato">
          <div>
            <h2 className="text-blue-800 text-xl font-semibold">Fale comigo agora!</h2>
            <p className="mt-2 text-gray-700">
              Entre em contato diretamente pelo WhatsApp e tire todas as suas dúvidas ou inicie sua adesão.
            </p>
            <a
              href="https://wa.me/5521997889428"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white py-2 px-4 mt-4 rounded font-bold text-lg hover:bg-green-600"
            >
              Fale comigo no WhatsApp
            </a>
          </div>

          <div className="flex justify-center my-5 items-center">
          <img className="max-w-10" src={image.icon_tel} alt="contato" />

            <p className="ml-5">+55 (21) 99788-9428</p>
          </div>
        </section>

        <section className="py-10 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
              Conheça mais sobre a APVS
            </h2>
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/LlNwzRAfZ1Y"
                title="Vídeo sobre a APVS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
            </div>
          </div>
        </section>

        <section className="mb-10" id="cotacao">
          <div className="py-10 px-6">
            <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
              Solicite sua cotação gratuitamente
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                enviarWhatsApp(); // Você pode trocar para `enviarEmail()` se preferir o email como padrão.
              }}
              className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contato" className="block text-gray-700 font-bold mb-2">
                  Contato
                </label>
                <input
                  id="contato"
                  type="tel"
                  value={contato}
                  onChange={handleContatoChange}
                  required
                  placeholder="(XX) XXXXX-XXXX"
                  pattern="[0-9]*"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="placa" className="block text-gray-700 font-bold mb-2">
                  Placa do veículo
                </label>
                <input
                  id="placa"
                  type="text"
                  value={placa}
                  onChange={handlePlacaChange}
                  required
                  placeholder="LLLNLNN"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              <div className="flex justify-between flex-wrap gap-4">
                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Enviar via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={enviarEmail}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Enviar via Email
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
