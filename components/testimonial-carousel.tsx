'use client'

import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    name: 'Guadalupe Lantieri',
    text: 'Excelente, atencion y ejecucion del trabajo.Responsabilidad y puntualidad RECOMENDABLE 100%',
  },
  {
    name: 'Elena Serrano',
    text: 'Muy buena atención y super rápido el arreglo',
  },
  {
    name: 'Carlos Guridi',
    text: 'Súper recomendable, buen precio y excelente servicio👏',
  },
  {
    name: 'Jorge Lj',
    text: 'Excelente servicio, muy de confianza y responsables❤️',
  },
  {
    name: 'Kevin Decima',
    text: 'Muy buen servicio y precio recomendable',
  },
  {
    name: 'Luna Quimey Guridi',
    text: 'Excelente atención y servicio,muy recomendable',
  },
  {
    name: 'Franco Manno',
    text: 'Excelente servicio! Muy buen trabajo!',
  },
  {
    name: 'miriam manas',
    text: 'Excelente servicio y me atendieron muy bien.',
  },
  {
    name: 'Cristian Bordino',
    text: 'Excelente servicio',
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative mx-auto mt-12 h-48 w-full max-w-lg sm:mt-16 sm:h-44">
      <AnimatePresence mode="wait">
        <motion.article
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 rounded-xl border border-border bg-card p-6 text-left shadow-md sm:rounded-2xl sm:p-8"
        >
          <Quote className="absolute right-4 top-4 size-8 text-primary/10 sm:size-10" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="size-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base font-medium">
            &ldquo;{reviews[currentIndex].text}&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {reviews[currentIndex].name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {reviews[currentIndex].name}
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                Reseña de Google
              </p>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`size-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-6 bg-primary' : 'bg-primary/20'
            }`}
            aria-label={`Ver reseña ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
