// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from "dotenv"

// dotenv.config();
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5000,
//     proxy: {
//       "/api": {
//         target: process.env.VITE_BACKEND_URL,
//         changeOrigin: true,
//       },
//     }
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_BACKEND_URL': JSON.stringify(process.env.VITE_BACKEND_URL),
  },
})

