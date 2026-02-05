import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5516997532209";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" />
    </a>
  );
}
