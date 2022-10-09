import { UserState } from './interface/userState'

export const useUserStore = defineStore('userStore', {
    state(): UserState {
        return {
            token: '',
        }
    },
    actions: {
        setToken(token: string): void {
            this.token = token
        },
    },
})
