import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path for deployment. If deploying to a root path (like on Vercel or Netlify), you can leave this as '/'.
  base: '/techRaft/',  // Change '/techRaft/' if deploying at the root or on a different subdirectory
  
  plugins: [react()],

  // Optional: Configure the build output directory if you want to specify a custom directory
  build: {
    outDir: 'dist', // Default output directory
    sourcemap: true, // Helpful for debugging
  },

  // Optional: Define server settings if you want to test locally with specific configurations
  server: {
    port: 3000, // Set your local dev server port
    open: true, // Opens the app in the browser on start
  },
});
