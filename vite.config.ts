import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/hyperion-site/' to '/<your-repo>/' after you create the repo
export default defineConfig({
  plugins: [react()],
  base: '/hyperion-site/',
})
