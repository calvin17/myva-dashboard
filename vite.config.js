import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    federation({
      name: 'dashboard',
      filename: mode === 'development' ? 'assets/remoteEntry.js' : 'remoteEntry.js',
      exposes: {
        './DashboardIndex': './src/components/Dashboard.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    port: 8087,
    cors: true,
  },
  preview: {
    port: 8087,
    cors: true,
  },
}));