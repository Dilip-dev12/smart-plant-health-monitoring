import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

process.env.RAYON_NUM_THREADS = "1";
process.env.UV_THREADPOOL_SIZE = "1";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
  }
})
