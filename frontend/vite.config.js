import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // define: {
  //   'process.env.VITE_BACKEND_URL': JSON.stringify(process.env.VITE_BACKEND_URL),
  // },
});
