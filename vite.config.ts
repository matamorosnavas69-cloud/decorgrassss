import { resolve } from 'path';
import { PluginOption, defineConfig } from 'vite';

import sparkPlugin from '@github/spark/spark-vite-plugin';
import createIconImportProxy from '@github/spark/vitePhosphorIconProxyPlugin';
import react from '@vitejs/plugin-react-swc';

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // DO NOT REMOVE
    createIconImportProxy() as PluginOption,
    sparkPlugin() as PluginOption,
  ],
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src'),
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    hmr: {
      port: 443,
    },
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
  },
});
