# SISTECNO - Landing Page de Reparaciones

Esta es una aplicación web moderna construida con [Next.js](https://nextjs.org/), diseñada específicamente para **SISTECNO**, una empresa de reparación de electrodomésticos a domicilio en Mar del Plata.

## Tecnologías Utilizadas
- **Framework:** Next.js 14+ (App Router)
- **Estilos:** Tailwind CSS
- **Componentes UI:** shadcn/ui & Radix UI
- **Iconografía:** Lucide React
- **Animaciones:** Framer Motion

## Estructura del Proyecto
- `app/`: Contiene el layout principal y la página de inicio (`page.tsx`).
- `components/`: Contiene todos los módulos de la interfaz (Hero, Navbar, Footer, etc.).
- `lib/`: Archivos de configuración y constantes compartidas del sitio (`site.ts`).
- `public/`: Imágenes y assets estáticos.

## Características Principales
- **Diseño Responsivo:** Adaptado completamente para dispositivos móviles y escritorio.
- **Llamado a la Acción (CTA) Directo:** Botones de WhatsApp pre-configurados para iniciar conversaciones inmediatas.
- **Secciones Dinámicas:** Carrusel de reseñas, acordeón de beneficios, y transición fluida entre componentes.
- **Optimización SEO:** Preparado con metadatos estructurados para mejor posicionamiento web.

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Correr el servidor de desarrollo local
npm run dev

# Generar versión estática para producción (carpeta /out)
npm run build
```

## Despliegue en Vercel
Este proyecto está configurado para ser subido a Vercel. Simplemente enlaza el repositorio de GitHub a tu cuenta de Vercel y automáticamente construirá la versión de producción.
