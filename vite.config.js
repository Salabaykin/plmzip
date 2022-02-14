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
        delivery: resolve(__dirname, 'src/pages/delivery/index.html'),
        wholesale: resolve(__dirname, 'src/pages/wholesale/index.html'),
        'search-by-scheme-fifth-level': resolve(__dirname, 'src/pages/search/search-by-scheme/search-by-scheme-fifth-level/index.html'),
        'search-by-scheme-fourth-level': resolve(__dirname, 'src/pages/search/search-by-scheme/search-by-scheme-fourth-level/index.html'),
        'search-by-scheme-second-level': resolve(__dirname, 'src/pages/search/search-by-scheme/search-by-scheme-second-level/index.html'),
        'search-by-scheme-third-level': resolve(__dirname, 'src/pages/search/search-by-scheme/search-by-scheme-third-level/index.html'),
        'catalog-second-level': resolve(__dirname, 'src/pages/catalog/catalog-second-level/index.html'),
        'catalog-third-level': resolve(__dirname, 'src/pages/catalog/catalog-third-level/index.html'),
        'search-by-scheme': resolve(__dirname, 'src/pages/search/search-by-scheme/index.html'),
        'order-details': resolve(__dirname, 'src/pages/basket/order-details/index.html'),
        'card-page': resolve(__dirname, 'src/pages/card-page/index.html'),
        'sign-up': resolve(__dirname, 'src/pages/sign-up/index.html'),
      },
      output: {
        entryFileNames: `assets/js/components/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      },
    }
  }
})
