import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/elote-depresivo/', // Asegúrate de que este sea el nombre correcto de tu repositorio
});
