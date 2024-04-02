import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': fileURLToPath((new URL('./src/assets', import.meta.url))),
      '@modules': fileURLToPath((new URL('./src/modules', import.meta.url))),
      '@styles': fileURLToPath((new URL('./src/styles', import.meta.url))),
      '@routes': fileURLToPath((new URL('./src/routes', import.meta.url))),
      '@src': fileURLToPath((new URL('./src', import.meta.url))),
    }
  },
  base: '',
  plugins: [react()],
})
