// src/components/ButtonWhatsapp.tsx
export default function ButtonWhatsapp() {
    const numeroWhatsApp = "5521997889428";
    const mensagem = "Olá, gostaria de mais informações sobre os serviços da APVS!";
  
    return (
      <a
        href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 animate-bounce"
        title="Fale conosco no WhatsApp"
      >
        {/* Ícone do WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0a11.87 11.87 0 0 0-8.52 3.48A11.87 11.87 0 0 0 0 12c0 2.11.55 4.18 1.6 6.01L0 24l6-1.57A11.91 11.91 0 0 0 12 24c3.17 0 6.15-1.24 8.52-3.48A11.87 11.87 0 0 0 24 12a11.87 11.87 0 0 0-3.48-8.52ZM12 22.06a10.31 10.31 0 0 1-5.19-1.4l-.37-.22-3.56.92.96-3.49-.24-.37A10.31 10.31 0 0 1 1.94 12a10.27 10.27 0 0 1 3.02-7.31A10.27 10.27 0 0 1 12 1.94a10.27 10.27 0 0 1 7.31 3.02A10.27 10.27 0 0 1 22.06 12 10.27 10.27 0 0 1 19.04 19.3 10.27 10.27 0 0 1 12 22.06Zm5.19-6.9c-.28-.14-1.64-.8-1.9-.89-.25-.1-.43-.14-.6.14-.16.28-.68.89-.83 1.07-.15.19-.3.21-.56.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.3.43-.45.14-.15.19-.26.28-.43.1-.19.05-.35-.03-.5-.08-.14-.6-1.46-.82-2-.22-.53-.43-.45-.6-.46h-.52c-.18 0-.46.07-.7.35s-.91.88-.91 2.14 1.08 2.5 1.23 2.67c.14.19 2.14 3.22 5.19 4.51a7.56 7.56 0 0 0 3.73.9c1.57 0 2.4-.56 2.73-.88.33-.32.41-.76.46-1.07.05-.3.02-.45-.07-.63-.08-.14-.25-.22-.52-.35Z" />
        </svg>
      </a>
    );
  }
  