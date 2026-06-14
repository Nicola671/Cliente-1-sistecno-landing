# SISTECNO - Landing Page de Reparaciones

🚀 **Sitio en vivo:** [https://cliente-1-sistecno-landing.vercel.app](https://cliente-1-sistecno-landing.vercel.app)

Esta es una aplicación web moderna construida con [Next.js](https://nextjs.org/), diseñada específicamente para **SISTECNO**, una empresa de reparación de electrodomésticos a domicilio en Mar del Plata.

## 📱 Vista Mobile (Responsive)
<div style="display: flex; gap: 10px; overflow-x: auto; margin-bottom: 20px;">
  <img src="https://i.postimg.cc/JzZf6mSY/Whats-App-Image-2026-06-14-at-1-04-48-PM.jpg" width="200" alt="Mobile 1" />
  <img src="https://i.postimg.cc/W4SfC48b/Whats-App-Image-2026-06-14-at-1-05-41-PM.jpg" width="200" alt="Mobile 2" />
  <img src="https://i.postimg.cc/sxG6M4rK/Whats-App-Image-2026-06-14-at-1-05-47-PM.jpg" width="200" alt="Mobile 3" />
  <img src="https://i.postimg.cc/c4wWjQnd/Whats-App-Image-2026-06-14-at-1-06-19-PM.jpg" width="200" alt="Mobile 4" />
  <img src="https://i.postimg.cc/3xhhHdjM/Whats-App-Image-2026-06-14-at-1-06-33-PM.jpg" width="200" alt="Mobile 5" />
  <img src="https://i.postimg.cc/s2DRvq06/Whats-App-Image-2026-06-14-at-1-06-49-PM.jpg" width="200" alt="Mobile 6" />
</div>

## 💻 Vista de Escritorio (PC)
<div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 20px;">
  <img src="https://i.postimg.cc/7Y3vXwFX/image.png" width="800" alt="Desktop 1" />
  <img src="https://i.postimg.cc/KzkwT27r/image.png" width="800" alt="Desktop 2" />
  <img src="https://i.postimg.cc/RVQ8KGtH/image.png" width="800" alt="Desktop 3" />
  <img src="https://i.postimg.cc/XvXzMbzT/image.png" width="800" alt="Desktop 4" />
  <img src="https://i.postimg.cc/3N9XJyyB/image.png" width="800" alt="Desktop 5" />
  <img src="https://i.postimg.cc/7Z53wZqs/image.png" width="800" alt="Desktop 6" />
</div>

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
