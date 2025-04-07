import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappLink = "https://wa.me/971543620528"; 

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-12 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
