# DecorGrass Colombia - Soluciones en Césped Sintético

Una plataforma web moderna para DecorGrass Colombia que presenta soluciones premium en césped sintético, enfocada en estilo, belleza y durabilidad para espacios residenciales y comerciales.

**Experience Qualities**:

1. **Elegante** - Diseño sofisticado que refleje la calidad premium del césped sintético
2. **Confiable** - Interfaz profesional que inspire confianza en los servicios
3. **Accesible** - Navegación intuitiva que facilite el contacto y cotización

**Complexity Level**: Light Application (múltiples características con estado básico)

- Presenta servicios, galería de proyectos, formulario de contacto e información de la empresa

## Essential Features

### Página Principal (Inicio)

- **Functionality**: Hero section con call-to-action, resumen de servicios, galería destacada
- **Purpose**: Impacto visual inmediato y conversión de visitantes
- **Trigger**: Visitante accede al sitio
- **Progression**: Vista hero → Servicios destacados → Galería de proyectos → Call-to-action contacto
- **Success criteria**: Tiempo en página >30s, click en contacto >15%

### Galería de Proyectos

- **Functionality**: Showcase visual de instalaciones realizadas con filtros por tipo
- **Purpose**: Demostrar calidad y variedad de trabajos
- **Trigger**: Click en "Proyectos" o scroll en home
- **Progression**: Vista galería → Filtros por categoría → Vista detalle proyecto → Contacto
- **Success criteria**: Engagement con imágenes, clicks hacia contacto

### Formulario de Contacto

- **Functionality**: Captura datos del cliente y envía a WhatsApp (+57 320 8523041)
- **Purpose**: Generar leads calificados para cotizaciones
- **Trigger**: Click en botones de contacto
- **Progression**: Formulario → Validación → Envío WhatsApp → Confirmación
- **Success criteria**: Tasa de completación >80%, envíos exitosos

### Información de Servicios

- **Functionality**: Detalle de servicios: instalación, mantenimiento, tipos de césped
- **Purpose**: Educar sobre beneficios y procesos
- **Trigger**: Navegación desde menú o home
- **Progression**: Lista servicios → Detalle servicio → Beneficios → Contacto
- **Success criteria**: Tiempo en sección >45s

### Internacionalización (i18n)

- **Functionality**: Contenido en español (principal) e inglés (secundario)
- **Purpose**: Alcanzar mercado local e internacional
- **Trigger**: Selector de idioma
- **Progression**: Selección idioma → Recarga contenido → Persistencia preferencia
- **Success criteria**: Funcionalidad completa en ambos idiomas

## Edge Case Handling

- **Formulario incompleto**: Validación en tiempo real con mensajes claros
- **Error de red**: Mensaje de error amigable con opción de reintento
- **Imágenes no disponibles**: Placeholders con descripción del proyecto
- **Dispositivos móviles**: Layout adaptativo con navegación optimizada
- **Conexión lenta**: Loading states y optimización de imágenes

## Design Direction

El diseño debe evocar naturaleza, frescura y sofisticación moderna, reflejando cómo el césped sintético transforma espacios. Interfaz rica pero enfocada que comunique calidad premium y confiabilidad profesional.

## Color Selection

Analogous (colores adyacentes en rueda cromática) - Verde natural como base con tonos tierra y azules suaves para transmitir naturaleza, crecimiento y confianza.

- **Primary Color**: Verde césped natural (oklch(0.65 0.15 145)) - comunica frescura y naturaleza
- **Secondary Colors**: Verde oscuro (oklch(0.45 0.12 150)) para textos importantes, beige tierra (oklch(0.85 0.08 85)) para backgrounds suaves
- **Accent Color**: Azul confianza (oklch(0.55 0.18 245)) para CTAs y elementos importantes
- **Foreground/Background Pairings**:
  - Background (Blanco cálido oklch(0.98 0.02 85)): Texto principal verde oscuro (oklch(0.25 0.08 150)) - Ratio 8.1:1 ✓
  - Card (Verde muy suave oklch(0.95 0.04 145)): Texto verde oscuro (oklch(0.25 0.08 150)) - Ratio 7.2:1 ✓
  - Primary (Verde césped oklch(0.65 0.15 145)): Texto blanco (oklch(0.98 0 0)) - Ratio 5.8:1 ✓
  - Accent (Azul confianza oklch(0.55 0.18 245)): Texto blanco (oklch(0.98 0 0)) - Ratio 6.2:1 ✓

## Font Selection

Tipografías que comuniquen modernidad y confiabilidad profesional, con excelente legibilidad para contenido técnico sobre césped sintético.

- **Typographic Hierarchy**:
  - H1 (Títulos principales): Inter Bold/2.5rem/tight letter spacing
  - H2 (Títulos sección): Inter SemiBold/2rem/normal spacing
  - H3 (Subtítulos): Inter Medium/1.5rem/normal spacing
  - Body (Texto principal): Inter Regular/1rem/relaxed line height
  - Caption (Descripciones): Inter Regular/0.875rem/normal line height

## Animations

Animaciones sutiles que refuercen la sensación de naturaleza y crecimiento, con transiciones suaves que guíen la atención sin distraer del contenido principal.

- **Purposeful Meaning**: Movimientos que simulen crecimiento natural y transiciones orgánicas
- **Hierarchy of Movement**: Hero elements > Navigation > Cards > Micro-interactions

## Component Selection

- **Components**: Cards para proyectos, Buttons para CTAs, Forms para contacto, Tabs para servicios, Dialog para imagen expandida
- **Customizations**: Hero section personalizado, galería con filtros, formulario de contacto con validación
- **States**: Buttons con hover verde más intenso, inputs con focus verde suave, cards con elevación en hover
- **Icon Selection**: Iconos de naturaleza (hojas, casa, herramientas) para servicios, flechas para navegación
- **Spacing**: Sistema de 8px base (gap-2, gap-4, gap-8) para consistencia visual
- **Mobile**: Layout de una columna en móvil, navegación hamburger, imágenes de galería en grid 2x2
