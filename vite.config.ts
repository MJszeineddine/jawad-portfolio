import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/jawad-portfolio/',
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
