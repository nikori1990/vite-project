/**
 * @type {import('vite').UserConfig}
 */

import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import css from './vite/css'

import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
    const root = process.cwd()

    const env = loadEnv(mode, root)

    // const viteEnv = wrapperEnv(env)

    // const { VITE_PORT, VITE_PROXY, VITE_LEGACY, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv

    const isBuild = command === 'build' // TODO command是否只有2种

    return {
        envDir: './env', //环境变量的目录
        envPrefix: ['VITE', 'NIKO'], //环境变量支持的前缀
        server: {
            port: 3000,
            strictPort: true,
        },
        plugins: [
            Pages(),
            vue(),
            vueJsx(),
            AutoImport({
                imports: ['vue', 'vue-router'], // 自动导入vue和vue-router相关函数
                dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            ElementPlus({
                useSource: true,
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)), // 引用别名
            },
        },
        css,
    }
})
