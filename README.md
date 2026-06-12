# DecorGrass Colombia - Césped Sintético Premium

## 🌱 Descripción del Proyecto

DecorGrass Colombia es una aplicación web moderna y profesional para una empresa especializada en césped sintético de alta calidad en Colombia, con enfoque especial en Bucaramanga. La aplicación está optimizada para SEO, es completamente responsiva y ofrece una experiencia de usuario excepcional.

## ✨ Características Principales

### 🎨 Diseño y UX

- **Material UI (MUI)** - Componentes modernos y elegantes
- **Responsive Design** - Funciona perfectamente en desktop, tablet, móvil y dispositivos plegables
- **Animaciones** - Framer Motion para transiciones suaves y efectos parallax
- **Galería Interactiva** - Masonry layout con imágenes reales de proyectos
- **WhatsApp Integration** - Botón flotante y formularios que conectan directamente

### 🌍 SEO y Localización

- **i18next** - Soporte completo para Español (principal) e Inglés
- **SEO Optimizado** - Meta tags, estructuras de datos y Open Graph
- **Colombia Focus** - Optimizado especialmente para Bucaramanga y Colombia
- **Sitemap** - Estructura de URLs amigable para SEO

### ⚡ Tecnología Moderna

- **React 19** con TypeScript
- **Vite** para desarrollo rápido
- **Redux Toolkit** con RTK Query para manejo de estado
- **React Router** para navegación
- **Material UI v7** para componentes
- **Framer Motion** para animaciones

### 📊 Gestión de Contactos

- **Redux API Slice** - Manejo profesional de datos
- **Base de datos** - Esquema completo para PostgreSQL/MongoDB
- **WhatsApp API** - Integración directa con mensajería
- **Admin Dashboard** - Panel de administración para gestionar contactos

## 🚀 Instalación y Configuración

### Prerequisitos

- Node.js 18+
- npm o yarn
- Git

### 1. Clonación e Instalación

```bash
git clone <repository-url>
cd decorgrass-colombia
npm install
```

### 2. Configuración de Ambiente

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm run preview
```

### 3. Variables de Ambiente (.env)

```env
VITE_API_URL=http://localhost:3001/api
VITE_WHATSAPP_NUMBER=573208523041
VITE_SITE_URL=https://decorgrass.co
```

## 📱 Integración WhatsApp

La aplicación está configurada para enviar mensajes directamente a:

- **Número:** +57 320 852 3041
- **Formato:** Mensajes estructurados con información del cliente
- **Botón Flotante:** FAB que aparece al hacer scroll

## 🎯 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Header, Footer, MainLayout
│   ├── sections/       # Secciones de páginas (Hero, Features, etc.)
│   └── ui/            # Componentes UI menores
├── views/              # Páginas principales
│   ├── HomeView.tsx
│   ├── ServicesView.tsx
│   ├── ProductsView.tsx
│   ├── GalleryView.tsx
│   └── ContactView.tsx
├── store/              # Redux store y API slices
│   ├── index.ts
│   └── api/
│       └── contactsApi.ts
├── utils/              # Utilidades
│   ├── images.ts       # Gestión de imágenes
│   ├── whatsapp.ts     # Integración WhatsApp
│   └── database-schema.ts
├── types/              # Tipos TypeScript
├── i18n/              # Configuración de idiomas
├── theme/             # Tema Material UI
└── assets/            # Imágenes y recursos
    └── images/        # 80+ imágenes reales de proyectos
```

## 🌐 Páginas y Rutas

- **`/`** - Página principal con hero, características y preview
- **`/servicios`** - Servicios completos de instalación y mantenimiento
- **`/productos`** - Catálogo de tipos de césped sintético
- **`/galeria`** - Galería completa con filtros por categoría
- **`/contacto`** - Formulario de contacto integrado con WhatsApp

## 🎨 Galería de Imágenes

La aplicación incluye **80+ imágenes reales** organizadas por categorías:

### Categorías:

- **Residencial** - Casas, terrazas, balcones
- **Comercial** - Oficinas, centros comerciales
- **Deportivo** - Campos de fútbol, pádel, tenis
- **Parques Públicos** - Parques, plazas, áreas públicas

### Características:

- **Lazy Loading** - Carga optimizada de imágenes
- **Masonry Layout** - Diseño tipo Pinterest
- **Modal Gallery** - Vista ampliada con navegación
- **Responsive** - Se adapta a todos los tamaños de pantalla

## 🔧 Backend y Base de Datos

### Schema PostgreSQL

```sql
-- Tabla de contactos
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50) NOT NULL,
    project_type VARCHAR(100),
    area VARCHAR(50),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address INET,
    user_agent TEXT
);
```

### API Endpoints

- `POST /api/contacts` - Crear nuevo contacto
- `GET /api/contacts` - Obtener contactos (admin)
- `PUT /api/contacts/:id` - Actualizar estado (admin)

## 🌍 SEO y Marketing

### Meta Tags Incluidos:

- **Title:** DecorGrass Colombia - Césped Sintético Premium
- **Description:** Especialistas en césped sintético en Bucaramanga
- **Keywords:** césped sintético Colombia, grama artificial Bucaramanga
- **Open Graph:** Integración completa para redes sociales
- **Structured Data:** Schema.org para mejor indexación

### Colombia Focus:

- **Geolocalización:** Bucaramanga, Santander
- **Coordenadas:** 7.119,-73.1198
- **Idioma Principal:** Español (es-CO)
- **Moneda:** Pesos colombianos

## 📱 Responsividad y Dispositivos

### Breakpoints Material UI:

- **xs:** 0-599px (móvil)
- **sm:** 600-899px (tablet)
- **md:** 900-1199px (laptop)
- **lg:** 1200-1535px (desktop)
- **xl:** 1536px+ (pantallas grandes)

### Dispositivos Específicos:

- ✅ iPhone/Android (todas las versiones)
- ✅ iPad/Tablets Android
- ✅ Samsung Galaxy Fold/Z Fold
- ✅ Desktop/Laptop (todos los tamaños)

## 🔒 Seguridad y Performance

### Seguridad:

- **Validación de formularios** con Zod
- **Sanitización de inputs**
- **Rate limiting** en backend
- **CORS configurado** correctamente

### Performance:

- **Code splitting** automático con Vite
- **Lazy loading** de imágenes
- **Bundle optimization**
- **PWA ready** (opcional)

## 🚀 Despliegue en Producción

### Frontend (Vercel/Netlify):

```bash
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Heroku):

```bash
# Ver backend-example.ts para implementación completa
npm install express cors helmet morgan bcryptjs
```

### Base de Datos:

- **PostgreSQL:** Neon, Railway, Heroku Postgres
- **MongoDB:** MongoDB Atlas

## 📈 Analytics y Tracking

### Google Analytics (Recomendado):

```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### WhatsApp Business API:

- Integración completa disponible
- Mensajes automatizados
- CRM integration ready

## 🛠️ Comandos de Desarrollo

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 📞 Contacto

**DecorGrass Colombia**

- **Teléfono:** +57 320 852 3041
- **Email:** info@decorgrass.co
- **Ubicación:** Bucaramanga, Santander, Colombia
- **Website:** https://decorgrass.co

---

### 🌱 Transformamos espacios con calidad, durabilidad y belleza

_Desarrollado con ❤️ para DecorGrass Colombia_
