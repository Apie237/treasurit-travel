import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/treasurit-travel/", // Replace with your repo name
  plugins: [react()],
  assetsInclude: ['**/*.PNG'], // Remove the **/*.html part
});