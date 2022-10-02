import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules: Record<string, any> = import.meta.glob('/mock/*.ts', { eager: true })

const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
    if (key.includes('/_')) {
        return
    }
    mockModules.push(...modules[key].default)
})

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
    createProdMockServer(mockModules)
}
