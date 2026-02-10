import { defineUserConfig } from 'vitepress-export-pdf'

export default defineUserConfig({
  outFile: 'manual-usuario-admin.pdf',
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    margin: {
      top: '60px',
      bottom: '60px',
      left: '40px',
      right: '40px',
    },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="width:100%;font-size:9px;color:#888;padding:0 40px;font-family:system-ui;">
        <span>Aventura en Navegación — Manual de Administración</span>
      </div>
    `,
    footerTemplate: `
      <div style="width:100%;font-size:9px;color:#888;padding:0 40px;font-family:system-ui;display:flex;justify-content:space-between;">
        <span>© 2026 LYN Soluciones</span>
        <span>Página <span class="pageNumber"></span> de <span class="totalPages"></span></span>
      </div>
    `,
  },
  urlOrigin: 'http://localhost:4173',
  outDir: '.',
  routePatterns: [
    '!/404',
    '/**',
  ],
  sorter: (pageA, pageB) => {
    const order = [
      '/index.html',
      '/guide/index.html',
      '/guide/login.html',
      '/guide/dashboard.html',
      '/guide/adventures.html',
      '/guide/levels.html',
      '/guide/sections.html',
      '/guide/activities.html',
      '/guide/activity-bank.html',
      '/guide/treasures.html',
      '/guide/traps.html',
      '/guide/sponsors.html',
      '/guide/sponsor-seals.html',
      '/guide/awards.html',
      '/guide/rankings.html',
      '/guide/qr-codes.html',
      '/guide/templates.html',
      '/guide/ai-generation.html',
      '/guide/admins.html',
      '/guide/restrictions.html',
      '/tutorials/index.html',
      '/tutorials/first-adventure.html',
      '/tutorials/configure-sponsors.html',
      '/tutorials/finalize-ranking.html',
      '/reference/glossary.html',
    ]
    const aIndex = order.indexOf(pageA.path)
    const bIndex = order.indexOf(pageB.path)
    const aOrder = aIndex === -1 ? 999 : aIndex
    const bOrder = bIndex === -1 ? 999 : bIndex
    return aOrder - bOrder
  },
})
