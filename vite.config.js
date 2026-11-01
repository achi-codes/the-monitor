import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { formatBuildStamp, makeBuildToken } from './src/lib/buildStamp.js'

function buildMeta() {
  let hash = 'dev'
  try {
    hash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
  } catch {
    // local checkout without git
  }
  const now = new Date()
  const label = `${hash} · ${formatBuildStamp(now)}`
  return {
    label,
    token: makeBuildToken(hash, now.getTime(), label),
  }
}

const build = buildMeta()

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
    'import.meta.env.VITE_TM_BUILD': JSON.stringify(build.label),
    'import.meta.env.VITE_TM_BUILD_TOKEN': JSON.stringify(build.token),
  },
})
