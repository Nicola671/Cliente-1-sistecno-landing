import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'SISTECNO | Reparación de electrodomésticos a domicilio en Mar del Plata',
  description:
    'Servicio técnico de reparación de electrodomésticos a domicilio en Mar del Plata. Lavarropas, heladeras, lavavajillas, secadoras, microondas y TVs. Presupuesto sin costo y garantía.',
  generator: 'v0.app',
  keywords: [
    'reparación electrodomésticos',
    'Mar del Plata',
    'servicio técnico',
    'lavarropas',
    'heladeras',
    'a domicilio',
    'SISTECNO',
  ],
  openGraph: {
    title: 'SISTECNO | Reparación de electrodomésticos en Mar del Plata',
    description:
      'Servicio rápido, con garantía y atención personalizada. Reparación a domicilio en Mar del Plata.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1d4ed8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
