import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'robots.txt'], // فایل‌های عمومی
      manifest: {
        name: 'rythmix-app',
        short_name: 'rythmix',
        description: 'اپلیکیشن پخش موزیک ریتمیکس',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#FFCA27',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff2,truetype}'], // شناسایی فایل‌های assets
        globDirectory: 'dist',  
      }
    })
  ],
})