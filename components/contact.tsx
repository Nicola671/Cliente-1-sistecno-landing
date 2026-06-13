import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { Phone, Share2, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  HOURS,
  WHATSAPP_MESSAGE_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from '@/lib/site'

const details = [
  { icon: Phone, label: 'Teléfono', value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: Share2, label: '¡Seguinos!', social: true },
  { icon: Clock, label: 'Horarios', value: HOURS },
]

export function Contact() {
  return (
    <section id="contacto" className="relative bg-primary py-14 text-primary-foreground sm:py-20 md:py-28">
      {/* Wave divider at top: secondary → blue */}
      <div className="absolute -top-px inset-x-0 overflow-hidden" style={{ lineHeight: 0, transform: 'rotate(180deg)' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-6 w-full sm:h-10 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#EFF4FB"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center">
          {/* Left: CTA */}
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-wider text-accent sm:text-sm">
              Contacto
            </span>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-balance sm:mt-3 sm:text-3xl lg:text-4xl">
              Solicitá tu reparación hoy
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-lg">
              Escribinos por WhatsApp o llamanos y coordinamos la visita a tu domicilio.
            </p>

            <Button
              nativeButton={false}
              render={
                <a href={WHATSAPP_MESSAGE_URL} target="_blank" rel="noopener noreferrer" />
              }
              size="lg"
              className="group mt-5 h-12 w-full rounded-full bg-accent px-6 text-sm font-bold text-accent-foreground shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl sm:mt-7 sm:h-14 sm:w-auto sm:px-7 sm:text-base"
            >
              <WhatsAppIcon className="size-5 transition-transform duration-300 group-hover:rotate-12" />
              Solicitar servicio por WhatsApp
            </Button>
          </Reveal>

          {/* Right: Detail cards */}
          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {details.map((detail, i) => (
                <li
                  key={detail.label}
                  className={cn(
                    "rounded-xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/15 transition-all duration-300 hover:bg-white/15 hover:shadow-lg sm:rounded-2xl sm:p-5",
                    i === 2 && "sm:col-span-2"
                  )}
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-md sm:size-11 sm:rounded-xl">
                    <detail.icon className="size-4 sm:size-5" />
                  </span>
                  <p className="mt-3 text-xs font-medium text-white/70 sm:mt-4 sm:text-sm">
                    {detail.label}
                  </p>
                  {detail.social ? (
                    <div className="mt-2 flex gap-4">
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-10 items-center justify-center rounded-full bg-white/20 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:size-12"
                        aria-label="Instagram"
                      >
                        <img src="/images/instagram.png" alt="Instagram" className="size-6 object-contain sm:size-7" />
                      </a>
                      <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-10 items-center justify-center rounded-full bg-white/20 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:size-12"
                        aria-label="Facebook"
                      >
                        <img src="/images/facebook.png" alt="Facebook" className="size-7 object-contain sm:size-8" />
                      </a>
                    </div>
                  ) : detail.href ? (
                    <a
                      href={detail.href}
                      className="font-heading text-base font-bold transition-colors hover:text-accent sm:text-lg"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="font-heading text-base font-bold sm:text-lg">{detail.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Wave divider at bottom: blue → dark footer */}
      <div className="absolute -bottom-px inset-x-0 overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-6 w-full sm:h-10 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#061B3A"
          />
        </svg>
      </div>
    </section>
  )
}
