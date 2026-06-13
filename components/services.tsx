import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { WHATSAPP_URL } from '@/lib/site'

const services = [
  { imgSrc: '/images/lavarropas.png', label: 'Lavarropas', item: 'mi lavarropas' },
  { imgSrc: '/images/heladera.png', label: 'Heladeras', item: 'mi heladera' },
  { imgSrc: '/images/lavavajillas.png', label: 'Lavavajillas', item: 'mi lavavajillas' },
  { imgSrc: '/images/secadora.png', label: 'Secadoras', item: 'mi secadora' },
  { imgSrc: '/images/microondas.png', label: 'Microondas', item: 'mi microondas' },
  { imgSrc: '/images/tv.png', label: 'TVs LCD', item: 'mi TV LCD' },
]

export function Services() {
  return (
    <section id="servicios" className="relative bg-primary py-14 text-primary-foreground sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent sm:text-sm">
            Qué reparamos
          </span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-white text-balance sm:mt-3 sm:text-3xl lg:text-4xl">
            Servicios técnicos especializados
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-lg">
            Reparamos los electrodomésticos de tu hogar con repuestos de calidad y garantía.
          </p>
        </Reveal>

        {/* White cards on blue background */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 md:grid-cols-3 md:gap-6">
          {services.map((service, i) => {
            const message = `Hola SISTECNO, necesito reparar ${service.item}.`
            const href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
            return (
              <Reveal key={service.label} delay={i * 70}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-white p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:gap-4 sm:rounded-2xl sm:p-6 md:p-8"
                >
                  <span className="flex size-12 items-center justify-center overflow-hidden rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg sm:size-16 sm:rounded-2xl">
                    {service.imgSrc && (
                      <img src={service.imgSrc} alt={service.label} className="h-full w-full object-contain p-2 sm:p-2.5" />
                    )}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-[#111827] sm:text-lg">
                    {service.label}
                  </h3>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Wave divider: blue → white */}
      <div className="absolute -bottom-px inset-x-0 overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-6 w-full sm:h-10 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
