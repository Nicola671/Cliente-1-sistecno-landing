import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { Reveal } from '@/components/reveal'
import { Phone, Clock, ShieldCheck, DollarSign } from 'lucide-react'
import { WHATSAPP_MESSAGE_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* White curved wave at top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-background sm:h-36 lg:h-48"
        style={{ clipPath: 'ellipse(130% 100% at 50% 0%)' }}
      />



      {/* 1-col mobile (centered) → 2-col desktop (text left, image right) */}
      <div className="relative z-20 mx-auto grid max-w-2xl grid-cols-1 justify-items-center px-4 pb-10 pt-16 text-center sm:pb-14 sm:pt-20 lg:max-w-6xl lg:grid-cols-2 lg:items-center lg:gap-x-14 lg:justify-items-start lg:px-6 lg:pb-16 lg:pt-32 lg:text-left">

        {/* Logo overlapping the wave */}
        <Reveal className="lg:col-start-1">
          <div className="mx-auto flex size-28 items-center justify-center overflow-hidden rounded-full bg-background shadow-xl ring-1 ring-border sm:size-32 sm:ring-4 lg:mx-0 lg:size-32">
            <img
              src="/images/sistecno-logo.jpeg"
              alt="Logo de SISTECNO - Reparaciones de electrodomésticos"
              className="size-20 object-contain sm:size-24 lg:size-24"
            />
          </div>
        </Reveal>

        {/* Appliance image */}
        <Reveal delay={80} className="mt-8 w-full sm:mt-10 lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:mt-0 lg:self-center">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
            <Image
              src="/images/hero-appliances.png"
              alt="Electrodomésticos del hogar: heladera, lavarropas, microondas y más"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 28rem, 100vw"
              className="rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </Reveal>

        {/* Title + subtitle */}
        <Reveal delay={140} className="lg:col-start-1">
          <h1 className="mt-8 font-heading text-3xl font-extrabold leading-[1.08] text-balance sm:mt-10 sm:text-4xl lg:mt-6 lg:text-5xl">
            Reparación de electrodomésticos a domicilio
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/90 text-pretty sm:text-base lg:mx-0 lg:text-lg">
            Servicio rápido y con garantía en Mar del Plata. Heladeras,
            lavarropas, hornos, microondas y mucho más.
          </p>
        </Reveal>

        {/* CTA — Generar Cita */}
        <Reveal delay={200} className="mt-6 w-full sm:mt-8 lg:col-start-1 lg:w-auto">
          <Button
            nativeButton={false}
            render={
              <a href={WHATSAPP_MESSAGE_URL} target="_blank" rel="noopener noreferrer" />
            }
            size="lg"
            className="group mx-auto flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-extrabold uppercase tracking-wide text-primary shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl sm:h-16 sm:px-8 sm:text-lg lg:mx-0 lg:w-auto lg:max-w-none"
          >
            <WhatsAppIcon className="size-6 text-accent transition-transform duration-300 group-hover:rotate-12" />
            GENERAR CITA
          </Button>
        </Reveal>

        {/* Phone + Hours cards — hidden on mobile to match screenshot */}
        <Reveal delay={260} className="mt-5 hidden w-full sm:mt-8 sm:grid lg:col-start-1">
          <div className="mx-auto grid max-w-lg gap-3 sm:grid-cols-2 sm:gap-4 lg:mx-0">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2.5 rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-md sm:size-11">
                <Phone className="size-4 sm:size-5" />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-base font-extrabold sm:text-lg">{PHONE_DISPLAY}</span>
                <span className="block text-xs font-semibold text-accent sm:text-sm">(Angel)</span>
              </span>
            </a>

            <div className="flex items-center justify-center gap-2.5 rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-sm sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-md sm:size-11">
                <Clock className="size-4 sm:size-5" />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-xs font-bold uppercase sm:text-sm">Lunes a sábado</span>
                <span className="block text-xs font-semibold text-accent sm:text-sm">
                  De 9:00 a 18:00 hs
                </span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom guarantee bar — darker blue */}
      <div className="relative z-10 bg-[#0847A6]">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-1.5 px-4 py-3 text-center text-xs font-bold uppercase tracking-wide sm:flex-row sm:gap-8 sm:py-4 sm:text-sm md:text-base">
          <span className="flex items-center gap-1.5 sm:gap-2">
            <DollarSign className="size-4 text-accent sm:size-5" />
            Presupuesto sin costo
          </span>
          <span className="flex items-center gap-1.5 sm:gap-2">
            <ShieldCheck className="size-4 text-accent sm:size-5" />
            Servicio con <span className="text-accent">garantía</span>
          </span>
        </div>
      </div>

      {/* Aggressive wave transition below guarantee bar */}
      <div className="relative -mt-px w-full overflow-hidden bg-primary" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="block h-10 w-full sm:h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0847A6"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,144C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  )
}
