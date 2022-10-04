import { Plugin } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import {
    ElementPlusResolver,
    NaiveUiResolver,
    VueUseComponentsResolver,
} from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// 自动导入插件
export default (plugins: Plugin[]) => {
    plugins.push(
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
            // eslintrc: {
            //     enabled: true,
            //     filepath: './.eslintrc-auto-import.json',
            //     globalsPropValue: true,
            // },

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
                VueUseComponentsResolver(),
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
        })
    )
}
