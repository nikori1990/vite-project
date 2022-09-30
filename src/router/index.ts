import { createRouter, createWebHistory } from 'vue-router'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import NProgress from '@/config/nprogress'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 设置页面title。防止路由跳转失败的可能，建议在路由切换完成后再设置title
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

// 全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to) => {
    NProgress.done()
})

export default router
