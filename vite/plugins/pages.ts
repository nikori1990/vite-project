import { Plugin } from 'vite'

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default (plugins: Plugin[]) => {
    plugins.push(Pages(), Layouts())
}
