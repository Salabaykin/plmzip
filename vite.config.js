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
        'sign-up': resolve(__dirname, 'src/pages/sign-up/index.html'),
        'catalog-second-level': resolve(__dirname, 'src/pages/catalog-second-level/index.html'),
      }
    }
  }
})
