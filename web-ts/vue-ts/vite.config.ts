import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/web-cv-ts/',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    assetsInlineLimit: 0, // Don't inline any assets
    minify: false, // Không sử dụng minify để tránh lỗi JavaScript
    sourcemap: true, // Thêm sourcemap để dễ debug
    terserOptions: {
      compress: {
        // Tắt một số tối ưu hóa có thể gây ra lỗi
        drop_console: false,
        drop_debugger: false,
        pure_funcs: []
      },
      mangle: {
        // Giữ tên các thuộc tính của class
        keep_classnames: true,
        keep_fnames: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split the code into chunks to avoid large files
          if (id.includes('node_modules')) {
            if (id.includes('vue-toastification')) {
              return 'vendor-toast';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  // Explicitly add the PDF file to the build
  assetsInclude: ['**/*.pdf']
})
