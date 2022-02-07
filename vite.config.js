// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: './src/pages',
  build: {
    // generate manifest.json in outDir
    outDir: '../../build',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/pages/index.html'),
        catalog: resolve(__dirname, 'src/pages/catalog/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        orders: resolve(__dirname, 'src/pages/profile/orders/index.html'),
        search: resolve(__dirname, 'src/pages/search/index.html'),
        favorites: resolve(__dirname, 'src/pages/favorites/index.html'),
        contacts: resolve(__dirname, 'src/pages/contacts/index.html'),
        basket: resolve(__dirname, 'src/pages/basket/index.html'),
        payment: resolve(__dirname, 'src/pages/payment/index.html'),
        about: resolve(__dirname, 'src/pages/about/index.html'),
        'sign-up': resolve(__dirname, 'src/pages/sign-up/index.html'),
        'catalog-second-level': resolve(__dirname, 'src/pages/catalog-second-level/index.html'),
      }
    }
  }
})
