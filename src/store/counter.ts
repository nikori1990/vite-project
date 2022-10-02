export const useCounterStore = defineStore('counter', {
    state() {
        return {
            number: 1,
        }
    },
    actions: {
        inc() {
            this.number++
        },
    },
})
