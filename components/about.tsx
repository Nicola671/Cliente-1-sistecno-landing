import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { CheckCircle2, MapPin } from 'lucide-react'
import { WHATSAPP_MESSAGE_URL } from '@/lib/site'

const points = [
  'Atención a domicilio en toda la ciudad',
  'Soluciones rápidas y confiables',
  'Repuestos de calidad con garantía',
]

export function About() {
  return (
    <section id="nosotros" className="relative bg-secondary py-14 sm:py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:gap-12 md:grid-cols-2 md:px-6">
        {/* Technician image */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border sm:rounded-3xl">
            <Image
              src="/images/about-sistecno.webp"
              alt="Técnico de SISTECNO reparando un electrodoméstico"
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Text content */}
        <Reveal delay={120}>
          <span className="text-xs font-bold uppercase tracking-wider text-accent sm:text-sm">
            Sobre SISTECNO
          </span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground text-balance sm:mt-3 sm:text-3xl lg:text-4xl">
            Especialistas en reparación a domicilio
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            En SISTECNO nos especializamos en la reparación de electrodomésticos con
            atención a domicilio. Brindamos soluciones rápidas y confiables para que
            vuelvas a usar tus equipos sin problemas.
          </p>

          <ul className="mt-5 space-y-2.5 sm:mt-7 sm:space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:size-6">
                  <CheckCircle2 className="size-3.5 text-primary sm:size-4" />
                </span>
                <span className="text-sm font-medium text-foreground sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://maps.google.com/?q=Francia+4073,+B7600+Mar+del+Plata,+Provincia+de+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/60 hover:shadow-md sm:mt-6 sm:p-5"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <MapPin className="size-4" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground transition-colors group-hover:text-primary sm:text-base">
                Nuestro Local
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Francia 4073, B7600 Mar del Plata, Provincia de Buenos Aires
              </p>
            </div>
          </a>

          <Button
            nativeButton={false}
            render={
              <a href={WHATSAPP_MESSAGE_URL} target="_blank" rel="noopener noreferrer" />
            }
            size="lg"
            className="group mt-6 h-12 w-full rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl sm:mt-8 sm:h-13 sm:w-auto sm:px-7 sm:text-base"
          >
            <WhatsAppIcon className="size-5" />
            Consultanos por WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
