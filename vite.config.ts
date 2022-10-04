/**
 * @type {import('vite').UserConfig}
 */

import { resolve } from 'path'

// import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { ElementPlusResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import WindiCSS from 'vite-plugin-windicss'

import css from './vite/css'

import { viteMockServe } from 'vite-plugin-mock'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

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
            vue(),
            vueJsx(),
            Pages(),
            Layouts(),
            WindiCSS(),
            AutoImport({
                // Auto import functions from Vue, e.g. ref, reactive, toRef...
                // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
                imports: [
                    'vue',
                    'vue-router',
                    'pinia',
                    {
                        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
                    },
                ], // 自动导入vue和vue-router相关函数

                dirs: ['src/composables'], // 自定义文件夹自动按需引入
                dts: 'types/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明

                // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
                // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                resolvers: [
                    ElementPlusResolver(),
                    // Auto import icon components
                    // 自动导入图标组件
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
            }),
            Components({
                resolvers: [
                    // Auto register icon components
                    // 自动注册图标组件
                    IconsResolver({
                        enabledCollections: ['ep'],
                    }),
                    ElementPlusResolver({
                        importStyle: 'sass',
                    }),
                    NaiveUiResolver(),
                ],
                dts: 'types/components.d.ts',
            }),
            Icons({
                autoInstall: true,
            }),
            ElementPlus({
                useSource: true,
            }),
            viteMockServe({
                // ignore: /^\_/,
                mockPath: 'mock',
                localEnabled: !isBuild,
                prodEnabled: isBuild,
                //  这样可以控制关闭mock的时候不让mock打包到最终代码内
                injectCode: ` import { setupProdMockServer } from './mockProdServer';
                    setupProdMockServer(); `,
                injectFile: resolve('src/main.ts'),
                logger: true,
            }),
            createSvgIconsPlugin({
                // 指定要缓存的文件夹
                iconDirs: [resolve(process.cwd(), 'src/icons')],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]',
            }),
        ],
        resolve: {
            alias: {
                // '@': fileURLToPath(new URL('./src', import.meta.url)), // 引用别名
                '@': resolve(__dirname, 'src'), // 引用别名
            },
        },
        css,
    }
})
