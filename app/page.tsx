import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { UrgentCta } from '@/components/urgent-cta'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <UrgentCta />
        <About />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
