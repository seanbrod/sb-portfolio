// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        // Primary SVG
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        
        // PNG & ICO fallbacks (Mobile & Legacy Browsers)
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        
        // iOS Home Screen
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  }
})