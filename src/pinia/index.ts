import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
import Cookies from 'js-cookie'

const pinia = createPinia()
pinia.use(
    createPersistedState({
        storage: Cookies,
    })
)

export default pinia
