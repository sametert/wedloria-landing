import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js,ts,tsx}",
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'logo192.png', 'logo512.png'],
      manifest: {
        name: 'Wedloria - Anılarınızı Her Yerden Paylaşın',
        short_name: 'Wedloria',
        description: 'Düğün gününüzün en özel anılarını güvenle saklamanızı ve sevdiklerinizle kolayca paylaşmanızı sağlayan modern bir fotoğraf uygulaması.',
        theme_color: '#b88a7a',
        background_color: '#f8ece6',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
}) 
