import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
=======
  build: {
    emptyOutDir: true,
    outDir: '../BACK/dist'
  },
  plugins: [react()],
  server: {
    host: true
  }
>>>>>>> dev
})
