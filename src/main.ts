import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import 'element-plus/dist/index.css'

import router from './router'
import pinia from './pinia'

import '@/styles/main.scss'
import 'normalize.css/normalize.css'
import 'virtual:windi.css'
// import 'virtual:svg-icons-register'

import plugins from '@/plugins'

const app = createApp(App)
plugins(app)
app.use(router)
app.use(pinia)
app.mount('#app')
