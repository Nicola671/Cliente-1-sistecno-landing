import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { WHATSAPP_MESSAGE_URL } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_MESSAGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full bg-foreground/90 px-4 py-2 text-sm font-semibold text-background shadow-lg sm:block">
        ¿Necesitás ayuda?
      </span>
      <span className="relative flex size-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        <WhatsAppIcon className="relative size-8" />
      </span>
    </a>
  )
}
