import { resolve } from 'path'

import { Plugin } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

export default (plugins: Plugin[], isBuild: boolean) => {
    plugins.push(
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
        })
    )
}
