/**
 * @type {import('vite').UserConfig}
 */

import { resolve } from 'path'

import css from './vite/css'
import WindiCSS from 'vite-plugin-windicss'

import setupPlugins from './vite/plugins'

// import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
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
        plugins: [...setupPlugins(isBuild), WindiCSS()],
        resolve: {
            alias: {
                // '@': fileURLToPath(new URL('./src', import.meta.url)), // 引用别名
                '@': resolve(__dirname, 'src'), // 引用别名
            },
        },
        css,
    }
})
