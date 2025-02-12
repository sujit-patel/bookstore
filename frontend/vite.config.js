import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"

dotenv.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: process.env.SERVER_URL,
        changeOrigin: true,
        secure: false,
      },
    }
  },
})
