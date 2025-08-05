import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const phoneNumber = "+27747231048";
  const message = "Hi Green Gables! I'm interested in your shuttle services.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        size="lg"
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 hidden sm:block">WhatsApp</span>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;