import Cookies from 'js-cookie'

const TOKEN_KEY = 'X-Token'

export function getToken(): string {
    return Cookies.get(TOKEN_KEY) || ''
}

export function setToken(token: string): void {
    Cookies.set(TOKEN_KEY, token, { expires: 7 }) // 设置cookie过期时间为7天以后
}

export function removeToken(): void {
    Cookies.remove(TOKEN_KEY)
}
