import { App } from 'vue'

export default (app: App) => {
    register(app, import.meta.glob('./**/index.ts', { eager: true }))
}

function register(app: App, modules: Record<string, any>) {
    Object.entries(modules).map(([, module]) => {
        module.default(app)
    })
}
