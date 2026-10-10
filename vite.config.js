import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 32768,
    rollupOptions: {
      output: {
        entryFileNames: 'the-monitor.js',
        assetFileNames: 'the-monitor.[ext]',
        manualChunks: undefined,
      },
    },
  },
  define: {
    'process.env': JSON.stringify({ NODE_ENV: 'production' }),
    global: 'window',
  },
})
