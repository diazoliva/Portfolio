import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
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