import { Plugin } from 'vite'

import vue from './vue'
import autoImport from './autoImport'
import pages from './pages'
import svgIcon from './svgIcon'
import mock from './mock'

const plugins: Plugin[] = []
export default function setupPlugins(isBuild: boolean) {
    vue(plugins)
    autoImport(plugins)
    pages(plugins)
    svgIcon(plugins)
    mock(plugins, isBuild)
    return plugins
}
