import { defineConfig,ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (pathStr: string): string => {
  return resolve(__dirname, '.', pathStr)
}

export default defineConfig({
    resolve: {
        alias: [
          // /@/xxxx => src/xxxx
          {
            find: /\/@\//,
            replacement: pathResolve('src') + '/',
          },
          // /#/xxxx => types/xxxx
          {
            find: /\/#\//,
            replacement: pathResolve('types') + '/',
          },
        ],
    },
  server: {
    port: 8000, // 默认是 3000 端口
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://',
        changeOrigin: true,
        ws: false,
        secure: false,
        ignorePath: true,
      },
    },
  },
  plugins: [vue()],
})