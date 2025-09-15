import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/nyt': {
        target: 'https://api.nytimes.com/svc/archive/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/nyt/, ''),
      },
    }
  },
})
