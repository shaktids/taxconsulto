import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1fa855] px-5 py-3 text-sm font-black text-white shadow-premium transition hover:bg-[#168a45]"
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20TaxConsulto%2C%20I%20need%20tax%20and%20compliance%20support.`}
      aria-label="Chat with TaxConsulto on WhatsApp"
    >
      WhatsApp Now
    </a>
  );
}
