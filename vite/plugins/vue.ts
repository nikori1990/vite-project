import { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Inspect from 'vite-plugin-inspect'

export default (plugins: Plugin[]) => {
    plugins.push(vue(), vueJsx(), Inspect())
}
