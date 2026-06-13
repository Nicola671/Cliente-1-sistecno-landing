import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { WHATSAPP_MESSAGE_URL } from '@/lib/site'
import { TestimonialCarousel } from '@/components/testimonial-carousel'

export function UrgentCta() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-background py-14 sm:py-20 md:py-28">
      {/* Gradient transition from the pure white wave above */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent sm:h-32" />

      {/* Decorative blue & orange blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-0 size-72 rounded-full bg-primary/15 blur-2xl sm:size-96" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-10 size-60 rounded-full bg-primary/10 blur-2xl sm:size-80" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/3 top-2/3 size-40 rounded-full bg-accent/10 blur-2xl sm:size-56" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-5 top-1/3 size-44 rounded-full bg-accent/12 blur-2xl sm:size-60" />
      <div aria-hidden="true" className="pointer-events-none absolute right-10 bottom-1/4 size-24 rounded-full bg-primary/10 blur-xl sm:size-36" />

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        {/* Urgency CTA */}
        <Reveal>
          <h2 className="font-heading text-2xl font-extrabold text-foreground text-balance sm:text-3xl lg:text-4xl">
            ¿Necesitás reparación urgente?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Contactanos por WhatsApp y coordinamos en el día.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Button
            nativeButton={false}
            render={
              <a href={WHATSAPP_MESSAGE_URL} target="_blank" rel="noopener noreferrer" />
            }
            size="lg"
            className="group mx-auto mt-6 flex h-14 w-full max-w-xs items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 text-base font-extrabold uppercase tracking-wide text-white shadow-xl transition-all duration-300 hover:scale-[1.04] hover:bg-[#20BD5A] hover:shadow-2xl sm:mt-8 sm:h-16 sm:max-w-sm sm:text-lg"
          >
            <WhatsAppIcon className="size-6 transition-transform duration-300 group-hover:rotate-12" />
            Escribinos ahora
          </Button>
        </Reveal>

        {/* Carousel of Google Reviews */}
        <Reveal delay={160}>
          <TestimonialCarousel />
        </Reveal>
      </div>
    </section>
  )
}
