import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/01-tehtavat-1.1-1.2",
  plugins: [react()],
})
