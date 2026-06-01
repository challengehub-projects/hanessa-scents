import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/07086389388?text=${encodeURIComponent(
  "✨🌹 Hello HANESSA'S SCENTS. I would like to order this fragrance. Please share availability, pricing, and payment details. 💎🥂"
)}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
}
