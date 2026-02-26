import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {

    allowedHosts: ['resonantly-foremost-platypus.cloudpub.ru'],
    host: '0.0.0.0',
  },
})
