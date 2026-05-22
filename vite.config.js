import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
// build: {
//   minify: 'terser',
// terserOptions: { compress: { drop_console: true } },
//   outDir: 'dist',
//   rollupOptions: {
//     output: {
//       manualChunks(id) {
//         if (id.includes('node_modules')) {
//           if (id.includes('recharts')) return 'recharts';
//           if (id.includes('react-router')) return 'router';
//           if (id.includes('axios')) return 'axios';
//           if (id.includes('react')) return 'react';
//           return 'vendor';
          
//         }
//       },
//     },
//   },
// },
// })
