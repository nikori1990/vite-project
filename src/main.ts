import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import 'element-plus/dist/index.css'

import router from './router'
import pinia from './pinia'

import '@/styles/index.scss'
import 'normalize.css/normalize.css'
import 'virtual:windi.css'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
