import { CSSOptions } from 'vite'
const css = {
    preprocessorOptions: {
        scss: { additionalData: '@use "@/styles/element-plus/index.scss" as *;' },
    },
} as CSSOptions
export default css
