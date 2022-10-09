import { Recordable } from 'vite-plugin-mock'

export function success<T = Recordable>(data: T, { msg = 'SUCCESS' } = {}) {
    return {
        code: 200,
        data,
        msg,
    }
}

export function error(msg = 'Request failed', { code = 0, result = null } = {}) {
    return {
        code,
        result,
        msg,
        type: 'error',
    }
}
