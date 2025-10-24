import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: 'dist', // रूटमा ./dist फोल्डर
    rollupOptions: {
      output: {
        assetFileNames: 'dolphin-css.css', // CSS फाइलको नाम
        entryFileNames: 'index.js', // JS फाइलको नाम
        chunkFileNames: 'chunks/[name].js', // चंक फाइलहरू
      },
    },
  },
});