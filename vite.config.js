import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',                  // (por defecto)
  build: {
    outDir: 'dist',           // carpeta que subirá Netlify
    emptyOutDir: true,
    rollupOptions: {          // 1 solo bundle
      input: 'index.html',
      output: { manualChunks: undefined }
    }
  },
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3000,
    strictPort: true
  }
});