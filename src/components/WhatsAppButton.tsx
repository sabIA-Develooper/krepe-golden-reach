import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5535991658802";
  const message = "Olá! Gostaria de falar com um advogado.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse min-h-[56px] min-w-[56px] flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
    </a>
  );
};

export default WhatsAppButton;
