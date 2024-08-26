import { defineConfig } from 'vite'
import postcss from 'postcss-unicode'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  build: {
    outDir: './public',
    emptyOutDir: true, // also necessary

    rollupOptions: {
        output: {
          entryFileNames : "[name].js",
          assetFileNames : (chunkInfo) => {
            if (chunkInfo.name.endsWith('.css')){
              return '[name][extname]'
            }
            return '[name][extname]'
          }
        },
    },
    write: true,
	},
  css: {
    postcss: {
     plugins: [
       postcss
     ]
   }
  }
})
