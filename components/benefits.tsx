import { Reveal } from '@/components/reveal'
import { BadgeDollarSign, ShieldCheck, Zap, GraduationCap } from 'lucide-react'

const benefits = [
  {
    icon: BadgeDollarSign,
    title: 'Presupuesto gratis',
    description: 'Sin sorpresas. Sabés cuánto cuesta antes.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía real',
    description: 'Respaldamos cada reparación que hacemos.',
  },
  {
    icon: Zap,
    title: 'Respuesta inmediata',
    description: 'Coordinamos tu visita en el día.',
  },
  {
    icon: GraduationCap,
    title: 'Técnico certificado',
    description: 'Todas las marcas y modelos del mercado.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="bg-background py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent sm:text-sm">
            Por qué elegirnos
          </span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground text-balance sm:mt-3 sm:text-3xl lg:text-4xl">
            Un servicio en el que podés confiar
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <article className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:gap-4 sm:rounded-2xl sm:p-7">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md sm:size-14 sm:rounded-xl">
                  <benefit.icon className="size-5 sm:size-7" />
                </span>
                <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
