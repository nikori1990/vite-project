import http from '@/api/http'

export function login(data: LoginData) {
    return http.post<string>('/api/v1/login', data, { showLoading: false })
}
