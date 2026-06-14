import { Phone, Clock, MapPin } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF, HOURS, INSTAGRAM_URL, FACEBOOK_URL } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-[#061B3A] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 md:px-6">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm sm:size-11 sm:rounded-xl">
                <img
                  src="/images/sistecno-logo.jpeg"
                  alt="Logo de SISTECNO"
                  className="size-10 object-contain sm:size-11"
                />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight sm:text-xl">
                SISTECNO
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70 sm:mt-4">
              Reparación de electrodomésticos a domicilio en Mar del Plata. Servicio
              rápido, con garantía y atención personalizada.
            </p>
            {/* Social links */}
            <div className="mt-5 flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 hover:text-accent"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 hover:text-accent"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white/90 sm:text-sm">
              Contacto
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-white/70 sm:mt-4 sm:space-y-3">
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href={PHONE_HREF} className="transition-colors hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Clock className="size-4 shrink-0 text-accent" />
                {HOURS}
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <MapPin className="size-4 shrink-0 text-accent" />
                Mar del Plata, Argentina
              </li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white/90 sm:text-sm">
              Servicios
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-1.5 text-sm text-white/70 sm:mt-4 sm:gap-2">
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">Lavarropas</a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">Heladeras</a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">Lavavajillas</a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">Secadoras</a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">Microondas</a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">TVs LCD</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-5 text-center text-xs text-white/60 sm:mt-12 sm:flex-row sm:gap-0 sm:pt-6 sm:text-sm">
          <p>© {new Date().getFullYear()} SISTECNO · Reparaciones en Mar del Plata</p>
          <p>
            Diseñado y desarrollado por{' '}
            <a
              href="https://wa.me/5492236160926?text=Hola%20Nicol%C3%A1s%2C%20vi%20tu%20trabajo%20en%20la%20web%20de%20SISTECNO%20y%20me%20gustar%C3%ADa%20hacerte%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white/80 transition-colors hover:text-accent"
            >
              Nicolas Medina
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
