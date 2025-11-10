import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  base: '/', // absolute paths on Vercel
  plugins: [
    react(),
    federation({
      name: 'dashboard',
      // keep the remote in /assets for both dev and prod
      filename: 'assets/remoteEntry.js',
      exposes: {
        './DashboardIndex': './src/main.jsx'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    modulePreload: false, // MF friendly
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: { port: 8087, cors: true, strictPort: true },
  preview: { port: 8087, cors: true, strictPort: true }
}));
