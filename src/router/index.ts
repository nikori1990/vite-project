import { createRouter, createWebHistory } from 'vue-router'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import NProgress from '@/config/nprogress'

const routes = setupLayouts(generatedRoutes)

import { useUserStore } from '@/store/userStore'

const router = createRouter({
    linkActiveClass: 'router-active',
    history: createWebHistory(),
    routes,
})

const whiteList = ['/login']

// 设置页面title。防止路由跳转失败的可能，建议在路由切换完成后再设置title
router.beforeEach((to, from, next) => {
    NProgress.start()

    const { token } = useUserStore()
    if (!token) {
        // 判断是否需要登录权限
        if (whiteList.includes(to.path) || to.path.includes('/redirect/')) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
        return
    }

    console.log('token :>> ', token)
    // 已经登录过，访问login路径，重定向到首页
    if (to.path === '/login') {
        next({ path: '/' })
    }
    next()
})

// 全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to) => {
    NProgress.done()
})

export default router
