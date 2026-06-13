'use client'

import { useEffect, useState } from 'react'
import { Phone, Menu, X, MoreVertical, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { PHONE_HREF, PHONE_DISPLAY, WHATSAPP_MESSAGE_URL, INSTAGRAM_URL, FACEBOOK_URL } from '@/lib/site'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-background transition-shadow duration-300',
        scrolled ? 'shadow-lg' : 'shadow-sm',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-4 sm:py-3 md:px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 sm:gap-2.5">
          <span className="flex size-10 items-center justify-center overflow-hidden rounded-full shadow-sm ring-1 ring-border sm:size-11 sm:rounded-xl">
            <img
              src="/images/sistecno-logo.jpeg"
              alt="Logo de SISTECNO"
              className="size-10 object-contain sm:size-11"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
              SISTECNO
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[10px]">
              Reparaciones
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Phone (visible on lg+) */}
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary lg:flex"
          >
            <Phone className="size-4 text-primary" />
            {PHONE_DISPLAY}
          </a>

          {/* WhatsApp button - orange, text only on mobile */}
          <Button
            nativeButton={false}
            render={
              <a href={WHATSAPP_MESSAGE_URL} target="_blank" rel="noopener noreferrer" />
            }
            className="h-8 rounded-full bg-accent px-4 py-0 text-xs font-bold text-accent-foreground shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-auto sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <WhatsAppIcon className="hidden size-4 sm:inline-block" />
            <span>WhatsApp</span>
          </Button>

          {/* Menu button - mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <MoreVertical className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={cn(
          'overflow-hidden border-t bg-background transition-all duration-300 ease-in-out md:hidden',
          menuOpen
            ? 'max-h-[500px] border-border opacity-100'
            : 'max-h-0 border-transparent opacity-0',
        )}
      >
        <div className="flex gap-4 px-4 py-5">
          {/* Left side: Navigation links */}
          <nav className="flex w-1/2 flex-col gap-1.5 border-r border-border pr-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Right side: Contact info and Social */}
          <div className="flex w-1/2 flex-col justify-between py-1">
            <div className="flex flex-col gap-5">
              <a
                href={PHONE_HREF}
                onClick={() => setMenuOpen(false)}
                className="flex flex-col gap-1 text-sm font-bold text-primary transition-colors hover:text-primary/80"
              >
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Phone className="size-3.5 text-primary" /> Teléfono
                </span>
                <span className="text-foreground">{PHONE_DISPLAY}</span>
              </a>
              <a
                href="https://maps.google.com/?q=Francia+4073,+B7600+Mar+del+Plata,+Provincia+de+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex flex-col gap-1 text-sm font-medium transition-colors hover:text-primary"
              >
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <MapPin className="size-3.5 text-primary" /> Local
                </span>
                <span className="leading-snug text-foreground">Francia 4073</span>
              </a>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
