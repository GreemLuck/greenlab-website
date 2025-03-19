import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteImageOptimizer({
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 60,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 60,
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: false,
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 60,
      },
    }),
  ],
})
