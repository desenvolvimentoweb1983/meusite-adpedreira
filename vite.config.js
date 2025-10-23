import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite acessar via IP ou túnel
    allowedHosts: [
      '3190c0ebde51.ngrok-free.app' // domínio gerado pelo ngrok
    ]
  }
})