import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Personal/', 
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
