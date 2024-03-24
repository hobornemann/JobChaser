import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/JobChaser/",  /* TODO: Behövs den här? Fanns inte med i Sandras exempel */
  plugins: [react()],
})
