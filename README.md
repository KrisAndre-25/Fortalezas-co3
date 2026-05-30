<div align="center">

<br/>

# 🌌 Fortalezas Co³
### Immersive Digital Workbook

**Plataforma interactiva de autoconocimiento, dinámicas de equipo y consultoría organizacional**

<br/>

[![Production-Ready](https://img.shields.io/badge/Status-Production--Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://github.com/KrisAndre-25/Fortalezas-co3.git)
[![Vanilla Stack](https://img.shields.io/badge/Stack-Vanilla%20Tech-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![UX/UI Verified](https://img.shields.io/badge/Design-Figma%20Verified-F24E1E?style=for-the-badge&logo=figma&logoColor=white)]()
[![Conventional Commits](https://img.shields.io/badge/Commits-Conventional-7C3AED?style=for-the-badge&logo=git&logoColor=white)](https://conventionalcommits.org)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-22C55E?style=for-the-badge&logo=checkmarx&logoColor=white)]()

<br/>

> *Digitaliza la experiencia del set físico de tarjetas de fortalezas mediante una interfaz inmersiva de alto rendimiento, con microinteracciones fluidas y simulación matemática de partículas en tiempo real.*

<br/>

</div>

---

## 📖 Tabla de Contenidos

- [¿Qué es Fortalezas Co³?](#-qué-es-fortalezas-co³)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#️-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Flujo de la Aplicación](#-flujo-de-la-aplicación)
- [Instalación y Uso](#-instalación-y-uso)
- [Diseño y Experiencia de Usuario](#-diseño-y-experiencia-de-usuario)
- [Rendimiento](#-rendimiento)
- [Equipo](#-equipo)
- [Licencia](#-licencia)

---

## 🎯 ¿Qué es Fortalezas Co³?

**Fortalezas Co³** es una plataforma web premium que digitaliza el set físico de tarjetas de fortalezas, transformándolo en una experiencia interactiva inmersiva pensada para:

- 🧠 **Autoconocimiento personal** — Descubre y explora tus fortalezas individuales
- 👥 **Dinámicas de equipo** — Facilita sesiones grupales de reconocimiento y colaboración
- 🏢 **Consultoría organizacional** — Herramienta de apoyo para coaches y consultores

La interfaz combina glassmorphism, animaciones de partículas en tiempo real y una arquitectura completamente orientada a datos (*data-driven UI*), garantizando una experiencia fluida y visualmente impactante sin sacrificar rendimiento.

---

## ✨ Características Principales

| Característica | Descripción |
|---|---|
| 🌊 **Partículas en tiempo real** | Motor de simulación matemática sobre HTML5 Canvas con impacto mínimo de CPU |
| 🪟 **Glassmorphism** | Sistema visual coherente con transparencias, blur y profundidad |
| 📱 **Mobile First** | Layouts fluidos optimizados para carga instantánea en dispositivos móviles |
| 🎴 **Motor de tarjetas** | Interacción dinámica e individual por tarjeta con estados y animaciones |
| 📊 **Data-driven UI** | Toda la lógica de fortalezas y categorías proviene de estructuras JSON desacopladas |
| ♿ **Accesibilidad** | HTML5 semántico estructurado para lectores de pantalla y navegación por teclado |
| 🔐 **Login inmersivo** | Gateway de seguridad con pantalla de entrada experiencial |

---

## 🛠️ Stack Tecnológico

> **Filosofía:** Cero dependencias pesadas — *Vanilla Tech Stack* — para garantizar tiempos de carga instantáneos.

```
HTML5 Semántico
└─ Estructura accesible y semántica orientada a SEO y accesibilidad

CSS3 Avanzado
├─ Variables nativas CSS (design tokens centralizados)
├─ Glassmorphism (backdrop-filter, transparencias en capas)
├─ CSS Grid + Flexbox (layouts fluidos y responsivos)
└─ Media Queries críticas (mobile-first breakpoints)

JavaScript ES6+
├─ Arquitectura asíncrona (async/await, Promises)
├─ Control de estados locales sin frameworks externos
└─ Módulos desacoplados por responsabilidad

HTML5 Canvas API
└─ Simulación matemática de partículas en tiempo real
   (vectores, velocidades, colisiones — optimizado con requestAnimationFrame)
```

---

## 📐 Arquitectura del Proyecto

```
Fortalezas-co3/
│
├── 📁 assets/              # Identidad corporativa y recursos visuales
│   ├── icons/              # Iconografía vectorizada (SVG)
│   ├── images/             # Imágenes y recursos gráficos
│   └── brand/              # Logotipos y elementos de marca
│
├── 📁 css/                 # Sistema de diseño centralizado
│   └── main.css            # Core: variables, reset, componentes, media queries
│
├── 📁 data/                # Capa de datos (Data-driven UI)
│   ├── fortalezas.json     # Catálogo completo de fortalezas
│   └── categorias.json     # Estructura de categorías y metadatos
│
├── 📁 js/                  # Controladores y motores lógicos
│   ├── particles.js        # Motor Canvas: simulación de partículas
│   ├── cards.js            # Motor de tarjetas: estados e interacciones
│   ├── auth.js             # Controlador de autenticación
│   └── app.js              # Orquestador principal de la aplicación
│
├── 🌐 index.html           # Gateway de seguridad — Login inmersivo
├── 🏠 home.html            # Dashboard interactivo principal
├── 🗂️ category.html        # Selector matricial de categorías
└── 🎴 card.html            # Motor dinámico de tarjeta individual
```

---

## 🔄 Flujo de la Aplicación

```
index.html (Login)
      │
      ▼  [Autenticación exitosa]
home.html (Dashboard)
      │
      ▼  [Selección de categoría]
category.html (Matriz de categorías)
      │
      ▼  [Selección de tarjeta]
card.html (Tarjeta individual)
```

Cada vista carga los datos necesarios desde los JSON de `/data/` y renderiza dinámicamente la UI, sin recargas de página completas entre estados.

---

## 🚀 Instalación y Uso

### Requisitos

- Navegador moderno con soporte para ES6+, CSS Grid y Canvas API
- Servidor HTTP local o acceso directo al sistema de archivos

### Inicio rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/KrisAndre-25/Fortalezas-co3.git

# 2. Ingresar al directorio
cd Fortalezas-co3

# 3. Levantar un servidor local
# Opción A — Python (incluido en la mayoría de sistemas):
python -m http.server 3000

# Opción B — Node.js con npx:
npx serve .

# Opción C — VS Code: instalar la extensión "Live Server" y abrir index.html

# 4. Abrir en el navegador
http://localhost:3000
```

### Deployment

El proyecto es completamente estático — compatible con cualquier hosting de archivos:

```bash
# Netlify (drag & drop o CLI)
netlify deploy --dir .

# GitHub Pages
# Activar desde Settings → Pages → Deploy from branch main

# Vercel
vercel --prod
```

---

## 🎨 Diseño y Experiencia de Usuario

### Sistema de Diseño

El sistema visual está construido sobre **CSS custom properties** (variables nativas), lo que permite:

- Theming consistente en toda la aplicación desde un único punto de control
- Glassmorphism coherente con layers de profundidad definidos
- Paleta cromática orquestada con tokens semánticos

### Principios de Diseño

- **Inmersión progresiva** — Cada pantalla introduce al usuario más profundamente en la experiencia
- **Microinteracciones significativas** — El feedback visual refuerza cada acción del usuario
- **Jerarquía visual clara** — Tipografía, espaciado y color guían la atención naturalmente
- **Contraste accesible** — Ratios WCAG AA respetados en todos los componentes interactivos

---

## ⚡ Rendimiento

| Métrica | Resultado |
|---|---|
| 📦 Dependencias externas | **0** |
| 🔁 Recargas de página | **0** (SPA-like) |
| 📱 Dispositivos objetivo | Mobile First |
| 🎞️ Animaciones | `requestAnimationFrame` optimizado |
| 🏋️ Bundle size | Mínimo — solo archivos nativos |

> El motor de partículas utiliza técnicas de *object pooling* y control de framerate para garantizar 60fps incluso en dispositivos de gama media.

---

## 👥 Equipo

<br/>

<div align="center">

| Rol | Nombre |
|:---:|:---:|
| 💻 **Desarrollador** | Kristopher Astudillo |
| 🎨 **Diseñador UX/UI** | Rodrigo Contador |

</div>

<br/>

---

## 📝 Convenciones de Commits

Este proyecto sigue [Conventional Commits](https://conventionalcommits.org):

```
feat:     nueva funcionalidad
fix:      corrección de bug
docs:     cambios en documentación
style:    cambios de formato (no afectan lógica)
refactor: refactorización de código
perf:     mejoras de rendimiento
chore:    tareas de mantenimiento
```

---

## 📄 Licencia

Este proyecto y su contenido son propiedad de **Co³**. Todos los derechos reservados.

---

<div align="center">

<br/>

Desarrollado con ❤️ por el equipo **Co³**

*Kristopher Astudillo · Rodrigo Contador*

<br/>

</div>
