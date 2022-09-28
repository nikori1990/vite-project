import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    envDir: './env', //环境变量的目录
    envPrefix: ['VITE', 'NIKO'], //环境变量支持的前缀
    server: {
        port: 3000,
        strictPort: true
    },
    plugins: [vue()]
})
