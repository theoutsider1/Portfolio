import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['three-stdlib/libs/lottie.js'], // Excludes lottie.js from optimization
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Optional: Splitting vendor chunks for better performance
        },
      },
    },
  },
});