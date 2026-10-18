import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Plant-Nursery/' : '/',
  plugins: [react()],
}))
