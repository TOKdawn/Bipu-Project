import { UserConfig,ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { loadEnv } from 'vite';
import { resolve } from 'path';

import { wrapperEnv } from './build/utils';

import pkg from './package.json'; 
import moment from 'moment';

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}
const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
};
  
export default ({ command, mode }: ConfigEnv): UserConfig =>{
    const root = process.cwd();
    const env = loadEnv(mode, root);
    const viteEnv = wrapperEnv(env);
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv;

    return{
        base: VITE_PUBLIC_PATH, 
        root,
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
            port: VITE_PORT, // 默认是 3000 端口
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
          build: {
            target: 'es2015',
            terserOptions: {
              compress: {
                keep_infinity: true,
                // Used to delete console in production environment
                drop_console: VITE_DROP_CONSOLE,
              },
            },
            // Turning off brotliSize display can slightly reduce packaging time
            brotliSize: false,
            chunkSizeWarningLimit: 1500,
          },
          plugins: [vue()],
    }

}