import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Penting untuk XAMPP agar path relatif
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});