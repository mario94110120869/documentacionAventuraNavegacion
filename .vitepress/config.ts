import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es',
  title: 'Aventura en Navegación',
  description: 'Manual de Usuario — Panel de Administración',
  appearance: 'dark',

  srcExclude: ['**/manual-usuario-admin.md'],

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'Quest Admin Docs',

    nav: [
      { text: 'Guía', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Tutoriales', link: '/tutorials/', activeMatch: '/tutorials/' },
      { text: 'Glosario', link: '/reference/glossary' },
      { text: '📥 Descargar PDF', link: '/manual-usuario-admin.pdf', target: '_blank', rel: 'download' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Inicio',
          items: [
            { text: 'Introducción', link: '/guide/' },
          ]
        },
        {
          text: 'Guía del Panel',
          items: [
            { text: 'Inicio de sesión y perfil', link: '/guide/login' },
            { text: 'Dashboard', link: '/guide/dashboard' },
          ]
        },
        {
          text: 'Gestión de Contenido',
          collapsed: false,
          items: [
            { text: 'Aventuras', link: '/guide/adventures' },
            { text: 'Niveles', link: '/guide/levels' },
            { text: 'Secciones', link: '/guide/sections' },
            { text: 'Actividades y preguntas', link: '/guide/activities' },
            { text: 'Banco de actividades', link: '/guide/activity-bank' },
          ]
        },
        {
          text: 'Elementos del Juego',
          collapsed: false,
          items: [
            { text: 'Tesoros', link: '/guide/treasures' },
            { text: 'Trampas', link: '/guide/traps' },
            { text: 'Sponsors', link: '/guide/sponsors' },
            { text: 'Sellos de sponsor', link: '/guide/sponsor-seals' },
            { text: 'Premios (Awards)', link: '/guide/awards' },
            { text: 'Rankings y finalización', link: '/guide/rankings' },
            { text: 'Códigos QR', link: '/guide/qr-codes' },
            { text: 'Plantillas visuales', link: '/guide/templates' },
          ]
        },
        {
          text: 'Administración',
          collapsed: false,
          items: [
            { text: 'Generación con IA', link: '/guide/ai-generation' },
            { text: 'Gestión de administradores', link: '/guide/admins' },
            { text: 'Restricciones y validaciones', link: '/guide/restrictions' },
          ]
        },
      ],
      '/tutorials/': [
        {
          text: 'Tutoriales',
          items: [
            { text: 'Índice', link: '/tutorials/' },
            { text: 'Crear tu primera aventura', link: '/tutorials/first-adventure' },
            { text: 'Configurar sponsors y sellos', link: '/tutorials/configure-sponsors' },
            { text: 'Finalizar ranking y premios', link: '/tutorials/finalize-ranking' },
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Referencia',
          items: [
            { text: 'Glosario', link: '/reference/glossary' },
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
          modal: {
            displayDetails: 'Mostrar detalles',
            resetButtonTitle: 'Limpiar búsqueda',
            backButtonTitle: 'Volver',
            noResultsText: 'Sin resultados para',
            footer: {
              selectText: 'Seleccionar',
              navigateText: 'Navegar',
              closeText: 'Cerrar',
            }
          }
        }
      }
    },

    outline: {
      label: 'En esta página',
      level: [2, 3]
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente'
    },

    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Cambiar a modo claro',
    darkModeSwitchTitle: 'Cambiar a modo oscuro',

    footer: {
      message: 'Manual de Usuario — Panel de Administración',
      copyright: '© 2026 LYN Soluciones — Aventura en Navegación'
    },

    editLink: undefined,
    lastUpdated: undefined,
  }
})
