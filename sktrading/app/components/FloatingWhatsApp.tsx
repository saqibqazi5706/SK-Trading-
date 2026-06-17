import { MessageCircle } from "lucide-react";

// Fixed WhatsApp button that stays in view while scrolling.
export default function FloatingWhatsApp({
  phone = "923004079337",
}: {
  phone?: string;
}) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:bg-green-500 hover:scale-105"
    >
      <MessageCircle size={28} />
    </a>
  );
}
