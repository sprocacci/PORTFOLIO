import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // ⚠️ CAMBIA 'nome-repository' con il nome del tuo repo GitHub!
  base: process.env.NODE_ENV === 'production' ? '/PORTFOLIO/' : '/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cdd: resolve(__dirname, 'index_cdd.html'),
        hysterische: resolve(__dirname, 'index_hysterische.html'),
        punkprint: resolve(__dirname, 'index_punkprint.html'),
      },
      output: {
        manualChunks: {
          'three': ['three']  // Separa Three.js in un file a parte
        }
      }
    },
    outDir: 'dist',
    chunkSizeWarningLimit: 600  // Alza il limite per evitare l'avviso
  },

  server: {
    port: 3000,
    open: true,
    host: true
  },

  optimizeDeps: {
    include: ['three']
  }
})