import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    envDir: './env', //环境变量的目录
    envPrefix: ['VITE', 'NIKO'], //环境变量支持的前缀
    server: {
        port: 3000,
        strictPort: true,
    },
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)), // 引用别名
        },
    },
})
