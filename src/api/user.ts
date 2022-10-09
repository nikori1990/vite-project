import http from '@/api/http'

export function login(data: LoginData) {
    return http.post<string>('/api/user/login', data, { showLoading: false })
}
