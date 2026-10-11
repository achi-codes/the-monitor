import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

function buildId() {
  let hash = 'dev'
  try {
    hash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
  } catch {
    // local checkout without git
  }
  const stamp = new Intl.DateTimeFormat('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())
  return `${hash} · ${stamp}`
}

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 300000,
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
    'import.meta.env.VITE_TM_BUILD': JSON.stringify(buildId()),
  },
})
